'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import {
  Users,
  ImageIcon,
  Truck,
  Globe,
} from 'lucide-react'

const apps = [
  {
    name: "Leads Management",
    href: "/apps/leadsmanagement",
    icon: Users,
    color: "text-blue-500 bg-blue-100",
  },
  {
    name: "Bus Media Gallery",
    href: "/apps/database",
    icon: ImageIcon,
    color: "text-yellow-500 bg-yellow-100",
  },
  {
    name: "Bus Production Tracker",
    href: "/apps/production-tracker",
    icon: Truck,
    color: "text-green-500 bg-green-100",
  },
  {
    name: "GobindCoach Website",
    href: "/apps/gobindcoachsite",
    icon: Globe,
    color: "text-red-500 bg-red-100",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
      <Navbar />

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold">GobindCoach Platform</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">All tools. One place.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={app.href}>
              <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                <div className={`p-4 rounded-full ${app.color}`}>
                  <app.icon className="w-8 h-8" />
                </div>
                <p className="mt-4 text-sm font-medium text-center">{app.name}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
