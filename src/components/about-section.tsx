"use client";
import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            From the streets
            <br />
            of Amsterdam
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            7SIDE is the creative vision of Hayabusa. Born in Amsterdam,
            inspired by the raw energy of street culture, music, and the city
            that never sleeps.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Every piece tells a story. Every drop is limited. No restocks, no
            compromises. You either catch it or you don&apos;t.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[12rem] md:text-[16rem] font-bold tracking-tighter text-white/5 select-none">
              7
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
