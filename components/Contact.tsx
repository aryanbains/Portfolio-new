"use client";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { links } from "@/lib/data";

const socials = [
  {
    label: "Email",
    href: `mailto:${links.email}`,
    value: links.email,
    note: "Open for product, agent infra and founder-led collaborations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 7.5h16v9H4z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: links.github,
    value: "aryanbains",
    note: "Code, experiments, systems work and shipping velocity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.54 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.07 10.07 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    value: "in/aryanbains",
    note: "Professional profile, background and current work history.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.15 3.86 6.33 3 5.27 3 4.2 3 3.38 3.86 3.38 4.94c0 1.07.82 1.93 1.87 1.93h.02c1.07 0 1.89-.86 1.89-1.93ZM20.62 13.04c0-3.4-1.81-4.98-4.22-4.98-1.95 0-2.82 1.09-3.31 1.85V8.5H9.71c.04.93 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.92.27-.69.89-1.4 1.94-1.4 1.37 0 1.92 1.06 1.92 2.62V20H20.5v-6.96Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: links.x,
    value: "@AryanBains2",
    note: "Short-form thoughts, product progress and public building.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.27l-4.9-6.43L6.4 22H3.3l7.25-8.29L1 2h6.42l4.43 5.83L18.9 2Zm-1.1 18.12h1.72L6.48 3.78H4.63L17.8 20.12Z" />
      </svg>
    ),
  },
];

const layoutClasses = ["sm:col-span-2 lg:col-span-6", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function Contact() {
  return (
    <footer id="contact" className="px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>

        <h2 className="display mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <AnimatedText text="Let's build the systems that let agents work." />
        </h2>

        <Reveal index={1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${links.email}`}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-ink/30 px-8 py-3.5 text-sm font-medium transition-all duration-500 ease-apple hover:border-ink"
              aria-label={`Email ${links.email}`}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink/8 transition-transform duration-500 ease-apple group-hover:scale-x-100" />
              <span className="relative text-ink/75 transition-colors duration-500 ease-apple group-hover:text-ink">
                Email Me
              </span>
            </a>
            <p className="text-sm text-ink/45">{links.email}</p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-4 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-12">
          {socials.map((s, i) => (
            <Reveal key={s.label} index={i % 4} className={layoutClasses[i]}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-cursor="hover"
                className="group relative flex h-full min-h-[220px] flex-col overflow-hidden border border-ink/10 bg-paper p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-ink/20"
                aria-label={`${s.label}: ${s.value}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at top right, var(--accent-tint-soft), transparent 40%)" }}
                />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-ink/10 bg-ink/[0.03] text-ink/70">
                    {s.icon}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-ink/40">{s.label}</span>
                </div>

                <div className="relative z-10 mt-auto">
                  <p className={`font-medium tracking-tight text-ink ${i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                    {s.value}
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/50">{s.note}</p>
                </div>

                <span className="absolute right-6 top-6 text-ink/30 transition-all duration-500 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-8 text-sm text-ink/45 sm:flex-row sm:items-center">
          <span>Aryan Bains — AI Infrastructure Engineer</span>
          <span>© {new Date().getFullYear()} · Built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
