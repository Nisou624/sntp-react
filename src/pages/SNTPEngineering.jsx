import React from 'react';
import { FaShareSquare, FaBuilding, FaRoute, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import './SNTPEngineering.css';

const SNTPEngineering = () => {
  return (
    <div className="sntp-engineering-page">
      {/* Hero Section */}
      <header className="engineering-hero">
        <div className="engineering-hero-overlay"></div>
        <div className="container engineering-hero-content">
          <h4 className="engineering-subtitle">L'Excellence Technique au Service des Infrastructures Nationales</h4>
          <div className="engineering-logo-container">
            <img 
              src="/wp-content/uploads/2025/07/1Couleur-2-1024x512.png" 
              alt="SNTP ENGINEERING Logo" 
              className="engineering-logo"
            />
          </div>
          <h1 className="engineering-title">SNTP ENGINEERING</h1>
          <div className="hero-divider"></div>
          <p className="engineering-description">
            Pôle d'expertise technique du groupe SNTP, nous conjuguons <strong>innovation</strong>, <strong>précision</strong> et <strong>normes internationales</strong> pour concevoir et superviser les projets d'infrastructures les plus complexes.
          </p>
        </div>
      </header>

      {/* Nos Domaines Section */}
      <section className="domaines-section section">
        <div className="container">
          <div className="domaines-intro">
            <div className="domaines-content">
              <h4 className="section-subtitle">SNTP ENGINEERING</h4>
              <h2 className="section-title">Nos Domaines d'Intervention</h2>
              <div className="section-divider"></div>
              <p className="domaines-text">
                <em>Du bureau d'études au chantier, nous maîtrisons toute la chaîne technique des infrastructures lourdes.</em>
              </p>
              <a href="/faq" className="hero-btn hero-btn-primary">
                <span>Questions</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
            <div className="domaines-image">
              <img src="/wp-content/uploads/2025/07/dean-bennett-aBV8pVODWiM-unsplash.jpg" alt="Engineering Team" />
            </div>
          </div>

          <div className="domaines-grid">
            <div className="domaine-card">
              <FaShareSquare className="domaine-icon" />
              <h3 className="domaine-title">Ingénierie de Conception</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Études techniques détaillées (avant-projets sommaires et détaillés)</li>
                <li>Modélisation BIM et simulations numériques</li>
                <li>Optimisation des coûts grâce à l'éco-conception</li>
              </ul>
            </div>

            <div className="domaine-card">
              <FaBuilding className="domaine-icon" />
              <h3 className="domaine-title">Ingénierie de Réalisation</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Assistance technique aux chantiers</li>
                <li>Résolution des problèmes in situ (géotechnique, structures)</li>
                <li>Supervision des essais et contrôles qualité</li>
              </ul>
            </div>

            <div className="domaine-card">
              <FaRoute className="domaine-icon" />
              <h3 className="domaine-title">Ingénierie Routière & Autoroutière</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Tracés routiers optimisés (logiciels Piste 5, AutoCAD Civil 3D)</li>
                <li>Dimensionnement chaussées (méthode AASHTO, catalogue algérien)</li>
                <li>Systèmes drainage et signalisation</li>
              </ul>
            </div>

            <div className="domaine-card">
              <FaBriefcase className="domaine-icon" />
              <h3 className="domaine-title">Gestion de Projets</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Planification stratégique (diagrammes de Gantt, PERT)</li>
                <li>Coordination multipartite (maîtrise d'ouvrage, sous-traitants)</li>
                <li>Reporting mensuel aux investisseurs</li>
              </ul>
              <a href="#" className="domaine-btn">
                <span>Contactez-nous</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>

            <div className="domaine-card">
              <FaFileAlt className="domaine-icon" />
              <h3 className="domaine-title">Ingénierie Hydraulique & VRD</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Conception réseaux AEP et assainissement</li>
                <li>Calculs hydrauliques (formules de Colebrook, Manning)</li>
                <li>Stations de pompage et bassins de rétention</li>
              </ul>
            </div>

            <div className="domaine-card">
              <FaRoute className="domaine-icon" />
              <h3 className="domaine-title">Expertise Géotechnique</h3>
              <div className="domaine-divider"></div>
              <ul className="domaine-list">
                <li>Sondages et essais mécaniques des sols</li>
                <li>Fondations spéciales (pieux, micropieux, parois moulées)</li>
                <li>Études de stabilité (glissement de terrain, tassement)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-background-section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content-center">
            <h2 className="cta-white-title">
              Infrastructures modernes, sécurité renforcée, développement durable
            </h2>
            <a href="/projects" className="hero-btn hero-btn-primary">
              <span>nos projets</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>

          <div className="features-grid-white">
            <div className="feature-card-white">
              <FaShareSquare className="feature-icon-white" />
              <h3 className="feature-title-white">Excellence Technique</h3>
              <p className="feature-text-white">
                <em>Innovation et précision dans chaque projet, des études à la réalisation.</em>
              </p>
            </div>

            <div className="feature-card-white">
              <FaBuilding className="feature-icon-white" />
              <h3 className="feature-title-white">Engagement Social</h3>
              <p className="feature-text-white">
                <em>Formation et insertion des compétences locales pour un développement durable.</em>
              </p>
            </div>

            <div className="feature-card-white">
              <FaRoute className="feature-icon-white" />
              <h3 className="feature-title-white">Durabilité</h3>
              <p className="feature-text-white">
                <em>Solutions éco-responsables et optimisation des ressources pour des infrastructures pérennes.</em>
              </p>
            </div>

            <div className="feature-card-white">
              <FaBriefcase className="feature-icon-white" />
              <h3 className="feature-title-white">Intégrité</h3>
              <p className="feature-text-white">
                <em>Transparence, éthique et respect strict des engagements contractuels.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation-section section">
        <div className="container">
          <div className="innovation-grid">
            <div className="innovation-images">
              <img 
                src="/wp-content/uploads/2025/07/image-from-rawpixel-id-1364-jpeg.jpg" 
                alt="Engineering Innovation" 
                className="innovation-img"
              />
            </div>

            <div className="innovation-content">
              <h4 className="section-subtitle">SNTP ENGINEERING</h4>
              <h2 className="section-title">Innovation et Normes Internationales</h2>
              <div className="section-divider"></div>
              <p className="innovation-text">
                Nous appliquons les normes internationales les plus strictes : <strong>Eurocodes</strong>, <strong>AASHTO</strong>, <strong>BS EN</strong>. Notre équipe maîtrise les outils de simulation avancés pour garantir la fiabilité de chaque ouvrage.
              </p>
              <a href="/about" className="hero-btn hero-btn-primary">
                <span>A propos</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>

            <div className="innovation-sidebar">
              <h3 className="sidebar-title">Notre Expertise Chiffrée</h3>
              <p className="sidebar-text">
                Résultats mesurables au service de la qualité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="team-gallery-section">
        <div className="container-full">
          <div className="team-gallery-grid">
            <div 
              className="team-gallery-item" 
              style={{ backgroundImage: 'url(/wp-content/uploads/2025/07/man-welding-metal-2880871.jpg)' }}
            ></div>
            
            <div 
              className="team-gallery-item" 
              style={{ backgroundImage: 'url(/wp-content/uploads/2025/07/portrait-of-chemical-engineer-3861445.jpg)' }}
            >
              <div className="team-overlay">
                <h3 className="team-title">Experts Pluridisciplinaires</h3>
                <p className="team-text">
                  Ingénieurs civils, géotechniciens, topographes, hydrauliciens formés aux meilleures pratiques nationales et internationales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Phares Section */}
      <section className="projets-phares-section section">
        <div className="container">
          <div className="projets-content">
            <h4 className="section-subtitle">PROJETS RÉFÉRENCES</h4>
            <h2 className="section-title">Projets Phares de SNTP Engineering</h2>
            <div className="section-divider"></div>
            <p className="projets-text">
              Notre bureau d'études a contribué à la conception et à la supervision de grands projets d'infrastructures en Algérie.
            </p>
            <ul className="projets-list">
              <li>
                <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                  <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                </svg>
                Autoroute Est-Ouest (tronçon Alger-Oran) – Études géotechniques et contrôle qualité
              </li>
              <li>
                <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                  <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                </svg>
                Barrage Koudiet Acerdoune (Bouira) – Dimensionnement hydraulique
              </li>
              <li>
                <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                  <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                </svg>
                Tramway d'Alger (Extensions) – VRD et réseaux enterrés
              </li>
              <li>
                <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                  <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                </svg>
                Nouvel Aéroport d'Alger – Pistes et voiries d'accès
              </li>
            </ul>
            <a href="/projets" className="hero-btn hero-btn-primary">
              <span>VOIR NOS PROJETS</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section className="contact-map-section">
        <div className="container-full">
          <div className="contact-map-grid">
            <div className="map-column">
              <iframe
                src="https://maps.google.com/maps?q=SNTP%20ENGINEERING%20ALGIERS&t=m&z=10&output=embed&iwloc=near"
                title="SNTP ENGINEERING ALGIERS"
                aria-label="SNTP ENGINEERING ALGIERS"
                className="google-map"
                loading="lazy"
              ></iframe>
            </div>

            <div className="contact-info-column">
              <h1 className="contact-main-title">Retrouvez-nous</h1>
              
              <div className="contact-spacer"></div>
              
              <h3 className="contact-section-title">L'adresse :</h3>
              <p className="contact-text">
                Siège Social, Route Nationale 11, Birtouta, Alger, Algérie
              </p>

              <h3 className="contact-section-title">Numéro de téléphone :</h3>
              <p className="contact-text">023 81 23 45</p>

              <p className="contact-emphasis">
                <strong>Contactez SNTP Engineering</strong> pour discuter de vos projets d'infrastructures et bénéficier de notre expertise technique reconnue.
              </p>

              <a 
                href="https://maps.app.goo.gl/xxxxxxxxxx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn hero-btn-dark"
              >
                <span>Localisation</span>
                <svg className="btn-icon" viewBox="0 0 288 512" width="14" height="14">
                  <path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPEngineering;

