import React from 'react';
import { FaLeaf, FaRecycle, FaWater, FaSolarPanel, FaAward, FaCheckCircle } from 'react-icons/fa';
import './Environnement.css';

const Environnement = () => {
  return (
    <div className="environnement-page">
      {/* Hero Section */}
      <section className="env-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Notre Engagement</div>
          <h1 className="hero-title">ENVIRONNEMENT</h1>
          <p className="hero-description">
            Protection de l'environnement et développement durable au cœur de nos activités
          </p>
        </div>
      </section>

      {/* ISO Certification Banner */}
      <section className="iso-banner">
        <div className="container">
          <div className="iso-content">
            <div className="iso-icon">
              <FaAward />
            </div>
            <div className="iso-text">
              <h3>Certifiée ISO 14001:2015</h3>
              <p>Système de Management Environnemental conforme aux normes internationales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="env-intro-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon">
              <FaLeaf />
            </div>
            <h2 className="section-title">Notre Politique Environnementale</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              La SNTP s'engage à minimiser l'impact environnemental de ses activités de travaux publics 
              en intégrant les meilleures pratiques de gestion environnementale dans tous ses projets.
            </p>
          </div>

          <div className="env-vision-box">
            <h3>Notre Vision</h3>
            <p>
              Être un acteur majeur du développement durable en Algérie, en conciliant performance 
              économique et respect de l'environnement. Nous nous engageons à préserver les ressources 
              naturelles pour les générations futures tout en réalisant des infrastructures d'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="env-commitments-section">
        <div className="container">
          <h2 className="section-title text-center">Nos Engagements Environnementaux</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>
          
          <div className="commitments-grid">
            <div className="commitment-card">
              <div className="commitment-icon">
                <FaRecycle />
              </div>
              <h3>Gestion des Déchets</h3>
              <p>
                Mise en place d'une politique rigoureuse de tri, recyclage et valorisation des déchets 
                de chantier. Nous visons un taux de recyclage de 70% sur l'ensemble de nos projets.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Tri sélectif sur tous les chantiers</li>
                <li><FaCheckCircle /> Partenariats avec des centres de recyclage</li>
                <li><FaCheckCircle /> Réduction des déchets à la source</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaWater />
              </div>
              <h3>Préservation des Ressources en Eau</h3>
              <p>
                Optimisation de la consommation d'eau sur nos chantiers et protection des ressources 
                hydriques locales par des systèmes de traitement et de recyclage.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Systèmes de recyclage des eaux de chantier</li>
                <li><FaCheckCircle /> Protection des nappes phréatiques</li>
                <li><FaCheckCircle /> Contrôle de la qualité des rejets</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaSolarPanel />
              </div>
              <h3>Efficacité Énergétique</h3>
              <p>
                Réduction de notre empreinte carbone par l'optimisation de la consommation énergétique 
                et l'utilisation d'énergies renouvelables.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Équipements économes en énergie</li>
                <li><FaCheckCircle /> Utilisation d'énergies renouvelables</li>
                <li><FaCheckCircle /> Optimisation des transports et logistique</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaLeaf />
              </div>
              <h3>Protection de la Biodiversité</h3>
              <p>
                Études d'impact environnemental préalables et mesures de protection des écosystèmes 
                lors de la réalisation de nos infrastructures.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Études d'impact systématiques</li>
                <li><FaCheckCircle /> Mesures compensatoires</li>
                <li><FaCheckCircle /> Revegetation des sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 14001 Implementation Section */}
      <section className="iso-implementation-section">
        <div className="container">
          <h2 className="section-title text-center">Système de Management ISO 14001:2015</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="iso-features-grid">
            <div className="iso-feature">
              <div className="iso-feature-number">01</div>
              <h3>Identification des Aspects Environnementaux</h3>
              <p>
                Analyse systématique des impacts environnementaux de nos activités pour chaque projet, 
                permettant une gestion proactive des risques.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">02</div>
              <h3>Conformité Réglementaire</h3>
              <p>
                Veille réglementaire constante et respect strict de la législation environnementale 
                algérienne et des normes internationales.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">03</div>
              <h3>Objectifs et Indicateurs</h3>
              <p>
                Définition d'objectifs environnementaux mesurables et suivi d'indicateurs de performance 
                pour une amélioration continue.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">04</div>
              <h3>Formation et Sensibilisation</h3>
              <p>
                Programme de formation continue pour tous nos collaborateurs sur les enjeux 
                environnementaux et les bonnes pratiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="env-actions-section">
        <div className="container">
          <h2 className="section-title text-center">Actions Concrètes</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="actions-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Matériaux Écologiques</h3>
                <p>
                  Utilisation privilégiée de matériaux recyclés et éco-responsables. Nous favorisons 
                  les circuits courts et les matériaux locaux pour réduire l'empreinte carbone du transport.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Réduction des Émissions</h3>
                <p>
                  Plan de réduction progressive des émissions de CO2 avec renouvellement du parc 
                  d'engins vers des technologies moins polluantes et optimisation des déplacements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Compensation Carbone</h3>
                <p>
                  Programmes de reboisement et projets de compensation carbone pour neutraliser 
                  l'impact environnemental de nos activités.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Audits Environnementaux</h3>
                <p>
                  Audits réguliers par des organismes indépendants pour garantir la conformité et 
                  l'amélioration continue de notre système de management environnemental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="env-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ensemble pour un Avenir Durable</h2>
            <p>
              La protection de l'environnement est l'affaire de tous. La SNTP s'engage quotidiennement 
              à minimiser son impact environnemental et invite ses partenaires, clients et collaborateurs 
              à partager cette vision d'un développement responsable.
            </p>
            <div className="cta-buttons">
              <a href="/about-us" className="btn-primary">Contactez-nous</a>
              <a href="/projects" className="btn-secondary">Nos Réalisations Durables</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Environnement;

