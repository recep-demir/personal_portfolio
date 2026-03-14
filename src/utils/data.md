import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Code2, Server, Database, Cloud, Briefcase, GraduationCap, Heart, Coffee, BookOpen, Rocket, Award,Mail,MapPin,Phone } from "lucide-react";


import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import { color } from "framer-motion";


export const SKILLS_CATEGORY = [
{
    title: "AI & Automation",
    icon: Cpu, 
    description: "Developing intelligent agents and automated workflows", 
    skills: [
      { name: "Python (Automation)", level: 85, color: "bg-yellow-500" }, 
      { name: "LangChain / RAG", level: 75, color: "bg-orange-500" },
      { name: "AI Agent Frameworks", level: 70, color: "bg-purple-500" }, 
      { name: "Prompt Engineering", level: 90, color: "bg-blue-500" }, 
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

export const JOURNEY_STEPS = [
  {
    year: "2020",
    title: "Started My Journey",
    company: "Self-Taught Developer",
    description: "Began my journey into web development, learning the basics of HTML, CSS, and JavaScript.",
    icon:Code2,
    color: "bg-blue-500",
  },
  {
    year: "2021",
    title: "First Internship",
    company: "Tech Startup",
    description: "Landed my first internship at a tech startup, where I gained hands-on experience with React and Node. js.",
    icon:Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description: "Graduated with honors, specializing in web technologies and software engineering.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Promoted to full-time developer role. Built end-to-end applications using MERN stack.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    company: "Independent",
    description: "Started freelancing and contributing to open source projects. Launched 3 successful projects.",
    icon: Award,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:alex@example.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alex@timetoprogram.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
];