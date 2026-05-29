"use client";

/**
 * Apple Liquid Glass SVG filters.
 * Injected once, hidden, and referenced by the `.glass` / `.glass-btn`
 * CSS classes in globals.css via `filter: url(#...)`.
 *
 * `container-glass` is used verbatim per the design spec.
 * `btn-glass` uses a self-contained fractal-noise displacement (the spec's
 * base64 displacement map was truncated and unusable), tuned tighter so
 * pill / icon-sized surfaces refract at their edges like liquid glass.
 */
export default function GlassFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
    >
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves={2}
            seed={92}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale={77}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="btn-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.02"
            numOctaves={2}
            seed={41}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.4" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale={28}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
