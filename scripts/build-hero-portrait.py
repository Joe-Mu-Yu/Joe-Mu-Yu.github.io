#!/usr/bin/env python3
"""Turn the generated screen-print portrait into a transparent hero cutout.

The generated PNG has a checkerboard board baked into the pixels (mode RGB,
no alpha channel). The figure is black ink on that board, so a clean cutout
can be recovered by mapping pixel luminance to alpha, then cropping.

Run: python3 scripts/build-hero-portrait.py
Input lives outside the repo under $CODEX_HOME/generated_images, so this script
only runs when regenerating the asset; the committed output is
 public/hero-portrait.webp.
"""

from pathlib import Path

from PIL import Image, ImageFilter

SOURCE = Path(
    "/Users/morgan/.codex/generated_images/01a11e9f-27a4-7720-b556-c25e4c3e3bf3"
    "/exec-ed3a4abd-2eb1-4161-9935-41079b081e56.png"
)
TARGET = Path(__file__).resolve().parent.parent / "public" / "hero-portrait.webp"

# Board squares sit at luma ~255 and ~204; ink runs from mid-grey to black.
# Anything at or above the ceiling is background, everything below is ink.
INK_CEILING = 190.0
GAMMA = 0.8
TARGET_HEIGHT = 880
# Alpha below this is treated as paper speckle rather than ink, so it can be
# zeroed before cropping. Without it, stray dots on the frame edge survive and
# the bounding box stays stuck to the full image width.
SPECKLE_ALPHA = 14
# Ink tone stored in the L channel. CSS can re-tint the figure per theme by
# layering the mask over a coloured box, so this is just the default.
INK_TONE = 20
# 32 greyscale levels preserve the coarse halftone dot screen while cutting the
# payload well below an 8-bit greyscale PNG.
LEVELS = 32


def flatten_to_mask(alpha: Image.Image) -> Image.Image:
    """Collapse the cutout to an LA image: flat ink plus a coverage channel.

    L is constant so the ink stays a single tone, and A carries the halftone
    screen. Keeping it LA rather than RGBA avoids storing three identical
    colour channels per pixel, and it renders correctly both as a plain
    <img> and under CSS mask-image (which defaults to alpha mode for images).
    """
    cleaned = alpha.point(lambda v: 0 if v < SPECKLE_ALPHA else v)
    trimmed = cleaned.getbbox()
    if trimmed is None:
        raise SystemExit("foreground vanished after speckle removal")
    cleaned = cleaned.crop(trimmed)

    scale = TARGET_HEIGHT / cleaned.height
    resized = cleaned.resize(
        (max(1, round(cleaned.width * scale)), TARGET_HEIGHT), Image.LANCZOS
    )
    coverage = resized.quantize(colors=LEVELS, method=Image.MEDIANCUT, dither=Image.NONE)
    coverage = coverage.convert("L")
    # RGBA rather than LA: the WebP encoder needs real colour channels, and the
    # halftone noise compresses far better here than PNG manages.
    ink = Image.new("RGBA", resized.size, (INK_TONE, INK_TONE, INK_TONE - 1, 0))
    ink.putalpha(coverage)
    return ink


def main() -> None:
    source = Image.open(SOURCE).convert("RGB")
    luma = source.convert("L")

    def ramp(value: int) -> int:
        if value >= INK_CEILING:
            return 0
        ratio = (INK_CEILING - value) / INK_CEILING
        return int(255 * ratio**GAMMA)

    alpha = Image.eval(luma, ramp).filter(ImageFilter.GaussianBlur(0.4))

    ink = Image.new("RGBA", source.size, (16, 16, 15, 0))
    ink.putalpha(alpha)

    bbox = ink.getbbox()
    if bbox is None:
        raise SystemExit("no foreground detected - refusing to write an empty asset")

    cropped = ink.crop(bbox)
    scale = TARGET_HEIGHT / cropped.height
    resized = cropped.resize(
        (max(1, round(cropped.width * scale)), TARGET_HEIGHT), Image.LANCZOS
    )

    TARGET.parent.mkdir(parents=True, exist_ok=True)
    flattened = flatten_to_mask(alpha)
    flattened.save(TARGET, "WEBP", quality=82, method=6)
    kb = TARGET.stat().st_size // 1024
    print(f"source {source.size} bbox={bbox} -> {flattened.size} -> {TARGET} ({kb} KB)")


if __name__ == "__main__":
    main()
