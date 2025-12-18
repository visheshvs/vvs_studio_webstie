export interface JournalMetadata {
  slug: string;
  title?: string;
  date: string;
  excerpt?: string;
}

export interface JournalEntry extends JournalMetadata {
  content: string;
}

