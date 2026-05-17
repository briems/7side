#!/usr/bin/env python3
"""Generate product photo views from a reference image using gpt-image-1, then
composite the real 7SIDE logo PNG on top for pixel-consistent branding.

Pipeline:
  1. gpt-image-1 edit endpoint generates a PLAIN garment (no logo).
  2. PIL pastes /public/logo-white.png at calibrated (x_frac, y_frac, width_frac)
     positions per view. This guarantees identical logo across every shot.

Usage:
    python gen-views.py <reference_image> --product tracksuit-black \
        --views jacket-only shorts-only flatlay

Reads OPENAI_API_KEY from scripts/.env or env.
"""
from __future__ import annotations

import argparse
import base64
import io
import os
import sys
from pathlib import Path

from openai import OpenAI
from PIL import Image

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
LOGO_PATH = PROJECT_ROOT / "public" / "logo-white.png"


def _load_env() -> None:
    env_file = SCRIPT_DIR / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


# Prompts generate the garment WITHOUT any chest/leg logo.
# The real logo PNG is composited on top in a second step.
VIEW_PROMPTS = {
    "flatlay": (
        "Flat lay product photograph: a plain pure-black hooded full-zip "
        "technical jacket and matching plain pure-black technical shorts, "
        "laid flat side by side on a clean light grey studio surface, "
        "top-down view, soft even lighting, no model, no props, no text, "
        "no logos, no graphics anywhere on the garments — completely blank "
        "fabric. Professional e-commerce streetwear flat lay style. "
        "Center the garments in frame with a small margin."
    ),
    "jacket-only": (
        "Product photograph: a plain pure-black hooded full-zip technical "
        "jacket on an invisible ghost mannequin, front view, centered in "
        "frame, clean light grey studio background, soft even lighting. "
        "No model, no shorts, no text, no logos, no graphics anywhere on "
        "the jacket — completely blank fabric. Professional e-commerce "
        "product photo, jacket fills about 70 percent of the frame height."
    ),
    "shorts-only": (
        "Product photograph: a pair of plain pure-black technical shorts "
        "on an invisible ghost mannequin, front view, centered in frame, "
        "clean light grey studio background, soft even lighting. No model, "
        "no jacket, no text, no logos, no graphics anywhere on the shorts "
        "— completely blank fabric. Professional e-commerce product photo."
    ),
    "model-front": (
        "Editorial streetwear photograph: a young attractive male model in "
        "his early twenties, light olive skin, short tidy dark hair, sharp "
        "jawline, neutral confident expression, wearing the EXACT SAME "
        "outfit shown in this reference image (plain pure-black hooded "
        "full-zip technical jacket and matching shorts) — but the garments "
        "must have NO text, NO logos, NO graphics anywhere — completely "
        "blank black fabric. Full body front view, hands relaxed at sides, "
        "clean light grey studio background, soft even lighting. "
        "Professional e-commerce streetwear lookbook photography."
    ),
}


# (x_frac, y_frac, width_frac, anchor) per view.
# x_frac / y_frac are the anchor point (0..1 of canvas).
# width_frac is logo width as fraction of canvas width.
# anchor is "center" for single placements.
# For flatlay we use a list of two placements (jacket chest + shorts leg).
LOGO_PLACEMENTS: dict[str, list[tuple[float, float, float]]] = {
    # jacket chest, right side, modest size
    "jacket-only": [(0.585, 0.305, 0.085)],
    # shorts leg, right side
    "shorts-only": [(0.605, 0.560, 0.085)],
    # flatlay: GPT placed jacket upper-left, shorts lower-right
    "flatlay": [
        (0.430, 0.330, 0.065),  # jacket chest (below the hood)
        (0.720, 0.650, 0.055),  # shorts leg (right leg of lower-right shorts)
    ],
    # model-front: standing model, chest at upper third, shorts mid-frame
    "model-front": [
        (0.580, 0.310, 0.055),  # jacket chest (right chest of model)
        (0.555, 0.640, 0.040),  # shorts leg (right leg of model)
    ],
}


