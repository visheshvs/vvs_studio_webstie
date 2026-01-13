'use client';

import { ViewMode } from '@/lib/useViewMode';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  onToggle: () => void;
}

export default function ViewSwitcher({ viewMode, onToggle }: ViewSwitcherProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 left-6 z-50 group"
      aria-label={`Switch to ${viewMode === 'studio' ? 'menu' : 'studio'} view`}
    >
      <div className="relative bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Studio View Icon (Image) */}
        {viewMode === 'menu' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-stone-700 dark:text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        
        {/* Menu View Icon (Grid) */}
        {viewMode === 'studio' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-stone-700 dark:text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        )}
        
        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {viewMode === 'studio' ? 'Menu View' : 'Studio View'}
        </div>
      </div>
    </button>
  );
}

