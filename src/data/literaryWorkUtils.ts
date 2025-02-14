import { useEffect, useState } from 'react';

export interface LiteraryWork {
  title: string;
  author: string;
  published: string;
  category: string;
  content: string;
  slug: string;
  thumbnail?: string;
  indent?: boolean;
}

/**
 * Parses a markdown file content to extract literary work metadata and content
 */
export function parseLiteraryWork(content: string, filename: string): LiteraryWork {
  const lines = content.split('\n');
  
  // Extract metadata from the first few lines
  const titleMatch = lines.find(line => line.startsWith('Title:'));
  const authorMatch = lines.find(line => line.startsWith('Author:'));
  const publishedMatch = lines.find(line => line.startsWith('Published:'));
  const categoryMatch = lines.find(line => line.startsWith('Category:'));
  const thumbnailMatch = lines.find(line => line.startsWith('Thumbnail:'));
  const indentMatch = lines.find(line => line.startsWith('Indent:'));
  
  // Extract values or use defaults
  const title = titleMatch ? titleMatch.replace('Title:', '').trim() : 'Untitled';
  const author = authorMatch ? authorMatch.replace('Author:', '').trim() : 'Unknown';
  const published = publishedMatch ? publishedMatch.replace('Published:', '').trim() : '';
  const category = categoryMatch ? categoryMatch.replace('Category:', '').trim() : 'Uncategorized';
  const thumbnail = thumbnailMatch ? thumbnailMatch.replace('Thumbnail:', '').trim() : undefined;
  const indent = indentMatch ? indentMatch.replace('Indent:', '').trim().toLowerCase() === 'true' : false;
  
  // Extract content (everything after the metadata)
  const metadataEndIndex = Math.max(
    lines.findIndex(line => line.startsWith('Title:')), 
    lines.findIndex(line => line.startsWith('Author:')),
    lines.findIndex(line => line.startsWith('Published:')),
    lines.findIndex(line => line.startsWith('Category:')),
    lines.findIndex(line => line.startsWith('Thumbnail:')),
    lines.findIndex(line => line.startsWith('Indent:'))
  );
  
  const contentStartIndex = metadataEndIndex + 1;
  const workContent = lines.slice(contentStartIndex).join('\n').trim();
  
  // Create a slug from the filename
  const slug = filename.replace('.md', '');
  
  return {
    title,
    author,
    published,
    category,
    content: workContent,
    slug,
    thumbnail,
    indent
  };
}

/**
 * Hook to fetch all literary works
 */
export function useLiteraryWorks() {
  const [works, setWorks] = useState<LiteraryWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch('/content/literary/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch literary works directory');
        }
        
        // This won't work in production without a server-side component
        // For demo, we'll directly fetch each file we know exists
        const fileNames = [
          'spiritual-courage.md',
          'the-theological-future-of-hegel.md',
          'religion-and-existentialism.md',
          'matthew-hegel-lego-batman.md',
          'daniels-work-on-dostoyevsky.md',
          'what-we-think-hides-us.md',
          'david-zhao-boethius.md',
          'edward-backman-union-debate.md',
          'melkors-fugue.md',
          'riddle-a-single-birds-soul.md',
          'riddle-essence.md',
          'studies-in-milton.md',
          'riddle-world-novel.md',
          'gender-roles-paradise-lost.md',
          'silence-of-the-bittern.md',
          'silent-watch-of-living-things.md',
          'from-those-left-behind.md'
        ];
        
        const workPromises = fileNames.map(async (filename) => {
          const fileResponse = await fetch(`/content/literary/${filename}`);
          if (!fileResponse.ok) {
            console.error(`Failed to fetch ${filename}`);
            return null;
          }
          
          const content = await fileResponse.text();
          return parseLiteraryWork(content, filename);
        });
        
        const fetchedWorks = (await Promise.all(workPromises)).filter(Boolean) as LiteraryWork[];
        setWorks(fetchedWorks);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }
    
    fetchWorks();
  }, []);

  return { works, loading, error };
}

/**
 * Gets categories and works organized by category
 */
export function getWorksByCategory(works: LiteraryWork[]) {
  const categories = Array.from(new Set(works.map(work => work.category)));
  
  const worksByCategory = categories.reduce((acc, category) => {
    acc[category] = works.filter(work => work.category === category);
    return acc;
  }, {} as Record<string, LiteraryWork[]>);
  
  return { categories, worksByCategory };
}

/**
 * Fetches a single literary work by slug
 */
export async function fetchLiteraryWorkBySlug(slug: string): Promise<LiteraryWork | null> {
  try {
    const response = await fetch(`/content/literary/${slug}.md`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch work with slug: ${slug}`);
    }
    
    const content = await response.text();
    return parseLiteraryWork(content, `${slug}.md`);
  } catch (error) {
    console.error('Error fetching literary work:', error);
    return null;
  }
} 