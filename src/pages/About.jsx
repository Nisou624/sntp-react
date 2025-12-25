import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simuler l'envoi (à remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="About-page">
      {/* Hero Section */}
      <section className="About-hero">
        <div className="About-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="About-hero-badge">
              <Building2 size={20} />
              <span>À Propos</span>
            </div>
            <h1>Qui Sommes-Nous ?</h1>
            <p className="About-hero-subtitle">
              Découvrez l'histoire, les valeurs et la vision qui animent la SNTP depuis plus de 60 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message du PDG */}
      <section className="About-ceo-section">
        <div className="About-container">
          <motion.div 
            className="About-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="About-section-title">Message du Président-Directeur Général</h2>
            <div className="About-section-divider"></div>
            <p className="About-section-description">
              Un mot de notre PDG sur la vision et l'engagement de la SNTP
            </p>
          </motion.div>

          <div className="About-ceo-content">
            <motion.div 
              className="About-ceo-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/ceo-placeholder.jpg"
                alt="PDG de SNTP"
                className="About-ceo-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/0D1B2A/FFFFFF?text=PDG+SNTP';
                }}
              />
              <div className="About-ceo-info">
                <h3 className="About-ceo-name">M. Le Président-Directeur Général</h3>
                <p className="About-ceo-title">PDG SNTP</p>
              </div>
            </motion.div>

            <motion.div 
              className="About-message-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="About-message-greeting">
                Chères et chers partenaires, chers clients,
              </p>

              <p className="About-message-text">
                C'est avec un immense honneur que je m'adresse à vous en tant que Président-Directeur 
                Général de la SNTP. Depuis plus de six décennies, notre entreprise s'est imposée comme 
                un acteur incontournable du secteur de la construction et des travaux publics en Algérie.
              </p>

              <p className="About-message-text">
                Notre succès repose sur trois piliers fondamentaux : <strong>l'excellence technique</strong>, 
                <strong> l'innovation constante</strong> et un <strong>engagement sans faille</strong> envers 
                nos clients. Chaque projet que nous réalisons est une opportunité de démontrer notre savoir-faire 
                et notre détermination à bâtir un avenir meilleur pour l'Algérie.
              </p>

              <p className="About-message-text">
                Notre vision est claire : devenir le leader régional en matière d'infrastructures durables 
                et innovantes. Nous investissons massivement dans la formation de nos équipes, l'acquisition 
                de technologies de pointe et le développement de pratiques respectueuses de l'environnement.
              </p>

              <p className="About-message-text">
                Je tiens à remercier chaleureusement l'ensemble de nos collaborateurs pour leur dévouement 
                quotidien, ainsi que nos partenaires et clients pour leur confiance renouvelée. Ensemble, 
                nous continuerons à construire l'Algérie de demain, projet après projet, avec passion et excellence.
              </p>

              <div className="About-ceo-signature">
                <div className="About-signature-text">
                  Le Président-Directeur Général
                </div>
                <div className="About-signature-stamp">
                  Société Nationale de Travaux Publics
                  <br />
                  SNTP - Depuis 1962
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="About-contact-section">
        <div className="About-container">
          <motion.div 
            className="About-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="About-section-title">Contactez-Nous</h2>
            <div className="About-section-divider"></div>
            <p className="About-section-description">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>

          {/* Cartes de contact */}
          <div className="About-contact-grid">
            <motion.div 
              className="About-contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="About-contact-icon">
                <Phone size={32} />
              </div>
              <h3 className="About-contact-title">Téléphone</h3>
              <div className="About-contact-text">
                <p>
                  <a href="tel:+213233016000">+213 23 30 16 00</a>
                </p>
                <p>
                  <a href="tel:+213233016001">+213 23 30 16 01</a>
                </p>
                <p style={{ fontSize: '0.9rem', color: '#778DA9', marginTop: '10px' }}>
                  Lundi - Jeudi: 08h00 - 16h30
                  <br />
                  Dimanche: 08h00 - 15h00
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="About-contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="About-contact-icon">
                <Mail size={32} />
              </div>
              <h3 className="About-contact-title">Email</h3>
              <div className="About-contact-text">
                <p>
                  <a href="mailto:contact@sntp.dz">contact@sntp.dz</a>
                </p>
                <p>
                  <a href="mailto:info@sntp.dz">info@sntp.dz</a>
                </p>
                <p style={{ fontSize: '0.9rem', color: '#778DA9', marginTop: '10px' }}>
                  Réponse sous 24h ouvrables
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="About-contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="About-contact-icon">
                <MapPin size={32} />
              </div>
              <h3 className="About-contact-title">Siège Social</h3>
              <div className="About-contact-text">
                <p>Route Nationale N°5</p>
                <p>Chéraga, Alger</p>
                <p>Algérie</p>
                <p style={{ fontSize: '0.9rem', color: '#778DA9', marginTop: '10px' }}>
                  <a 
                    href="https://maps.google.com/?q=SNTP+Alger" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#C1121F', textDecoration: 'underline' }}
                  >
                    Voir sur Google Maps
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Formulaire de contact */}
          <motion.div 
            className="About-form-wrapper"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="About-form-header">
              <h3 className="About-form-title">Envoyez-nous un Message</h3>
              <p className="About-form-subtitle">
                Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais
              </p>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '15px 20px',
                  borderRadius: '10px',
                  marginBottom: '30px',
                  backgroundColor: submitStatus.type === 'success' ? '#D4EDDA' : '#F8D7DA',
                  color: submitStatus.type === 'success' ? '#155724' : '#721C24',
                  border: `2px solid ${submitStatus.type === 'success' ? '#28A745' : '#FF4444'}`
                }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form className="About-contact-form" onSubmit={handleSubmit}>
              <div className="About-form-row">
                <div className="About-form-group">
                  <label htmlFor="nom">Nom *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="About-form-control"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="About-form-group">
                  <label htmlFor="prenom">Prénom *</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className="About-form-control"
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="About-form-row">
                <div className="About-form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="About-form-control"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="About-form-group">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="About-form-control"
                    placeholder="+213 XX XX XX XX"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="About-form-row">
                <div className="About-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="sujet">Sujet *</label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    className="About-form-control"
                    placeholder="Objet de votre message"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="About-form-row">
                <div className="About-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="About-form-control"
                    placeholder="Décrivez votre demande ou question..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                  ></textarea>
                </div>
              </div>

              <div className="About-form-submit">
                <button 
                  type="submit" 
                  className="About-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '3px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }}></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default About;

