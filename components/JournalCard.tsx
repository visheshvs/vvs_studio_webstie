import Link from 'next/link';
import { format } from 'date-fns';
import { JournalMetadata } from '@/types/journal';

interface JournalCardProps {
  entry: JournalMetadata;
}

export default function JournalCard({ entry }: JournalCardProps) {
  const formattedDate = format(new Date(entry.date), 'MMMM d, yyyy');

  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="block group paper-texture bg-[#f4f1ea] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] no-underline border border-stone-300/50"
    >
      <time className="text-xs uppercase tracking-wider text-stone-500 mb-3 block font-serif">
        {formattedDate}
      </time>
      
      {entry.title && (
        <h2 className="text-xl md:text-2xl mb-3 text-stone-900 group-hover:text-stone-700 transition-colors font-serif leading-tight">
          {entry.title}
        </h2>
      )}
      
      {entry.excerpt && (
        <p className="text-sm md:text-base text-stone-700 line-clamp-2 font-serif leading-relaxed">
          {entry.excerpt}
        </p>
      )}
    </Link>
  );
}

