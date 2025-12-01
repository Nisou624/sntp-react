import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
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
  const mainServices = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Construction de Bâtiments',
      description: 'Nous réalisons des projets de construction de bâtiments résidentiels, commerciaux et industriels conformes aux normes internationales les plus strictes.',
      link: '/services',
      featured: false
    },
    {
      id: 2,
      icon: <FaRoad />,
      title: 'Travaux Routiers',
      description: 'Construction, réhabilitation et entretien de routes, autoroutes et voiries. Nous participons aux plus grands projets routiers du pays.',
      link: '/services',
      featured: true
    },
    {
      id: 3,
      icon: <FaTint />,
      title: 'Ouvrages d\'Art',
      description: 'Conception et réalisation de ponts, viaducs, tunnels et autres structures d\'ingénierie complexe nécessitant une expertise technique pointue.',
      link: '/services',
      featured: false
    },
    {
      id: 4,
      icon: <FaTint />,
      title: 'Hydraulique',
      description: 'Barrages, stations d\'épuration, réseaux d\'assainissement et d\'adduction d\'eau potable pour garantir l\'accès à l\'eau pour tous.',
      link: '/services',
      featured: false
    },
    {
      id: 5,
      icon: <FaHardHat />,
      title: 'Génie Civil',
      description: 'Travaux de terrassement, fondations spéciales, géotechnique et tous types de travaux de génie civil pour des infrastructures solides.',
      link: '/services',
      featured: false
    },
    {
      id: 6,
      icon: <FaIndustry />,
      title: 'Bâtiments Industriels',
      description: 'Construction d\'usines, entrepôts, hangars et installations industrielles adaptés aux besoins spécifiques de chaque secteur d\'activité.',
      link: '/services',
      featured: false
    },
    {
      id: 7,
      icon: <FaWarehouse />,
      title: 'Complexes Commerciaux',
      description: 'Réalisation de centres commerciaux, marchés couverts et espaces commerciaux modernes et fonctionnels.',
      link: '/services',
      featured: false
    },
    {
      id: 8,
      icon: <FaTools />,
      title: 'Maintenance & Réhabilitation',
      description: 'Services de maintenance préventive et curative, réhabilitation et rénovation d\'infrastructures existantes pour prolonger leur durée de vie.',
      link: '/services',
      featured: false
    }
  ];

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
      <section className="page-header services-header" style={{
        backgroundImage: 'url(/assets/images/services-header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(129, 0, 18, 0.85) 0%, rgba(9, 20, 65, 0.75) 100%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-title" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Nos Services
          </h1>
          <div className="section-divider" style={{
            background: 'repeating-linear-gradient(90deg, #fff, #fff 12.2px, transparent 12.2px, transparent 24.4px)'
          }}></div>
          <p className="page-subtitle" style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem' }}>
            Des solutions complètes pour tous vos projets de construction
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="all-services-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Notre Expertise</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
            <p className="section-description">
              La SNTP dispose d'une expertise complète dans tous les domaines de la construction et des travaux publics
            </p>
          </div>

          <div className="services-grid-page">
            {mainServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                featured={service.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section" style={{
        background: 'linear-gradient(180deg, #810012 0%, #D10000 100%)',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" style={{ color: '#fff' }}>Notre Processus</h2>
            <div className="section-divider" style={{ 
              margin: '0 auto',
              background: 'repeating-linear-gradient(90deg, #fff, #fff 12.2px, transparent 12.2px, transparent 24.4px)'
            }}></div>
            <p className="section-description" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
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
              <h2 className="section-title">Pourquoi Choisir SNTP ?</h2>
              <div className="section-divider"></div>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Plus de 50 ans d'expérience</h4>
                    <p>Une expertise reconnue dans tous les domaines de la construction</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Équipe hautement qualifiée</h4>
                    <p>Des ingénieurs et techniciens formés aux dernières technologies</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Respect des délais</h4>
                    <p>Une planification rigoureuse pour livrer vos projets à temps</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Normes de qualité internationales</h4>
                    <p>Certifications ISO 9001, ISO 14001 et OHSAS 18001</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Technologie de pointe</h4>
                    <p>Équipements modernes et techniques innovantes</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Engagement environnemental</h4>
                    <p>Construction durable et respect de l'environnement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-image">
              <img src="/assets/images/why-choose-us.jpg" alt="SNTP Quality" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section" style={{
        backgroundImage: 'url(/assets/images/cta-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '100px 0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(9, 20, 65, 0.9)'
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-content text-center">
            <h2 className="cta-title" style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Prêt à Démarrer Votre Projet ?
            </h2>
            <div className="section-divider" style={{ 
              margin: '1.5rem auto',
              background: 'repeating-linear-gradient(90deg, #FF5E14, #FF5E14 12.2px, transparent 12.2px, transparent 24.4px)'
            }}></div>
            <p className="cta-text" style={{ 
              color: '#fff', 
              fontSize: '1.2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2.5rem',
              lineHeight: '1.8'
            }}>
              Contactez nos experts dès aujourd'hui pour discuter de votre projet. 
              Nous vous accompagnons de la conception à la réalisation.
            </p>
            <a href="/about" className="hero-btn hero-btn-primary" style={{
              display: 'inline-block',
              padding: '18px 40px',
              fontSize: '1.1rem'
            }}>
              Demander un Devis Gratuit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

