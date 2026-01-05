import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MegaMenu from './MegaMenu';
import LanguageSwitcher from '../../i18n/LanguageSwitcher';
import adminPaths from '../../config/adminConfig';
import './Header.css';

const Header = () => {
  const { t } = useTranslation(['common']);
  const [isSticky, setIsSticky] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  // Pages qui nécessitent du texte foncé au lieu de blanc au top
  const darkTextPages = [
    '/faq',
    '/about',
    '/implantations',
    '/nos-directions',
    adminPaths.articlesNew,
    '/nos-appels-offres', // Liste des appels d'offres
    adminPaths.dashboard,
  ];

  // Chemins dynamiques avec paramètres (routes avec :id ou :slug)
  const darkTextDynamicRoutes = [
    '/nos-appels-offres/', // Détails d'un appel d'offre: /nos-appels-offres/:id
    '/articles/'           // Détails d'un article: /articles/:slug
  ];

  // Fonction pour vérifier si on est sur une page dark-text
  const isDarkTextPage = () => {
    const currentPath = location.pathname;
    
    // 1. Vérifier les pages exactes
    if (darkTextPages.includes(currentPath)) {
      return true;
    }
    
    // 2. Vérifier les routes dynamiques (qui commencent par un chemin spécifique)
    return darkTextDynamicRoutes.some(route => currentPath.startsWith(route));
  };

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
    { path: '/nous-connaitre', label: t('header.menu.about') },
    { path: '/nos-engagements', label: t('header.menu.engagements') },
    { path: '/services', label: t('header.menu.services') },
    { path: '/projects', label: t('header.menu.projects') },
    { path: '/nos-unites', label: t('header.menu.units') },
    { path: '/nos-directions', label: t('header.menu.directions') },
    { path: '/blog', label: t('header.menu.news') },
    { path: '/nos-appels-offres', label: t('header.menu.tenders') },
    { path: '/nous-rejoindre', label: t('header.menu.join') }
  ];

  return (
    <>
      {/* MEGA MENU */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* HEADER */}
      <header 
        className={`ct-header ${isSticky ? 'is-sticky' : ''} ${isDarkTextPage() ? 'dark-text-mode' : ''}`}
      >
        <div className="header-row">
          {/* LOGO */}
          <div className="header-logo">
            <Link to="/" className="site-logo-container">
              <img 
                src="/logo.png" 
                alt="SNTP Logo" 
              />
            </Link>
          </div>

          {/* NAVIGATION DESKTOP */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li 
                  key={item.path}
                  className={location.pathname === item.path ? 'current-menu-item' : ''}
                >
                  <Link to={item.path} className="ct-menu-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS (CTA + Hamburger) */}
          <div className="header-actions">
            <Link to="/about-us" className="ct-button">
              {t('header.menu.contact')}
            </Link>

            {/*<LanguageSwitcher 
              className={`langue-switch ${isSticky ? 'is-sticky' : ''} ${isDarkTextPage() ? 'dark-text-mode' : ''}`}
            />*/}

            <button
              className={`hamburger-menu ${isMegaMenuOpen ? 'is-active' : ''}`}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

