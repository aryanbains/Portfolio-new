"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/lib/data";
import { AgentOverlayToggle } from "./AgentOverlay";
import ThemeToggle from "./ThemeToggle";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease, delay: 0.1 }}
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
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 ease-apple group-hover:w-full"
                  style={{ backgroundColor: "var(--accent-bright)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-2">
          <a
            href="mailto:aryanbains6@gmail.com"
            className="glass-btn hidden px-5 py-2 text-sm font-medium text-ink md:inline-flex"
            aria-label="Email Me"
          >
            <span className="relative z-10">Email Me</span>
          </a>

          <AgentOverlayToggle />

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ease-apple ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all duration-300 ease-apple ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ease-apple ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="glass absolute inset-x-4 top-[4.5rem] z-40 rounded-3xl border border-ink/10 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:hidden"
          >
            <ul className="relative z-10 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-medium tracking-tight text-ink/80 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-ink/10 pt-4">
                <AgentOverlayToggle mobile />
              </li>
              <li className="border-t border-ink/10 pt-4">
                <a
                  href="mailto:aryanbains6@gmail.com"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
