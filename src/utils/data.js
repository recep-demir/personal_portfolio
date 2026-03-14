import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { 
  Code2, Server, Briefcase, 
  GraduationCap, Heart, Coffee, BookOpen, 
  Rocket, ShieldCheck, Mail, MapPin, Phone, Cpu 
} from "lucide-react";

// Proje resimlerini buraya import etmeyi unutma
import PROJECT_IMG_1 from "../assets/images/project-1.jpg"; 
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "AI & Automation",
    icon: Cpu, 
    description: "Developing intelligent agents and automated workflows", 
    skills: [
      { name: "Python (Automation)", level: 75, color: "bg-yellow-500" }, 
      { name: "LangChain / RAG", level: 75, color: "bg-orange-500" },
      { name: "AI Agent Frameworks", level: 70, color: "bg-purple-500" }, 
      { name: "Prompt Engineering", level: 80, color: "bg-blue-500" }, 
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2, 
    description: "Building responsive and intuitive user interfaces", 
    skills: [
      { name: "React.js", level: 75, color: "bg-blue-400" }, 
      { name: "JavaScript / TypeScript", level: 75, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 75, color: "bg-cyan-500" }, 
      { name: "HTML5 / CSS3", level: 90, color: "bg-orange-600" }, 
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server, 
    description: "Robust server-side logic and infrastructure", 
    skills: [
      { name: "Node.js / Express", level: 75, color: "bg-green-600" }, 
      { name: "PostgreSQL / MongoDB", level: 70, color: "bg-emerald-500" },
      { name: "Docker", level: 60, color: "bg-blue-700" }, 
      { name: "Firebase / Auth", level: 85, color: "bg-orange-600" }
    ],
  },
  {
    title: "Testing & Tools",
    icon: ShieldCheck,
    description: "Ensuring code quality and efficient delivery", 
    skills: [
      { name: "Cypress.js", level: 75, color: "bg-slate-700" }, 
      { name: "Git / GitHub", level: 90, color: "bg-orange-700" }, 
      { name: "Postman / APIs", level: 85, color: "bg-orange-500" }, 
      { name: "Vite / CLI", level: 80, color: "bg-indigo-500" }, 
    ],
  },
];

export const TECH_STACK = [
  "Next.js",
  "Bootstrap",
  "SASS",
  "Material UI",
  "Styled Components",
  "Redux.js",
  "Axios",
  "Mongoose",
  "Sequelize",
  "JSON Web Token (JWT)",
  "SQL / NoSQL",
  "SQLite3",
];

export const STATS = [ 
  { number: "15+", label: "Projects Built" }, 
  { number: "10+", label: "Technologies" }, 
  { number: "6+", label: "Years Prof. Experience" },
  { number: "3", label: "Languages Spoken" }, 
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Self-Healing System",
    description: "A specialized system that monitors logs, analyzes errors using LLMs, and suggests automated fixes (In Progress).",
    image: PROJECT_IMG_1,
    tags: ["Python", "LangChain", "Docker", "DevOps"], 
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "AI & Automation",
  },
  {
    id: 2,
    title: "Legal Tech Case Analyzer",
    description: "Leveraging my Law background to build an AI tool that summarizes legal documents and identifies key risks.",
    image: PROJECT_IMG_2,
    tags: ["React", "Python", "RAG", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    
    id: 3,
    title: "E-Commerce Management Suite",
    description: "A full-featured dashboard for inventory and sales tracking, inspired by my e-commerce business experience.",
    image: PROJECT_IMG_3,
    tags: ["Node.js", "MongoDB", "React", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2006 - 2022",
    title: "Leadership & Engineering",
    company: "Naval Officer",
    description: "Developed strong discipline, electrical engineering foundations, and team management skills in high-pressure environments.",
    icon: Briefcase,
    color: "bg-blue-900",
  },
  {
    year: "2022",
    title: "Entrepreneurship",
    company: "E-commerce Founder",
    description: "Started my IT journey by building and managing WordPress/WooCommerce solutions and digital marketing workflows.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2023",
    title: "Intensive Tech Transition",
    company: "Powercoders Bootcamp",
    description: "Focused on Full-Stack development and modern web technologies (MERN stack).",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Specializing in AI & DevOps",
    company: "Portfolio Development",
    description: "Deepening expertise in AI Agents, RAG, and Cloud Automation to solve operational challenges.",
    icon: Cpu,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Passionate about making systems smarter and reducing manual toil.",
  },
  {
    icon: Heart,
    title: "Operational Excellence",
    description: "Applying military-grade discipline to software quality and reliability.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description: "Bridging the gap between engineering, law, and cutting-edge AI.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/recep-demir",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/recep-demir",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:recep.demir@powercoders.org",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Lucerne, Switzerland",
  },
  {
    icon: Mail,
    label: "Email",
    value: "recep.demir@powercoders.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+41 76 702 24 96",
  },
];