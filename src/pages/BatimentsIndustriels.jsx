import React from 'react';
import { FaIndustry, FaHardHat, FaCogs, FaCheckCircle, FaBuilding, FaWarehouse } from 'react-icons/fa';
import './BatimentsIndustriels.css';

const BatimentsIndustriels = () => {
  // Introduction cards
  const introCards = [
    {
      id: 1,
      icon: <FaIndustry />,
      title: 'Expertise Complète',
      text: 'Conception, construction et livraison clés en main de bâtiments industriels adaptés à vos besoins spécifiques.'
    },
    {
      id: 2,
      icon: <FaHardHat />,
      title: 'Normes Internationales',
      text: 'Respect rigoureux des standards de qualité, sécurité et performance pour des infrastructures durables.'
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: 'Solutions Sur Mesure',
      text: 'Adaptation à tous secteurs : agroalimentaire, chimie, logistique, production manufacturière et plus encore.'
    }
  ];

  // Projets phares
  const projects = [
    {
      id: 1,
      title: 'Usine de Tuyaux en Béton',
      location: 'Fornaka, Mostaganem',
      description: 'Construction d\'une usine moderne de production de tuyaux en béton comprimé sur 12 hectares, équipée de technologies de pointe pour la fabrication de tuyaux géants à l\'échelle nationale.',
      specs: [
        { label: 'Surface', value: '12 hectares' },
        { label: 'Capacité', value: 'Production industrielle' },
        { label: 'Technologie', value: 'Haute performance' }
      ]
    },
    {
      id: 2,
      title: 'Complexe Industriel',
      location: 'Zone Industrielle',
      description: 'Réalisation d\'un complexe multi-usage intégrant ateliers de production, zones de stockage, bureaux administratifs et infrastructures techniques complètes.',
      specs: [
        { label: 'Type', value: 'Multi-usage' },
        { label: 'Zones', value: 'Production + Stockage + Admin' },
        { label: 'Livraison', value: 'Clés en main' }
      ]
    }
  ];

  // Types de bâtiments
  const buildingTypes = [
    {
      id: 1,
      title: 'Usines & Unités de Production',
      text: 'Halls industriels équipés pour processus de fabrication, avec systèmes de ventilation, électrification industrielle et sols techniques résistants.'
    },
    {
      id: 2,
      title: 'Entrepôts & Plateformes Logistiques',
      text: 'Espaces de stockage optimisés avec quais de chargement, systèmes de manutention et zones de préparation de commandes.'
    },
    {
      id: 3,
      title: 'Ateliers & Zones Techniques',
      text: 'Espaces techniques spécialisés pour maintenance, assemblage et réparation avec installations adaptées aux équipements lourds.'
    }
  ];

  // Expertise technique
  const expertise = [
    {
      id: 1,
      number: '01',
      title: 'Structure & Charpente',
      text: 'Structures métalliques ou béton armé calculées selon normes parasismiques, avec portées optimisées pour maximiser l\'espace utile.'
    },
    {
      id: 2,
      number: '02',
      title: 'Couverture & Étanchéité',
      text: 'Toitures industrielles performantes avec isolation thermique renforcée, évacuation des eaux pluviales et lanterneaux pour éclairage naturel.'
    },
    {
      id: 3,
      number: '03',
      title: 'Réseaux & Fluides',
      text: 'Installation complète des réseaux électriques haute et basse tension, fluides industriels, ventilation, climatisation et systèmes de sécurité incendie.'
    }
  ];

  // Avantages
  const advantages = [
    {
      id: 1,
      title: 'Conception Optimisée',
      text: 'Études techniques approfondies pour des bâtiments parfaitement adaptés à vos process industriels et contraintes d\'exploitation.'
    },
    {
      id: 2,
      title: 'Délais Maîtrisés',
      text: 'Planification rigoureuse et coordination efficace des corps de métier pour respecter les échéances de mise en service.'
    },
    {
      id: 3,
      title: 'Qualité Garantie',
      text: 'Matériaux certifiés, contrôles qualité à chaque étape et garanties décennales pour une tranquillité totale.'
    }
  ];

  return (
    <div className="BatimentsIndustriels-page">
      {/* Hero Section */}
      <section 
        className="BatimentsIndustriels-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Batiments+Industriels+SNTP)'
        }}
      >
        <div className="BatimentsIndustriels-hero-overlay"></div>
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-hero-content">
            <p className="BatimentsIndustriels-hero-kicker">
              Accueil / Services / Bâtiments Industriels
            </p>
            <h1 className="BatimentsIndustriels-hero-title">
              Bâtiments Industriels
            </h1>
            <p className="BatimentsIndustriels-hero-subtitle">
              Construction de bâtiments industriels performants : usines, entrepôts, ateliers et 
              plateformes logistiques conçus pour optimiser vos opérations de production et stockage.
            </p>
            <div className="BatimentsIndustriels-hero-actions">
              <a href="/contact" className="BatimentsIndustriels-btn BatimentsIndustriels-btn-primary">
                <FaBuilding style={{ marginRight: '8px' }} />
                Demander un Devis
              </a>
              <a href="/projets" className="BatimentsIndustriels-btn BatimentsIndustriels-btn-outline">
                Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="BatimentsIndustriels-section BatimentsIndustriels-intro">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-section-header">
            <h2 className="BatimentsIndustriels-section-title">
              Notre Expertise Industrielle
            </h2>
            <p className="BatimentsIndustriels-section-subtitle">
              La SNTP accompagne les industriels dans la réalisation de leurs infrastructures 
              avec une approche globale, du design à la livraison.
            </p>
          </div>

          <div className="BatimentsIndustriels-intro-grid">
            {introCards.map((card) => (
              <div key={card.id} className="BatimentsIndustriels-intro-card">
                <div className="BatimentsIndustriels-intro-icon">
                  {card.icon}
                </div>
                <h3 className="BatimentsIndustriels-intro-title">{card.title}</h3>
                <p className="BatimentsIndustriels-intro-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets Phares */}
      <section className="BatimentsIndustriels-section BatimentsIndustriels-projects">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-section-header">
            <h2 className="BatimentsIndustriels-section-title">
              Projets Phares
            </h2>
            <p className="BatimentsIndustriels-section-subtitle">
              Des réalisations emblématiques qui témoignent de notre maîtrise technique et 
              de notre capacité à relever les défis les plus complexes.
            </p>
          </div>

          <div className="BatimentsIndustriels-projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="BatimentsIndustriels-project-card">
                <div className="BatimentsIndustriels-project-header">
                  <h3 className="BatimentsIndustriels-project-title">{project.title}</h3>
                  <p className="BatimentsIndustriels-project-location">{project.location}</p>
                </div>
                <div className="BatimentsIndustriels-project-content">
                  <p className="BatimentsIndustriels-project-desc">{project.description}</p>
                  <ul className="BatimentsIndustriels-project-specs">
                    {project.specs.map((spec, index) => (
                      <li key={index}>
                        <strong>{spec.label}:</strong> {spec.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Types de Bâtiments */}
      <section className="BatimentsIndustriels-section">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-section-header">
            <h2 className="BatimentsIndustriels-section-title">
              Types de Bâtiments
            </h2>
            <p className="BatimentsIndustriels-section-subtitle">
              Une gamme complète de solutions pour tous vos besoins industriels et logistiques.
            </p>
          </div>

          <div className="BatimentsIndustriels-types-grid">
            {buildingTypes.map((type) => (
              <div key={type.id} className="BatimentsIndustriels-type-card">
                <h3 className="BatimentsIndustriels-type-title">{type.title}</h3>
                <p className="BatimentsIndustriels-type-text">{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expertise Technique */}
      <section className="BatimentsIndustriels-section">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-section-header">
            <h2 className="BatimentsIndustriels-section-title">
              Expertise Technique
            </h2>
            <p className="BatimentsIndustriels-section-subtitle">
              Maîtrise de tous les aspects techniques pour des bâtiments performants et durables.
            </p>
          </div>

          <div className="BatimentsIndustriels-expertise-grid">
            {expertise.map((item) => (
              <div key={item.id} className="BatimentsIndustriels-expertise-item">
                <div className="BatimentsIndustriels-expertise-number">{item.number}</div>
                <h3 className="BatimentsIndustriels-expertise-title">{item.title}</h3>
                <p className="BatimentsIndustriels-expertise-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="BatimentsIndustriels-section BatimentsIndustriels-advantages">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-section-header">
            <h2 className="BatimentsIndustriels-section-title">
              Nos Avantages
            </h2>
            <p className="BatimentsIndustriels-section-subtitle">
              Ce qui fait la différence SNTP dans vos projets industriels.
            </p>
          </div>

          <div className="BatimentsIndustriels-advantages-grid">
            {advantages.map((advantage) => (
              <div key={advantage.id} className="BatimentsIndustriels-advantage-card">
                <h3 className="BatimentsIndustriels-advantage-title">{advantage.title}</h3>
                <p className="BatimentsIndustriels-advantage-text">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="BatimentsIndustriels-section BatimentsIndustriels-cta">
        <div className="BatimentsIndustriels-container">
          <div className="BatimentsIndustriels-cta-inner">
            <div>
              <h2 className="BatimentsIndustriels-cta-title">
                Un Projet Industriel ?
              </h2>
              <p className="BatimentsIndustriels-cta-subtitle">
                Discutons de vos besoins et découvrez comment notre expertise peut donner 
                vie à votre infrastructure industrielle.
              </p>
            </div>
            <div className="BatimentsIndustriels-cta-actions">
              <a href="/contact" className="BatimentsIndustriels-btn BatimentsIndustriels-btn-primary">
                <FaCheckCircle style={{ marginRight: '8px' }} />
                Contactez-nous
              </a>
              <a href="/brochure-batiments.pdf" className="BatimentsIndustriels-btn BatimentsIndustriels-btn-outline-light">
                Télécharger la Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatimentsIndustriels;

