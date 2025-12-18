import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { heroSlides } from '../../data/heroSlides';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Fonction pour passer au slide suivant
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
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
        {heroSlides.map((slide, index) => (
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
          {heroSlides.map((slide, index) => (
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

