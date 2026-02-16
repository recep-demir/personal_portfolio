import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Section/HeroSection'
import SkillsSection from './components/Section/SkillsSection'

const App = () => {
  return (
    <ThemeProvider>
      <div className='pb-[100vh]' >
        <Navbar />
        <HeroSection />
        <SkillsSection />



      </div>
    
    </ThemeProvider>
  )
}

export default App