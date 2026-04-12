"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-web.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 mb-6"
          >
            Amsterdam Streetwear
          </motion.p>

          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white leading-none">
            7SIDE
          </h1>

          <TextGenerateEffect
            words="By Hayabusa. No rules, no compromise."
            className="text-center text-base md:text-lg text-white/40 mt-4 max-w-md"
            duration={0.8}
          />

          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-12 px-8 py-3 border border-white/15 rounded-full text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-500"
          >
            Explore Collection
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
