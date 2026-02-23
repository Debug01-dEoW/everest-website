import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '0 4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)', // Slightly more opaque for readability
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
          height: '130px', // Spacious but elegant
          color: '#1e293b',
          transition: 'all 0.3s ease'
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}>
            <img
              src="/victory_logo.png"
              alt="Victory Logo"
              style={{
                height: '110px', // Maximized scale
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '1.05rem', fontWeight: 600, alignItems: 'center' }}>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>About Us</NavLink>
            <NavLink to="/products/frp" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>FRP</NavLink>
            <NavLink to="/products/grc" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>GRC</NavLink>
            <NavLink to="/products/prefab" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>Prefab</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : "nav-link"}>Contact Us</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{ background: '#0f172a', color: 'white', padding: '4rem 2rem 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div>
              <div style={{ marginBottom: '1.5rem', overflow: 'hidden', width: '320px', height: '100px' }}>
                <img
                  src="/victory_logo.png"
                  alt="Logo"
                  style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', maxWidth: '300px' }}>
                Leading manufacturer of high-quality composite solutions for industrial and architectural excellence.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.8, fontSize: '0.9rem' }}>
                <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Victory</Link></li>
                <li><Link to="/products/frp" style={{ color: 'inherit', textDecoration: 'none' }}>FRP Solutions</Link></li>
                <li><Link to="/products/grc" style={{ color: 'inherit', textDecoration: 'none' }}>GRC Architecture</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Head Office</h4>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.6' }}>
                Ankur Apartment, Jetalpur Rd, Vishwas Colony, Vadodara, Gujarat 390007
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Victory Composite Industries. All rights reserved.
          </div>
        </footer>

        <style>{`
          .nav-link {
            color: #1e293b;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #a85a2a;
          }
          .nav-active {
            color: #a85a2a;
            text-decoration: none;
            position: relative;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
