import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Closeup Projects Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/studio/projects.png"
          alt="Projects closeup"
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

      {/* Projects Content - Centered */}
      <div className="relative z-10 min-h-screen flex items-start justify-center py-20 px-4">
        <div className="w-full max-w-3xl">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl text-white font-serif font-normal mb-3 drop-shadow-lg">
              Projects
            </h1>
            <p className="text-white/80 font-serif text-sm md:text-base drop-shadow-md">
              Things I've built and experiments along the way
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <ProjectCard
              title="Nexportify"
              description="A web application for analyzing and visualizing Spotify playlist data. Export playlist metadata, explore audio features like danceability and energy, and discover patterns in your listening habits through interactive data visualizations. Built using Spotify's Web API with support for both quick analysis and detailed CSV exports."
              liveUrl="https://visheshvs.github.io/nexportify/"
              githubUrl="https://github.com/visheshvs/nexportify"
              tags={["Music", "Data Visualization", "Spotify API", "Open Source"]}
            />

            {/* Placeholder for future projects */}
            <div className="paper-texture bg-[#f4f1ea]/60 p-8 rounded-lg border-2 border-dashed border-stone-400/50 text-center">
              <p className="text-stone-600 font-serif italic">
                More projects coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

