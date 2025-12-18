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
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  // Grouper les projets par catégorie
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category.id] = category.id === 'all'
      ? projects
      : projects.filter(p => p.category === category.id);
    return acc;
  }, {});

  // Catégories avec projets
  const validCategories = categories.filter(cat =>
    projectsByCategory[cat.id]?.length > 0
  );

  // Descriptions par catégorie
  const categoryDescriptions = {
    all: "L'ensemble de nos réalisations témoigne de notre expertise dans tous les domaines du génie civil et des travaux publics.",
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
        const visualWrapper = section?.querySelector('.sticky-visual-wrapper');
        const projectsList = section?.querySelector('.projects-list');

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
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => cardObserver.observe(card));

    return () => {
      cards.forEach(card => cardObserver.unobserve(card));
    };
  }, [loading, projects]);

  // Affichage du loader
  if (loading) {
    return (
      <div className="projects-page">
        <Header />
        <main className="projects-main">
          <section className="projects-hero">
            <div className="projects-hero__content">
              <h1 className="projects-hero__title">Nos Projets</h1>
              <p className="projects-hero__description">
                Chargement des projets...
              </p>
            </div>
          </section>
          <div className="loading">Chargement en cours...</div>
        </main>
        <Footer />
      </div>
    );
  }

  // Affichage de l'erreur
  if (error) {
    return (
      <div className="projects-page">
        <Header />
        <main className="projects-main">
          <section className="projects-hero">
            <div className="projects-hero__content">
              <h1 className="projects-hero__title">Nos Projets</h1>
              <p className="projects-hero__description">{error}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Affichage principal
  return (
    <div className="projects-page">
      <Header />
      <main className="projects-main">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="projects-hero__content">
            <h1 className="projects-hero__title">Nos Projets</h1>
            <p className="projects-hero__description">
              Découvrez nos réalisations dans le domaine des travaux publics et du génie civil
            </p>
          </div>
        </section>

        {/* Navigation sticky */}
        <nav className="projects-nav">
          <div className="projects-nav__container">
            {validCategories.map(category => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`nav-button ${activeCategory === category.id ? 'is-active' : ''}`}
                aria-label={`Voir les projets de la catégorie ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Sections par catégorie */}
        <div className="sections-container">
          {validCategories.map(category => {
            const categoryProjects = projectsByCategory[category.id];
            
            if (!categoryProjects || categoryProjects.length === 0) return null;

            return (
              <section
                key={category.id}
                ref={el => (sectionRefs.current[category.id] = el)}
                data-category={category.id}
                className="split-section"
              >
                {/* Colonne gauche - Visual qui suit le scroll */}
                <div className="split-section__left">
                  <div className="sticky-visual-wrapper">
                    <div className="sticky-visual">
                      <div className="sticky-visual__image-wrapper">
                        <img
                          src={projetService.getImageUrl(categoryProjects[0].id)}
                          alt={category.label}
                          className="sticky-visual__image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/images/default-project.jpg';
                          }}
                        />
                        <div className="sticky-visual__overlay"></div>
                      </div>

                      <div className="sticky-visual__content">
                        <h2 className="sticky-visual__title">{category.label}</h2>
                        <p className="sticky-visual__description">
                          {categoryDescriptions[category.id]}
                        </p>
                        <div className="sticky-visual__meta">
                          <span className="sticky-visual__count">
                            {categoryProjects.length}{' '}
                            {categoryProjects.length > 1 ? 'Projets' : 'Projet'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Liste scrollable */}
                <div className="split-section__right">
                  <div className="projects-list">
                    {categoryProjects.map((project, index) => (
                      <article
                        key={project.id}
                        className="project-card"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <Link to={`/projects/${project.id}`} className="project-card-link">
                          {/* Image du projet */}
                          <div className="project-card__image-container">
                            <img
                              src={projetService.getImageUrl(project.id)}
                              alt={project.titre}
                              className="project-card__image"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = '/images/default-project.jpg';
                              }}
                            />
                            <div className="project-card__image-overlay"></div>
                          </div>

                          {/* Contenu du projet */}
                          <div className="project-card__content">
                            <div className="project-card__header">
                              <span className="project-card__location">
                                {project.location}
                              </span>
                              <span className="project-card__year">{project.year}</span>
                            </div>

                            <h3 className="project-card__title">{project.titre}</h3>
                            <p className="project-card__description">
                              {project.description}
                            </p>

                            <div className="project-card__footer">
                              <span className={`project-card__status status--${project.status}`}>
                                {project.status === 'completed' ? 'Terminé' : 'En cours'}
                              </span>
                              <span className="project-card__arrow" aria-hidden="true">
                                →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

