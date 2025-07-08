'use client'

export default function GobindCoachSitePage() {
  const openWebsite = () => {
    window.open('https://gobindcoach.com/', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">GobindCoach Official Website</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Explore our company’s official website to learn more about GobindCoach Builders, our products, achievements, and how to get in touch.
      </p>
      <button
        onClick={openWebsite}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
      >
        Visit Website →
      </button>
    </div>
  );
}
