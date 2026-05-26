import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        p-2
        rounded-full
        border
        border-slate-700
        hover:border-blue-500
        transition
      "
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle