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
  // Données des cartes de 4 sections (Excellence, Engagement, Durabilité, Intégrité)
  const featuresCards = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "Excellence Logistique",
      description: "Transport optimisé et gestion des flux pour une livraison efficace et ponctuelle."
    },
    {
      id: 2,
      icon: <FaWarehouse />,
      title: "Stockage Sécurisé",
      description: "Entrepôts modernes et sécurisés pour la conservation optimale de vos équipements."
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Réactivité",
      description: "Solutions rapides et flexibles pour répondre à vos besoins en temps réel."
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Intégrité",
      description: "Traçabilité complète et respect strict des normes de sécurité logistique."
    }
  ];

  useEffect(() => {
    // Animation au scroll
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

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="sntp-logistique-page">
      {/* Hero Section */}
      <header className="logistique-hero-section">
        <div className="logistique-hero-overlay"></div>
        <div className="container logistique-hero-content">
          <h4 className="logistique-hero-subtitle">L'Art De La Logistique Intelligente</h4>
          <div className="logistique-hero-logo">
            <img src="/wp-content/uploads/2025/07/1Couleur-22-1024x512.png" alt="SNTP LOGISTIQUE Logo" />
          </div>
          <h1 className="logistique-hero-title">SNTP LOGISTIQUE</h1>
          <div className="logistique-hero-divider"></div>
          <p className="logistique-hero-description">
            <em>Solutions logistiques complètes pour le transport, le stockage et la distribution d'équipements et matériaux de construction.</em>
          </p>
        </div>
      </header>

      {/* Section Innovation + Durabilité avec image centrale */}
      <section className="logistique-expertise-section fade-in-section">
        <div className="container">
          <div className="expertise-grid">
            <div className="expertise-card">
              <h4 className="expertise-label">EXPERTISE</h4>
              <h2 className="expertise-title">INNOVATION</h2>
              <div className="expertise-divider"></div>
              <p className="expertise-description">
                Nous révolutionnons la chaîne logistique depuis 20 ans. Nos solutions allient technologie de pointe et expertise terrain pour des opérations optimisées. Services certifiés et traçabilité complète.
              </p>
            </div>

            <div className="expertise-image-center">
              <img src="/wp-content/uploads/2025/07/image-from-rawpixel-id-83704-jpeg.jpg" alt="Logistique et transport" />
            </div>

            <div className="expertise-card">
              <h4 className="expertise-label">ENGAGEMENT</h4>
              <h2 className="expertise-title">DURABILITÉ</h2>
              <div className="expertise-divider"></div>
              <p className="expertise-description">
                Nos solutions garantissent une efficacité maximale et un impact environnemental minimal. Flotte moderne, itinéraires optimisés, stockage intelligent. Protection active de vos investissements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Des Solutions Techniques */}
      <section className="logistique-solutions-section fade-in-section">
        <div className="container">
          <div className="solutions-layout">
            <div className="solutions-text">
              <h2 className="solutions-title">Des solutions logistiques qui transforment durablement les opérations</h2>
              <a href="/projects" className="solutions-btn">
                <FaArrowRight className="btn-icon" />
                <span>Nos projets</span>
              </a>
            </div>
            <div className="solutions-cards-wrapper">
              <div className="solutions-cards-grid">
                {featuresCards.map((card) => (
                  <div key={card.id} className="solution-feature-card">
                    <div className="feature-icon-wrapper">
                      {card.icon}
                    </div>
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Flotte Moderne (Orange) */}
      <section className="logistique-fleet-section fade-in-section">
        <div className="container-full">
          <div className="fleet-grid">
            <div className="fleet-image">
              <img src="/wp-content/uploads/2025/07/image-warehouse.jpg" alt="Flotte de transport" />
            </div>
            <div className="fleet-content orange-bg">
              <h2 className="fleet-title">Flotte Moderne Et Performante</h2>
              <div className="fleet-divider"></div>
              <p className="fleet-description">
                Une flotte complète de véhicules spécialisés équipés de systèmes GPS et de suivi en temps réel. Chauffeurs qualifiés et maintenance préventive pour garantir la ponctualité et la sécurité de vos livraisons.
              </p>
              <a href="#" className="fleet-btn">
                LEARN MORE <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Stockage Intelligent (Bleu Navy) */}
      <section className="logistique-storage-section fade-in-section">
        <div className="container-full">
          <div className="storage-grid">
            <div className="storage-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Entrepôt moderne" />
            </div>
            <div className="storage-content navy-bg">
              <h2 className="storage-title">Stockage Intelligent Et Sécurisé</h2>
              <div className="storage-divider"></div>
              <p className="storage-description">
                Entrepôts climatisés et sécurisés avec système de gestion informatisé. Zones dédiées pour chaque type de matériaux, contrôle d'accès et surveillance 24/7 pour protéger vos investissements.
              </p>
              <a href="#" className="storage-btn">
                LEARN MORE <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Distribution Optimisée (Navy) */}
      <section className="logistique-distribution-section fade-in-section">
        <div className="container-full">
          <div className="distribution-grid">
            <div className="distribution-content navy-bg">
              <h2 className="distribution-title">Distribution Optimisée Sur Tout Le Territoire</h2>
              <div className="distribution-divider"></div>
              <p className="distribution-description">
                Réseau de distribution national avec planification intelligente des itinéraires. Livraisons groupées ou express selon vos besoins, avec traçabilité complète et notifications en temps réel.
              </p>
              <a href="#" className="distribution-btn">
                LEARN MORE <FaAngleRight />
              </a>
            </div>
            <div className="distribution-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Distribution" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Gestion Des Flux (Orange) */}
      <section className="logistique-management-section fade-in-section">
        <div className="container-full">
          <div className="management-grid">
            <div className="management-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Gestion des flux" />
            </div>
            <div className="management-content orange-bg">
              <h2 className="management-title">Gestion Des Flux Et Optimisation Des Coûts</h2>
              <div className="management-divider"></div>
              <p className="management-description">
                Plateforme digitale de gestion des commandes et des stocks. Analyses prédictives pour optimiser vos approvisionnements et réduire les coûts de stockage grâce à des solutions just-in-time.
              </p>
              <a href="#" className="management-btn">
                LEARN MORE <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Objectif avec barres de progression */}
      <section className="logistique-objective-section fade-in-section">
        <div className="container">
          <div className="objective-layout">
            <div className="objective-text">
              <h3 className="objective-subtitle">SNTP LOGISTIQUE</h3>
              <h2 className="objective-title">Notre Objectif</h2>
              <div className="objective-divider"></div>
              <p className="objective-description">
                Chaque livraison que nous effectuons porte en elle notre engagement pour l'excellence et la satisfaction client.
              </p>
              <a href="#" className="objective-btn">
                <FaArrowRight className="btn-icon" />
                <span>À propos</span>
              </a>
            </div>
            <div className="objective-progress">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Transport & Distribution</span>
                  <span className="progress-percentage">90%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Gestion Des Stocks</span>
                  <span className="progress-percentage">85%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Couverture Nationale</span>
                  <span className="progress-percentage">95%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Satisfaction Client</span>
                  <span className="progress-percentage">92%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Retrouvez-nous avec Google Maps */}
      <section id="contact-section" className="logistique-contact-section fade-in-section">
        <div className="container">
          <h2 className="logistique-contact-title">Retrouvez-nous</h2>
          
          <div className="logistique-contact-layout">
            {/* Google Map - Placeholder à remplacer par l'adresse réelle */}
            <div className="logistique-contact-map-container">
              <iframe 
                src="https://maps.google.com/maps?q=Alger,+Algerie&t=m&z=12&output=embed&iwloc=near"
                title="SNTP Logistique - Alger" 
                aria-label="Localisation SNTP Logistique"
                className="logistique-google-map"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="logistique-contact-info-wrapper">
              <div className="logistique-contact-grid">
                <div className="logistique-contact-item">
                  <h4 className="logistique-contact-label">L'adresse :</h4>
                  <p className="logistique-contact-info">
                    [Adresse à définir],<br />
                    Alger, Algérie
                  </p>
                </div>
                
                <div className="logistique-contact-item">
                  <h4 className="logistique-contact-label">Numéro de téléphone :</h4>
                  <p className="logistique-contact-info">
                    <a href="tel:0212XXXXXXX">[Téléphone à définir]</a>
                  </p>
                </div>

                <div className="logistique-contact-item">
                  <h4 className="logistique-contact-label">Fax :</h4>
                  <p className="logistique-contact-info">
                    <a href="tel:0212XXXXXXX">[Fax à définir]</a>
                  </p>
                </div>

                <div className="logistique-contact-item">
                  <h4 className="logistique-contact-label">Email :</h4>
                  <p className="logistique-contact-info">
                    <a href="mailto:logistique@sntp.dz">logistique@sntp.dz</a>
                  </p>
                </div>
              </div>

              <button 
                className="cta-button primary-button map-button" 
                onClick={() => window.open('https://maps.google.com/', '_blank', 'noopener,noreferrer')}
                aria-label="Ouvrir dans Google Maps"
              >
                <FaMapPin className="btn-icon" />
                Localisation
              </button>

              <p className="logistique-contact-cta-text">
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

