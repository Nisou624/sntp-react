import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import { FaBuilding, FaRoad, FaTruck, FaHardHat, FaCogs, FaChartLine, FaIndustry } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Carrousel existant conservé */}
      <Hero />

      {/* Stats Section Overlapping - Exactement comme HTML statique */}
      <section className="stats-overlap-section">
        <div className="container">
          <div className="stats-overlap-grid">
            <div className="stat-overlap-card">
              <div className="stat-overlap-icon">
                <FaBuilding />
              </div>
              <div className="stat-overlap-content">
                <div className="stat-overlap-number" data-count="50">50+</div>
                <div className="stat-overlap-label">Années d'Expérience</div>
              </div>
            </div>
            
            <div className="stat-overlap-card">
              <div className="stat-overlap-icon">
                <FaRoad />
              </div>
              <div className="stat-overlap-content">
                <div className="stat-overlap-number" data-count="1200">1200+</div>
                <div className="stat-overlap-label">Kilomètres Construits</div>
              </div>
            </div>
            
            <div className="stat-overlap-card">
              <div className="stat-overlap-icon">
                <FaHardHat />
              </div>
              <div className="stat-overlap-content">
                <div className="stat-overlap-number" data-count="5000">5000+</div>
                <div className="stat-overlap-label">Employés Qualifiés</div>
              </div>
            </div>
            
            <div className="stat-overlap-card">
              <div className="stat-overlap-icon">
                <FaChartLine />
              </div>
              <div className="stat-overlap-content">
                <div className="stat-overlap-number" data-count="300">300+</div>
                <div className="stat-overlap-label">Projets Achevés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section - Comme HTML statique */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image">
              <img 
                src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" 
                alt="SNTP Construction" 
              />
              <div className="experience-badge">
                <div className="experience-number">50+</div>
                <div className="experience-text">Ans d'Excellence</div>
              </div>
            </div>
            
            <div className="about-preview-content">
              <h4 className="section-subtitle">QUI SOMMES-NOUS</h4>
              <h2 className="section-title">SNTP, Pionnier des Infrastructures Algériennes</h2>
              <div className="section-divider"></div>
              <p className="about-preview-text">
                Depuis 1967, <strong>SNTP (Société Nationale des Travaux Publics)</strong> façonne le paysage infrastructurel algérien. Acteur historique et leader national, nous conjuguons expertise technique, innovation et engagement social pour bâtir des ouvrages qui résistent au temps et servent l'intérêt public.
              </p>
              
              <ul className="about-features-list">
                <li>
                  <svg className="check-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  <span>Leader national en travaux publics depuis plus de 50 ans</span>
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  <span>Certifications ISO 9001, ISO 14001, ISO 45001</span>
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  <span>Parc matériel moderne : 200+ engins de dernière génération</span>
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="#FF5E14" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path>
                  </svg>
                  <span>5000+ employés qualifiés, 300+ projets d'envergure réalisés</span>
                </li>
              </ul>
              
              <Link to="/about" className="btn-primary">
                <span>En savoir plus</span>
                <svg className="btn-arrow" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 4 CARTES comme HTML statique */}
      <section className="services-section">
        <div className="container">
          <div className="section-header-center">
            <h4 className="section-subtitle">NOS ACTIVITÉS</h4>
            <h2 className="section-title">Nos Pôles d'Expertise</h2>
            <div className="section-divider-center"></div>
            <p className="section-description">
              Quatre divisions complémentaires pour couvrir tous vos besoins en infrastructures
            </p>
          </div>

          <div className="services-grid-four">
            {/* Service 1: SNTP ENGINEERING */}
            <Link to="/sntp-engineering" className="service-card-modern">
              <div className="service-card-image">
                <img 
                  src="/wp-content/uploads/2025/07/dean-bennett-aBV8pVODWiM-unsplash.jpg" 
                  alt="SNTP Engineering" 
                />
                <div className="service-card-overlay">
                  <FaCogs className="service-card-icon-large" />
                </div>
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">
                  <FaCogs />
                </div>
                <h3 className="service-card-title">SNTP ENGINEERING</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-text">
                  Bureau d'études techniques : conception, dimensionnement, supervision selon normes internationales (Eurocodes, AASHTO).
                </p>
                <div className="service-card-link">
                  <span>Découvrir</span>
                  <svg className="service-arrow" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 2: TRAVAUX ROUTIERS */}
            <Link to="/travaux-routiers" className="service-card-modern">
              <div className="service-card-image">
                <img 
                  src="/wp-content/uploads/2025/07/construction-workers-3682977_1920.jpg" 
                  alt="Travaux Routiers" 
                />
                <div className="service-card-overlay">
                  <FaRoad className="service-card-icon-large" />
                </div>
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">
                  <FaRoad />
                </div>
                <h3 className="service-card-title">TRAVAUX ROUTIERS</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-text">
                  Construction et réhabilitation : autoroutes, routes nationales, voiries urbaines. 1200+ km réalisés.
                </p>
                <div className="service-card-link">
                  <span>Découvrir</span>
                  <svg className="service-arrow" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 3: LOCATION DE MATÉRIEL */}
            <Link to="/location-materiel" className="service-card-modern">
              <div className="service-card-image">
                <img 
                  src="/wp-content/uploads/2025/07/man-welding-metal-2880871.jpg" 
                  alt="Location de Matériel" 
                />
                <div className="service-card-overlay">
                  <FaTruck className="service-card-icon-large" />
                </div>
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">
                  <FaTruck />
                </div>
                <h3 className="service-card-title">LOCATION DE MATÉRIEL</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-text">
                  Parc moderne de 200+ engins : pelles, bulldozers, finisseurs, camions. Maintenance 24/7, disponibilité 98%.
                </p>
                <div className="service-card-link">
                  <span>Découvrir</span>
                  <svg className="service-arrow" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 4: ANABIBE */}
            <Link to="/sntp-anabibe" className="service-card-modern">
              <div className="service-card-image">
                <img 
                  src="/wp-content/uploads/2025/07/portrait-of-chemical-engineer-3861445.jpg" 
                  alt="ANABIBE" 
                />
                <div className="service-card-overlay">
                  <FaIndustry className="service-card-icon-large" />
                </div>
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">
                  <FaIndustry />
                </div>
                <h3 className="service-card-title">ANABIBE</h3>
                <div className="service-card-divider"></div>
                <p className="service-card-text">
                  Agence Nationale des Barrages et Infrastructures de Base et d'Équipement. Expertise en ouvrages hydrauliques.
                </p>
                <div className="service-card-link">
                  <span>Découvrir</span>
                  <svg className="service-arrow" viewBox="0 0 448 512" width="14" height="14">
                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Comme HTML statique */}
      <section className="projects-showcase-section">
        <div className="container">
          <div className="section-header-center">
            <h4 className="section-subtitle">RÉALISATIONS</h4>
            <h2 className="section-title">Projets de Référence</h2>
            <div className="section-divider-center"></div>
          </div>

          <div className="projects-grid-three">
            <div className="project-card-modern">
              <img 
                src="/wp-content/uploads/2025/07/highway-3392100_1920.jpg" 
                alt="Autoroute Est-Ouest" 
              />
              <div className="project-card-content">
                <h3 className="project-card-title">Autoroute Est-Ouest</h3>
                <p className="project-card-desc">Tronçon stratégique Alger-Oran (120 km)</p>
                <Link to="/projets" className="project-card-link">
                  Voir le projet <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>

            <div className="project-card-modern">
              <img 
                src="/wp-content/uploads/2025/07/image-from-rawpixel-id-1364-jpeg.jpg" 
                alt="Barrage Koudiet Acerdoune" 
              />
              <div className="project-card-content">
                <h3 className="project-card-title">Barrage Koudiet Acerdoune</h3>
                <p className="project-card-desc">Ouvrage hydraulique majeur (Bouira)</p>
                <Link to="/projets" className="project-card-link">
                  Voir le projet <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>

            <div className="project-card-modern">
              <img 
                src="/wp-content/uploads/2025/07/portrait-of-chemical-engineer-3861445.jpg" 
                alt="Tramway d'Alger" 
              />
              <div className="project-card-content">
                <h3 className="project-card-title">Tramway d'Alger</h3>
                <p className="project-card-desc">Extensions et modernisation VRD</p>
                <Link to="/projets" className="project-card-link">
                  Voir le projet <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="projects-cta-center">
            <Link to="/projets" className="btn-primary">
              <span>Voir tous nos projets</span>
              <svg className="btn-arrow" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Comme HTML statique */}
      <section className="cta-section-home">
        <div className="cta-overlay-home"></div>
        <div className="container">
          <div className="cta-content-home">
            <h2 className="cta-title-home">Un Projet d'Infrastructure ?</h2>
            <p className="cta-text-home">
              Confiez-nous vos travaux et bénéficiez de notre expertise reconnue depuis 50 ans
            </p>
            <Link to="/contact" className="btn-white">
              <span>Demander un devis gratuit</span>
              <svg className="btn-arrow" viewBox="0 0 448 512" width="16" height="16">
                <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

