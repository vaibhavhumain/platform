'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col items-center justify-center px-6">
      
      {/* Floating Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 opacity-20 rounded-full filter blur-3xl animate-pulse delay-1000 -z-10" />

      {/* Top Navigation with Login & Signup */}
      <div className="absolute top-5 right-6 flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-full border border-gray-600 text-sm font-medium hover:bg-gray-800 transition duration-300"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md transition duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Animated Heading */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to GobindCoach
      </motion.h1>

      <motion.p
        className="mt-6 text-center max-w-xl text-gray-300 text-lg sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        All your essential tools — unified in one powerful, elegant platform.
      </motion.p>

      {/* Call to Action Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="/login"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-white font-semibold text-lg shadow-xl hover:shadow-purple-700/50"
        >
          Enter Dashboard →
        </Link>
      </motion.div>
    </main>
  )
}
