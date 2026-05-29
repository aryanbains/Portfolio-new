"use client";

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
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="show"
          className="eyebrow mb-7"
        >
          Aryan Bains — Portfolio
        </motion.p>

        <h1 className="display text-[16vw] font-semibold leading-[0.9] tracking-tightest sm:text-[12vw] lg:text-[10.5rem]">
          <AnimatedText text="Aryan" trigger="load" delay={0.25} className="block" />
          <AnimatedText text="Bains" trigger="load" delay={0.4} className="block" />
        </h1>

        <motion.p
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="show"
          className="mt-10 max-w-2xl text-base font-medium text-ink/70 sm:text-lg"
        >
          AI Infrastructure Engineer&nbsp;·&nbsp;Agent Systems Builder&nbsp;·&nbsp;Founder at SuperMind
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.85}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
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
          <a
            href="#work"
            className="glass-btn px-7 py-3.5 text-sm font-semibold text-ink"
            aria-label="View work"
          >
            <span className="relative z-10">View Work</span>
          </a>
          <a
            href="#contact"
            className="group relative text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            aria-label="Get in touch"
          >
            Get in touch
            <span className="ml-2 inline-block transition-transform duration-500 ease-apple group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-ink/40"
      >
        <span>Scroll</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-ink/30"
        />
      </motion.div>
    </section>
  );
}
