import React from 'react';
import ServicesCarousel from '../components/Services/ServicesCarousel';
import { 
  FaBuilding, 
  FaRoad, 
  FaTint, 
  FaHardHat, 
  FaTools,
  FaIndustry,
  FaWarehouse
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse de vos besoins et élaboration d\'une solution sur mesure'
    },
    {
      number: '02',
      title: 'Planification',
      description: 'Conception détaillée du projet avec calendrier et budget précis'
    },
    {
      number: '03',
      title: 'Réalisation',
      description: 'Exécution des travaux par nos équipes qualifiées et expérimentées'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Contrôle qualité final et remise du projet clé en main'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header services-header">
        <div className="header-overlay"></div>
        <div className="container header-content">
          <h1 className="page-title">Nos Services</h1>
          <div className="section-divider"></div>
          <p className="page-subtitle">
            Des solutions complètes pour tous vos projets de construction
          </p>
        </div>
      </section>

      {/* Services Carousel - NOUVEAU */}
      <ServicesCarousel />

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-white">Méthodologie</span>
            <h2 className="section-title section-title-white">Notre Processus</h2>
            <div className="section-divider-white"></div>
            <p className="section-description section-description-white">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <span className="section-label">Nos Atouts</span>
              <h2 className="section-title">Pourquoi Choisir SNTP ?</h2>
              <div className="section-divider-red"></div>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Plus de 50 ans d'expérience</h4>
                    <p>Une expertise reconnue dans tous les domaines de la construction</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Équipe hautement qualifiée</h4>
                    <p>Des ingénieurs et techniciens formés aux dernières technologies</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Respect des délais</h4>
                    <p>Une planification rigoureuse pour livrer vos projets à temps</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Normes de qualité internationales</h4>
                    <p>Certifications ISO 9001, ISO 14001 et OHSAS 18001</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Technologie de pointe</h4>
                    <p>Équipements modernes et techniques innovantes</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <span>✓</span>
                  </div>
                  <div className="feature-content">
                    <h4>Engagement environnemental</h4>
                    <p>Construction durable et respect de l'environnement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-image">
              <div className="image-wrapper">
                <img src="/assets/images/why-choose-us.jpg" alt="SNTP Quality" />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="cta-overlay"></div>
        
        <div className="container cta-container">
          <div className="cta-content text-center">
            <span className="cta-label">Passez à l'Action</span>
            <h2 className="cta-title">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <div className="section-divider-white"></div>
            <p className="cta-text">
              Contactez nos experts dès aujourd'hui pour discuter de votre projet. 
              Nous vous accompagnons de la conception à la réalisation.
            </p>
            <a href="/about" className="cta-button">
              <span>Demander un Devis Gratuit</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
