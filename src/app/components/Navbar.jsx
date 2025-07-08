'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Home,
  Users,
  GalleryVerticalEnd,
  Truck,
  Sun,
  Moon,
} from 'lucide-react'

export default function Navbar() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/60 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            GobindCoach
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink href="/" icon={<Home size={18} />} label="Dashboard" />
          <NavLink href="/apps/leadsmanagement" icon={<Users size={18} />} label="Leads" />
          <NavLink href="/apps/database" icon={<GalleryVerticalEnd size={18} />} label="Gallery" />
          <NavLink href="/apps/production-tracker" icon={<Truck size={18} />} label="Tracker" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-white border-gray-300 bg-white/30 dark:bg-gray-700/40 hover:bg-white/50 dark:hover:bg-gray-600/60 transition-all"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={16} />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon size={16} />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  )
}
