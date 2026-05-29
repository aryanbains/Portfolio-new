"use client";

import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-16">
          <p className="eyebrow">Skills</p>
          <h2 className="display mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
            What I work with
          </h2>
        </Reveal>

        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} index={i % 3}>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/90">
                  {g.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink/70 transition-colors duration-300 hover:border-ink/40 hover:text-ink"
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
