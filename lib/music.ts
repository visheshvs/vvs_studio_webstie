import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MusicPost, MusicPostMetadata } from '@/types/music';

const musicDirectory = path.join(process.cwd(), 'content/music');

export async function getAllMusicPosts(): Promise<MusicPost[]> {
  if (!fs.existsSync(musicDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(musicDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(musicDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        links: data.links ?? [],
        order: data.order,
        content,
      } as MusicPost;
    });

  return allPosts.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export async function getMusicPostMetadata(): Promise<MusicPostMetadata[]> {
  const posts = await getAllMusicPosts();
  return posts.map(({ content, ...metadata }) => metadata);
}

export async function getMusicPost(slug: string): Promise<MusicPost | null> {
  try {
    const fullPath = path.join(musicDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const splitAt = data.splitAt as string | undefined;
    let contentLeft = content;
    let contentRight: string | undefined;

    if (splitAt && content.includes(splitAt)) {
      const splitIndex = content.indexOf(splitAt);
      contentLeft = content.slice(0, splitIndex).trim();
      contentRight = content.slice(splitIndex).trim();
    }

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      links: data.links ?? [],
      order: data.order,
      content: contentLeft,
      ...(contentRight && { contentRight }),
    };
  } catch {
    return null;
  }
}

export async function getAllMusicSlugs(): Promise<string[]> {
  if (!fs.existsSync(musicDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(musicDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
