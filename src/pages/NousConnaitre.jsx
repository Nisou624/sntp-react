import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './NousConnaitre.css';

const NousConnaitre = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll('.value-card, .stat-item, .mission-card, .value-item, .animate-on-scroll');
    
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Données de la timeline convertie en pages de livre
  const historyPages = [
    {
      year: '1970',
      title: 'Fondation de la SNTP',
      description: 'Création de la Société Nationale des Travaux Publics avec pour mission de participer au développement des infrastructures nationales.',
      image: null
    },
    {
      year: '1980',
      title: 'Expansion Nationale',
      description: 'Extension de nos activités à l\'ensemble du territoire national avec l\'ouverture de nouvelles agences régionales.',
      image: null
    },
    {
      year: '1990',
      title: 'Diversification',
      description: 'Diversification de nos activités avec l\'intégration de nouvelles compétences : génie civil, ouvrages d\'art, aménagements urbains.',
      image: null
    },
    {
      year: '2000',
      title: 'Modernisation',
      description: 'Modernisation de nos outils et méthodes de travail. Mise en place de systèmes de gestion qualité et certification ISO.',
      image: null
    },
    {
      year: '2010',
      title: 'Innovation et Excellence',
      description: 'Lancement de notre département R&D et adoption de solutions innovantes respectueuses de l\'environnement.',
      image: null
    },
    {
      year: '2020',
      title: 'Transformation Digitale',
      description: 'Digitalisation complète de nos processus avec l\'intégration du BIM et des outils de gestion collaboratifs.',
      image: null
    },
    {
      year: '2024',
      title: 'Vision d\'Avenir',
      description: 'Aujourd\'hui, la SNTP poursuit son développement avec une vision tournée vers l\'avenir : construction durable et smart cities.',
      image: null
    }
  ];

  // Valeurs pour les cartes (section Nos Valeurs)
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chacun de nos projets, en appliquant les meilleurs standards de qualité.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Innovation',
      description: 'L\'innovation est au cœur de notre stratégie. Nous investissons constamment dans les nouvelles technologies.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Engagement',
      description: 'Notre engagement envers nos clients, nos collaborateurs et la société est total.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Intégrité',
      description: 'L\'intégrité guide toutes nos actions. Nous respectons les normes éthiques les plus strictes.'
    }
  ];

  // Valeurs pour le FlipBook
  const valuesForBook = [
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chacun de nos projets, en appliquant les meilleurs standards de qualité.'
    },
    {
      title: 'Innovation',
      description: 'L\'innovation est au cœur de notre stratégie. Nous investissons constamment dans les nouvelles technologies.'
    },
    {
      title: 'Engagement',
      description: 'Notre engagement envers nos clients, nos collaborateurs et la société est total.'
    },
    {
      title: 'Intégrité',
      description: 'L\'intégrité guide toutes nos actions. Nous respectons les normes éthiques les plus strictes.'
    }
  ];

  // Statistiques
  const stats = [
    { number: '50+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Projets Réalisés' },
    { number: '2000+', label: 'Collaborateurs' },
    { number: '48', label: 'Wilayas Couvertes' }
  ];

  // Calculer le nombre total de pages
  const allPagesCount = 1 + historyPages.length + valuesForBook.length + 1 + 1; // Cover + History + Values + Stats + BackCover

  // Gestion du changement de page
  const onPageFlip = (e) => {
    setCurrentPage(e.data);
  };

  // Navigation vers la page précédente
  const goToPrevPage = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  // Navigation vers la page suivante
  const goToNextPage = () => {
    if (bookRef.current && currentPage < allPagesCount - 1) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  // Navigation vers une page spécifique
  const goToPage = (pageNumber) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNumber);
    }
  };

  // Initialisation du nombre total de pages
  useEffect(() => {
    setTotalPages(allPagesCount);
  }, [allPagesCount]);

  return (
    <div className="nos-engagements-page">
      {/* Hero Section */}
      <section className="engagements-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-label">Nos Engagements</p>
          <h1 className="hero-title">Vision, Valeurs & Histoire</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Plus de 50 ans d'excellence au service du développement</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="histoire-intro" id="histoire">
        <div className="container-narrow">
          <div className="intro-content">
            <h2 className="section-title">Un Héritage d'Excellence</h2>
            <div className="intro-text-wrapper">
              <p className="intro-text">
                Depuis sa création, la SNTP s'est imposée comme un acteur majeur du secteur de la 
                construction et des travaux publics en Algérie. Notre histoire est celle d'une 
                entreprise qui a su évoluer, innover et s'adapter aux défis de chaque époque.
              </p>
              <p className="intro-text">
                Au fil des décennies, nous avons participé à la construction des infrastructures 
                qui ont façonné le visage moderne de l'Algérie, contribuant ainsi au développement 
                économique et social du pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flip Book Section - REMPLACE LA TIMELINE */}
      <section className="flipbook-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre Parcours en Images</h2>
            <p className="section-subtitle">Feuilletez notre histoire à travers les décennies</p>
          </div>

          <div className="book-container">
            <HTMLFlipBook
              ref={bookRef}
              width={370}
              height={500}
              size="fixed"
              minWidth={315}
              maxWidth={1000}
              minHeight={420}
              maxHeight={1350}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="flipbook"
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
              onFlip={onPageFlip}
            >
              {/* Cover Page */}
              <div className="book-page cover-page">
                <div className="page-content">
                  <div className="cover-content">
                    <h1 className="cover-title">SNTP</h1>
                    <div className="cover-subtitle">Notre Histoire</div>
                    <div className="cover-year">1970 - 2024</div>
                    <div className="cover-decoration">
                      <svg viewBox="0 0 100 100" className="cover-icon">
                        <polygon points="50 5 95 25 50 45 5 25 50 5" fill="currentColor" opacity="0.3"/>
                        <polygon points="5 65 50 85 95 65" fill="currentColor" opacity="0.5"/>
                        <polygon points="5 40 50 60 95 40" fill="currentColor" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* History Pages */}
              {historyPages.map((page, index) => (
                <div className="book-page" key={index}>
                  <div className="page-content">
                    <div className="page-header">
                      <span className="page-year">{page.year}</span>
                      <div className="year-decoration"></div>
                    </div>
                    <div className="page-body">
                      <h3 className="page-title">{page.title}</h3>
                      <div className="page-divider"></div>
                      <p className="page-description">{page.description}</p>
                    </div>
                    <div className="page-footer">
                      <span className="page-number">{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Values Pages */}
              {valuesForBook.map((value, index) => (
                <div className="book-page value-page" key={`value-${index}`}>
                  <div className="page-content">
                    <div className="page-header">
                      <span className="page-label">Nos Valeurs</span>
                    </div>
                    <div className="page-body">
                      <div className="value-icon-large">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h3 className="page-title">{value.title}</h3>
                      <div className="page-divider"></div>
                      <p className="page-description">{value.description}</p>
                    </div>
                    <div className="page-footer">
                      <span className="page-number">{historyPages.length + index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Stats Page */}
              <div className="book-page stats-page">
                <div className="page-content">
                  <div className="page-header">
                    <span className="page-label">En Chiffres</span>
                  </div>
                  <div className="page-body">
                    <div className="stats-grid-book">
                      {stats.map((stat, index) => (
                        <div key={index} className="stat-item-book">
                          <div className="stat-number-book">{stat.number}</div>
                          <div className="stat-label-book">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="page-footer">
                    <span className="page-number">{historyPages.length + valuesForBook.length + 1}</span>
                  </div>
                </div>
              </div>

              {/* Back Cover */}
              <div className="book-page back-cover-page">
                <div className="page-content">
                  <div className="back-cover-content">
                    <h2 className="back-cover-title">Construire l'Avenir Ensemble</h2>
                    <p className="back-cover-text">
                      Plus de 50 ans d'excellence au service du développement des infrastructures en Algérie
                    </p>
                    <div className="back-cover-logo">SNTP</div>
                  </div>
                </div>
              </div>
            </HTMLFlipBook>

            {/* Navigation Controls */}
            <div className="flipbook-navigation">
              {/* Bouton Précédent */}
              <button
                className={`nav-button prev-button ${currentPage === 0 ? 'disabled' : ''}`}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
              >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span className="nav-text">Précédent</span>
              </button>

              {/* Indicateurs de pagination (points) */}
              <div className="pagination-dots">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentPage === index ? 'active' : ''}`}
                    onClick={() => goToPage(index)}
                    aria-label={`Aller à la page ${index + 1}`}
                  />
                ))}
              </div>

              {/* Bouton Suivant */}
              <button
                className={`nav-button next-button ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
              >
                <span className="nav-text">Suivant</span>
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - SECTION NOS VALEURS CONSERVÉE */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">Les principes qui guident notre action</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage-section">
        <div className="container">
          <div className="heritage-content">
            <div className="heritage-text">
              <h2 className="section-title">Un Héritage à Préserver</h2>
              <p className="heritage-paragraph">
                Notre histoire est riche d'enseignements et de réalisations qui font aujourd'hui 
                notre fierté. Chaque projet achevé, chaque infrastructure construite, chaque 
                innovation mise en œuvre contribue à bâtir notre héritage.
              </p>
              <p className="heritage-paragraph">
                Au-delà des réalisations matérielles, c'est avant tout un héritage humain 
                que nous cultivons : celui du savoir-faire, de la transmission des compétences, 
                de la passion du métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section section" id="vision">
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
                  et granir professionnellement.
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container-narrow">
          <div className="cta-content">
            <h2 className="cta-title">Construire l'Avenir Ensemble</h2>
            <p className="cta-text">
              Découvrez comment notre expérience et notre expertise peuvent donner vie à vos projets
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="cta-btn primary">Nos Projets</a>
              <a href="/nous-rejoindre" className="cta-btn secondary">Nous Rejoindre</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousConnaitre;
