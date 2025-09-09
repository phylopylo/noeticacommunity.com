import { Link } from 'react-router-dom';
import NewsletterSubscription from "../components/NewsletterSubscription/NewsletterSubscription"
import '../styles/Home.css'
import { useLiteraryWorks, LiteraryWork } from '../data/literaryWorkUtils';
import usePagesTitle from '../hooks/usePagesTitle';

const Home = () => {
  // Use the combined hook for title management
  usePagesTitle('Home');

  const { works, loading, error } = useLiteraryWorks();

  const sortWorksByDate = (a: LiteraryWork, b: LiteraryWork) => {
    const dateA = a.published ? new Date(a.published).getTime() : 0;
    const dateB = b.published ? new Date(b.published).getTime() : 0;
    return dateB - dateA;
  };

  const specificSpotlightWork = works.find(work => 
    work.title === "What We Think Hides Us" && work.author === "Inigo Russell"
  );

  const sortedWorks = [...works].sort(sortWorksByDate);

  const worksForLatestSection = specificSpotlightWork
    ? sortedWorks.filter(work => work.slug !== specificSpotlightWork.slug)
    : sortedWorks;

  const latestWorks = worksForLatestSection.slice(0, 3);
  
  const spotlightWork = specificSpotlightWork;

  if (loading) {
    return <div className="container my-4"><p>Loading content...</p></div>;
  }

  if (error) {
    return <div className="container my-4 error-message"><p>Error loading content: {error.message}</p></div>;
  }

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Noetica</h1>
        <p className="motto">Eruditio flumen vivendi</p>
        <p className="subtitle">Knowledge is the flow of living</p>
      </section>

      {spotlightWork && (
        <section className="featured-content">
          <div className="featured-card">
          <span className="card-category">{spotlightWork.category}</span>

            <h3>{spotlightWork.title}</h3>
            <div className="card-image">
              <img src="/art/et-in-arcadia-ego.jpg" alt={`Featured: ${spotlightWork.title}`} />
            </div>
            <div className="card-content">
              <p>Creative work by {spotlightWork.author}.</p><p>{spotlightWork.published}</p>
              <Link to={`/publications/${spotlightWork.slug}`} className="read-more">Read More</Link>
            </div>
          </div>
        </section>
      )}

      {latestWorks.length > 0 && (
        <section className="latest-articles">
          <h2>Latest Articles</h2>
          <div className="articles-grid">
            {latestWorks.map((work, index) => (
              <article className="article-card" key={work.slug}>
                <div className="article-image">
                  <img 
                    src={
                      index === 0 ? "/art/The Marriage of the Virgin by Raphael.jpg" :
                      index === 1 ? "/art/Saint Jerome in his Study by Antonello da Messina.jpg" :
                      "/art/midas-washing-at-the-source-of-the-river-pactolus-1624.jpg"
                    } 
                    alt={work.title} 
                  />
                </div>
                <div className="article-content">
                  <h3>{work.title}</h3>
                  <div>
                    <p>{work.category} by {work.author}</p>
                    <Link to={`/publications/${work.slug}`} className="read-more">Read More</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          <Link to="/publications#Creative" className="category-link">
            <div className="category-tile">
              <h3>Creative</h3>
              <p>Poems, stories, and more</p>
            </div>
          </Link>
          <Link to="/publications#Essays" className="category-link">
            <div className="category-tile">
              <h3>Essays</h3>
              <p>Analytical and reflective pieces</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="contributors-newsletter-wrapper">
        <section className="contributors">
          <h2>Our Contributors</h2>
          <div className="contributor-names">
            <span><a href="https://www.wm.edu/as/religiousstudies/faculty/angelov_a.php" target="_blank" rel="noopener noreferrer">Dr. Alexander Angelov</a></span>
            <span>Blake McCullough</span>
            <span>Cailyn Cooper</span>
            <span>Frankie Harman</span>
            <span>Stephen Vasiljevic</span>
            <span>Michael Pagano</span>
            <span>Jarrett Miller</span>
            <span>Addie Steel</span>
            <span><a href="https://philip.science" target="_blank" rel="noopener noreferrer">Philip Roberts</a></span>
            <span>Travis Slocumb</span>
            <span>Ethan Sah</span>
            <span>Leah Kaleb</span>
            <span>Theodore Pappas van de Verg</span>
            <span>Chiara Moran</span>
            <span>Calvin Auby</span>
            <span>Can Saglam</span>
          </div>
        </section>

        <section className="newsletter-section">
          <NewsletterSubscription />
        </section>
      </div>
    </div>
  )
}

export default Home 
