'use client'
export default function MediaGalleryPage() {
  const openGallery = () => {
    window.open('https://gc-database.netlify.app/', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">Bus Media Gallery</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Browse through all bus images and videos categorized by model, client, or production stage. A complete visual archive of GobindCoach builds.
      </p>
      <button
        onClick={openGallery}
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
      >
        Open Media Gallery →
      </button>
    </div>
  );
}
