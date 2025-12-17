import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">L'équipe SNTP</div>
          <h1 className="hero-title">CONTACTEZ-NOUS</h1>
          <p className="hero-description">
            Votre vision mérite une expertise hors norme. Parlons-en sans attendre.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section" id="contact-info">
        <div className="container">
          <div className="section-intro">
            <div className="intro-icon">
              <FaEnvelope />
            </div>
            <h2 className="intro-heading">Prêt à Collaborer ?</h2>
            <h3 className="intro-title">NOUS CONTACTER</h3>
            <div className="intro-divider"></div>
          </div>

          <div className="contact-cards-grid">
            {/* Email Card */}
            <div className="contact-card">
              <div className="card-icon email-icon">
                <FaEnvelope />
              </div>
              <h4 className="card-title">infocontact@sntp.dz</h4>
              <p className="card-subtitle">Réponse sous 24h</p>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="card-icon phone-icon">
                <FaPhone />
              </div>
              <h4 className="card-title">Avez-vous des questions ?</h4>
              <p className="card-phone">023 – 86 – 35 – 95/99</p>
              <p className="card-phone">023 – 86 – 36 – 01</p>
            </div>

            {/* Hours Card */}
            <div className="contact-card">
              <div className="card-icon hours-icon">
                <FaClock />
              </div>
              <h4 className="card-title">Heures de travail</h4>
              <p className="card-subtitle">Chaque jour du 8h à 16h sauf vendredi et samedi</p>
            </div>
          </div>

          <p className="contact-footer-text">
            <em>Votre projet mérite un accompagnement d'exception. Discutons-en dès aujourd'hui.</em>
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Envoyez-nous un message</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
            <p className="section-description">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Votre Nom *" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Votre Email *" 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Téléphone" 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Sujet" 
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  className="form-control" 
                  rows="6" 
                  placeholder="Votre Message *" 
                  required
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  Envoyer le Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-content">
          <div className="location-text-box">
            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="location-subtitle">Visitez nous aujourd'hui</h3>
            <h2 className="location-title">Localisation</h2>
            <p className="location-address">Route nationale N° 05 BP 39 BEK ALGER</p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <div className="social-content">
            <div className="social-icon-main">
              <FaEnvelope />
            </div>
            <h2 className="social-title">Rejoignez Notre Communauté En Ligne</h2>
            <p className="social-description">
              <em>Suivez l'actualité de la Société Nationale des Travaux Publics en un clic!</em>
            </p>
            
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

