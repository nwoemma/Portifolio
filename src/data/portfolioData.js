import cvFile from "../assets/Emmanuel Nwosu.pdf";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  // { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "Software Engineer · Backend Architecture",
  name: "Emmanuel Nwosu",
  role: "Python/Django Backend & Full-Stack Engineer",
  headline: "I design and build reliable software systems around real business workflows.",
  supporting:
    "5 years of software development experience focused on Python, Django, RESTful APIs, relational data architecture, and full-stack applications.",
  location: "Aba, Nigeria",
  availability: "Available for Remote Work & Contracts",
  stat: { value: "5", label: "Years of Software Development" },
  primaryCta: { label: "Explore Systems", href: "/projects" },
  secondaryCta: { label: "Work With Me", href: "/contact" },
};

export const ABOUT = {
  paragraphs: [
    "I started software development in 2021 as a self-taught front-end developer, building a foundation in HTML, CSS and JavaScript and completing the W3C Front-End Web Developer Professional Certificate.",
    "Since 2022, my work has increasingly centered on backend engineering with Python and Django — designing RESTful APIs, relational data models, business logic and application workflows, while also delivering React-based interfaces and mobile applications when the product requires them.",
    "My approach is architecture-first: understand the business workflow, define the data and system boundaries, establish clear API contracts, then implement the individual components around that structure.",
  ],
  principles: [
    "Clear separation between presentation, application logic and persistence",
    "Stateless REST API architecture for predictable client-server communication",
    "Relational data models designed around real business entities and workflows",
    "Explicit API boundaries between web, mobile and backend systems",
    "Maintainable application structures designed for change",
    "Testing and validation around important application behavior",
  ],
};

export const ARCHITECTURE = {
  eyebrow: "Architecture",
  heading: "Systems before screens.",
  subheading:
    "I approach software as a system of interacting layers rather than a collection of isolated features.",
  layers: [
    {
      name: "Client Layer",
      technologies: ["React", "Flutter"],
      description:
        "Interfaces that consume defined backend contracts and represent application state to users.",
    },
    {
      name: "API Layer",
      technologies: ["REST", "Django REST Framework"],
      description:
        "Stateless API boundaries responsible for communication between clients and backend application logic.",
    },
    {
      name: "Application Layer",
      technologies: ["Python", "Django"],
      description:
        "Business rules, validation, authentication, authorization and domain-level application behavior.",
    },
    {
      name: "Data Layer",
      technologies: ["PostgreSQL", "MySQL"],
      description:
        "Relational persistence designed around entities, relationships, transactions and application workflows.",
    },
  ],
  architecturePrinciples: [
    "Stateless backend architecture",
    "API-first application boundaries",
    "Relational data modeling",
    "Separation of concerns",
    "Explicit business logic",
    "Maintainable application structure",
  ],
};

