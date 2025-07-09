'use client'
import { useRouter } from 'next/navigation'

export default function MediaGalleryPage() {
  const router = useRouter();
  const openGallery = () => {
    window.open('https://gc-ims.netlify.app/', '_blank');
  };

  const handleRate = () => router.push('/rate')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-700 via-purple-800 to-black px-6 py-16">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-400 drop-shadow-sm">
          📸 Bus Media Gallery
        </h1>
        
        <p className="text-gray-200 mb-6 leading-relaxed">
          Browse all bus images and videos, categorized by model, client, or production stage.
          A complete visual archive of GobindCoach builds.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={openGallery}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105"
        >
          Open Media Gallery →
        </button>
        <button onClick={handleRate} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-105">Rate this App</button>
        </div>
      </div>
    </div>
  );
}
