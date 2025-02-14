import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchLiteraryWorkBySlug, LiteraryWork, useLiteraryWorks } from '../../data/literaryWorkUtils';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './Literary.css';
import usePagesTitle from '../../hooks/usePagesTitle';

interface RelatedWorksProps {
  currentWorkSlug: string;
  works: LiteraryWork[];
}

const RelatedWorks: React.FC<RelatedWorksProps> = ({ currentWorkSlug, works }) => {
  // Filter out current work and limit to 5 related works
  const relatedWorks = works
    .filter(work => work.slug !== currentWorkSlug);
    // .slice(0, 5);

  return (
    <div className="literary-sidebar">
      <h3 className="literary-sidebar-title">More Publications</h3>
      {relatedWorks.length > 0 ? (
        <ul className="related-works-list">
          {relatedWorks.map(work => (
            <li key={work.slug} className="related-work-item">
              <Link to={`/publications/${work.slug}`} className="related-work-link">
                {work.title}
              </Link>
              <div className="related-work-author">by {work.author}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No other works available.</p>
      )}
    </div>
  );
};

const LiteraryWorkDetail: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [work, setWork] = useState<LiteraryWork | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { works: allWorks, loading: allWorksLoading, error: allWorksError } = useLiteraryWorks();

  // Set the document title based on the work title when it's loaded
  usePagesTitle(work ? work.title : 'Publication');

  useEffect(() => {
    async function loadWork() {
      if (!slug) {
        setError('No work specified');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      
      try {
        // Load the specific work
        const workData = await fetchLiteraryWorkBySlug(slug);
        if (!workData) {
          setError('Work not found');
          return;
        }
        
        setWork(workData);
      } catch (err) {
        setError('Failed to load publication');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadWork();
  }, [slug]);

  // Combine loading states
  const isLoading = loading || allWorksLoading;
  // Combine error states (prioritize specific work error)
  const displayError = error || (allWorksError ? allWorksError.message : null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (displayError || !work) {
    return <div>Error: {displayError || 'Work not found'}</div>;
  }

  return (
    <div className="literary-work-detail">
      <div className="literary-content">
        <div className="literary-content-header">
          <h1 className="literary-content-title">{work.title}</h1>
          <div className="literary-content-meta">
            {work.author && <span>By {work.author}</span>}
            {work.published && <span>• &nbsp; Published {work.published}</span>}
            {work.category && <span>• &nbsp; {work.category}</span>}
          </div>
        </div>
        
        <div className="literary-content-body">
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[]}
            components={{
              p: ({ children, ...props }) => {
                const text = children?.toString() || '';
                if (text.includes('Works Cited') || text.includes('Footnotes:')) {
                  return (
                    <p 
                      style={{ 
                        marginBottom: '1.5rem', 
                        marginTop: '3rem',
                        fontWeight: '600',
                        fontSize: '1.25rem',
                        color: 'var(--color-accent)'
                      }} 
                      {...props}
                    >
                      {children}
                    </p>
                  );
                }
                // Check if this is a footnote paragraph (starts with number and colon)
                const isFootnote = /^\d+:\s/.test(text);
                return (
                  <p 
                    className={isFootnote ? 'footnote-item' : ''}
                    style={{ 
                      marginBottom: isFootnote ? '0.5rem' : '1.5rem',
                      textIndent: work.indent ? '2em' : '0'
                    }} 
                    {...props}
                  >
                    {children}
                  </p>
                );
              },
              sup: ({ children, ...props }) => (
                <sup className="footnote-reference" {...props}>
                  {children}
                </sup>
              )
            }}
          >
            {work.content
              // Convert footnote definitions with indentation first (before other processing)
              .replace(/^\[\^(\d+)\]:\s*([^\n]+)/gm, '\n\n\n\n<span class="footnote-reference">$1</span>: $2<br><br>\n\n')
              // Normalize smart quotes to straight quotes
              .replace(/["""]/g, '"')
              .replace(/[''']/g, "'")
              // Normalize line breaks
              .replace(/\n(?!\n)/g, '\n\n')
              // Convert footnote references to superscript and clean up spacing
              .replace(/\[\^(\d+)\]/g, '<sup class="footnote-reference">$1</sup>')
              .replace(/>\s+</g, '><')
              .replace(/(\w)\s*<sup class="footnote-reference">/g, '$1<sup class="footnote-reference">')
              .replace(/<\/sup>\s*(\w)/g, '</sup>$1')
              .replace(/<\/sup>\s*:\s*/g, '</sup>: ')
              // Add spacing for section headers
              .replace(/(Works Cited|Footnotes):/g, '\n\n\n\n\n\n$1:\n\n')
              }
          </ReactMarkdown>
        </div>
      </div>
      
      <RelatedWorks currentWorkSlug={slug} works={allWorks} />
    </div>
  );
};

export default LiteraryWorkDetail; 