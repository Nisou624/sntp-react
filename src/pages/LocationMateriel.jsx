import React from 'react';
import { FaTruck, FaTools, FaCogs, FaHeadset, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import './LocationMateriel.css';

const LocationMateriel = () => {
  // Catégories d'équipements - Contenu exact de la page HTML WordPress
  const equipmentCategories = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "Équipements béton",
      description: "Camions malaxeurs, centrales mobile"
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Matériel annexe",
      description: "Groupes électrogènes, compresseurs, bungalows de chantier"
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Engins de terrassement",
      description: "Pelles, chargeuses, bulldozers, scrapers"
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Engins de compactage",
      description: "Rouleaux monocylindres, tandem vibrants"
    },
    {
      id: 5,
      icon: <FaTools />,
      title: "Matériel de levage",
      description: "Grues mobiles, nacelles, chariots télescopiques"
    },
    {
      id: 6,
      icon: <FaCogs />,
      title: "Équipement de transport",
      description: "Camions bennes, semi-remorques, tracteurs"
    }
  ];

  // Caractéristiques de la flotte - Contenu exact de la page HTML
  const fleetFeatures = [
    "Puissance",
    "Disponibilité",
    "Fiabilité"
  ];

  return (
    <div className="location-materiel-page">
      {/* Hero Section - Contenu exact de la page WordPress */}
      <header className="location-hero">
        <div className="location-hero-overlay"></div>
        <div className="container location-hero-content">
          <h4 className="location-subtitle">Une flotte à la hauteur de vos projets</h4>
          <h1 className="location-title">LOCATION DE MATÉRIEL</h1>
          <div className="hero-divider"></div>
          <p className="location-description">
            Forte de son envergure nationale, la Société Nationale des Travaux Publics met à la disposition de ses clients publics et privés une <strong>offre complète de location d'engins et de matériel de chantier</strong>, pour tous types de projets d'infrastructure, de bâtiment, ou d'aménagement.
          </p>
        </div>
      </header>

      {/* Section Catégories d'équipements - Contenu exact */}
      <section className="equipements-categories-section section">
        <div className="container">
          <div className="categories-grid">
            {equipmentCategories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-card-title">{category.title}</h3>
                <div className="category-divider"></div>
                <p className="category-description">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section "Une armada d'engins" - Contenu exact */}
      <section className="armada-section section-gray">
        <div className="container">
          <div className="armada-grid">
            <div className="armada-content">
              <h4 className="section-subtitle">opérationnelle pour répondre à toutes les exigences terrain.</h4>
              <h2 className="section-title">Une armada d'engins</h2>
              <div className="section-divider"></div>
              <p className="armada-description">
                Notre service repose sur une approche simple : <strong>vous fournir des équipements puissants, immédiatement disponibles, parfaitement entretenus, et adaptés à chaque mission.</strong>
              </p>
              
              <div className="armada-features-list">
                {fleetFeatures.map((feature, index) => (
                  <div key={index} className="armada-feature-item">
                    <div className="feature-icon-wrapper">
                      <FaCheckCircle className="feature-check-icon" />
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="armada-image-wrapper">
              <div className="image-container">
                <img 
                  src="/wp-content/uploads/elementor/thumbs/image-from-rawpixel-id-83704-jpeg-r85dio3bt7yx7cbp0y2qgdfogan565evpp44kte7zk.jpg" 
                  alt="Engins de chantier SNTP"
                  className="armada-img"
                />
                <div className="image-overlay-badge">
                  <FaCheckCircle className="overlay-icon" />
                  <span>Flotte moderne et entretenue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale - Contenu exact */}
      <section className="location-cta-section">
        <div className="container">
          <div className="location-cta-content">
            <h2 className="cta-main-title">
              Chaque projet a ses exigences. Notre équipe vous accompagne pour dimensionner précisément vos besoins, assurer la logistique, et garantir une disponibilité sans rupture tout au long de votre chantier.
            </h2>
            <div className="cta-buttons">
              <a href="/about-us" className="hero-btn hero-btn-primary">
                <span>Contactez-nous</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
              <a href="tel:023812345" className="hero-btn hero-btn-outline">
                <FaPhoneAlt className="btn-icon-phone" />
                <span>023 81 23 45</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationMateriel;

