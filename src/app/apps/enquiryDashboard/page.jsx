'use client'
import { useRouter } from 'next/navigation'

export default function EnquiryDashboard() {
  const router = useRouter()
  const handleRate = () => router.push('/rate-us')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black px-6 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-wide text-blue-200">📋 Upcoming Feature: Enquiry Dashboard</h2>
        <p className="text-sm text-gray-300 mb-6">Streamline client enquiry handling:</p>
        <ul className="list-disc list-inside space-y-3 text-gray-100 text-left">
          <li>Filter by priority or bus model</li>
          <li>PDF proposals & historical logs</li>
          <li>Client conversion stats</li>
        </ul>
        <p className="mt-6 text-blue-400 text-sm text-right">📅 Rollout: August 2025</p>
        <div className="mt-8 flex justify-center">
          <button onClick={handleRate} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105">Rate this App</button>
        </div>
      </div>
    </div>
  )
}