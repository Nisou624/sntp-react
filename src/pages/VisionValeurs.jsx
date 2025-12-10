import React, { useEffect, useRef } from 'react';
import './VisionValeurs.css';

const VisionValeurs = () => {
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="vision-valeurs-page">
      {/* Hero Section */}
      <section className="vision-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Vision & Valeurs</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Construire l'avenir avec passion et excellence</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section section">
        <div className="container">
          <div className="vision-content animate-on-scroll">
            <div className="vision-text">
              <span className="vision-badge">Notre Vision</span>
              <h2 className="section-title">Bâtir un Avenir Durable</h2>
              <div className="section-divider"></div>
              <p className="vision-paragraph">
                Notre vision est de devenir le leader incontesté du secteur de la construction 
                et des travaux publics en Algérie, reconnu pour son innovation, son excellence 
                opérationnelle et son engagement envers le développement durable.
              </p>
              <p className="vision-paragraph">
                Nous aspirons à transformer le paysage urbain et rural algérien en réalisant 
                des infrastructures modernes, intelligentes et respectueuses de l'environnement. 
                Notre ambition est de contribuer activement à la construction d'une Algérie 
                prospère, connectée et durable pour les générations futures.
              </p>
              <p className="vision-paragraph">
                En combinant expertise technique, innovation technologique et responsabilité 
                sociale, nous visons à créer de la valeur pour toutes nos parties prenantes : 
                clients, collaborateurs, partenaires et la société dans son ensemble.
              </p>
            </div>
            <div className="vision-image">
              <div className="vision-image-wrapper">
                <div className="image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Notre Mission</span>
            <h2 className="section-title">Ce Qui Nous Guide</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Notre mission est de fournir des solutions de construction innovantes et durables 
              qui dépassent les attentes de nos clients
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card animate-on-scroll">
              <div className="mission-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="mission-title">Excellence Technique</h3>
              <p className="mission-text">
                Garantir la qualité et la durabilité de chacune de nos réalisations en 
                appliquant les meilleurs standards internationaux de construction.
              </p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="mission-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3 className="mission-title">Satisfaction Client</h3>
              <p className="mission-text">
                Placer nos clients au cœur de nos préoccupations en offrant un service 
                personnalisé, réactif et orienté vers leurs besoins spécifiques.
              </p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="mission-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="mission-title">Développement Durable</h3>
              <p className="mission-text">
                Intégrer les principes du développement durable dans tous nos projets pour 
                minimiser notre empreinte environnementale et sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Nos Valeurs Fondamentales</span>
            <h2 className="section-title">Les Piliers de Notre Succès</h2>
            <div className="section-divider"></div>
          </div>

          <div className="values-container">
            <div className="value-item animate-on-scroll">
              <div className="value-number">01</div>
              <div className="value-content">
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  Nous poursuivons l'excellence dans chaque aspect de notre travail, de la 
                  conception à la livraison finale. Notre engagement envers la qualité se 
                  reflète dans chaque détail de nos projets. Nous fixons des standards élevés 
                  et nous nous efforçons constamment de les dépasser.
                </p>
                <ul className="value-points">
                  <li>Standards de qualité internationaux</li>
                  <li>Processus rigoureux de contrôle qualité</li>
                  <li>Amélioration continue de nos pratiques</li>
                </ul>
              </div>
            </div>

            <div className="value-item animate-on-scroll">
              <div className="value-number">02</div>
              <div className="value-content">
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  L'innovation est au cœur de notre stratégie de développement. Nous investissons 
                  dans la recherche et le développement pour adopter les technologies les plus 
                  avancées et proposer des solutions créatives à nos clients.
                </p>
                <ul className="value-points">
                  <li>Adoption des dernières technologies BIM</li>
                  <li>Méthodes de construction innovantes</li>
                  <li>Solutions durables et écologiques</li>
                </ul>
              </div>
            </div>

            <div className="value-item animate-on-scroll">
              <div className="value-number">03</div>
              <div className="value-content">
                <h3 className="value-title">Intégrité</h3>
                <p className="value-description">
                  L'intégrité guide toutes nos décisions et actions. Nous opérons avec 
                  transparence, honnêteté et respect envers tous nos partenaires. Notre 
                  réputation repose sur la confiance que nous inspirons.
                </p>
                <ul className="value-points">
                  <li>Transparence dans nos relations</li>
                  <li>Respect des engagements contractuels</li>
                  <li>Éthique des affaires irréprochable</li>
                </ul>
              </div>
            </div>

            <div className="value-item animate-on-scroll">
              <div className="value-number">04</div>
              <div className="value-content">
                <h3 className="value-title">Sécurité</h3>
                <p className="value-description">
                  La sécurité de nos collaborateurs, de nos partenaires et du public est notre 
                  priorité absolue. Nous mettons en place des protocoles stricts et veillons à 
                  leur application rigoureuse sur tous nos chantiers.
                </p>
                <ul className="value-points">
                  <li>Politique zéro accident</li>
                  <li>Formation continue en sécurité</li>
                  <li>Équipements de protection modernes</li>
                </ul>
              </div>
            </div>

            <div className="value-item animate-on-scroll">
              <div className="value-number">05</div>
              <div className="value-content">
                <h3 className="value-title">Collaboration</h3>
                <p className="value-description">
                  Le travail d'équipe et la collaboration sont essentiels à notre réussite. 
                  Nous favorisons un environnement où chacun peut contribuer, partager ses idées 
                  et grandir professionnellement.
                </p>
                <ul className="value-points">
                  <li>Culture du travail d'équipe</li>
                  <li>Communication ouverte et transparente</li>
                  <li>Partenariats stratégiques durables</li>
                </ul>
              </div>
            </div>

            <div className="value-item animate-on-scroll">
              <div className="value-number">06</div>
              <div className="value-content">
                <h3 className="value-title">Responsabilité</h3>
                <p className="value-description">
                  Nous assumons pleinement nos responsabilités envers la société et 
                  l'environnement. Notre engagement va au-delà de la simple conformité 
                  réglementaire pour créer un impact positif durable.
                </p>
                <ul className="value-points">
                  <li>Engagement environnemental fort</li>
                  <li>Contribution au développement local</li>
                  <li>Projets sociaux et éducatifs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="commitments-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">Nos Engagements</span>
            <h2 className="section-title">Pour un Avenir Meilleur</h2>
            <div className="section-divider"></div>
          </div>

          <div className="commitments-grid">
            <div className="commitment-card animate-on-scroll">
              <div className="commitment-icon-wrapper">
                <div className="commitment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
              </div>
              <h3 className="commitment-title">Qualité & Performance</h3>
              <p className="commitment-text">
                Livrer des projets de haute qualité dans les délais impartis et selon les 
                budgets établis, tout en garantissant la satisfaction de nos clients.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll">
              <div className="commitment-icon-wrapper">
                <div className="commitment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
              <h3 className="commitment-title">Développement Humain</h3>
              <p className="commitment-text">
                Investir dans la formation et le développement de nos collaborateurs pour 
                créer un environnement de travail stimulant et épanouissant.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll">
              <div className="commitment-icon-wrapper">
                <div className="commitment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
              <h3 className="commitment-title">Protection Environnementale</h3>
              <p className="commitment-text">
                Minimiser notre impact environnemental en adoptant des pratiques de 
                construction durable et en favorisant l'économie circulaire.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll">
              <div className="commitment-icon-wrapper">
                <div className="commitment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <h3 className="commitment-title">Impact Social</h3>
              <p className="commitment-text">
                Contribuer au développement des communautés locales et créer des 
                opportunités d'emploi et de formation pour les jeunes talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Partagez Notre Vision</h2>
            <p className="cta-text">
              Rejoignez-nous dans notre mission de construire un avenir meilleur pour l'Algérie
            </p>
            <div className="cta-buttons">
              <a href="/nous-rejoindre" className="cta-btn primary">Rejoindre l'Équipe</a>
              <a href="/projects" className="cta-btn secondary">Découvrir Nos Projets</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionValeurs;
