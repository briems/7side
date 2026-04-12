"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "Shadow Hoodie",
    price: "€89",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
  },
  {
    name: "Midnight Tee",
    price: "€49",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    name: "Drift Cargo",
    price: "€109",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
  },
  {
    name: "Phantom Cap",
    price: "€39",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&q=80",
  },
];

export function CollectionGrid() {
  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
        Collection
      </h2>
      <p className="text-zinc-400 mb-12 max-w-lg">
        First drop. Limited pieces. Amsterdam roots.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-white">{product.name}</h3>
              <span className="text-zinc-400 text-sm">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
