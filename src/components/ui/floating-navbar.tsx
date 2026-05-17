"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-6 md:top-10 inset-x-0 mx-auto max-w-[90vw] md:max-w-fit border border-white/[0.08] rounded-full bg-black/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-8 py-3 items-center justify-between md:justify-center gap-4 md:gap-8",
          className
        )}
      >
        <Link
          href="/"
          className="text-sm font-bold tracking-tighter text-white"
        >
          7SIDE
        </Link>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative text-neutral-400 hover:text-white transition-colors text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em]"
          >
            <span className="hidden sm:inline">{navItem.name}</span>
            <span className="sm:hidden">
              {navItem.name.slice(0, 4)}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
