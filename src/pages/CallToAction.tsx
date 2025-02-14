import './CallToAction.css'; // We'll create this later for styling
import useDocumentTitle from '../hooks/useDocumentTitle';

const CallToAction = () => {
  // Set the document title for Call to Action page
  useDocumentTitle('Call for Submissions');

  return (
    <div className="call-to-action-container">
      <h1>Get Involved</h1>

      <section className="cta-section">
        <h2>Email Submissions</h2>
        <p>
          We welcome submissions for our publications. Please send your work to: 
          <a href="mailto:submit@example.com">submit@example.com</a> 
          {/* Replace with actual email */}
        </p>
        {/* Add submission guidelines link or info here if available */}
      </section>

      <section className="cta-section">
        <h2>Creative Competition</h2>
        <p>
          Showcase your talent! Participate in our ongoing creative competition.
          <a href="/competition-url" target="_blank" rel="noopener noreferrer">Learn More & Enter Here</a> 
          {/* Replace with actual competition URL */}
        </p>
      </section>

      <section className="cta-section">
        <h2>Newsletter</h2>
        <p>Stay updated with our latest news, publications, and events.</p>
        {/* Add newsletter signup form component or link here */}
        <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="cta-section">
        <h2>Recruitment</h2>
        <p>
          Interested in joining our team? Check out our current openings.
          {/* Add link to recruitment page or listings here */}
          <a href="/recruitment-listings" target="_blank" rel="noopener noreferrer">View Open Positions</a> 
          {/* Replace with actual recruitment URL */}
        </p>
      </section>
    </div>
  );
};

export default CallToAction; 