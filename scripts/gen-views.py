#!/usr/bin/env python3
"""Generate additional product photo views from a reference image using gpt-image-1.

Usage:
    python gen-views.py <reference_image> --product tracksuit-black --views back flatlay detail

Reads OPENAI_API_KEY from scripts/.env or env.
Outputs PNG files into ../public/products/<product>/<view>.png
"""
from __future__ import annotations

import argparse
import base64
import os
import sys
from pathlib import Path

from openai import OpenAI

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent


def _load_env() -> None:
    env_file = SCRIPT_DIR / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


VIEW_PROMPTS = {
    "back": (
        "Edit this image: show the EXACT SAME outfit and EXACT SAME model "
        "but rotated 180 degrees so we see the BACK of the jacket and shorts. "
        "Keep identical clothing, lighting, pose stance, and clean studio "
        "background. Professional e-commerce streetwear photography."
    ),
    "flatlay": (
        "Recreate this outfit as a FLAT LAY product photograph: the jacket "
        "and shorts laid flat on a clean light grey studio surface, neatly "
        "arranged side by side, top-down view, soft even lighting, no model, "
        "no background props. Keep the exact same garments, colour, and "
        "drippy '7SIDE' logo placement. Professional e-commerce streetwear "
        "flat lay style."
    ),
    "detail": (
        "Generate a close-up DETAIL SHOT of the chest area of this jacket: "
        "tight crop on the drippy '7SIDE' embroidered logo, showing fabric "
        "texture, stitching, and zipper detail. Same dark jacket, soft "
        "studio lighting, shallow depth of field. Professional streetwear "
        "product detail photography."
    ),
    "jacket-only": (
        "Isolate ONLY the jacket from this image. Show the jacket alone on "
        "an invisible ghost mannequin, front view, clean light grey studio "
        "background, soft even lighting. No model, no shorts, no other "
        "garments. Keep exact same jacket design, colour, and drippy "
        "'7SIDE' logo on the chest. Professional e-commerce product photo."
    ),
    "shorts-only": (
        "Isolate ONLY the shorts from this image. Show the shorts alone on "
        "an invisible ghost mannequin, front view, clean light grey studio "
        "background, soft even lighting. No model, no jacket. Keep exact "
        "same shorts design, colour, and drippy '7SIDE' logo on the leg. "
        "Professional e-commerce product photo."
    ),
}


def generate(client: OpenAI, ref: Path, view: str, out: Path, size: str) -> None:
    prompt = VIEW_PROMPTS[view]
    with ref.open("rb") as f:
        result = client.images.edit(
            model="gpt-image-1",
            image=f,
            prompt=prompt,
            size=size,
        )
    b64 = result.data[0].b64_json
    out.write_bytes(base64.b64decode(b64))
    print(f"  -> {out}")


def main() -> int:
    _load_env()
    if not os.environ.get("OPENAI_API_KEY"):
        print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
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
        default=["back", "flatlay", "detail"],
        choices=sorted(VIEW_PROMPTS.keys()),
        help="Which views to generate",
    )
    parser.add_argument(
        "--size",
        default="1024x1536",
        help="Output size (1024x1024, 1024x1536, or 1536x1024)",
    )
    args = parser.parse_args()

    if not args.reference.exists():
        print(f"ERROR: reference not found: {args.reference}", file=sys.stderr)
        return 1

    out_dir = PROJECT_ROOT / "public" / "products" / args.product
    out_dir.mkdir(parents=True, exist_ok=True)

    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    print(f"Reference: {args.reference}")
    print(f"Output:    {out_dir}")
    for view in args.views:
        out = out_dir / f"{view}.png"
        print(f"Generating {view}...")
        try:
            generate(client, args.reference, view, out, args.size)
        except Exception as e:
            print(f"  ! failed: {e}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
