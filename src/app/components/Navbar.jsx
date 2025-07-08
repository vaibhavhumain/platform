'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Sun,
  Moon,
  LogOut,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [userName, setUserName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const userData = localStorage.getItem('user')

    if (savedTheme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }

    if (userData) {
      const user = JSON.parse(userData)
      if (user?.name) setUserName(user.name)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-400">
            GobindCoach
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm font-medium">
          {/* Welcome */}
          {userName && (
            <span className="text-gray-700 dark:text-gray-200 font-medium hidden sm:inline">
              👋 Welcome, <span className="font-semibold">{userName}</span>
            </span>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all shadow-sm"
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

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white transition-all shadow-sm"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
