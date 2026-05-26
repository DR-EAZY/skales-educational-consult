import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Hostels from './components/Hostels'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [darkMode, setDarkMode] =
    useState(true)

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme === 'light') {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        'dark'
      )

      localStorage.setItem(
        'theme',
        'dark'
      )
    } else {
      document.documentElement.classList.remove(
        'dark'
      )

      localStorage.setItem(
        'theme',
        'light'
      )
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <Services />
      <Hostels />
      <Testimonials />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App