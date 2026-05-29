"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
    >
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-700 ease-apple ${
          scrolled
            ? "border border-ink/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "border border-transparent shadow-none"
        }`}
        style={{ opacity: scrolled ? 1 : 0.96 }}
      >
        <a
          href="#top"
          className="relative z-10 text-sm font-semibold tracking-tight"
          aria-label="Aryan Bains — home"
        >
          Aryan&nbsp;Bains
        </a>

        <ul className="relative z-10 hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm text-ink/70 transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-apple group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="glass-btn relative z-10 px-5 py-2 text-sm font-medium text-ink"
          aria-label="Get in touch"
        >
          <span className="relative z-10">Get in touch</span>
        </a>
      </nav>
    </motion.header>
  );
}
