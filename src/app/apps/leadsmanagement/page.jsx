'use client'

export default function LeadsManagementPage() {
  const openLeadsApp = () => {
    window.open('https://leadsmanage.netlify.app', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">Leads Management System</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Track and manage all client leads, follow-ups, status changes, and assignments with a user-friendly CRM built for GobindCoach operations.
      </p>
      <button
        onClick={openLeadsApp}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Open Leads Portal →
      </button>
    </div>
  );
}
