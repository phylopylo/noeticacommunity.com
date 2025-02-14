import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-item">
          <span>Home</span>
          <img src="/art/The Marriage of the Virgin by Raphael.jpg" alt="Home" className="nav-image" />
        </Link>
        
        <Link to="/publications" className="nav-item">
          <span>Publications</span>
          <img src="/art/Saint Jerome in his Study by Antonello da Messina.jpg" alt="Publications" className="nav-image" />
        </Link>
        
        <Link to="/get-involved" className="nav-item">
          <span>Get&nbsp;Involved</span>
          <img src="/art/The Ecstasy of Saint Francis painting by the Italian Renaissance artist Giovanni Bellini (c. 1430- 1516 CE). Completed by 1480 CE. (Frick Collection, New York).jpg" alt="Get Involved" className="nav-image" />
        </Link>
        
        <Link to="/about" className="nav-item">
          <span>About</span>
          <img src="/art/The painted panel the Flagellation of Christ by the Italian Renaissance artist Piero della Francesca (c. 1420-1492 CE). c. 1455 CE. (National Gallery of Marche, Urbino).jpg" alt="About" className="nav-image" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 