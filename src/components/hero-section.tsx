"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <h1 className="bg-gradient-to-br from-white to-neutral-400 py-4 bg-clip-text text-center text-6xl md:text-9xl font-bold tracking-tighter text-transparent">
          7SIDE
        </h1>
        <TextGenerateEffect
          words="Amsterdam Streetwear by Hayabusa"
          className="text-center text-lg md:text-xl text-neutral-400 mt-2"
          duration={0.8}
        />
        <motion.a
          href="#collection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 px-8 py-3 border border-white/20 rounded-full text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
        >
          Explore Collection
        </motion.a>
      </motion.div>
    </LampContainer>
  );
}
