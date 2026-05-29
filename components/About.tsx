"use client";

import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <div className="hairline mt-5" />
        </Reveal>

        <div>
          <h2 className="display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            <AnimatedText text="I started as a builder. I became an architect of how agents work." />
          </h2>

          <Reveal index={1} className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ink/70">
            <p>
              I began as a full-stack builder shipping products end to end, then moved
              into AI products — where I kept hitting the same wall. Wrappers around a
              model only get you so far. The hard part was never the prompt; it was
              everything around it.
            </p>
            <p>
              So I shifted to building agent infrastructure: the layer that turns a
              capable model into a system you can actually trust to do work.
            </p>
          </Reveal>

          <Reveal index={2}>
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
