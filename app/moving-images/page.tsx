import Link from 'next/link';

interface VideoItem {
  title: string;
  embedUrl: string;
  description?: string;
}

const videos: VideoItem[] = [
  {
    title: 'The Local Train - Dil Mere',
    embedUrl: 'https://www.youtube.com/embed/qLCLvzTGFVM?si=h3fd-hG6j6wmP9d2',
    description: 'Music Video',
  },
  {
    title: 'The Local Train - Bandey',
    embedUrl: 'https://www.youtube.com/embed/F4qqL1aBu5E?si=kyA85FZgeqfTNfjo',
    description: 'Music Video',
  },
  {
    title: 'Things To Do in Pushkar | un[travel] Diaries',
    embedUrl: 'https://www.youtube.com/embed/JO4R5eg9SjI?si=NbcVRfVoMVRZmJH3',
    description: 'Travel Documentary',
  },
  {
    title: 'Rishabh Seen - Animals As Leaders "Ka$cade" Sitar Cover | GEAR GODS',
    embedUrl: 'https://www.youtube.com/embed/rX1EwtF5MfI?si=tS02l-YaV5Sqc561',
    description: 'Music Video',
  },
  {
    title: 'The Local Train - Yeh Zindagi Hai',
    embedUrl: 'https://www.youtube.com/embed/SEqQCIMQfk0?si=3LtUrb089kEYVAmN',
    description: 'Music Video',
  },
  {
    title: 'The Local Train - Aaoge Tum Kabhi',
    embedUrl: 'https://www.youtube.com/embed/i96UO8-GFvw?si=OQ8FqFxuDsJJiRoY',
    description: 'Music Video',
  },
];

export default function MovingImages() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/moving_images.png"
          alt="Moving Images background"
          className="object-cover w-full h-full"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Step Back Button - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-stone-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm no-underline text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Step Back
        </Link>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 min-h-screen flex items-start justify-center py-20 px-4">
        <div className="w-full max-w-6xl">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl text-white font-serif font-normal mb-4 drop-shadow-lg">
              Moving Images
            </h1>
            <p className="text-white/90 font-serif text-base md:text-lg drop-shadow-md max-w-3xl mx-auto">
              Various videos I have worked on over the years in various roles from DoP, Camera Person, and Editor. 
              Most public work has been in music videos, engrossing 100 million+ views on YouTube.
            </p>
          </div>

          {/* Published Work Section */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-normal mb-8 text-center drop-shadow-lg">
              Published Work
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="paper-texture bg-white/95 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  {/* Video Embed */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-stone-900 mb-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-stone-600 text-sm">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
