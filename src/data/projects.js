export const projectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    codename: "MISSION // STELLAR-01",
    sector: "ORBITAL SECTOR 01",
    category: "Full-Stack Web & Financial Systems",
    subtitle: "Financial Intelligence & Ledger Engine",
    description:
      "Precision-engineered Python application for automated personal finance tracking and transactional analytics. Features real-time PostgreSQL storage, robust SQL schemas, and structured REST interfaces.",
    problemSolved:
      "Eliminates manual transaction logging and categorization errors by aggregating disparate financial inputs into an ACID-compliant relational ledger with sub-second analytical reporting.",
    technologies: ["Python", "PostgreSQL", "REST APIs", "Analytics", "Docker"],
    keyFeatures: [
      "Automated transaction ingestion with dynamic multi-tier category classification.",
      "Real-time analytical dashboards generating monthly spend telemetry and trajectory forecasts.",
      "Persistent PostgreSQL relational storage backed by optimized connection pooling.",
      "Containerized deployment environment ensuring zero configuration drift via Docker."
    ],
    github: "https://github.com/dinesh-dev1628/expense_tracker_app",
    demo: null,
    featured: true,
    status: "MISSION ACCOMPLISHED",
    accent: "#38BDF8", // Electric Blue
    glow: "rgba(56, 189, 248, 0.4)",
    stats: {
      latency: "<15ms",
      architecture: "Modular Python",
      dataEngine: "PostgreSQL"
    }
  },
  {
    id: "project-zero",
    title: "Project Zero: Autonomous Workflow Engine",
    codename: "MISSION // STELLAR-04",
    sector: "ORBITAL SECTOR 04",
    category: "Workflow Automation & AI Platforms",
    subtitle: "Autonomous Multi-Step Task Orchestrator",
    description:
      "Next-generation intelligent automation system orchestrating multi-step developer operations, background worker routines, and API pipelines into cohesive autonomous execution loops. Launching soon.",
    problemSolved:
      "Bridges disparate web services and AI agents into a deterministic, stateful workflow graph with automated verification checks and recovery checkpoints.",
    technologies: ["Python", "FastAPI", "AI Agents", "Next.js", "Docker"],
    keyFeatures: [
      "Graph-based task execution architecture supporting dynamic branching and retries.",
      "Automated verification checks and telemetry logging with structured error reporting.",
      "Extensible connector hooks for cloud endpoints, webhooks, and database systems.",
      "Lightweight asynchronous worker loop optimized for concurrent execution."
    ],
    github: null,          // set the repo link once it's public
    demo: null,
    featured: false,
    inDevelopment: true,
    comingSoon: true,      // new flag: drives the badge and disables links
    status: "COMING SOON",
    accent: "#38BDF8",     // Electric Blue
    glow: "rgba(56, 189, 248, 0.4)",
    stats: {
      phase: "Pre-Launch",
      target: "TBA",
      status: "Coming Soon"
    }
  }
];
