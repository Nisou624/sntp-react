import React from 'react';
import { FaLightbulb, FaRocket, FaCogs, FaChartLine, FaMicrochip, FaAward, FaCheckCircle, FaUsers } from 'react-icons/fa';
import './Innovation.css';

const Innovation = () => {
  return (
    <div className="innovation-page">
      {/* Hero Section */}
      <section className="innovation-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Notre Force Motrice</div>
          <h1 className="hero-title">INNOVATION</h1>
          <p className="hero-description">
            Transformer les défis d'aujourd'hui en solutions de demain
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="innovation-intro-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon">
              <FaLightbulb />
            </div>
            <h2 className="section-title">L'Innovation au Cœur de Notre Stratégie</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Dans un secteur en constante évolution, la SNTP place l'innovation au centre de sa 
              stratégie de développement. Nous investissons dans les technologies de pointe, les 
              méthodes de construction innovantes et la digitalisation pour offrir des 
              infrastructures performantes, durables et économiques.
            </p>
          </div>

          <div className="innovation-manifesto">
            <h3>Notre Vision de l'Innovation</h3>
            <p>
              L'innovation n'est pas simplement une question de technologie, c'est une culture 
              d'entreprise. Chez SNTP, nous encourageons la créativité, l'expérimentation et 
              l'amélioration continue. Chaque collaborateur est invité à proposer des idées 
              nouvelles pour optimiser nos processus, réduire nos coûts et améliorer la qualité 
              de nos réalisations.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Domains Section */}
      <section className="innovation-domains-section">
        <div className="container">
          <h2 className="section-title text-center">Domaines d'Innovation</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="domains-grid">
            <div className="domain-card">
              <div className="domain-icon">
                <FaMicrochip />
              </div>
              <h3>Technologies Numériques</h3>
              <p>
                Intégration du BIM (Building Information Modeling), drones de surveillance, 
                IoT pour le suivi des chantiers en temps réel et intelligence artificielle 
                pour la prédiction et l'optimisation.
              </p>
              <ul className="domain-list">
                <li><FaCheckCircle /> Modélisation 3D et BIM</li>
                <li><FaCheckCircle /> Plateformes collaboratives cloud</li>
                <li><FaCheckCircle /> Capteurs IoT sur les chantiers</li>
                <li><FaCheckCircle /> Intelligence artificielle prédictive</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">
                <FaCogs />
              </div>
              <h3>Techniques de Construction</h3>
              <p>
                Adoption de méthodes constructives innovantes : préfabrication, construction 
                modulaire, bétons haute performance et matériaux composites pour des 
                infrastructures plus durables.
              </p>
              <ul className="domain-list">
                <li><FaCheckCircle /> Préfabrication avancée</li>
                <li><FaCheckCircle /> Bétons autoplaçants et ultra-performants</li>
                <li><FaCheckCircle /> Matériaux composites innovants</li>
                <li><FaCheckCircle /> Techniques de renforcement structurel</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">
                <FaRocket />
              </div>
              <h3>Équipements et Engins</h3>
              <p>
                Utilisation d'engins de dernière génération, électrification du parc d'engins, 
                automatisation et robotisation pour améliorer la productivité et la sécurité.
              </p>
              <ul className="domain-list">
                <li><FaCheckCircle /> Engins électriques et hybrides</li>
                <li><FaCheckCircle /> Équipements automatisés</li>
                <li><FaCheckCircle /> Drones pour inspection et relevés</li>
                <li><FaCheckCircle /> Réalité augmentée pour la formation</li>
              </ul>
            </div>

            <div className="domain-card">
              <div className="domain-icon">
                <FaChartLine />
              </div>
              <h3>Management et Gestion</h3>
              <p>
                Digitalisation des processus administratifs, systèmes de gestion intégrés (ERP), 
                tableaux de bord en temps réel et outils d'analyse décisionnelle.
              </p>
              <ul className="domain-list">
                <li><FaCheckCircle /> ERP intégré pour la gestion globale</li>
                <li><FaCheckCircle /> Tableaux de bord dynamiques</li>
                <li><FaCheckCircle /> Big Data et analytics</li>
                <li><FaCheckCircle /> Gestion électronique des documents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="innovation-projects-section">
        <div className="container">
          <h2 className="section-title text-center">Projets Innovants</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="projects-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Plateforme Digitale de Gestion de Projets</h3>
                <p>
                  Déploiement d'une plateforme collaborative permettant le suivi en temps réel de 
                  tous nos chantiers, l'optimisation des ressources et la communication instantanée 
                  entre équipes terrain et siège. Cette solution intègre le BIM, le planning 
                  dynamique et les indicateurs de performance.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Centre d'Innovation SNTP</h3>
                <p>
                  Création d'un centre de R&D dédié à l'expérimentation de nouvelles technologies 
                  et méthodes constructives. Ce centre collabore avec les universités algériennes 
                  et les instituts de recherche internationaux.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Parc d'Engins Électriques</h3>
                <p>
                  Acquisition des premiers engins de chantier électriques et hybrides, réduisant 
                  significativement nos émissions de CO2 et nos coûts opérationnels. Objectif : 
                  30% du parc électrifié d'ici 2026.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>BIM et Maquette Numérique</h3>
                <p>
                  Généralisation du BIM sur tous les projets complexes, permettant une conception 
                  collaborative, la détection des conflits avant construction et l'optimisation 
                  des coûts. Nos équipes sont formées aux outils Autodesk Revit, Tekla et Navisworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="innovation-partnerships-section">
        <div className="container">
          <div className="partnerships-header text-center">
            <FaUsers className="partnerships-icon" />
            <h2 className="section-title">Partenariats et Collaboration</h2>
            <div className="section-divider" style={{ margin: '0 auto 2rem' }}></div>
            <p className="section-description">
              L'innovation se construit ensemble. La SNTP collabore activement avec des 
              partenaires stratégiques pour accélérer notre transformation digitale.
            </p>
          </div>

          <div className="partnerships-grid">
            <div className="partnership-card">
              <h3>Universités et Écoles d'Ingénieurs</h3>
              <p>
                Collaborations avec l'École Nationale Polytechnique, l'Université des Sciences 
                et de la Technologie Houari Boumediene et d'autres établissements pour des 
                projets de recherche appliquée, accueil de stagiaires et échanges de compétences.
              </p>
            </div>

            <div className="partnership-card">
              <h3>Entreprises Technologiques</h3>
              <p>
                Partenariats avec des leaders technologiques (Autodesk, Microsoft, Trimble, etc.) 
                pour l'intégration de solutions innovantes et la formation de nos équipes aux 
                dernières technologies.
              </p>
            </div>

            <div className="partnership-card">
              <h3>Start-ups et PME Innovantes</h3>
              <p>
                Soutien à l'écosystème entrepreneurial algérien en collaborant avec des start-ups 
                locales dans les domaines de la construction tech, de l'IoT et de l'IA appliquée 
                aux travaux publics.
              </p>
            </div>

            <div className="partnership-card">
              <h3>Centres de Recherche</h3>
              <p>
                Collaboration avec des centres de recherche nationaux et internationaux pour 
                développer des solutions adaptées aux spécificités du climat, du sol et des 
                matériaux algériens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Culture Section */}
      <section className="innovation-culture-section">
        <div className="container">
          <h2 className="section-title text-center">Culture de l'Innovation</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="culture-features">
            <div className="culture-feature">
              <div className="culture-icon">
                <FaAward />
              </div>
              <h3>Programme d'Idées Innovantes</h3>
              <p>
                Tous nos collaborateurs peuvent soumettre des idées d'amélioration via notre 
                plateforme interne. Les meilleures idées sont récompensées et mises en œuvre 
                rapidement.
              </p>
            </div>

            <div className="culture-feature">
              <div className="culture-icon">
                <FaUsers />
              </div>
              <h3>Ateliers d'Innovation</h3>
              <p>
                Organisation régulière de hackathons, design thinking workshops et sessions de 
                brainstorming pour stimuler la créativité et co-créer des solutions innovantes.
              </p>
            </div>

            <div className="culture-feature">
              <div className="culture-icon">
                <FaChartLine />
              </div>
              <h3>Veille Technologique</h3>
              <p>
                Cellule dédiée à la veille sur les innovations mondiales dans le BTP, participation 
                aux salons internationaux et benchmarking avec les meilleures pratiques du secteur.
              </p>
            </div>

            <div className="culture-feature">
              <div className="culture-icon">
                <FaLightbulb />
              </div>
              <h3>Formation Continue</h3>
              <p>
                Programmes de formation réguliers sur les nouvelles technologies, méthodes et 
                outils pour maintenir nos équipes à la pointe de l'innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="innovation-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Innovons Ensemble</h2>
            <p>
              L'innovation est un voyage collectif. Que vous soyez un chercheur, un entrepreneur, 
              un étudiant ou un partenaire, nous sommes ouverts à toute collaboration qui peut 
              faire avancer le secteur des travaux publics en Algérie.
            </p>
            <div className="cta-buttons">
              <a href="/nous-rejoindre" className="btn-primary">Rejoignez notre équipe R&D</a>
              <a href="/about-us" className="btn-secondary">Proposez un partenariat</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;

