import { PortfolioData } from '../types';

export const portfolio: PortfolioData = {
  personal: {
    name: "B. Sakthivel",
    degree: "B.Tech Information Technology",
    role: "B.Tech IT Student | AI & Full-Stack Developer",
    college: "Adhiparasakthi Engineering College",
    collegeLocation: "Melmaruvathur, Tamil Nadu",
    duration: "2023–2027",
    currentStatus: "4th Year / 7th Semester",
    location: "Tamil Nadu, India",
    cgpa: "8.54 / 10",
    cgpaNote: "Up to 6th Semester",
    heroBadge: "B.Tech IT • Adhiparasakthi Engineering College",
    heroHeading: "B. Sakthivel",
    heroSubtext: "Building practical AI-powered web applications and software systems with React, Java, Python and modern development tools.",
    statusCard: {
      status: "Active Prototype",
      projectName: "VoxShield",
      tagline: "AI Voice Scam & Deepfake Detection"
    },
    aboutSummary: [
      "I am a B.Tech Information Technology student at Adhiparasakthi Engineering College with an authoritative academic record (CGPA 8.54 / 10 up to 6th Semester), dedicated to practical software engineering and applied artificial intelligence.",
      "My development cycle focuses on engineering discipline: designing resilient relational database schemas, implementing robust backend services with Java and Spring Boot, and building responsive, accessible user interfaces with React and TypeScript.",
      "Currently, I serve as a Software Development Intern at Inex.ai, developing modular frontend components and collaborating on live product features. In parallel, I research audio security architectures—most notably VoxShield, an AI prototype for real-time voice scam and deepfake detection."
    ],
    aboutCards: [
      {
        title: "Education",
        value: "B.Tech IT (8.54 CGPA)",
        subtext: "Adhiparasakthi Engineering College • 2023–2027"
      },
      {
        title: "Focus",
        value: "AI • Full-Stack • Web",
        subtext: "React, Java, Python, Spring Boot, MySQL"
      },
      {
        title: "Currently",
        value: "Software Dev Intern",
        subtext: "Inex.ai • Frontend & Component Delivery"
      },
      {
        title: "Research",
        value: "Audio & Speech Security",
        subtext: "VoxShield Deepfake Detection Prototype"
      }
    ],
    currentInternship: {
      role: "Software Development Intern",
      company: "Inex.ai",
      period: "06.2026 – PRESENT",
      status: "ACTIVE",
      description: "Building responsive frontend interfaces and reusable UI components using React.js and modern web standards.",
      responsibilities: [
        "Developing responsive frontend interfaces and reusable UI components using React.js, HTML5, CSS3, and JavaScript.",
        "Building and refining web application features within an existing collaborative product codebase.",
        "Debugging and testing frontend components to ensure consistent cross-device performance and visual polish.",
        "Utilizing Git and GitHub for version control, code collaboration, and team-based development workflows."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"]
    },
    interests: [
      "Artificial Intelligence & GenAI",
      "Full-Stack Web Architecture",
      "Prompt Engineering",
      "Speech Analysis & Deepfake Security",
      "API & Microservice Design",
      "User Experience & Design Systems"
    ]
  },

  social: {
    linkedin: "https://linkedin.com/in/sakthivel-balamurugan-099408326",
    github: "https://github.com/sakthivel-54",
    email: "sakthivelbalamurugan05@gmail.com",
    phone: "+91-9345365522",
    location: "Tamil Nadu, India",
    resumeUrl: "/resume.pdf"
  },

  skills: [
    // FRONTEND
    { name: "HTML", category: "Frontend", description: "Semantic markup, SEO foundations, WCAG 2.2 AA accessibility.", iconName: "FileCode" },
    { name: "CSS", category: "Frontend", description: "Tailwind CSS, responsive layout, custom design tokens, modern micro-interactions.", iconName: "Palette" },
    { name: "JavaScript", category: "Frontend", description: "Modern ES6+, asynchronous async/await, DOM manipulation, reactive programming.", iconName: "Code2" },
    { name: "React", category: "Frontend", description: "Component-driven architecture, custom hooks, state lifecycle, SPA delivery.", iconName: "Atom" },

    // PROGRAMMING
    { name: "Java", category: "Programming", description: "Object-oriented design, collections framework, backend application logic.", iconName: "Coffee" },
    { name: "Python", category: "Programming", description: "AI/ML scripting, DSP signal processing, data transformations, automation.", iconName: "Binary" },

    // BACKEND / DATABASE
    { name: "Spring Boot", category: "Backend / Database", description: "Enterprise Java framework, REST controllers, dependency injection, JPA.", iconName: "Server" },
    { name: "REST APIs", category: "Backend / Database", description: "HTTP contract design, JSON payloads, endpoint integration with Axios.", iconName: "Workflow" },
    { name: "MySQL", category: "Backend / Database", description: "Relational schema design, normalization, indexing, CRUD query optimization.", iconName: "Database" },
    { name: "MariaDB", category: "Backend / Database", description: "ACID transactions, relational data persistence, production query handling.", iconName: "HardDrive" },

    // AI / GENAI
    { name: "Generative AI", category: "AI / GenAI", description: "LLM integration patterns, multimodal APIs, agentic orchestration concepts.", iconName: "Cpu" },
    { name: "Prompt Engineering", category: "AI / GenAI", description: "Context framing, few-shot conditioning, structured output schema generation.", iconName: "Sparkles" },
    { name: "AI Application Development", category: "AI / GenAI", description: "Applying AI models to practical software workflows and user interfaces.", iconName: "Activity" },

    // TOOLS
    { name: "Git", category: "Tools", description: "Branching strategies, version tracking, distributed repository workflows.", iconName: "GitBranch" },
    { name: "GitHub", category: "Tools", description: "Pull requests, code review collaboration, issue tracking, remote repositories.", iconName: "Github" },
    { name: "VS Code", category: "Tools", description: "Optimized developer workflow, debugging environments, extension ecosystem.", iconName: "Terminal" },
    { name: "Figma", category: "Tools", description: "UI wireframing, component prototyping, visual hierarchy, design handoff.", iconName: "Layout" }
  ],

  featuredProject: {
    id: "voxshield",
    name: "VOXSHIELD",
    category: "AI • Speech Intelligence • Cybersecurity",
    badge: "PROTOTYPE / ACADEMIC CONCEPT",
    tagline: "AI Voice Scam & Deepfake Detection",
    description: "An AI-powered voice scam and deepfake detection research prototype engineered to identify suspicious synthetic speech and scam-call patterns in real time.",
    status: "Active Prototype / Concept",
    technologies: [
      "Python",
      "Speech AI",
      "Deepfake Detection",
      "Audio DSP",
      "Acoustic Spectrograms",
      "Edge Architecture"
    ],
    highlights: [
      "Voice deepfake detection prototype",
      "Conversational scam pattern analysis",
      "Real-time composite risk scoring",
      "Privacy-first edge architecture",
      "Narrowband 16kHz acoustic inspection",
      "ACM-VIT Code2Create 7.0 showcase"
    ],
    pillars: [
      {
        title: "Voice Deepfake Detection",
        description: "Evaluates synthetic voice artifacts and vocoder anomalies to distinguish human vocal timbre from cloned audio."
      },
      {
        title: "Scam Pattern Analysis",
        description: "Evaluates conversational dialogues for high-pressure extortion cues, financial demands, and urgency patterns."
      },
      {
        title: "Dynamic Risk Scoring",
        description: "Computes instant probabilistic threat confidence tiers (Low, Medium, High Risk) for caller verification."
      },
      {
        title: "Privacy-First Edge Architecture",
        description: "Designed for localized edge execution, keeping private audio buffers strictly on-device without cloud leakage."
      }
    ],
    conceptMetrics: [
      {
        label: "TARGET RESPONSE",
        value: "< 800ms",
        description: "Design target: sub-second sliding window for immediate caller alerting.",
        type: "concept"
      },
      {
        label: "ACOUSTIC SAMPLING",
        value: "16 kHz",
        description: "Standard narrowband speech signal frequency extraction.",
        type: "concept"
      },
      {
        label: "ANALYSIS PIPELINE",
        value: "Dual-Stream",
        description: "Parallel acoustic feature maps + conversational intent classification.",
        type: "concept"
      },
      {
        label: "PRIVACY TARGET",
        value: "On-Device",
        description: "Design target: localized edge execution without cloud audio relay.",
        type: "concept"
      }
    ],
    caseStudy: {
      problem: "Rapid advancements in generative voice cloning models allow attackers to replicate a target's vocal tone using just seconds of reference audio. Traditional telecom infrastructure lacks automated mechanisms to distinguish genuine human speech from synthetic vocoder outputs during live phone calls.",
      limitationsOfExisting: "Existing telecom fraud countermeasures rely almost exclusively on static phone-number reputation databases and caller ID metadata. Once attackers spoof numbers or employ disposable SIMs, these systems fail completely because they have zero visibility into audio stream authenticity or conversational coercion.",
      proposedSolution: "VoxShield introduces an on-device dual-stream verification architecture: an acoustic feature stream inspecting spectrogram anomalies and phase irregularities, running concurrently with a lightweight conversational intent classifier scoring high-pressure scam dialogues.",
      architecture: [
        {
          step: "01",
          title: "Acoustic Audio Ingestion",
          details: "Captures 16kHz audio stream via on-device circular audio buffer with zero persistent cloud transmission."
        },
        {
          step: "02",
          title: "Spectrogram & Feature DSP",
          details: "Calculates Mel-spectrograms, MFCCs, and spectral centroid shifts to isolate artificial frequency transitions."
        },
        {
          step: "03",
          title: "Scam Intent Classification",
          details: "Evaluates urgency patterns, demand vectors, and high-risk conversational structures."
        },
        {
          step: "04",
          title: "Discrete Alerting Interface",
          details: "Triggers on-screen confidence badges and risk tier indicators directly on the recipient's display."
        }
      ],
      mlPipeline: [
        {
          stage: "Signal Conditioning",
          description: "Bandpass filtering (300Hz–3.4kHz), silence removal, and acoustic energy normalization.",
          tech: "DSP / NumPy / Librosa"
        },
        {
          stage: "Deepfake Detection",
          description: "Extraction of temporal-frequency feature maps revealing synthetic vocoder boundary artifacts.",
          tech: "PyTorch / Spectral CNN"
        },
        {
          stage: "Dialogue Risk Classifier",
          description: "Lightweight conversational intent classification detecting high-pressure scam dialogues.",
          tech: "Transformer NLP / Quantized Models"
        },
        {
          stage: "Edge Quantization",
          description: "Model compression (INT8 / ONNX) designed for low-latency smartphone execution.",
          tech: "ONNX Runtime"
        }
      ],
      realTimeRiskScoring: "The scoring engine computes a weighted composite risk index from 0 to 100. Acoustic deepfake probability contributes 60% of the weight, while conversational urgency heuristics contribute 40%. The result is discretized into three actionable tiers: Verified Human (Green), Suspicious Audio (Amber), and High Probability Cloned Scam (Red).",
      privacyApproach: "VoxShield is architected from the ground up on a strict privacy-first principle. Audio buffers exist exclusively in volatile device RAM and are overwritten after each processing window. Raw voice data is never recorded, stored, or transmitted to any external cloud service.",
      currentPrototype: [
        "Core acoustic feature extraction routines in Python utilizing Librosa and NumPy.",
        "Interactive telemetry evaluation dashboard demonstrating real-time score updates.",
        "Acoustic spectrogram anomaly detection algorithms evaluated on synthesized test audio.",
        "Conversational urgency and extortion script heuristic scoring logic."
      ],
      researchFutureWork: [
        "Benchmarking against standardized deepfake speech datasets (e.g., ASVspoof).",
        "INT8 and ONNX model quantization for low-latency smartphone edge chips.",
        "Multi-lingual phonetic adaptation for regional Indian languages and dialects.",
        "Background daemon integration with mobile operating system telephony hooks."
      ],
      limitations: [
        "Currently an engineering prototype and academic concept evaluated on isolated test audio.",
        "Lossy telephony codecs (AMR, G.711) introduce compression artifacts that require specialized feature training.",
        "Acoustic evaluation requires sufficient caller speech samples (minimum 2–3 seconds) for reliable phase analysis."
      ],
      technologyStack: [
        { category: "Core AI & DSP", items: ["Python", "NumPy", "Librosa", "PyTorch"] },
        { category: "Interface & Telemetry", items: ["React.js", "TypeScript", "Tailwind CSS"] },
        { category: "Target Edge Runtime", items: ["ONNX Runtime", "INT8 Quantization"] }
      ],
      githubAndDemo: {
        statusNote: "VoxShield was showcased at ACM-VIT Code2Create 7.0. The prototype codebase is maintained as an academic research repository; code walkthroughs and technical specifications are available upon verified request.",
        demoAvailable: true,
        repoAvailable: false
      },
      experimentalDisclaimer: "CRITICAL NOTICE: VoxShield is an engineering prototype and academic research concept. Latency and architectural parameters represent design targets for interface evaluation and are not claims of commercial benchmark performance."
    }
  },

  projects: [
    {
      id: "voxshield",
      number: "01",
      name: "VOXSHIELD",
      tagline: "AI Voice Scam & Deepfake Detection",
      description: "An AI-powered voice scam and deepfake detection research prototype engineered to detect synthetic speech artifacts and scam call patterns in real time.",
      category: "AI • Speech Intelligence • Cybersecurity",
      technologies: ["Python", "Speech AI", "Deepfake Detection", "Risk Engine", "Audio DSP"],
      role: "Lead Researcher & Developer (Prototype)",
      status: "Active Prototype",
      sourceStatus: "Academic Research Prototype",
      features: [
        "Real-time acoustic signal feature extraction",
        "Spectrogram anomaly classification pipeline",
        "Urgency & scam dialogue heuristic scoring",
        "Privacy-first edge architecture concept"
      ],
      githubUrl: undefined,
      liveDemoUrl: "#projects",
      caseStudyAvailable: true,
      isFeatured: true,
      accentColor: "#6366F1"
    },
    {
      id: "vehicle-service-management",
      number: "02",
      name: "Vehicle Service Management System",
      tagline: "Full-Stack Enterprise Service Automation",
      description: "A comprehensive service management platform enabling automated booking, live vehicle service tracking, customer records, and invoice generation.",
      category: "Full-Stack • Enterprise",
      technologies: ["React.js", "Spring Boot", "MySQL", "Axios", "REST APIs", "JPA/Hibernate"],
      role: "Full-Stack Developer (Academic Build)",
      status: "Completed",
      sourceStatus: "Academic Project (Available on Request)",
      features: [
        "Customer & vehicle profile management with relational schema",
        "Service booking & status tracking pipeline via REST APIs",
        "Automated billing and invoice generation logic",
        "Relational CRUD operations utilizing JPA and Hibernate"
      ],
      githubUrl: undefined,
      liveDemoUrl: undefined,
      caseStudyAvailable: false,
      isFeatured: false,
      accentColor: "#38BDF8"
    },
    {
      id: "library-management",
      number: "03",
      name: "Library Management System",
      tagline: "Java & Relational Database Architecture",
      description: "A structured system designed to streamline book cataloging, member issue/return workflows, and fine tracking through transactional database persistence.",
      category: "Software Engineering • Database",
      technologies: ["Java", "MySQL", "CRUD", "JDBC", "OOP Design"],
      role: "Backend & Database Developer (Academic Build)",
      status: "Completed",
      sourceStatus: "Academic Project (Available on Request)",
      features: [
        "Complete book inventory catalog management system",
        "Member issue and return lifecycle tracking workflows",
        "Automated overdue fine calculation and records auditing",
        "Optimized relational database schema with JDBC queries"
      ],
      githubUrl: undefined,
      liveDemoUrl: undefined,
      caseStudyAvailable: false,
      isFeatured: false,
      accentColor: "#10B981"
    }
  ],

  missionLog: [
    {
      id: "inex-ai-internship",
      missionCode: "EXP-01",
      period: "06.2026 – PRESENT",
      organization: "Inex.ai",
      role: "Software Development Intern",
      status: "ACTIVE",
      location: "Remote / Engineering Team",
      summary: "Developing responsive frontend interfaces and reusable UI components within an active product codebase.",
      directives: [
        "Developing responsive frontend interfaces and reusable UI components using React.js, HTML5, CSS3, and JavaScript.",
        "Building and refining web application features within an existing product codebase in a collaborative environment.",
        "Debugging and testing frontend components to ensure consistent cross-device performance and UI polish.",
        "Utilizing Git and GitHub for version control, code collaboration, and team-based development workflows."
      ],
      stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"]
    }
  ],

  achievements: [
    {
      id: "ach-posters",
      title: "1st Prize — Poster Palette",
      event: "Poster Palette Competition",
      organizer: "APEC-ACM Student Chapter",
      date: "30 September 2025",
      category: "Competition",
      description: "Awarded 1st Prize for technical presentation, concept visualization, and UI design clarity evaluated by faculty and ACM members.",
      badge: "1st Place Winner"
    },
    {
      id: "ach-webverse",
      title: "1st Prize — Webverse",
      event: "Webverse Web Design Challenge",
      organizer: "APEC-ACM Student Chapter",
      date: "30 September 2025",
      category: "Competition",
      description: "Awarded 1st Prize for responsive web engineering, creative problem solving, and modern aesthetic execution.",
      badge: "1st Place Winner"
    },
    {
      id: "ach-infographix",
      title: "Coordinator — INFOGRAPHIX",
      event: "INTELLECTRA 2K26 Symposium",
      organizer: "Adhiparasakthi Engineering College",
      date: "09 April 2026",
      category: "Leadership",
      description: "Served as Student Coordinator for INFOGRAPHIX under INTELLECTRA 2K26, managing technical paper presentations and participant evaluations.",
      badge: "Event Coordinator"
    },
    {
      id: "ach-code2create",
      title: "Hackathon Competitor — VoxShield",
      event: "Code2Create 7.0",
      organizer: "ACM-VIT",
      date: "2025",
      category: "Hackathon",
      description: "Showcased the VoxShield voice scam and deepfake detection concept at one of India's premier national hackathons, demonstrating prototype spectrogram feature extraction.",
      badge: "Hackathon Competitor"
    }
  ],

  certifications: [
    {
      id: "cert-meta",
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "Jun 2025",
      skillsCovered: ["HTML5", "CSS3", "JavaScript", "UI Principles"],
      type: "Certification"
    },
    {
      id: "cert-oracle",
      title: "Oracle Cloud Infrastructure — Foundations Associate",
      issuer: "Oracle University",
      date: "Apr 2025",
      skillsCovered: ["Cloud Architecture", "OCI Infrastructure", "Security & Governance"],
      type: "Certification"
    },
    {
      id: "cert-cisco",
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "Apr 2025",
      skillsCovered: ["Data Analysis", "Python Fundamentals", "Analytical Methods"],
      type: "Certification"
    },
    {
      id: "cert-hackerrank",
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Apr 2025",
      skillsCovered: ["Java Core", "OOP", "Algorithms & Data Structures"],
      type: "Certification"
    },
    {
      id: "cert-infosys",
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "Feb 2025",
      skillsCovered: ["Python Syntax", "Data Structures", "Control Logic"],
      type: "Certification"
    },
    {
      id: "cert-hp",
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "Verified Course",
      skillsCovered: ["AI Fundamentals", "Machine Learning Basics", "Real-World AI Applications"],
      type: "Certification"
    },
    {
      id: "cert-chatgpt",
      title: "ChatGPT for Everyone",
      issuer: "Professional AI Learning",
      date: "Verified Course",
      skillsCovered: ["Generative AI", "Prompt Engineering", "Workflow Automation"],
      type: "Certification"
    },
    {
      id: "cert-passport",
      title: "AI Skills Passport",
      issuer: "AI Skills Initiative",
      date: "Verified Credential",
      skillsCovered: ["AI Literacy", "Ethics in AI", "Applied Intelligence"],
      type: "Certification"
    },
    {
      id: "cert-aws",
      title: "AWS Solutions Architecture Simulation",
      issuer: "AWS / Forage",
      date: "Verified Simulation",
      skillsCovered: ["Cloud Design Principles", "Scalable Systems", "Storage & Compute"],
      type: "Certification"
    },
    {
      id: "cert-srmist",
      title: "Generative AI Workshop",
      issuer: "SRMIST",
      date: "Jul 2025",
      skillsCovered: ["Generative AI", "LLM Foundations", "Prompt Engineering"],
      type: "Professional Development"
    },
    {
      id: "cert-gdg",
      title: "Cloud Community Days Madurai",
      issuer: "GDG Madurai",
      date: "2025",
      skillsCovered: ["Cloud Technologies", "Developer Ecosystems", "Architecture"],
      type: "Professional Development"
    },
    {
      id: "cert-esales",
      title: "Industrial Visit — eSales Software Solutions",
      issuer: "eSales Software Solutions",
      date: "Sep 2024",
      skillsCovered: ["Enterprise Software", "Industry Workflows", "Production Delivery"],
      type: "Professional Development"
    }
  ],

  education: {
    degree: "B.Tech Information Technology",
    field: "Information Technology",
    institution: "Adhiparasakthi Engineering College",
    location: "Melmaruvathur, Tamil Nadu",
    duration: "2023–2027",
    currentStatus: "4th Year / 7th Semester",
    cgpa: "8.54 / 10",
    cgpaNote: "Up to 6th Semester",
    highlights: [
      "Rigorous coursework in Data Structures, Relational Database Management, Object-Oriented Programming (Java), and Software Engineering.",
      "Maintained an authoritative CGPA of 8.54 / 10 up to 6th Semester.",
      "Active participant in ACM student chapter initiatives, national hackathons, and technical symposium coordination."
    ],
    secondaryEducation: [
      {
        standard: "HSC — Class XII",
        school: "SAB Matriculation Higher Secondary School",
        location: "Theni, Tamil Nadu",
        score: "82.50%",
        year: "2023"
      },
      {
        standard: "SSLC — Class X",
        school: "St. Aloysius Higher Secondary School",
        location: "Theni, Tamil Nadu",
        score: "100%",
        year: "2021"
      }
    ]
  }
};
