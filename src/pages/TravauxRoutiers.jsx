import React from 'react';
import { FaRoad, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck } from 'react-icons/fa';
import './TravauxRoutiers.css';

const TravauxRoutiers = () => {
  // Cartes "Notre Expertise Clé" - Section Mission Principale
  const expertiseCards = [
    {
      id: 1,
      icon: <FaRoad />,
      title: "Vos projets, nos solutions",
      description: "Nous proposons une gamme complète de solutions pour vos projets de route."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Chef de projet expérimenté",
      description: "Notre équipe de chefs de projet expérimentés garantit une exécution optimale de vos chantiers, de la planification à la livraison."
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Équipement de pointe",
      description: "Nous utilisons systématiquement l'équipement optimal pour garantir la qualité de nos travaux routiers."
    }
  ];

  // Cartes "Notre Capacité"
  const capaciteCards = [
    {
      id: 1,
      title: "Expertise Technique",
      image: "/wp-content/uploads/2025/07/expertise-technique.jpg",
      alt: "Expertise Technique"
    },
    {
      id: 2,
      title: "Engagement Sociétal",
      image: "/wp-content/uploads/2025/07/engagement-societal.jpg",
      alt: "Engagement Sociétal"
    },
    {
      id: 3,
      title: "Innovation Durable",
      image: "/wp-content/uploads/2025/07/innovation-durable.jpg",
      alt: "Innovation Durable"
    },
    {
      id: 4,
      title: "Gestion De Projet",
      image: "/wp-content/uploads/2025/07/gestion-projet.jpg",
      alt: "Gestion De Projet"
    }
  ];

  return (
    <div className="travaux-routiers-page">
      {/* Hero Section - Contenu exact de la capture */}
      <header className="travaux-hero">
        <div className="travaux-hero-overlay"></div>
        <div className="container travaux-hero-content">
          <p className="travaux-breadcrumb">Constructeur Avec Nous Les Routes De Demain</p>
          <h1 className="travaux-title">Travaux Routiers Et Autoroutiers</h1>
          <p className="travaux-description">
            Concevoir, réaliser et entretenir les infrastructures routières et autoroutières nationales, garantissant sécurité, durabilité et fluidité du trafic, en réponse aux exigences des maîtres d'ouvrage publics.
          </p>
        </div>
      </header>

      {/* Section Mission Principale avec 3 cartes */}
      <section className="mission-principale-section">
        <div className="container">
          <div className="mission-principale-card-white">
            <div className="mission-header-center">
              <div className="mission-icon-center">
                <FaRoad className="mission-icon-main" />
              </div>
              <h4 className="mission-subtitle-center">Notre Expertise Clé</h4>
              <h2 className="mission-title-center">Mission Principale</h2>
              <p className="mission-description-center">
                Concevoir, réaliser et entretenir les <strong>infrastructures routières et autoroutières</strong>, en répondant aux besoins des acteurs publics (wilayas, ministères, OTP, routes, eau), avec une expertise 100% locale.
              </p>
            </div>

            {/* 3 cartes horizontales */}
            <div className="expertise-cards-grid">
              {expertiseCards.map((card) => (
                <div key={card.id} className="expertise-card-item">
                  <div className="expertise-card-icon">
                    {card.icon}
                  </div>
                  <h3 className="expertise-card-title">{card.title}</h3>
                  <p className="expertise-card-description">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Spécialité */}
      <section className="specialite-section section">
        <div className="container">
          <div className="specialite-grid-layout">
            <div className="specialite-image-wrapper">
              <div className="image-container-spec">
                <img 
                  src="/wp-content/uploads/2025/07/construction-workers-road.jpg" 
                  alt="Notre Spécialité Travaux Routiers"
                  className="specialite-img"
                />
              </div>
            </div>
            <div className="specialite-content-box">
              <h4 className="section-subtitle-red">Notre Spécialité</h4>
              <h2 className="section-title-bold">Travaux Routiers Haute Performance</h2>
              <p className="section-description-text">
                Précision dans l'exécution, Durabilité des infrastructures, Innovation permanente : notre trilogie d'expertise pour des travaux routiers d'exception, au service des territoires et des usagers.
              </p>
              <ul className="specialite-features-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Terrassement</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Voie urbain</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Piste Aéro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Désenclaver & Connecter */}
      <section className="desenclaver-section section-gray">
        <div className="container">
          <div className="desenclaver-header-center">
            <h4 className="section-subtitle-red-center">SNTP</h4>
            <h2 className="section-title-center-main">Désenclaver & Connecter</h2>
            <div className="section-divider-center"></div>
          </div>

          <div className="desenclaver-content-grid">
            <div className="desenclaver-image-col">
              <img 
                src="/wp-content/uploads/2025/07/tower-construction.jpg" 
                alt="Construction de route"
                className="desenclaver-main-image"
              />
            </div>

            <div className="desenclaver-text-col">
              <h3 className="desenclaver-subtitle">La construction d'une route : un processus technique et méthodique</h3>
              
              <p className="desenclaver-paragraph">
                Nos équipes débutent par une étude complète du terrain, combinant analyses géotechniques et modélisation 3D pour concevoir des infrastructures optimisées. Le terrassement prépare le sol par nivellement laser et compactage rigoureux. La structure routière s'articule en trois couches : fondation drainante en grave concassée, couche de base résistante en grave-bitume, et revêtement final en enrobés haute performance.
              </p>

              <p className="desenclaver-paragraph">
                Les systèmes de drainage, associés à des protections en géotextile lorsque nécessaire, garantissent une évacuation efficace des eaux. Selon le type de voie, nous appliquons soit un enduit superficiel pour les routes secondaires, soit un enrobé coulé à chaud pour les autoroutes.
              </p>

              <p className="desenclaver-paragraph">
                La sécurisation inclut glissières certifiées, éclairage LED et signalisation haute visibilité. Nos innovations, comme les capteurs IoT intégrés, renforcent la durabilité. Chaque projet allie précision technique et respect environnemental pour des infrastructures performantes et durables.
              </p>

              {/* Barres de progression */}
              <div className="progress-bars-container">
                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Projet terminé</span>
                    <span className="progress-percentage-value">100%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Projet en cours</span>
                    <span className="progress-percentage-value">87%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '87%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Capacité */}
      <section className="capacite-section section-dark">
        <div className="container">
          <div className="capacite-header-left">
            <h4 className="section-subtitle-white">Explorez</h4>
            <h2 className="section-title-white">Notre Capacité</h2>
            <p className="capacite-description-white">
              Notre service combine <strong>précision d'exécution</strong> et <strong>vision durable</strong> pour des infrastructures qui améliorent la mobilité tout en respectant les territoires. La SNTP ne construit pas que des routes : nous créons des liens économiques, écologiques et humains.
            </p>

            <ul className="capacite-features-list">
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Expertise Technique</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Innovation Durable</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Capacité de Projet</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Engagement Sociétal</span>
              </li>
            </ul>
          </div>

          {/* Grille de 4 cartes illustrées */}
          <div className="capacite-cards-grid">
            {capaciteCards.map((card) => (
              <div key={card.id} className="capacite-card-image">
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="capacite-card-img"
                />
                <div className="capacite-card-overlay">
                  <h3 className="capacite-card-title">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="travaux-cta-finale">
        <div className="container">
          <div className="cta-finale-content">
            <p className="cta-finale-pretitle">Société Nationale Des Travaux Publics</p>
            <h2 className="cta-finale-title">Contactez Nos Experts</h2>
            <p className="cta-finale-description">
              <em>Vous pilotez un projet routier ? Échangeons sur vos besoins spécifiques.</em>
            </p>
            <div className="cta-finale-buttons">
              <a href="/contact" className="cta-btn cta-btn-primary">
                <span>CONTACTEZ NOUS</span>
                <svg className="cta-btn-arrow" viewBox="0 0 448 512" width="14" height="14">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
              <a href="/download-pdf" className="cta-btn cta-btn-outline">
                <span>TÉLÉCHARGER LE PDF</span>
                <svg className="cta-btn-download" viewBox="0 0 512 512" width="14" height="14">
                  <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravauxRoutiers;

