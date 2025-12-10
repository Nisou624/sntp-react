import React, { useEffect, useRef } from 'react';
import './Histoire.css';

const Histoire = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const timelineItems = document.querySelectorAll('.timeline-item');
    const valueCards = document.querySelectorAll('.value-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    timelineItems.forEach(item => observer.observe(item));
    valueCards.forEach(card => observer.observe(card));
    statItems.forEach(stat => observer.observe(stat));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
      valueCards.forEach(card => observer.unobserve(card));
      statItems.forEach(stat => observer.unobserve(stat));
    };
  }, []);

  const timelineData = [
    {
      year: '1970',
      title: 'Fondation de la SNTP',
      description: 'Création de la Société Nationale des Travaux Publics avec pour mission de participer au développement des infrastructures nationales.'
    },
    {
      year: '1980',
      title: 'Expansion Nationale',
      description: 'Extension de nos activités à l\'ensemble du territoire national avec l\'ouverture de nouvelles agences régionales.'
    },
    {
      year: '1990',
      title: 'Diversification',
      description: 'Diversification de nos activités avec l\'intégration de nouvelles compétences : génie civil, ouvrages d\'art, aménagements urbains.'
    },
    {
      year: '2000',
      title: 'Modernisation',
      description: 'Modernisation de nos outils et méthodes de travail. Mise en place de systèmes de gestion qualité et certification ISO.'
    },
    {
      year: '2010',
      title: 'Innovation et Excellence',
      description: 'Lancement de notre département R&D et adoption de solutions innovantes respectueuses de l\'environnement.'
    },
    {
      year: '2020',
      title: 'Transformation Digitale',
      description: 'Digitalisation complète de nos processus avec l\'intégration du BIM et des outils de gestion collaboratifs.'
    },
    {
      year: '2024',
      title: 'Vision d\'Avenir',
      description: 'Aujourd\'hui, la SNTP poursuit son développement avec une vision tournée vers l\'avenir : construction durable et smart cities.'
    }
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chacun de nos projets, en appliquant les meilleurs standards de qualité.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Innovation',
      description: 'L\'innovation est au cœur de notre stratégie. Nous investissons constamment dans les nouvelles technologies.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Engagement',
      description: 'Notre engagement envers nos clients, nos collaborateurs et la société est total.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Intégrité',
      description: 'L\'intégrité guide toutes nos actions. Nous respectons les normes éthiques les plus strictes.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Projets Réalisés' },
    { number: '2000+', label: 'Collaborateurs' },
    { number: '48', label: 'Wilayas Couvertes' }
  ];

  return (
    <div className="histoire-page">
      {/* Hero Section */}
      <section className="histoire-hero">
        <div className="hero-content">
          <p className="hero-label">Notre Histoire</p>
          <h1 className="hero-title">Plus de 50 ans d'excellence</h1>
          <div className="hero-scroll-indicator">
            <span className="scroll-line"></span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="histoire-intro">
        <div className="container-narrow">
          <div className="intro-content">
            <h2 className="section-title">Un Héritage d'Excellence</h2>
            <div className="intro-text-wrapper">
              <p className="intro-text">
                Depuis sa création, la SNTP s'est imposée comme un acteur majeur du secteur de la 
                construction et des travaux publics en Algérie. Notre histoire est celle d'une 
                entreprise qui a su évoluer, innover et s'adapter aux défis de chaque époque.
              </p>
              <p className="intro-text">
                Au fil des décennies, nous avons participé à la construction des infrastructures 
                qui ont façonné le visage moderne de l'Algérie, contribuant ainsi au développement 
                économique et social du pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre Parcours</h2>
            <p className="section-subtitle">Les moments clés qui ont marqué notre développement</p>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">Les principes qui guident notre action</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage-section">
        <div className="container">
          <div className="heritage-content">
            <div className="heritage-text">
              <h2 className="section-title">Un Héritage à Préserver</h2>
              <p className="heritage-paragraph">
                Notre histoire est riche d'enseignements et de réalisations qui font aujourd'hui 
                notre fierté. Chaque projet achevé, chaque infrastructure construite, chaque 
                innovation mise en œuvre contribue à bâtir notre héritage.
              </p>
              <p className="heritage-paragraph">
                Au-delà des réalisations matérielles, c'est avant tout un héritage humain 
                que nous cultivons : celui du savoir-faire, de la transmission des compétences, 
                de la passion du métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-content">
            <h2 className="cta-title">Construire l'Avenir Ensemble</h2>
            <p className="cta-text">
              Découvrez comment notre expérience et notre expertise peuvent donner vie à vos projets
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="cta-btn primary">Nos Projets</a>
              <a href="/contact" className="cta-btn secondary">Nous Contacter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Histoire;
