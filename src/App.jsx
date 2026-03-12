import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Section/HeroSection'
import SkillsSection from './components/Section/SkillsSection'
import ProjectsSection from './components/Section/ProjectsSection'
import AboutSection from './components/Section/AboutSection'
import ContactSection from './components/Section/ContactSection'
import { Contact } from 'lucide-react'


const App = () => {
  return (
    <ThemeProvider>
      <div className='pb-[100vh]' >
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer/>
        



      </div>
    
    </ThemeProvider>
  )
}

export default App