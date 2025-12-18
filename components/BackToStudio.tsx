import Link from 'next/link';

export default function BackToStudio() {
  return (
    <Link
      href="/"
      className="inline-block text-sm md:text-base mb-8 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 no-underline hover:underline transition-colors"
    >
      ← Back to Studio
    </Link>
  );
}

