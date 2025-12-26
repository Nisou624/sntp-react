import React from 'react';
import { FaTrain, FaTools, FaHardHat, FaCogs, FaCheckCircle } from 'react-icons/fa';
import './TravauxFerroviaires.css';

const TravauxFerroviaires = () => {
  // Cartes Introduction
  const introCards = [
    {
      id: 1,
      title: 'Expertise Reconnue',
      text: 'Plus de 60 ans d\'expérience dans la construction et la maintenance d\'infrastructures ferroviaires en Algérie.'
    },
    {
      id: 2,
      title: 'Technologies Avancées',
      text: 'Équipements de pointe et méthodes de construction conformes aux normes internationales les plus exigeantes.'
    },
    {
      id: 3,
      title: 'Équipes Qualifiées',
      text: 'Personnel hautement qualifié et certifié pour tous types de projets ferroviaires, du tramway au train à grande vitesse.'
    }
  ];

  // Activités principales
  const activities = [
    {
      id: 1,
      title: 'Terrassements & Plate-forme',
      text: 'Ouverture de tracés, déblais/remblais, stabilité des talus, traitement de sols, couches de forme et couches de protection de la plate-forme ferroviaire, avec maîtrise des déformations différées et du drainage longitudinal et transversal.'
    },
    {
      id: 2,
      title: 'Voie Ferrée',
      text: 'Pose de voie ballastée ou sur dalle béton, rails (UIC 60, UIC 54), traverses (bois, béton), ballast calibré, appareils de voie (aiguillages), soudure aluminothermique, nivellement et alignement laser, bourrage mécanique et stabilisation dynamique.'
    },
    {
      id: 3,
      title: 'Caténaire & Électrification',
      text: 'Installation de la ligne aérienne de contact (LAC), poteaux et portiques caténaires, sous-stations électriques de traction, systèmes de mise à la terre et de protection, conformité avec les normes SNCF/UIC/EN pour une alimentation fiable et sécurisée.'
    },
    {
      id: 4,
      title: 'Signalisation Ferroviaire',
      text: 'Systèmes de signalisation automatique (block automatique lumineux – BAL), contrôle-commande centralisé, détection de trains par circuits de voie ou compteurs d\'essieux, passages à niveau automatiques, télécommunications et SCADA ferroviaire.'
    },
    {
      id: 5,
      title: 'Ouvrages d\'Art',
      text: 'Conception et réalisation de ponts-rails, viaducs ferroviaires, tunnels et tranchées couvertes, murs de soutènement et ouvrages hydrauliques spécifiques pour protéger l\'infrastructure contre les crues et l\'érosion.'
    },
    {
      id: 6,
      title: 'Gares & Équipements',
      text: 'Construction et aménagement de gares voyageurs, quais (hauteur normalisée 55 ou 76 cm), passerelles et souterrains piétons, systèmes d\'information voyageurs (SIV), éclairage et vidéosurveillance, accessibilité PMR.'
    }
  ];

  // Parc matériel
  const equipmentCategories = [
    {
      id: 1,
      title: 'Engins de Terrassement',
      items: [
        'Bulldozers et niveleuses',
        'Pelles hydrauliques',
        'Compacteurs vibrants',
        'Camions-bennes'
      ]
    },
    {
      id: 2,
      title: 'Matériel Voie',
      items: [
        'Bourreuses mécaniques',
        'Dégarnisseuses de ballast',
        'Machines à souder les rails',
        'Dresseuses de voie'
      ]
    },
    {
      id: 3,
      title: 'Équipements Spécialisés',
      items: [
        'Portiques caténaires mobiles',
        'Nacelles et plateformes élévatrices',
        'Groupes électrogènes de chantier',
        'Stations de soudure aluminothermique'
      ]
    }
  ];

  // Statistiques / Atouts
  const stats = [
    {
      id: 1,
      label: 'Expérience',
      value: '60+ ans',
      desc: 'D\'expertise dans le ferroviaire algérien'
    },
    {
      id: 2,
      label: 'Projets',
      value: '100+',
      desc: 'Projets ferroviaires réalisés avec succès'
    },
    {
      id: 3,
      label: 'Conformité',
      value: '100%',
      desc: 'Respect des normes internationales'
    }
  ];

  return (
    <div className="TravauxFerroviaires-page">
      {/* Hero Section */}
      <section 
        className="TravauxFerroviaires-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Travaux+Ferroviaires+SNTP)'
        }}
      >
        <div className="TravauxFerroviaires-hero-overlay"></div>
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-hero-content">
            <p className="TravauxFerroviaires-hero-kicker">
              Accueil / Services / Travaux Ferroviaires
            </p>
            <h1 className="TravauxFerroviaires-hero-title">
              Travaux Ferroviaires
            </h1>
            <p className="TravauxFerroviaires-hero-subtitle">
              Conception, construction et maintenance d'infrastructures ferroviaires modernes : 
              voies ferrées, tramways, métros et systèmes de transport guidé.
            </p>
            <div className="TravauxFerroviaires-hero-actions">
              <a href="/contact" className="TravauxFerroviaires-btn TravauxFerroviaires-btn-primary">
                <FaTrain style={{ marginRight: '8px' }} />
                Demander un Devis
              </a>
              <a href="/projets" className="TravauxFerroviaires-btn TravauxFerroviaires-btn-outline">
                Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="TravauxFerroviaires-section TravauxFerroviaires-intro">
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-section-header">
            <h2 className="TravauxFerroviaires-section-title">
              Notre Savoir-Faire Ferroviaire
            </h2>
            <p className="TravauxFerroviaires-section-subtitle">
              La SNTP possède une expertise complète dans tous les domaines du ferroviaire, 
              de la conception à la mise en service, en passant par la construction et la maintenance.
            </p>
          </div>

          <div className="TravauxFerroviaires-intro-grid">
            {introCards.map((card) => (
              <div key={card.id} className="TravauxFerroviaires-intro-card">
                <h3 className="TravauxFerroviaires-intro-title">{card.title}</h3>
                <p className="TravauxFerroviaires-intro-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Activités */}
      <section className="TravauxFerroviaires-section TravauxFerroviaires-activities">
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-section-header">
            <h2 className="TravauxFerroviaires-section-title">
              Nos Activités Principales
            </h2>
            <p className="TravauxFerroviaires-section-subtitle">
              Nous intervenons sur l'ensemble du cycle de vie des infrastructures ferroviaires, 
              avec une maîtrise technique reconnue.
            </p>
          </div>

          <div className="TravauxFerroviaires-activities-grid">
            {activities.map((activity) => (
              <div key={activity.id} className="TravauxFerroviaires-activity-card">
                <h3 className="TravauxFerroviaires-activity-title">{activity.title}</h3>
                <p className="TravauxFerroviaires-activity-text">{activity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parc Matériel */}
      <section className="TravauxFerroviaires-section">
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-section-header">
            <h2 className="TravauxFerroviaires-section-title">
              Parc Matériel & Équipements
            </h2>
            <p className="TravauxFerroviaires-section-subtitle">
              Un parc de matériel moderne et performant pour garantir la qualité et 
              l'efficacité de nos interventions.
            </p>
          </div>

          <div className="TravauxFerroviaires-equipment-grid">
            {equipmentCategories.map((category) => (
              <div key={category.id} className="TravauxFerroviaires-equipment-block">
                <h3 className="TravauxFerroviaires-equipment-title">{category.title}</h3>
                <ul className="TravauxFerroviaires-equipment-list">
                  {category.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés */}
      <section className="TravauxFerroviaires-section TravauxFerroviaires-stats">
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-section-header">
            <h2 className="TravauxFerroviaires-section-title">
              Nos Atouts en Chiffres
            </h2>
            <p className="TravauxFerroviaires-section-subtitle">
              Des indicateurs qui témoignent de notre engagement et de notre excellence.
            </p>
          </div>

          <div className="TravauxFerroviaires-stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="TravauxFerroviaires-stat-card">
                <div className="TravauxFerroviaires-stat-label">{stat.label}</div>
                <div className="TravauxFerroviaires-stat-value">{stat.value}</div>
                <div className="TravauxFerroviaires-stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact / CTA */}
      <section className="TravauxFerroviaires-section TravauxFerroviaires-contact">
        <div className="TravauxFerroviaires-container">
          <div className="TravauxFerroviaires-contact-inner">
            <div>
              <h2 className="TravauxFerroviaires-contact-title">
                Un Projet Ferroviaire ?
              </h2>
              <p className="TravauxFerroviaires-contact-subtitle">
                Discutons de vos besoins et découvrez comment notre expertise peut faire 
                la différence sur votre projet.
              </p>
            </div>
            <div className="TravauxFerroviaires-contact-actions">
              <a href="/contact" className="TravauxFerroviaires-btn TravauxFerroviaires-btn-primary">
                <FaCheckCircle style={{ marginRight: '8px' }} />
                Contactez-nous
              </a>
              <a href="/brochure-ferroviaire.pdf" className="TravauxFerroviaires-btn TravauxFerroviaires-btn-outline">
                Télécharger la Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravauxFerroviaires;

