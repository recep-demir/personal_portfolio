import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Code2, Server, Database, Cloud } from "lucide-react";


import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";


export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2, 
    description: "Crafting beautiful, responsive user interfaces", 
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" }, 
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next. js", level: 88, color: "bg-gray-800" }, 
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" }, 
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
},
{
    title: "Backend",
    icon: Server, 
    description: "Building robust server-side solutions", 
    skills: [
      { name: "Node. js", level: 90, color: "bg-green-500" }, 
      { name: "Express. js", level: 88, color: "bg-gray-700"},
      { name: "Python", level: 85, color: "bg-yellow-500" }, 
      { name: "GraphQL", level: 80, color: "bg-pink-600" }, 
      { name: "REST APIs", level: 92, color: "bg-orange-500" }
    ],
},
{
    title: "Database",
    icon: Database, 
    description: "Managing and optimizing data storage", 
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" }, 
      { name: "MongoDb", level: 85, color: "bg-blue-700" }, 
      { name: "Redis", level: 80, color: "bg-red-500" }, 
      { name: "Prisma", level: 82, color: "bg-indigo-600" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" }
    ]
},
{
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications", 
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" }, 
      { name: "AWS", level: 78, color: "bg-orange-600" }, 
      { name: "Vercel", level: 90, color: "bg-gray-900" }, 
      { name: "Git", level: 95, color: "bg-orange-700" }, 
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
},
];



export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

export const STATS = [ 
  { number: "50+", label: "Projects Completed" }, 
  { number: "3+", label: "Years Experience" }, 
  { number: "20+", label: "Technologies" }, 
  { number: "100%", label: "Client Satisfaction" }, 
];


export const PROJECTS = [
{
  id: 1,
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce solution with advanced filtering, payment integration, and inventory management.",
  image: PROJECT_IMG_1,
  tags: ["React", "Tailwind", "Framer Motion"], 
  liveUrl: "#",
  githubUrl: "#",
  featured: false,
  category: "Full Stack",
},
{
  id: 2,
  title: "Blog App with AI Post Generator",
  description: "A full-stack blog app using the MERN stack - with full Markdown support",
  image: PROJECT_IMG_2,
  tags: ["React", "Node. js", "MongoDB", "Tailwind"],
  liveUrl: "https://youtu.be/tUnGudIBBjQ",
  githubUrl: "#",
  featured: true,
  category: "Full Stack",
},
{
  id: 3,
  title: "Task Management App",
  description: "Collaborative project management tool with real-time updates, team chat",
  image: PROJECT_IMG_3,
  tags: ["Next. js", "TypeScript", "Node. js", "MongoDb"],
  liveUrl: "https://youtu.be/fZK57PxKC-0",
  githubUrl: "#",
  featured: true,
  category: "Web App",
},
{
  id: 4,
  title: "AI-Powered Interview Prep App",
  description: "A smart AI-powered Interview Preparation App using the MERN stack",
  image: PROJECT_IMG_4,
  tags: ["Next. js", "TypeScript", "Node. js", "MongoDB"],
  liveUrl: "https://youtu.be/yKB90yM-ao4",
  githubUrl: "#",
  featured: false,
  category: "Web App",
},

];



