import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NosUnites.css';

const NosUnites = () => {
  const unites = [
    {
      id: 1,
      title: 'Engineering',
      subtitle: 'SNTP ENGINEERING',
      description: 'Conception, études techniques et ingénierie de projets d\'infrastructure de grande envergure.',
      link: '/sntp-engineering',
      features: ['Études techniques', 'Conception de projets', 'Bureau d\'études'],
      color: '#dc2626',
      // Remplacez par le chemin de votre image
      image: '/images/engineering-bg.jpg'
    },
    {
      id: 2,
      title: 'Anabib',
      subtitle: 'SNTP ANABIB',
      description: 'Travaux spécialisés, innovation et solutions techniques avancées pour le secteur du BTP.',
      link: '/sntp-anabibe',
      features: ['Travaux spécialisés', 'Innovation', 'Solutions avancées'],
      color: '#1f2937',
      // Remplacez par le chemin de votre image
      image: '/images/anabib-bg.jpg'
    },
    {
      id: 3,
      title: 'Logistique',
      subtitle: 'SNTP LOGISTIQUE',
      description: 'Gestion logistique complète, approvisionnement et coordination de chantiers.',
      link: '/sntp-logistique',
      features: ['Gestion logistique', 'Approvisionnement', 'Coordination'],
      color: '#4b5563',
      // Remplacez par le chemin de votre image
      image: '/images/logistique-bg.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="nos-unites-page">
      {/* Hero Section */}
      <section className="unites-hero">
        <div className="hero-background">
          <div className="hero-gradient-orb orb-1"></div>
          <div className="hero-gradient-orb orb-2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-content-wrapper">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="badge-dot"></div>
              <span>Organisation</span>
            </motion.div>
            <h1>Nos Unités</h1>
            <p>Trois entités spécialisées au service de l'excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section with Images */}
      <section className="unites-cards-overlay-section">
        <div className="wrapper">
          <motion.div
            className="box-area"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {unites.map((unite, index) => (
              <motion.div
                key={unite.id}
                className="box"
                variants={cardVariants}
              >
                <Link to={unite.link} className="box-link">
                  {/* Image de fond */}
                  <img 
                    src={unite.image} 
                    alt={unite.title}
                    className="box-image"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas - utilise un dégradé
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.opacity = '1';
                    }}
                  />
                  
                  {/* Fallback gradient si pas d'image */}
                  <div 
                    className="box-gradient-fallback"
                    style={{
                      background: unite.id === 1 
                        ? 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)'
                        : unite.id === 2 
                        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
                        : 'linear-gradient(135deg, #4b5563 0%, #374151 100%)'
                    }}
                  ></div>

                  {/* Dark overlay pour meilleure lisibilité */}
                  <div className="box-dark-overlay"></div>

                  {/* Number badge */}
                  <div className="box-number">0{index + 1}</div>

                  {/* Icon */}
                  <div className="box-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {unite.id === 1 && (
                        <>
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </>
                      )}
                      {unite.id === 2 && (
                        <>
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </>
                      )}
                      {unite.id === 3 && (
                        <>
                          <circle cx="7" cy="17" r="2" />
                          <circle cx="17" cy="17" r="2" />
                          <path d="M5 17H3v-5l2-2m5 7h4m4 0h2v-7l-2-2-3-3H9l-4 4" />
                          <path d="M9 7h6" />
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Overlay avec contenu */}
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>{unite.title}</h3>
                      <span className="overlay-subtitle">{unite.subtitle}</span>
                      <p>{unite.description}</p>
                      
                      <ul className="overlay-features">
                        {unite.features.map((feature, idx) => (
                          <li key={idx}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="overlay-button">
                        <span>Découvrir</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="unites-stats-modern">
        <div className="container-modern">
          <motion.div
            className="stats-wrapper-modern"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-card-modern">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number-modern">3</div>
                <div className="stat-label-modern">Unités Spécialisées</div>
              </div>
            </div>

            <div className="stat-card-modern">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number-modern">500+</div>
                <div className="stat-label-modern">Collaborateurs Experts</div>
              </div>
            </div>

            <div className="stat-card-modern">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number-modern">100+</div>
                <div className="stat-label-modern">Projets Réalisés</div>
              </div>
            </div>

            <div className="stat-card-modern">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number-modern">20+</div>
                <div className="stat-label-modern">Années d'Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="unites-cta-modern">
        <div className="container-modern">
          <motion.div
            className="cta-box-modern"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="cta-content-modern">
              <h2>Un Projet en Vue ?</h2>
              <p>Nos équipes d'experts sont prêtes à vous accompagner dans la réalisation de vos ambitions</p>
            </div>
            <Link to="/nous-rejoindre" className="cta-button-modern">
              <span>Nous Contacter</span>
              <div className="button-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NosUnites;
