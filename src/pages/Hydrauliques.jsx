import React from 'react';
import { FaTint, FaTools, FaHardHat, FaCheckCircle, FaCogs, FaUsers, FaLeaf, FaClipboardCheck } from 'react-icons/fa';
import './Hydrauliques.css';

const Hydrauliques = () => {
  // Cartes d'expertise
  const expertiseCards = [
    {
      id: 1,
      icon: <FaTint />,
      title: 'Réseaux d\'Eau Potable',
      description: 'Conception et réalisation de réseaux d\'adduction et de distribution d\'eau potable avec canalisations PEHD, PVC et fonte ductile.'
    },
    {
      id: 2,
      icon: <FaCogs />,
      title: 'Stations de Pompage',
      description: 'Installation complète de stations de pompage équipées de groupes électropompes, variateurs et systèmes de télégestion.'
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: 'Assainissement',
      description: 'Réalisation de réseaux d\'assainissement, collecteurs, bassins d\'orage et stations d\'épuration conformes aux normes environnementales.'
    }
  ];

  // Caractéristiques principales
  const mainFeatures = [
    'Études hydrogéologiques et modélisation hydraulique',
    'Dimensionnement et pose de canalisations sous pression',
    'Équipements électromécaniques et automatisation',
    'Contrôles qualité et essais d\'étanchéité',
    'Mise en service et formation des exploitants',
    'Maintenance préventive et curative'
  ];

  return (
    <div className="Hydrauliques-page">
      {/* Hero Section */}
      <section 
        className="Hydrauliques-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Hydrauliques+SNTP)'
        }}
      >
        <div className="Hydrauliques-hero-overlay"></div>
        <div className="Hydrauliques-hero-content">
          <p className="Hydrauliques-breadcrumb">
            Accueil / Services / Hydrauliques
          </p>
          <h1 className="Hydrauliques-title">
            Hydrauliques
          </h1>
          <p className="Hydrauliques-description">
            Concevoir, réaliser et entretenir les <strong>infrastructures hydrauliques et réseaux d'eau</strong>, 
            en répondant aux besoins des collectivités locales, wilayas et organismes publics pour garantir 
            l'accès à l'eau potable et un assainissement performant.
          </p>
        </div>
      </section>

      {/* Section Principale */}
      <section className="Hydrauliques-main-section">
        <div className="Hydrauliques-content-grid">
          {/* Texte */}
          <div className="Hydrauliques-text-box">
            <p className="Hydrauliques-subtitle">Notre Savoir-Faire</p>
            <h2 className="Hydrauliques-main-title">
              Expertise Hydraulique Complète
            </h2>
            <p className="Hydrauliques-description-text">
              De la conception à la mise en service, nous maîtrisons toutes les phases du cycle de vie 
              d'une infrastructure hydraulique : études hydrogéologiques, dimensionnement des réseaux, 
              pose de canalisations, équipements électromécaniques et mise en exploitation.
            </p>
            <p className="Hydrauliques-description-text">
              Nos équipes débutent par une étude hydrogéologique complète et une modélisation hydraulique 
              pour dimensionner correctement les réseaux. Les tranchées sont ouvertes selon les normes en 
              vigueur, avec blindages si nécessaire. Les canalisations en PEHD, PVC pression ou fonte ductile 
              sont soudées et testées en pression avant remblaiement.
            </p>

            <ul className="Hydrauliques-features-list">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="Hydrauliques-feature-item">
                  <FaCheckCircle className="Hydrauliques-feature-bullet" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="Hydrauliques-image-wrapper">
            <div className="Hydrauliques-image-container">
              <img
                src="https://via.placeholder.com/600x800/415A77/FFFFFF?text=Infrastructure+Hydraulique"
                alt="Infrastructure hydraulique SNTP"
                className="Hydrauliques-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="Hydrauliques-projects-section">
        <div className="Hydrauliques-projects-header">
          <p className="Hydrauliques-projects-subtitle">Nos Services</p>
          <h2 className="Hydrauliques-projects-title">
            Domaines d'Intervention
          </h2>
          <div className="Hydrauliques-projects-divider"></div>
        </div>

        <div className="Hydrauliques-projects-grid">
          {expertiseCards.map((card) => (
            <div key={card.id} className="Hydrauliques-project-card">
              <div className="Hydrauliques-project-icon">
                {card.icon}
              </div>
              <h3 className="Hydrauliques-project-card-title">{card.title}</h3>
              <p className="Hydrauliques-project-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className="Hydrauliques-cta-section">
        <div className="Hydrauliques-cta-content">
          <h2 className="Hydrauliques-cta-title">
            Un Projet Hydraulique ?
          </h2>
          <p className="Hydrauliques-cta-description">
            Vous pilotez un projet hydraulique ? Discutons de vos besoins en infrastructures d'eau.
          </p>
          <a href="/contact" className="Hydrauliques-cta-btn">
            <FaTools />
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hydrauliques;
