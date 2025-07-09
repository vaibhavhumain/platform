'use client'
import { useRouter } from 'next/navigation'

export default function EnquiryDashboard() {
  const router = useRouter();
  const openDashboard = () => {
    window.open('https://gc-enquiry-dashboard.onrender.com/', '_blank');
  };

  const handleRate = () => router.push('/rate');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black px-6 py-16">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-300 drop-shadow-sm">
          📋 Enquiry Dashboard
        </h1>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Handle client enquiries efficiently. Filter by priority, manage proposals, view logs, and track conversion performance — all in one place.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={openDashboard}
            className="bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105"
          >
            Open Enquiry Dashboard →
          </button>
          <button
            onClick={handleRate}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105"
          >
            Rate this App
          </button>
        </div>
      </div>
    </div>
  );
}
