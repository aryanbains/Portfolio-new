"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.09) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.95, ease } },
};

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** start on load (hero) or when scrolled into view */
  trigger?: "load" | "view";
  stagger?: number;
  delay?: number;
};

/**
 * Word-by-word masked reveal for key headlines.
 * Each word sits inside an overflow-hidden mask and slides up into place.
 */
export default function AnimatedText({
  text,
  className,
  trigger = "view",
  stagger = 0.09,
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      {...(trigger === "load"
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.5 } })}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span className="word-mask" key={`${w}-${i}`} aria-hidden>
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </motion.span>
  );
}