def composite_logo(image_bytes: bytes, view: str) -> bytes:
    """Paste logo-white.png onto generated image at calibrated positions."""
    if view not in LOGO_PLACEMENTS:
        return image_bytes
    base = Image.open(io.BytesIO(image_bytes)).convert("RGBA")
    logo = Image.open(LOGO_PATH).convert("RGBA")
    W, H = base.size
    logo_w0, logo_h0 = logo.size
    aspect = logo_h0 / logo_w0
    for (xf, yf, wf) in LOGO_PLACEMENTS[view]:
        target_w = int(W * wf)
        target_h = int(target_w * aspect)
        resized = logo.resize((target_w, target_h), Image.LANCZOS)
        cx, cy = int(W * xf), int(H * yf)
        x = cx - target_w // 2
        y = cy - target_h // 2
        base.alpha_composite(resized, (x, y))
    out = io.BytesIO()
    base.convert("RGB").save(out, format="PNG", optimize=True)
    return out.getvalue()


def generate(client: OpenAI, ref: Path, view: str, out: Path, size: str) -> None:
    prompt = VIEW_PROMPTS[view]
    with ref.open("rb") as f:
        result = client.images.edit(
            model="gpt-image-1",
            image=f,
            prompt=prompt,
            size=size,
        )
    raw = base64.b64decode(result.data[0].b64_json)
    composed = composite_logo(raw, view)
    out.write_bytes(composed)
    print(f"  -> {out}")


def main() -> int:
    _load_env()
    if not os.environ.get("OPENAI_API_KEY"):
        print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
        return 1
    if not LOGO_PATH.exists():
        print(f"ERROR: logo not found at {LOGO_PATH}", file=sys.stderr)
        return 1

    parser = argparse.ArgumentParser()
    parser.add_argument("reference", type=Path, help="Reference image path")
    parser.add_argument(
        "--product",
        required=True,
        help="Product slug (folder under public/products/)",
    )
    parser.add_argument(
        "--views",
        nargs="+",
        default=list(VIEW_PROMPTS.keys()),
        choices=sorted(VIEW_PROMPTS.keys()),
        help="Which views to generate",
    )
    parser.add_argument(
        "--size",
        default="1024x1536",
        help="Output size (1024x1024, 1024x1536, or 1536x1024)",
    )
    parser.add_argument(
        "--recompose",
        action="store_true",
        help="Skip generation; re-composite logo onto existing raw PNG files "
        "(expects <view>.raw.png in the output dir)",
    )
    args = parser.parse_args()

    out_dir = PROJECT_ROOT / "public" / "products" / args.product
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.recompose:
        for view in args.views:
            raw = out_dir / f"{view}.raw.png"
            if not raw.exists():
                print(f"  ! missing raw: {raw}", file=sys.stderr)
                continue
            print(f"Re-composing {view}...")
            composed = composite_logo(raw.read_bytes(), view)
            (out_dir / f"{view}.png").write_bytes(composed)
            print(f"  -> {out_dir / f'{view}.png'}")
        return 0

    if not args.reference.exists():
        print(f"ERROR: reference not found: {args.reference}", file=sys.stderr)
        return 1

    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    print(f"Reference: {args.reference}")
    print(f"Output:    {out_dir}")
    for view in args.views:
        out = out_dir / f"{view}.png"
        raw_out = out_dir / f"{view}.raw.png"
        print(f"Generating {view}...")
        try:
            prompt = VIEW_PROMPTS[view]
            with args.reference.open("rb") as f:
                result = client.images.edit(
                    model="gpt-image-1",
                    image=f,
                    prompt=prompt,
                    size=args.size,
                )
            raw = base64.b64decode(result.data[0].b64_json)
            raw_out.write_bytes(raw)  # keep raw for recompose tuning
            composed = composite_logo(raw, view)
            out.write_bytes(composed)
            print(f"  -> {out}  (raw: {raw_out.name})")
        except Exception as e:
            print(f"  ! failed: {e}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
