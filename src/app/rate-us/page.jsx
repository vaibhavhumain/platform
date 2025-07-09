'use client'

import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../utils/constants'

export default function RatingsDashboard() {
  const [ratings, setRatings] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/app-ratings`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()

        if (Array.isArray(data)) {
          setRatings(data)
        } else {
          setRatings([])
          console.error('Invalid data format:', data)
        }
      } catch (err) {
        console.error('Error fetching ratings:', err)
        setError(true)
      }
    }

    fetchRatings()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">App Ratings Overview</h1>

      {error ? (
        <p className="text-red-500">Could not load ratings. Please try again later.</p>
      ) : ratings.length === 0 ? (
        <p className="text-gray-500">No ratings submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((r, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-700"
            >
              <p className="text-yellow-400 font-bold mb-2">Rating: {r.rating} ⭐</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {r.feedback || 'No feedback provided'}
              </p>
              <p className="text-xs mt-2 text-gray-400">
                {new Date(r.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
