import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: '/assets/images/hero-slide-1.jpg',
      title: 'Construire l\'Algérie d\'aujourd\'hui',
      subtitle: 'Bâtir celle de demain',
      description: 'En tant qu\'entrepreneur algérien de premier plan dans le secteur des travaux publics, nous concevons et construisons les infrastructures qui nous relient, d\'une wilaya à l\'autre.'
    },
    {
      id: 2,
      image: '/assets/images/hero-slide-2.jpg',
      title: 'Excellence et Innovation',
      subtitle: 'Dans tous nos projets',
      description: 'Notre expertise couvre tous les domaines de la construction : bâtiments, routes, ouvrages d\'art, hydraulique et génie civil.'
    },
    {
      id: 3,
      image: '/assets/images/hero-slide-3.jpg',
      title: 'Des infrastructures durables',
      subtitle: 'Pour un avenir meilleur',
      description: 'Nous mettons un point d\'honneur à respecter les délais, les budgets et les normes de qualité les plus strictes.'
    }
  ];

  // Fonction pour passer au slide suivant
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Fonction pour aller à un slide spécifique
  const handleSlideChange = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Réinitialiser l'intervalle après un changement manuel
    clearInterval(intervalRef.current);
    startAutoPlay();
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  // Fonction pour démarrer l'autoplay
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 10000); // 10 secondes
  };

  // Effet pour démarrer l'autoplay au montage du composant
  useEffect(() => {
    startAutoPlay();

    // Nettoyage lors du démontage
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${
              index < currentSlide ? 'prev' : ''
            } ${index > currentSlide ? 'next' : ''}`}
          >
            <div 
              className="hero-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            <div className="hero-overlay"></div>
            
            <div className="hero-container">
              <div className="hero-content-wrapper">
                <div className="hero-content">
                  <div className="hero-label">LA SNTP</div>
                  <h1 className="hero-main-title">
                    {slide.title}
                  </h1>
                  <div className="hero-subtitle">
                    {slide.subtitle}
                  </div>
                  <div className="hero-cta-buttons">
                    <Link to="/services" className="hero-cta-btn">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-dots-navigation">
        <div className="dots-container">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Slide ${index + 1}`}
            >
              <div className="dot-content">
                <div className="dot-circle"></div>
                <div className="dot-text">
                  <div className="dot-title">{slide.title}</div>
                  <div className="dot-subtitle">{slide.subtitle}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

