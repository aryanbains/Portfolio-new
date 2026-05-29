"use client";

import Reveal from "./Reveal";
import { openTo } from "@/lib/data";

export default function OpenTo() {
  return (
    <section id="open-to" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Open To</p>
          <div className="hairline mt-5" />
        </Reveal>

        <ul className="space-y-1">
          {openTo.map((item, i) => (
            <Reveal as="li" key={item} index={i % 3}>
              <div className="flex items-center gap-5 py-4 text-2xl font-medium tracking-tight sm:text-3xl">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
