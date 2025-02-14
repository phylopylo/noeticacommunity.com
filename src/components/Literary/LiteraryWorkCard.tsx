import { Link } from 'react-router-dom';
import { LiteraryWork } from '../../data/literaryWorkUtils';
import './Literary.css';

interface LiteraryWorkCardProps {
  work: LiteraryWork;
}

const LiteraryWorkCard: React.FC<LiteraryWorkCardProps> = ({ work }) => {
  const handleClick = () => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      navbar.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="literary-work-card">
      <Link 
        to={`/publications/${work.slug}`} 
        className="literary-work-link"
        onClick={handleClick}
      >
        {work.thumbnail && (
          <div className="literary-work-thumbnail">
            <img 
              src={`/art/${work.thumbnail}`} 
              alt={work.title}
              loading="lazy"
            />
          </div>
        )}
        <h3 className="literary-work-title">{work.title}</h3>
        <div className="literary-work-meta">
          <p className="literary-work-author">{work.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default LiteraryWorkCard; 