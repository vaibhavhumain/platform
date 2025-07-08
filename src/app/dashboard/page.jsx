'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Tilt from 'react-parallax-tilt'
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
    color: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
  },
  {
    name: "Bus Media Gallery",
    href: "/apps/database",
    icon: ImageIcon,
    color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20",
  },
  {
    name: "Bus Production Tracker",
    href: "/apps/production-tracker",
    icon: Truck,
    color: "text-green-500 bg-green-100 dark:bg-green-900/20",
  },
  {
    name: "GobindCoach Website",
    href: "/apps/gobindcoachsite",
    icon: Globe,
    color: "text-red-500 bg-red-100 dark:bg-red-900/20",
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
      <Navbar />

      {/* Welcome Banner */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Welcome to GobindCoach Dashboard
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Fast. Powerful. Intuitive.
        </p>
      </motion.div>

      {/* Apps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={300}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <Link href={app.href}>
                <div
                  className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  title={app.name}
                >
                  <div className={`p-4 rounded-full ${app.color}`}>
                    <app.icon className="w-8 h-8" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-center group-hover:underline">
                    {app.name}
                  </p>
                </div>
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
