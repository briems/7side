"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const quotes = [
  {
    quote: "7SIDE changed the game. Amsterdam streetwear has never looked this raw.",
    name: "Complex NL",
    title: "Fashion Review",
  },
  {
    quote: "Hayabusa brings that energy you can't fake. Every piece feels intentional.",
    name: "Highsnobiety",
    title: "Editor's Pick",
  },
  {
    quote: "This is what happens when street culture meets real craftsmanship.",
    name: "HYPEBEAST",
    title: "Brand Spotlight",
  },
  {
    quote: "Not just clothing — it's a movement. 7SIDE is Amsterdam's answer to the world.",
    name: "GQ Netherlands",
    title: "Emerging Brands",
  },
  {
    quote: "Limited drops, unlimited energy. 7SIDE is the brand to watch in 2026.",
    name: "Vogue NL",
    title: "Street Style",
  },
];

export function MarqueeBand() {
  return (
    <section className="py-20 bg-black">
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={quotes}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
