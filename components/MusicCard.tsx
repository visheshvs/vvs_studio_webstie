import Link from 'next/link';
import { MusicPostMetadata } from '@/types/music';

interface MusicCardProps {
  entry: MusicPostMetadata;
  animationDelay?: number;
}

export default function MusicCard({ entry, animationDelay = 0 }: MusicCardProps) {
  return (
    <div
      className="group paper-texture bg-[#f4f1ea] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-stone-300/50 animate-fade-in"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Tags - direct external links */}
      {entry.links && entry.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {entry.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs bg-stone-700 hover:bg-stone-600 text-white px-2 py-1 rounded-full font-sans no-underline transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      {/* Card content - links to document */}
      <Link href={`/music/${entry.slug}`} className="block no-underline">
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
    </div>
  );
}
