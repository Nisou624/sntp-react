import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/assets/images/hero-slide-1.jpg',
      title: 'Construire l\'Algérie d\'aujourd\'hui',
      subtitle: 'Bâtir celle de demain'
    },
    {
      id: 2,
      image: '/assets/images/hero-slide-2.jpg',
      title: 'Excellence et Innovation',
      subtitle: 'Dans tous nos projets'
    },
    {
      id: 3,
      image: '/assets/images/hero-slide-3.jpg',
      title: 'Des infrastructures durables',
      subtitle: 'Pour un avenir meilleur'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title animate-fadeInLeft">
                  {slide.title}
                </h1>
                <div className="hero-divider"></div>
                <p className="hero-subtitle animate-fadeInLeft">
                  {slide.subtitle}
                </p>
                <div className="hero-buttons animate-fadeInUp">
                  <Link to="/services" className="hero-btn hero-btn-primary">
                    Nos Services
                    <FaChevronRight className="btn-icon" />
                  </Link>
                  <Link to="/about" className="hero-btn hero-btn-secondary">
                    En Savoir Plus
                    <FaChevronRight className="btn-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

