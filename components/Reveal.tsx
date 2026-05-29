"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.08 },
  }),
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "section" | "li" | "article";
};

/** Scroll-triggered fade/slide reveal using viewport intersection. */
export default function Reveal({ children, className, index = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
