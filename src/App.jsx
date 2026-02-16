import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Section/HeroSection'

const App = () => {
  return (
    <ThemeProvider>
      <div className='pb-96'>
        <Navbar />
        <HeroSection />
                <SkillSection />


      </div>
    
    </ThemeProvider>
  )
}

export default App