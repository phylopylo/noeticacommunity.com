import './Merchandise.css';
import usePagesTitle from '../hooks/usePagesTitle';

const Merchandise = () => {
  usePagesTitle('Merchandise');

  return (
    <div className="merchandise-link-container">
      <br></br>
      <h1>
        <a
          href="https://noeticacommunity.myshopify.com/collections/all"
          className="merchandise-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to visit Our Merchandise Store!
        </a>
      </h1>
    </div>
  );
};

export default Merchandise;