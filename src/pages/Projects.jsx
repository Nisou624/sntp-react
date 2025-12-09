import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { projectsData, categories } from '../data/projectsData';
import './Projects.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRefs = useRef({});
  const lenisRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // Grouper les projets par catégorie
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category.id] = category.id === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category.id);
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

    // Connecter Lenis avec GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Animation frame loop pour Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Configuration des animations sticky pour chaque section
  useEffect(() => {
    // Attendre que le DOM soit prêt
    const timer = setTimeout(() => {
      // Nettoyer les anciens ScrollTriggers
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];

      // Créer les animations pour chaque section
      validCategories.forEach((category) => {
        const sectionElement = document.querySelector(
          `[data-category="${category.id}"]`
        );
        const stickyVisual = sectionElement?.querySelector('.sticky-visual');
        const rightContent = sectionElement?.querySelector('.split-section__right');

        if (sectionElement && stickyVisual && rightContent) {
          // Calculer la hauteur de défilement disponible
          const sectionHeight = sectionElement.offsetHeight;
          const stickyHeight = stickyVisual.offsetHeight;
          const rightHeight = rightContent.offsetHeight;
          
          // Distance que le sticky doit parcourir
          const scrollDistance = rightHeight - stickyHeight;

          // Créer l'animation de suivi du scroll
          const st = gsap.to(stickyVisual, {
            y: scrollDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top top+=144px',
              end: `bottom bottom`,
              scrub: 0.5,
              invalidateOnRefresh: true,
              markers: false, // Mettre à true pour déboguer
            }
          });

          scrollTriggersRef.current.push(st.scrollTrigger);
        }
      });

      // Rafraîchir ScrollTrigger après création
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      scrollTriggersRef.current.forEach(st => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [validCategories, projectsByCategory]);

  // Observer les sections pour mettre à jour la navigation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-150px 0px -150px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.dataset.category;
          if (categoryId) {
            setActiveCategory(categoryId);
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Scroll vers une section spécifique avec Lenis
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

  // Animation fade-in pour les cartes au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      cards.forEach((card) => cardObserver.unobserve(card));
    };
  }, [projectsByCategory]);

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
            {validCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`nav-button ${activeCategory === category.id ? 'is-active' : ''}`}
                aria-label={`Voir les projets de la catégorie ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Sections par catégorie */}
        <div className="sections-container">
          {validCategories.map((category) => {
            const projects = projectsByCategory[category.id];
            if (!projects || projects.length === 0) return null;

            return (
              <section
                key={category.id}
                ref={(el) => (sectionRefs.current[category.id] = el)}
                data-category={category.id}
                className="split-section"
              >
                {/* Colonne gauche - Visual qui suit le scroll */}
                <div className="split-section__left">
                  <div className="sticky-visual-wrapper">
                    <div className="sticky-visual">
                      <div className="sticky-visual__image-wrapper">
                        <img
                          src={projects[0]?.image || '/images/default-project.jpg'}
                          alt={category.name}
                          className="sticky-visual__image"
                          loading="lazy"
                        />
                        <div className="sticky-visual__overlay"></div>
                      </div>
                      <div className="sticky-visual__content">
                        <h2 className="sticky-visual__title">{category.name}</h2>
                        <p className="sticky-visual__description">
                          {categoryDescriptions[category.id]}
                        </p>
                        <div className="sticky-visual__meta">
                          <span className="sticky-visual__count">
                            {projects.length} {projects.length > 1 ? 'Projets' : 'Projet'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Liste scrollable */}
                <div className="split-section__right">
                  <div className="projects-list">
                    {projects.map((project, index) => (
                      <article 
                        key={project.id} 
                        className="project-card"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <Link 
                          to={`/projects/${project.id}`} 
                          className="project-card__link"
                        >
                          {/* Image du projet */}
                          <div className="project-card__image-container">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-card__image"
                              loading="lazy"
                            />
                            <div className="project-card__image-overlay"></div>
                          </div>

                          {/* Contenu du projet */}
                          <div className="project-card__content">
                            <div className="project-card__header">
                              <span className="project-card__location">
                                {project.location}
                              </span>
                              <span className="project-card__year">
                                {project.year}
                              </span>
                            </div>

                            <h3 className="project-card__title">
                              {project.title}
                            </h3>

                            {project.description && (
                              <p className="project-card__description">
                                {project.description}
                              </p>
                            )}

                            <div className="project-card__footer">
                              <span 
                                className={`project-card__status status--${project.status}`}
                              >
                                {project.status === 'completed' ? 'Terminé' : 'En cours'}
                              </span>
                              <span 
                                className="project-card__arrow" 
                                aria-hidden="true"
                              >
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

