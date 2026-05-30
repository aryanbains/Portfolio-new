"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AgentMode = "IDLE" | "SCOUTING" | "SHADOWING" | "INTERACTING";

type ScoutResolution = {
  point: { x: number; y: number };
  note: string;
  kind: "visible" | "await-scroll";
};

type AgentOverlayContextValue = {
  active: boolean;
  mounted: boolean;
  toggle: () => void;
};

const AgentOverlayContext = createContext<AgentOverlayContextValue | null>(null);

const STORAGE_KEY = "agent-overlay";
const IDLE_DELAY = 3200;
const SCOUT_DELAY = 4200;
const VIEWPORT_PAD_X = 28;
const VIEWPORT_PAD_Y = 34;
const WAIT_EDGE_OFFSET = 54;

const SCOUT_TARGETS = [
  {
    selector: '[data-agent-scout="hero-cta"]',
    note: "[agent-brain] Primary route detected. Selected work ready.",
  },
  {
    selector: "#work article:nth-of-type(1)",
    note: "[agent-brain] Founder control plane online. SuperMind is the operating layer.",
  },
  {
    selector: "#work article:nth-of-type(2)",
    note: "[agent-brain] Trace logs detected. Highly reproducible.",
  },
  {
    selector: "#widgets",
    note: "[agent-brain] Live surfaces active. Signals updating in place.",
  },
  {
    selector: '#contact a[aria-label^="Email:"]',
    note: "[agent-brain] Founder channel available. Human approval path open.",
  },
] as const;

export function useAgentOverlay() {
  const context = useContext(AgentOverlayContext);

  if (!context) {
    throw new Error("useAgentOverlay must be used within AgentOverlayProvider");
  }

  return context;
}

