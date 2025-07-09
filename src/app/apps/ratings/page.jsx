'use client'
import { useEffect, useState } from 'react'

export default function RatingsDashboard() {
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    const fetchRatings = async () => {
      const res = await fetch('https://platform-backend-6ryn.onrender.com/api/app-ratings')
      const data = await res.json()
      setRatings(data)
    }

    fetchRatings()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">App Ratings Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ratings.map((r, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-700">
            <p className="text-yellow-400 font-bold mb-2">Rating: {r.rating} ⭐</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{r.feedback || "No feedback provided"}</p>
            <p className="text-xs mt-2 text-gray-400">{new Date(r.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
