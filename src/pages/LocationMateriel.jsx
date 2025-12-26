import React from 'react';
import { FaTruck, FaTools, FaCogs, FaHeadset, FaCheckCircle, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import './LocationMateriel.css';

const LocationMateriel = () => {
  // Catégories d'équipements
  const equipmentCategories = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Engins de Terrassement',
      description: 'Bulldozers, pelles hydrauliques, niveleuses, compacteurs vibrants pour tous travaux de terrassement et préparation de terrain.'
    },
    {
      id: 2,
      icon: <FaTools />,
      title: 'Matériel de Construction',
      description: 'Grues mobiles, bétonnières, échafaudages, coffrages et équipements pour bâtiment et génie civil.'
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: 'Équipements Spécialisés',
      description: 'Matériel ferroviaire, équipements routiers, systèmes de forage et machines pour travaux spécifiques.'
    }
  ];

  // Caractéristiques de l'armada
  const armadaFeatures = [
    'Équipements modernes et régulièrement renouvelés',
    'Maintenance préventive et curative assurée',
    'Disponibilité immédiate sur tout le territoire',
    'Support technique et formation inclus',
    'Flexibilité des durées de location',
    'Assistance 24/7 en cas d\'urgence'
  ];

  return (
    <div className="LocationMateriel-page">
      {/* Hero Section */}
      <section 
        className="LocationMateriel-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Location+Materiel+SNTP)'
        }}
      >
        <div className="LocationMateriel-hero-overlay"></div>
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-hero-content">
            <p className="LocationMateriel-subtitle">
              Solutions Professionnelles
            </p>
            <h1 className="LocationMateriel-title">
              Location de Matériel
            </h1>
            <div className="LocationMateriel-hero-divider"></div>
            <p className="LocationMateriel-description">
              La SNTP met à votre disposition son <strong>parc de matériel moderne et performant</strong> pour 
              accompagner vos projets de construction, terrassement et travaux publics. Une flotte diversifiée, 
              parfaitement entretenue et immédiatement disponible.
            </p>
          </div>
        </div>
      </section>

      {/* Section Catégories d'Équipements */}
      <section className="LocationMateriel-categories-section">
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-section-header">
            <p className="LocationMateriel-section-subtitle">Notre Offre</p>
            <h2 className="LocationMateriel-section-title">
              Catégories d'Équipements Disponibles
            </h2>
            <div className="LocationMateriel-section-divider"></div>
            <p className="LocationMateriel-armada-description">
              Un large choix de matériel professionnel adapté à tous vos besoins, 
              du terrassement aux travaux spécialisés.
            </p>
          </div>

          <div className="LocationMateriel-categories-grid">
            {equipmentCategories.map((category) => (
              <div key={category.id} className="LocationMateriel-category-card">
                <div className="LocationMateriel-category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="LocationMateriel-category-card-title">
                  {category.title}
                </h3>
                <div className="LocationMateriel-category-divider"></div>
                <p className="LocationMateriel-category-description">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Armada */}
      <section className="LocationMateriel-armada-section">
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-armada-grid">
            {/* Contenu texte */}
            <div className="LocationMateriel-armada-content">
              <p className="LocationMateriel-section-subtitle">Excellence & Fiabilité</p>
              <h2 className="LocationMateriel-section-title">
                Une Armada à Votre Service
              </h2>
              <div className="LocationMateriel-section-divider"></div>
              <p className="LocationMateriel-armada-description">
                Notre service repose sur une approche simple : <strong>vous fournir des équipements 
                puissants, immédiatement disponibles, parfaitement entretenus, et adaptés à chaque mission.</strong>
              </p>
              <p className="LocationMateriel-armada-description">
                Chaque machine de notre flotte est soumise à un programme de maintenance rigoureux 
                garantissant performance optimale et sécurité maximale sur vos chantiers.
              </p>

              {/* Liste des caractéristiques */}
              <div className="LocationMateriel-armada-features-list">
                {armadaFeatures.map((feature, index) => (
                  <div key={index} className="LocationMateriel-armada-feature-item">
                    <div className="LocationMateriel-feature-icon-wrapper">
                      <FaCheckCircle className="LocationMateriel-feature-check-icon" />
                    </div>
                    <span className="LocationMateriel-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="LocationMateriel-armada-image-wrapper">
              <div className="LocationMateriel-image-container">
                <img
                  src="https://via.placeholder.com/600x800/415A77/FFFFFF?text=Parc+Materiel"
                  alt="Parc matériel SNTP"
                  className="LocationMateriel-armada-img"
                />
                <div className="LocationMateriel-image-overlay-badge">
                  <FaTruck className="LocationMateriel-overlay-icon" />
                  <span>Plus de 500 équipements disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="LocationMateriel-cta-section">
        <div className="LocationMateriel-container">
          <div className="LocationMateriel-cta-content">
            <h2 className="LocationMateriel-cta-main-title">
              Besoin d'un équipement spécifique ? Notre équipe est à votre écoute pour vous conseiller 
              et vous proposer la solution la plus adaptée à votre projet.
            </h2>

            <div className="LocationMateriel-cta-buttons">
              <a 
                href="/contact" 
                className="LocationMateriel-hero-btn LocationMateriel-hero-btn-primary"
              >
                <FaArrowRight className="LocationMateriel-btn-icon" />
                Demander un Devis
              </a>
              <a 
                href="tel:+213XXXXXXXXX" 
                className="LocationMateriel-hero-btn LocationMateriel-hero-btn-outline"
              >
                <FaPhoneAlt className="LocationMateriel-btn-icon LocationMateriel-btn-icon-phone" />
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationMateriel;

