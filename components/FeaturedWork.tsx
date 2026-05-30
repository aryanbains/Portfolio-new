"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { featuredWork } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectLinkIcon({ kind }: { kind: "github" | "npm" }) {
  if (kind === "github") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.54 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.07 10.07 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg width="26" height="9" viewBox="0 0 780 250" fill="none" aria-hidden>
      <path
        fill="#C12127"
        d="M240 250h100v-50h100V0H240v250Zm100-200h50v100h-50V50ZM480 0v200h100V50h50v150h50V50h50v150h50V0H480ZM0 200h100V50h50v150h50V0H0v200Z"
      />
    </svg>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 pb-24 pt-12 sm:px-10 sm:pb-32 sm:pt-16 lg:px-16 lg:pb-40 lg:pt-24">
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
            const hasActions = Boolean(p.links?.length);
            const isCardLink = Boolean(p.href) && !hasActions;
            const MotionTag = isCardLink ? motion.a : motion.div;
            return (
              <Reveal as="article" key={p.name} index={i % 2}>
                <MotionTag
                  {...(isCardLink
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
                      <div className="mt-1 flex items-center gap-2">
                        {p.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.name} ${link.label}`}
                            className={`relative z-20 inline-flex h-11 items-center justify-center border transition-all duration-500 ease-apple hover:-translate-y-0.5 ${
                              link.kind === "npm"
                                ? "min-w-[4.1rem] bg-white px-3 text-[#C12127] border-ink/12 hover:border-ink/25 hover:bg-white"
                                : "w-11 bg-ink/[0.03] text-ink/55 border-ink/12 hover:border-ink/25 hover:bg-ink/[0.08] hover:text-ink"
                            }`}
                          >
                            <ProjectLinkIcon kind={link.kind} />
                          </a>
                        ))}
                        {isCardLink && (
                          <span className="text-ink/30 transition-all duration-500 ease-apple group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink">
                            ↗
                          </span>
                        )}
                      </div>
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
