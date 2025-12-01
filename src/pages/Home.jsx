import React from 'react';
import Hero from '../components/Hero/Hero';
import ServiceCard from '../components/Services/ServiceCard';
import Counter from '../components/Counter/Counter';
import Certifications from '../components/Certifications/Certifications';
import { FaHardHat, FaRoad, FaTint, FaBuilding } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Construction de Bâtiments',
      description: 'Nous réalisons des bâtiments résidentiels, commerciaux et industriels de haute qualité.',
      link: '/services'
    },
    {
      id: 2,
      icon: <FaRoad />,
      title: 'Travaux Routiers',
      description: 'Construction et réhabilitation de routes, autoroutes et infrastructures routières.',
      link: '/services'
    },
    {
      id: 3,
      icon: <FaRoad />,
      title: 'Ouvrages d\'Art',
      description: 'Ponts, viaducs et autres structures d\'ingénierie complexe.',
      link: '/services'
    },
    {
      id: 4,
      icon: <FaTint />,
      title: 'Hydraulique',
      description: 'Barrages, stations d\'épuration et réseaux d\'assainissement.',
      link: '/services'
    }
  ];

  const stats = [
    { end: 50, suffix: '+', title: 'Années d\'Expérience' },
    { end: 500, suffix: '+', title: 'Projets Réalisés' },
    { end: 1000, suffix: '+', title: 'Employés Qualifiés' },
    { end: 100, suffix: '%', title: 'Satisfaction Client' }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section section" style={{
        background: 'linear-gradient(180deg, #810012 0%, #D10000 100%)',
        padding: '60px 0'
      }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" style={{ color: '#fff' }}>Nos Projets Récents</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
          </div>

          <div className="featured-projects-grid">
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: 'url(/assets/images/project-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                position: 'relative'
              }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3 className="project-title">Autoroute Est-Ouest</h3>
                  <a href="/projects" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: 'url(/assets/images/project-2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                position: 'relative'
              }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3 className="project-title">Complexe Résidentiel</h3>
                  <a href="/projects" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: 'url(/assets/images/project-3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                position: 'relative'
              }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3 className="project-title">Barrage Hydraulique</h3>
                  <a href="/projects" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h3 className="section-subtitle">À Propos de SNTP</h3>
              <h2 className="section-title">Excellence et Engagement</h2>
              <div className="section-divider"></div>
              <p className="about-text">
                La Société Nationale des Travaux Publics (SNTP) est l'un des leaders algériens 
                dans le domaine de la construction et des travaux publics. Avec plus de 50 ans 
                d'expérience, nous avons participé à la réalisation des plus grands projets 
                d'infrastructure du pays.
              </p>
              <p className="about-text">
                Notre expertise couvre tous les domaines de la construction : bâtiments, routes, 
                ouvrages d'art, hydraulique et génie civil. Nous mettons un point d'honneur à 
                respecter les délais, les budgets et les normes de qualité les plus strictes.
              </p>

              <div className="skills-section">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Construction</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%', background: '#810012' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Travaux Routiers</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%', background: '#810012' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Hydraulique</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%', background: '#810012' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Génie Civil</span>
                    <span className="skill-percentage">92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '92%', background: '#000' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/assets/images/about-image.jpg" alt="SNTP Building" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" style={{
        backgroundImage: 'url(/assets/images/stats-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '80px 0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(9, 20, 65, 0.85)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                title={stat.title}
                variant={index % 2 === 0 ? 'dark' : 'red'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA Section */}
      <section className="cta-section section" style={{
        background: 'linear-gradient(180deg, #810012 0%, #f2295b 100%)',
        padding: '80px 0'
      }}>
        <div className="container">
          <div className="cta-content text-center">
            <div className="cta-icon">
              <FaHardHat size={50} color="#fff" />
            </div>
            <h2 className="cta-title" style={{ color: '#fff', marginTop: '1rem' }}>
              Besoin d'un Partenaire de Confiance ?
            </h2>
            <div className="section-divider" style={{ margin: '1rem auto' }}></div>
            <p className="cta-text" style={{ color: '#fff', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Contactez-nous dès aujourd'hui pour discuter de votre projet. 
              Notre équipe d'experts est à votre disposition.
            </p>
            <a href="/about" className="hero-btn hero-btn-secondary">
              Contactez-Nous Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

