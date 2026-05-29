export type Project = {
  name: string;
  descriptor: string;
  role: string;
  stack: string[];
  metric: string;
  href?: string;
};

export const featuredWork: Project[] = [
  {
    name: "SuperMind",
    descriptor: "Agent operating layer that gives AI the context, tools and control to do real work.",
    role: "Founder · Architecture & Infra",
    stack: ["Agent Runtime", "Context Engine", "Tooling", "TypeScript"],
    metric: "Founder · 0 → 1",
  },
  {
    name: "GoverRAJ",
    descriptor: "Agentic pipeline that compresses government documentation workflows end to end.",
    role: "Lead Engineer",
    stack: ["RAG", "Workflow Agents", "Python", "Postgres"],
    metric: "6–14 months → 2–4 weeks",
  },
  {
    name: "Aura OS",
    descriptor: "An ambient agent desktop — memory, tools and execution unified into one surface.",
    role: "Creator · Systems",
    stack: ["Electron", "Local Agents", "Memory", "IPC"],
    metric: "Unified agent desktop",
  },
  {
    name: "Agent Prism",
    descriptor: "Observability and tracing for multi-step agents — see every decision, tool call and state.",
    role: "Builder · Harness",
    stack: ["Tracing", "Eval", "Next.js", "OTel"],
    metric: "Full agent observability",
  },
  {
    name: "PenguinBot",
    descriptor: "A delightfully capable assistant bot that shipped to a real community of users.",
    role: "Maker",
    stack: ["LLM Orchestration", "Bots", "Node"],
    metric: "PH #5 · 181 points",
  },
  {
    name: "AgentTraceCorder",
    descriptor: "Record, replay and debug agent runs deterministically to fix what actually broke.",
    role: "Builder · Debugging",
    stack: ["Replay", "Determinism", "TypeScript"],
    metric: "Deterministic replay",
  },
];

export const experiments: { name: string; note: string }[] = [
  { name: "Garuda Lens", note: "Vision + reasoning experiment" },
  { name: "WildEye", note: "Wildlife detection at the edge" },
  { name: "Retail ERP", note: "0→1 operations platform" },
  { name: "Health Risk Predictor", note: "Clinical risk modeling" },
  { name: "Hackathon Projects", note: "Rapid 0→1 builds" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Agent Systems",
    items: ["Context Engineering", "Tool Use", "Execution & Control", "Memory", "Multi-agent Orchestration"],
  },
  {
    title: "Harness Engineering",
    items: ["Tracing & Observability", "Evals", "Deterministic Replay", "Debugging"],
  },
  {
    title: "Product Engineering",
    items: ["Next.js", "React", "TypeScript", "0→1 Product", "API Design"],
  },
  {
    title: "Infrastructure",
    items: ["Pipelines", "RAG", "Postgres", "Queues", "Vercel / Cloud"],
  },
  {
    title: "Desktop / Enterprise",
    items: ["Electron", "Local-first", "IPC", "Enterprise Workflows"],
  },
];

export const openTo: string[] = [
  "AI infrastructure teams",
  "Agent systems work",
  "Full-stack 0→1 product engineering",
  "Founder / operator collaborations",
  "Remote · Hybrid · Relocation",
];

export const links = {
  email: "aryanbains6@gmail.com",
  github: "https://github.com/aryanbains/",
  linkedin: "https://linkedin.com/in/aryanbains",
  x: "https://x.com/AryanBains2",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
