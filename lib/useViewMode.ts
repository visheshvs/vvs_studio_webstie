'use client';

import { useState, useEffect } from 'react';

export type ViewMode = 'studio' | 'menu';

const STORAGE_KEY = 'studio-view-mode';
const MOBILE_BREAKPOINT = 768;

export function useViewMode() {
  const [viewMode, setViewMode] = useState<ViewMode>('studio');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if there's a saved preference
    const savedMode = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    
    if (savedMode) {
      // User has a saved preference
      setViewMode(savedMode);
    } else {
      // Auto-detect based on device width
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setViewMode(isMobile ? 'menu' : 'studio');
    }
    
    setIsInitialized(true);
  }, []);

  const toggleViewMode = () => {
    setViewMode((current) => {
      const newMode = current === 'studio' ? 'menu' : 'studio';
      localStorage.setItem(STORAGE_KEY, newMode);
      return newMode;
    });
  };

  return {
    viewMode,
    toggleViewMode,
    isInitialized,
  };
}

