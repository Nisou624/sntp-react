import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Histoire.css';

const Histoire = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  const values = [
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

  const stats = [
    { number: '50+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Projets Réalisés' },
    { number: '2000+', label: 'Collaborateurs' },
    { number: '48', label: 'Wilayas Couvertes' }
  ];

  // Calculer le nombre total de pages
  const allPagesCount = 1 + historyPages.length + values.length + 1 + 1; // Cover + History + Values + Stats + BackCover

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
  React.useEffect(() => {
    setTotalPages(allPagesCount);
  }, []);

  return (
    <div className="histoire-page">
      {/* Hero Section */}
      <section className="histoire-hero">
        <div className="hero-content">
          <p className="hero-label">Notre Histoire</p>
          <h1 className="hero-title">Plus de 50 ans d'excellence</h1>
          <div className="hero-scroll-indicator">
            <span className="scroll-line"></span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="histoire-intro">
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

      {/* Flip Book Section */}
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
              {values.map((value, index) => (
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
                    <span className="page-number">{historyPages.length + values.length + 1}</span>
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

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container-narrow">
          <div className="cta-content">
            <h2 className="cta-title">Construire l'Avenir Ensemble</h2>
            <p className="cta-text">
              Découvrez comment notre expérience et notre expertise peuvent donner vie à vos projets
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="cta-btn primary">Nos Projets</a>
              <a href="/contact" className="cta-btn secondary">Nous Contacter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Histoire;
