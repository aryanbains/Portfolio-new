"use client";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import { links } from "@/lib/data";

const socials = [
  { label: "Email", href: `mailto:${links.email}`, value: links.email },
  { label: "GitHub", href: links.github, value: "aryanbains" },
  { label: "LinkedIn", href: links.linkedin, value: "in/aryanbains" },
  { label: "X", href: links.x, value: "@AryanBains2" },
];

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
          <a
            href={`mailto:${links.email}`}
            className="glass-btn mt-12 px-8 py-4 text-base font-semibold text-ink"
            aria-label={`Email ${links.email}`}
          >
            <span className="relative z-10">{links.email}</span>
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-ink/10 pt-10 sm:grid-cols-4">
          {socials.map((s, i) => (
            <Reveal key={s.label} index={i % 4}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-cursor="hover"
                className="group block"
                aria-label={`${s.label}: ${s.value}`}
              >
                <span className="block text-xs uppercase tracking-[0.16em] text-ink/40">
                  {s.label}
                </span>
                <span className="mt-2 flex items-center gap-2 text-base font-medium tracking-tight">
                  {s.value}
                  <span className="inline-block text-ink/40 transition-all duration-500 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink">
                    ↗
                  </span>
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
