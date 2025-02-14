import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartProvider } from 'use-shopping-cart'
import { TitleProvider } from './contexts/TitleContext'

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Publications from './pages/Publications'
import GetInvolved from './pages/GetInvolved'
import About from './pages/About'
import Merchandise from './pages/Merchandise'
import Success from './pages/Success'
import LiteraryWorkDetail from './components/Literary/LiteraryWorkDetail'

function App() {
  return (
    <TitleProvider defaultTitle="Noetica">
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe="pk_live_51R9C2cIyXKFritZtTXnhxsMtZO68J6YaMcn4euWXWlCJeshb0HdsbImrXtdkLQ8lQ3P6dFgB4wkdNKpZV6BPPsrH00vUNuHtkN"
        successUrl={`${window.location.origin}/success`}
        cancelUrl={`${window.location.origin}/merchandise?success=false`}
        currency="USD"
        allowedCountries={["US"]}
        shouldPersist={true}
      >
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
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </TitleProvider>
  )
}

export default App
