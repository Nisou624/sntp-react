import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget">
              <div className="footer-logo">
                <img src="/assets/images/logo-light-footer.svg" alt="SNTP" />
              </div>
              <p className="footer-description">
                La Société Nationale des Travaux Publics (SNTP) est un acteur majeur dans le domaine 
                de la construction et des travaux publics en Algérie.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="footer-widget">
              <h3 className="widget-title">Liens Rapides</h3>
              <ul className="footer-links">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">Mot du PDG</Link></li>
                <li><Link to="/services">Nos Services</Link></li>
                <li><Link to="/projects">Nos Projets</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h3 className="widget-title">Nos Services</h3>
              <ul className="footer-links">
                <li><Link to="/services">Construction de Bâtiments</Link></li>
                <li><Link to="/services">Travaux Routiers</Link></li>
                <li><Link to="/services">Ouvrages d'Art</Link></li>
                <li><Link to="/services">Hydraulique</Link></li>
                <li><Link to="/services">Génie Civil</Link></li>
              </ul>
            </div>

            <div className="footer-widget">
              <h3 className="widget-title">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Alger, Algérie</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+213123456789">+213 (0) 23 45 67 89</a>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:contact@sntp.dz">contact@sntp.dz</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} SNTP - Tous droits réservés
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Politique de Confidentialité</Link>
              <Link to="/terms">Conditions d'Utilisation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

