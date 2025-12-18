import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  // Pages qui nécessitent du texte foncé au lieu de blanc au top
  const darkTextPages = [
    '/faq', 
    '/about', 
    '/implantations', 
    '/nos-unites', 
    '/nos-directions', 
    '/nos-appels-offres',
    '/admin/dashboard',
    '/admin/articles'
  ];
  const isDarkTextPage = darkTextPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [location]);

  // Désactiver le scroll quand le mega menu est ouvert
  useEffect(() => {
    if (isMegaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMegaMenuOpen]);

  // Navigation items pour le menu horizontal
  const navItems = [
    { path: '/nous-connaitre', label: 'Nous connaître' },
    { path: '/nos-engagements', label: 'Nos engagements' },
    { path: '/services', label: 'Nos Métiers' },
    { path: '/projects', label: 'Nos Réalisations' },
    { path: '/nos-unites', label: 'Nos Unités' },
    { path: '/nos-directions', label: 'Nos Directions' },
    { path: '/implantations', label: 'Implantations' },
    { path: '/nos-appels-offres', label: "Nos appels d'offres" },
    { path: '/nous-rejoindre', label: 'Nous Rejoindre' }
  ];

  return (
    <>
      <header className={`ct-header ${isSticky ? 'is-sticky' : ''} ${isDarkTextPage ? 'dark-text-mode' : ''}`}>
        <div className="ct-container">
          <div className="header-row">
            {/* LOGO */}
            <div className="header-logo">
              <Link to="/" className="site-logo-container">
                <img
                  src="/logo.png"
                  alt="SNTP"
                  className="logo"
                />
              </Link>
            </div>

            {/* MENU HORIZONTAL DESKTOP */}
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

            {/* CTA + HAMBURGER */}
            <div className="header-actions">
              <Link to="/about-us#contact-info" className="ct-button">
                CONTACTEZ-NOUS
              </Link>

              <button
                className={`hamburger-menu ${isMegaMenuOpen ? 'is-active' : ''}`}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isMegaMenuOpen}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MEGA MENU */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </>
  );
};

export default Header;
