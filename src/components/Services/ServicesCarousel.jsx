import React, { useState, useEffect, useCallback } from 'react';
import { 
  FaBuilding, 
  FaRoad, 
  FaTint, 
  FaHardHat, 
  FaTools,
  FaIndustry,
  FaWarehouse
} from 'react-icons/fa';
import './ServicesCarousel.css';

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const services = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Construction de Bâtiments',
      description: 'Nous réalisons des projets de construction de bâtiments résidentiels, commerciaux et industriels conformes aux normes internationales les plus strictes.',
      fullDescription: 'Expertise complète en construction de bâtiments avec plus de 50 ans d\'expérience dans la réalisation de projets d\'envergure nationale.',
      link: '/services/batiments'
    },
    {
      id: 2,
      icon: <FaRoad />,
      title: 'Travaux Routiers',
      description: 'Construction, réhabilitation et entretien de routes, autoroutes et voiries. Nous participons aux plus grands projets routiers du pays.',
      fullDescription: 'Leader dans la construction routière avec une capacité de mobilisation sur les plus grands chantiers d\'infrastructures routières.',
      link: '/services/travaux-routiers'
    },
    {
      id: 3,
      icon: <FaTint />,
      title: 'Ouvrages d\'Art',
      description: 'Conception et réalisation de ponts, viaducs, tunnels et autres structures d\'ingénierie complexe nécessitant une expertise technique pointue.',
      fullDescription: 'Maîtrise totale des ouvrages d\'art les plus complexes grâce à notre bureau d\'études intégré et nos équipes spécialisées.',
      link: '/services/ouvrages-art'
    },
    {
      id: 4,
      icon: <FaTint />,
      title: 'Hydraulique',
      description: 'Barrages, stations d\'épuration, réseaux d\'assainissement et d\'adduction d\'eau potable pour garantir l\'accès à l\'eau pour tous.',
      fullDescription: 'Solutions hydrauliques complètes pour l\'approvisionnement en eau potable et le traitement des eaux usées.',
      link: '/services/hydraulique'
    },
    {
      id: 5,
      icon: <FaHardHat />,
      title: 'Génie Civil',
      description: 'Travaux de terrassement, fondations spéciales, géotechnique et tous types de travaux de génie civil pour des infrastructures solides.',
      fullDescription: 'Expertise reconnue en génie civil avec une capacité d\'intervention sur tous types de sols et de configurations terrain.',
      link: '/services/genie-civil'
    },
    {
      id: 6,
      icon: <FaIndustry />,
      title: 'Bâtiments Industriels',
      description: 'Construction d\'usines, entrepôts, hangars et installations industrielles adaptés aux besoins spécifiques de chaque secteur d\'activité.',
      fullDescription: 'Réalisation clé en main de bâtiments industriels avec prise en compte des contraintes techniques et opérationnelles.',
      link: '/services/batiments-industriels'
    },
    {
      id: 7,
      icon: <FaWarehouse />,
      title: 'Complexes Commerciaux',
      description: 'Réalisation de centres commerciaux, marchés couverts et espaces commerciaux modernes et fonctionnels.',
      fullDescription: 'Construction de complexes commerciaux intégrant les dernières normes en matière d\'accessibilité et de développement durable.',
      link: '/services/complexes-commerciaux'
    },
    {
      id: 8,
      icon: <FaTools />,
      title: 'Maintenance & Réhabilitation',
      description: 'Services de maintenance préventive et curative, réhabilitation et rénovation d\'infrastructures existantes pour prolonger leur durée de vie.',
      fullDescription: 'Solutions complètes de maintenance et réhabilitation pour optimiser la durée de vie de vos infrastructures.',
      link: '/services/maintenance'
    }
  ];

  const INTERVAL_TIME = 6000; // 6 secondes
  const PROGRESS_INTERVAL = 50; // Mise à jour toutes les 50ms

  // Fonction pour passer au service suivant
  const nextService = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setProgress(0);
  }, [services.length]);

  // Gestion du timer et de la progression
  useEffect(() => {
    if (isPaused) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (PROGRESS_INTERVAL / INTERVAL_TIME) * 100;
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    const slideTimer = setTimeout(() => {
      nextService();
    }, INTERVAL_TIME);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [activeIndex, isPaused, nextService]);

  // Gestion du clic sur un onglet
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  // Gestion du survol
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const activeService = services[activeIndex];

  return (
    <section className="services-carousel-section">
      <div className="carousel-container">
        {/* Background avec Overlay */}
        <div className="carousel-background">
          <div className="carousel-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="carousel-content-wrapper">
          {/* Section Header */}
          <div className="carousel-header">
            <h2 className="carousel-title">Notre Savoir-Faire</h2>
            <p className="carousel-subtitle">
              La SNTP dispose d'une expertise complète dans tous les domaines de la construction et des travaux publics
            </p>
          </div>

          {/* Tabs Navigation Horizontale */}
          <div className="carousel-tabs-horizontal">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`carousel-tab-horizontal ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="tab-title-horizontal">{service.title}</span>
                <div className="tab-progress-bar-horizontal">
                  <div 
                    className="tab-progress-fill-horizontal"
                    style={{ width: index === activeIndex ? `${progress}%` : '0%' }}
                  ></div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div 
            className="carousel-service-display"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="service-display-content">
              {/* Icon */}
              <div className="service-display-icon">
                {activeService.icon}
              </div>

              {/* Text Content */}
              <div className="service-display-text">
                <h3 className="service-display-title">
                  {activeService.title}
                </h3>
                <p className="service-display-description">
                  {activeService.description}
                </p>
                <p className="service-display-full-description">
                  {activeService.fullDescription}
                </p>

                {/* CTA Button */}
                <a href={activeService.link} className="service-display-cta">
                  <span>En savoir plus</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path 
                      d="M4 10h12M10 4l6 6-6 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Dots (Alternative) */}
          <div className="carousel-dots">
            {services.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
                aria-label={`Aller au service ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
