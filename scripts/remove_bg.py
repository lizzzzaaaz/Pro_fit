from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / 'src/assets'
MAX_SIZE = 1600

OTHER_FILES = [
    'БИЗ-ИП9.jpg',
    'ПРОФ-А8Д8.jpg',
    'ПРОФ-Н4.jpg',
]

PATCH_FILES = [
    'ПРОФ-А4Д4.jpg',
    'БИЗ-ИП9.jpg',
]


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


def green_dominance(bgr: np.ndarray) -> np.ndarray:
    b, g, r = cv2.split(bgr)
    return g.astype(np.int16) - np.maximum(r.astype(np.int16), b.astype(np.int16))


def build_gold_parts(bgr: np.ndarray, seed_mask: np.ndarray, bg: np.ndarray) -> np.ndarray:
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    b, g, r = cv2.split(bgr)
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)

    brass = (
        (r.astype(np.int16) - b.astype(np.int16) > 45)
        & (r > 115)
        & (g > 85)
        & (b < 100)
    )
    gold_hsv = cv2.inRange(hsv, (12, 55, 90), (32, 255, 255))
    gold = ((brass | (gold_hsv > 0)).astype(np.uint8) * 255)

    bridge = cv2.dilate(
        seed_mask,
        cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (35, 35)),
        iterations=1,
    )
    ys = np.where(seed_mask > 0)[0]
    if len(ys) == 0:
        return np.zeros_like(seed_mask)
    bottom_y = ys.min() + (ys.max() - ys.min()) * 0.62

    attached = np.zeros_like(gold)
    count, labels, stats, _ = cv2.connectedComponentsWithStats(gold, connectivity=8)
    for idx in range(1, count):
        area = stats[idx, cv2.CC_STAT_AREA]
        if area < 70 or area > 7000:
            continue

        y = stats[idx, cv2.CC_STAT_TOP]
        h = stats[idx, cv2.CC_STAT_HEIGHT]
        cy = y + h / 2
        part = ((labels == idx).astype(np.uint8) * 255)
        touches_seed = cv2.countNonZero(cv2.bitwise_and(part, bridge)) > 0
        in_bottom = cy >= bottom_y

        if touches_seed or in_bottom:
            attached = cv2.bitwise_or(attached, part)

    bottom_band = np.zeros_like(seed_mask)
    bottom_band[int(bottom_y):, :] = 255

    strong_warm = (
        (r.astype(np.int16) - b.astype(np.int16) > 18)
        & (g.astype(np.int16) - b.astype(np.int16) > 10)
        & (r > 68)
        & (g > 58)
    )
    wide_gold_hsv = cv2.inRange(hsv, (8, 38, 58), (42, 255, 255))
    studio_gray = (dist_bg < 38) & (green_dominance(bgr) < 13) & (hsv[:, :, 1] < 72)
    metal_mask = (
        (strong_warm | (wide_gold_hsv > 0))
        & (bottom_band > 0)
        & (~studio_gray)
    ).astype(np.uint8) * 255

    grown = attached.copy()
    grow_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    for _ in range(18):
        dilated = cv2.dilate(grown, grow_kernel, iterations=1)
        new_pixels = cv2.bitwise_and(dilated, metal_mask)
        new_pixels = cv2.subtract(new_pixels, grown)
        if cv2.countNonZero(new_pixels) == 0:
            break
        grown = cv2.bitwise_or(grown, new_pixels)

    close_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    grown = cv2.morphologyEx(grown, cv2.MORPH_CLOSE, close_kernel, iterations=2)

    gray_on_metal = (
        (grown > 0)
        & (dist_bg < 40)
        & (green_dominance(bgr) < 14)
        & (hsv[:, :, 1] < 74)
        & (~strong_warm)
    )
    grown[gray_on_metal] = 0
    return cv2.morphologyEx(grown, cv2.MORPH_CLOSE, close_kernel, iterations=1)