export function AgentOverlayToggle({ mobile = false }: { mobile?: boolean }) {
  const { active, mounted, toggle } = useAgentOverlay();

  if (!mounted) {
    return mobile ? null : <div className="hidden h-8 w-[4.9rem] md:block" />;
  }

  if (mobile) {
    return (
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between py-3 text-lg font-medium tracking-tight text-ink/80 transition-colors hover:text-ink"
        aria-label={active ? "Disable agent overlay" : "Enable agent overlay"}
        aria-pressed={active}
      >
        <span>Agent Overlay</span>
        <span className="text-sm uppercase tracking-[0.18em] text-ink/45">
          {active ? "Active" : "Off"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="glass-btn hidden h-8 items-center px-3 md:inline-flex"
      aria-label={active ? "Disable agent overlay" : "Enable agent overlay"}
      aria-pressed={active}
    >
      <span className="relative z-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/60">
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
            active ? "bg-[var(--accent-bright)]" : "bg-ink/25"
          }`}
        />
        <span>Agent</span>
        <span className="text-ink/40">{active ? "On" : "Off"}</span>
      </span>
    </button>
  );
}

export default function AgentOverlayProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    setActive(stored ? stored === "active" : false);
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setActive((current) => {
      const next = !current;
      window.localStorage.setItem(STORAGE_KEY, next ? "active" : "inactive");
      return next;
    });
  }, []);

  const value = useMemo(() => ({ active, mounted, toggle }), [active, mounted, toggle]);

  return (
    <AgentOverlayContext.Provider value={value}>
      {children}
      <AgentOverlay active={active && mounted} />
    </AgentOverlayContext.Provider>
  );
}

function AgentOverlay({ active }: { active: boolean }) {
  const rawX = useMotionValue(-120);
  const rawY = useMotionValue(-120);
  const opacity = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 165, damping: 30, mass: 0.82 });
  const y = useSpring(rawY, { stiffness: 165, damping: 30, mass: 0.82 });
  const smoothOpacity = useSpring(opacity, { stiffness: 200, damping: 30, mass: 0.6 });
  const tooltipOpacity = useTransform(smoothOpacity, [0, 1], [0, 1]);

  const pointerRef = useRef({ x: 0, y: 0 });
  const agentRef = useRef({ x: -120, y: -120 });
  const lastMoveRef = useRef(0);
  const hoveredRef = useRef<HTMLElement | null>(null);
  const scoutIndexRef = useRef(0);
  const scoutHoldRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const modeRef = useRef<AgentMode>("IDLE");

  const [mode, setMode] = useState<AgentMode>("IDLE");
  const [note, setNote] = useState("");
  const [thinking, setThinking] = useState(false);

  const bobAnimation =
    mode === "INTERACTING"
      ? { y: [0, -1.6, 0, 1, 0] }
      : mode === "SCOUTING"
        ? { y: [0, -1.4, 0, 0.9, 0] }
        : { y: [0, -1.2, 0, 0.8, 0] };

  useEffect(() => {
    if (!active) {
      opacity.set(0);
      setNote("");
      setMode("IDLE");
      setThinking(false);
      hoveredRef.current = null;
      return;
    }

    pointerRef.current = {
      x: window.innerWidth * 0.62,
      y: window.innerHeight * 0.34,
    };
    agentRef.current = { ...pointerRef.current };
    rawX.set(pointerRef.current.x);
    rawY.set(pointerRef.current.y);
    opacity.set(1);
    lastMoveRef.current = performance.now();

    const updateHoveredTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        hoveredRef.current = null;
        return;
      }

      const match = target.closest("[data-agent-note]");
      hoveredRef.current = match instanceof HTMLElement ? match : null;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      lastMoveRef.current = performance.now();
      updateHoveredTarget(event.target);
    };

    const onPointerDown = (event: PointerEvent) => {
      lastMoveRef.current = performance.now();
      updateHoveredTarget(event.target);
    };

    const onPointerLeave = () => {
      hoveredRef.current = null;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    const loop = (timestamp: number) => {
      const hovered = hoveredRef.current;
      const idleFor = timestamp - lastMoveRef.current;

      let nextMode: AgentMode = "SHADOWING";
      let nextNote = "";
      let nextThinking = false;
      let targetPoint = {
        x: pointerRef.current.x + 16,
        y: pointerRef.current.y + 14,
      };

      if (hovered) {
        const focusTarget = hovered.querySelector<HTMLElement>("[data-agent-focus]") ?? hovered;
        const focusRect = focusTarget.getBoundingClientRect();

        targetPoint = {
          x: focusRect.left + focusRect.width * 0.5,
          y: focusRect.top + focusRect.height * 0.5,
        };
        nextMode = "INTERACTING";
        nextNote = hovered.dataset.agentNote ?? "";
        scoutHoldRef.current = 0;
      } else if (idleFor > SCOUT_DELAY) {
        const scoutTarget = resolveScoutTarget(scoutIndexRef.current);

        if (scoutTarget) {
          targetPoint = scoutTarget.point;

          if (scoutTarget.kind === "await-scroll") {
            nextMode = "SCOUTING";
            nextThinking = true;
            scoutHoldRef.current = 0;
          } else {
            const distance = Math.hypot(
              agentRef.current.x - targetPoint.x,
              agentRef.current.y - targetPoint.y,
            );

            if (distance < 16) {
              if (!scoutHoldRef.current) {
                scoutHoldRef.current = timestamp + 1350;
              }
              nextMode = "INTERACTING";
              nextNote = scoutTarget.note;

              if (timestamp >= scoutHoldRef.current) {
                scoutIndexRef.current = (scoutIndexRef.current + 1) % SCOUT_TARGETS.length;
                scoutHoldRef.current = 0;
              }
            } else {
              nextMode = "SCOUTING";
              nextThinking = true;
            }
          }
        }
      } else if (idleFor > IDLE_DELAY) {
        nextMode = "IDLE";
        targetPoint = {
          x: pointerRef.current.x + 22,
          y: pointerRef.current.y + 10,
        };
      }

      targetPoint = clampPoint(targetPoint);

      const easingFactor =
        nextMode === "INTERACTING"
          ? 0.085
          : nextMode === "SCOUTING"
            ? 0.05
            : nextMode === "IDLE"
              ? 0.036
              : 0.075;

      agentRef.current = {
        x: lerp(agentRef.current.x, targetPoint.x, easingFactor),
        y: lerp(agentRef.current.y, targetPoint.y, easingFactor),
      };

      agentRef.current = clampPoint(agentRef.current);

      rawX.set(agentRef.current.x);
      rawY.set(agentRef.current.y);
      opacity.set(active ? 1 : 0);

      if (modeRef.current !== nextMode) {
        modeRef.current = nextMode;
        setMode(nextMode);
      }

      setNote((current) => (current === nextNote ? current : nextNote));
      setThinking((current) => (current === nextThinking ? current : nextThinking));
      rafRef.current = window.requestAnimationFrame(loop);
    };

    rafRef.current = window.requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [active, opacity, rawX, rawY]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          data-agent-overlay
          className="pointer-events-none fixed inset-0 z-[60]"
          aria-hidden
        >
          <motion.div
            style={{ x, y, opacity: smoothOpacity }}
            data-agent-cursor-anchor
            className="absolute left-0 top-0"
          >
            <motion.div
              animate={bobAnimation}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div
                animate={
                  mode === "INTERACTING"
                    ? { scale: 1.03, rotate: 1.5 }
                    : mode === "SCOUTING"
                      ? { scale: 1.015, rotate: 1 }
                      : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                data-agent-cursor
                className="relative text-ink drop-shadow-[0_8px_14px_rgba(0,0,0,0.16)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z" />
                </svg>
              </motion.div>

              <AnimatePresence>
                {thinking && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, x: 4, y: -1 }}
                    animate={{ opacity: 1, scale: 1, x: 8, y: -3 }}
                    exit={{ opacity: 0, scale: 0.92, x: 4, y: -1 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    data-agent-thinking
                    className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-paper/88 shadow-[0_8px_18px_rgba(0,0,0,0.1)] backdrop-blur-md"
                  >
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.72, repeat: Infinity, ease: "linear" }}
                    >
                      {Array.from({ length: 12 }).map((_, index) => {
                        const angle = index * 30;
                        const opacityLevel = 0.18 + index * 0.06;
                        return (
                          <rect
                            key={angle}
                            x="11"
                            y="2"
                            width="2"
                            height="5"
                            rx="1"
                            fill="currentColor"
                            opacity={Math.min(opacityLevel, 1)}
                            transform={`rotate(${angle} 12 12)`}
                          />
                        );
                      })}
                    </motion.svg>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {note && mode === "INTERACTING" && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, y: -8 }}
                    animate={{ x: 22, y: -12 }}
                    exit={{ opacity: 0, x: 8, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{ opacity: tooltipOpacity }}
                    className="absolute left-0 top-0 max-w-[18rem] overflow-hidden border border-ink/10 bg-paper/92 px-3 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ink/45">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: "var(--accent-bright)" }}
                      />
                      <span>{mode}</span>
                    </div>
                    <p className="mt-2 max-w-[16rem] font-mono text-[11px] leading-relaxed text-ink/70">
                      {note}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function resolveScoutTarget(index: number): ScoutResolution | null {
  for (let offset = 0; offset < SCOUT_TARGETS.length; offset += 1) {
    const item = SCOUT_TARGETS[(index + offset) % SCOUT_TARGETS.length];
    const element = document.querySelector<HTMLElement>(item.selector);

    if (!element) {
      continue;
    }

    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      continue;
    }

    if (rect.bottom < VIEWPORT_PAD_Y) {
      continue;
    }

    const targetX = clamp(
      rect.left + rect.width * 0.5,
      VIEWPORT_PAD_X,
      window.innerWidth - VIEWPORT_PAD_X,
    );

    if (rect.top > window.innerHeight - VIEWPORT_PAD_Y * 1.5) {
      return {
        kind: "await-scroll",
        point: {
          x: targetX,
          y: window.innerHeight - WAIT_EDGE_OFFSET,
        },
        note: item.note,
      };
    }

    return {
      kind: "visible",
      point: {
        x: targetX,
        y: clamp(
          rect.top + Math.min(rect.height * 0.45, 110),
          VIEWPORT_PAD_Y,
          window.innerHeight - VIEWPORT_PAD_Y,
        ),
      },
      note: item.note,
    };
  }

  return null;
}

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function clampPoint(point: { x: number; y: number }) {
  return {
    x: clamp(point.x, VIEWPORT_PAD_X, window.innerWidth - VIEWPORT_PAD_X),
    y: clamp(point.y, VIEWPORT_PAD_Y, window.innerHeight - VIEWPORT_PAD_Y),
  };
}