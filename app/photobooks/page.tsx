import Link from 'next/link';

export default function Photobooks() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Closeup Photobooks Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/photobooks.png"
          alt="Photobooks closeup"
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

      {/* Coming Soon Message - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="paper-texture bg-[#f4f1ea] p-12 md:p-16 rounded-lg shadow-2xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 font-serif font-normal mb-6 leading-tight">
              Photobooks
            </h1>
            <p className="text-lg md:text-xl text-stone-700 font-serif italic">
              Coming Soon
            </p>
            <div className="mt-8 text-stone-600 font-serif text-sm md:text-base">
              <p>
                A curated collection of visual stories and memories, bound and preserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

