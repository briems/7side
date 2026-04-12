"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function LookbookSection() {
  return (
    <section id="lookbook" className="bg-black">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500 mb-3 md:mb-4">
              Season One
            </p>
            <h2 className="text-3xl md:text-[5rem] font-bold tracking-tighter text-white leading-none">
              Lookbook
            </h2>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=80"
          alt="7SIDE Lookbook"
          height={720}
          width={1400}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
