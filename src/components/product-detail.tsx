"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [notified, setNotified] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500 mb-3">
          First Drop
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          {product.title}
        </h1>
        <p className="mt-2 text-neutral-400 text-sm md:text-base">
          {product.tagline}
        </p>
        <p className="mt-6 text-2xl md:text-3xl font-semibold text-white">
          €{product.price}
        </p>
      </div>

      <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
        {product.description}
      </p>

      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
          Size
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={cn(
                "min-w-[3.5rem] h-11 px-4 rounded-md border text-sm font-medium transition-all",
                size === s
                  ? "border-white bg-white text-black"
                  : "border-neutral-800 bg-transparent text-neutral-300 hover:border-neutral-600"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={!size || notified}
        onClick={() => setNotified(true)}
        className={cn(
          "h-12 w-full rounded-md text-sm font-semibold uppercase tracking-[0.2em] transition-all",
          notified
            ? "bg-neutral-800 text-neutral-400 cursor-default"
            : size
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-neutral-900 text-neutral-500 cursor-not-allowed"
        )}
      >
        {notified
          ? "We'll let you know"
          : size
            ? "Notify on drop"
            : "Select size"}
      </button>

      <div className="border-t border-neutral-900 pt-6 text-xs text-neutral-500 space-y-1.5">
        <p>Amsterdam streetwear by Hayabusa & Jr.</p>
        <p>Limited first drop. No restocks.</p>
        <p>Ships from NL.</p>
      </div>
    </div>
  );
}
