'use client'
import { useRouter } from 'next/navigation'

export default function HRPortal() {
  const router = useRouter()
  const handleRate = () => router.push('/rate')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-cyan-900 to-black px-6 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-wide text-teal-200">🧑‍💼 Upcoming Feature: HR Management</h2>
        <p className="text-sm text-gray-300 mb-6">A complete suite to manage employees:</p>
        <ul className="list-disc list-inside space-y-3 text-gray-100 text-left">
          <li>Attendance tracking & face scan check-ins</li>
          <li>Payroll automation & salary slips</li>
          <li>Performance logs & reviews</li>
        </ul>
        <p className="mt-6 text-teal-400 text-sm text-right">📅 Rollout: November 2025</p>
        <div className="mt-8 flex justify-center">
          <button onClick={handleRate} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105">Rate this App</button>
        </div>
      </div>
    </div>
  )
}