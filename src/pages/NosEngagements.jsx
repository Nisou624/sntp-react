import React, { useState } from 'react';
import { 
  FaLeaf, 
  FaHandsHelping, 
  FaLightbulb, 
  FaShieldAlt, 
  FaAward, 
  FaCheckCircle, 
  FaArrowRight, 
  FaTimes 
} from 'react-icons/fa';
import './NosEngagements.css';

// Import des images de certification
import certifISO14001 from '../certifications/SNTP-NORME-ISO-9001-2015.jpg';
import certifISO45001 from '../certifications/SNTP-NORME-ISO-45001-2018.jpg';
import certifISO9001 from '../certifications/SNTP-NORME-ISO-9001-2015.jpg';

// Images de fond pour les cartes
import tunnelImage from '../images/tunnel-iso-14001.jpg';
import chantierImage from '../images/chantier-iso-45001.jpg';
import batimentImage from '../images/batiment-iso-9001.jpg';

const NosEngagements = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="NosEngagements-page">
      {/* Hero Section */}
      <section className="NosEngagements-engagements-hero">
        <div className="NosEngagements-hero-overlay"></div>
        <div className="NosEngagements-hero-content">
          <div className="NosEngagements-hero-subtitle">Nos Engagements</div>
          <h1 className="NosEngagements-hero-title">Notre Vision pour un Avenir Durable</h1>
          <p className="NosEngagements-hero-description">
            Excellence, Responsabilité et Innovation pour un avenir durable
          </p>
        </div>
      </section>

      {/* Section Environnement */}
      <section className="NosEngagements-engagement-section NosEngagements-environnement-section" id="environnement-section">
        <div className="container">
          <div className="NosEngagements-section-header">
            <FaLeaf className="NosEngagements-section-icon NosEngagements-env-icon" />
            <h2 className="NosEngagements-section-title">Engagement Environnemental</h2>
            <div className="NosEngagements-section-divider NosEngagements-env-divider"></div>
            <p className="NosEngagements-section-description">
              La SNTP s'engage à minimiser l'impact environnemental de ses activités de travaux publics 
              en intégrant les meilleures pratiques de gestion environnementale dans tous ses projets.
            </p>
          </div>

          <div className="NosEngagements-engagement-cards-grid">
            <div className="NosEngagements-engagement-card NosEngagements-env-card">
              <h3>Notre Vision Environnementale</h3>
              <p>
                Être un acteur majeur du développement durable en Algérie, en conciliant performance économique 
                et respect de l'environnement. Nous nous engageons à préserver les ressources naturelles pour 
                les générations futures tout en réalisant des infrastructures d'excellence.
              </p>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-env-card">
              <h3>Gestion des Déchets</h3>
              <p>
                <strong>Objectif :</strong> Mise en place d'une politique rigoureuse de tri, recyclage et 
                valorisation des déchets de chantier. Nous visons un taux de recyclage de 70% sur l'ensemble 
                de nos projets.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Tri sélectif systématique</li>
                <li><FaCheckCircle /> Partenariats avec centres de recyclage</li>
                <li><FaCheckCircle /> Valorisation énergétique</li>
              </ul>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-env-card">
              <h3>Réduction de l'Empreinte Carbone</h3>
              <p>
                Réduction de notre empreinte carbone par l'optimisation de la consommation énergétique et 
                l'utilisation d'énergies renouvelables.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Équipements éco-énergétiques</li>
                <li><FaCheckCircle /> Utilisation d'énergies renouvelables</li>
                <li><FaCheckCircle /> Optimisation des déplacements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section RSE */}
      <section className="NosEngagements-engagement-section NosEngagements-rse-section" id="rse-section">
        <div className="container">
          <div className="NosEngagements-section-header">
            <FaHandsHelping className="NosEngagements-section-icon NosEngagements-rse-icon" />
            <h2 className="NosEngagements-section-title">Responsabilité Sociétale</h2>
            <div className="NosEngagements-section-divider NosEngagements-rse-divider"></div>
            <p className="NosEngagements-section-description">
              La SNTP intègre la Responsabilité Sociétale des Entreprises au cœur de sa stratégie. Nous nous 
              engageons à créer un impact positif sur la société, l'économie locale et l'environnement.
            </p>
          </div>

          <div className="NosEngagements-engagement-cards-grid">
            <div className="NosEngagements-engagement-card NosEngagements-rse-card">
              <h3>Notre Mission Sociale</h3>
              <p>
                Contribuer au développement économique et social de l'Algérie en créant des emplois durables, 
                en formant les compétences locales et en soutenant les communautés dans lesquelles nous opérons.
              </p>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-rse-card">
              <h3>Développement des Compétences</h3>
              <p>
                <strong>Priorité :</strong> Nos collaborateurs sont notre principale richesse. Nous investissons 
                dans leur développement professionnel et personnel.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Programmes de formation continue</li>
                <li><FaCheckCircle /> Mobilité interne et évolution de carrière</li>
                <li><FaCheckCircle /> Certification professionnelle</li>
              </ul>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-rse-card">
              <h3>Soutien aux Communautés Locales</h3>
              <p>
                Nous favorisons le tissu économique local en privilégiant les partenariats avec les entreprises 
                algériennes.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Emploi local prioritaire</li>
                <li><FaCheckCircle /> Soutien aux PME algériennes</li>
                <li><FaCheckCircle /> Mécénat et actions solidaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Innovation */}
      <section className="NosEngagements-engagement-section NosEngagements-innovation-section" id="innovation-section">
        <div className="container">
          <div className="NosEngagements-section-header">
            <FaLightbulb className="NosEngagements-section-icon NosEngagements-innovation-icon" />
            <h2 className="NosEngagements-section-title">Innovation et Digitalisation</h2>
            <div className="NosEngagements-section-divider NosEngagements-innovation-divider"></div>
            <p className="NosEngagements-section-description">
              La SNTP place l'innovation au centre de sa stratégie de développement. Nous investissons dans les 
              technologies de pointe, les méthodes de construction innovantes et la digitalisation pour offrir 
              des infrastructures performantes, durables et économiques.
            </p>
          </div>

          <div className="NosEngagements-engagement-cards-grid">
            <div className="NosEngagements-engagement-card NosEngagements-innovation-card">
              <h3>Culture de l'Innovation</h3>
              <p>
                L'innovation n'est pas simplement une question de technologie, c'est une culture d'entreprise. 
                Chez SNTP, nous encourageons la créativité, l'expérimentation et l'amélioration continue. Chaque 
                collaborateur est invité à proposer des idées nouvelles pour optimiser nos processus.
              </p>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-innovation-card">
              <h3>Technologies Numériques</h3>
              <p>
                <strong>BIM, IA et IoT :</strong> Intégration du BIM (Building Information Modeling), drones de 
                surveillance, IoT pour le suivi des chantiers en temps réel et intelligence artificielle.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Modélisation 3D/BIM</li>
                <li><FaCheckCircle /> Drones de surveillance</li>
                <li><FaCheckCircle /> Capteurs IoT en temps réel</li>
              </ul>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-innovation-card">
              <h3>Équipements Modernes</h3>
              <p>
                Utilisation d'engins de dernière génération, électrification du parc d'engins, automatisation 
                et robotisation.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Engins électriques et hybrides</li>
                <li><FaCheckCircle /> Automatisation des process</li>
                <li><FaCheckCircle /> Maintenance prédictive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Santé et Sécurité */}
      <section className="NosEngagements-engagement-section NosEngagements-sante-section" id="sante-section">
        <div className="container">
          <div className="NosEngagements-section-header">
            <FaShieldAlt className="NosEngagements-section-icon NosEngagements-sante-icon" />
            <h2 className="NosEngagements-section-title">Santé et Sécurité au Travail</h2>
            <div className="NosEngagements-section-divider NosEngagements-sante-divider"></div>
            <p className="NosEngagements-section-description">
              La SNTP place la santé et la sécurité de ses collaborateurs au cœur de ses préoccupations. Chaque 
              jour, plus de 6 000 personnes travaillent sur nos chantiers. Notre responsabilité est de garantir 
              leur sécurité par une politique rigoureuse de prévention conforme à la norme ISO 45001:2018.
            </p>
          </div>

          <div className="NosEngagements-engagement-cards-grid">
            <div className="NosEngagements-engagement-card NosEngagements-sante-card">
              <h3>Objectif Zéro Accident</h3>
              <p>
                <strong>"Zéro accident est notre objectif permanent."</strong> Cette politique s'applique à tous 
                nos sites, projets et collaborateurs. Elle repose sur une culture de prévention, d'amélioration 
                continue et de responsabilité partagée.
              </p>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-sante-card">
              <h3>Prévention et Évaluation des Risques</h3>
              <p>
                Identification systématique des dangers, évaluation des risques et mise en place de mesures de 
                prévention adaptées.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Analyses de risques quotidiennes</li>
                <li><FaCheckCircle /> EPI conformes et obligatoires</li>
                <li><FaCheckCircle /> Audits sécurité réguliers</li>
              </ul>
            </div>

            <div className="NosEngagements-engagement-card NosEngagements-sante-card">
              <h3>Formation et Sensibilisation</h3>
              <p>
                Tous nos collaborateurs reçoivent des formations obligatoires en santé et sécurité.
              </p>
              <ul className="NosEngagements-card-list">
                <li><FaCheckCircle /> Formations HSCT obligatoires</li>
                <li><FaCheckCircle /> Exercices d'évacuation</li>
                <li><FaCheckCircle /> Campagnes de sensibilisation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Certifications ISO */}
      <section className="NosEngagements-iso-certifications-section">
        <div className="container">
          <div className="NosEngagements-certifications-header">
            <FaAward className="NosEngagements-certifications-icon" />
            <h2 className="NosEngagements-certifications-title">Nos Certifications ISO</h2>
            <div className="NosEngagements-certifications-divider"></div>
            <p className="NosEngagements-certifications-description">
              La Société Nationale des Travaux Publics est certifiée ISO 9001, 14001 et 45001, affirmant son 
              engagement pour la qualité, l'environnement et la sécurité à chaque étape de ses projets.
            </p>
          </div>

          <div className="NosEngagements-certifications-grid">
            {/* ISO 14001 */}
            <div className="NosEngagements-certification-card">
              <div 
                className="NosEngagements-certification-bg" 
                style={{ backgroundImage: `url(${tunnelImage})` }}
              ></div>
              <div className="NosEngagements-certification-overlay"></div>
              <div className="NosEngagements-certification-content">
                <div className="NosEngagements-certification-badge">ISO 14001:2015</div>
                <button 
                  className="NosEngagements-certification-button"
                  onClick={() => openModal(certifISO14001)}
                >
                  Voir le certificat <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ISO 45001 */}
            <div className="NosEngagements-certification-card">
              <div 
                className="NosEngagements-certification-bg" 
                style={{ backgroundImage: `url(${chantierImage})` }}
              ></div>
              <div className="NosEngagements-certification-overlay"></div>
              <div className="NosEngagements-certification-content">
                <div className="NosEngagements-certification-badge">ISO 45001:2018</div>
                <button 
                  className="NosEngagements-certification-button"
                  onClick={() => openModal(certifISO45001)}
                >
                  Voir le certificat <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="NosEngagements-certification-card">
              <div 
                className="NosEngagements-certification-bg" 
                style={{ backgroundImage: `url(${batimentImage})` }}
              ></div>
              <div className="NosEngagements-certification-overlay"></div>
              <div className="NosEngagements-certification-content">
                <div className="NosEngagements-certification-badge">ISO 9001:2015</div>
                <button 
                  className="NosEngagements-certification-button"
                  onClick={() => openModal(certifISO9001)}
                >
                  Voir le certificat <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {modalImage && (
        <div className="NosEngagements-certification-modal" onClick={closeModal}>
          <button className="NosEngagements-modal-close" onClick={closeModal}>
            <FaTimes />
          </button>
          <div className="NosEngagements-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificat ISO" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NosEngagements;

