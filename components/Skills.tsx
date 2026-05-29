"use client";

import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

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

        <div className="mt-2 grid gap-px bg-ink/10 border border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} index={i % 3}>
              <div className="group relative overflow-hidden bg-paper px-8 py-8 transition-colors duration-500 hover:bg-ink/[0.03]">
                {/* Ghost number watermark */}
                <span
                  className="pointer-events-none absolute right-5 top-3 select-none font-mono text-7xl font-black leading-none text-ink opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow mb-6">{g.title}</p>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-ink/[0.06] px-3 py-1.5 text-sm text-ink/65 transition-all duration-300 hover:bg-ink/[0.12] hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
