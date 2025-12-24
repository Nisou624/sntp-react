import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';
import './AboutUs.css';
import { envoyerMessageContact } from '../services/contactService';

const AboutUs = () => {
  // États pour le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ modifié
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const errors = {};

    if (!formData.nom || formData.nom.trim().length < 2) {
      errors.nom = 'Le nom doit contenir au moins 2 caractères';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Veuillez entrer une adresse email valide';
    }

    const phoneRegex = /^(0)(2|1|3|5|6|7|9)[0-9]{8}$/;
    if (formData.telephone && !phoneRegex.test(formData.telephone.replace(/\s/g, ''))) {
      errors.telephone = 'Veuillez entrer un numéro de téléphone algérien valide (ex: 0555123456)';
    }

    if (!formData.sujet || formData.sujet.trim().length < 3) {
      errors.sujet = 'Le sujet doit contenir au moins 3 caractères';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll vers la première erreur
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await envoyerMessageContact(formData);

      if (response.success) {
        setSubmitStatus('success');
        
        // Réinitialiser le formulaire
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
        setFormErrors({});

        // Scroll vers le haut
        document.getElementById('contact-form').scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');

      // Gestion des erreurs de validation du serveur
      if (error.errors && Array.isArray(error.errors)) {
        const newErrors = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.msg;
          }
        });
        setFormErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <h4 className="card-title">info@contact@sntp.dz</h4>
              <p className="card-subtitle">Réponse sous 24h</p>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="card-icon phone-icon">
                <FaPhone />
              </div>
              <h4 className="card-title">Avez-vous des questions ?</h4>
              <p className="card-phone">023 86 35 95/99</p>
              <p className="card-phone">023 86 36 01</p>
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
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Envoyez-nous un message</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
            <p className="section-description">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="contact-form-wrapper">
            {/* Message de succès */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <strong>✓ Message envoyé !</strong> Votre message a été envoyé avec succès. 
                Nous vous contacterons bientôt.
              </div>
            )}

            {/* Message d'erreur */}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <strong>✗ Erreur</strong> Une erreur est survenue lors de l'envoi. 
                Veuillez réessayer.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Ligne 1 : Nom et Email */}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${formErrors.nom ? 'error' : ''}`}
                    placeholder="Votre Nom *"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.nom && (
                    <span className="error-message">{formErrors.nom}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control ${formErrors.email ? 'error' : ''}`}
                    placeholder="Votre Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>
              </div>

              {/* Ligne 2 : Téléphone et Sujet */}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    className={`form-control ${formErrors.telephone ? 'error' : ''}`}
                    placeholder="Téléphone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                  {formErrors.telephone && (
                    <span className="error-message">{formErrors.telephone}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${formErrors.sujet ? 'error' : ''}`}
                    placeholder="Sujet *"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.sujet && (
                    <span className="error-message">{formErrors.sujet}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <textarea
                  className={`form-control ${formErrors.message ? 'error' : ''}`}
                  rows="6"
                  placeholder="Votre Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              {/* Bouton de soumission */}
              <div className="form-submit">
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
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