export const EXPERIENCE = [
  {
    year: "2022 — 2025",
    title: "Software Development",
    company: "Ashpot",
    location: "Aba",
    note: "Junior Developer",
    focus: "Application development",
    bullets: [
      "Contributed to software systems including Earlystart and Billvenv.",
      "Worked across application functionality and backend-related development.",
      "Applied structured development practices to real application requirements.",
    ],
  },
  {
    year: "2025 — 2026",
    title: "Software Development",
    company: "Ricks Development",
    location: "Calabar / Remote",
    note: "Software Development Intern",
    focus: "Backend, web, mobile and machine learning",
    bullets: [
      "Worked on backend and application development across multiple software projects.",
      "Developed the Obodo backend using Django REST Framework with documented API endpoints.",
      "Contributed to Billway across web and mobile application development.",
      "Worked on Python-based machine learning applications.",
      "Built frontend work including the Bitmonie landing page.",
    ],
  },
  {
    year: "2026 — Present",
    title: "Django Application Development",
    company: "Skilicolomy",
    location: "Port Harcourt",
    note: "Skileman project",
    focus: "Django backend engineering",
    bullets: [
      "Worked on the Skileman project using Django.",
      "Contributed to application development around a Django-based architecture.",
    ],
  },
  {
    year: "2021",
    title: "Self-Taught Software Development",
    company: null,
    location: null,
    note: "Foundation",
    focus: "Front-end engineering",
    bullets: [
      "Started learning and developing software independently.",
      "Built foundations in HTML, CSS and JavaScript.",
      "Completed the W3C Front-End Web Developer Professional Certificate.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Weldork",
    context: "Independent · Full-Stack System",
    architecture: "React → Django REST Framework → PostgreSQL",
    description:
      "A full-stack welding management system structured around operational workflows including job records, scheduling, billing and reporting.",
    tech: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Token Authentication",
    ],
    architecturePoints: [
      "React presentation layer",
      "Stateless REST API communication",
      "Django application layer",
      "PostgreSQL relational persistence",
      "Authentication boundary between client and backend",
    ],
    contribution:
      "Designed and implemented the React client and Django REST Framework backend, including authentication and relational data models.",
    links: [
      { label: "Live System", href: "https://welding-frontend.vercel.app" },
      { label: "Source Code", href: "https://github.com/nwoemma/welding_frontend" },
    ],
  },

  {
    title: "Obodo Backend",
    context: "Ricks Development · Backend",
    architecture: "Client → REST API → Django → PostgreSQL",
    description:
      "A Django REST Framework backend exposing structured API endpoints through a documented Swagger/OpenAPI interface.",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Swagger / OpenAPI",
    ],
    architecturePoints: [
      "RESTful API boundary",
      "Django application layer",
      "Relational persistence",
      "Documented API contract",
    ],
    contribution:
      "Developed and documented REST API endpoints for the Obodo platform.",
    links: [
      {
        label: "API Documentation",
        href: "https://obodo-backend.onrender.com/api/docs",
      },
    ],
  },

  {
    title: "Billway",
    context: "Ricks Development · Web & Mobile",
    architecture: "Web Client + Mobile Client → Backend Services",
    description:
      "A billing and payments platform spanning a web application and companion mobile application.",
    tech: ["Django", "React", "Flutter"],
    architecturePoints: [
      "Multiple client applications",
      "Backend-driven application workflows",
      "Web and mobile integration",
    ],
    contribution:
      "Contributed to the web platform and participated in building the mobile application during my work with Ricks Development.",
    links: [
      { label: "Live Platform", href: "https://billwayhq.com/" },
      {
        label: "Mobile Application",
        href: "https://play.google.com/store/apps/details?id=com.billway.billway",
      },
    ],
  },

  {
    title: "KYC Machine Learning Service",
    context: "Ricks Development · Python / Machine Learning",
    architecture: "Application Layer → ML Processing → Verification Workflow",
    description:
      "A Python-based machine learning service developed around identity and document verification workflows.",
    tech: ["Python", "Machine Learning"],
    architecturePoints: [
      "Python application layer",
      "Machine learning processing",
      "Verification workflow",
      "Service-oriented processing",
    ],
    contribution:
      "Built the machine-learning-powered verification service.",
    links: [
      {
        label: "Live Service",
        href: "https://nwoemma-kyc-service.hf.space/",
      },
    ],
  },

  {
    title: "Zimason Business Management System",
    context: "Independent · Frontend Architecture Demo",
    architecture: "React → Centralized State → Local Persistence",
    description:
      "A frontend business-management system designed around operational workflows including inventory, purchasing, sales, customers, credit, staff orders, invoices and order status.",
    tech: ["React", "Centralized Frontend State", "localStorage"],
    architecturePoints: [
      "Role-oriented application structure",
      "Centralized frontend state",
      "Cross-section data synchronization",
      "Local persistence for demonstration",
      "Business workflow modeling",
    ],
    contribution:
      "Designed and implemented the frontend architecture and business workflow interface. The demo uses mock data and localStorage rather than a production backend.",
    links: [],
  },

  {
    title: "Skileman",
    context: "Skilicolomy · Django",
    architecture: "Django Application Architecture",
    description:
      "A Django-based application project developed as part of work with Skilicolomy in Port Harcourt.",
    tech: ["Python", "Django"],
    architecturePoints: [
      "Django application structure",
      "Backend-driven application logic",
      "Relational application data",
    ],
    contribution:
      "Contributed to development of the Django-based Skileman project.",
    links: [],
  },

  {
    title: "Billvenv",
    context: "Ashpot · Application Development",
    architecture: "Flutter Client + Backend",
    description:
      "A Flutter and Dart mobile application developed with backend-related work as part of my work with Ashpot.",
    tech: ["Flutter", "Dart"],
    architecturePoints: [
      "Cross-platform mobile client",
      "Backend integration",
      "Application workflow implementation",
    ],
    contribution:
      "Built the mobile application and contributed to backend development.",
    links: [
      {
        label: "Demo",
        href: "https://drive.google.com/file/d/1PBh_D_vgNfsWt9U-LoHRKD5Fcnoep5wn/view?usp=sharing",
      },
    ],
  },

  {
    title: "Bitmonie",
    context: "Ricks Development · Frontend",
    architecture: "React Presentation Layer",
    description:
      "A frontend landing experience developed for a finance and money-management product.",
    tech: ["React", "Tailwind CSS"],
    architecturePoints: [
      "Component-based frontend architecture",
      "Responsive presentation layer",
      "Structured UI composition",
    ],
    contribution: "Built the landing page frontend.",
    links: [
      {
        label: "Live Interface",
        href: "https://bitmonie.vercel.app/",
      },
    ],
  },

  {
    title: "Xaddie",
    context: "Independent",
    architecture: "Web Application",
    description:
      "An independently developed and deployed web application.",
    tech: [],
    architecturePoints: [],
    contribution:
      "Designed and implemented the application independently.",
    links: [
      {
        label: "Live Application",
        href: "https://xaddie.vercel.app/",
      },
    ],
  },
];

