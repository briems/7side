"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = ["7", "S", "I", "D", "E"];

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={isMobile ? "/hero-mobile.mp4" : "/hero-web.mp4"}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-white/55 mb-5 md:mb-7"
        >
          Amsterdam <span className="mx-2 opacity-50">·</span> SS26 <span className="mx-2 opacity-50">·</span> Drop 01
        </motion.p>

        <h1 className="flex items-end gap-[0.05em] leading-none">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.45 + i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[5.5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold tracking-[-0.04em] text-white"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="origin-left h-[1px] w-32 md:w-48 bg-white/30 mt-5 md:mt-7"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/55 mt-4 md:mt-5 font-mono"
        >
          By Hayabusa <span className="opacity-50 mx-2">×</span> Jr.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
