"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-950">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-md bg-neutral-950 transition-all",
                i === active
                  ? "ring-2 ring-white"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt={`${alt} view ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 20vw, 10vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
