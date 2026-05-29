"use client";

import Reveal from "./Reveal";
import { experiments } from "@/lib/data";

export default function Experiments() {
  return (
    <section id="experiments" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-12">
          <p className="eyebrow">Also Built</p>
          <h2 className="display mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Side experiments
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink/55">
            Smaller builds, research spikes and hackathon projects — where I test ideas
            before they grow into something bigger.
          </p>
          <div className="hairline mt-8" />
        </Reveal>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {experiments.map((e, i) => (
            <Reveal as="li" key={e.name} index={i % 3}>
              <div
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
                <span className="hidden max-w-sm text-right text-sm text-ink/50 sm:block">
                  {e.note}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
