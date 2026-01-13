import Link from 'next/link';

interface MenuItem {
  title: string;
  href: string;
  image: string;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Journal',
    href: '/journal',
    image: '/images/studio/journal.png',
    description: 'Thoughts and reflections',
  },
  {
    title: 'Photobooks',
    href: '/photobooks',
    image: '/images/studio/photobooks.png',
    description: 'Visual stories',
  },
  {
    title: 'Music',
    href: '/music',
    image: '/images/studio/music.png',
    description: 'Sonic experiments',
  },
  {
    title: 'Projects',
    href: '/projects',
    image: '/images/studio/projects.png',
    description: 'Things built',
  },
  {
    title: 'About',
    href: '/about',
    image: '/images/studio/headshot.png',
    description: 'Who I am',
  },
];

export default function MenuView() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-stone-100 mb-3">
            Studio
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base">
            A place for things made
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="menu-card group relative overflow-hidden rounded-lg bg-white dark:bg-stone-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image or Color Background */}
              <div className="aspect-[4/3] overflow-hidden">
                {item.title === 'About' ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#d4c4b0] to-[#e8dcc8] transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 ${item.title === 'About' ? 'bg-gradient-to-t from-stone-800/80 via-stone-700/40 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'} flex flex-col justify-end p-6 transition-opacity duration-300`}>
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-1">
                  {item.title}
                </h2>
                <p className="text-stone-200 text-sm md:text-base opacity-90">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

