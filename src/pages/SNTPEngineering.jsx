import React, { useEffect } from 'react';
import { FaRoad, FaTools, FaHardHat, FaClipboardCheck, FaChartLine, FaAward, FaClock, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TravauxRoutiers.css';

const TravauxRoutiers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="travaux-routiers-page">
      {/* Hero Section - Moderne avec animation */}
      <header className="travaux-hero">
        <div className="travaux-hero-overlay"></div>
        <div className="travaux-hero-pattern"></div>
        <div className="container travaux-hero-content">
          <span className="travaux-badge">Excellence en Infrastructure</span>
          <h1 className="travaux-title">
            <span className="title-line">TRAVAUX</span>
            <span className="title-line title-accent">ROUTIERS</span>
          </h1>
          <p className="travaux-description">
            De l'autoroute à la voirie urbaine, nous transformons chaque kilomètre en vecteur de développement économique et social avec innovation et durabilité.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              <span>Demander un devis</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
            <a href="#expertise" className="btn btn-outline">
              <span>En savoir plus</span>
            </a>
          </div>
        </div>
      </header>

      {/* Stats Section - Chiffres clés */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid-modern">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaRoad className="stat-icon-modern" />
              </div>
              <div className="stat-content">
                <div className="stat-number">1200+</div>
                <div className="stat-label">Kilomètres réalisés</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaCheckCircle className="stat-icon-modern" />
              </div>
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projets livrés</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaClock className="stat-icon-modern" />
              </div>
              <div className="stat-content">
                <div className="stat-number">20</div>
                <div className="stat-label">Ans d'expertise</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <FaAward className="stat-icon-modern" />
              </div>
              <div className="stat-content">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Redesign moderne */}
      <section id="expertise" className="expertise-section">
        <div className="container">
          <div className="expertise-layout">
            <div className="expertise-visual">
              <div className="image-wrapper">
                <img src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" alt="Expertise Travaux Routiers" />
                <div className="image-badge">
                  <span className="badge-number">20</span>
                  <span className="badge-text">Années<br/>d'expérience</span>
                </div>
              </div>
            </div>
            <div className="expertise-content">
              <span className="section-tag">INFRASTRUCTURE ROUTIÈRE</span>
              <h2 className="section-title-modern">
                Notre Expertise en<br/>
                <span className="title-highlight">Travaux Routiers</span>
              </h2>
              <div className="section-divider-modern"></div>
              <p className="section-text">
                Avec plus de <strong>20 ans d'expérience</strong> dans la construction et la réhabilitation routière, SNTP maîtrise tous les aspects techniques : terrassement, assainissement, chaussée, signalisation.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Autoroutes et rocades</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Routes nationales et chemins de wilaya</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Voiries urbaines et parkings</span>
                </li>
                <li>
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Pistes aéroportuaires</span>
                </li>
              </ul>
              <a href="/contact" className="btn btn-primary">
                <span>Contactez-nous</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus Section - Ultra Moderne avec Timeline */}
      <section className="processus-section-ultra">
        <div className="container">
          <div className="section-header-ultra">
            <span className="section-tag-animated" data-aos="fade-down">NOTRE MÉTHODE</span>
            <h2 className="section-title-ultra" data-aos="fade-up" data-aos-delay="100">
              Processus de <span className="title-highlight-gradient">Réalisation</span>
            </h2>
            <div className="section-divider-animated" data-aos="fade-up" data-aos-delay="200"></div>
            <p className="section-subtitle-ultra" data-aos="fade-up" data-aos-delay="300">
              Une approche structurée et éprouvée pour garantir la qualité et la durabilité de chaque projet
            </p>
          </div>

          <div className="processus-timeline">
            {/* Phase 01 */}
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card">
                <div className="card-badge">
                  <span className="badge-number">01</span>
                </div>
                <div className="card-icon-wrapper">
                  <div className="icon-circle">
                    <FaClipboardCheck className="card-icon-modern" />
                  </div>
                </div>
                <div className="card-content-timeline">
                  <span className="card-phase">PHASE 1</span>
                  <h3 className="card-title-timeline">Études Préliminaires</h3>
                  <p className="card-text-timeline">
                    Relevés topographiques, études géotechniques, dimensionnement selon catalogue algérien/Eurocodes.
                  </p>
                  <div className="card-tags">
                    <span className="tag">Topographie</span>
                    <span className="tag">Géotechnique</span>
                    <span className="tag">Dimensionnement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card">
                <div className="card-badge">
                  <span className="badge-number">02</span>
                </div>
                <div className="card-icon-wrapper">
                  <div className="icon-circle">
                    <FaTools className="card-icon-modern" />
                  </div>
                </div>
                <div className="card-content-timeline">
                  <span className="card-phase">PHASE 2</span>
                  <h3 className="card-title-timeline">Terrassement & VRD</h3>
                  <p className="card-text-timeline">
                    Décapage, déblais/remblais, pose réseaux (AEP, EU, EP, télécom), compactage selon essais Proctor.
                  </p>
                  <div className="card-tags">
                    <span className="tag">Terrassement</span>
                    <span className="tag">Réseaux</span>
                    <span className="tag">Compactage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="300">
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card">
                <div className="card-badge">
                  <span className="badge-number">03</span>
                </div>
                <div className="card-icon-wrapper">
                  <div className="icon-circle">
                    <FaRoad className="card-icon-modern" />
                  </div>
                </div>
                <div className="card-content-timeline">
                  <span className="card-phase">PHASE 3</span>
                  <h3 className="card-title-timeline">Corps de Chaussée</h3>
                  <p className="card-text-timeline">
                    Couche de forme, fondation (GNT), base (grave bitume 0/20), couche de roulement (BB 0/14).
                  </p>
                  <div className="card-tags">
                    <span className="tag">Fondation</span>
                    <span className="tag">Base bitume</span>
                    <span className="tag">Roulement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 04 */}
            <div className="timeline-item" data-aos="fade-left" data-aos-delay="400">
              <div className="timeline-connector">
                <div className="timeline-dot timeline-dot-final"></div>
              </div>
              <div className="timeline-card">
                <div className="card-badge">
                  <span className="badge-number">04</span>
                </div>
                <div className="card-icon-wrapper">
                  <div className="icon-circle">
                    <FaHardHat className="card-icon-modern" />
                  </div>
                </div>
                <div className="card-content-timeline">
                  <span className="card-phase">PHASE 4</span>
                  <h3 className="card-title-timeline">Finitions & Signalisation</h3>
                  <p className="card-text-timeline">
                    Bordures, trottoirs, marquage horizontal/vertical, panneaux conformes Code de la route.
                  </p>
                  <div className="card-tags">
                    <span className="tag">Bordures</span>
                    <span className="tag">Marquage</span>
                    <span className="tag">Signalisation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Références - Gallery moderne */}
      <section className="references-section">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-tag">RÉALISATIONS</span>
            <h2 className="section-title-modern">
              Projets <span className="title-highlight">de Référence</span>
            </h2>
            <div className="section-divider-modern center"></div>
          </div>

          <div className="references-grid-modern">
            <div className="reference-card-modern">
              <div className="reference-image">
                <img src="/wp-content/uploads/2025/07/highway-3392100_1920.jpg" alt="Autoroute" />
                <div className="reference-overlay">
                  <span className="reference-tag">Autoroute</span>
                </div>
              </div>
              <div className="reference-content-modern">
                <h3 className="reference-title">Autoroute Est-Ouest</h3>
                <p className="reference-desc">Tronçon Alger-Oran (120 km) – Terrassement et chaussée</p>
                <a href="/projects" className="reference-link">
                  Voir le projet
                  <svg className="link-arrow" viewBox="0 0 448 512" width="12" height="12">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="reference-card-modern">
              <div className="reference-image">
                <img src="/wp-content/uploads/2025/07/road-construction.jpg" alt="Route Nationale" />
                <div className="reference-overlay">
                  <span className="reference-tag">Route Nationale</span>
                </div>
              </div>
              <div className="reference-content-modern">
                <h3 className="reference-title">Route Nationale RN1</h3>
                <p className="reference-desc">Réhabilitation 80 km – Couche de roulement et signalisation</p>
                <a href="/projects" className="reference-link">
                  Voir le projet
                  <svg className="link-arrow" viewBox="0 0 448 512" width="12" height="12">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="reference-card-modern">
              <div className="reference-image">
                <img src="/wp-content/uploads/2025/07/urban-road.jpg" alt="Voirie Urbaine" />
                <div className="reference-overlay">
                  <span className="reference-tag">Voirie Urbaine</span>
                </div>
              </div>
              <div className="reference-content-modern">
                <h3 className="reference-title">Voiries Ville Nouvelle</h3>
                <p className="reference-desc">Sidi Abdallah – 45 km voiries + VRD complets</p>
                <a href="/projects" className="reference-link">
                  Voir le projet
                  <svg className="link-arrow" viewBox="0 0 448 512" width="12" height="12">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <a href="/projects" className="btn btn-primary">
              <span>Voir tous nos projets</span>
              <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA - Moderne */}
      <section className="contact-cta-modern">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Un projet routier en perspective ?</h2>
              <p className="cta-description">
                Confiez-nous vos travaux d'infrastructures routières et bénéficiez de notre expertise reconnue depuis plus de 20 ans.
              </p>
            </div>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-white">
                <span>Demander un devis</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravauxRoutiers;
