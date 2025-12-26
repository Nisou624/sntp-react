import React, { useEffect } from 'react';
import './SNTPEngineering.css';

const SNTPEngineering = () => {
  // Images - À remplacer par vos chemins réels
  const logoSntp = 'https://via.placeholder.com/200x80/C1121F/ffffff?text=SNTP+ENGINEERING';
  const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80';
  const engineerImage = '/images/engineers-team.jpg';
  const teamImage = 'https://via.placeholder.com/600x400/1B263B/ffffff?text=Team';

  // Icônes placeholder
  const iconConception = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon1';
  const iconRealisation = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon2';
  const iconRoutiere = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon3';
  const iconFerroviaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon4';
  const iconOuvrages = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon5';
  const iconAeroportuaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon6';

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

    const animatedElements = document.querySelectorAll('.SNTPEngineering-fade-in-section');
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
    <div className="SNTPEngineering-page">
      {/* Hero Section */}
      <section 
        className="SNTPEngineering-hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="SNTPEngineering-hero-overlay"></div>
        <div className="SNTPEngineering-hero-content">
          <div className="SNTPEngineering-hero-logo">
            <img src={logoSntp} alt="SNTP Engineering Logo" />
          </div>
          <h1 className="SNTPEngineering-hero-title">SNTP ENGINEERING</h1>
          <p className="SNTPEngineering-hero-subtitle">
            L'Excellence Technique Au Service Des Infrastructures Nationales
          </p>
          <p className="SNTPEngineering-hero-description">
            Pôle d'expertise technique du groupe SNTP, nous conjuguons{' '}
            <span className="highlight-text">innovation</span>,{' '}
            <span className="highlight-text">précision</span> et{' '}
            <span className="highlight-text">normes internationales</span> pour concevoir et superviser
            les projets d'infrastructures les plus complexes.
          </p>
        </div>
      </section>

      {/* Main Title Section */}
      <section className="SNTPEngineering-main-title-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-section-main-title">
            Bureau d'Études Techniques Pluridisciplinaire
          </h2>
          <div className="SNTPEngineering-title-underline"></div>
          <h3 className="SNTPEngineering-section-subtitle">
            Conception – Supervision – Innovation
          </h3>
          <p className="SNTPEngineering-section-intro-text">
            Du bureau d'études au chantier, nous maîtrisons toute la chaîne technique des infrastructures lourdes.
          </p>
        </div>
      </section>

      {/* Domains Section */}
      <section className="SNTPEngineering-domains-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-domains-grid">
            {/* Domain 1 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconConception} alt="Conception" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Conception & Dimensionnement
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Études techniques avant-projet (AVP) et projet d'exécution (PRO)</li>
                <li>Calculs de structures béton armé, charpentes métalliques</li>
                <li>Dimensionnement géotechnique et fondations spéciales</li>
                <li>Modélisation BIM et plans d'exécution tous corps d'état</li>
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconRealisation} alt="Réalisation" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Supervision & Contrôle Technique
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Direction de chantier et coordination OPC</li>
                <li>Contrôle qualité béton, acier, enrobés bitumineux</li>
                <li>Supervision géotechnique et instrumentation</li>
                <li>Réception provisoire et définitive des ouvrages</li>
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconRoutiere} alt="Routière" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Infrastructure Routière
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Tracé routier et dimensionnement de chaussées</li>
                <li>Études hydrauliques et assainissement pluvial</li>
                <li>Signalisation horizontale et verticale</li>
                <li>Auscultation et diagnostics de chaussées</li>
              </ul>
              <div className="SNTPEngineering-domain-innovation">
                <strong>Innovation:</strong> Ponts modulaires préfabriqués (gain de 40% sur les délais)
              </div>
            </div>

            {/* Domain 4 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconFerroviaire} alt="Ferroviaire" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Infrastructure Ferroviaire
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Études de tracé ferroviaire et métro</li>
                <li>Conception de plateformes et superstructures voie</li>
                <li>Ouvrages d'art ferroviaires (viaducs, tunnels)</li>
                <li>Systèmes de signalisation et caténaires</li>
              </ul>
            </div>

            {/* Domain 5 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconOuvrages} alt="Ouvrages" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Ouvrages d'Art
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Ponts, viaducs et passerelles piétonnes</li>
                <li>Calculs de précontrainte et coffrage glissant</li>
                <li>Murs de soutènement et parois moulées</li>
                <li>Réhabilitation d'ouvrages existants</li>
              </ul>
            </div>

            {/* Domain 6 */}
            <div className="SNTPEngineering-domain-card">
              <div className="SNTPEngineering-domain-icon">
                <img src={iconAeroportuaire} alt="Aéroportuaire" />
              </div>
              <h3 className="SNTPEngineering-domain-title">
                Infrastructure Aéroportuaire
              </h3>
              <ul className="SNTPEngineering-domain-list">
                <li>Pistes d'atterrissage et taxiways</li>
                <li>Aires de stationnement aéronefs</li>
                <li>Aérogares et infrastructures annexes</li>
                <li>Systèmes de balisage lumineux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="SNTPEngineering-solutions-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-solutions-title">
            Innovation et précision dans chaque projet, des études à la réalisation.
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="SNTPEngineering-values-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-values-grid">
            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Expertise Locale</h3>
              <p className="SNTPEngineering-value-description">
                Formation et insertion des compétences locales pour un développement durable.
              </p>
            </div>

            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Innovation Durable</h3>
              <p className="SNTPEngineering-value-description">
                Solutions éco-responsables et optimisation des ressources pour des infrastructures pérennes.
              </p>
            </div>

            <div className="SNTPEngineering-value-card">
              <h3 className="SNTPEngineering-value-title">Conformité Totale</h3>
              <p className="SNTPEngineering-value-description">
                Transparence, éthique et respect strict des engagements contractuels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="SNTPEngineering-transform-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <p className="SNTPEngineering-transform-subtitle">Pourquoi Nous Choisir ?</p>
          <h2 className="SNTPEngineering-transform-title">
            Votre Partenaire Technique de Confiance
          </h2>
          <p className="SNTPEngineering-transform-description">
            Chez <strong>SNTP Engineering</strong>, nous ne construisons pas juste des infrastructures
            – nous bâtissons l'avenir. Des <strong>solutions sur mesure</strong>, une
            <strong> expertise incontestable</strong> et un <strong>engagement sans faille</strong> pour
            des résultats qui dépassent vos attentes.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="SNTPEngineering-team-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-team-content">
            <div className="SNTPEngineering-team-text">
              <h2 className="SNTPEngineering-team-title">
                Une Équipe Pluridisciplinaire d'Exception
              </h2>
              <p className="SNTPEngineering-team-description">
                Chez <strong>SNTP Engineering</strong>, notre véritable force réside dans notre
                <strong> équipe d'ingénieurs pluridisciplinaires</strong> – des experts passionnés qui
                allient savoir-faire traditionnel et innovations de pointe.
              </p>
            </div>
            <div className="SNTPEngineering-team-image">
              <img src={teamImage} alt="Équipe SNTP Engineering" />
            </div>
          </div>
        </div>
      </section>

      {/* Engineers Section */}
      <section className="SNTPEngineering-engineers-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <div className="SNTPEngineering-engineers-content">
            <div className="SNTPEngineering-engineers-image">
              <img src={engineerImage} alt="Ingénieurs SNTP" />
            </div>
            <div className="SNTPEngineering-engineers-info">
              <span className="SNTPEngineering-engineers-badge">Excellence Technique</span>
              <p className="SNTPEngineering-engineers-quote">
                "Une équipe d'exception mérite des projets d'exception. Parlons du vôtre."
              </p>
              <p className="SNTPEngineering-engineers-subtitle">Nos Compétences Clés</p>
              <h3 className="SNTPEngineering-engineers-title">
                Ingénierie de Haut Niveau
              </h3>
              <ul className="SNTPEngineering-engineers-list">
                <li>Ingénieurs Génie Civil & Structures</li>
                <li>Ingénieurs Géotechnique & VRD</li>
                <li>Ingénieurs Méthodes & Planification</li>
                <li>Topographes & Spécialistes BIM</li>
                <li>Contrôleurs Qualité & HSE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact-section" 
        className="SNTPEngineering-contact-section SNTPEngineering-fade-in-section"
      >
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-contact-title">Contactez SNTP Engineering</h2>
          
          <div className="SNTPEngineering-contact-layout">
            {/* Google Map */}
            <div className="SNTPEngineering-contact-map-container">
              <iframe
                className="SNTPEngineering-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2836746374243!2d3.0106!3d36.7867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ3JzEyLjEiTiAzwrAwMCczOC4yIkU!5e0!3m2!1sfr!2sdz!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Engineering"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="SNTPEngineering-contact-info-wrapper">
              <div className="SNTPEngineering-contact-grid">
                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">📍 Adresse</h3>
                  <p className="SNTPEngineering-contact-info">
                    Villa 8 Bois des Cars 3, Dely Ibrahim
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">📞 Téléphone</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="tel:+213123456789">+213 (0) 23 XX XX XX</a>
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">✉️ Email</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="mailto:engineering@sntp.dz">engineering@sntp.dz</a>
                  </p>
                </div>
              </div>

              <div className="SNTPEngineering-contact-cta-text">
                <p>
                  <strong>Contactez dès aujourd'hui SNTP ENGINEERING</strong> pour discuter de votre projet
                  et découvrir comment notre expertise en études techniques peut optimiser la conception et
                  la réalisation de vos infrastructures en travaux publics et bâtiment.
                </p>
              </div>

              <button 
                className="SNTPEngineering-cta-button SNTPEngineering-primary-button SNTPEngineering-map-button"
                onClick={handleMapClick}
              >
                <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                Voir sur Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPEngineering;

