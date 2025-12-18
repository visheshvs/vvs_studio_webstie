import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JournalEntry, JournalMetadata } from '@/types/journal';

const journalDirectory = path.join(process.cwd(), 'content/journal');

/**
 * Get all journal entries with their metadata
 * This function can later be replaced with CMS API calls
 */
export async function getAllJournalEntries(): Promise<JournalEntry[]> {
  // Check if directory exists
  if (!fs.existsSync(journalDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(journalDirectory);
  const allEntries = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(journalDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
      } as JournalEntry;
    });

  // Sort by date (newest first)
  return allEntries.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get metadata for all journal entries (without content)
 * Useful for list views where full content isn't needed
 */
export async function getJournalMetadata(): Promise<JournalMetadata[]> {
  const entries = await getAllJournalEntries();
  return entries.map(({ content, ...metadata }) => metadata);
}

/**
 * Get a single journal entry by slug
 */
export async function getJournalEntry(slug: string): Promise<JournalEntry | null> {
  try {
    const fullPath = path.join(journalDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all journal slugs for static generation
 */
export async function getAllJournalSlugs(): Promise<string[]> {
  if (!fs.existsSync(journalDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(journalDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

