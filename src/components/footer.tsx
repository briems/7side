"use client";
import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big brand mark */}
        <div className="py-16 md:py-24 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[5rem] md:text-[14rem] font-bold tracking-tighter text-white/[0.03] select-none leading-none"
          >
            7SIDE
          </motion.h2>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16 border-t border-white/5">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold tracking-tighter text-white mb-4 md:mb-6">
              7SIDE
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Amsterdam-based streetwear
              <br />
              by Hayabusa & Jr.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4 md:mb-6">
              Shop
            </h4>
            <div className="flex flex-col gap-2.5 md:gap-3">
              <a href="#collection" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Collection
              </a>
              <a href="#lookbook" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Lookbook
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                New Arrivals
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4 md:mb-6">
              Info
            </h4>
            <div className="flex flex-col gap-2.5 md:gap-3">
              <a href="#about" className="text-xs text-neutral-600 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Shipping
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Returns
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                TikTok
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 md:py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <p className="text-[9px] md:text-[10px] text-neutral-700 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} 7SIDE. All rights reserved.
          </p>
          <p className="text-[9px] md:text-[10px] text-neutral-700 uppercase tracking-[0.2em]">
            Amsterdam, Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
