import React, { useState } from 'react';
import { FaLeaf, FaHandsHelping, FaLightbulb, FaShieldAlt, FaAward, FaCheckCircle, FaArrowRight, FaTimes } from 'react-icons/fa';
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
    <div className="nos-engagements-page">
      {/* Hero Section */}
      <section className="engagements-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Notre Engagement</div>
          <h1 className="hero-title">NOS ENGAGEMENTS</h1>
          <p className="hero-description">
            Excellence, Responsabilité et Innovation pour un avenir durable
          </p>
        </div>
      </section>

      {/* ENVIRONNEMENT SECTION */}
      <section className="engagement-section environnement-section" id="environnement-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon env-icon">
              <FaLeaf />
            </div>
            <h2 className="section-title">Environnement</h2>
            <div className="section-divider env-divider"></div>
            <p className="section-description">
              La SNTP s'engage à minimiser l'impact environnemental de ses activités de travaux publics 
              en intégrant les meilleures pratiques de gestion environnementale dans tous ses projets.
            </p>
          </div>

          <div className="engagement-cards-grid">
            <div className="engagement-card env-card">
              <h3>Notre Vision Environnementale</h3>
              <p>
                Être un acteur majeur du développement durable en Algérie, en conciliant performance 
                économique et respect de l'environnement. Nous nous engageons à préserver les ressources 
                naturelles pour les générations futures tout en réalisant des infrastructures d'excellence.
              </p>
            </div>

            <div className="engagement-card env-card">
              <h3>Gestion des Déchets</h3>
              <p>
                Mise en place d'une politique rigoureuse de tri, recyclage et valorisation des déchets 
                de chantier. Nous visons un taux de recyclage de 70% sur l'ensemble de nos projets.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Tri sélectif sur tous les chantiers</li>
                <li><FaCheckCircle /> Partenariats avec des centres de recyclage</li>
                <li><FaCheckCircle /> Réduction des déchets à la source</li>
              </ul>
            </div>

            <div className="engagement-card env-card">
              <h3>Efficacité Énergétique</h3>
              <p>
                Réduction de notre empreinte carbone par l'optimisation de la consommation énergétique 
                et l'utilisation d'énergies renouvelables.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Équipements économes en énergie</li>
                <li><FaCheckCircle /> Utilisation d'énergies renouvelables</li>
                <li><FaCheckCircle /> Optimisation des transports et logistique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RSE SECTION */}
      <section className="engagement-section rse-section" id="rse-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon rse-icon">
              <FaHandsHelping />
            </div>
            <h2 className="section-title">Responsabilité Sociétale</h2>
            <div className="section-divider rse-divider"></div>
            <p className="section-description">
              La SNTP intègre la Responsabilité Sociétale des Entreprises au cœur de sa stratégie. 
              Nous nous engageons à créer un impact positif sur la société, l'économie locale et 
              l'environnement.
            </p>
          </div>

          <div className="engagement-cards-grid">
            <div className="engagement-card rse-card">
              <h3>Notre Mission Sociétale</h3>
              <p>
                Contribuer au développement économique et social de l'Algérie en créant des 
                emplois durables, en formant les compétences locales et en soutenant les 
                communautés dans lesquelles nous opérons.
              </p>
            </div>

            <div className="engagement-card rse-card">
              <h3>Capital Humain</h3>
              <p>
                Nos collaborateurs sont notre principale richesse. Nous investissons dans leur 
                développement professionnel et personnel.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Formation continue et développement des compétences</li>
                <li><FaCheckCircle /> Égalité des chances et diversité</li>
                <li><FaCheckCircle /> Conditions de travail optimales</li>
                <li><FaCheckCircle /> Dialogue social constructif</li>
              </ul>
            </div>

            <div className="engagement-card rse-card">
              <h3>Développement Économique Local</h3>
              <p>
                Nous favorisons le tissu économique local en privilégiant les partenariats 
                avec les entreprises algériennes.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Sous-traitance locale prioritaire</li>
                <li><FaCheckCircle /> Transfert de compétences</li>
                <li><FaCheckCircle /> Création d'emplois directs et indirects</li>
                <li><FaCheckCircle /> Soutien aux PME locales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATION SECTION */}
      <section className="engagement-section innovation-section" id="innovation-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon innovation-icon">
              <FaLightbulb />
            </div>
            <h2 className="section-title">Innovation</h2>
            <div className="section-divider innovation-divider"></div>
            <p className="section-description">
              La SNTP place l'innovation au centre de sa stratégie de développement. Nous investissons 
              dans les technologies de pointe, les méthodes de construction innovantes et la digitalisation 
              pour offrir des infrastructures performantes, durables et économiques.
            </p>
          </div>

          <div className="engagement-cards-grid">
            <div className="engagement-card innovation-card">
              <h3>Notre Vision de l'Innovation</h3>
              <p>
                L'innovation n'est pas simplement une question de technologie, c'est une culture 
                d'entreprise. Chez SNTP, nous encourageons la créativité, l'expérimentation et 
                l'amélioration continue. Chaque collaborateur est invité à proposer des idées 
                nouvelles pour optimiser nos processus.
              </p>
            </div>

            <div className="engagement-card innovation-card">
              <h3>Technologies Numériques</h3>
              <p>
                Intégration du BIM (Building Information Modeling), drones de surveillance, 
                IoT pour le suivi des chantiers en temps réel et intelligence artificielle.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Modélisation 3D et BIM</li>
                <li><FaCheckCircle /> Plateformes collaboratives cloud</li>
                <li><FaCheckCircle /> Capteurs IoT sur les chantiers</li>
                <li><FaCheckCircle /> Intelligence artificielle prédictive</li>
              </ul>
            </div>

            <div className="engagement-card innovation-card">
              <h3>Équipements et Engins</h3>
              <p>
                Utilisation d'engins de dernière génération, électrification du parc d'engins, 
                automatisation et robotisation.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Engins électriques et hybrides</li>
                <li><FaCheckCircle /> Équipements automatisés</li>
                <li><FaCheckCircle /> Drones pour inspection et relevés</li>
                <li><FaCheckCircle /> Réalité augmentée pour la formation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SANTÉ & SÉCURITÉ SECTION */}
      <section className="engagement-section sante-section" id="sante-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon sante-icon">
              <FaShieldAlt />
            </div>
            <h2 className="section-title">Santé & Sécurité</h2>
            <div className="section-divider sante-divider"></div>
            <p className="section-description">
              La SNTP place la santé et la sécurité de ses collaborateurs au cœur de ses préoccupations. 
              Chaque jour, plus de 6 000 personnes travaillent sur nos chantiers. Notre responsabilité 
              est de garantir leur sécurité par une politique rigoureuse de prévention conforme à la 
              norme ISO 45001:2018.
            </p>
          </div>

          <div className="engagement-cards-grid">
            <div className="engagement-card sante-card">
              <h3>Notre Politique Santé et Sécurité</h3>
              <p>
                <strong>"Zéro accident est notre objectif permanent."</strong> Cette politique s'applique 
                à tous nos sites, projets et collaborateurs. Elle repose sur une culture de prévention, 
                d'amélioration continue et de responsabilité partagée.
              </p>
            </div>

            <div className="engagement-card sante-card">
              <h3>Prévention des Risques</h3>
              <p>
                Identification systématique des dangers, évaluation des risques et mise en place de 
                mesures de prévention adaptées.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Analyse de risques pour chaque projet</li>
                <li><FaCheckCircle /> Plans de Prévention obligatoires</li>
                <li><FaCheckCircle /> Inspections régulières des chantiers</li>
                <li><FaCheckCircle /> Audits de sécurité indépendants</li>
              </ul>
            </div>

            <div className="engagement-card sante-card">
              <h3>Formation et Sensibilisation</h3>
              <p>
                Tous nos collaborateurs reçoivent des formations obligatoires en santé et sécurité.
              </p>
              <ul className="card-list">
                <li><FaCheckCircle /> Formation initiale obligatoire</li>
                <li><FaCheckCircle /> Recyclages périodiques</li>
                <li><FaCheckCircle /> Sensibilisations sur les risques spécifiques</li>
                <li><FaCheckCircle /> Exercices d'évacuation et de secours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO CERTIFICATIONS SECTION - DESIGN 100% IDENTIQUE À L'ORIGINAL */}
      <section className="iso-certifications-section">
        <div className="container">
          <div className="certifications-header">
            <div className="certifications-icon">
              <FaAward />
            </div>
            <h2 className="certifications-title">Fiables, Sûrs Et De Qualité</h2>
            <div className="certifications-divider"></div>
            <p className="certifications-description">
              La Société Nationale des Travaux Publics est certifiée ISO 9001, 14001 et 45001, 
              affirmant son engagement pour la qualité, l'environnement et la sécurité à chaque 
              étape de ses projets.
            </p>
          </div>

          <div className="certifications-grid">
            {/* ISO 14001 */}
            <div className="certification-card iso-14001-card">
              <div 
                className="certification-bg" 
                style={{ backgroundImage: `url(${tunnelImage})` }}
              ></div>
              <div className="certification-overlay"></div>
              <div className="certification-content">
                <h3 className="certification-badge">Norme ISO 14001 - 2015</h3>
                <button 
                  className="certification-button"
                  onClick={() => openModal(certifISO14001)}
                >
                  <span>PLUS</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ISO 45001 */}
            <div className="certification-card iso-45001-card">
              <div 
                className="certification-bg" 
                style={{ backgroundImage: `url(${chantierImage})` }}
              ></div>
              <div className="certification-overlay"></div>
              <div className="certification-content">
                <h3 className="certification-badge">Norme ISO 45001 - 2018</h3>
                <button 
                  className="certification-button"
                  onClick={() => openModal(certifISO45001)}
                >
                  <span>PLUS</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* ISO 9001 */}
            <div className="certification-card iso-9001-card">
              <div 
                className="certification-bg" 
                style={{ backgroundImage: `url(${batimentImage})` }}
              ></div>
              <div className="certification-overlay"></div>
              <div className="certification-content">
                <h3 className="certification-badge">Norme ISO 9001 - 2015</h3>
                <button 
                  className="certification-button"
                  onClick={() => openModal(certifISO9001)}
                >
                  <span>PLUS</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL LIGHTBOX pour afficher les certificats en plein écran */}
      {modalImage && (
        <div className="certification-modal" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            <FaTimes />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certification" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NosEngagements;

