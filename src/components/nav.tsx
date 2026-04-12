"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "Collection", link: "#collection" },
  { name: "Lookbook", link: "#lookbook" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export function Nav() {
  return <FloatingNav navItems={navItems} />;
}
