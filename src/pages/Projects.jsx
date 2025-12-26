import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import projetService from '../services/projetService';
import { categories } from '../data/projectsData';
import './Projects.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef({});
  const lenisRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Charger les projets depuis l'API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await projetService.getAllProjets({
          limit: 100,
          sortBy: 'year',
          sortOrder: 'DESC'
        });

        if (response.success && response.data) {
          setProjects(response.data);
        } else {
          throw new Error('Erreur lors du chargement des projets');
        }
      } catch (err) {
        console.error('Erreur:', err);
        setError('Impossible de charger les projets. Veuillez réessayer.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    }
  };

  // Grouper les projets par catégorie (SANS "all")
  const projectsByCategory = categories
    .filter(cat => cat.id !== 'all')
    .reduce((acc, category) => {
      acc[category.id] = projects.filter(p => p.category === category.id);
      return acc;
    }, {});

  // Catégories avec projets (exclure "all" et catégories vides)
  const validCategories = categories.filter(
    cat => cat.id !== 'all' && projectsByCategory[cat.id]?.length > 0
  );

  // Descriptions par catégorie
  const categoryDescriptions = {
    routes: "Construction et réhabilitation d'infrastructures routières modernes, durables et sécurisées pour connecter les territoires.",
    batiments: "Édification de structures résidentielles et commerciales de haute qualité, alliant design moderne et fonctionnalité.",
    ouvrages: "Conception et construction d'ouvrages d'art exceptionnels : ponts, viaducs et structures monumentales.",
    hydraulique: "Projets de gestion de l'eau, barrages et stations d'épuration pour préserver nos ressources hydriques.",
    industriel: "Développement de complexes industriels performants, sécurisés et respectueux des normes environnementales."
  };

  // Initialisation de Lenis pour smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Configuration des animations sticky
  useEffect(() => {
    if (loading || projects.length === 0) return;

    const timer = setTimeout(() => {
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];

      validCategories.forEach(category => {
        const section = sectionRefs.current[category.id];
        const visualWrapper = section?.querySelector('.Projects-sticky-visual-wrapper');
        const projectsList = section?.querySelector('.Projects-list');

        if (section && visualWrapper && projectsList) {
          const st = ScrollTrigger.create({
            trigger: section,
            start: 'top 140px',
            end: () => `+=${projectsList.offsetHeight - visualWrapper.offsetHeight}`,
            pin: visualWrapper,
            pinSpacing: false,
            anticipatePin: 1,
            markers: false,
          });

          scrollTriggersRef.current.push(st);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      scrollTriggersRef.current.forEach(st => st.kill());
    };
  }, [loading, projects, validCategories]);

  // Observer pour section active
  useEffect(() => {
    if (loading || projects.length === 0) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-140px 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute('data-category');
          if (categoryId) {
            setActiveCategory(categoryId);
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [loading, projects]);

  // Animation fade-in pour les cartes
  useEffect(() => {
    if (loading || projects.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('Projects-is-visible');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.Projects-card');
    cards.forEach(card => cardObserver.observe(card));

    return () => {
      cards.forEach(card => cardObserver.unobserve(card));
    };
  }, [loading, projects]);

  // Définir la première catégorie comme active par défaut
  useEffect(() => {
    if (validCategories.length > 0 && !activeCategory) {
      setActiveCategory(validCategories[0].id);
    }
  }, [validCategories, activeCategory]);

  // Scroll vers section
  const scrollToSection = (categoryId) => {
    const element = sectionRefs.current[categoryId];
    if (element && lenisRef.current) {
      const offsetTop = element.offsetTop - 140;
      lenisRef.current.scrollTo(offsetTop, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  // Affichage du loader
  if (loading) {
    return (
      <div className="Projects-page">
        <Header />
        <div className="Projects-loader">
          <p>Chargement des projets...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Affichage erreur
  if (error) {
    return (
      <div className="Projects-page">
        <Header />
        <div className="Projects-error">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }  

  return (
    <div className="Projects-page">
      <Header />

      <main className="Projects-main">
        {/* Hero Section */}
        <section className="Projects-hero">
          <div className="Projects-hero-content">
            <h1 className="Projects-hero-title">Nos Réalisations</h1>
            <div className="Projects-hero-divider"></div>
            <p className="Projects-hero-description">
              Découvrez nos projets dans le domaine des travaux publics et du génie civil
            </p>
          </div>
        </section>

        {/* Navigation Sticky */}
        <nav className="Projects-nav">
          <div className="Projects-nav-container">
            {validCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`Projects-nav-button ${
                  activeCategory === category.id ? 'Projects-is-active' : ''
                }`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Sections Container */}
        <div className="Projects-sections-container">
          {validCategories.map((category) => (
            <section
              key={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              data-category={category.id}
              className="Projects-split-section"
            >
              {/* Colonne Gauche - Sticky Visual */}
              <div className="Projects-split-section-left">
                <div className="Projects-sticky-visual-wrapper">
                  <div className="Projects-sticky-visual">
                    <div className="Projects-sticky-visual-image-wrapper">
                      <img
                        src={
                          projectsByCategory[category.id][0]
                            ? projetService.getImageUrl(projectsByCategory[category.id][0].id)
                            : 'https://via.placeholder.com/800x600/1B263B/FFFFFF?text=Projet'
                        }
                        alt={category.label}
                        className="Projects-sticky-visual-image"
                      />
                    </div>
                    <div className="Projects-sticky-visual-overlay"></div>
                    <div className="Projects-sticky-visual-content">
                      <h2 className="Projects-sticky-visual-title">{category.label}</h2>
                      <p className="Projects-sticky-visual-description">
                        {categoryDescriptions[category.id]}
                      </p>
                      <div className="Projects-sticky-visual-meta">
                        <span className="Projects-sticky-visual-count">
                          {projectsByCategory[category.id].length} projet
                          {projectsByCategory[category.id].length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne Droite - Liste des Projets */}
              <div className="Projects-split-section-right">
                <div className="Projects-list">
                  {projectsByCategory[category.id].map((project) => (
                    <article key={project.id} className="Projects-card">
                      <Link
                        to={`/projects/${project.id}`}
                        className="Projects-card-link"
                      >
                        <div className="Projects-card-image-container">
                          <img
                            src={projetService.getImageUrl(project.id)}
                            alt={project.titre}
                            className="Projects-card-image"
                          />
                          <div className="Projects-card-image-overlay"></div>
                        </div>

                        <div className="Projects-card-content">
                          <div className="Projects-card-header">
                            <span className="Projects-card-location">{project.location}</span>
                            <span className="Projects-card-year">{project.year}</span>
                          </div>

                          <h3 className="Projects-card-title">{project.titre}</h3>
                          <p className="Projects-card-description">{project.description}</p>

                          <div className="Projects-card-footer">
                            <span
                              className={`Projects-card-status Projects-status--${project.status}`}
                            >
                              {project.status === 'completed' ? 'Terminé' : 'En cours'}
                            </span>
                            <span className="Projects-card-arrow">→</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      
      {/* Bouton Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`Projects-scroll-top-btn ${showScrollTop ? `Projects-scroll-top-visible` : ''}`}
        aria-label="Retour en haut">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
        
      <Footer />
    </div>
  );
};

export default Projects;

