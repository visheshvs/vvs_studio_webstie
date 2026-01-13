'use client';

import { ViewMode } from '@/lib/useViewMode';
import Image from 'next/image';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  onToggle: () => void;
}

export default function ViewSwitcher({ viewMode, onToggle }: ViewSwitcherProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 left-6 z-50 group"
      aria-label="Switch view"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
          {/* VVS Logo - different for each view */}
          <div className="w-full h-full">
            <Image
              src={viewMode === 'studio' ? '/images/studio/VVS_Logo_pos.png' : '/images/studio/VVS_Logo_neg.png'}
              alt="VVS Studio Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Switch View
        </div>
      </div>
    </button>
  );
}

