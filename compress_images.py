from PIL import Image, ImageFilter
import os

BACKGROUND_COLOR = (11, 58, 62)

files = ["person1.jpg", "person2.jpg", "person3.jpg"]
input_dir = "public"

for filename in files:
    path = os.path.join(input_dir, filename)
    img = Image.open(path).convert("RGBA")

    r, g, b, a = img.split()
    # Stärker eroderen, um die weiß-kontaminierte Randlinie
    # vollständig zu entfernen (statt nur zu verkleinern).
    a = a.filter(ImageFilter.MinFilter(13))
    img = Image.merge("RGBA", (r, g, b, a))

    background = Image.new("RGBA", img.size, BACKGROUND_COLOR + (255,))
    combined = Image.alpha_composite(background, img).convert("RGB")

    combined.save(path, "JPEG", quality=85, optimize=True, subsampling=0)
    print(f"{filename}: fertig, neue Größe: {os.path.getsize(path) / 1024:.0f} KB")