"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: d },
  }),
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
        {/* ── Text column ── */}
        <div>
          <h1
            className="display font-semibold leading-[0.9] tracking-tightest"
            style={{ fontSize: "clamp(3.5rem, 10vw + 1rem, 9rem)" }}
          >
            <AnimatedText text="Aryan" trigger="load" delay={0.25} className="block" />
            <AnimatedText text="Bains" trigger="load" delay={0.4} className="block" />
          </h1>

          <motion.p
            variants={fadeUp}
            custom={0.7}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-2xl text-base font-normal text-ink/60 sm:text-lg"
          >
            AI Infrastructure Engineer&nbsp;·&nbsp;Agent Systems Builder&nbsp;·&nbsp;Founder at SuperMind
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.85}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-2xl font-medium leading-snug tracking-tight"
          >
            I build the systems that let agents work.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            {/* PRIMARY — rectangle fill-slide */}
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-ink px-8 py-3.5 text-sm font-semibold transition-colors duration-500 ease-apple"
              aria-label="View Work"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-apple group-hover:scale-x-100" />
              <span className="relative text-ink transition-colors duration-500 ease-apple group-hover:text-paper">
                View Work
              </span>
              <span className="relative text-ink/40 transition-colors duration-500 ease-apple group-hover:text-paper/70">
                ↓
              </span>
            </a>

            {/* SECONDARY — outline rectangle fill-slide */}
            <a
              href="mailto:aryanbains6@gmail.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-ink/30 px-8 py-3.5 text-sm font-medium transition-all duration-500 ease-apple hover:border-ink"
              aria-label="Send email"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink/8 transition-transform duration-500 ease-apple group-hover:scale-x-100" />
              <span className="relative text-ink/75 transition-colors duration-500 ease-apple group-hover:text-ink">
                Email Me
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── Photo column (lg+) ── */}
        {!imgError && (
          <div className="relative hidden lg:block">
            {/* Corner bracket decorations */}
            <span className="pointer-events-none absolute -left-3 -top-3 h-7 w-7 border-l-[1.5px] border-t-[1.5px] border-ink/60" />
            <span className="pointer-events-none absolute -right-3 -top-3 h-7 w-7 border-r-[1.5px] border-t-[1.5px] border-ink/60" />
            <span className="pointer-events-none absolute -bottom-3 -left-3 h-7 w-7 border-b-[1.5px] border-l-[1.5px] border-ink/60" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 h-7 w-7 border-b-[1.5px] border-r-[1.5px] border-ink/60" />

            <div className="group relative aspect-[3/4] w-full overflow-hidden border border-ink/20">
              <Image
                src="/aryan.jpg"
                alt="Aryan Bains"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover grayscale transition-all duration-700 ease-apple group-hover:grayscale-0 group-hover:scale-[1.03]"
                priority
                onError={() => setImgError(true)}
              />
              {/* Subtle color tint overlay on hover */}
              <div className="absolute inset-0 bg-accent-bright/0 transition-all duration-700 ease-apple group-hover:bg-accent-bright/5" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
