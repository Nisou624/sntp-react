import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef(null);

  // Services data avec images Unsplash
  const servicesData = [
    {
      id: 1,
      category: 'COMPLEXES COMMERCIAUX',
      title: 'L\'ARCHITECTURE COMMERCIALE',
      description: 'Les complexes commerciaux modernes sont des espaces de vie innovants. Réalisation de centres commerciaux attractifs et fonctionnels qui transforment l\'expérience client. Nous intégrons design architectural contemporain, performance énergétique optimale et technologies intelligentes pour créer des espaces durables et rentables.',
      buttonText: 'DÉCOUVRIR NOS COMPLEXES',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=1600&fit=crop',
      cardTitle: 'COMPLEXES COMMERCIAUX',
      icon: <FaBuilding />
    },
    {
      id: 2,
      category: 'TRAVAUX ROUTIERS',
      title: 'INFRASTRUCTURES ROUTIÈRES',
      description: 'Construction et réhabilitation d\'infrastructures routières de haute qualité. Nos équipes spécialisées maîtrisent toutes les techniques modernes de construction routière, du terrassement à la pose de revêtements bitumineux. Respect strict des normes de sécurité et engagement pour des infrastructures durables.',
      buttonText: 'VOIR NOS ROUTES',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=1600&fit=crop',
      cardTitle: 'TRAVAUX ROUTIERS',
      icon: <FaRoad />
    },
    {
      id: 3,
      category: 'OUVRAGES HYDRAULIQUES',
      title: 'GESTION DE L\'EAU',
      description: 'Conception et réalisation d\'ouvrages hydrauliques complexes pour la gestion durable de l\'eau. Barrages, stations de pompage, réseaux d\'adduction et systèmes d\'irrigation modernes. Notre expertise garantit des solutions techniques fiables et respectueuses de l\'environnement.',
      buttonText: 'NOS PROJETS HYDRAULIQUES',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=1600&fit=crop',
      cardTitle: 'OUVRAGES HYDRAULIQUES',
      icon: <FaTint />
    },
    {
      id: 4,
      category: 'GÉNIE CIVIL',
      title: 'CONSTRUCTION & GÉNIE CIVIL',
      description: 'Expertise complète en génie civil pour tous types de projets d\'infrastructure. De la conception structurale à la réalisation, nous assurons la solidité et la pérennité de vos ouvrages. Ponts, tunnels, fondations spéciales et structures complexes sont notre spécialité.',
      buttonText: 'EXPLORER LE GÉNIE CIVIL',
      image: 'https://images.unsplash.com/photo-1590586767908-20d6d1b6db58?w=1200&h=1600&fit=crop',
      cardTitle: 'GÉNIE CIVIL',
      icon: <FaHardHat />
    },
    {
      id: 5,
      category: 'MAINTENANCE',
      title: 'ENTRETIEN & MAINTENANCE',
      description: 'Services complets de maintenance préventive et corrective pour préserver la valeur de vos actifs. Inspections régulières, diagnostics techniques et interventions rapides. Notre approche proactive prolonge la durée de vie de vos infrastructures.',
      buttonText: 'SERVICES DE MAINTENANCE',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=1600&fit=crop',
      cardTitle: 'MAINTENANCE',
      icon: <FaTools />
    },
    {
      id: 6,
      category: 'BÂTIMENTS INDUSTRIELS',
      title: 'CONSTRUCTION INDUSTRIELLE',
      description: 'Réalisation d\'usines, d\'ateliers et de bâtiments industriels sur mesure. Solutions clés en main adaptées aux besoins spécifiques de votre activité. Respect des normes industrielles les plus strictes et optimisation des flux de production.',
      buttonText: 'PROJETS INDUSTRIELS',
      image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=1200&h=1600&fit=crop',
      cardTitle: 'BÂTIMENTS INDUSTRIELS',
      icon: <FaIndustry />
    },
    {
      id: 7,
      category: 'HANGARS & ENTREPÔTS',
      title: 'LOGISTIQUE & STOCKAGE',
      description: 'Conception et construction de hangars et entrepôts logistiques modernes. Structures métalliques robustes, vastes espaces de stockage et solutions intelligentes pour optimiser votre chaîne logistique. Délais de construction rapides garantis.',
      buttonText: 'NOS ENTREPÔTS',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1600&fit=crop',
      cardTitle: 'HANGARS & ENTREPÔTS',
      icon: <FaWarehouse />
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analyse approfondie de vos besoins et définition du cahier des charges'
    },
    {
      number: '02',
      title: 'Conception',
      description: 'Élaboration des plans techniques et validation des solutions'
    },
    {
      number: '03',
      title: 'Réalisation',
      description: 'Exécution des travaux avec suivi qualité permanent'
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Réception des ouvrages et accompagnement post-livraison'
    }
  ];

  // Features list
  const features = [
    {
      number: '01',
      title: 'Expertise Technique',
      description: 'Des ingénieurs et techniciens formés aux dernières technologies'
    },
    {
      number: '02',
      title: 'Respect des Délais',
      description: 'Une planification rigoureuse pour livrer vos projets à temps'
    },
    {
      number: '03',
      title: 'Qualité Certifiée',
      description: 'Certifications ISO 9001, ISO 14001 et OHSAS 18001'
    },
    {
      number: '04',
      title: 'Innovation',
      description: 'Équipements modernes et techniques innovantes'
    },
    {
      number: '05',
      title: 'Durabilité',
      description: 'Construction durable et respect de l\'environnement'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (index) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSwiperSlideChange = (swiper) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(swiper.realIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentSlide === 0 ? servicesData.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentSlide === servicesData.length - 1 ? 0 : currentSlide + 1;
    handleSlideChange(newIndex);
  };

  return (
    <div className="Services-page">
      {/* HERO SLIDER SECTION */}
      <section className={`Services-hero-slider ${isLoaded ? 'Services-loaded' : ''}`}>
        {/* Background animé */}
        <div className="Services-hero-slider-background">
          {servicesData.map((service, index) => (
            <img
              key={service.id}
              src={service.image}
              alt={service.title}
              className={index === currentSlide ? 'Services-active' : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="Services-hero-slider-overlay" />

        {/* Wrapper principal */}
        <div className="Services-hero-slider-wrapper">
          <div className="Services-hero-content-container">
            {/* DOTS NAVIGATION VERTICALE */}
            <div className="Services-hero-dots">
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  className={`Services-hero-dot ${index === currentSlide ? 'Services-active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>

            {/* CONTENU PRINCIPAL */}
            <div className="Services-hero-main-content">
              <div className="Services-hero-content-box">
                <div className="Services-hero-content-inner">
                  <div className="Services-hero-category">
                    {servicesData[currentSlide].category}
                  </div>
                  <h1 className="Services-hero-title">
                    {servicesData[currentSlide].title}
                  </h1>
                  <p className="Services-hero-description">
                    {servicesData[currentSlide].description}
                  </p>
                  <button className="Services-hero-cta-button">
                    {servicesData[currentSlide].buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* CAROUSEL 3D CARDS */}
            <div className="Services-hero-cards-carousel">
              <Swiper
                ref={swiperRef}
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="Services-hero-swiper-cards"
                cardsEffect={{
                  perSlideOffset: 12,
                  perSlideRotate: 3,
                  rotate: true,
                  slideShadows: true
                }}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false
                }}
                speed={800}
                onSlideChange={handleSwiperSlideChange}
              >
                {servicesData.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="Services-hero-card-3d">
                      <div className="Services-hero-card-image-wrapper">
                        <img src={service.image} alt={service.cardTitle} loading="lazy" />
                      </div>
                      <div className="Services-hero-card-gradient" />
                      <div className="Services-hero-card-label">
                        <h3 className="Services-hero-card-label-text">{service.cardTitle}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="Services-hero-navigation">
            <button
              className="Services-hero-nav-btn"
              onClick={goToPrevSlide}
              aria-label="Diapositive précédente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="Services-hero-nav-btn"
              onClick={goToNextSlide}
              aria-label="Diapositive suivante"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="Services-process-section">
        <div className="Services-container">
          <div className="Services-section-header Services-text-center">
            <div className="Services-section-label Services-section-label-white">
              NOTRE MÉTHODOLOGIE
            </div>
            <h2 className="Services-section-title Services-section-title-white">
              Un Processus Éprouvé
            </h2>
            <div className="Services-section-divider-white" />
            <p className="Services-section-description Services-section-description-white">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
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

      {/* WHY CHOOSE US SECTION */}
      <section className="Services-why-choose-section">
        <div className="Services-container">
          <div className="Services-why-choose-grid">
            <div className="Services-why-choose-content">
              <div className="Services-section-label">NOTRE EXPERTISE</div>
              <h2 className="Services-section-title">
                Pourquoi Choisir SNTP ?
              </h2>
              <div className="Services-section-divider-red" />
              <p className="Services-section-description">
                Une expertise reconnue dans tous les domaines de la construction
              </p>

              <div className="Services-features-list">
                {features.map((feature, index) => (
                  <div key={index} className="Services-feature-item">
                    <div className="Services-feature-icon">{feature.number}</div>
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
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop"
                  alt="Équipe SNTP au travail"
                  loading="lazy"
                />
              </div>
              <div className="Services-image-decoration" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="Services-cta">
        <div className="Services-cta-overlay" />
        <div className="Services-cta-container Services-container">
          <div className="Services-cta-content Services-text-center">
            <div className="Services-cta-label">CONTACTEZ-NOUS</div>
            <h2 className="Services-cta-title">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="Services-cta-text">
              Contactez nos experts dès aujourd'hui pour discuter de votre projet. Nous vous accompagnons de la conception à la réalisation.
            </p>
            <a href="/contact" className="Services-cta-button">
              Demander un Devis Gratuit
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

