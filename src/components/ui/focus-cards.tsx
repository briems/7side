"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardData = {
  title: string;
  src: string;
  href?: string;
  subtitle?: string;
};

type CardProps = {
  card: CardData;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

const CardInner = ({ card, index, hovered }: Omit<CardProps, "setHovered">) => (
  <>
    <Image
      src={card.src}
      alt={card.title}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-start justify-end py-4 px-3 md:py-6 md:px-5 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0 md:opacity-0",
        "max-md:opacity-100"
      )}
    >
      <div className="text-sm md:text-lg font-semibold tracking-tight text-white">
        {card.title}
      </div>
      {card.subtitle && (
        <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-300 mt-1">
          {card.subtitle}
        </div>
      )}
    </div>
  </>
);

export const Card = React.memo(
  ({ card, index, hovered, setHovered }: CardProps) => {
    const wrapperClass = cn(
      "rounded-lg relative bg-neutral-900 overflow-hidden h-48 sm:h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    );

    if (card.href) {
      return (
        <Link
          href={card.href}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(wrapperClass, "block cursor-pointer")}
        >
          <CardInner card={card} index={index} hovered={hovered} />
        </Link>
      );
    }

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={wrapperClass}
      >
        <CardInner card={card} index={index} hovered={hovered} />
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
