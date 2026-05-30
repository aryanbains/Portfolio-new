"use client";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section id="about" className="px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <div className="hairline mt-5" />
        </Reveal>

        <div>
          <h2 className="display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            <AnimatedText text="I started as a builder. I became an architect of how agents work." />
          </h2>

          <Reveal index={1} className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/70">
            <p>
              I&rsquo;m a 4th-year BTech student and founder who builds at the
              intersection of AI systems and real products. I started Lucentra Labs with
              zero funding and zero team — and shipped SuperMind, GoverRAJ, and PenguinBot
              from that single desk. My work is about one thing: making agents actually
              work in the real world, not just in demos.
            </p>
          </Reveal>

          <Reveal index={2}>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink/10 pt-8">
              <div>
                <p
                  className="text-4xl font-semibold tracking-tight"
                  style={{ color: "var(--accent-bright)" }}
                >
                  945
                </p>
                <p className="mt-1 text-sm text-ink/50">GitHub commits · last year</p>
              </div>
              <div>
                <p
                  className="text-4xl font-semibold tracking-tight"
                  style={{ color: "var(--accent-bright)" }}
                >
                  #4
                </p>
                <p className="mt-1 text-sm text-ink/50">Product Hunt peak</p>
              </div>
            </div>
          </Reveal>

          <Reveal index={3}>
            <blockquote className="mt-12 border-l-2 border-ink pl-6 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              &ldquo;I don&rsquo;t just build AI apps. I build the systems that let agents
              work: context, tools, execution, control, memory, and debugging.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
