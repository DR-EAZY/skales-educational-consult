import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

import {
  Menu,
  X,
} from 'lucide-react'

import businessInfo from '../data/businessInfo'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-slate-950/90
      backdrop-blur
      border-b
      border-slate-800
    ">

      <nav className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src={businessInfo.logo}
            alt={businessInfo.businessName}
            className="w-12 h-12 rounded-full"
          />

          <h1 className="font-bold text-lg">
            {businessInfo.businessName}
          </h1>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm">

          <a href="#services" className="hover:text-blue-400">
            Services
          </a>

          <a href="#hostels" className="hover:text-blue-400">
            Hostels
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <ThemeToggle
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="
          md:hidden
          bg-slate-900
          border-t
          border-slate-800
          px-6
          py-6
          flex
          flex-col
          gap-6
        ">

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#hostels"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Hostels
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Contact
          </a>

        </div>

      )}

    </header>
  )
}

export default Navbar