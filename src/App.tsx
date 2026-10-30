import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { TitleProvider } from './contexts/TitleContext'

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Publications from './pages/Publications'
import GetInvolved from './pages/GetInvolved'
import About from './pages/About'
import LiteraryWorkDetail from './components/Literary/LiteraryWorkDetail'

function App() {
  return (
    <TitleProvider defaultTitle="Noetica">
      <Router>
        <ScrollToTop />
        <div className="app">
          <div className="banner">
            <img src="/branding/noetica banner cropped.png" alt="Noetica Banner" />
          </div>
          <div id="main-navbar">
            <Navbar />
          </div>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/publications/:slug" element={<LiteraryWorkDetail />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TitleProvider>
  )
}

export default App
