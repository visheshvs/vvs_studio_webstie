export interface MusicPostLink {
  label: string;
  url: string;
}

export interface MusicPostMetadata {
  slug: string;
  title?: string;
  excerpt?: string;
  links?: MusicPostLink[];
}

export interface MusicPost extends MusicPostMetadata {
  content: string;
}
