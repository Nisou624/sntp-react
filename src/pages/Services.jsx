import React from 'react';
import {
  FaBuilding,
  FaRoad,
  FaTint,
  FaHardHat,
  FaTools,
  FaIndustry,
  FaWarehouse,
  FaArrowRight,
  FaCheckCircle
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
      title: 'INFRASTRUCTURES PUBLIQUES ET BÂTIMENTS D\'EXCELLENCE',
      description: 'La SNTP excelle dans la réalisation de grands projets de bâtiments publics, administratifs, éducatifs et de santé. Notre expertise intégrée garantit la livraison de structures durables et conformes aux normes internationales.',
      buttonText: 'Découvrir nos projets',
      image: '/assets/images/construction-batiments.jpg',
      icon: <FaBuilding />
    },
    {
      id: 2,
      category: 'Travaux routiers',
      title: 'ROUTES, AUTOROUTES ET OUVRAGES D\'ART',
      description: 'Spécialiste des infrastructures routières, la SNTP conçoit et réalise des routes, autoroutes, échangeurs et ponts en appliquant les technologies les plus avancées pour garantir sécurité, durabilité et fluidité du trafic.',
      buttonText: 'Voir nos réalisations',
      image: '/assets/images/travaux-routiers.jpg',
      icon: <FaRoad />
    },
    {
      id: 3,
      category: 'Hydraulique',
      title: 'BARRAGES, STATIONS DE TRAITEMENT ET RÉSEAUX HYDRAULIQUES',
      description: 'La SNTP réalise des infrastructures hydrauliques majeures : barrages, stations d\'épuration, réseaux d\'adduction d\'eau potable et d\'assainissement, contribuant ainsi à la sécurité hydrique du pays.',
      buttonText: 'Explorer nos solutions',
      image: '/assets/images/hydraulique.jpg',
      icon: <FaTint />
    },
    {
      id: 4,
      category: 'Terrassement',
      title: 'TRAVAUX DE TERRASSEMENT ET PRÉPARATION DE SITES',
      description: 'Avec un parc d\'engins modernes et une expertise reconnue, la SNTP assure les opérations de terrassement, nivellement, déblai-remblai pour préparer les sites de construction de manière optimale.',
      buttonText: 'En savoir plus',
      image: '/assets/images/terrassement.jpg',
      icon: <FaHardHat />
    },
    {
      id: 5,
      category: 'Travaux spéciaux',
      title: 'FONDATIONS SPÉCIALES, TUNNELS ET OUVRAGES SOUTERRAINS',
      description: 'La SNTP maîtrise les techniques de travaux spéciaux : fondations profondes, pieux, tunnels, galeries souterraines et renforcement de sols, permettant la réalisation de projets complexes.',
      buttonText: 'Découvrir notre expertise',
      image: '/assets/images/travaux-speciaux.jpg',
      icon: <FaTools />
    },
    {
      id: 6,
      category: 'Industrie',
      title: 'INFRASTRUCTURES INDUSTRIELLES ET ÉNERGÉTIQUES',
      description: 'Réalisation d\'installations industrielles, centrales électriques, raffineries et infrastructures pétrolières, avec une approche intégrée garantissant performance, sécurité et conformité réglementaire.',
      buttonText: 'Nos références',
      image: '/assets/images/industrie.jpg',
      icon: <FaIndustry />
    },
    {
      id: 7,
      category: 'Équipements',
      title: 'LOCATION ET MAINTENANCE D\'ÉQUIPEMENTS',
      description: 'La SNTP dispose d\'un parc d\'équipements moderne et performant, disponible à la location avec services de maintenance, permettant d\'optimiser la productivité et la rentabilité de vos chantiers.',
      buttonText: 'Consulter notre catalogue',
      image: '/assets/images/equipements.jpg',
      icon: <FaWarehouse />
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse approfondie de vos besoins et élaboration d\'une stratégie sur mesure.'
    },
    {
      number: '02',
      title: 'Planification',
      description: 'Conception détaillée, études techniques et planning d\'exécution rigoureux.'
    },
    {
      number: '03',
      title: 'Réalisation',
      description: 'Exécution des travaux avec suivi qualité permanent et respect des délais.'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Réception définitive, garanties et support après-vente de qualité.'
    }
  ];

  // Features list
  const features = [
    {
      icon: '1',
      title: 'Expertise Technique',
      description: 'Des ingénieurs et techniciens formés aux dernières technologies'
    },
    {
      icon: '2',
      title: 'Respect des Délais',
      description: 'Une planification rigoureuse pour livrer vos projets à temps'
    },
    {
      icon: '3',
      title: 'Certifications Internationales',
      description: 'Certifications ISO 9001, ISO 14001 et OHSAS 18001'
    },
    {
      icon: '4',
      title: 'Technologies Avancées',
      description: 'Équipements modernes et techniques innovantes'
    },
    {
      icon: '5',
      title: 'Développement Durable',
      description: 'Construction durable et respect de l\'environnement'
    }
  ];

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

  // Auto-slide effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [servicesData.length]);

  // Check scroll for tabs
  React.useEffect(() => {
    const checkScroll = () => {
      if (tabsWrapperRef.current) {
        const hasScrollable = tabsWrapperRef.current.scrollWidth > tabsWrapperRef.current.clientWidth;
        setHasScroll(hasScrollable);
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
    <div className="Services-page">
      {/* Hero Carousel Section */}
      <section className="Services-hero-carousel">
        <div className="Services-carousel-wrapper">
          {/* Slides */}
          <div className="Services-carousel-slides">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`Services-carousel-slide ${
                  index === currentSlide ? 'active' : ''
                } ${index === currentSlide - 1 || (currentSlide === 0 && index === servicesData.length - 1) ? 'prev' : ''} ${
                  index === currentSlide + 1 || (currentSlide === servicesData.length - 1 && index === 0) ? 'next' : ''
                }`}
              >
                <div className="Services-slide-background">
                  <img src={service.image} alt={service.category} />
                </div>
                <div className="Services-slide-overlay"></div>
                <div className="Services-slide-content-wrapper">
                  <div className="container">
                    <div className="Services-slide-content">
                      <div className="Services-slide-category">{service.category}</div>
                      <h1 className="Services-slide-title">{service.title}</h1>
                      <p className="Services-slide-description">{service.description}</p>
                      <button className="Services-slide-cta-button">
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="Services-carousel-navigation-tabs">
            <div
              ref={tabsWrapperRef}
              className={`Services-nav-tabs-wrapper ${hasScroll ? 'has-scroll' : ''}`}
            >
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  className={`Services-nav-tab ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="Services-nav-tab-text">{service.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="Services-section Services-process-section">
        <div className="container">
          <div className="Services-section-header Services-text-center">
            <div className="Services-section-label Services-section-label-white">Notre Méthode</div>
            <h2 className="Services-section-title Services-section-title-white">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </h2>
            <div className="Services-section-divider-white"></div>
          </div>

          <div className="Services-process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="Services-process-step">
                <div className="Services-step-number">{step.number}</div>
                <h3 className="Services-step-title">{step.title}</h3>
                <p className="Services-step-description">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="Services-step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="Services-section Services-why-choose-section">
        <div className="container">
          <div className="Services-why-choose-grid">
            <div className="Services-why-choose-content">
              <div className="Services-section-label">Pourquoi nous choisir</div>
              <h2 className="Services-section-title">
                Une expertise reconnue dans tous les domaines de la construction
              </h2>
              <div className="Services-section-divider-red"></div>

              <div className="Services-features-list">
                {features.map((feature, index) => (
                  <div key={index} className="Services-feature-item">
                    <div className="Services-feature-icon">{feature.icon}</div>
                    <div className="Services-feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Services-why-choose-image">
              <div className="Services-image-wrapper">
                <img src="/assets/images/why-choose-us.jpg" alt="Pourquoi choisir SNTP" />
              </div>
              <div className="Services-image-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="Services-cta"
        style={{ backgroundImage: 'url(/assets/images/cta-background.jpg)' }}
      >
        <div className="Services-cta-overlay"></div>
        <div className="container Services-cta-container">
          <div className="Services-cta-content Services-text-center">
            <div className="Services-cta-label">Parlons de votre projet</div>
            <h2 className="Services-cta-title">
              Prêt à démarrer votre projet avec SNTP ?
            </h2>
            <p className="Services-cta-text">
              Contactez nos experts dès aujourd'hui pour discuter de votre projet. Nous vous accompagnons 
              de la conception à la réalisation.
            </p>
            <button className="Services-cta-button">
              Demander un Devis Gratuit <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