export const SKILLS = [
  {
    category: "Backend",
    emphasis: true,
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "RESTful APIs",
      "Stateless API Architecture",
      "Business Logic",
      "API Design",
    ],
  },
  {
    category: "Data",
    emphasis: true,
    items: [
      "PostgreSQL",
      "MySQL",
      "Relational Data Modeling",
      "Database Design",
      "Data Relationships",
      "Persistence Design",
    ],
  },
  {
    category: "Frontend",
    emphasis: false,
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "API Integration",
    ],
  },
  {
    category: "Mobile",
    emphasis: false,
    items: [
      "Flutter",
      "Dart",
      "Mobile Application Architecture",
      "Backend Integration",
    ],
  },
  {
    category: "Engineering",
    emphasis: false,
    items: [
      "TDD",
      "Git",
      "Debugging",
      "Application Maintenance",
      "Code Organization",
      "API Documentation",
    ],
  },
  {
    category: "Additional",
    emphasis: false,
    items: [
      "Machine Learning",
      "Cybersecurity",
    ],
  },
];

export const SERVICES = [
  {
    title: "Backend Architecture",
    description:
      "Design and implementation of Django-based backend systems around clear application boundaries, business logic and relational data models.",
  },
  {
    title: "Stateless REST APIs",
    description:
      "API architectures designed around predictable request/response flows for web and mobile clients.",
  },
  {
    title: "Business Systems",
    description:
      "Software systems that model operational workflows such as inventory, sales, orders, customers and billing.",
  },
  {
    title: "Data Architecture",
    description:
      "Relational database structures designed around business entities, relationships and application workflows.",
  },
  {
    title: "Full-Stack Systems",
    description:
      "Complete applications connecting React presentation layers with Django backend and persistence layers.",
  },
  {
    title: "API Integration",
    description:
      "Integration between application components, external services and existing backend systems through defined interfaces.",
  },
  {
    title: "Application Reliability",
    description:
      "Debugging, maintenance and structural improvements aimed at keeping existing applications dependable and maintainable.",
  },
  {
    title: "Flutter Applications",
    description:
      "Cross-platform mobile applications connected to backend services and application APIs.",
  },
  {
    title: "Machine Learning Services",
    description:
      "Python-based ML applications applied to practical verification and decision-support workflows.",
  },
];

export const CONTACT = {
  email: "nwosuemmanuel159@gmail.com",
  github: "https://github.com/nwoemma",
  githubLabel: "github.com/nwoemma",
  linkedin: "https://www.linkedin.com/in/emmanuel-nwosu-a6369332a",
  linkedinLabel: "linkedin.com/in/emmanuel-nwosu",
  whatsapp: "https://wa.me/2347082107715",
  cv: cvFile,
  availableFor: [
    "Remote Software Roles",
    "Backend Engineering",
    "Contract Projects",
    "Full-Time Opportunities",
    "Freelance Development",
  ],
};

export const SECTION_COPY = {
  hero: {
    eyebrow: "Python · Django · Backend Architecture",
    panelFileName: "BACKEND_ARCHITECTURE",
    panelItems: [
      "Python",
      "Django",
      "Stateless REST APIs",
      "Relational Data",
      "Business Systems",
    ],
  },

  about: {
    eyebrow: "Engineering Approach",
    heading: "Architecture first. Implementation second.",
  },

  architecture: {
    eyebrow: "System Architecture",
    heading: "Designing the boundaries between systems.",
    subheading:
      "From client applications to APIs, application logic and persistent data, each layer has a defined responsibility.",
  },

  skills: {
    eyebrow: "Technical Foundation",
    heading: "A backend-led engineering stack.",
    subheading:
      "Python and Django form the core. React, Flutter, databases and machine learning extend that foundation when the system requires them.",
  },

  services: {
    eyebrow: "What I Build",
    heading: "Software systems designed around real workflows.",
  },

  projects: {
    eyebrow: "Selected Systems",
    heading: "Applications, APIs and business systems.",
    subheading:
      "A selection of real projects showing backend architecture, API design, data modeling, full-stack development and application workflows.",
  },

  experience: {
    eyebrow: "Experience",
    heading: "Five years of software development across backend, web and mobile systems.",
  },

  contact: {
    eyebrow: "Let's Work",
    heading: "Have a system that needs to be built?",
  },
};