import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getJournalEntry, getAllJournalSlugs } from '@/lib/journal';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

interface JournalEntryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllJournalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function JournalEntryPage({ params }: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = await getJournalEntry(slug);

  if (!entry) {
    notFound();
  }

  const formattedDate = format(new Date(entry.date), 'MMMM d, yyyy');

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 py-8 md:py-12 px-4">
      {/* Back to Journal Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-stone-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm no-underline text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Journal
        </Link>
      </div>

      {/* Journal Spread */}
      <div className="journal-spread max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-0 md:gap-1 shadow-2xl rounded-lg overflow-hidden">
          {/* Left Page */}
          <article className="journal-page journal-page-left paper-texture flex-1 p-8 md:p-12 lg:p-16">
            <header className="mb-8 md:mb-12">
              <time className="text-xs uppercase tracking-widest text-stone-500 mb-4 block font-serif">
                {formattedDate}
              </time>
              
              {entry.title && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-stone-900 font-serif font-normal leading-tight">
                  {entry.title}
                </h1>
              )}
            </header>

            <div className="prose prose-stone prose-lg max-w-none font-serif text-stone-800">
              <MDXRemote source={entry.content} />
            </div>
          </article>

          {/* Binding */}
          <div className="journal-binding w-full md:w-1 h-1 md:h-auto" />

          {/* Right Page - Decorative/Continuation */}
          <div className="journal-page journal-page-right paper-texture flex-1 p-8 md:p-12 lg:p-16 hidden md:block">
            <div className="h-full flex flex-col justify-between">
              {/* Decorative corner element */}
              <div className="text-right text-stone-400 text-sm font-serif mb-8">
                {entry.title && (
                  <span className="italic opacity-60">{entry.title}</span>
                )}
              </div>
              
              {/* Decorative page number */}
              <div className="text-center text-stone-400 text-sm font-serif mt-auto">
                <span className="inline-block border-t border-stone-300 pt-2 px-4">
                  {new Date(entry.date).getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

