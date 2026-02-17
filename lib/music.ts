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
        content,
      } as MusicPost;
    });

  return allPosts;
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

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      links: data.links ?? [],
      content,
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
