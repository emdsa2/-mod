import os
from PIL import Image

png_files = [f for f in os.listdir('.') if f.endswith('.png')]

for file in png_files:
    with Image.open(file) as img:
        if img.mode != 'RGBA':
            print(f"ERR: {file} is not RGBA mode")
            continue
        pixels = img.load()
        width, height = img.size

        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                if a / 255.0 > 0.5:
                    pixels[x, y] = (r, g, b, 255)
                else:
                    pixels[x, y] = (r, g, b, 0)

        img.save(file)
