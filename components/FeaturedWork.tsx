"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { featuredWork } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="display mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
              Selected projects
            </h2>
          </div>
          <span className="hidden shrink-0 pb-2 text-sm text-ink/50 sm:block">
            {String(featuredWork.length).padStart(2, "0")} — Systems &amp; products
          </span>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredWork.map((p, i) => (
            <Reveal as="article" key={p.name} index={i % 2}>
              <motion.div
                data-cursor="hover"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease }}
                className="group glass relative flex h-full flex-col justify-between rounded-3xl border border-ink/10 p-7 sm:p-9"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                      {p.name}
                    </h3>
                    <span className="mt-1 inline-block text-ink/40 transition-all duration-500 ease-apple group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink">
                      ↗
                    </span>
                  </div>
                  <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink/65">
                    {p.descriptor}
                  </p>
                </div>

                <div className="relative z-10 mt-9">
                  <p className="text-sm font-medium text-ink/80">{p.role}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium tracking-tight">{p.metric}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
