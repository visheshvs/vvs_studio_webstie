export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
  featured?: boolean;
  year?: string;
  status?: 'active' | 'archived' | 'in-progress';
}

