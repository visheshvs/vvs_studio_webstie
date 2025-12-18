import { getJournalMetadata } from '@/lib/journal';
import JournalCard from '@/components/JournalCard';
import Link from 'next/link';

export default async function JournalList() {
  const allEntries = await getJournalMetadata();

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Closeup Journal Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/journal.png"
          alt="Journal closeup"
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

      {/* Journal Entries - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          {allEntries.length === 0 ? (
            <div className="paper-texture bg-[#f4f1ea] p-8 rounded-lg shadow-2xl">
              <p className="text-stone-700 text-center font-serif">
                No entries yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {allEntries.map((entry, index) => (
                <div
                  key={entry.slug}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JournalCard entry={entry} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

