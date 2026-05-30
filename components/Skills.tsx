"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

const skillMeta: Record<string, { caption: string; icon: ReactNode }> = {
  "Agent Systems": {
    caption: "Planning, tool use, memory and multi-step control that make agents reliable beyond demos.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M5 12h4" />
        <path d="M15 12h4" />
        <circle cx="12" cy="12" r="4.5" />
      </svg>
    ),
  },
  "Harness Engineering": {
    caption: "Tracing, evals and replay systems that expose where complex runs break and why.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 17h4l2-8 4 10 2-6h4" />
      </svg>
    ),
  },
  "Product Engineering": {
    caption: "Interfaces, APIs and product surfaces that turn system capability into something people use.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  Infrastructure: {
    caption: "Queues, data, retrieval and deployment plumbing that keep production systems moving.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
        <path d="M5.5 6v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6" />
        <path d="M5.5 12v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
      </svg>
    ),
  },
  "Desktop / Enterprise": {
    caption: "Local-first workflows, desktop shells and enterprise-grade orchestration surfaces.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="4.5" width="16" height="11" rx="1.5" />
        <path d="M9 19.5h6" />
        <path d="M12 15.5v4" />
      </svg>
    ),
  },
};

const layoutClasses = [
  "lg:col-span-2",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-16">
          <p className="eyebrow">Skills</p>
          <h2 className="display mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
            What I work with
          </h2>
          <p className="mt-4 text-base text-ink/55">The craft stack I reach for.</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} index={i % 3} className={layoutClasses[i]}>
              <article className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-paper px-7 py-7 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-ink/20">
                <div
                  className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at top right, var(--accent-tint-soft), transparent 42%)" }}
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-ink/10 bg-ink/[0.03] text-ink/70">
                    {skillMeta[g.title]?.icon}
                  </span>
                  <span
                    className="pointer-events-none select-none font-mono text-6xl font-black leading-none text-ink/[0.05]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10 mt-7">
                  <p className="eyebrow">{g.title}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
                    {skillMeta[g.title]?.caption}
                  </p>
                </div>

                <ul className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border border-ink/10 bg-ink/[0.04] px-3 py-1.5 text-sm text-ink/68 transition-all duration-300 hover:border-ink/20 hover:bg-ink/[0.08] hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
