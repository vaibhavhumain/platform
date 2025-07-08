'use client'

export default function LeadsManagementPage() {
  const openLeadsApp = () => {
    window.open('https://leadsmanage.netlify.app', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-purple-900 to-black px-6 py-16">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-400 drop-shadow-sm">
          📊 Leads Management System
        </h1>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Track and manage all client leads, follow-ups, status changes, and assignments
          with a user-friendly CRM built for GobindCoach operations.
        </p>

        <button
          onClick={openLeadsApp}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105"
        >
          Open Leads Portal →
        </button>
      </div>
    </div>
  );
}
