import React, { useEffect } from 'react';
import {
  FaTruck,
  FaWarehouse,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
  FaAngleRight,
  FaLongArrowAltRight,
  FaMapPin
} from 'react-icons/fa';
import './SNTPLogistique.css';

const SNTPLogistique = () => {
  // Données des cartes de 4 sections
  const featuresCards = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Transport Fiable',
      description: 'Flotte moderne avec GPS et suivi en temps réel pour des livraisons ponctuelles et sécurisées.'
    },
    {
      id: 2,
      icon: <FaWarehouse />,
      title: 'Stockage Sécurisé',
      description: 'Entrepôts climatisés avec système de gestion informatisé et surveillance 24/7.'
    },
    {
      id: 3,
      icon: <FaClock />,
      title: 'Rapidité',
      description: 'Livraisons express ou groupées avec planification intelligente et traçabilité complète.'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Sécurité',
      description: 'Contrôles qualité rigoureux et assurances complètes pour protéger vos marchandises.'
    }
  ];

  // Progress bars data
  const progressData = [
    { label: 'Ponctualité Livraisons', percentage: 98 },
    { label: 'Satisfaction Client', percentage: 95 },
    { label: 'Traçabilité', percentage: 100 }
  ];

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.Logistique-fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/yourLocationLink', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="Logistique-page">
      {/* Hero Section */}
      <section 
        className="Logistique-hero-section"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x800/1B263B/FFFFFF?text=SNTP+Logistique+Hero)'
        }}
      >
        <div className="Logistique-hero-overlay"></div>
        <div className="Logistique-hero-content">
          <p className="Logistique-hero-subtitle">Filiale SNTP</p>
          <div className="Logistique-hero-logo">
            <img 
              src="https://via.placeholder.com/300x80/C1121F/FFFFFF?text=SNTP+LOGISTIQUE" 
              alt="SNTP Logistique Logo" 
            />
          </div>
          <h1 className="Logistique-hero-title">
            Solutions Logistiques Intégrées
          </h1>
          <div className="Logistique-hero-divider"></div>
          <p className="Logistique-hero-description">
            Nous révolutionnons la chaîne logistique depuis 20 ans. Nos solutions allient technologie de pointe 
            et expertise terrain pour des opérations optimisées. Services certifiés et traçabilité complète.
          </p>
        </div>
      </section>

      {/* Section Expertise (3 colonnes) */}
      <section className="Logistique-expertise-section Logistique-fade-in-section">
        <div className="Logistique-expertise-grid">
          {/* Card Efficacité */}
          <div className="Logistique-expertise-card">
            <p className="Logistique-expertise-label">Notre Force</p>
            <h2 className="Logistique-expertise-title">Efficacité</h2>
            <div className="Logistique-expertise-divider"></div>
            <p className="Logistique-expertise-description">
              Nos solutions garantissent une efficacité maximale et un impact environnemental minimal. 
              Flotte moderne, itinéraires optimisés, stockage intelligent. Protection active de vos investissements.
            </p>
          </div>

          {/* Image Center */}
          <div className="Logistique-expertise-image-center">
            <img 
              src="https://via.placeholder.com/400x400/C1121F/FFFFFF?text=Logistics" 
              alt="SNTP Logistique" 
            />
          </div>

          {/* Card Innovation */}
          <div className="Logistique-expertise-card">
            <p className="Logistique-expertise-label">Notre Vision</p>
            <h2 className="Logistique-expertise-title">Innovation</h2>
            <div className="Logistique-expertise-divider"></div>
            <p className="Logistique-expertise-description">
              Plateforme digitale de gestion en temps réel avec analyses prédictives pour optimiser 
              vos approvisionnements et réduire les coûts grâce à des solutions intelligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Section Solutions */}
      <section className="Logistique-solutions-section Logistique-fade-in-section">
        <div className="Logistique-solutions-layout">
          <div className="Logistique-solutions-text">
            <h2 className="Logistique-solutions-title">
              Solutions Logistiques Complètes Pour Tous Vos Besoins
            </h2>
            <a href="/contact" className="Logistique-solutions-btn">
              En savoir plus
              <FaArrowRight />
            </a>
          </div>

          <div className="Logistique-solutions-cards-grid">
            {featuresCards.map((card) => (
              <div key={card.id} className="Logistique-solution-feature-card">
                <div className="Logistique-feature-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="Logistique-feature-title">{card.title}</h3>
                <p className="Logistique-feature-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Flotte de Transport */}
      <section className="Logistique-fleet-section Logistique-fade-in-section">
        <div className="Logistique-container-full">
          <div className="Logistique-fleet-grid">
            <div className="Logistique-fleet-image">
              <img 
                src="https://via.placeholder.com/800x500/1B263B/FFFFFF?text=Fleet" 
                alt="Flotte de Transport" 
              />
            </div>
            <div className="Logistique-fleet-content Logistique-red-bg">
              <h2 className="Logistique-fleet-title">Flotte de Transport Moderne</h2>
              <div className="Logistique-fleet-divider"></div>
              <p className="Logistique-fleet-description">
                Une flotte complète de véhicules spécialisés équipés de systèmes GPS et de suivi en temps réel. 
                Chauffeurs qualifiés et maintenance préventive pour garantir la ponctualité et la sécurité 
                de vos livraisons.
              </p>
              <a href="/services/transport" className="Logistique-fleet-btn">
                Découvrir
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Stockage */}
      <section className="Logistique-storage-section Logistique-fade-in-section">
        <div className="Logistique-container-full">
          <div className="Logistique-storage-grid">
            <div className="Logistique-storage-content Logistique-black-bg">
              <h2 className="Logistique-storage-title">Stockage Sécurisé et Intelligent</h2>
              <div className="Logistique-storage-divider"></div>
              <p className="Logistique-storage-description">
                Entrepôts climatisés et sécurisés avec système de gestion informatisé. Zones dédiées pour chaque 
                type de matériaux, contrôle d'accès et surveillance 24/7 pour protéger vos investissements.
              </p>
              <a href="/services/stockage" className="Logistique-storage-btn">
                En savoir plus
                <FaAngleRight />
              </a>
            </div>
            <div className="Logistique-storage-image">
              <img 
                src="https://via.placeholder.com/800x500/C1121F/FFFFFF?text=Storage" 
                alt="Stockage" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Distribution */}
      <section className="Logistique-distribution-section Logistique-fade-in-section">
        <div className="Logistique-container-full">
          <div className="Logistique-distribution-grid">
            <div className="Logistique-distribution-image">
              <img 
                src="https://via.placeholder.com/800x500/1B263B/FFFFFF?text=Distribution" 
                alt="Distribution" 
              />
            </div>
            <div className="Logistique-distribution-content Logistique-black-bg">
              <h2 className="Logistique-distribution-title">Réseau de Distribution National</h2>
              <div className="Logistique-distribution-divider"></div>
              <p className="Logistique-distribution-description">
                Réseau de distribution national avec planification intelligente des itinéraires. Livraisons 
                groupées ou express selon vos besoins, avec traçabilité complète et notifications en temps réel.
              </p>
              <a href="/services/distribution" className="Logistique-distribution-btn">
                Nos services
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gestion Logistique */}
      <section className="Logistique-management-section Logistique-fade-in-section">
        <div className="Logistique-container-full">
          <div className="Logistique-management-grid">
            <div className="Logistique-management-content Logistique-red-bg">
              <h2 className="Logistique-management-title">Gestion Logistique Digitale</h2>
              <div className="Logistique-management-divider"></div>
              <p className="Logistique-management-description">
                Plateforme digitale de gestion des commandes et des stocks. Analyses prédictives pour optimiser 
                vos approvisionnements et réduire les coûts de stockage grâce à des solutions just-in-time.
              </p>
              <a href="/innovation" className="Logistique-management-btn">
                Innovation
                <FaAngleRight />
              </a>
            </div>
            <div className="Logistique-management-image">
              <img 
                src="https://via.placeholder.com/800x500/C1121F/FFFFFF?text=Management" 
                alt="Gestion" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Objectif (Progress Bars) */}
      <section className="Logistique-objective-section Logistique-fade-in-section">
        <div className="Logistique-objective-layout">
          {/* Texte gauche */}
          <div className="Logistique-objective-text">
            <p className="Logistique-objective-subtitle">Notre Engagement</p>
            <h2 className="Logistique-objective-title">Performance à Chaque Étape</h2>
            <div className="Logistique-objective-divider"></div>
            <p className="Logistique-objective-description">
              Chaque livraison que nous effectuons porte en elle notre engagement pour l'excellence 
              et la satisfaction client.
            </p>
            <a href="/qualite" className="Logistique-objective-btn">
              Notre démarche qualité
              <FaLongArrowAltRight />
            </a>
          </div>

          {/* Progress bars droite */}
          <div className="Logistique-objective-progress">
            {progressData.map((item, index) => (
              <div key={index} className="Logistique-progress-item">
                <div className="Logistique-progress-header">
                  <span className="Logistique-progress-label">{item.label}</span>
                  <span className="Logistique-progress-percentage">{item.percentage}%</span>
                </div>
                <div className="Logistique-progress-bar-container">
                  <div 
                    className="Logistique-progress-bar-fill"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact (Carte + Infos) */}
      <section className="Logistique-contact-section Logistique-fade-in-section">
        <h2 className="Logistique-contact-title">Retrouvez-nous</h2>
        
        <div className="Logistique-contact-layout">
          {/* Google Map */}
          <div className="Logistique-contact-map-container">
            <iframe
              className="Logistique-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2836746374243!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ1JzEzLjciTiAzwrAwMyczMS43IkU!5e0!3m2!1sfr!2sdz!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SNTP Logistique"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="Logistique-contact-info-wrapper">
            <div className="Logistique-contact-grid">
              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">📍 Adresse</h3>
                <p className="Logistique-contact-info">
                  Zone Logistique SNTP,<br />
                  Alger, Algérie
                </p>
              </div>

              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">📞 Téléphone</h3>
                <p className="Logistique-contact-info">
                  <a href="tel:+213123456789">+213 (0) 21 XX XX XX</a>
                </p>
              </div>

              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">✉️ Email</h3>
                <p className="Logistique-contact-info">
                  <a href="mailto:logistique@sntp.dz">logistique@sntp.dz</a>
                </p>
              </div>
            </div>

            <a 
              href="#map"
              className="Logistique-cta-button Logistique-primary-button Logistique-map-button"
              onClick={handleMapClick}
            >
              <FaMapPin className="Logistique-btn-icon" />
              Voir sur Google Maps
            </a>

            <div className="Logistique-contact-cta-text">
              <p>
                Contactez dès aujourd'hui <strong>SNTP LOGISTIQUE</strong> pour découvrir nos solutions
                de transport, stockage et distribution. Nos experts logistiques sont à votre disposition
                pour optimiser votre chaîne d'approvisionnement avec des services fiables et performants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPLogistique;

