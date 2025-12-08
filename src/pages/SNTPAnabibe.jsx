import React from 'react';
import { 
  FaMapMarkedAlt, 
  FaPeopleArrows, 
  FaLeaf, 
  FaProjectDiagram,
  FaArrowRight,
  FaAngleRight,
  FaLongArrowAltRight,
  FaMapPin
} from 'react-icons/fa';
import './SNTPAnabibe.css';

const SNTPAnabibe = () => {
  // Données des cartes de 4 sections (Excellence, Engagement, Durabilité, Intégrité)
  const featuresCards = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: "Excellence Technique",
      description: "Innovation et précision dans chaque projet, des études à la réalisation."
    },
    {
      id: 2,
      icon: <FaPeopleArrows />,
      title: "Engagement Social",
      description: "Formation et insertion des compétences locales pour un développement durable."
    },
    {
      id: 3,
      icon: <FaLeaf />,
      title: "Durabilité",
      description: "Solutions éco-responsables et optimisation des ressources pour des infrastructures pérennes."
    },
    {
      id: 4,
      icon: <FaProjectDiagram />,
      title: "Intégrité",
      description: "Transparence, éthique et respect strict des engagements contractuels."
    }
  ];

  return (
    <div className="sntp-anabibe-page">
      {/* Hero Section */}
      <header className="anabibe-hero-section">
        <div className="anabibe-hero-overlay"></div>
        <div className="container anabibe-hero-content">
          <h4 className="anabibe-hero-subtitle">L'Art De L'écoulement Durable</h4>
          <div className="anabibe-hero-logo">
            <img src="/wp-content/uploads/2025/07/1Couleur-22-1024x512.png" alt="SNTP ANABIBE Logo" />
          </div>
          <h1 className="anabibe-hero-title">SNTP ANABIBE</h1>
          <div className="anabibe-hero-divider"></div>
          <p className="anabibe-hero-description">
            <em>Fabricant de buses en béton haute-résistance pour réseaux d'assainissement, drainage agricole et infrastructures urbaines.</em>
          </p>
        </div>
      </header>

      {/* Section Innovation + Durabilité avec image centrale */}
      <section className="anabibe-expertise-section">
        <div className="container">
          <div className="expertise-grid">
            <div className="expertise-card">
              <h4 className="expertise-label">EXPERTISE</h4>
              <h2 className="expertise-title">INNOVATION</h2>
              <div className="expertise-divider"></div>
              <p className="expertise-description">
                Nous révolutionnons le béton depuis 20 ans. Nos buses allient résistance exceptionnelle et design hydrodynamique pour des écoulements parfaits. Solutions durables certifiées ISO.
              </p>
            </div>

            <div className="expertise-image-center">
              <img src="/wp-content/uploads/2025/07/image-from-rawpixel-id-83704-jpeg.jpg" alt="Plans et chantier" />
            </div>

            <div className="expertise-card">
              <h4 className="expertise-label">ENGAGEMENT</h4>
              <h2 className="expertise-title">DURABILITÉ</h2>
              <div className="expertise-divider"></div>
              <p className="expertise-description">
                Nos buses garantissent 50 ans de service sans faille. Béton haute performance, traitement anti-érosion, joints étanches. Protection active des ressources hydrauliques et des sols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Des Solutions Techniques */}
      <section className="anabibe-solutions-section">
        <div className="container">
          <div className="solutions-layout">
            <div className="solutions-text">
              <h2 className="solutions-title">Des solutions techniques qui transforment durablement les territoires</h2>
              <a href="/projects" className="solutions-btn">
                <FaArrowRight className="btn-icon" />
                <span>Nos projets</span>
              </a>
            </div>
            <div className="solutions-cards-wrapper">
              <div className="solutions-cards-grid">
                {featuresCards.map((card) => (
                  <div key={card.id} className="solution-feature-card">
                    <div className="feature-icon-wrapper">
                      {card.icon}
                    </div>
                    <h3 className="feature-title">{card.title}</h3>
                    <p className="feature-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parc Industriel Performant (Orange) */}
      <section className="anabibe-industrial-section">
        <div className="container-full">
          <div className="industrial-grid">
            <div className="industrial-image">
              <img src="/wp-content/uploads/2025/07/image-warehouse.jpg" alt="Parc industriel" />
            </div>
            <div className="industrial-content orange-bg">
              <h2 className="industrial-title">Parc industriel performant</h2>
              <div className="industrial-divider"></div>
              <p className="industrial-description">
                Dans 70 hectares installé principalement généralement l'équipement, intégrant un centre d'usinage, un four de préchauffe et un vaste stock de produits finis. Dotation logistique complète et méthodes modernes pour garantir vos projets.
              </p>
              <a href="#" className="industrial-btn">
                LEARN MORE <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solutions Complètes (Bleu Navy) */}
      <section className="anabibe-complete-solutions-section">
        <div className="container-full">
          <div className="complete-solutions-grid">
            <div className="complete-solutions-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Chantier avec engins" />
            </div>
            <div className="complete-solutions-content navy-bg">
              <h2 className="complete-solutions-title">Solutions Complètes d'Infrastructures Modernes</h2>
              <div className="complete-solutions-divider"></div>
              <p className="complete-solutions-description">
                Grâce à Loiseau, notre partenaire locale tous les besoins en assainissement, drainage hydraulique urbaine, agricole et industrielle. Etudes, fourniture, pose pour des fils de machines durables.
              </p>
              <a href="#" className="complete-solutions-btn">
                LEARN MORE <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Résistance Certifiée (Navy) */}
      <section className="anabibe-resistance-section">
        <div className="container-full">
          <div className="resistance-grid">
            <div className="resistance-content navy-bg">
              <h2 className="resistance-title">Résistance Certifiée En Conditions Extrêmes</h2>
              <div className="resistance-divider"></div>
              <p className="resistance-description">
                Conçus pour résister à 45 bars en test, nos tuyaux assurent une performance inégalée dans les sols instables, les zones sismiques et les milieux corrosifs
              </p>
              <a href="#" className="resistance-btn">
                LEARN MORE <FaAngleRight />
              </a>
            </div>
            <div className="resistance-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Chantier" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Optimisation Logistique (Orange) */}
      <section className="anabibe-optimization-section">
        <div className="container-full">
          <div className="optimization-grid">
            <div className="optimization-image">
              <img src="/wp-content/uploads/2025/07/construction-site-machines.jpg" alt="Chantier" />
            </div>
            <div className="optimization-content orange-bg">
              <h2 className="optimization-title">Optimisation Logistique Et Installation Simplifiée</h2>
              <div className="optimization-divider"></div>
              <p className="optimization-description">
                La longueur standard de 6 mètres réduit les coûts de manutention, facilite le stockage et permet une pose rapide grâce à un système d'emboîtement breveté.
              </p>
              <a href="#" className="optimization-btn">
                LEARN MORE <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Objectif avec barres de progression */}
      <section className="anabibe-objective-section">
        <div className="container">
          <div className="objective-layout">
            <div className="objective-text">
              <h3 className="objective-subtitle">SNTP ANABIBE</h3>
              <h2 className="objective-title">Notre Objectif</h2>
              <div className="objective-divider"></div>
              <p className="objective-description">
                Chaque buse en béton qui sort de nos ateliers porte en elle notre savoir-faire artisanal allié à une précision industrielle.
              </p>
              <a href="#" className="objective-btn">
                <FaArrowRight className="btn-icon" />
                <span>A propos</span>
              </a>
            </div>
            <div className="objective-progress">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Fabrication & Développement</span>
                  <span className="progress-percentage">70%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Chaine de Production Robotisée</span>
                  <span className="progress-percentage">75%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Livres en Production Nationale</span>
                  <span className="progress-percentage">85%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Durabilité Chez Valeur Ajoutée</span>
                  <span className="progress-percentage">90%</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Retrouvez-nous avec carte */}
      <section className="anabibe-location-section">
        <div className="container">
          <div className="location-layout">
            <div className="location-map">
              <iframe 
                src="https://maps.google.com/maps?q=SNTP%20ANABIBE%20FORNAKA&t=m&z=10&output=embed&iwloc=near" 
                title="SNTP ANABIBE FORNAKA"
                aria-label="SNTP ANABIBE FORNAKA"
                loading="lazy"
              ></iframe>
            </div>
            <div className="location-info">
              <h1 className="location-title">Retrouvez-nous</h1>
              <div className="location-details">
                <h3 className="location-heading">L'adresse :</h3>
                <p className="location-text">Zone Industrielle, lot n°16, Fornaka, Mostaganem, Algérie, 27160</p>
              </div>
              <div className="location-details">
                <h3 className="location-heading">Numéro de téléphone :</h3>
                <p className="location-text">
                  <strong>Téléphone:</strong> 045 58 07 30<br />
                  <strong>Fax:</strong> 045 58 07 31<br />
                  <strong>Email:</strong> infocontact@sntp.dz
                </p>
              </div>
              <a href="#" className="location-btn">
                <FaMapPin className="btn-icon" />
                <span>Localisation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPAnabibe;

