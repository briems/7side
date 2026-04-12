"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

const collectionCards = [
  {
    title: "Shadow Hoodie",
    src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
  },
  {
    title: "Midnight Tee",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    title: "Drift Cargo",
    src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
  },
  {
    title: "Phantom Cap",
    src: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=800&q=80",
  },
  {
    title: "Eclipse Jacket",
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
  },
  {
    title: "Void Joggers",
    src: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
  },
];

export function CollectionSection() {
  return (
    <section id="collection" className="relative py-32 bg-black overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">
            First Drop
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Collection
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md">
            Limited pieces. No restocks. Catch it or miss it.
          </p>
        </motion.div>
      </div>

      <FocusCards cards={collectionCards} />
    </section>
  );
}
