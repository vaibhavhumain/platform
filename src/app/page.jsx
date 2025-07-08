'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to GobindCoach Platform
      </motion.h1>

      <motion.p
        className="mt-4 text-center max-w-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        All your tools — in one fast, intuitive dashboard.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg shadow-lg"
        >
          Go to Dashboard →
        </Link>
      </motion.div>
    </main>
  )
}
