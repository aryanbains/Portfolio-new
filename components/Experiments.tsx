"use client";

import Reveal from "./Reveal";
import { experiments } from "@/lib/data";

export default function Experiments() {
  return (
    <section id="experiments" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-12">
          <p className="eyebrow">Experiments &amp; Side Projects</p>
          <div className="hairline mt-5" />
        </Reveal>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {experiments.map((e, i) => (
            <Reveal as="li" key={e.name} index={i % 3}>
              <a
                href="#"
                data-cursor="hover"
                className="group flex items-center justify-between gap-6 py-6 transition-colors duration-300"
              >
                <div className="flex items-baseline gap-5">
                  <span className="text-xs tabular-nums text-ink/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium tracking-tight transition-transform duration-500 ease-apple group-hover:translate-x-2 sm:text-2xl">
                    {e.name}
                  </span>
                </div>
                <span className="hidden text-sm text-ink/50 sm:block">{e.note}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
