export default function ProductionTracker() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-6 py-16">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide text-purple-200">
          🚀 Upcoming Feature: Bus Production Insights
        </h2>

        <p className="text-sm text-gray-300 text-center mb-6">
          We are currently building a powerful dashboard that will provide:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-100">
          <li>Real-time visual progress tracking per bus</li>
          <li>Stage-wise delay detection & alerts</li>
          <li>Media gallery for each production stage</li>
          <li>Employee performance insights</li>
        </ul>

        <p className="mt-6 text-purple-400 text-sm text-right">💡 Expected rollout: August 2025</p>
      </div>
    </div>
  );
}
