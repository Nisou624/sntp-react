import React from 'react';
import { FaShieldAlt, FaHardHat, FaFirstAid, FaAmbulance, FaAward, FaCheckCircle, FaExclamationTriangle, FaUserMd } from 'react-icons/fa';
import './SanteSecurite.css';

const SanteSecurite = () => {
  return (
    <div className="sante-securite-page">
      {/* Hero Section */}
      <section className="ss-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Notre Priorité Absolue</div>
          <h1 className="hero-title">SANTÉ & SÉCURITÉ</h1>
          <p className="hero-description">
            Zéro accident, zéro compromis : la sécurité de nos collaborateurs avant tout
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
              <h3>Certifiée ISO 45001:2018</h3>
              <p>Système de Management de la Santé et Sécurité au Travail conforme aux normes internationales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="ss-intro-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon">
              <FaShieldAlt />
            </div>
            <h2 className="section-title">Notre Engagement Santé et Sécurité</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              La SNTP place la santé et la sécurité de ses collaborateurs au cœur de ses préoccupations. 
              Chaque jour, plus de 6 000 personnes travaillent sur nos chantiers dans des conditions 
              exigeantes. Notre responsabilité est de garantir leur sécurité par une politique rigoureuse 
              de prévention, de formation et de contrôle conforme à la norme ISO 45001:2018.
            </p>
          </div>

          <div className="ss-policy-box">
            <h3>Notre Politique Santé et Sécurité</h3>
            <p>
              <strong>"Zéro accident est notre objectif permanent."</strong> Cette politique s'applique 
              à tous nos sites, projets et collaborateurs, qu'ils soient permanents, temporaires ou 
              sous-traitants. Elle repose sur une culture de prévention, d'amélioration continue et 
              de responsabilité partagée. Nous nous engageons à fournir les moyens humains, techniques 
              et financiers nécessaires pour atteindre cet objectif.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="ss-commitments-section">
        <div className="container">
          <h2 className="section-title text-center">Nos Engagements Sécurité</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="commitments-grid">
            <div className="commitment-card">
              <div className="commitment-icon">
                <FaHardHat />
              </div>
              <h3>Prévention des Risques</h3>
              <p>
                Identification systématique des dangers, évaluation des risques et mise en place de 
                mesures de prévention adaptées avant le démarrage de chaque chantier.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Analyse de risques pour chaque projet</li>
                <li><FaCheckCircle /> Plans de Prévention obligatoires</li>
                <li><FaCheckCircle /> Inspections régulières des chantiers</li>
                <li><FaCheckCircle /> Audits de sécurité indépendants</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaUserMd />
              </div>
              <h3>Formation et Sensibilisation</h3>
              <p>
                Tous nos collaborateurs reçoivent des formations obligatoires en santé et sécurité 
                adaptées à leurs fonctions et aux risques spécifiques de leur activité.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Formation initiale obligatoire</li>
                <li><FaCheckCircle /> Recyclages périodiques</li>
                <li><FaCheckCircle /> Sensibilisations sur les risques spécifiques</li>
                <li><FaCheckCircle /> Exercices d'évacuation et de secours</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaFirstAid />
              </div>
              <h3>Équipements de Protection</h3>
              <p>
                Fourniture gratuite et obligatoire d'équipements de protection individuelle (EPI) 
                conformes aux normes, adaptés aux risques et régulièrement renouvelés.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Casques, chaussures de sécurité, gants</li>
                <li><FaCheckCircle /> Harnais et systèmes antichute</li>
                <li><FaCheckCircle /> Protection respiratoire et auditive</li>
                <li><FaCheckCircle /> Vêtements haute visibilité</li>
              </ul>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <FaAmbulance />
              </div>
              <h3>Secours et Urgences</h3>
              <p>
                Dispositifs de secours opérationnels sur tous nos chantiers avec du personnel formé 
                aux premiers secours et des moyens d'intervention rapides.
              </p>
              <ul className="commitment-list">
                <li><FaCheckCircle /> Sauveteurs secouristes du travail (SST)</li>
                <li><FaCheckCircle /> Trousses de premiers secours</li>
                <li><FaCheckCircle /> Protocoles d'urgence définis</li>
                <li><FaCheckCircle /> Partenariats avec services de secours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 45001 Implementation Section */}
      <section className="iso-implementation-section">
        <div className="container">
          <h2 className="section-title text-center">Système de Management ISO 45001:2018</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="iso-features-grid">
            <div className="iso-feature">
              <div className="iso-feature-number">01</div>
              <h3>Leadership et Engagement</h3>
              <p>
                La Direction Générale de la SNTP s'engage personnellement dans la démarche sécurité. 
                Des objectifs clairs sont fixés et les moyens alloués. Chaque responsable de projet 
                est responsable de la sécurité sur son chantier.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">02</div>
              <h3>Planification et Évaluation des Risques</h3>
              <p>
                Identification systématique des dangers, évaluation des risques professionnels et 
                mise en place de mesures de maîtrise hiérarchisées selon les principes généraux de 
                prévention.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">03</div>
              <h3>Ressources et Compétences</h3>
              <p>
                Mise à disposition des ressources humaines qualifiées (responsables HSE, préventeurs, 
                SST), matérielles (EPI, équipements de sécurité) et financières pour garantir la sécurité.
              </p>
            </div>

            <div className="iso-feature">
              <div className="iso-feature-number">04</div>
              <h3>Surveillance et Mesure de la Performance</h3>
              <p>
                Indicateurs de performance sécurité (taux de fréquence, taux de gravité), audits 
                internes réguliers, revues de direction et amélioration continue du système.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="ss-measures-section">
        <div className="container">
          <h2 className="section-title text-center">Mesures de Sécurité sur nos Chantiers</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="measures-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <FaExclamationTriangle />
              </div>
              <div className="timeline-content">
                <h3>Avant le Démarrage des Travaux</h3>
                <ul>
                  <li>Visite préalable du site et identification des dangers</li>
                  <li>Rédaction du Plan Particulier de Sécurité et de Protection de la Santé (PPSPS)</li>
                  <li>Réunion de sécurité avec toutes les parties prenantes</li>
                  <li>Vérification de la conformité des équipements et engins</li>
                  <li>Installation de la signalisation et des protections collectives</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <FaHardHat />
              </div>
              <div className="timeline-content">
                <h3>Pendant l'Exécution des Travaux</h3>
                <ul>
                  <li>Causeries sécurité quotidiennes (quart d'heure sécurité)</li>
                  <li>Présence permanente de responsables HSE sur le chantier</li>
                  <li>Inspections régulières des installations et équipements</li>
                  <li>Contrôle du port des EPI et du respect des consignes</li>
                  <li>Surveillance médicale des travailleurs exposés</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <FaFirstAid />
              </div>
              <div className="timeline-content">
                <h3>Gestion des Incidents et Accidents</h3>
                <ul>
                  <li>Déclaration et enregistrement de tous les incidents/accidents</li>
                  <li>Analyse des causes profondes (méthode des 5 Pourquoi, Arbre des Causes)</li>
                  <li>Mise en place d'actions correctives et préventives</li>
                  <li>Partage d'expérience via des retours d'expérience (REX)</li>
                  <li>Suivi et vérification de l'efficacité des mesures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="ss-statistics-section">
        <div className="container">
          <h2 className="section-title text-center">Nos Indicateurs de Performance</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="statistics-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <FaAward />
              </div>
              <div className="stat-number">ISO 45001</div>
              <div className="stat-label">Certification Obtenue</div>
              <p>Système de management conforme aux meilleures pratiques internationales</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaUserMd />
              </div>
              <div className="stat-number">10 000+</div>
              <div className="stat-label">Heures de Formation/An</div>
              <p>Formation continue de nos collaborateurs aux bonnes pratiques de sécurité</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaShieldAlt />
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Chantiers Contrôlés</div>
              <p>Audits réguliers et inspections sur l'ensemble de nos sites</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaHardHat />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Responsables HSE</div>
              <p>Équipe dédiée à la santé et sécurité sur nos projets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="ss-culture-section">
        <div className="container">
          <h2 className="section-title text-center">Culture Sécurité à la SNTP</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="culture-content">
            <p>
              La sécurité n'est pas seulement une obligation réglementaire, c'est une valeur 
              fondamentale de notre entreprise. Nous cultivons une culture sécurité où chaque 
              collaborateur est acteur de sa propre sécurité et de celle de ses collègues.
            </p>

            <div className="culture-principles">
              <div className="principle">
                <h3>Droit de Retrait</h3>
                <p>
                  Tout collaborateur peut arrêter un travail s'il estime qu'il présente un danger 
                  grave et imminent pour sa santé ou sa sécurité. Aucune sanction ne sera prise.
                </p>
              </div>

              <div className="principle">
                <h3>Remontée d'Information</h3>
                <p>
                  Nous encourageons la remontée de toutes les situations dangereuses, presqu'accidents 
                  et suggestions d'amélioration via notre système de reporting.
                </p>
              </div>

              <div className="principle">
                <h3>Responsabilité Partagée</h3>
                <p>
                  La sécurité est l'affaire de tous. De la Direction aux opérateurs de terrain, 
                  chacun a un rôle à jouer dans la prévention des accidents.
                </p>
              </div>

              <div className="principle">
                <h3>Amélioration Continue</h3>
                <p>
                  Nous analysons chaque incident pour en tirer les leçons, partageons les bonnes 
                  pratiques et améliorons constamment nos procédures et équipements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="ss-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>La Sécurité est Notre Priorité</h2>
            <p>
              Chez SNTP, nous croyons fermement qu'aucun projet, aussi important soit-il, ne vaut 
              la vie ou la santé d'un collaborateur. Notre engagement pour la sécurité est total 
              et sans compromis. Ensemble, travaillons pour un avenir sans accident.
            </p>
            <div className="cta-buttons">
              <a href="/nous-rejoindre" className="btn-primary">Rejoignez une Entreprise Responsable</a>
              <a href="/about-us" className="btn-secondary">Contactez notre Service HSE</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SanteSecurite;

