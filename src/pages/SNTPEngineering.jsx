import React, { useEffect } from 'react';
import './SNTPEngineering.css';

const SNTPEngineering = () => {
  // Images - Utilisez vos chemins réels
  const logoSntp = 'https://via.placeholder.com/200x80/B72222/ffffff?text=SNTP+ENGINEERING';
  const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80'; // Placeholder pour background infrastructure
  const engineerImage = '../../public/wp-content/uploads/2025/07/1Couleur1.png';
  const teamImage = 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Team';
  
  // URLs temporaires pour les icônes
  const iconConception = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon1';
  const iconRealisation = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon2';
  const iconRoutiere = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon3';
  const iconFerroviaire = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon4';
  const iconOuvrages = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon5';
  const iconAeroportuaire = 'https://via.placeholder.com/70x70/B72222/ffffff?text=Icon6';

  useEffect(() => {
    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/dhqcMh8Gc3VEP9FM7', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="sntp-engineering-page">
      {/* Hero Section - Réduite et similaire à l'image */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <p className="hero-tagline">
              L'Excellence Technique Au Service Des Infrastructures Nationales
            </p>
            <div className="hero-logo">
              <img src={logoSntp} alt="SNTP Engineering" />
            </div>
            <h1 className="hero-title">SNTP ENGINEERING</h1>
            <div className="hero-underline"></div>
          </div>
          <div className="hero-description-box">
            <p className="hero-description">
              Pôle d'expertise technique du groupe SNTP, nous conjuguons{' '}
              <strong>innovation</strong>, <strong>précision</strong> et{' '}
              <strong>normes internationales</strong> pour concevoir et superviser 
              les projets d'infrastructures les plus complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Title Section */}
      <section className="main-title-section fade-in-section">
        <div className="container">
          <h2 className="section-main-title">SNTP ENGINEERING</h2>
          <h3 className="section-subtitle">Nos Domaines D'intervention</h3>
          <div className="title-underline"></div>
          <p className="section-intro-text">
            Du bureau d'études au chantier, nous maîtrisons toute la chaîne 
            technique des infrastructures lourdes.
          </p>
        </div>
      </section>

      {/* Domains Section */}
      <section className="domains-section fade-in-section">
        <div className="container">
          <div className="domains-grid">
            {/* Ingénierie de Conception */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconConception} alt="Ingénierie de Conception" />
              </div>
              <h4 className="domain-title">Ingénierie de Conception</h4>
              <ul className="domain-list">
                <li>Études techniques détaillées (avant-projets sommaires et détaillés)</li>
                <li>Modélisation BIM et simulations numériques</li>
                <li>Optimisation des coûts grâce à l'éco-conception</li>
              </ul>
            </div>

            {/* Ingénierie de Réalisation */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconRealisation} alt="Ingénierie de Réalisation" />
              </div>
              <h4 className="domain-title">Ingénierie de Réalisation</h4>
              <ul className="domain-list">
                <li>Assistance technique aux chantiers</li>
                <li>Résolution des problèmes in situ (géotechnique, structures)</li>
                <li>Supervision des essais et contrôles qualité</li>
              </ul>
            </div>

            {/* Ingénierie Routière & Autoroutière */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconRoutiere} alt="Ingénierie Routière" />
              </div>
              <h4 className="domain-title">Ingénierie Routière & Autoroutière</h4>
              <ul className="domain-list">
                <li>Conception de tracés optimisés (logiciels Civil 3D, ISTRAM)</li>
                <li>Études de trafic (modélisation VISSIM/PTV)</li>
                <li>Correction du rayon de courbure sur l'A3 → réduction des accidents de 30%</li>
              </ul>
            </div>

            {/* Ingénierie Ferroviaire */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconFerroviaire} alt="Ingénierie Ferroviaire" />
              </div>
              <h4 className="domain-title">Ingénierie Ferroviaire</h4>
              <ul className="domain-list">
                <li>Calculs de plateformes (méthode Talbot)</li>
                <li>Systèmes de drainage innovants (géocomposites)</li>
              </ul>
            </div>

            {/* Ouvrages D'Art */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconOuvrages} alt="Ouvrages D'Art" />
              </div>
              <h4 className="domain-title">Ouvrages D'Art</h4>
              <ul className="domain-list">
                <li>Calculs structurels avancés (logiciels ROBOT, ETABS)</li>
                <li>Solutions antisismiques (amortisseurs à masse accordée)</li>
              </ul>
              <p className="domain-innovation">
                <strong>Innovation:</strong> Ponts modulaires préfabriqués (gain de 40% sur les délais)
              </p>
            </div>

            {/* Expertise Aéroportuaire */}
            <div className="domain-card">
              <div className="domain-icon">
                <img src={iconAeroportuaire} alt="Expertise Aéroportuaire" />
              </div>
              <h4 className="domain-title">Expertise Aéroportuaire</h4>
              <ul className="domain-list">
                <li>Conception de dalles en béton haute résistance (normes ICAO/FAA)</li>
                <li>Contrôle de planérité laser (±3mm) et drainage intelligent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section fade-in-section">
        <div className="container">
          <h3 className="solutions-title">
            Des Solutions Techniques Qui Transforment Durablement Les Territoires
          </h3>
          <button className="cta-button primary-button" onClick={handleContactClick}>
            Découvrir Plus →
          </button>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section fade-in-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <h4 className="value-title">Excellence Technique</h4>
              <p className="value-description">
                Innovation et précision dans chaque projet, des études à la réalisation.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">Engagement Social</h4>
              <p className="value-description">
                Formation et insertion des compétences locales pour un développement durable.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">Durabilité</h4>
              <p className="value-description">
                Solutions éco-responsables et optimisation des ressources pour des infrastructures pérennes.
              </p>
            </div>

            <div className="value-card">
              <h4 className="value-title">Intégrité</h4>
              <p className="value-description">
                Transparence, éthique et respect strict des engagements contractuels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Projects Section */}
      <section className="transform-section fade-in-section">
        <div className="container">
          <h2 className="transform-subtitle">SNTP ENGINEERING</h2>
          <h3 className="transform-title">Transformer Vos Projets En Réalité</h3>
          <p className="transform-description">
            Chez <strong>SNTP Engineering</strong>, nous ne construisons pas juste des infrastructures 
            – nous bâtissons l'avenir. Des <strong>solutions sur mesure</strong>, une 
            <strong> expertise incontestable</strong> et un <strong>engagement sans faille</strong> pour 
            des résultats qui dépassent vos attentes.
          </p>
          <button className="cta-button secondary-button" onClick={handleContactClick}>
            Demandez Nous →
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section fade-in-section">
        <div className="container">
          <div className="team-content">
            <div className="team-text">
              <h3 className="team-title">L'Élite Technique Au Service De Vos Projets</h3>
              <p className="team-description">
                Chez <strong>SNTP Engineering</strong>, notre véritable force réside dans notre 
                <strong> équipe d'ingénieurs pluridisciplinaires</strong> – des experts passionnés qui 
                allient savoir-faire traditionnel et innovations de pointe.
              </p>
            </div>
            <div className="team-image">
              <img src={teamImage} alt="Équipe d'ingénieurs SNTP" />
            </div>
          </div>
        </div>
      </section>

      {/* Engineers Section */}
      <section className="engineers-section fade-in-section">
        <div className="container">
          <div className="engineers-content">
            <div className="engineers-image">
              <img src={engineerImage} alt="Ingénieur au travail" />
            </div>
            <div className="engineers-info">
              <h2 className="engineers-badge">SNTP ENGINEERING</h2>
              <p className="engineers-quote">
                Une équipe d'exception mérite des projets d'exception. Parlons du vôtre.
              </p>
              <h4 className="engineers-subtitle">Opportunities For All</h4>
              <h3 className="engineers-title">Qui Sont Nos Ingénieurs ?</h3>
              <ul className="engineers-list">
                <li>+30 ans carrière</li>
                <li>Ingénieurs seniors</li>
                <li>Experts</li>
              </ul>
              <button className="cta-button primary-button" onClick={handleContactClick}>
                Demandez Nos Équipes →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section avec Carte Google Maps */}
      <section id="contact-section" className="contact-section fade-in-section">
        <div className="container">
          <h2 className="contact-title">Retrouvez-nous</h2>
          
          <div className="contact-layout">
            {/* Google Map */}
            <div className="contact-map-container">
              <iframe 
                src="https://maps.google.com/maps?q=bureau%20d%27%C3%A9tude%20sntp&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" 
                title="bureau d'étude sntp" 
                aria-label="bureau d'étude sntp"
                className="google-map"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <div className="contact-grid">
                <div className="contact-item">
                  <h4 className="contact-label">L'adresse :</h4>
                  <p className="contact-info">
                    Villa 8 Bois des Cars 3, Dely Ibrahim
                  </p>
                </div>
                
                <div className="contact-item">
                  <h4 className="contact-label">Numéro de téléphone :</h4>
                  <p className="contact-info">
                    <a href="tel:0239575585">023 95 75 85</a>
                  </p>
                </div>
              </div>

              <button 
                className="cta-button primary-button map-button" 
                onClick={handleMapClick}
                aria-label="Ouvrir dans Google Maps"
              >
                <svg 
                  aria-hidden="true" 
                  className="button-icon" 
                  viewBox="0 0 384 512" 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" 
                  height="16"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
                Localisation
              </button>

              <p className="contact-cta-text">
                Contactez dès aujourd'hui <strong>SNTP ENGINEERING</strong> pour discuter de votre projet 
                et découvrir comment notre expertise en études techniques peut optimiser la conception et 
                la réalisation de vos infrastructures en travaux publics et bâtiment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPEngineering;

