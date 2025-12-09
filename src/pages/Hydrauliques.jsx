// src/pages/Hydrauliques.jsx
import React from 'react';
import { FaTint, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck } from 'react-icons/fa';
import './Hydrauliques.css';

const Hydrauliques = () => {
  const expertiseCards = [
    {
      id: 1,
      icon: <FaTint />,
      title: "Adduction & Assainissement",
      description: "Conception et réalisation de réseaux d'eau potable, stations de pompage, canalisations haute pression et systèmes d'assainissement urbain."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Expertise hydraulique",
      description: "Ingénieurs hydrauliciens, hydrogéologues et conducteurs de travaux spécialisés pour piloter vos projets d'infrastructures hydrauliques complexes."
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Matériel spécialisé",
      description: "Trancheuses, foreuses, soudeuses de canalisations, équipements de pompage et laboratoires mobiles pour travaux hydrauliques de précision."
    }
  ];

  const capaciteCards = [
    {
      id: 1,
      title: "Réseaux AEP",
      image: "/wp-content/uploads/2025/07/reseaux-aep.jpg",
      alt: "Réseaux AEP"
    },
    {
      id: 2,
      title: "Assainissement",
      image: "/wp-content/uploads/2025/07/assainissement.jpg",
      alt: "Assainissement"
    },
    {
      id: 3,
      title: "Stations Pompage",
      image: "/wp-content/uploads/2025/07/stations-pompage.jpg",
      alt: "Stations Pompage"
    },
    {
      id: 4,
      title: "Ouvrages Hydrauliques",
      image: "/wp-content/uploads/2025/07/ouvrages-hydrauliques.jpg",
      alt: "Ouvrages Hydrauliques"
    }
  ];

  return (
    <div className="hydrauliques-page">
      <header className="hyd-hero">
        <div className="hyd-hero-overlay"></div>
        <div className="container hyd-hero-content">
          <p className="hyd-breadcrumb">Gérer La Ressource En Eau Pour Les Générations Futures</p>
          <h1 className="hyd-title">Travaux Hydrauliques</h1>
          <p className="hyd-description">
            La SNTP conçoit, réalise et réhabilite les infrastructures hydrauliques nécessaires à l'alimentation en eau potable, à l'assainissement urbain et à la gestion durable de la ressource en eau à l'échelle nationale.
          </p>
        </div>
      </header>

      <section className="mission-principale-section">
        <div className="container">
          <div className="mission-principale-card-white">
            <div className="mission-header-center">
              <div className="mission-icon-center">
                <FaTint className="mission-icon-main" />
              </div>
              <h4 className="mission-subtitle-center">Notre Expertise Clé</h4>
              <h2 className="mission-title-center">Mission Principale</h2>
              <p className="mission-description-center">
                Concevoir, réaliser et entretenir les <strong>infrastructures hydrauliques et réseaux d'eau</strong>, en répondant aux besoins des collectivités locales, wilayas et organismes publics pour garantir l'accès à l'eau potable et un assainissement performant.
              </p>
            </div>

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

      <section className="specialite-section section">
        <div className="container">
          <div className="specialite-grid-layout">
            <div className="specialite-image-wrapper">
              <div className="image-container-spec">
                <img 
                  src="/wp-content/uploads/2025/07/hydraulique-travaux.jpg" 
                  alt="Travaux Hydrauliques"
                  className="specialite-img"
                />
              </div>
            </div>
            <div className="specialite-content-box">
              <h4 className="section-subtitle-red">Notre Spécialité</h4>
              <h2 className="section-title-bold">Infrastructures Hydrauliques Performantes</h2>
              <p className="section-description-text">
                De la conception à la mise en service, nous maîtrisons toutes les phases du cycle de vie d'une infrastructure hydraulique : études hydrogéologiques, dimensionnement des réseaux, pose de canalisations, équipements électromécaniques et mise en exploitation.
              </p>
              <ul className="specialite-features-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Réseaux d'adduction d'eau potable (AEP)</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Stations de pompage & réservoirs</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Assainissement & épuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="desenclaver-section section-gray">
        <div className="container">
          <div className="desenclaver-header-center">
            <h4 className="section-subtitle-red-center">SNTP</h4>
            <h2 className="section-title-center-main">Préserver & Distribuer L'Eau</h2>
            <div className="section-divider-center"></div>
          </div>

          <div className="desenclaver-content-grid">
            <div className="desenclaver-image-col">
              <img 
                src="/wp-content/uploads/2025/07/canalisation-eau.jpg" 
                alt="Pose de canalisations"
                className="desenclaver-main-image"
              />
            </div>

            <div className="desenclaver-text-col">
              <h3 className="desenclaver-subtitle">La réalisation d'un réseau hydraulique : un processus rigoureux et normé</h3>
              
              <p className="desenclaver-paragraph">
                Nos équipes débutent par une étude hydrogéologique complète et une modélisation hydraulique pour dimensionner correctement les réseaux. Les tranchées sont ouverées selon les normes en vigueur, avec blindages si nécessaire. Les canalisations en PEHD, PVC pression ou fonte ductile sont soudées et testées en pression avant remblaiement.
              </p>

              <p className="desenclaver-paragraph">
                Les stations de pompage sont équipées de groupes électropompes redondants, variateurs de vitesse et systèmes de télégestion pour optimiser les consommations énergétiques. Les réservoirs en béton armé ou métalliques sont dimensionnés selon les besoins de pointe et les contraintes topographiques.
              </p>

              <p className="desenclaver-paragraph">
                Les ouvrages d'assainissement (collecteurs, bassins d'orage, stations d'épuration) sont conçus pour traiter les eaux usées et pluviales conformément aux normes environnementales. Chaque projet fait l'objet de contrôles qualité stricts (essais d'étanchéité, analyses bactériologiques, relevés topographiques) pour garantir la pérennité du réseau et la qualité de l'eau distribuée.
              </p>

              <div className="progress-bars-container">
                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Réseaux livrés</span>
                    <span className="progress-percentage-value">100%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Projets en cours</span>
                    <span className="progress-percentage-value">89%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capacite-section section-dark">
        <div className="container">
          <div className="capacite-header-left">
            <h4 className="section-subtitle-white">Explorez</h4>
            <h2 className="section-title-white">Notre Capacité</h2>
            <p className="capacite-description-white">
              Notre service combine <strong>expertise hydraulique</strong> et <strong>savoir-faire terrain</strong> pour des infrastructures qui garantissent l'accès à l'eau potable et un assainissement performant. La SNTP ne pose pas que des canalisations : nous créons des infrastructures vitales pour le développement durable.
            </p>

            <ul className="capacite-features-list">
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Réseaux AEP</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Assainissement</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Stations de Pompage</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Ouvrages Hydrauliques</span>
              </li>
            </ul>
          </div>

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

      <section className="hyd-cta-finale">
        <div className="container">
          <div className="cta-finale-content">
            <p className="cta-finale-pretitle">Société Nationale Des Travaux Publics</p>
            <h2 className="cta-finale-title">Contactez Nos Experts</h2>
            <p className="cta-finale-description">
              <em>Vous pilotez un projet hydraulique ? Discutons de vos besoins en infrastructures d'eau.</em>
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

export default Hydrauliques;

