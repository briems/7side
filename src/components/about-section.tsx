"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 [background-size:30px_30px] md:[background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)]" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 hidden md:block" fill="white" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-0 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6 md:mb-8"
        >
          The Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent"
        >
          From the streets
          <br />
          of Amsterdam
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 text-neutral-400 text-sm md:text-xl leading-relaxed max-w-sm md:max-w-2xl mx-auto"
        >
          7SIDE is the creative vision of Hayabusa & Jr. Born in Amsterdam, inspired
          by the raw energy of street culture, music, and the city that never
          sleeps. Every piece tells a story. Every drop is limited.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-6 text-neutral-500 text-xs md:text-base leading-relaxed max-w-sm md:max-w-xl mx-auto"
        >
          No rules. No compromise. You either catch it or you don&apos;t.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[12rem] md:text-[30rem] font-bold tracking-tighter text-white select-none">
            7
          </span>
        </motion.div>
      </div>
    </section>
  );
}
