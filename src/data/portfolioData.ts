export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  isFlagship?: boolean;
  tech: string[];
  description: string;
  problem: string;
  whatIBuilt: string[];
  architectureSteps: { label: string; detail: string }[];
  keyConcepts: string[];
  challenges: string[];
  outcome: string;
  hackathonBadge?: { name: string; result: string; year: string };
  securityBadges?: string[];
  quantumMetric?: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
  architectureFlow: { step: string; desc: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  badge: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  highlights: string[];
}

// ========================================================
// CONFIGURATION & VERIFIED SOCIAL LINKS
// ========================================================
export const SOCIAL_LINKS = {
  // TODO: Insert your verified GitHub profile URL below (e.g., "https://github.com/sravyamissula")
  github: "https://github.com/Sravyamissula",
  // TODO: Insert your verified LinkedIn profile URL below (e.g., "https://linkedin.com/in/sravyamissula")
  linkedin: "https://www.linkedin.com/in/sai-sri-sravya-missula/",
  email: "sravyamissula137@gmail.com",
  phone: "+91-6301068011",
  resumePdf: "https://drive.google.com/file/d/1EmIbpaBu9LL9NB6YYsbdc7rAbOc_JjRh/view?usp=sharing",
};

export const PERSONAL_INFO = {
  name: "Sai Sri Sravya Missula",
  roleHeadline: "Software Engineer",
  focusAreas: "Backend • AI",
  tagline: "Building reliable software systems and intelligent applications.",
  shortBio:
    "Computer Science & Engineering student at Amrita Vishwa Vidyapeetham with software engineering experience at Fidelity Investments, focused on backend systems, APIs, distributed workflows, and AI-powered applications.",
  aboutParagraphs: [
    "I am a Computer Science & Engineering student at Amrita Vishwa Vidyapeetham (CGPA: 9.61/10) with practical software engineering experience from Fidelity Investments. My technical focus centers on building reliable backend architectures, robust REST APIs, asynchronous task processing pipelines, and AI-powered workflows.",
    "Through enterprise software testing at Fidelity and national competitive hackathons, I approach engineering with a focus on system reliability, clean service boundaries, and factual code correctness under real-world operating constraints.",
  ],
  engineeringFocus: [
    {
      number: "01",
      title: "Backend Engineering",
      details: "REST APIs • Spring Boot • FastAPI",
    },
    {
      number: "02",
      title: "Distributed Systems",
      details: "Async processing • Redis • retries",
    },
    {
      number: "03",
      title: "AI Engineering",
      details: "LLMs • RAG • intelligent workflows",
    },
    {
      number: "04",
      title: "Enterprise Engineering",
      details: "API testing • automation • debugging",
    },
  ],
};

