export const profile = {
  name: "Abhishek Raj",
  role: "Software Engineer",
  taglines: [
    "Passionate about turning ambitious ideas into real, impactful products.",
    "Specializing in AI Agents, RAG Pipelines & Scalable Web Apps.",
    "Engineering high-performance full-stack web applications.",
  ],
  college: "Netaji Subhas University of Technology (NSUT)",
  degree: "B.Tech in Geoinformatics Engineering",
  cgpa: "6.92 / 10",
  batch: "2023 — 2027",
  status: "Building. Learning. Shipping.",
  location: "New Delhi, India",
  phone: "+91-8810590060",
  email: "abhishek.raj.ug23@nsut.ac.in",
  resumeUrl: "/Abhishek_Raj.pdf",
  socials: {
    github: "https://github.com/i-abhishek-04",
    linkedin: "https://www.linkedin.com/in/abhishekraj0011",
    instagram: "https://instagram.com/abhixek_0",
  },
};

export const stats = [
  { label: "DSA Problems", value: "200+", subtext: "LeetCode & Problem Solving", icon: "code" },
  { label: "Live Products", value: "3", subtext: "Full-Stack SaaS & AI Tools", icon: "rocket" },
  { label: "AI Integrations", value: "5+", subtext: "LangChain, RAG, Gemini & Groq", icon: "brain" },
  { label: "Cups of Coffee", value: "∞", subtext: "Continuous Learning & Shipping", icon: "coffee" },
];

export const about = {
  summary:
    "I'm a Geoinformatics undergraduate at Netaji Subhas University of Technology (NSUT, 2023–2027) skilled in full-stack development (Python, JavaScript, React, FastAPI) and applied AI/LLM engineering (LangChain, RAG, prompt engineering), with hands-on experience shipping tested, API-integrated projects end to end.",
  highlights: [
    { title: "Full-Stack Development", desc: "Crafting scalable architectures with React 19, FastAPI, Node.js, SQLAlchemy, and modern relational & NoSQL databases." },
    { title: "AI & RAG Systems", desc: "Architecting multi-provider LLM workflows using LangChain, LCEL, Qdrant vector retrieval, Groq (Llama 3.3 70B), and Gemini API." },
    { title: "Clean Code & Reliability", desc: "Prioritizing CRDT eventual consistency, unit test suites (pytest 100% pass), optimized API performance, and clean modular code." },
  ],
};

export const projects = [
  {
    id: "syncpad",
    name: "SyncPad",
    category: "Developer Tools",
    date: "Aug 2026",
    featured: true,
    tagline: "Real-Time Collaborative Code Editor (Hand-Built CRDT)",
    description:
      "Engineered a real-time collaborative editor from scratch with a hand-built RGA CRDT engine (Roh et al. 2011), achieving strong eventual consistency across concurrent clients without server-side locking. Built with FastAPI, WebSocket backend, and React/Vite frontend featuring live cursor presence and a CRDT inspector.",
    features: [
      "Hand-built RGA CRDT engine achieving strong eventual consistency without server locking",
      "FastAPI & native WebSocket backend with live cursor presence and CRDT inspector",
      "Validated with an 8-test convergence suite covering concurrent edits, 4-client convergence, and resync",
    ],
    tags: ["Python", "FastAPI", "WebSockets", "React", "Vite", "PrismJS", "CRDT/RGA"],
    repo: "https://github.com/i-abhishek-04/SyncPad",
    demo: "https://sync-pad-rho.vercel.app",
    visual: "code",
  },
  {
    id: "omnisocial",
    name: "OmniSocial AI",
    category: "Full Stack SaaS",
    date: "Jun 2026",
    featured: true,
    tagline: "Full-Stack Social Media Analytics SaaS",
    description:
      "Architected a full-stack creator analytics platform with FastAPI and React 19, exposing 21 REST endpoints backed by JWT authentication and 4 SQLAlchemy models. Integrated a pluggable platform-adapter across 5 live APIs (YouTube, GitHub, Instagram, Reddit, Dev.to) and an LLM-powered assistant (Groq Llama 3.3 70B & Gemini).",
    features: [
      "Layered FastAPI & React 19 platform exposing 21 REST endpoints validated by 33-test pytest suite",
      "Pluggable adapter system integrating 5 live APIs (YouTube, GitHub, Instagram, Reddit, Dev.to)",
      "LLM assistant with tiered fallback across Groq (Llama 3.3 70B) & Google Gemini",
    ],
    tags: ["Python", "FastAPI", "React 19", "Vite", "SQLAlchemy", "JWT", "pytest", "Groq", "Gemini"],
    repo: "https://github.com/i-abhishek-04/OmniSocial-AI",
    demo: "https://omnisocial-ai.vercel.app",
    visual: "social",
  },
  {
    id: "langchain-enterprise",
    name: "LangChain Multi-Provider AI Studio",
    category: "AI & RAG",
    date: "Jun 2026",
    featured: true,
    tagline: "Multi-Provider AI Studio & Chain Playground",
    description:
      "Built an interactive React/Vite studio unifying 5 free-tier AI providers (Groq, Gemini, OpenRouter, HuggingFace, local Ollama) behind one interface, featuring an LCEL Chain Flow Visualizer, curated prompt template library (ReAct, RAG Q&A, JSON extraction), and Python code exporter structured in a uv-managed monorepo.",
    features: [
      "Unifies 5 free-tier AI providers: Groq, Gemini API, OpenRouter, HuggingFace & Ollama",
      "Interactive LCEL Chain Flow Visualizer & curated prompt template library (ReAct, RAG, JSON)",
      "Zero-config client-side fallback mode with one-click Python code exporter in a uv monorepo",
    ],
    tags: ["React", "Vite", "Python", "LangChain", "LCEL", "Groq", "Gemini API", "HuggingFace", "Ollama"],
    repo: "https://github.com/i-abhishek-04/langchain-enterprise-ai-platform",
    demo: "https://langchain-enterprise-ai-platform.vercel.app",
    visual: "chat",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "React.js / React 19", tag: "Core Stack", icon: "react" },
      { name: "JavaScript (ES6+)", tag: "Expert", icon: "js" },
      { name: "HTML5 / CSS3", tag: "Expert", icon: "html" },
      { name: "Tailwind CSS", tag: "Core Stack", icon: "tailwind" },
      { name: "Vite", tag: "Tooling", icon: "next" },
    ],
  },
  {
    title: "Backend & AI Engineering",
    icon: "server",
    skills: [
      { name: "Python", tag: "Core Language", icon: "python" },
      { name: "FastAPI", tag: "Production Ready", icon: "fastapi" },
      { name: "REST APIs & JWT", tag: "Auth & Security", icon: "api" },
      { name: "SQLAlchemy & ORM", tag: "Advanced", icon: "node" },
      { name: "Groq & Gemini APIs", tag: "LLM Suite", icon: "qdrant" },
    ],
  },
  {
    title: "Databases & Developer Tools",
    icon: "database",
    skills: [
      { name: "SQLite & MySQL", tag: "Relational DB", icon: "postgres" },
      { name: "Git & GitHub", tag: "Version Control", icon: "git" },
      { name: "Docker & Tooling", tag: "Containerization", icon: "docker" },
    ],
  },
];

