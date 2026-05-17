"use client";

const ticker = [
  "DROP 01 — LIVE NOW",
  "LIMITED PIECES",
  "ATELIER AMSTERDAM",
  "SS26",
  "NO RESTOCKS",
  "BY HAYABUSA × JR",
];

export function MarqueeBand() {
  const items = [...ticker, ...ticker, ...ticker];

  return (
    <section className="relative bg-black border-y border-white/[0.06] overflow-hidden py-6 md:py-8">
      <div
        className="flex w-max gap-12 md:gap-20 animate-scroll whitespace-nowrap"
        style={{ ["--animation-duration" as string]: "45s" }}
      >
        {items.map((line, i) => (
          <div key={i} className="flex items-center gap-12 md:gap-20">
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-white/70">
              {line}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
