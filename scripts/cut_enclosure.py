"""Cut gray metal enclosures (KUT300 complexes) from studio photos."""

from __future__ import annotations

from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / 'src/assets'
MAX_SIZE = 1600

BEZ220_NAME = 'Комплекс_КУТ300АК_БЕЗ220.jpg'


def sample_background(bgr: np.ndarray) -> np.ndarray:
    h, w = bgr.shape[:2]
    pad = max(24, min(h, w) // 20)
    samples = np.vstack([
        bgr[0:pad, 0:pad].reshape(-1, 3),
        bgr[0:pad, w - pad:w].reshape(-1, 3),
        bgr[h - pad:h, 0:pad].reshape(-1, 3),
        bgr[h - pad:h, w - pad:w].reshape(-1, 3),
    ])
    return np.median(samples, axis=0)


def local_texture(gray: np.ndarray, size: int = 7) -> np.ndarray:
    gray = gray.astype(np.float32)
    mean = cv2.blur(gray, (size, size))
    sqmean = cv2.blur(gray * gray, (size, size))
    return np.sqrt(np.maximum(sqmean - mean * mean, 0.0))


def keep_largest_connected(mask: np.ndarray) -> np.ndarray:
    count, labels, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=8)
    if count <= 1:
        return mask

    largest = 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))
    return ((labels == largest).astype(np.uint8) * 255)


def keep_main_component(mask: np.ndarray) -> np.ndarray:
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if not contours:
        return mask

    outer = max(contours, key=cv2.contourArea)
    cleaned = np.zeros(mask.shape[:2], np.uint8)
    cv2.drawContours(cleaned, [outer], -1, 255, thickness=cv2.FILLED)
    return cleaned


def flood_from_border(seed: np.ndarray) -> np.ndarray:
    h, w = seed.shape[:2]
    flood = np.zeros((h + 2, w + 2), np.uint8)
    filled = seed.copy()
    step = max(4, min(h, w) // 120)

    for x in range(0, w, step):
        for y in (0, h - 1):
            if filled[y, x] > 0:
                cv2.floodFill(
                    filled,
                    flood,
                    (x, y),
                    255,
                    loDiff=(0, 0, 0),
                    upDiff=(0, 0, 0),
                    flags=4 | cv2.FLOODFILL_MASK_ONLY | (255 << 8),
                )

    for y in range(0, h, step):
        for x in (0, w - 1):
            if filled[y, x] > 0:
                cv2.floodFill(
                    filled,
                    flood,
                    (x, y),
                    255,
                    loDiff=(0, 0, 0),
                    upDiff=(0, 0, 0),
                    flags=4 | cv2.FLOODFILL_MASK_ONLY | (255 << 8),
                )

    return (flood[1:-1, 1:-1] > 0).astype(np.uint8) * 255


def build_body_seed(
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
    val: np.ndarray,
) -> np.ndarray:
    return (
        ((dist_bg > 26) & (tex > 5.8))
        | (tex > 9.5)
        | (sat > 88)
        | (val < 92)
        | ((val > 232) & (sat < 42))
    ).astype(np.uint8) * 255


def attach_mounting_feet(
    body: np.ndarray,
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
) -> np.ndarray:
    coords = cv2.findNonZero(body)
    if coords is None:
        return body

    _, y, _, bh = cv2.boundingRect(coords)
    h = body.shape[0]
    feet_top = max(0, y + bh - int(bh * 0.16))
    feet_zone = np.zeros_like(body)
    feet_zone[feet_top:, :] = 255

    bridge = cv2.dilate(
        body,
        cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (21, 21)),
        iterations=2,
    )
    feet_like = (
        (feet_zone > 0)
        & (bridge > 0)
        & (dist_bg > 13.5)
        & (dist_bg < 44)
        & (tex < 9.5)
        & (sat < 68)
    ).astype(np.uint8) * 255

    combined = cv2.bitwise_or(body, feet_like)
    close_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    combined = cv2.morphologyEx(combined, cv2.MORPH_CLOSE, close_kernel, iterations=1)
    return keep_main_component(combined)


def body_bottom_y(body: np.ndarray) -> int:
    coords = cv2.findNonZero(body)
    if coords is None:
        return body.shape[0]

    _, y, _, bh = cv2.boundingRect(coords)
    return y + bh


def shadow_like(
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
    val: np.ndarray,
) -> np.ndarray:
    return (
        (dist_bg > 18)
        & (dist_bg < 98)
        & (tex < 5.8)
        & (sat < 58)
        & (val < 201)
    )


def remove_studio_regions(
    mask: np.ndarray,
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
    val: np.ndarray,
    body_bottom: int,
) -> np.ndarray:
    y_idx = np.arange(mask.shape[0])[:, None]
    below_body = y_idx >= body_bottom - 8
    shadows = shadow_like(dist_bg, tex, sat, val)

    studio = (
        ((dist_bg < 46) & (tex < 5.8) & (sat < 62) & (val > 112))
        | (below_body & shadows)
    ).astype(np.uint8) * 255

    flooded = flood_from_border(studio)

    cleaned = cv2.bitwise_and(mask, cv2.bitwise_not(flooded))
    inner_shadow = (cleaned > 0) & (y_idx >= body_bottom - 14) & shadows
    cleaned[inner_shadow] = 0
    return cleaned