def flood_background_mask(bgr: np.ndarray, bg: np.ndarray) -> np.ndarray:
    h, w = bgr.shape[:2]
    dom = green_dominance(bgr)
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)

    bg_like = ((dist_bg < 44) & (dom < 16)) | ((sat < 68) & (dom < 12) & (val > 92))
    candidates = bg_like.astype(np.uint8) * 255

    flood = np.zeros((h + 2, w + 2), np.uint8)
    filled = candidates.copy()
    step = max(4, min(h, w) // 120)

    for x in range(0, w, step):
        for y in (0, h - 1):
            if filled[y, x] > 0:
                cv2.floodFill(
                    filled,
                    flood,
                    (x, y),
                    255,
                    loDiff=(10, 10, 10),
                    upDiff=(10, 10, 10),
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
                    loDiff=(10, 10, 10),
                    upDiff=(10, 10, 10),
                    flags=4 | cv2.FLOODFILL_MASK_ONLY | (255 << 8),
                )

    foreground = (flood[1:-1, 1:-1] == 0).astype(np.uint8) * 255
    contours, _ = cv2.findContours(foreground, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if not contours:
        raise RuntimeError('Device silhouette not found')

    outer = max(contours, key=cv2.contourArea)
    device = np.zeros((h, w), np.uint8)
    cv2.drawContours(device, [outer], -1, 255, thickness=cv2.FILLED)
    return device


def remove_gray_residue(
    bgr: np.ndarray,
    mask: np.ndarray,
    bg: np.ndarray,
    gold: np.ndarray,
) -> np.ndarray:
    dom = green_dominance(bgr)
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)

    protected = (
        (gold > 0)
        | (dom > 15)
        | ((val > 145) & (sat < 82))
        | ((val < 65) & (sat < 75))
    )

    dist_in = cv2.distanceTransform(mask, cv2.DIST_L2, 5)
    outer = (dist_in > 0) & (dist_in <= 14)

    ys = np.where(mask > 0)[0]
    bottom_band = np.zeros_like(mask)
    if len(ys) > 0:
        bottom_y = ys.min() + (ys.max() - ys.min()) * 0.55
        bottom_band[int(bottom_y):, :] = 255

    strong_bg = (dist_bg < 30) & (dom < 13) & (sat < 75)
    bottom_bg = bottom_band & (dist_bg < 40) & (dom < 15) & (sat < 78) & (gold == 0)
    soft_bg = outer & (dist_bg < 56) & (dom < 17) & (sat < 80) & (val > 80) & (val < 215)

    cleaned = mask.copy()
    cleaned[(cleaned > 0) & (strong_bg | bottom_bg | soft_bg) & (~protected)] = 0
    return cleaned


def peel_outer_fringe(bgr: np.ndarray, mask: np.ndarray, bg: np.ndarray, gold: np.ndarray) -> np.ndarray:
    dom = green_dominance(bgr)
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)

    cleaned = mask.copy()
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))

    for _ in range(28):
        eroded = cv2.erode(cleaned, kernel, iterations=1)
        boundary = cv2.subtract(cleaned, eroded)
        if cv2.countNonZero(boundary) == 0:
            break

        removable = (
            (boundary > 0)
            & (gold == 0)
            & (dom < 18)
            & (sat < 75)
            & (dist_bg < 55)
        )
        if not np.any(removable):
            break
        cleaned[removable] = 0

    return cleaned


def final_polish(
    bgr: np.ndarray,
    mask: np.ndarray,
    bg: np.ndarray,
    gold: np.ndarray,
) -> np.ndarray:
    dom = green_dominance(bgr)
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    sat = hsv[:, :, 1]
    val = hsv[:, :, 2]
    dist_bg = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)
    b, g, r = cv2.split(bgr)

    strong_warm = (
        (r.astype(np.int16) - b.astype(np.int16) > 18)
        & (g.astype(np.int16) - b.astype(np.int16) > 10)
        & (r > 68)
        & (g > 58)
    )

    dist_in = cv2.distanceTransform(mask, cv2.DIST_L2, 5)
    outer = (mask > 0) & (dist_in <= 14)

    protected = (
        ((gold > 0) & strong_warm)
        | (dom > 28)
        | ((val > 158) & (sat < 78))
        | ((val < 62) & (sat < 75))
    )

    fringe = outer & (gold == 0) & (~protected) & (dist_bg < 62) & (dom < 28) & (sat < 85)
    gold_halo = (
        outer
        & (gold > 0)
        & (~strong_warm)
        & (dist_bg < 38)
        & (dom < 12)
        & (sat < 68)
    )

    cleaned = mask.copy()
    cleaned[fringe | gold_halo] = 0
    return cleaned


def keep_main_component(mask: np.ndarray) -> np.ndarray:
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    if not contours:
        return mask

    outer = max(contours, key=cv2.contourArea)
    cleaned = np.zeros(mask.shape[:2], np.uint8)
    cv2.drawContours(cleaned, [outer], -1, 255, thickness=cv2.FILLED)
    return cleaned


def build_device_mask(bgr: np.ndarray, bg: np.ndarray) -> np.ndarray:
    device = flood_background_mask(bgr, bg)
    gold = build_gold_parts(bgr, device, bg)
    device = cv2.bitwise_or(device, gold)
    device = peel_outer_fringe(bgr, device, bg, gold)
    device = remove_gray_residue(bgr, device, bg, gold)
    device = peel_outer_fringe(bgr, device, bg, gold)
    device = final_polish(bgr, device, bg, gold)
    return keep_main_component(device)


def cut_product(input_path: Path, output_path: Path) -> None:
    pil_img = Image.open(input_path).convert('RGB')
    bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    h, w = bgr.shape[:2]
    scale = min(1.0, MAX_SIZE / max(h, w))
    if scale < 1.0:
        bgr = cv2.resize(bgr, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)

    bg = sample_background(bgr)
    device = build_device_mask(bgr, bg)

    rgba = cv2.cvtColor(bgr, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = device

    coords = cv2.findNonZero(device)
    if coords is not None:
        x, y, bw, bh = cv2.boundingRect(coords)
        pad = 10
        x0 = max(0, x - pad)
        y0 = max(0, y - pad)
        x1 = min(bgr.shape[1], x + bw + pad)
        y1 = min(bgr.shape[0], y + bh + pad)
        rgba = rgba[y0:y1, x0:x1]

    cv2.imencode('.png', rgba)[1].tofile(str(output_path))
    print(f'saved {output_path.name} size={rgba.shape[1]}x{rgba.shape[0]}')


if __name__ == '__main__':
    for name in PATCH_FILES:
        cut_product(ASSETS / name, ASSETS / name.replace('.jpg', '.png'))
