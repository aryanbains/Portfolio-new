"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { featuredWork } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
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

        <div className="flex flex-col gap-4">
          {featuredWork.map((p, i) => {
            const isLink = Boolean(p.href);
            const MotionTag = isLink ? motion.a : motion.div;
            return (
              <Reveal as="article" key={p.name} index={i % 2}>
                <MotionTag
                  {...(isLink
                    ? {
                        href: p.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.5, ease }}
                  className="group glass relative flex flex-col gap-6 rounded-2xl border border-ink/10 p-8 sm:flex-row sm:items-start sm:gap-12 sm:p-10"
                >
                  {/* Index number */}
                  <span className="display relative z-10 shrink-0 text-5xl font-medium leading-none text-ink/10 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Main content */}
                  <div className="relative z-10 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          {p.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-ink/50">{p.role}</p>
                      </div>
                      {isLink && (
                        <span className="mt-1 text-ink/30 transition-all duration-500 ease-apple group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink">
                          ↗
                        </span>
                      )}
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/60">
                      {p.descriptor}
                    </p>

                    {/* Stats row */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-ink/10 pt-5">
                      {p.stats?.map((stat) => (
                        <div key={stat.label}>
                          <p
                            className="text-xl font-semibold tracking-tight"
                            style={{ color: "var(--accent-bright)" }}
                          >
                            {stat.value}
                          </p>
                          <p className="mt-0.5 text-xs uppercase tracking-wider text-ink/40">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-2 sm:ml-auto">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/50"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionTag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
