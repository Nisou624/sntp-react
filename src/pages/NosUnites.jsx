import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Wrench, Truck, Users, Award, Target, ArrowRight } from 'lucide-react';
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
      image: '/images/logistique-bg.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="NosUnites-page">
      {/* Hero Section */}
      <section className="NosUnites-hero">
        <div className="NosUnites-hero-background">
          <div className="NosUnites-hero-gradient-orb NosUnites-orb-1"></div>
          <div className="NosUnites-hero-gradient-orb NosUnites-orb-2"></div>
          <div className="NosUnites-hero-grid"></div>
        </div>

        <div className="NosUnites-hero-content-wrapper">
          <div className="NosUnites-hero-content">
            <div className="NosUnites-hero-badge">
              <div className="NosUnites-badge-dot"></div>
              <span>Nos Unités</span>
            </div>
            <h1>Nos Entités</h1>
            <p>Trois entités spécialisées au service de l'excellence</p>
          </div>
        </div>
      </section>

      {/* Cards Section - NE TOUCHER QU'AU PRÉFIXAGE */}
      <section className="NosUnites-cards-overlay-section">
        <div className="NosUnites-wrapper">
          <motion.div
            className="NosUnites-box-area"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {unites.map((unite, index) => (
              <motion.div
                key={unite.id}
                className="NosUnites-box"
                variants={cardVariants}
              >
                <Link to={unite.link} className="NosUnites-box-link">
                  {/* Image de fond */}
                  <img
                    src={unite.image}
                    alt={unite.title}
                    className="NosUnites-box-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.opacity = '1';
                    }}
                  />

                  {/* Fallback Gradient */}
                  <div
                    className="NosUnites-box-gradient-fallback"
                    style={{
                      background: `linear-gradient(135deg, ${unite.color} 0%, #0a0a0a 100%)`
                    }}
                  ></div>

                  {/* Dark Overlay */}
                  <div className="NosUnites-box-dark-overlay"></div>

                  {/* Number Badge */}
                  <div className="NosUnites-box-number">{String(index + 1).padStart(2, '0')}</div>

                  {/* Icon */}
                  <div className="NosUnites-box-icon">
                    {index === 0 && <Building2 size={36} />}
                    {index === 1 && <Wrench size={36} />}
                    {index === 2 && <Truck size={36} />}
                  </div>

                  {/* Overlay Content */}
                  <div className="NosUnites-overlay">
                    <div className="NosUnites-overlay-content">
                      <span className="NosUnites-overlay-subtitle">{unite.subtitle}</span>
                      <h3>{unite.title}</h3>
                      <p>{unite.description}</p>

                      <ul className="NosUnites-overlay-features">
                        {unite.features.map((feature, idx) => (
                          <li key={idx}>
                            <Target size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="NosUnites-overlay-button">
                        Découvrir
                        <ArrowRight size={20} />
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
      <section className="NosUnites-stats-modern">
        <div className="NosUnites-container-modern">
          <div className="NosUnites-stats-wrapper-modern">
            <div className="NosUnites-stat-card-modern">
              <div className="NosUnites-stat-icon">
                <Users size={28} />
              </div>
              <div className="NosUnites-stat-content">
                <div className="NosUnites-stat-number-modern">3</div>
                <div className="NosUnites-stat-label-modern">Unités Spécialisées</div>
              </div>
            </div>

            <div className="NosUnites-stat-card-modern">
              <div className="NosUnites-stat-icon">
                <Award size={28} />
              </div>
              <div className="NosUnites-stat-content">
                <div className="NosUnites-stat-number-modern">100%</div>
                <div className="NosUnites-stat-label-modern">Excellence</div>
              </div>
            </div>

            <div className="NosUnites-stat-card-modern">
              <div className="NosUnites-stat-icon">
                <Target size={28} />
              </div>
              <div className="NosUnites-stat-content">
                <div className="NosUnites-stat-number-modern">24/7</div>
                <div className="NosUnites-stat-label-modern">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="NosUnites-cta-modern">
        <div className="NosUnites-container-modern">
          <div className="NosUnites-cta-box-modern">
            <div className="NosUnites-cta-content-modern">
              <h2>Besoin d'expertise ?</h2>
              <p>
                Nos équipes d'experts sont prêtes à vous accompagner dans la réalisation de vos ambitions
              </p>
            </div>
            <Link to="/contact" className="NosUnites-cta-button-modern">
              <span>Contactez-nous</span>
              <div className="NosUnites-button-icon">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosUnites;

