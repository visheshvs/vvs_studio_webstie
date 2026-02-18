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
  contentRight?: string;  // Content to render on the right page (from splitAt onward)
}
