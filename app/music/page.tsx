import Link from 'next/link';
import { getMusicPostMetadata } from '@/lib/music';
import MusicCard from '@/components/MusicCard';
import ProjectCard from '@/components/ProjectCard';

export default async function Music() {
  const allPosts = await getMusicPostMetadata();

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Closeup Music Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/music.png"
          alt="Music closeup"
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

      {/* Music Posts - Centered, Journal Style */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl text-stone-200 font-serif font-normal mb-8 text-center">
            Music
          </h1>
          <p className="text-stone-300 font-serif text-center mb-10">
            Sounds, rhythms, and melodies that fill the Studia Medio space.
          </p>

          {allPosts.length === 0 ? (
            <div className="paper-texture bg-[#f4f1ea] p-8 rounded-lg shadow-2xl">
              <p className="text-stone-700 text-center font-serif">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {allPosts.map((entry, index) => (
                <MusicCard
                  key={entry.slug}
                  entry={entry}
                  animationDelay={index * 100}
                />
              ))}
              <div className="animate-fade-in" style={{ animationDelay: `${allPosts.length * 100}ms` }}>
                <ProjectCard
                  title="Nexportify"
                  description="A web application for analyzing and visualizing Spotify playlist data. Export playlist metadata, explore audio features like danceability and energy, and discover patterns in your listening habits through interactive data visualizations. Built using Spotify's Web API with support for both quick analysis and detailed CSV exports."
                  liveUrl="https://visheshvs.github.io/nexportify/"
                  githubUrl="https://github.com/visheshvs/nexportify"
                  tags={["Music", "Data Visualization", "Spotify API", "Open Source"]}
                  compact
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