def peel_fringe(
    mask: np.ndarray,
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
    val: np.ndarray,
    passes: int = 42,
) -> np.ndarray:
    cleaned = mask.copy()
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))

    protected = (
        (tex > 8.5)
        | (sat > 82)
        | (val < 88)
        | ((val > 228) & (sat < 50))
        | (dist_bg > 62)
    )

    for _ in range(passes):
        eroded = cv2.erode(cleaned, kernel, iterations=1)
        boundary = cv2.subtract(cleaned, eroded)
        if cv2.countNonZero(boundary) == 0:
            break

        removable = (
            (boundary > 0)
            & (~protected)
            & (dist_bg < 48)
            & (tex < 6.5)
            & (sat < 70)
        )
        if not np.any(removable):
            break
        cleaned[removable] = 0

    return cleaned


def remove_masked_studio_islands(
    mask: np.ndarray,
    dist_bg: np.ndarray,
    tex: np.ndarray,
    sat: np.ndarray,
    val: np.ndarray,
    body_bottom: int,
) -> np.ndarray:
    h = mask.shape[0]
    y_idx = np.arange(h)[:, None]
    protected = (
        (sat > 82)
        | (val < 88)
        | ((val > 228) & (sat < 50))
        | (tex > 8.5)
    )

    top_studio = (
        (mask > 0)
        & (y_idx < int(h * 0.34))
        & (~protected)
        & (dist_bg < 42)
        & (tex < 6.5)
        & (sat < 68)
        & (val > 176)
    ).astype(np.uint8) * 255

    bottom_studio = (
        (mask > 0)
        & (y_idx >= body_bottom - 18)
        & (~protected)
        & shadow_like(dist_bg, tex, sat, val)
    ).astype(np.uint8) * 255

    flooded = cv2.bitwise_or(
        flood_from_border(top_studio),
        flood_from_border(bottom_studio),
    )
    cleaned = cv2.bitwise_and(mask, cv2.bitwise_not(flooded))
    cleaned[top_studio > 0] = 0
    cleaned[bottom_studio > 0] = 0
    return cleaned


def remove_bottom_spurs(mask: np.ndarray) -> np.ndarray:
    h, _ = mask.shape[:2]
    cleaned = mask.copy()

    for split_y in range(int(h * 0.78), int(h * 0.9), 6):
        roi = cleaned[split_y:, :]
        count, labels, stats, _ = cv2.connectedComponentsWithStats(roi, connectivity=8)
        roi_clean = cleaned[split_y:, :]

        for idx in range(1, count):
            area = stats[idx, cv2.CC_STAT_AREA]
            bw = stats[idx, cv2.CC_STAT_WIDTH]
            bh = stats[idx, cv2.CC_STAT_HEIGHT]
            if (
                bh >= 60
                and bw <= 45
                and area < 4000
                and bh / max(bw, 1) >= 2.2
            ):
                roi_clean[labels == idx] = 0

        cleaned[split_y:, :] = roi_clean

    return cleaned


def build_enclosure_mask(bgr: np.ndarray, bg: np.ndarray) -> np.ndarray:
    gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)
    tex = local_texture(gray)

    body = build_body_seed(dist_bg, tex, sat, val)
    body = cv2.morphologyEx(
        body,
        cv2.MORPH_CLOSE,
        cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (13, 13)),
        iterations=2,
    )
    body = keep_main_component(body)
    enclosure_bottom = body_bottom_y(body)
    body = attach_mounting_feet(body, dist_bg, tex, sat)

    device = remove_studio_regions(body, dist_bg, tex, sat, val, enclosure_bottom)
    device = peel_fringe(device, dist_bg, tex, sat, val, passes=36)
    device = remove_masked_studio_islands(device, dist_bg, tex, sat, val, enclosure_bottom)
    device = remove_studio_regions(device, dist_bg, tex, sat, val, enclosure_bottom)
    device = peel_fringe(device, dist_bg, tex, sat, val, passes=28)
    device = remove_masked_studio_islands(device, dist_bg, tex, sat, val, enclosure_bottom)
    return keep_largest_connected(device)


def crop_to_mask(rgba: np.ndarray, pad: int = 12) -> np.ndarray:
    alpha = rgba[:, :, 3]
    coords = cv2.findNonZero(alpha)
    if coords is None:
        return rgba

    x, y, bw, bh = cv2.boundingRect(coords)
    x0 = max(0, x - pad)
    y0 = max(0, y - pad)
    x1 = min(rgba.shape[1], x + bw + pad)
    y1 = min(rgba.shape[0], y + bh + pad)
    return rgba[y0:y1, x0:x1]


def cut_enclosure(input_path: Path, output_path: Path) -> None:
    pil_img = Image.open(input_path).convert('RGB')
    bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    h, w = bgr.shape[:2]
    scale = min(1.0, MAX_SIZE / max(h, w))
    if scale < 1.0:
        bgr = cv2.resize(bgr, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)

    bg = sample_background(bgr)
    device = build_enclosure_mask(bgr, bg)

    rgba = cv2.cvtColor(bgr, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = device
    rgba = crop_to_mask(rgba)

    alpha = remove_bottom_spurs(rgba[:, :, 3])
    rgba[:, :, 3] = alpha
    rgba = crop_to_mask(rgba)

    cv2.imencode('.png', rgba)[1].tofile(str(output_path))
    print(f'saved {output_path.name} size={rgba.shape[1]}x{rgba.shape[0]}')


if __name__ == '__main__':
    input_path = ASSETS / BEZ220_NAME
    output_path = ASSETS / BEZ220_NAME.replace('.jpg', '.png')
    cut_enclosure(input_path, output_path)
