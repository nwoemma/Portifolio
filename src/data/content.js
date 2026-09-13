import {
  Building2,
  Shield,
  Server,
  Wrench,
  CreditCard,
  Coins,
  Globe,
  Package,
  Layers,
  Smartphone,
  Zap,
  UploadCloud,
  ExternalLink,
  Github,
  Fingerprint
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const FEATURED_PROJECTS = [
  {
    icon: Building2,
    iconBg: "bg-blue-600",
    title: "Welding Management System",
    description:
      "Comprehensive management system with records, scheduling, billing, and reporting modules.",
    tags: ["React", "Django REST", "PostgreSQL", "Django Default Token Auth"],
    primary: {
      label: "Live Demo",
      href: "https://welding-frontend.vercel.app",
      icon: ExternalLink,
      disabled: false,
    },
    secondary: {
      label: "Code",
      href: "https://github.com/nwoemma/welding_frontend",
      icon: Github,
      disabled: false,
    },
  },
  {
    icon: Shield,
    iconBg: "bg-purple-600",
    title: "Scalable Authentication Service",
    description:
      "Robust authentication API with JWT, OAuth2, password resets, and email verification.",
    tags: ["Django REST", "JWT", "PostgreSQL", "Redis"],
    // Placeholder — original source had "#" here. Swap in real URLs when available.
    primary: { label: "API Docs", href: "#", icon: ExternalLink, disabled: true },
    secondary: { label: "Code", href: "#", icon: Github, disabled: true },
  },
  {
    icon: Server,
    iconBg: "bg-emerald-600",
    title: "CI/CD & Infrastructure Automation",
    description:
      "Reusable GitHub Actions workflows, Terraform for infra provisioning, and Dockerized services.",
    tags: ["Docker", "Terraform", "GitHub Actions", "AWS ECS"],
    // Placeholder — original source had "#" here. Swap in real URLs when available.
    primary: { label: "Case Study", href: "#", icon: Package, disabled: true },
    secondary: { label: "Templates", href: "#", icon: Github, disabled: true },
  },
  {
  icon: Fingerprint,
  iconBg: "bg-indigo-600",
  title: "KYC Machine Learning Services",
  description:
    "Developed a machine-learning-powered service for identity/document verification, facial matching, liveness detection, and customer risk assessment.",
  tags: ["Machine Learning", "Facial Recognition", "Liveness Detection", "Risk Assessment"],
  primary: {
    label: "Live Demo",
    href: "https://nwoemma-kyc-service.hf.space/",
    icon: ExternalLink,
    disabled: false,
  },
  secondary: { label: "Code", href: "#", icon: Github, disabled: true },
},
];

export const OTHER_PROJECTS = [
  
  {
    icon: CreditCard,
    // Title/description inferred from the URL — update with the real project name/summary.
    title: "Billway",
    description: "Billing and payments platform live at billwayhq.com.",
    linkLabel: "View Live",
    href: "https://billwayhq.com/",
    disabled: false,
  },
  {
    icon: Coins,
    // Title/description inferred from the URL — update with the real project name/summary.
    title: "Bitmonie",
    description: "Finance/money-management app deployed on Vercel.",
    linkLabel: "View Live",
    href: "https://bitmonie.vercel.app/",
    disabled: false,
  },
  {
    icon: Globe,
    // Title/description inferred from the URL — update with the real project name/summary.
    title: "Xaddie",
    description: "Web application deployed on Vercel.",
    linkLabel: "View Live",
    href: "https://xaddie.vercel.app/",
    disabled: false,
  },
  {
    icon: Package,
    title: "API Collections",
    description: "Swagger documentation for the Obodo backend API.",
    linkLabel: "View Docs",
    href: "https://obodo-backend.onrender.com/api/docs",
    disabled: false,
  },
];

export const FRONTEND_SKILLS = [
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React & Ecosystem", level: 82 },
  { name: "HTML5 / CSS3", level: 88 },
  { name: "Tailwind / Bootstrap", level: 86 },
];

export const BACKEND_SKILLS = [
  { name: "Django & Django REST", level: 97 },
  { name: "PostgreSQL / MySQL", level: 93 },
  { name: "Docker & Containerization", level: 90 },
  { name: "Platform as a Service (PaaS)", level: 80 },
  { name: "AWS / Cloud Services", level: 88 },
];

export const ALL_SKILLS = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Django",
  "Django REST Framework",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "GitHub Actions",
  "AWS",
  "Terraform",
  "Jest",
  "Pytest",
  "Postman",
  "Git",
  "REST APIs",
  "GraphQL",
  "WebSockets",
];

export const TIMELINE = [
  {
    title: "Full Stack Developer",
    period: "2022 - Present",
    text: "Building web applications with React and Django, focusing on scalable architecture and user experience.",
  },
  {
    title: "Backend Specialist",
    period: "2021 - 2022",
    text: "Developed RESTful APIs and microservices with Django REST Framework and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    period: "2020 - 2021",
    text: "Created responsive user interfaces with React, implementing modern design systems and component libraries.",
  },
];

export const OFFERINGS = [
  {
    icon: Layers,
    title: "Full Stack Development",
    text: "End-to-end web application development from concept to deployment.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Creating applications that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    text: "Optimizing applications for speed, efficiency, and scalability.",
  },
  {
    icon: UploadCloud,
    title: "DevOps & Deployment",
    text: "Setting up CI/CD pipelines and cloud infrastructure for reliable deployments.",
  },
];

export const AVAILABILITY = [
  { label: "Full-Time Roles", className: "bg-blue-600 text-white" },
  { label: "Freelance Contracts", className: "bg-purple-600 text-white" },
  { label: "Project Collaboration", className: "bg-emerald-600 text-white" },
  { label: "Technical Consulting", className: "bg-amber-500 text-slate-900" },
  { label: "Remote Jobs", className: "bg-teal-600 text-white" },
];

export const CONTACT = {
  email: "nwosuemmanuel159@gmail.com",
  github: "https://github.com/nwoemma",
  githubLabel: "github.com/nwoemma",
  linkedin: "https://www.linkedin.com/in/emmanuel-nwosu-a6369332a",
  linkedinLabel: "linkedin.com/in/emmanuel-nwosu",
  whatsapp: "https://wa.me/2347082107715",
  // Fixed typo from original source ("asserts" -> "assets"). Upload the actual PDF to public/assets/.
  cv: "/assets/Emmanuel_Nwosu_new_CV.pdf",
};
