"""Restore БИЗ-ИП9.png to the first green-contour version."""
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

input_path = Path(__file__).resolve().parents[1] / 'src/assets/БИЗ-ИП9.jpg'
output_path = Path(__file__).resolve().parents[1] / 'src/assets/БИЗ-ИП9.png'
MAX_SIZE = 1600

pil_img = Image.open(input_path).convert('RGB')
bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

h, w = bgr.shape[:2]
scale = min(1.0, MAX_SIZE / max(h, w))
if scale < 1.0:
    bgr = cv2.resize(bgr, (int(w * scale), int(h * scale)), interpolation=cv2.INTER_AREA)

h, w = bgr.shape[:2]
hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)

lower_green = np.array([32, 35, 35])
upper_green = np.array([92, 255, 255])
green = cv2.inRange(hsv, lower_green, upper_green)

close_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
green = cv2.morphologyEx(green, cv2.MORPH_CLOSE, close_kernel, iterations=4)
green = cv2.dilate(green, close_kernel, iterations=1)

contours, _ = cv2.findContours(green, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if not contours:
    raise SystemExit('Green contour not found')

outer = max(contours, key=cv2.contourArea)
fg_mask = np.zeros((h, w), np.uint8)
cv2.drawContours(fg_mask, [outer], -1, 255, thickness=cv2.FILLED)

alpha = cv2.GaussianBlur(fg_mask, (3, 3), 0)

rgba = cv2.cvtColor(bgr, cv2.COLOR_BGR2BGRA)
rgba[:, :, 3] = alpha

coords = cv2.findNonZero(alpha)
if coords is not None:
    x, y, bw, bh = cv2.boundingRect(coords)
    pad = 12
    x0 = max(0, x - pad)
    y0 = max(0, y - pad)
    x1 = min(w, x + bw + pad)
    y1 = min(h, y + bh + pad)
    rgba = rgba[y0:y1, x0:x1]

cv2.imencode('.png', rgba)[1].tofile(str(output_path))
print(f'saved {output_path.name} size={rgba.shape[1]}x{rgba.shape[0]}')
