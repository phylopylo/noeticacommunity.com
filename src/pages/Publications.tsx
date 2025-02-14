import { useState, useEffect } from 'react';
import { useLiteraryWorks, getWorksByCategory } from '../data/literaryWorkUtils';
import CategorySection from '../components/Literary/CategorySection';
import '../components/Literary/Literary.css';
import '../components/JournalArticle/Journal.css';
import usePagesTitle from '../hooks/usePagesTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const PublicationsPage = () => {
  const { works, loading, error } = useLiteraryWorks();
  const [selectedPdf, setSelectedPdf] = useState('volume1.pdf');
  const isMobile = useMobile();
  usePagesTitle('Publications');
  
  if (loading) {
    return (
      <div className="literary-loading">
        <h1>Publications</h1>
        <p>Loading publications...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="literary-error">
        <h1>Publications</h1>
        <p>Error loading publications: {error.message}</p>
      </div>
    );
  }

  const handlePdfChange = (pdf: string) => {
    setSelectedPdf(pdf);
  };
  
  // Organize works by category
  const { categories, worksByCategory } = getWorksByCategory(works);
  console.log('Categories:', categories);
  console.log('Works by category:', worksByCategory);
  
  return (
    <div className="my-4 literary-works-container">
      <div className="text-center mb-4">
        <h1>Publications</h1>
        <p>
          Explore our collection of essays, poems, short stories, and other publications
          from our talented contributors.
        </p>
      </div>
      
      {categories.length === 0 ? (
        <p className="text-center">No publications found.</p>
      ) : (
        <div className="literary-categories">
          {categories.map(category => (
            <CategorySection 
              key={category} 
              category={category} 
              works={worksByCategory[category]} 
            />
          ))}
        </div>
      )}

      <h2 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>Journal Publications</h2>
      <div className="journal">
        {isMobile ? (
          <div className="mobile-downloads">
            <h2>Download Journal Volumes</h2>
            <div className="download-links">
              <a 
                href={`/content/journal/volume1.pdf`} 
                download
                className="download-link"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Volume 1</span>
              </a>
              <a 
                href={`/content/journal/volume2.pdf`} 
                download
                className="download-link"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Volume 2</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="pdf-container">
            <div className="pdf-iframe-wrapper">
              <iframe
                src={`/content/journal/${selectedPdf}`}
                className="pdf-iframe"
                title={`Journal ${selectedPdf.includes('volume1') ? 'Volume 1' : 'Volume 2'}`}
              ></iframe>
            </div>
            <div className="pdf-toolbar">
              <div className="download-links">
                <a 
                  href={`/content/journal/volume1.pdf`} 
                  download
                  className="download-link"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download Volume 1</span>
                </a>
                <a 
                  href={`/content/journal/volume2.pdf`} 
                  download
                  className="download-link"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download Volume 2</span>
                </a>
              </div>

              <div className="pdf-selector">
                <button
                  className={`pdf-select-btn ${selectedPdf === 'volume1.pdf' ? 'active' : ''}`}
                  onClick={() => handlePdfChange('volume1.pdf')}
                  aria-label="Select Volume 1"
                >
                  View Volume 1
                </button>
                <button
                  className={`pdf-select-btn ${selectedPdf === 'volume2.pdf' ? 'active' : ''}`}
                  onClick={() => handlePdfChange('volume2.pdf')}
                  aria-label="Select Volume 2"
                >
                  View Volume 2
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationsPage; 
