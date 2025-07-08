'use client'

export default function GobindCoachSitePage() {
  const openWebsite = () => {
    window.open('https://gobindcoach.com/', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 via-purple-900 to-black px-6 py-16">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-red-400 drop-shadow-sm">
          🌐 GobindCoach Official Website
        </h1>

        <p className="text-gray-200 mb-6 leading-relaxed">
          Explore our company’s official website to learn more about GobindCoach Builders, our products,
          achievements, and how to get in touch.
        </p>

        <button
          onClick={openWebsite}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105"
        >
          Visit Website →
        </button>
      </div>
    </div>
  );
}
