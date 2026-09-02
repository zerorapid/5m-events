from PIL import Image
import sys

img = Image.open('/Users/Jayapalreddy/.gemini/antigravity/brain/09617214-8116-43e4-a270-e16d5fa736e1/.user_uploaded/media_1788343360964.png')
w, h = img.size
print(f"Image size: {w}x{h}")

# check bottom left corner area (x: 0 to 400, y: h-400 to h)
# Let's find the exact bounding box of the dark square
bg_color = None
square_bbox = [w, h, 0, 0] # min_x, min_y, max_x, max_y

# we just sample a grid
for y in range(h-300, h, 10):
    for x in range(0, 300, 10):
        pixel = img.getpixel((x, y))
        print(f"({x},{y}): {pixel}")

