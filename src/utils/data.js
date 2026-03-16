import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { 
  Code2, Server, Briefcase, 
  GraduationCap, Heart, Coffee, BookOpen, 
  Rocket, ShieldCheck, Mail, MapPin, Phone, Cpu 
} from "lucide-react";

// Proje resimlerini buraya import etmeyi unutma
import PROJECT_IMG_1 from "../assets/images/project-1.jpg"; 
import PROJECT_IMG_2 from "../assets/images/project-interview.png";
import PROJECT_IMG_3 from "../assets/images/project-stock.png";
import PROJECT_IMG_4 from "../assets/images/project-blogapp.png";
import PROJECT_IMG_5 from "../assets/images/project-todo.png"
import PROJECT_IMG_6 from "../assets/images/project-expenses.png"

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
    tags: ["Python", "LangChain","RAG", "Docker", "DevOps"], 
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "AI & Automation",
  },
  {
    id: 2,
    title: "AI-Powered Interview Prep",
    description: "Smart interview preparation platform using Gemini AI to generate role-specific questions and explanations.",
    image: PROJECT_IMG_2, 
    tags: ["MERN Stack", "Gemini AI", "Tailwind CSS", "JWT", "Multer"],
    liveUrl: "https://interview-prep-app.netlify.app/",
    githubUrl: "https://github.com/recep-demir/interview-prep-ai.git",
    featured: true,
    category: "AI & Full Stack",
  },
 {
    id: 3,
    title: "MERN Stock Management System",
    description: "A full-stack inventory and transaction tracking system featuring real time dashboards with Tremor and MUI.",
    image: PROJECT_IMG_3, 
    tags: ["MERN Stack", "Redux Toolkit", "Tremor", "MUI", "JWT", "Swagger"],
    liveUrl: "https://stockapp-mern.netlify.app/",
    githubUrl: "https://github.com/recep-demir/StockAppMERN.git",
    featured: true,
    category: "Full Stack",
},
    {
  id: 4,
  title: "PERN Stack Blog Platform",
  description: "A professional blog system migrated from NoSQL to PostgreSQL, using Sequelize ORM and featuring a robust relational data structure.",
  image: PROJECT_IMG_4, 
  tags: ["PERN Stack", "PostgreSQL", "Sequelize",, "MUI", "Swagger"],
  liveUrl: "https://milestone-blogapp-pern.netlify.app/",
  githubUrl: "https://github.com/recep-demir/Milestone-BlogApp-PERN.git",
  featured: false,
  category: "Full Stack",
},  
{
  id: 5,
  title: "TypeScript Full-Stack Task Manager",
  description: "Full-stack Task Manager built with React and PostgreSQL, featuring Docker support.",
  image: PROJECT_IMG_5, 
  tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
  liveUrl: "https://typescript-fs-todo-app.netlify.app/",
  githubUrl: "https://github.com/recep-demir/todo-app-ts.git",
  featured: false,
  category: "Full Stack",
},
    {
    
    id: 6,
  title: "Cloud-Sync Financial Tracker",
  description: "A modern financial tracking application featuring global state management and persistent data storage.",
  image: PROJECT_IMG_6, 
  tags: ["React 19", "Context API", "Firebase", "Toastify"],
  liveUrl: "https://expenses-tracker11.netlify.app/",
  githubUrl: "https://github.com/recep-demir/expenses-tracker-react-firebase.git",
  featured: false,
  category: "Financial Tech",
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