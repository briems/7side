"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Amsterdam Streetwear
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none tracking-tighter">
                7SIDE
              </span>
            </h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
              By Hayabusa. No rules, no compromise.
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1400&q=80"
          alt="7SIDE streetwear collection"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
