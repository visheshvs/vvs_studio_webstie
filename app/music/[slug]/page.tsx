import { notFound } from 'next/navigation';
import { getMusicPost, getAllMusicSlugs } from '@/lib/music';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

interface MusicPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllMusicSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function MusicPostPage({ params }: MusicPostPageProps) {
  const { slug } = await params;
  const post = await getMusicPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 py-8 md:py-12 px-4">
      {/* Back to Music Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-stone-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm no-underline text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Music
        </Link>
      </div>

      {/* Document Spread - Journal Style */}
      <div className="journal-spread max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-0 md:gap-1 shadow-2xl rounded-lg overflow-hidden">
          {/* Left Page - Content */}
          <article className="journal-page journal-page-left paper-texture flex-1 p-8 md:p-12 lg:p-16">
            <header className="mb-8 md:mb-12">
              {/* Link tags */}
              {post.links && post.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.links.map((link) => (
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

              {post.title && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-stone-900 font-serif font-normal leading-tight">
                  {post.title}
                </h1>
              )}
            </header>

            <div className="prose prose-stone prose-lg max-w-none font-serif text-stone-800">
              <MDXRemote
                source={post.content}
                components={{
                  a: (props) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" />
                  ),
                }}
              />
            </div>
          </article>

          {/* Binding */}
          <div className="journal-binding w-full md:w-1 h-1 md:h-auto" />

          {/* Right Page - Content or Decorative (stacks below left on narrow viewports) */}
          <div className="journal-page journal-page-right paper-texture flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto">
            {post.contentRight ? (
              <div className="prose prose-stone prose-lg max-w-none font-serif text-stone-800">
                <MDXRemote
                  source={post.contentRight}
                  components={{
                    a: (props) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                  }}
                />
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between">
                <div className="text-right text-stone-400 text-sm font-serif mb-8">
                  {post.title && (
                    <span className="italic opacity-60">{post.title}</span>
                  )}
                </div>
                <div className="text-center text-stone-400 text-sm font-serif mt-auto">
                  <span className="inline-block border-t border-stone-300 pt-2 px-4">
                    Music
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
