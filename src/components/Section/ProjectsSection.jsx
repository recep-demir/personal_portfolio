import { useRef, useState, useEffect } from "react"; // useState ve useEffect eklendi
import { motion, useInView, AnimatePresence } from "framer-motion"; // AnimatePresence eklendi
import { FiGithub } from "react-icons/fi"; // GitHub ikonu için

import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "../ProjectCard";
import { containerVariants, itemVariants } from "../../utils/helper";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Mobil kontrolü ve "Daha Fazla" durumu için state
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran genişliğini takip et
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Projeleri filtrele: Mobilde başlangıçta sadece ilk 3 (featured olanlar zaten verinde başta gelir)
  const displayedProjects = isMobile && !showAllMobile 
    ? PROJECTS.slice(0, 3) 
    : PROJECTS;

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-20 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements - Dokunulmadı */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Dokunulmadı */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20" 
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Recent 
            <span className="text-blue-500 font-medium"> Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto font-light leading-relaxed`}
          >
            A collection of projects that showcase my expertise in building modern web applications and solving complex problems.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isDarkMode={isDarkMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Buton Alanı */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center mt-16 space-y-6"
        >
          {/* Mobilde "Show More" Butonu */}
          {isMobile && !showAllMobile && (
            <button
              onClick={() => setShowAllMobile(true)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 border ${
                isDarkMode 
                  ? "border-gray-700 hover:border-blue-500 text-gray-300" 
                  : "border-gray-300 hover:border-blue-500 text-gray-700"
              }`}
            >
              Show More Projects
            </button>
          )}

          {/* GitHub'a Git Butonu: Desktopta her zaman, mobilde sadece liste açıldığında */}
          {(!isMobile || showAllMobile) && (
            <motion.a
              href="https://github.com/recep-demir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <FiGithub size={18} />
              View All Projects on GitHub
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;