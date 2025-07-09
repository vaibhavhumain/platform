'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { API_BASE_URL } from '../utils/constants'
import {
  Users,
  ImageIcon,
  Truck,
  Globe,
  Star,
  ShoppingCart,
  Warehouse,
  Briefcase,
  ClipboardList,
  ShieldCheck,
  Layers,
  FileText,
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
    href: "/apps/productiontracker",
    icon: Truck,
    color: "text-green-500 bg-green-100 dark:bg-green-900/20",
  },
  {
    name: "GobindCoach Website",
    href: "/apps/gobindcoachsite",
    icon: Globe,
    color: "text-red-500 bg-red-100 dark:bg-red-900/20",
  },
  {
    name: "Sales Portal",
    href: "/apps/sales",
    icon: ShoppingCart,
    color: "text-orange-500 bg-orange-100 dark:bg-orange-900/20",
  },
  {
    name: "Inventory Management",
    href: "/apps/inventory",
    icon: Warehouse,
    color: "text-purple-500 bg-purple-100 dark:bg-purple-900/20",
  },
  {
    name: "HR Management",
    href: "/apps/HRmanagement",
    icon: Briefcase,
    color: "text-rose-500 bg-rose-100 dark:bg-rose-900/20",
  },
  {
    name: "Enquiry Dashboard",
    href: "/apps/enquiryDashboard",
    icon: ClipboardList,
    color: "text-teal-500 bg-teal-100 dark:bg-teal-900/20",
  },
  {
    name: "Admin Portal",
    href: "/apps/adminPortal",
    icon: ShieldCheck,
    color: "text-gray-700 bg-gray-200 dark:bg-gray-800/40",
  },
  {
    name: "Bus Models Portal",
    href: "/apps/busModelsPortal",
    icon: Layers,
    color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/20",
  },
  {
    name: "Purchase Tracker",
    href: "/apps/purchase",
    icon: FileText,
    color: "text-lime-500 bg-lime-100 dark:bg-lime-900/20",
  },
]


export default function DashboardPage() {
  const router = useRouter()
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.replace('/login')

    const fetchRatings = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/app-ratings`)
        setRatings(res.data)
      } catch (err) {
        console.error('Error fetching ratings:', err)
      }
    }

    fetchRatings()
  }, [router])

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
      <div className="mb-10">
        <Navbar />
      </div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Welcome to Dashboard
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Fast. Powerful. Intuitive.
        </p>
      </motion.div>

      {/* App Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
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

      {/* Ratings Section */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
          ⭐ User Ratings & Feedback
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ratings.map((r) => (
            <motion.div
              key={r._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < r.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill={i < r.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">📱 App: {r.appName || 'Unknown'}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{r.feedback || 'No feedback given.'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                — {r.submittedBy || 'Anonymous'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}