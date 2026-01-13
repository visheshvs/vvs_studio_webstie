'use client';

import Hotspot from '@/components/Hotspot';
import MenuView from '@/components/MenuView';
import ViewSwitcher from '@/components/ViewSwitcher';
import { useViewMode } from '@/lib/useViewMode';

export default function StudioHomepage() {
  const { viewMode, toggleViewMode, isInitialized } = useViewMode();

  // Prevent flash of wrong content during hydration
  if (!isInitialized) {
    return null;
  }

  return (
    <>
      {/* View Switcher - Always visible on homepage */}
      <ViewSwitcher viewMode={viewMode} onToggle={toggleViewMode} />

      {/* Conditionally render based on view mode */}
      {viewMode === 'studio' ? (
        <main className="relative w-full h-screen overflow-hidden">
          {/* Studio Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/studio/studio.png"
              alt="Studio space"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Interactive Hotspots */}
          {/* Adjust top, left, width, height based on your studio image */}
          
          {/* Journal Hotspot */}
          <Hotspot
            href="/journal"
            top="65%"
            left="30%"
            width="25%"
            height="25%"
            label="Journal"
          />

          {/* Photobooks Hotspot */}
          <Hotspot
            href="/photobooks"
            top="11%"
            left="27%"
            width="18%"
            height="28%"
            label="Photobooks"
          />

          {/* Music Hotspot */}
          <Hotspot
            href="/music"
            top="40%"
            left="27%"
            width="18%"
            height="25%"
            label="Music"
          />

          {/* Projects Hotspot */}
          <Hotspot
            href="/projects"
            top="42%"
            left="57%"
            width="20%"
            height="26%"
            label="Projects"
          />

          {/* About Hotspot */}
          <Hotspot
            href="/about"
            top="48%"
            left="88%"
            width="11%"
            height="40%"
            label="About"
          />

          {/* Optional: Minimal invitational copy */}
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <p className="text-white text-sm md:text-base drop-shadow-lg text-center">
              A place for things made
            </p>
          </div>
        </main>
      ) : (
        <MenuView />
      )}
    </>
  );
}

