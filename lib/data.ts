export type Project = {
  name: string;
  descriptor: string;
  role: string;
  stack: string[];
  metric: string;
  href?: string;
  stats?: { value: string; label: string }[];
};

export const featuredWork: Project[] = [
  {
    name: "SuperMind",
    descriptor:
      "I built SuperMind because I was a solo founder hitting every wall — no budget to hire, no time to run 10 tools. SuperMind is one platform where a single person can run an entire business: marketing, workflows, team ops, content, approvals, billing. No need to hire five people or pay for ten tools.",
    role: "Founder · Architecture & Infra",
    stack: ["Agent Runtime", "Context Engine", "TypeScript", "Next.js"],
    metric: "50+ users · $300+ revenue",
    href: "https://projectsupermind.com/",
    stats: [
      { value: "50+", label: "Active Users" },
      { value: "$300+", label: "Revenue" },
      { value: "1", label: "Person Team" },
    ],
  },
  {
    name: "GoverRAJ",
    descriptor:
      "Police promotions in Rajasthan used to take 6 to 14 months — everything handwritten. Roster files, seniority lists, exam records, 8 manual steps, all prone to errors. I built GoverRAJ to replace that entire pipeline. Input the data, apply 30+ government rules automatically, output everything. What took months now takes weeks.",
    role: "Lead Engineer",
    stack: ["Rules Engine", "RAG", "Python", "AES-256", ".NET 8"],
    metric: "6–14 months → 2–4 weeks",
    stats: [
      { value: "6–14mo", label: "Before" },
      { value: "2–4wk", label: "After" },
      { value: "8", label: "Steps Automated" },
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
    stats: [
      { value: "#4", label: "Product Hunt" },
      { value: "100+", label: "Active Users" },
    ],
  },
  {
    name: "Aura OS",
    descriptor:
      "An ambient agent desktop where memory, tools and execution live on one surface. Instead of bouncing between apps, agents operate alongside you — holding context, running tasks, and surfacing the right tool at the right moment.",
    role: "Creator · Systems",
    stack: ["Electron", "Local Agents", "Memory", "IPC"],
    metric: "Unified agent desktop",
    stats: [
      { value: "1", label: "Surface" },
      { value: "Local", label: "First" },
    ],
  },
  {
    name: "Agent Prism",
    descriptor:
      "Multi-step agents fail in ways you can't see. Agent Prism makes every decision, tool call and state transition visible — so you can trace exactly where a run went wrong and evaluate behavior over time instead of guessing.",
    role: "Builder · Harness",
    stack: ["Tracing", "Eval", "Next.js", "OTel"],
    metric: "Full agent observability",
    stats: [
      { value: "100%", label: "Step Visibility" },
      { value: "Live", label: "Tracing" },
    ],
  },
  {
    name: "AgentTraceCorder",
    descriptor:
      "Debugging agents is impossible when runs aren't reproducible. AgentTraceCorder records, replays and debugs agent runs deterministically — so you fix what actually broke instead of chasing flaky behavior.",
    role: "Builder · Debugging",
    stack: ["Replay", "Determinism", "TypeScript"],
    metric: "Deterministic replay",
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
