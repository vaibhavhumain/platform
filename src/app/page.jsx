'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users,
  Truck,
  GalleryHorizontal,
  ShieldCheck
} from 'lucide-react'

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen text-white overflow-x-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-landing.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="px-6 py-24 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Business. One Dashboard.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From lead management to bus production tracking and media archives, GobindCoach brings it all together in one seamless platform.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
            >
              Get Started →
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Run Efficiently
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  {[
    {
      icon: Users,
      title: 'Lead Management',
      desc: 'Track leads, assign tasks, and follow up like a pro.',
    },
    {
      icon: Truck,
      title: 'Production Tracker',
      desc: 'See real-time bus progress across all departments.',
    },
    {
      icon: GalleryHorizontal,
      title: 'Media Archive',
      desc: 'View images/videos of each build stage or client delivery.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private',
      desc: 'Role-based access with secure login ensures privacy.',
    },
  ].map((item, i) => (
    <motion.div
      key={item.title}
      className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center shadow-xl backdrop-blur-sm transition-all hover:scale-[1.03] hover:shadow-blue-500/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
    >
      <item.icon className="w-10 h-10 mx-auto text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
      <p className="text-gray-300 text-sm">{item.desc}</p>
    </motion.div>
  ))}
</div>
    
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-gradient-to-r from-slate-800 to-slate-900">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Future of Coach Management?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands who streamline operations with GobindCoach Platform.
          </p>
          <Link
            href="/signup"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-lg shadow-xl"
          >
            Sign Up Free →
          </Link>
        </section>
      </div>
    </main>
  )
}