export const TIMELINE_MILESTONES = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    institution: "Amrita Vishwa Vidyapeetham",
    description: "Core computer science fundamentals, data structures, algorithms, and Java object-oriented programming.",
  },
  {
    year: "2025",
    title: "TradeGenie — SAP National Hackathon",
    institution: "Top 75 Finalist (1,000+ teams)",
    description: "Built full-stack AI-enabled SME trading platform with Spring Boot and contextual retrieval.",
  },
  {
    year: "2026",
    title: "Fidelity Internship • Quantum Hackathon • EventPulse",
    institution: "Fidelity Investments & Quantum Valley",
    description: "Software engineering internship at Fidelity, 2nd Place in Amaravati Quantum Valley Hackathon, and EventPulse platform.",
  },
  {
    year: "2027",
    title: "Expected B.Tech Graduation",
    institution: "Amrita Vishwa Vidyapeetham",
    description: "Completing B.Tech in Computer Science and Engineering (Current CGPA: 9.61/10).",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "fidelity-internship",
    company: "Fidelity Investments",
    role: "Software Engineering Intern",
    location: "Bengaluru, India",
    period: "June 2026 – August 2026",
    summary:
      "Software engineering internship at Fidelity Investments focusing on automation framework migration, application data flow analysis, and REST API and event verification.",
    technologies: [
      "Java",
      "Maven",
      "Cucumber",
      "TestNG",
      "REST API Testing",
      "Bruno",
      "Git",
    ],
    responsibilities: [
      "Migrated REST API and event-based test automation from an enterprise framework to a lightweight framework using Java, Maven, Cucumber, and TestNG.",
      "Analyzed application data flow, automation architecture, environment configurations, dependencies, utilities, and supporting components.",
      "Investigated API request/response failures using Bruno.",
      "Debugged Java code and implemented fixes across test utility libraries and configurations.",
      "Troubleshot Maven-based execution, test workflows, dependencies, and configuration issues.",
      "Validated migrated test suites through local testing.",
      "Contributed to a Cucumber-based reporting feature using Java utilities and validation logic.",
      "Followed Git branching, commit, and code-change workflows.",
    ],
    architectureFlow: [
      { step: "Enterprise Framework", desc: "Monolithic test automation harness with legacy dependencies." },
      { step: "Architecture Analysis", desc: "Examined application data flow, service contracts, and Bruno logs." },
      { step: "Lightweight Framework", desc: "Modular Java, Maven, Cucumber, and TestNG test runner structure." },
      { step: "API & Event Tests", desc: "Automated test coverage for REST endpoints and event workflows." },
      { step: "Local Validation", desc: "Executed local test runs and contributed to reporting utilities." },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "eventpulse",
    title: "EventPulse",
    subtitle: "Reliable Webhook Delivery & Observability Platform",
    category: "Backend & Systems",
    isFlagship: true,
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "LLMs"],
    description:
      "A reliable webhook delivery platform designed to receive events, deliver notifications to external services, track delivery attempts, handle failures and retries, and provide intelligent failure analysis.",
    problem:
      "External webhook endpoints can fail unpredictably due to transient network drops, receiver downtime, or throttling. Without structured asynchronous queuing and backoff retries, critical application notifications can be lost without visibility.",
    whatIBuilt: [
      "Event ingestion endpoint built with FastAPI to receive incoming webhook payloads.",
      "Asynchronous event processing using Redis queues to decouple ingestion from delivery workers.",
      "Delivery tracking to log delivery attempts, HTTP status codes, and timestamps.",
      "Configurable retry logic using exponential backoff to handle transient target failures.",
      "Dead Letter Queue (DLQ) for isolating persistently failing delivery attempts.",
      "Webhook endpoint management and destination health monitoring.",
      "LLM-powered failure analysis to inspect error logs and categorize failure reasons.",
    ],
    architectureSteps: [
      { label: "Event Ingestion", detail: "FastAPI receives incoming webhook payload" },
      { label: "Validation", detail: "Validates payload schema and destination target" },
      { label: "Redis Queue", detail: "Buffers and enqueues event for asynchronous delivery" },
      { label: "Delivery Worker", detail: "Dispatches HTTP POST request to target URL" },
      { label: "External Webhook", detail: "Target destination receives payload" },
      { label: "Success / Retry", detail: "2xx logs success; errors trigger exponential backoff" },
      { label: "Dead Letter Queue", detail: "Exhausted retries isolated in DLQ with error context" },
      { label: "AI Failure Analysis", detail: "LLM analyzes failure patterns to summarize error causes" },
    ],
    keyConcepts: [
      "Asynchronous Event Ingestion",
      "Message Queuing with Redis",
      "Exponential Backoff Retries",
      "Dead Letter Queue Pattern",
      "Delivery Tracking & Audit Logs",
      "LLM Error Diagnostics",
    ],
    challenges: [
      "Handling recipient server timeouts without blocking concurrent delivery threads.",
      "Ensuring delivery attempts and error states are recorded accurately in PostgreSQL.",
      "Structuring prompt context so the LLM summarizes error root causes cleanly.",
    ],
    outcome:
      "Built a functioning webhook delivery platform that isolates failed destinations, guarantees retry attempts, and provides automated diagnostic summaries for delivery issues.",
    githubUrl: "",
  },
  {
    id: "tradegenie",
    title: "TradeGenie",
    subtitle: "AI-Powered SME Trading Platform",
    category: "Full-Stack & AI",
    isFlagship: false,
    tech: ["React", "Node.js", "Java", "Spring Boot", "MongoDB", "REST APIs"],
    description:
      "A full-stack trading platform for small and medium enterprises (SMEs) with automated trade document generation and retrieval-assisted AI context.",
    problem:
      "SMEs face friction navigating multi-step trade documentation, role permissions, and trade regulations without large operational staff.",
    whatIBuilt: [
      "RESTful APIs using Spring Boot for secure order and trade data processing.",
      "JWT-based stateless authentication with Role-Based Access Control (RBAC).",
      "Input validation and standardized error-handling middleware.",
      "Modular service architecture for trade document generation workflows.",
      "MongoDB document storage for trade listings, catalogs, and transaction history.",
      "AI-powered chatbot using OpenAI APIs with retrieval-based context for trade questions.",
    ],
    architectureSteps: [
      { label: "React Frontend", detail: "Client dashboard for managing trades and inquiries" },
      { label: "Backend Layer", detail: "Spring Boot & Node.js service architecture" },
      { label: "REST APIs", detail: "JWT authenticated endpoints with RBAC validation" },
      { label: "MongoDB", detail: "Document store for trade records and user schemas" },
      { label: "AI Layer", detail: "Context-aware chatbot powered by OpenAI APIs" },
    ],
    securityBadges: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Input Validation", "Error Handling"],
    hackathonBadge: {
      name: "SAP National Hackathon",
      result: "Top 75 Finalist (among 1,000+ teams)",
      year: "2025",
    },
    keyConcepts: [
      "Spring Boot REST Architecture",
      "Role-Based Access Control (RBAC)",
      "JWT Stateless Security",
      "Document Modeling in MongoDB",
      "Retrieval-Assisted Chatbot Context",
    ],
    challenges: [
      "Designing clean data models for trade listings across diverse SME product categories.",
      "Grounding AI responses with relevant trade context to maintain answer precision.",
    ],
    outcome:
      "Selected among the Top 75 teams in the SAP National Hackathon 2025 out of over 1,000 participating teams across India.",
    githubUrl: "",
  },
  {
    id: "quantum-superdense-coding",
    title: "Quantum Image Transmission using Superdense Coding",
    subtitle: "Hybrid Quantum-Classical Circuit Optimization",
    category: "Quantum Computing",
    isFlagship: false,
    tech: ["Python", "Qiskit", "IBM Quantum"],
    description:
      "A hybrid quantum-classical system utilizing superdense coding and Bell state entangled qubit pairs to transmit image data across quantum channels.",
    problem:
      "Entangled qubit resources are constrained and sensitive to decoherence and gate noise on near-term quantum hardware.",
    whatIBuilt: [
      "Hybrid quantum-classical encoding logic for discrete image pixel data.",
      "Quantum circuits built and simulated using Qiskit.",
      "Superdense coding protocol using entangled Bell state pairs to transmit two classical bits per qubit.",
      "Optimized circuit gate design to reduce entangled qubit usage.",
      "Analyzed circuit depth, gate count, CNOT operations, and noise effects on IBM Quantum hardware.",
    ],
    architectureSteps: [
      { label: "Image Preprocessing", detail: "Classical pixel decomposition into binary bit streams" },
      { label: "Superdense Encoding", detail: "Applies Pauli gates to encode 2 classical bits per qubit" },
      { label: "Entangled Qubits", detail: "Generates Bell state pairs (|Φ+⟩) via Hadamard & CNOT" },
      { label: "Quantum Channel", detail: "Circuit execution on simulated and IBM Quantum hardware" },
      { label: "Bell Decoding", detail: "CNOT and Hadamard operations reverse entanglement" },
      { label: "Recovered Image", detail: "Measurement in computational basis and pixel reconstruction" },
    ],
    quantumMetric: "33% reduction in entangled qubit usage compared with baseline while maintaining transmission fidelity",
    hackathonBadge: {
      name: "Amaravati Quantum Valley Hackathon",
      result: "Runner-Up (among 50+ teams)",
      year: "2026",
    },
    keyConcepts: [
      "Superdense Coding Protocol",
      "Bell State Entanglement",
      "Quantum Circuit Optimization",
      "CNOT Gate Minimization",
      "IBM Quantum Execution via Qiskit",
    ],
    challenges: [
      "Minimizing CNOT gate depth to reduce noise accumulation on IBM Quantum backends.",
      "Mapping image pixel intensity channels efficiently into classical bit pairs for quantum transmission.",
    ],
    outcome:
      "Achieved a 33% reduction in entangled qubit usage compared to baseline protocols with transmission fidelity maintained, securing Runner-Up honors at the Amaravati Quantum Valley Hackathon 2026.",
    githubUrl: "",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Angular",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Oracle"],
  },
  {
    title: "AI",
    skills: ["LLMs", "RAG", "OpenAI APIs"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "Maven"],
  },
  {
    title: "Testing",
    skills: [
      "Cucumber",
      "TestNG",
      "REST API Testing",
      "Postman",
      "Bruno",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Linux",
      "SDLC",
      "Agile",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Amazon Web Services",
    year: "2026",
    description:
      "Validated foundational knowledge of AWS cloud architecture, core compute/storage/database services, security principles, and cloud pricing.",
    badge: "Certification",
  },
  {
    id: "quantum-hackathon",
    title: "Amaravati Quantum Valley Hackathon",
    subtitle: "Runner-Up among 50+ Teams",
    year: "2026",
    description:
      "Awarded 2nd place for optimizing quantum image transmission via superdense coding, achieving a 33% reduction in entangled qubit usage.",
    badge: "Runner-Up",
  },
  {
    id: "sap-hackathon",
    title: "SAP National Hackathon",
    subtitle: "Top 75 Finalist among 1,000+ Teams",
    year: "2025",
    description:
      "Selected as national finalist for TradeGenie, an AI-enabled SME trading platform built with Spring Boot, React, and contextual retrieval.",
    badge: "Top 75 Finalist",
  },
  {
    id: "google-build-india",
    title: "Google Build with India",
    subtitle: "Second Round Qualifier",
    year: "2024",
    description:
      "Qualified for Round 2 in Google's nationwide student developer engineering initiative.",
    badge: "Round 2 Qualifier",
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – Expected May 2027",
    score: "CGPA: 9.61 / 10",
    location: "Vijayawada, Andhra Pradesh",
    highlights: [
      "Academic performance: 9.61 CGPA across core Computer Science curricula.",
      "Coursework: Data Structures, Algorithms, OOP, Database Systems, Computer Networks, Operating Systems.",
    ],
  },
  {
    institution: "Narayana College",
    degree: "Intermediate / 12th Grade (MPC)",
    period: "2021 – 2023",
    score: "Percentage: 95%",
    location: "Visakhapatnam, Andhra Pradesh",
    highlights: [
      "Mathematics, Physics, and Chemistry (MPC).",
      "Completed with 95% distinction.",
    ],
  },
];
