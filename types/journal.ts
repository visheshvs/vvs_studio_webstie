export interface JournalMetadata {
  slug: string;
  title?: string;
  date: string;
  excerpt?: string;
  externalLink?: string;  // If present, link to external URL (e.g., Substack)
}

export interface JournalEntry extends JournalMetadata {
  content: string;
}

