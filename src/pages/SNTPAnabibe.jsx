import React from 'react';
import {
  FaMapMarkedAlt,
  FaPeopleArrows,
  FaLeaf,
  FaProjectDiagram,
  FaArrowRight,
  FaAngleRight,
  FaLongArrowAltRight,
  FaMapPin
} from 'react-icons/fa';
import './SNTPAnabibe.css';

const SNTPAnabibe = () => {
  // Données des cartes de 4 sections (Excellence, Engagement, Durabilité, Intégrité)
  const featuresCards = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: 'Excellence Technique',
      description: 'Solutions innovantes en béton préfabriqué avec certification ISO et normes internationales.'
    },
    {
      id: 2,
      icon: <FaPeopleArrows />,
      title: 'Engagement Client',
      description: 'Accompagnement personnalisé de vos projets d\'assainissement et d\'hydraulique.'
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: 'Durabilité',
      description: 'Produits éco-responsables garantis 50 ans avec traitement anti-érosion avancé.'
    },
    {
      id: 4,
      icon: <FaProjectDiagram />,
      title: 'Intégrité',
      description: 'Transparence totale sur nos processus de fabrication et contrôle qualité.'
    }
  ];

  // Progress bars data
  const progressData = [
    { label: 'Qualité Produits', percentage: 95 },
    { label: 'Satisfaction Client', percentage: 92 },
    { label: 'Innovation', percentage: 88 }
  ];

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/yourLocationLink', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="Anabibe-page">
      {/* Hero Section */}
      <section 
        className="Anabibe-hero-section"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x650/1B263B/FFFFFF?text=SNTP+Anabibe+Hero)'
        }}
      >
        <div className="Anabibe-hero-overlay"></div>
        <div className="Anabibe-hero-content">
          <p className="Anabibe-hero-subtitle">Filiale SNTP</p>
          <div className="Anabibe-hero-logo">
            <img src="https://via.placeholder.com/400x100/C1121F/FFFFFF?text=SNTP+ANABIBE+Logo" alt="SNTP Anabibe Logo" />
          </div>
          <h1 className="Anabibe-hero-title">
            Leader du Béton Préfabriqué en Algérie
          </h1>
          <div className="Anabibe-hero-divider"></div>
          <p className="Anabibe-hero-description">
            Nous révolutionnons le béton depuis 20 ans. Nos buses allient résistance exceptionnelle et design hydrodynamique pour des écoulements parfaits. Solutions durables certifiées ISO.
          </p>
        </div>
      </section>

      {/* Section Expertise (Innovation + Durabilité) */}
      <section className="Anabibe-expertise-section">
        <div className="Anabibe-container-full">
          <div className="Anabibe-expertise-grid">
            {/* Card Innovation */}
            <div className="Anabibe-expertise-card">
              <p className="Anabibe-expertise-label">Notre Force</p>
              <h2 className="Anabibe-expertise-title">Innovation</h2>
              <div className="Anabibe-expertise-divider"></div>
              <p className="Anabibe-expertise-description">
                Nos buses garantissent 50 ans de service sans faille. Béton haute performance, traitement anti-érosion, joints étanches. Protection active des ressources hydrauliques et des sols.
              </p>
            </div>

            {/* Image Center */}
            <div className="Anabibe-expertise-image-center">
              <img src="https://via.placeholder.com/320x373/C1121F/FFFFFF?text=Product" alt="Produit SNTP Anabibe" />
            </div>

            {/* Card Durabilité */}
            <div className="Anabibe-expertise-card">
              <p className="Anabibe-expertise-label">Notre Engagement</p>
              <h2 className="Anabibe-expertise-title">Durabilité</h2>
              <div className="Anabibe-expertise-divider"></div>
              <p className="Anabibe-expertise-description">
                Solutions éco-responsables avec béton recyclable, gestion optimisée des ressources en eau et réduction de l'empreinte carbone sur l'ensemble du cycle de vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solutions Techniques */}
      <section className="Anabibe-solutions-section">
        <div className="Anabibe-container">
          <div className="Anabibe-solutions-layout">
            {/* Texte gauche */}
            <div className="Anabibe-solutions-text">
              <h2 className="Anabibe-solutions-title">
                Solutions Techniques Complètes Pour Tous Vos Projets
              </h2>
              <a href="/contact" className="Anabibe-solutions-btn">
                En savoir plus
                <FaArrowRight className="btn-icon" />
              </a>
            </div>

            {/* Cards droite */}
            <div className="Anabibe-solutions-cards-wrapper">
              <div className="Anabibe-solutions-cards-grid">
                {featuresCards.map((card) => (
                  <div key={card.id} className="Anabibe-solution-feature-card">
                    <div className="Anabibe-feature-icon-wrapper">
                      {card.icon}
                    </div>
                    <h3 className="Anabibe-feature-title">{card.title}</h3>
                    <p className="Anabibe-feature-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parc Industriel Performant */}
      <section className="Anabibe-industrial-section">
        <div className="Anabibe-container-full">
          <div className="Anabibe-industrial-grid">
            <div className="Anabibe-industrial-image">
              <img src="https://via.placeholder.com/600x500/1B263B/FFFFFF?text=Industrial+Park" alt="Parc Industriel" />
            </div>
            <div className="Anabibe-industrial-content Anabibe-red-bg">
              <h2 className="Anabibe-industrial-title">Parc Industriel Performant</h2>
              <div className="Anabibe-industrial-divider"></div>
              <p className="Anabibe-industrial-description">
                Dans 70 hectares installé principalement généralement l'équipement, intégrant un centre d'usinage, un four de préchauffe et un vaste stock de produits finis. Dotation logistique complète et méthodes modernes pour garantir vos projets.
              </p>
              <a href="/nos-unites" className="Anabibe-industrial-btn">
                Découvrir
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solutions Complètes */}
      <section className="Anabibe-complete-solutions-section">
        <div className="Anabibe-container-full">
          <div className="Anabibe-complete-solutions-grid">
            <div className="Anabibe-complete-solutions-content Anabibe-navy-bg">
              <h2 className="Anabibe-complete-solutions-title">Solutions Complètes d'Assainissement</h2>
              <div className="Anabibe-complete-solutions-divider"></div>
              <p className="Anabibe-complete-solutions-description">
                Grâce à notre expertise, nous couvrons tous les besoins en assainissement, drainage hydraulique urbaine, agricole et industrielle. Études, fourniture, pose pour des solutions durables.
              </p>
              <a href="/services" className="Anabibe-complete-solutions-btn">
                En savoir plus
                <FaAngleRight />
              </a>
            </div>
            <div className="Anabibe-complete-solutions-image">
              <img src="https://via.placeholder.com/600x500/C1121F/FFFFFF?text=Solutions" alt="Solutions Complètes" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Résistance Certifiée */}
      <section className="Anabibe-resistance-section">
        <div className="Anabibe-container-full">
          <div className="Anabibe-resistance-grid">
            <div className="Anabibe-resistance-image">
              <img src="https://via.placeholder.com/600x500/1B263B/FFFFFF?text=Resistance" alt="Résistance" />
            </div>
            <div className="Anabibe-resistance-content Anabibe-red-bg">
              <h2 className="Anabibe-resistance-title">Résistance Certifiée Jusqu'à 45 Bars</h2>
              <div className="Anabibe-resistance-divider"></div>
              <p className="Anabibe-resistance-description">
                Conçus pour résister à 45 bars en test, nos tuyaux assurent une performance inégalée dans les sols instables, les zones sismiques et les milieux corrosifs.
              </p>
              <a href="/produits" className="Anabibe-resistance-btn">
                Nos produits
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Optimisation Logistique */}
      <section className="Anabibe-optimization-section">
        <div className="Anabibe-container-full">
          <div className="Anabibe-optimization-grid">
            <div className="Anabibe-optimization-content Anabibe-navy-bg">
              <h2 className="Anabibe-optimization-title">Optimisation Logistique</h2>
              <div className="Anabibe-optimization-divider"></div>
              <p className="Anabibe-optimization-description">
                La longueur standard de 6 mètres réduit les coûts de manutention, facilite le stockage et permet une pose rapide grâce à un système d'emboîtement breveté.
              </p>
              <a href="/innovation" className="Anabibe-optimization-btn">
                Innovation
                <FaAngleRight />
              </a>
            </div>
            <div className="Anabibe-optimization-image">
              <img src="https://via.placeholder.com/600x500/C1121F/FFFFFF?text=Logistics" alt="Logistique" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Objectif (Progress Bars) */}
      <section className="Anabibe-objective-section">
        <div className="Anabibe-container">
          <div className="Anabibe-objective-layout">
            {/* Texte gauche */}
            <div className="Anabibe-objective-text">
              <p className="Anabibe-objective-subtitle">Notre Objectif</p>
              <h2 className="Anabibe-objective-title">Excellence à Chaque Étape</h2>
              <div className="Anabibe-objective-divider"></div>
              <p className="Anabibe-objective-description">
                Chaque buse en béton qui sort de nos ateliers porte en elle notre savoir-faire artisanal allié à une précision industrielle.
              </p>
              <a href="/qualite" className="Anabibe-objective-btn">
                Notre démarche qualité
                <FaLongArrowAltRight />
              </a>
            </div>

            {/* Progress bars droite */}
            <div className="Anabibe-objective-progress">
              {progressData.map((item, index) => (
                <div key={index} className="Anabibe-progress-item">
                  <div className="Anabibe-progress-header">
                    <span className="Anabibe-progress-label">{item.label}</span>
                    <span className="Anabibe-progress-percentage">{item.percentage}%</span>
                  </div>
                  <div className="Anabibe-progress-bar-container">
                    <div 
                      className="Anabibe-progress-bar-fill"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact (Carte + Infos) */}
      <section className="Anabibe-contact-section">
        <div className="Anabibe-container">
          <h2 className="Anabibe-contact-title">Retrouvez-nous</h2>
          
          <div className="Anabibe-contact-layout">
            {/* Google Map */}
            <div className="Anabibe-contact-map-container">
              <iframe
                className="Anabibe-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2836746374243!2d0.1106!3d35.9867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ3JzEyLjEiTiAzwrAwMCczOC4yIkU!5e0!3m2!1sfr!2sdz!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Anabibe"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="Anabibe-contact-info-wrapper">
              <div className="Anabibe-contact-grid">
                <div className="Anabibe-contact-item">
                  <h3 className="Anabibe-contact-label">📍 Adresse</h3>
                  <p className="Anabibe-contact-info">
                    Zone Industrielle, lot n°16, Fornaka,<br />
                    Mostaganem, Algérie, 27160
                  </p>
                </div>

                <div className="Anabibe-contact-item">
                  <h3 className="Anabibe-contact-label">📞 Téléphone</h3>
                  <p className="Anabibe-contact-info">
                    <a href="tel:+213123456789">+213 (0) 45 XX XX XX</a>
                  </p>
                </div>

                <div className="Anabibe-contact-item">
                  <h3 className="Anabibe-contact-label">✉️ Email</h3>
                  <p className="Anabibe-contact-info">
                    <a href="mailto:anabibe@sntp.dz">anabibe@sntp.dz</a>
                  </p>
                </div>
              </div>

              <div className="Anabibe-contact-cta-text">
                <p>
                  Contactez dès aujourd'hui <strong>SNTP ANABIBE</strong> pour découvrir nos solutions innovantes
                  en béton préfabriqué. Nos experts sont à votre disposition pour étudier vos projets d'assainissement,
                  de drainage et d'hydraulique avec des produits certifiés et durables.
                </p>
              </div>

              <a 
                href="#map"
                className="Anabibe-solutions-btn Anabibe-map-button"
                onClick={handleMapClick}
              >
                <FaMapPin className="btn-icon" />
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPAnabibe;

