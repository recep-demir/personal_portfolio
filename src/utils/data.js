import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import Project_IMG_1 from "../assets/images/project-1.jpg";
import Project_IMG_2 from "../assets/images/project-2.jpg";
import Project_IMG_3 from "../assets/images/project-3.jpg";


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
]
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
]
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




// 1. Menü Linkleri
export const links = [
  { id: 1, href: "#home", text: "Ana Sayfa" },
  { id: 2, href: "#about", text: "Hakkımda" },
  { id: 3, href: "#skills", text: "Yetenekler" },
  { id: 4, href: "#projects", text: "Projeler" },
];

// 2. Yetenekler (Skills)
export const skills = [
  {
    id: 1,
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: "Modern ve responsive (mobil uyumlu) web sayfaları tasarımı.",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <FaJsSquare className="h-16 w-16 text-yellow-500" />,
    text: "Dinamik ve etkileşimli kullanıcı deneyimleri geliştirme.",
  },
  {
    id: 3,
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-400" />,
    text: "Bileşen tabanlı, hızlı ve ölçeklenebilir uygulamalar.",
  },
];

// 3. Projeler (Burayı videonun devamında dolduracağız ama şimdilik örnek kalsın)
export const projects = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://google.com",
    github: "https://github.com",
    title: "Birinci Proje",
    text: "Bu projede React ve Tailwind CSS kullanarak modern bir arayüz tasarladım.",
  },
];