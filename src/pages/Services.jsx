import React from 'react';
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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [hasScroll, setHasScroll] = React.useState(false);
  const tabsWrapperRef = React.useRef(null);

  // Services data avec images et contenus
  const servicesData = [
    {
      id: 1,
      category: 'Construction de bâtiments',
      title: 'DÉVELOPPEMENT D\'INFRASTRUCTURES, TRAITEMENT DES MINERAIS ET SOLUTIONS CONTRACTUELLES POUR LES MARCHÉS MINIERS',
      description: 'Dans le secteur minier, Kiewit se spécialise en gestion et réalisation d\'infrastructures minières et de traitement, avec une structure d\'entreprise intégrée garantissant livraison et disposition des professionnels dans les temps prescrits et les délais approuvés.',
      buttonText: 'En savoir plus sur les marchés miniers',
      image: '/assets/images/construction-batiments.jpg',
      icon: <FaBuilding />
    },
    {
      id: 2,
      category: 'Travaux routiers',
      title: 'ROUTES, AUTOROUTES ET INFRASTRUCTURES DE TRANSPORT MODERNE',
      description: 'Nous concevons et réalisons des infrastructures routières durables et performantes. Notre expertise couvre l\'ensemble des travaux routiers, du terrassement à la pose de la chaussée, en passant par les ouvrages d\'art.',
      buttonText: 'Découvrir nos projets routiers',
      image: '/assets/images/travaux-routiers.jpg',
      icon: <FaRoad />
    },
    {
      id: 3,
      category: 'Hydraulique',
      title: 'SYSTÈMES HYDRAULIQUES ET GESTION DES RESSOURCES EN EAU',
      description: 'Spécialistes des ouvrages hydrauliques, nous réalisons barrages, stations de pompage, réseaux d\'assainissement et systèmes d\'irrigation. Notre approche intègre les dernières technologies pour une gestion optimale des ressources.',
      buttonText: 'Explorer nos solutions hydrauliques',
      image: '/assets/images/hydraulique.jpg',
      icon: <FaTint />
    },
    {
      id: 4,
      category: 'Génie civil',
      title: 'OUVRAGES D\'ART ET STRUCTURES EXCEPTIONNELLES',
      description: 'De la conception à la réalisation, nous excellons dans la construction d\'ouvrages d\'art complexes : ponts, viaducs, tunnels et structures spéciales. Notre expertise garantit sécurité, durabilité et respect de l\'environnement.',
      buttonText: 'Voir nos réalisations en génie civil',
      image: '/assets/images/genie-civil.jpg',
      icon: <FaHardHat />
    },
    {
      id: 5,
      category: 'Bâtiments industriels',
      title: 'INFRASTRUCTURES INDUSTRIELLES ET BÂTIMENTS TECHNIQUES',
      description: 'Nous construisons des bâtiments industriels adaptés à vos besoins : usines, entrepôts, hangars et installations techniques. Solutions clé en main avec intégration complète des équipements et des réseaux.',
      buttonText: 'Consulter nos projets industriels',
      image: '/assets/images/batiments-industriels.jpg',
      icon: <FaIndustry />
    },
    {
      id: 6,
      category: 'Complexes commerciaux',
      title: 'CENTRES COMMERCIAUX ET INFRASTRUCTURES TERTIAIRES',
      description: 'Réalisation de complexes commerciaux modernes et fonctionnels. Nous intégrons design architectural, performance énergétique et technologies intelligentes pour créer des espaces commerciaux attractifs et durables.',
      buttonText: 'Découvrir nos complexes commerciaux',
      image: '/assets/images/complexes-commerciaux.jpg',
      icon: <FaWarehouse />
    },
    {
      id: 7,
      category: 'Maintenance & Réhabilitation',
      title: 'MAINTENANCE PRÉVENTIVE ET RÉNOVATION D\'INFRASTRUCTURES',
      description: 'Services complets de maintenance, réparation et réhabilitation d\'infrastructures existantes. Prolongez la durée de vie de vos installations avec nos solutions techniques innovantes et notre expertise en rénovation.',
      buttonText: 'En savoir plus sur la maintenance',
      image: '/assets/images/maintenance.jpg',
      icon: <FaTools />
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

  // Fonction pour scroll horizontal uniquement vers l'onglet actif
  const scrollToActiveTab = (index) => {
    if (tabsWrapperRef.current) {
      const activeTab = tabsWrapperRef.current.children[index];
      if (activeTab) {
        const wrapperRect = tabsWrapperRef.current.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        // Calculer la position de scroll nécessaire (horizontal uniquement)
        const scrollLeft = tabsWrapperRef.current.scrollLeft;
        const tabRelativeLeft = tabRect.left - wrapperRect.left;
        const tabCenter = tabRelativeLeft + (tabRect.width / 2);
        const wrapperCenter = wrapperRect.width / 2;
        
        // Scroll horizontal smooth uniquement
        const targetScrollLeft = scrollLeft + tabCenter - wrapperCenter;
        
        tabsWrapperRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // Fonction pour changer de slide
  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Scroll horizontal uniquement vers l'onglet actif
    scrollToActiveTab(index);
    
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Auto-play du carrousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [servicesData.length]);

  // Détecter si scroll nécessaire
  React.useEffect(() => {
    const checkScroll = () => {
      if (tabsWrapperRef.current) {
        const hasScrollableContent = 
          tabsWrapperRef.current.scrollWidth > tabsWrapperRef.current.clientWidth;
        setHasScroll(hasScrollableContent);
        
        // Ajouter classe CSS si scroll nécessaire
        if (hasScrollableContent) {
          tabsWrapperRef.current.classList.add('has-scroll');
        } else {
          tabsWrapperRef.current.classList.remove('has-scroll');
        }
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Scroll automatique horizontal vers l'onglet actif lors du changement de slide
  React.useEffect(() => {
    scrollToActiveTab(currentSlide);
  }, [currentSlide]);

  return (
    <div className="services-page">
      {/* Hero Section - Services Carousel Redesigné */}
      <section className="services-hero-carousel">
        <div className="carousel-wrapper">
          {/* Slides */}
          <div className="carousel-slides">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
                  index < currentSlide ? 'prev' : ''
                } ${index > currentSlide ? 'next' : ''}`}
              >
                {/* Background Image */}
                <div className="slide-background">
                  <img src={service.image} alt={service.category} />
                  <div className="slide-overlay"></div>
                </div>

                {/* Content */}
                <div className="slide-content-wrapper">
                  <div className="container">
                    <div className="slide-content">
                      <span className="slide-category">{service.category}</span>
                      <h1 className="slide-title">{service.title}</h1>
                      <p className="slide-description">{service.description}</p>
                      <button className="slide-cta-button">
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs - Style de la capture d'écran */}
          <div className="carousel-navigation-tabs">
            <div className="container">
              <div className="nav-tabs-wrapper" ref={tabsWrapperRef}>
                {servicesData.map((service, index) => (
                  <button
                    key={service.id}
                    className={`nav-tab ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  >
                    <span className="nav-tab-text">{service.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {index < processSteps.length - 1 && <div className="step-arrow">→</div>}
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
            <a href="/contact" className="cta-button">
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

