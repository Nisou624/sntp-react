import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'Mot du PDG' },
    { path: '/services', label: 'Nos services' },
    { path: '/projects', label: 'Nos projets' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' }
  ];

  return (
    <header className={`ct-header ${isSticky ? 'is-sticky' : ''}`}>
      <div className="ct-container">
        <div className="header-row">
          <div className="header-logo">
            <Link to="/" className="site-logo-container">
              <img
                src={isSticky 
                  ? "/assets/images/logo-dark-sticky.svg" 
                  : "/assets/images/logo-light.svg"}
                alt="SNTP"
                className="logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.path} className={location.pathname === item.path ? 'current-menu-item' : ''}>
                  <Link to={item.path} className="ct-menu-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta desktop-cta">
            <Link to="/about" className="ct-button" target="_blank" rel="noopener noreferrer">
              CONTACTEZ-NOUS
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <div className="mobile-menu-inner">
          <Link to="/" className="mobile-logo">
            <img src="/assets/images/logo-light-mobile.svg" alt="SNTP" />
          </Link>
          
          <nav className="mobile-nav">
            <ul className="mobile-nav-menu">
              {navItems.map((item) => (
                <li key={item.path} className={location.pathname === item.path ? 'current-menu-item' : ''}>
                  <Link to={item.path} className="ct-menu-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-cta">
            <Link to="/about" className="ct-button">
              CONTACTEZ-NOUS
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

