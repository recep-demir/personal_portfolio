import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

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