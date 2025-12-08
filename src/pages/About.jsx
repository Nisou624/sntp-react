import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';
import Header from '../components/Header/Header';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <Header />
      {/* CEO Message */}
      <section className="ceo-message section">
        <div className="container">
          <div className="ceo-content">
            <div className="ceo-image-wrapper">
              <img src="/assets/images/ceo-photo.jpg" alt="PDG SNTP" className="ceo-image" />
            </div>
            <div className="message-content">
              <h2 className="section-title">Un Engagement Sans Faille</h2>
              <div className="section-divider"></div>
              <p className="message-text">
                Chers partenaires, chers clients,
              </p>
              <p className="message-text">
                C'est avec un immense honneur que je m'adresse à vous en tant que Président-Directeur 
                Général de la SNTP. Depuis plus de cinq décennies, notre entreprise s'est imposée 
                comme un acteur incontournable du secteur de la construction et des travaux publics 
                en Algérie.
              </p>
              <p className="message-text">
                Notre succès repose sur trois piliers fondamentaux : l'excellence technique, 
                l'innovation constante et un engagement sans faille envers nos clients. Chaque 
                projet que nous réalisons est une opportunité de démontrer notre savoir-faire et 
                notre détermination à bâtir un avenir meilleur pour l'Algérie.
              </p>
              <p className="message-text">
                Je tiens à remercier l'ensemble de nos collaborateurs pour leur dévouement 
                quotidien, ainsi que nos partenaires et clients pour leur confiance renouvelée. 
                Ensemble, nous continuerons à construire l'Algérie de demain.
              </p>
              <div className="ceo-signature">
                <strong>Le Président-Directeur Général</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section" style={{
        background: '#f8f8f8'
      }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Contactez-Nous</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
            <p className="section-description">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-box">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-info-title">Adresse</h3>
              <p className="contact-info-text">
                Siège Social<br />
                Alger, Algérie
              </p>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3 className="contact-info-title">Téléphone</h3>
              <p className="contact-info-text">
                <a href="tel:+213123456789">+213 (0) 23 45 67 89</a><br />
                <a href="tel:+213123456790">+213 (0) 23 45 67 90</a>
              </p>
            </div>

            <div className="contact-info-box">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-info-title">Email</h3>
              <p className="contact-info-text">
                <a href="mailto:contact@sntp.dz">contact@sntp.dz</a><br />
                <a href="mailto:info@sntp.dz">info@sntp.dz</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
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
    </div>
  );
};

export default About;

