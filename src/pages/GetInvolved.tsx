import '../styles/GetInvolved.css';
import usePagesTitle from '../hooks/usePagesTitle';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaEnvelope, FaBookOpen } from 'react-icons/fa';

const GetInvolved = () => {
  usePagesTitle('Get Involved');

  return (
    <div className="get-involved-container">
      <div className="text-center mb-5">
        <h1>Get Involved</h1>
        <p className="lead">
          Join our community and contribute to the literary arts through various opportunities.
        </p>
      </div>

      <div className="involvement-options">
        <div className="involvement-card">
          <h2>
            <FaEnvelope className="icon" /> Journal Submissions
          </h2>
          <p>
            We welcome submissions of poetry, fiction, essays, and other literary forms.
            Share your voice with our community.
          </p>
          <a href="mailto:emsah@wm.edu" className="btn btn-primary">
            emsah@wm.edu
          </a>
        </div>

        <div className="involvement-card">
          <h2>
            <FaEnvelope className="icon" /> Creative Competition
          </h2>
          <p>
            Participate in our creative competitions and showcase your artistic talents.
            Submit your entries for a chance to be featured.
          </p>
          <a href="mailto:emsah@wm.edu" className="btn btn-primary">
            emsah@wm.edu
          </a>
        </div>

        <div className="involvement-card">
          <h2>
            <FaEnvelope className="icon" /> Recruitment Listings
          </h2>
          <p>
            Join our team! We're always looking for editors, reviewers, and volunteers to help with
            our publications and events.
          </p>
          <a href="mailto:emsah@wm.edu" className="btn btn-primary">
            emsah@wm.edu
          </a>
        </div>
      </div>

      <div className="social-media-section mt-5">
        <h2 className="text-center mb-4">Follow Our Social Media</h2>
        <div className="social-media-links">
          <a 
            href="https://www.instagram.com/noeticacommunity/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram className="social-icon" />
            <span>Instagram</span>
          </a>
          <a 
            href="https://x.com/noeticacommune" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link twitter"
          >
            <FaTwitter className="social-icon" />
            <span>X / Twitter</span>
          </a>
        </div>
      </div>

      <div className="publication-section mt-5">
        <h2 className="text-center mb-4">
          <FaBookOpen className="icon" /> Read Our Work
        </h2>
        <p className="text-center">
          Explore our publications and discover the diverse voices within our community.
        </p>
        <div className="text-center mt-4">
          <Link to="/publications" className="btn btn-primary btn-lg">
            Go to Publications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved; 