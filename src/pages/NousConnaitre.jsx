import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { 
  FaLightbulb, 
  FaHandshake, 
  FaShieldAlt, 
  FaTrophy,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding
} from 'react-icons/fa';
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
          entry.target.classList.add('NousConnaitre-animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll(
      '.NousConnaitre-value-card, .NousConnaitre-stat-item, .NousConnaitre-mission-card, .NousConnaitre-value-item, .NousConnaitre-animate-on-scroll'
    );
    
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Données de la timeline convertie en pages de livre
  const historyPages = [
    {
      year: '1967',
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

  // Valeurs pour le FlipBook
  const valuesForBook = [
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chacun de nos projets, en appliquant les meilleurs standards de qualité.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'L\'innovation est au cœur de notre stratégie. Nous investissons constamment dans les nouvelles technologies.'
    },
    {
      icon: <FaHandshake />,
      title: 'Engagement',
      description: 'Notre engagement envers nos clients, nos collaborateurs et la société est total.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Intégrité',
      description: 'L\'intégrité guide toutes nos actions. Nous respectons les normes éthiques les plus strictes.'
    }
  ];

  // Statistiques
  const stats = [
    { number: '50+', label: 'Années d\'Expérience' },
    { number: '500+', label: 'Projets Réalisés' },
    { number: '2000+', label: 'Collaborateurs' },
    { number: '15', label: 'Wilayas Couvertes' }
  ];

  // Calculer le nombre total de pages
  const allPagesCount = 1 + historyPages.length + valuesForBook.length + 1 + 1;

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
    <div className="NousConnaitre-nos-engagements-page">
      {/* Hero Section */}
      <section className="NousConnaitre-engagements-hero">
        <div className="NousConnaitre-hero-overlay"></div>
        <div className="NousConnaitre-hero-content">
          <div className="NousConnaitre-hero-label">SNTP - Depuis 1967</div>
          <h1 className="NousConnaitre-hero-title">Nos Engagements</h1>
          <div className="NousConnaitre-hero-divider"></div>
          <p className="NousConnaitre-hero-subtitle">
            Plus de 50 ans d'excellence au service du développement
          </p>
        </div>
      </section>

      {/* Histoire Intro Section */}
      <section className="NousConnaitre-histoire-intro NousConnaitre-section" id="histoire">
        <div className="container">
          <div className="NousConnaitre-intro-content">
            <div className="NousConnaitre-section-header">
              <span className="NousConnaitre-section-badge">Notre Histoire</span>
              <h2 className="NousConnaitre-section-title">
                Plus de 50 ans d'excellence au service du développement
              </h2>
              <div className="NousConnaitre-section-divider"></div>
            </div>

            <div className="NousConnaitre-intro-text-wrapper">
              <p className="NousConnaitre-intro-text">
                Depuis sa création en 1967, la <strong>SNTP</strong> s'est imposée comme un acteur majeur 
                du secteur de la construction et des travaux publics en Algérie. Notre histoire est celle 
                d'une entreprise qui a su évoluer, innover et s'adapter aux défis de chaque époque.
              </p>
              <p className="NousConnaitre-intro-text">
                Au fil des décennies, nous avons participé à la construction des infrastructures qui ont 
                façonné le visage moderne de l'Algérie, contribuant ainsi au développement économique et 
                social du pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FlipBook Section */}
      <section className="NousConnaitre-flipbook-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <h2 className="NousConnaitre-section-title">Feuilletez notre histoire à travers les décennies</h2>
            <p className="NousConnaitre-section-subtitle">
              Découvrez les moments clés qui ont façonné notre parcours
            </p>
          </div>

          <div className="NousConnaitre-book-container">
            <HTMLFlipBook
              ref={bookRef}
              width={450}
              height={600}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onPageFlip}
              className="NousConnaitre-flipbook"
              style={{}}
            >
              {/* Cover Page */}
              <div className="NousConnaitre-book-page NousConnaitre-cover-page">
                <div className="NousConnaitre-cover-content">
                  <h1 className="NousConnaitre-cover-title">SNTP</h1>
                  <p className="NousConnaitre-cover-subtitle">Notre Histoire</p>
                  <p className="NousConnaitre-cover-year">1967 - 2024</p>
                  <div className="NousConnaitre-cover-decoration">
                    <FaBuilding className="NousConnaitre-cover-icon" />
                  </div>
                </div>
              </div>

              {/* History Pages */}
              {historyPages.map((page, index) => (
                <div key={`history-${index}`} className="NousConnaitre-book-page">
                  <div className="NousConnaitre-page-content">
                    <div className="NousConnaitre-page-header">
                      <div className="NousConnaitre-page-year">{page.year}</div>
                      <div className="NousConnaitre-year-decoration"></div>
                    </div>
                    <div className="NousConnaitre-page-body">
                      <h3 className="NousConnaitre-page-title">{page.title}</h3>
                      <div className="NousConnaitre-page-divider"></div>
                      <p className="NousConnaitre-page-description">{page.description}</p>
                    </div>
                    <div className="NousConnaitre-page-footer">
                      <span className="NousConnaitre-page-number">Page {index + 2}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Values Pages */}
              {valuesForBook.map((value, index) => (
                <div key={`value-${index}`} className="NousConnaitre-book-page NousConnaitre-value-page">
                  <div className="NousConnaitre-page-content">
                    <div className="NousConnaitre-page-header">
                      <span className="NousConnaitre-page-label">Nos Valeurs</span>
                      <div className="NousConnaitre-year-decoration"></div>
                    </div>
                    <div className="NousConnaitre-page-body">
                      <div className="NousConnaitre-value-icon-large">
                        {value.icon}
                      </div>
                      <h3 className="NousConnaitre-page-title">{value.title}</h3>
                      <div className="NousConnaitre-page-divider"></div>
                      <p className="NousConnaitre-page-description">{value.description}</p>
                    </div>
                    <div className="NousConnaitre-page-footer">
                      <span className="NousConnaitre-page-number">Page {historyPages.length + index + 2}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Stats Page */}
              <div className="NousConnaitre-book-page NousConnaitre-stats-page">
                <div className="NousConnaitre-page-content">
                  <div className="NousConnaitre-page-header">
                    <span className="NousConnaitre-page-label">Chiffres Clés</span>
                    <div className="NousConnaitre-year-decoration"></div>
                  </div>
                  <div className="NousConnaitre-page-body">
                    <h3 className="NousConnaitre-page-title" style={{ color: '#fff', marginBottom: '2rem' }}>
                      Plus de 50 ans d'excellence au service du développement des infrastructures en Algérie
                    </h3>
                    <div className="NousConnaitre-stats-grid-book">
                      {stats.map((stat, index) => (
                        <div key={index} className="NousConnaitre-stat-item-book">
                          <div className="NousConnaitre-stat-number-book">{stat.number}</div>
                          <div className="NousConnaitre-stat-label-book">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="NousConnaitre-page-footer">
                    <span className="NousConnaitre-page-number">Page {historyPages.length + valuesForBook.length + 2}</span>
                  </div>
                </div>
              </div>

              {/* Back Cover */}
              <div className="NousConnaitre-book-page NousConnaitre-back-cover-page">
                <div className="NousConnaitre-back-cover-content">
                  <h2 className="NousConnaitre-back-cover-title">
                    Notre histoire est riche d'enseignements et de réalisations qui font aujourd'hui notre fierté.
                  </h2>
                  <p className="NousConnaitre-back-cover-text">
                    Découvrez comment notre expérience et notre expertise peuvent donner vie à vos projets
                  </p>
                  <div className="NousConnaitre-back-cover-logo">SNTP</div>
                </div>
              </div>
            </HTMLFlipBook>

            {/* Navigation Controls */}
            <div className="NousConnaitre-flipbook-navigation">
              <button
                className={`NousConnaitre-nav-button NousConnaitre-prev-button ${currentPage === 0 ? 'NousConnaitre-disabled' : ''}`}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
              >
                <FaChevronLeft className="NousConnaitre-nav-icon" />
                <span className="NousConnaitre-nav-text">Précédent</span>
              </button>

              <div className="NousConnaitre-pagination-dots">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`NousConnaitre-dot ${currentPage === i ? 'NousConnaitre-active' : ''}`}
                    onClick={() => goToPage(i)}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className={`NousConnaitre-nav-button NousConnaitre-next-button ${currentPage === totalPages - 1 ? 'NousConnaitre-disabled' : ''}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
              >
                <span className="NousConnaitre-nav-text">Suivant</span>
                <FaChevronRight className="NousConnaitre-nav-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="NousConnaitre-vision-section NousConnaitre-section" id="vision">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <span className="NousConnaitre-vision-badge">Notre Vision</span>
            <h2 className="NousConnaitre-section-title">Les principes qui guident notre action</h2>
            <div className="NousConnaitre-section-divider"></div>
          </div>

          <div className="NousConnaitre-vision-content">
            <div className="NousConnaitre-vision-text">
              <p className="NousConnaitre-vision-paragraph">
                Notre vision est de devenir le leader incontesté du secteur de la construction et des travaux publics en Algérie, 
                reconnu pour son innovation, son excellence opérationnelle et son engagement envers le développement durable.
              </p>
              <p className="NousConnaitre-vision-paragraph">
                Nous aspirons à transformer le paysage urbain et rural algérien en réalisant des infrastructures modernes, 
                intelligentes et respectueuses de l'environnement.
              </p>
              <p className="NousConnaitre-vision-paragraph">
                En combinant expertise technique, innovation technologique et responsabilité sociale, nous visons à créer de la valeur 
                pour toutes nos parties prenantes : clients, collaborateurs, partenaires et la société dans son ensemble.
              </p>
            </div>

            <div className="NousConnaitre-vision-image-wrapper">
              <div className="NousConnaitre-image-placeholder">
                <FaBuilding />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="NousConnaitre-mission-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <span className="NousConnaitre-section-badge">Notre Mission</span>
            <h2 className="NousConnaitre-section-title">
              Notre mission est de fournir des solutions de construction innovantes et durables
            </h2>
            <div className="NousConnaitre-section-divider"></div>
          </div>

          <div className="NousConnaitre-mission-grid">
            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaTrophy />
              </div>
              <h3 className="NousConnaitre-mission-title">Qualité</h3>
              <p className="NousConnaitre-mission-text">
                Garantir la qualité et la durabilité de chacune de nos réalisations en appliquant les meilleurs standards internationaux.
              </p>
            </div>

            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaHandshake />
              </div>
              <h3 className="NousConnaitre-mission-title">Service Client</h3>
              <p className="NousConnaitre-mission-text">
                Placer nos clients au cœur de nos préoccupations en offrant un service personnalisé et réactif.
              </p>
            </div>

            <div className="NousConnaitre-mission-card">
              <div className="NousConnaitre-mission-icon">
                <FaLightbulb />
              </div>
              <h3 className="NousConnaitre-mission-title">Durabilité</h3>
              <p className="NousConnaitre-mission-text">
                Intégrer les principes du développement durable dans tous nos projets pour minimiser notre empreinte environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="NousConnaitre-core-values-section NousConnaitre-section">
        <div className="container">
          <div className="NousConnaitre-section-header">
            <span className="NousConnaitre-section-badge">Nos Valeurs</span>
            <h2 className="NousConnaitre-section-title">Les valeurs qui nous définissent</h2>
            <div className="NousConnaitre-section-divider"></div>
          </div>

          <div className="NousConnaitre-values-container">
            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">01</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Excellence</h3>
                <p className="NousConnaitre-value-description">
                  Nous poursuivons l'excellence dans chaque aspect de notre travail, de la conception à la livraison finale. 
                  Notre engagement envers la qualité se reflète dans chaque détail de nos projets.
                </p>
              </div>
            </div>

            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">02</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Innovation</h3>
                <p className="NousConnaitre-value-description">
                  L'innovation est au cœur de notre stratégie de développement. Nous investissons dans la recherche et le développement 
                  pour adopter les technologies les plus avancées.
                </p>
              </div>
            </div>

            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">03</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Intégrité</h3>
                <p className="NousConnaitre-value-description">
                  L'intégrité guide toutes nos décisions et actions. Nous opérons avec transparence, honnêteté et respect envers 
                  tous nos partenaires.
                </p>
              </div>
            </div>

            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">04</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Sécurité</h3>
                <p className="NousConnaitre-value-description">
                  La sécurité de nos collaborateurs et partenaires est notre priorité absolue. Nous mettons en place des protocoles 
                  stricts sur tous nos chantiers.
                </p>
              </div>
            </div>

            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">05</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Collaboration</h3>
                <p className="NousConnaitre-value-description">
                  Le travail d'équipe et la collaboration sont essentiels à notre réussite. Nous favorisons un environnement où 
                  chacun peut contribuer et grandir professionnellement.
                </p>
              </div>
            </div>

            <div className="NousConnaitre-value-item">
              <div className="NousConnaitre-value-number">06</div>
              <div className="NousConnaitre-value-content">
                <h3 className="NousConnaitre-value-title">Responsabilité</h3>
                <p className="NousConnaitre-value-description">
                  Nous assumons pleinement nos responsabilités envers la société et l'environnement. Notre engagement va au-delà 
                  de la simple conformité réglementaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="NousConnaitre-heritage-section NousConnaitre-section">
        <div className="NousConnaitre-heritage-content">
          <div className="NousConnaitre-heritage-text">
            <h2 className="NousConnaitre-section-title" style={{ color: '#fff' }}>Notre Héritage</h2>
            <p className="NousConnaitre-heritage-paragraph">
              Notre histoire est riche d'enseignements et de réalisations qui font aujourd'hui notre fierté. Chaque projet achevé, 
              chaque infrastructure construite, chaque innovation mise en œuvre contribue à bâtir notre héritage.
            </p>
            <p className="NousConnaitre-heritage-paragraph">
              Au-delà des réalisations matérielles, c'est avant tout un héritage humain que nous cultivons : celui du savoir-faire, 
              de la transmission des compétences, de la passion du métier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="NousConnaitre-cta-section">
        <div className="NousConnaitre-cta-overlay"></div>
        <div className="container">
          <div className="NousConnaitre-cta-content">
            <h2 className="NousConnaitre-cta-title">Découvrez comment notre expérience peut donner vie à vos projets</h2>
            <p className="NousConnaitre-cta-text">
              Rejoignez-nous dans notre mission de construire l'Algérie de demain
            </p>
            <div className="NousConnaitre-cta-buttons">
              <a href="/contact" className="NousConnaitre-cta-btn NousConnaitre-primary">
                Contactez-nous
              </a>
              <a href="/projets" className="NousConnaitre-cta-btn NousConnaitre-secondary">
                Voir nos projets
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousConnaitre;

