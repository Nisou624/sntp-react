import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import { FaBuilding, FaRoad, FaTruck, FaHardHat, FaCogs, FaChartLine, FaIndustry, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className="Home-page">
      {/* Hero Section avec Carrousel */}
      <Hero />

      {/* Stats Overlap Section */}
      <section className="Home-stats-overlap-section">
        <div className="container">
          <div className="Home-stats-overlap-grid">
            <div className="Home-stat-overlap-card">
              <FaBuilding className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">500+</div>
                <div className="Home-stat-overlap-label">Projets réalisés</div>
              </div>
            </div>

            <div className="Home-stat-overlap-card">
              <FaChartLine className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">50+</div>
                <div className="Home-stat-overlap-label">Années d'expérience</div>
              </div>
            </div>

            <div className="Home-stat-overlap-card">
              <FaHardHat className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">2000+</div>
                <div className="Home-stat-overlap-label">Employés qualifiés</div>
              </div>
            </div>

            <div className="Home-stat-overlap-card">
              <FaIndustry className="Home-stat-overlap-icon" />
              <div className="Home-stat-overlap-content">
                <div className="Home-stat-overlap-number">15+</div>
                <div className="Home-stat-overlap-label">Wilayas couvertes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="Home-about-preview-section">
        <div className="container">
          <div className="Home-about-preview-grid">
            <div className="Home-about-preview-image">
              <img src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" alt="SNTP Projets" />
              <div className="Home-experience-badge">
                <div className="Home-experience-number">50+</div>
                <div className="Home-experience-text">Ans d'Excellence</div>
              </div>
            </div>

            <div className="Home-about-preview-content">
              <div className="Home-section-subtitle">Depuis 1967,</div>
              <h2 className="Home-section-title">Leader National des Travaux Publics</h2>
              <div className="Home-section-divider"></div>
              <p className="Home-about-preview-text">
                <strong>SNTP (Société Nationale des Travaux Publics)</strong> façonne le paysage infrastructurel algérien. 
                Acteur historique et leader national, nous conjuguons expertise technique, innovation et engagement social 
                pour bâtir des ouvrages qui résistent au temps et servent l'intérêt public.
              </p>

              <ul className="Home-about-features-list">
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Expertise reconnue depuis plus de 50 ans dans les infrastructures</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Équipements modernes et technologie de pointe</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Engagement qualité et respect des normes internationales</span>
                </li>
                <li>
                  <FaCheckCircle className="Home-check-icon" />
                  <span>Équipe d'ingénieurs qualifiés et expérimentés</span>
                </li>
              </ul>

              <Link to="/nous-connaitre" className="Home-btn-primary">
                Découvrir notre histoire
                <FaArrowRight className="Home-btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 4 Cartes */}
      <section className="Home-services-section">
        <div className="container">
          <div className="Home-section-header-center">
            <div className="Home-section-subtitle">Nos Expertises</div>
            <h2 className="Home-section-title">Quatre divisions complémentaires pour couvrir tous vos besoins en infrastructures</h2>
            <div className="Home-section-divider-center"></div>
          </div>

          <div className="Home-services-grid-four">
            {/* Service 1 - Génie Civil */}
            <Link to="/services/genie-civil" className="Home-service-card-modern">
              <div className="Home-service-card-image">
                <img src="/wp-content/uploads/2025/07/dean-bennett-aBV8pVODWiM-unsplash.jpg" alt="Génie Civil" />
                <div className="Home-service-card-overlay">
                  <FaCogs className="Home-service-card-icon-large" />
                </div>
              </div>
              <div className="Home-service-card-content">
                <FaCogs className="Home-service-card-icon" />
                <h3 className="Home-service-card-title">Génie Civil</h3>
                <div className="Home-service-card-divider"></div>
                <p className="Home-service-card-text">
                  Bureau d'études techniques : conception, dimensionnement, supervision selon normes internationales (Eurocodes, AASHTO).
                </p>
                <span className="Home-service-card-link">
                  En savoir plus
                  <FaArrowRight className="Home-service-arrow" />
                </span>
              </div>
            </Link>

            {/* Service 2 - Travaux Routiers */}
            <Link to="/services/travaux-routiers" className="Home-service-card-modern">
              <div className="Home-service-card-image">
                <img src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" alt="Travaux Routiers" />
                <div className="Home-service-card-overlay">
                  <FaRoad className="Home-service-card-icon-large" />
                </div>
              </div>
              <div className="Home-service-card-content">
                <FaRoad className="Home-service-card-icon" />
                <h3 className="Home-service-card-title">Travaux Routiers</h3>
                <div className="Home-service-card-divider"></div>
                <p className="Home-service-card-text">
                  Construction et réhabilitation : autoroutes, routes nationales, voiries urbaines. 1200+ km réalisés.
                </p>
                <span className="Home-service-card-link">
                  En savoir plus
                  <FaArrowRight className="Home-service-arrow" />
                </span>
              </div>
            </Link>

            {/* Service 3 - Location Matériel */}
            <Link to="/services/location-materiel" className="Home-service-card-modern">
              <div className="Home-service-card-image">
                <img src="/wp-content/uploads/2025/07/man-welding-metal-2880871.jpg" alt="Location Matériel" />
                <div className="Home-service-card-overlay">
                  <FaTruck className="Home-service-card-icon-large" />
                </div>
              </div>
              <div className="Home-service-card-content">
                <FaTruck className="Home-service-card-icon" />
                <h3 className="Home-service-card-title">Location Matériel</h3>
                <div className="Home-service-card-divider"></div>
                <p className="Home-service-card-text">
                  Parc moderne de 200+ engins : pelles, bulldozers, finisseurs, camions. Maintenance 24/7, disponibilité 98%.
                </p>
                <span className="Home-service-card-link">
                  En savoir plus
                  <FaArrowRight className="Home-service-arrow" />
                </span>
              </div>
            </Link>

            {/* Service 4 - Hydrauliques */}
            <Link to="/services/hydrauliques" className="Home-service-card-modern">
              <div className="Home-service-card-image">
                <img src="/wp-content/uploads/2025/07/portrait-of-chemical-engineer-3861445.jpg" alt="Hydrauliques" />
                <div className="Home-service-card-overlay">
                  <FaBuilding className="Home-service-card-icon-large" />
                </div>
              </div>
              <div className="Home-service-card-content">
                <FaBuilding className="Home-service-card-icon" />
                <h3 className="Home-service-card-title">ANABIBE</h3>
                <div className="Home-service-card-divider"></div>
                <p className="Home-service-card-text">
                  Agence Nationale des Barrages et Infrastructures de Base et d'Équipement. Expertise en ouvrages hydrauliques.
                </p>
                <span className="Home-service-card-link">
                  En savoir plus
                  <FaArrowRight className="Home-service-arrow" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="Home-projects-showcase-section">
        <div className="container">
          <div className="Home-section-header-center">
            <div className="Home-section-subtitle">Nos Réalisations</div>
            <h2 className="Home-section-title">Projets Phares</h2>
            <div className="Home-section-divider-center"></div>
          </div>

          <div className="Home-projects-grid-three">
            {/* Projet 1 */}
            <div className="Home-project-card-modern">
              <img src="/wp-content/uploads/2025/07/highway-3392100_1920.jpg" alt="Autoroute Est-Ouest" />
              <div className="Home-project-card-content">
                <h3 className="Home-project-card-title">Autoroute Est-Ouest</h3>
                <p className="Home-project-card-desc">Tronçon stratégique Alger-Oran (120 km)</p>
                <Link to="/projets" className="Home-project-card-link">
                  Voir le projet <FaArrowRight className="Home-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="Home-project-card-modern">
              <img src="/wp-content/uploads/2025/07/image-from-rawpixel-id-1364-jpeg.jpg" alt="Barrage Hydraulique" />
              <div className="Home-project-card-content">
                <h3 className="Home-project-card-title">Barrage Hydraulique</h3>
                <p className="Home-project-card-desc">Ouvrage hydraulique majeur (Bouira)</p>
                <Link to="/projets" className="Home-project-card-link">
                  Voir le projet <FaArrowRight className="Home-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="Home-project-card-modern">
              <img src="/wp-content/uploads/2025/07/portrait-of-chemical-engineer-3861445.jpg" alt="Bâtiments Industriels" />
              <div className="Home-project-card-content">
                <h3 className="Home-project-card-title">Bâtiments Industriels</h3>
                <p className="Home-project-card-desc">Extensions et modernisation VRD</p>
                <Link to="/projets" className="Home-project-card-link">
                  Voir le projet <FaArrowRight className="Home-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="Home-projects-cta-center">
            <Link to="/projets" className="Home-btn-primary">
              Voir tous nos projets
              <FaArrowRight className="Home-btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="Home-cta-section-home">
        <div className="container">
          <div className="Home-cta-content-home">
            <h2 className="Home-cta-title-home">Besoin d'un partenaire fiable pour vos projets d'infrastructure ?</h2>
            <p className="Home-cta-text-home">
              Confiez-nous vos travaux et bénéficiez de notre expertise reconnue depuis 50 ans
            </p>
            <Link to="/contact" className="Home-btn-white">
              Demander un devis gratuit
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