export const experience = [
  {
    period: "May 2026 — Present",
    title: "Frontend Web Development Intern",
    org: "Magnus Corps",
    type: "Internship",
    location: "Remote",
    bullets: [
      "Built responsive frontend layouts with semantic HTML/CSS and JavaScript-driven interactivity for client-facing web platforms.",
      "Integrated AI-powered features into the frontend and maintained reusable component structures aligned with the design system.",
      "Tech stack: HTML, CSS, JavaScript, React, AI Integration.",
    ],
  },
  {
    period: "Jan 2026 — Present",
    title: "Full-Stack & AI Systems Engineer",
    org: "Independent Projects",
    type: "Open Source",
    location: "New Delhi, India",
    bullets: [
      "Architected and shipped production-grade full-stack applications, real-time WebSocket systems, and LLM-powered tools.",
      "Engineered a hand-built RGA CRDT engine (SyncPad) for lock-free real-time collaborative code editing.",
      "Built multi-provider LangChain AI platforms and FastAPI REST SaaS backends backed by automated pytest suites.",
    ],
  },
  {
    period: "2023 — 2027",
    title: "B.Tech in Geoinformatics Engineering",
    org: "Netaji Subhas University of Technology (NSUT)",
    type: "Education",
    location: "New Delhi, India",
    bullets: [
      "Current CGPA: 6.92 / 10 | Expected Graduation: 2027",
      "Core CS Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, System Design.",
      "Class XII (CBSE): 2023 | Class X (CBSE): 2021",
    ],
  },
];

export const achievements = [
  {
    title: "200+ LeetCode Solved",
    desc: "Solved 200+ Data Structures & Algorithms problems on LeetCode spanning graphs, DP, and trees.",
    badge: "Problem Solving",
  },
  {
    title: "JEE Main Top 20th Percentile",
    desc: "Ranked within the top 20 percentile in JEE Main examination among 1M+ candidates.",
    badge: "Academic",
  },
  {
    title: "NSUT Geoinformatics (2023-2027)",
    desc: "Pursuing B.Tech at Netaji Subhas University of Technology with a CGPA of 6.92 / 10.",
    badge: "Education",
  },
];

export const connect = {
  intro:
    "Whether you have a job opportunity, a project idea, or just want to chat about AI, software architecture, or tech — feel free to reach out!",
  items: [
    { label: "abhishek.raj.ug23@nsut.ac.in", href: "mailto:abhishek.raj.ug23@nsut.ac.in", icon: "mail", detail: "Email Me" },
    { label: "+91-8810590060", href: "tel:+918810590060", icon: "phone", detail: "Phone" },
    { label: "New Delhi, India", href: null, icon: "pin", detail: "Location" },
    { label: "github.com/i-abhishek-04", href: "https://github.com/i-abhishek-04", icon: "github", detail: "GitHub Profile" },
    { label: "linkedin.com/in/abhishekraj0011", href: "https://www.linkedin.com/in/abhishekraj0011", icon: "linkedin", detail: "LinkedIn Profile" },
    { label: "instagram.com/abhixek_0", href: "https://instagram.com/abhixek_0", icon: "instagram", detail: "Instagram Handle" },
  ],
};
