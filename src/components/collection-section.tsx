"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { products } from "@/lib/products";

const collectionCards = products.map((p) => ({
  title: p.title.replace(/^7SIDE\s+/, ""),
  subtitle: `€${p.price}`,
  src: p.cover,
  href: `/product/${p.slug}`,
}));

export function CollectionSection() {
  return (
    <section id="collection" className="relative py-16 md:py-32 bg-black overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 hidden md:block" fill="white" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500 mb-3 md:mb-4">
            First Drop
          </p>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white">
            Collection
          </h2>
          <p className="mt-3 md:mt-4 text-neutral-500 text-sm md:text-base max-w-md">
            Limited pieces. No restocks. Catch it or miss it.
          </p>
        </motion.div>
      </div>

      <FocusCards cards={collectionCards} />
    </section>
  );
}
