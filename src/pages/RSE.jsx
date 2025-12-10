import React from 'react';
import { FaHandsHelping, FaUsers, FaGraduationCap, FaHeart, FaBuilding, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import './RSE.css';

const RSE = () => {
  return (
    <div className="rse-page">
      {/* Hero Section */}
      <section className="rse-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Notre Engagement Sociétal</div>
          <h1 className="hero-title">RESPONSABILITÉ SOCIÉTALE</h1>
          <p className="hero-description">
            Créer de la valeur partagée pour un développement durable et inclusif
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="rse-intro-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-icon">
              <FaHandsHelping />
            </div>
            <h2 className="section-title">Notre Démarche RSE</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              La SNTP intègre la Responsabilité Sociétale des Entreprises au cœur de sa stratégie. 
              Nous nous engageons à créer un impact positif sur la société, l'économie locale et 
              l'environnement, en accord avec les normes ISO 9001, ISO 14001 et ISO 45001.
            </p>
          </div>

          <div className="rse-vision-grid">
            <div className="vision-card">
              <h3>Notre Mission Sociétale</h3>
              <p>
                Contribuer au développement économique et social de l'Algérie en créant des 
                emplois durables, en formant les compétences locales et en soutenant les 
                communautés dans lesquelles nous opérons.
              </p>
            </div>
            <div className="vision-card">
              <h3>Nos Valeurs</h3>
              <p>
                Intégrité, respect, solidarité et excellence guident nos actions quotidiennes. 
                Nous croyons que la réussite économique doit s'accompagner d'un progrès social 
                et d'une préservation environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="rse-pillars-section">
        <div className="container">
          <h2 className="section-title text-center">Les Piliers de Notre RSE</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaUsers />
              </div>
              <h3>Capital Humain</h3>
              <p>
                Nos collaborateurs sont notre principale richesse. Nous investissons dans leur 
                développement professionnel et personnel.
              </p>
              <ul className="pillar-list">
                <li><FaCheckCircle /> Formation continue et développement des compétences</li>
                <li><FaCheckCircle /> Égalité des chances et diversité</li>
                <li><FaCheckCircle /> Conditions de travail optimales</li>
                <li><FaCheckCircle /> Dialogue social constructif</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaGraduationCap />
              </div>
              <h3>Éducation et Formation</h3>
              <p>
                Nous contribuons à l'éducation et à la formation professionnelle pour préparer 
                les talents de demain.
              </p>
              <ul className="pillar-list">
                <li><FaCheckCircle /> Partenariats avec les universités et écoles</li>
                <li><FaCheckCircle /> Programmes de stages et d'apprentissage</li>
                <li><FaCheckCircle /> Centre de formation interne SNTP</li>
                <li><FaCheckCircle /> Bourses d'études pour étudiants méritants</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaHeart />
              </div>
              <h3>Action Communautaire</h3>
              <p>
                Nous nous engageons auprès des communautés locales pour améliorer leur 
                qualité de vie et leur bien-être.
              </p>
              <ul className="pillar-list">
                <li><FaCheckCircle /> Projets d'infrastructures sociales</li>
                <li><FaCheckCircle /> Soutien aux initiatives locales</li>
                <li><FaCheckCircle /> Actions caritatives et solidaires</li>
                <li><FaCheckCircle /> Partenariats avec des ONG</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaBuilding />
              </div>
              <h3>Développement Économique Local</h3>
              <p>
                Nous favorisons le tissu économique local en privilégiant les partenariats 
                avec les entreprises algériennes.
              </p>
              <ul className="pillar-list">
                <li><FaCheckCircle /> Sous-traitance locale prioritaire</li>
                <li><FaCheckCircle /> Transfert de compétences</li>
                <li><FaCheckCircle /> Création d'emplois directs et indirects</li>
                <li><FaCheckCircle /> Soutien aux PME locales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="rse-actions-section">
        <div className="container">
          <h2 className="section-title text-center">Nos Actions Concrètes</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="actions-grid">
            <div className="action-item">
              <div className="action-number">01</div>
              <h3>Emploi et Insertion Professionnelle</h3>
              <p>
                La SNTP emploie plus de 6 000 collaborateurs permanents et crée des milliers 
                d'emplois indirects. Nous privilégions le recrutement local et offrons des 
                opportunités de carrière aux jeunes diplômés algériens.
              </p>
              <div className="action-stats">
                <div className="stat">
                  <span className="stat-number">6000+</span>
                  <span className="stat-label">Collaborateurs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">80%</span>
                  <span className="stat-label">Recrutement Local</span>
                </div>
              </div>
            </div>

            <div className="action-item">
              <div className="action-number">02</div>
              <h3>Formation et Développement des Compétences</h3>
              <p>
                Notre centre de formation SNTP Academy propose des programmes de formation 
                technique et managériale pour développer les compétences de nos collaborateurs 
                et des jeunes en insertion professionnelle.
              </p>
              <div className="action-stats">
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Heures de Formation/An</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Stagiaires/An</span>
                </div>
              </div>
            </div>

            <div className="action-item">
              <div className="action-number">03</div>
              <h3>Égalité et Diversité</h3>
              <p>
                Nous promouvons l'égalité des chances, la diversité et l'inclusion. Notre politique 
                RH garantit l'égalité de traitement, l'accès aux postes de responsabilité pour 
                tous et l'intégration des personnes en situation de handicap.
              </p>
            </div>

            <div className="action-item">
              <div className="action-number">04</div>
              <h3>Investissement dans les Infrastructures Sociales</h3>
              <p>
                Au-delà de nos projets commerciaux, nous réalisons des infrastructures sociales 
                (écoles, centres de santé, routes rurales) pour améliorer les conditions de vie 
                des populations locales.
              </p>
            </div>

            <div className="action-item">
              <div className="action-number">05</div>
              <h3>Dialogue et Transparence</h3>
              <p>
                Nous maintenons un dialogue constant avec toutes nos parties prenantes : 
                collaborateurs, clients, fournisseurs, autorités et communautés locales. 
                Nous publions un rapport RSE annuel pour assurer une transparence totale.
              </p>
            </div>

            <div className="action-item">
              <div className="action-number">06</div>
              <h3>Éthique et Gouvernance</h3>
              <p>
                Notre code d'éthique guide nos comportements et nos décisions. Nous appliquons 
                les principes de bonne gouvernance, de lutte contre la corruption et de 
                respect des droits humains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="rse-impact-section">
        <div className="container">
          <h2 className="section-title text-center">Notre Impact Sociétal</h2>
          <div className="section-divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="impact-container">
            <div className="impact-card">
              <FaLightbulb className="impact-icon" />
              <h3>Contribution au Développement National</h3>
              <p>
                Nos infrastructures de transport, hydrauliques et énergétiques contribuent 
                directement au développement économique et social de l'Algérie. Chaque projet 
                améliore la connectivité, l'accès aux services essentiels et la qualité de vie 
                des citoyens.
              </p>
            </div>

            <div className="impact-card">
              <FaUsers className="impact-icon" />
              <h3>Création d'Emplois Durables</h3>
              <p>
                En tant qu'un des plus grands employeurs du secteur des travaux publics en 
                Algérie, nous contribuons significativement à la réduction du chômage et au 
                développement des compétences locales.
              </p>
            </div>

            <div className="impact-card">
              <FaGraduationCap className="impact-icon" />
              <h3>Transfert de Savoir-Faire</h3>
              <p>
                À travers nos formations, nos projets et notre collaboration avec les 
                universités, nous transférons notre expertise technique et managériale aux 
                jeunes générations algériennes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rse-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Construisons Ensemble un Avenir Meilleur</h2>
            <p>
              La RSE est un engagement de tous les instants. Nous invitons nos partenaires, 
              fournisseurs et clients à partager nos valeurs et à contribuer avec nous à un 
              développement économique responsable et inclusif.
            </p>
            <div className="cta-buttons">
              <a href="/nous-rejoindre" className="btn-primary">Rejoignez-nous</a>
              <a href="/about-us" className="btn-secondary">Contactez-nous</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSE;

