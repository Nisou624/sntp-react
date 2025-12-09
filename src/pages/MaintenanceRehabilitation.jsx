// src/pages/MaintenanceRehabilitation.jsx
import React from 'react';
import { FaWrench, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck } from 'react-icons/fa';
import './MaintenanceRehabilitation.css';

const MaintenanceRehabilitation = () => {
  const expertiseCards = [
    {
      id: 1,
      icon: <FaWrench />,
      title: "Diagnostic & Expertise",
      description: "Audits structurels, auscultation des chaussées, relevés topographiques et analyses pathologiques pour définir les programmes de réhabilitation adaptés."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Équipes spécialisées",
      description: "Ingénieurs diagnostiqueurs, conducteurs de travaux maintenance et équipes d'intervention rapide pour assurer l'entretien préventif et curatif de vos infrastructures."
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Matériel d'intervention",
      description: "Raboteuses, finisseurs, répandeuses d'enrobés, compacteurs et camions citernes pour interventions d'urgence et chantiers de réhabilitation lourde."
    }
  ];

  const capaciteCards = [
    {
      id: 1,
      title: "Réhabilitation Routes",
      image: "/wp-content/uploads/2025/07/rehabilitation-routes.jpg",
      alt: "Réhabilitation Routes"
    },
    {
      id: 2,
      title: "Réparation Ouvrages",
      image: "/wp-content/uploads/2025/07/reparation-ouvrages.jpg",
      alt: "Réparation Ouvrages"
    },
    {
      id: 3,
      title: "Entretien Préventif",
      image: "/wp-content/uploads/2025/07/entretien-preventif.jpg",
      alt: "Entretien Préventif"
    },
    {
      id: 4,
      title: "Renouvellement Voies",
      image: "/wp-content/uploads/2025/07/renouvellement-voies.jpg",
      alt: "Renouvellement Voies"
    }
  ];

  return (
    <div className="maintenance-rehabilitation-page">
      <header className="mr-hero">
        <div className="mr-hero-overlay"></div>
        <div className="container mr-hero-content">
          <p className="mr-breadcrumb">Prolonger La Durée De Vie De Vos Infrastructures</p>
          <h1 className="mr-title">Maintenance & Réhabilitation</h1>
          <p className="mr-description">
            La SNTP assure la maintenance préventive, l'entretien curatif et la réhabilitation lourde des infrastructures routières, ferroviaires, hydrauliques et ouvrages d'art pour garantir leur pérennité et leur niveau de service optimal.
          </p>
        </div>
      </header>

      <section className="mission-principale-section">
        <div className="container">
          <div className="mission-principale-card-white">
            <div className="mission-header-center">
              <div className="mission-icon-center">
                <FaWrench className="mission-icon-main" />
              </div>
              <h4 className="mission-subtitle-center">Notre Expertise Clé</h4>
              <h2 className="mission-title-center">Mission Principale</h2>
              <p className="mission-description-center">
                Diagnostiquer, entretenir et réhabiliter les <strong>infrastructures de transport et équipements publics</strong>, en répondant aux exigences des gestionnaires de patrimoine pour maximiser la durée de vie et optimiser les coûts d'exploitation.
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
                  src="/wp-content/uploads/2025/07/maintenance-travaux.jpg" 
                  alt="Maintenance & Réhabilitation"
                  className="specialite-img"
                />
              </div>
            </div>
            <div className="specialite-content-box">
              <h4 className="section-subtitle-red">Notre Spécialité</h4>
              <h2 className="section-title-bold">Entretien & Réhabilitation Sur-Mesure</h2>
              <p className="section-description-text">
                Du diagnostic structurel à la réhabilitation lourde, nous maîtrisons toutes les techniques d'entretien et de renforcement : rabotage-reprofilage, renforcement de chaussées, réparation d'ouvrages d'art, renouvellement de voies ferrées et réhabilitation de réseaux hydrauliques.
              </p>
              <ul className="specialite-features-list">
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Réhabilitation de chaussées & autoroutes</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Réparation & renforcement d'ouvrages d'art</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-bullet">●</span>
                  <span>Renouvellement de voies & réseaux</span>
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
            <h2 className="section-title-center-main">Rénover, Renforcer, Pérenniser</h2>
            <div className="section-divider-center"></div>
          </div>

          <div className="desenclaver-content-grid">
            <div className="desenclaver-image-col">
              <img 
                src="/wp-content/uploads/2025/07/chantier-rehabilitation.jpg" 
                alt="Chantier de réhabilitation"
                className="desenclaver-main-image"
              />
            </div>

            <div className="desenclaver-text-col">
              <h3 className="desenclaver-subtitle">La réhabilitation d'une infrastructure : un processus technique et économique</h3>
              
              <p className="desenclaver-paragraph">
                Nos équipes débutent par un diagnostic approfondi : auscultation des chaussées (déflexion, uni longitudinal), inspection détaillée des ouvrages d'art (relevés de fissures, essais de carbonatation, essais non destructifs), contrôles géométriques des voies ferrées. Ces données alimentent une base de gestion patrimoniale permettant de prioriser les interventions.
              </p>

              <p className="desenclaver-paragraph">
                Les techniques de réhabilitation sont choisies selon l'état de dégradation : pour les chaussées, rabotage-reprofilage, renforcement par couche d'enrobés ou recyclage in situ. Pour les ouvrages d'art, réparation de béton dégradé, renforcement par fibres de carbone, remplacement d'appareils d'appui ou injection de fissures. Pour les voies ferrées, renouvellement complet de la voie ou bourrage mécanique et dressage.
              </p>

              <p className="desenclaver-paragraph">
                Les chantiers de réhabilitation sont réalisés en maintenant le trafic chaque fois que possible, grâce à des techniques d'intervention rapide et des phasages optimisés. Chaque projet fait l'objet de contrôles qualité rigoureux et de suivi des performances post-travaux pour garantir l'atteinte des objectifs de durabilité et le respect du cahier des charges.
              </p>

              <div className="progress-bars-container">
                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Chantiers réalisés</span>
                    <span className="progress-percentage-value">100%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="progress-single-item">
                  <div className="progress-header-flex">
                    <span className="progress-label-text">Projets en cours</span>
                    <span className="progress-percentage-value">91%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-filled" style={{width: '91%'}}></div>
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
              Notre service combine <strong>expertise diagnostique</strong> et <strong>savoir-faire d'intervention</strong> pour des opérations de maintenance et réhabilitation qui prolongent la durée de vie de vos infrastructures. La SNTP ne répare pas que des routes : nous préservons le patrimoine public et optimisons les investissements.
            </p>

            <ul className="capacite-features-list">
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Diagnostic Structurel</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Entretien Préventif</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Réhabilitation Lourde</span>
              </li>
              <li className="capacite-feature-item">
                <FaCheckCircle className="capacite-check-icon" />
                <span>Gestion Patrimoniale</span>
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

      <section className="mr-cta-finale">
        <div className="container">
          <div className="cta-finale-content">
            <p className="cta-finale-pretitle">Société Nationale Des Travaux Publics</p>
            <h2 className="cta-finale-title">Contactez Nos Experts</h2>
            <p className="cta-finale-description">
              <em>Vous gérez un patrimoine d'infrastructures à entretenir ou réhabiliter ? Discutons de vos besoins.</em>
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

export default MaintenanceRehabilitation;

