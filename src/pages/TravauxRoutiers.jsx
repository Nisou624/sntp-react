import React from 'react';
import { FaRoad, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck, FaArrowRight, FaDownload } from 'react-icons/fa';
import './TravauxRoutiers.css';

const TravauxRoutiers = () => {
  // Cartes "Notre Expertise Clé" - Section Mission Principale
  const expertiseCards = [
    {
      id: 1,
      icon: <FaRoad />,
      title: 'Routes & Autoroutes',
      description: 'Construction et réhabilitation de routes nationales, autoroutes et voies rapides selon les normes internationales.'
    },
    {
      id: 2,
      icon: <FaTools />,
      title: 'Terrassement & VRD',
      description: 'Travaux de terrassement, nivellement et réseaux divers pour infrastructures routières modernes.'
    },
    {
      id: 3,
      icon: <FaHardHat />,
      title: 'Ouvrages d\'Art',
      description: 'Conception et réalisation de ponts, viaducs, tunnels et ouvrages hydrauliques complexes.'
    }
  ];

  // Caractéristiques de spécialité
  const specialiteFeatures = [
    'Études géotechniques et topographiques',
    'Terrassement et compactage haute précision',
    'Pose de revêtements bitumineux performants',
    'Installation de systèmes de drainage optimisés',
    'Signalisation et équipements de sécurité',
    'Suivi qualité et contrôle technique rigoureux'
  ];

  // Barres de progression
  const progressData = [
    { label: 'Qualité & Normes', percentage: 98 },
    { label: 'Respect des Délais', percentage: 95 },
    { label: 'Satisfaction Client', percentage: 97 },
    { label: 'Innovation Technique', percentage: 92 }
  ];

  // Capacités features
  const capaciteFeatures = [
    'Équipements de pointe dernière génération',
    'Personnel qualifié et certifié',
    'Respect strict des normes environnementales',
    'Technologies de construction innovantes',
    'Contrôle qualité à chaque étape',
    'Maintenance et suivi post-livraison'
  ];

  // Cartes de capacité
  const capaciteCards = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600x400/0D1B2A/FFFFFF?text=Autoroute',
      title: 'Autoroutes Modernes'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600x400/0D1B2A/FFFFFF?text=Routes+Nationales',
      title: 'Routes Nationales'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600x400/0D1B2A/FFFFFF?text=Voies+Urbaines',
      title: 'Voies Urbaines'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/600x400/0D1B2A/FFFFFF?text=Ouvrages+Art',
      title: 'Ouvrages d\'Art'
    }
  ];

  return (
    <div className="TravauxRoutiers-page">
      {/* Hero Section */}
      <section 
        className="TravauxRoutiers-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Travaux+Routiers+SNTP)'
        }}
      >
        <div className="TravauxRoutiers-hero-overlay"></div>
        <div className="TravauxRoutiers-container">
          <div className="TravauxRoutiers-hero-content">
            <p className="TravauxRoutiers-breadcrumb">Accueil / Services / Travaux Routiers</p>
            <h1 className="TravauxRoutiers-title">Travaux Routiers & Autoroutiers</h1>
            <p className="TravauxRoutiers-description">
              Leader en construction d'infrastructures routières en Algérie, la SNTP déploie son expertise 
              pour connecter les territoires et faciliter la mobilité à travers tout le pays.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Principale */}
      <section className="TravauxRoutiers-mission-section">
        <div className="TravauxRoutiers-container">
          <div className="TravauxRoutiers-mission-card">
            <div className="TravauxRoutiers-mission-header">
              <div className="TravauxRoutiers-mission-icon">
                <FaRoad />
              </div>
              <p className="TravauxRoutiers-mission-subtitle">Notre Mission</p>
              <h2 className="TravauxRoutiers-mission-title">
                Concevoir l'Infrastructure de Demain
              </h2>
              <p className="TravauxRoutiers-mission-description">
                Concevoir, réaliser et entretenir les <strong>infrastructures routières et autoroutières</strong>, 
                en répondant aux besoins des acteurs publics (wilayas, ministères, OTP, routes, eau), avec une 
                expertise 100% locale.
              </p>
            </div>

            {/* Cartes d'expertise */}
            <div className="TravauxRoutiers-expertise-grid">
              {expertiseCards.map((card) => (
                <div key={card.id} className="TravauxRoutiers-expertise-card">
                  <div className="TravauxRoutiers-expertise-icon">
                    {card.icon}
                  </div>
                  <h3 className="TravauxRoutiers-expertise-title">{card.title}</h3>
                  <p className="TravauxRoutiers-expertise-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spécialité Section */}
      <section className="TravauxRoutiers-specialite-section">
        <div className="TravauxRoutiers-container">
          <div className="TravauxRoutiers-specialite-grid">
            {/* Image */}
            <div className="TravauxRoutiers-specialite-image-wrapper">
              <div className="TravauxRoutiers-image-container">
                <img
                  src="https://via.placeholder.com/600x800/415A77/FFFFFF?text=Expertise+Routiere"
                  alt="Expertise routière SNTP"
                  className="TravauxRoutiers-specialite-img"
                />
              </div>
            </div>

            {/* Contenu */}
            <div className="TravauxRoutiers-specialite-content">
              <p className="TravauxRoutiers-section-subtitle">Notre Savoir-Faire</p>
              <h2 className="TravauxRoutiers-section-title">
                Une Expertise Technique Reconnue
              </h2>
              <p className="TravauxRoutiers-section-description">
                Précision dans l'exécution, Durabilité des infrastructures, Innovation permanente : 
                notre trilogie d'expertise pour des travaux routiers d'exception, au service des 
                territoires et des usagers.
              </p>

              <ul className="TravauxRoutiers-features-list">
                {specialiteFeatures.map((feature, index) => (
                  <li key={index} className="TravauxRoutiers-feature-item">
                    <FaCheckCircle className="TravauxRoutiers-feature-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Désenclaver Section */}
      <section className="TravauxRoutiers-desenclaver-section">
        <div className="TravauxRoutiers-container">
          {/* Header */}
          <div className="TravauxRoutiers-desenclaver-header">
            <p className="TravauxRoutiers-desenclaver-subtitle">Méthodologie</p>
            <h2 className="TravauxRoutiers-desenclaver-title">
              Notre Processus de Construction
            </h2>
            <div className="TravauxRoutiers-section-divider"></div>
          </div>

          {/* Contenu Grid */}
          <div className="TravauxRoutiers-desenclaver-grid">
            {/* Image sticky */}
            <div className="TravauxRoutiers-desenclaver-image-col">
              <img
                src="https://via.placeholder.com/400x600/778DA9/FFFFFF?text=Processus+Construction"
                alt="Processus de construction routière"
                className="TravauxRoutiers-desenclaver-img"
              />
            </div>

            {/* Texte */}
            <div className="TravauxRoutiers-desenclaver-text-col">
              <h3 className="TravauxRoutiers-desenclaver-text-title">
                De l'Étude à la Livraison : Une Approche Méthodique
              </h3>

              <p className="TravauxRoutiers-desenclaver-paragraph">
                Nos équipes débutent par une étude complète du terrain, combinant analyses géotechniques 
                et modélisation 3D pour concevoir des infrastructures optimisées. Le terrassement prépare 
                le sol par nivellement laser et compactage rigoureux.
              </p>

              <p className="TravauxRoutiers-desenclaver-paragraph">
                La structure routière s'articule en trois couches : fondation drainante en grave concassée, 
                couche de base résistante en grave-bitume, et revêtement final en enrobés haute performance.
              </p>

              <p className="TravauxRoutiers-desenclaver-paragraph">
                Les systèmes de drainage, associés à des protections en géotextile lorsque nécessaire, 
                garantissent une évacuation efficace des eaux. Selon le type de voie, nous appliquons soit 
                un enduit superficiel pour les routes secondaires, soit un enrobé coulé à chaud pour les autoroutes.
              </p>

              <p className="TravauxRoutiers-desenclaver-paragraph">
                La sécurisation inclut glissières certifiées, éclairage LED et signalisation haute visibilité. 
                Nos innovations, comme les capteurs IoT intégrés, renforcent la durabilité. Chaque projet allie 
                précision technique et respect environnemental pour des infrastructures performantes et durables.
              </p>

              {/* Barres de progression */}
              <div className="TravauxRoutiers-progress-container">
                {progressData.map((item, index) => (
                  <div key={index} className="TravauxRoutiers-progress-item">
                    <div className="TravauxRoutiers-progress-header">
                      <span className="TravauxRoutiers-progress-label">{item.label}</span>
                      <span className="TravauxRoutiers-progress-percentage">{item.percentage}%</span>
                    </div>
                    <div className="TravauxRoutiers-progress-bar-bg">
                      <div 
                        className="TravauxRoutiers-progress-bar-fill"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacité Section */}
      <section className="TravauxRoutiers-capacite-section">
        <div className="TravauxRoutiers-container">
          {/* Header */}
          <div className="TravauxRoutiers-capacite-header">
            <p className="TravauxRoutiers-capacite-subtitle">Nos Moyens</p>
            <h2 className="TravauxRoutiers-capacite-title">
              Capacité de Réalisation Exceptionnelle
            </h2>
            <p className="TravauxRoutiers-capacite-description">
              Notre service combine <strong>précision d'exécution</strong> et <strong>vision durable</strong> pour 
              des infrastructures qui améliorent la mobilité tout en respectant les territoires. La SNTP ne construit 
              pas que des routes : nous créons des liens économiques, écologiques et humains.
            </p>

            <ul className="TravauxRoutiers-capacite-features-list">
              {capaciteFeatures.map((feature, index) => (
                <li key={index} className="TravauxRoutiers-capacite-feature-item">
                  <FaCheckCircle className="TravauxRoutiers-capacite-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cartes de capacité */}
          <div className="TravauxRoutiers-capacite-cards-grid">
            {capaciteCards.map((card) => (
              <div key={card.id} className="TravauxRoutiers-capacite-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="TravauxRoutiers-capacite-card-img"
                />
                <div className="TravauxRoutiers-capacite-overlay">
                  <h3 className="TravauxRoutiers-capacite-card-title">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="TravauxRoutiers-cta-finale">
        <div className="TravauxRoutiers-container">
          <div className="TravauxRoutiers-cta-content">
            <p className="TravauxRoutiers-cta-pretitle">Société Nationale Des Travaux Publics</p>
            <h2 className="TravauxRoutiers-cta-title">Votre Projet Routier Mérite Notre Expertise</h2>
            <p className="TravauxRoutiers-cta-description">
              Vous pilotez un projet routier ? Échangeons sur vos besoins spécifiques et découvrez 
              comment nos solutions peuvent transformer votre infrastructure.
            </p>

            <div className="TravauxRoutiers-cta-buttons">
              <a href="/contact" className="TravauxRoutiers-cta-btn TravauxRoutiers-cta-btn-primary">
                Demander un Devis
                <FaArrowRight />
              </a>
              <a href="/brochure-routier.pdf" className="TravauxRoutiers-cta-btn TravauxRoutiers-cta-btn-outline">
                Télécharger Notre Brochure
                <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravauxRoutiers;

