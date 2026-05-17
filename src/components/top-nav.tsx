"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Collection", href: "#collection" },
  { name: "Lookbook", href: "#lookbook" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[6000] transition-all duration-500",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8 py-3 md:py-4">
        <Link
          href="/"
          aria-label="7SIDE — home"
          className="block shrink-0"
        >
          <Image
            src="/logo-white.png"
            alt="7SIDE"
            width={580}
            height={786}
            priority
            className="h-8 md:h-10 w-auto opacity-95 hover:opacity-100 transition-opacity"
          />
        </Link>

        <nav className="flex items-center gap-5 md:gap-9">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/55 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
