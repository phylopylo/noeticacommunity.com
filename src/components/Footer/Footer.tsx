import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/merchandise">Merchandise</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://www.instagram.com/noeticawm/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/noetica-journal-of-global-premodern-studies" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:noetica@philip.science">Email</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Noetica. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 