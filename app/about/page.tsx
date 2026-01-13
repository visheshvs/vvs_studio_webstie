import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
      {/* Step Back Button - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white dark:bg-stone-800/90 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm no-underline text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Step Back
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-3xl">
          <div className="animate-fade-in">
            {/* Headshot */}
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/images/studio/headshot.png"
                  alt="Vishesh Vikram Singh"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-serif text-center text-stone-900 dark:text-stone-100 mb-4">
              Vishesh Vikram Singh
            </h1>

            {/* About Text */}
            <div className="text-stone-700 dark:text-stone-300 space-y-4 mb-8 text-center md:text-left">
              <p>
                Welcome to my studio,a place for things made, finished and in progress. I work at the intersection of 
                technology and creativity, creating things and exploring ideas through research, code, and art.
              </p>
              <p>
                When I'm not working, you'll find me documenting thoughts in my journal, 
                taking photographs, listening to music, or working on a side project.
              </p>
            </div>

            {/* Social Links */}
            <div className="text-stone-700 dark:text-stone-300 space-y-3 max-w-2xl mx-auto">
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  <a
                    href="mailto:visheshvscontact@gmail.com"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    Email
                  </a>
                  {' '}- I will try respond quick, sorry for the delay
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vvsishere/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    Instagram
                  </a>
                  {' '}- most of my photography and some wanna be videography work
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/user/visheshvikramsingh?si=250e58cb75f64454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    Spotify
                  </a>
                  {' '}- I can't play music but sure do love listening to and making playlists
                </li>
                <li>
                  <a
                    href="https://github.com/visheshvs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    GitHub
                  </a>
                  {' '}- I love starting side projects I never finish
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/visheshvikram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    LinkedIn
                  </a>
                  {' '}- mostly for a yearly update in case I need a job in the future
                </li>
                <li>
                  <a
                    href="https://scholar.google.com/citations?user=NvQJp9IAAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    GScholar
                  </a>
                  {' '}&{' '}
                  <a
                    href="https://www.researchgate.net/profile/Vishesh-Singh-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-800 dark:text-stone-200 hover:text-stone-600 dark:hover:text-stone-400 transition-colors underline decoration-stone-400 dark:decoration-stone-600"
                  >
                    ResearchGate
                  </a>
                  {' '}- in case I need an academic job
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

