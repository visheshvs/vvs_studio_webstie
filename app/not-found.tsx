import Link from 'next/link';
import { Playwrite_FR_Trad } from 'next/font/google';

const magritteScript = Playwrite_FR_Trad({
  weight: '400',
  display: 'swap',
});

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/studio.png"
          alt="Studia Medio space"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 px-4 gap-8">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="not-found-paper paper-texture">
            <div className="not-found-paper-inner">
              <code className="not-found-code">
                <span className="not-found-code-bracket">&lt;</span>
                404
                <span className="not-found-code-bracket">&gt;</span>
              </code>
              <p className={`${magritteScript.className} not-found-magritte-text`}>
                C&apos;est si n&apos;est pas un page
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 hover:bg-white text-stone-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm no-underline text-sm font-medium font-sans animate-fade-in"
          style={{ animationDelay: '150ms' }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
