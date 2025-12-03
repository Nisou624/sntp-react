import React from 'react';
import { FaRoad, FaTools, FaHardHat, FaClipboardCheck } from 'react-icons/fa';
import './TravauxRoutiers.css';

const TravauxRoutiers = () => {
  return (
    <div className="travaux-routiers-page">
      {/* Hero Section */}
      <header className="travaux-hero">
        <div className="travaux-hero-overlay"></div>
        <div className="container travaux-hero-content">
          <h4 className="travaux-subtitle">Moderniser les Infrastructures Routières Nationales</h4>
          <h1 className="travaux-title">TRAVAUX ROUTIERS</h1>
          <div className="hero-divider"></div>
          <p className="travaux-description">
            De l'autoroute à la voirie urbaine, SNTP transforme chaque kilomètre en vecteur de développement économique et social.
          </p>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="expertise-section section">
        <div className="container">
          <div className="expertise-intro">
            <div className="expertise-content">
              <h4 className="section-subtitle">INFRASTRUCTURE ROUTIÈRE</h4>
              <h2 className="section-title">Notre Expertise en Travaux Routiers</h2>
              <div className="section-divider"></div>
              <p className="expertise-text">
                Avec plus de <strong>20 ans d'expérience</strong> dans la construction et la réhabilitation routière, SNTP maîtrise tous les aspects techniques : terrassement, assainissement, chaussée, signalisation.
              </p>
              <ul className="expertise-list">
                <li>
                  <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  Autoroutes et rocades
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  Routes nationales et chemins de wilaya
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  Voiries urbaines et parkings
                </li>
                <li>
                  <svg className="list-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  Pistes aéroportuaires
                </li>
              </ul>
              <a href="/contact" className="hero-btn hero-btn-primary">
                <span>Contactez-nous</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
            <div className="expertise-image">
              <img src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" alt="Travaux Routiers" />
            </div>
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="processus-section section-gray">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">NOTRE MÉTHODE</h4>
            <h2 className="section-title">Processus de Réalisation</h2>
            <div className="section-divider center"></div>
          </div>

          <div className="processus-grid">
            <div className="processus-card">
              <div className="processus-number">01</div>
              <FaClipboardCheck className="processus-icon" />
              <h3 className="processus-title">Études Préliminaires</h3>
              <p className="processus-text">
                Relevés topographiques, études géotechniques, dimensionnement selon catalogue algérien/Eurocodes.
              </p>
            </div>

            <div className="processus-card">
              <div className="processus-number">02</div>
              <FaTools className="processus-icon" />
              <h3 className="processus-title">Terrassement & VRD</h3>
              <p className="processus-text">
                Décapage, déblais/remblais, pose réseaux (AEP, EU, EP, télécom), compactage selon essais Proctor.
              </p>
            </div>

            <div className="processus-card">
              <div className="processus-number">03</div>
              <FaRoad className="processus-icon" />
              <h3 className="processus-title">Corps de Chaussée</h3>
              <p className="processus-text">
                Couche de forme, fondation (GNT), base (grave bitume 0/20), couche de roulement (BB 0/14).
              </p>
            </div>

            <div className="processus-card">
              <div className="processus-number">04</div>
              <FaHardHat className="processus-icon" />
              <h3 className="processus-title">Finitions & Signalisation</h3>
              <p className="processus-text">
                Bordures, trottoirs, marquage horizontal/vertical, panneaux conformes Code de la route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1200+</div>
              <div className="stat-label">Kilomètres construits</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projets achevés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Références */}
      <section className="references-section section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">RÉALISATIONS</h4>
            <h2 className="section-title">Projets Routiers de Référence</h2>
            <div className="section-divider center"></div>
          </div>

          <div className="references-grid">
            <div className="reference-card">
              <img src="/wp-content/uploads/2025/07/highway-3392100_1920.jpg" alt="Autoroute" />
              <div className="reference-content">
                <h3>Autoroute Est-Ouest</h3>
                <p>Tronçon Alger-Oran (120 km) – Terrassement et chaussée</p>
              </div>
            </div>

            <div className="reference-card">
              <img src="/wp-content/uploads/2025/07/road-construction.jpg" alt="Route Nationale" />
              <div className="reference-content">
                <h3>Route Nationale RN1</h3>
                <p>Réhabilitation 80 km – Couche de roulement et signalisation</p>
              </div>
            </div>

            <div className="reference-card">
              <img src="/wp-content/uploads/2025/07/urban-road.jpg" alt="Voirie Urbaine" />
              <div className="reference-content">
                <h3>Voiries Ville Nouvelle</h3>
                <p>Sidi Abdallah – 45 km voiries + VRD complets</p>
              </div>
            </div>
          </div>

          <div className="references-cta">
            <a href="/projects" className="hero-btn hero-btn-primary">
              <span>Voir tous nos projets</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Un projet routier en perspective ?</h2>
            <p>Confiez-nous vos travaux d'infrastructures routières et bénéficiez de notre expertise reconnue.</p>
            <a href="/contact" className="hero-btn hero-btn-white">
              <span>Demander un devis</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravauxRoutiers;

