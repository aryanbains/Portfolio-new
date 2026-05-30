export type Project = {
  name: string;
  descriptor: string;
  role: string;
  stack: string[];
  metric: string;
  href?: string;
  agentNote?: string;
  links?: { label: string; href: string; kind: "github" | "npm" }[];
  stats?: { value: string; label: string }[];
};

export const featuredWork: Project[] = [
  {
    name: "SuperMind",
    descriptor:
      "Run your service business, SaaS product, commerce brand, or internal ops company from one SuperMind deployment. Each business gets isolated knowledge, connectors, approvals, budgets, and audit trails, while you keep one founder-level control plane across the whole portfolio. It works like a team of 13 AI agents automating the company with human approval wherever it matters.",
    role: "Founder · Architecture & Infra",
    stack: ["Agent Runtime", "Context Engine", "TypeScript", "Next.js"],
    metric: "Founder control plane for company operations",
    href: "https://projectsupermind.com/",
    agentNote: "[agent-brain] Founder control plane live. Approvals, budgets and audit paths online.",
    stats: [
      { value: "50+", label: "Active Users" },
      { value: "13", label: "AI Agents" },
      { value: "1", label: "Control Plane" },
    ],
  },
  {
    name: "Agent Prism",
    descriptor:
      "Drop-in tracing for agent pipelines. Local SQLite, real costs, and a dashboard bundled with the npm package.",
    role: "Builder · Tracing",
    stack: ["Tracing", "SQLite", "Dashboard", "TypeScript"],
    metric: "Drop-in tracing + local dashboard",
    agentNote: "[agent-brain] Trace logs detected. Highly reproducible.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/aryanbains/Agent-Prism",
        kind: "github",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/agent-prism",
        kind: "npm",
      },
    ],
    stats: [
      { value: "Local", label: "SQLite" },
      { value: "Real", label: "Costs" },
      { value: "Bundled", label: "Dashboard" },
    ],
  },
  {
    name: "PenguinBot",
    descriptor:
      "I was manually juggling 5 different platforms every day. So I built PenguinBot — one interface, real automation underneath. Multi-channel chat, GitHub workflows, social posting, email sequences from a single place. Took it from idea to Product Hunt #4.",
    role: "Maker · Product",
    stack: ["LLM Orchestration", "Node.js", "Multi-channel"],
    metric: "PH #4 · 100+ users",
    href: "https://penguinbot.org/",
    agentNote: "[agent-brain] Multi-channel automations active. Follow-up loops still moving.",
    stats: [
      { value: "#4", label: "Product Hunt" },
      { value: "100+", label: "Active Users" },
    ],
  },
  {
    name: "GoverRAJ",
    descriptor:
      "Police promotions in Rajasthan used to take 6 to 14 months — everything handwritten. Roster files, seniority lists, exam records, 8 manual steps, all prone to errors. I built GoverRAJ to replace that entire pipeline. Input the data, apply 30+ government rules automatically, output everything. What took months now takes weeks.",
    role: "Lead Engineer",
    stack: ["Rules Engine", "RAG", "Python", "AES-256", ".NET 8"],
    metric: "6–14 months → 2–4 weeks",
    agentNote: "[agent-brain] Rules engine verified. Bureaucratic latency collapsed.",
    stats: [
      { value: "6–14mo", label: "Before" },
      { value: "2–4wk", label: "After" },
      { value: "8", label: "Steps Automated" },
    ],
  },
  {
    name: "Aura OS",
    descriptor:
      "An ambient agent desktop where memory, tools and execution live on one surface. Instead of bouncing between apps, agents operate alongside you — holding context, running tasks, and surfacing the right tool at the right moment.",
    role: "Creator · Systems",
    stack: ["Electron", "Local Agents", "Memory", "IPC"],
    metric: "Unified agent desktop",
    agentNote: "[agent-brain] Ambient desktop context layer active.",
    stats: [
      { value: "1", label: "Surface" },
      { value: "Local", label: "First" },
    ],
  },
  {
    name: "AgentTraceCorder",
    descriptor:
      "Debugging agents is impossible when runs aren't reproducible. AgentTraceCorder records, replays and debugs agent runs deterministically — so you fix what actually broke instead of chasing flaky behavior.",
    role: "Builder · Debugging",
    stack: ["Replay", "Determinism", "TypeScript"],
    metric: "Deterministic replay",
    agentNote: "[agent-brain] Replay timeline locked. Flake surface reduced.",
    stats: [
      { value: "Deterministic", label: "Replay" },
      { value: "0", label: "Flaky Runs" },
    ],
  },
];

export const experiments: { name: string; note: string }[] = [
  { name: "Garuda Lens", note: "Vision + reasoning experiment for real-time scene understanding" },
  { name: "WildEye", note: "On-device wildlife detection at the edge" },
  { name: "Hackathon Projects", note: "Rapid 0→1 builds under tight deadlines" },
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
