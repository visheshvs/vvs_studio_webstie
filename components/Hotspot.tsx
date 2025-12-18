import Link from 'next/link';

interface HotspotProps {
  href: string;
  top: string;
  left: string;
  width: string;
  height: string;
  label?: string;
}

export default function Hotspot({ href, top, left, width, height, label }: HotspotProps) {
  return (
    <Link
      href={href}
      className="absolute group cursor-pointer"
      style={{
        top,
        left,
        width,
        height,
      }}
      aria-label={label}
    >
      {/* Invisible hitbox with subtle hover effect */}
      <div className="w-full h-full transition-all duration-300 group-hover:ring-2 group-hover:ring-white/40 group-hover:bg-white/5 rounded-sm" />
      
      {/* Optional visible label on hover */}
      {label && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {label}
        </div>
      )}
    </Link>
  );
}

