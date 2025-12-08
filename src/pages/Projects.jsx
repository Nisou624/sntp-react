import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { projectsData, categories } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollPhase, setScrollPhase] = useState('hero'); // 'hero', 'projects', 'transition'
  const sectionRefs = useRef({});
  const projectsStackRefs = useRef({});
  const observerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const currentCategoryIndexRef = useRef(0);

  // Grouper les projets par catégorie
  const projectsByCategory = categories.reduce((acc, category) => {
    acc[category.id] = category.id === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category.id);
    return acc;
  }, {});

  // Catégories avec projets
  const validCategories = categories.filter(cat => projectsByCategory[cat.id]?.length > 0);

  // Intersection Observer pour détecter la catégorie active
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const categoryId = entry.target.dataset.category;
            setActiveCategory(categoryId);
            const index = validCategories.findIndex(c => c.id === categoryId);
            if (index !== -1) {
              currentCategoryIndexRef.current = index;
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [validCategories]);

  // Observer les sections
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    Object.values(sectionRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [projectsByCategory]);

  // Gestion du scroll personnalisé
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return;

      const currentCategoryIndex = currentCategoryIndexRef.current;
      const currentCategory = validCategories[currentCategoryIndex];
      
      if (!currentCategory) return;

      const projectsStack = projectsStackRefs.current[currentCategory.id];
      
      if (!projectsStack) return;

      const isAtTop = projectsStack.scrollTop <= 1;
      const isAtBottom = Math.abs(
        projectsStack.scrollHeight - projectsStack.scrollTop - projectsStack.clientHeight
      ) < 2;

      // Scroll vers le haut (catégorie précédente)
      if (e.deltaY < 0 && isAtTop && currentCategoryIndex > 0) {
        e.preventDefault();
        isScrollingRef.current = true;

        const prevCategory = validCategories[currentCategoryIndex - 1];
        const prevSection = sectionRefs.current[prevCategory.id];
        
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          setTimeout(() => {
            const prevStack = projectsStackRefs.current[prevCategory.id];
            if (prevStack) {
              prevStack.scrollTop = prevStack.scrollHeight;
            }
            currentCategoryIndexRef.current = currentCategoryIndex - 1;
            isScrollingRef.current = false;
          }, 800);
        }
        return;
      }

      // Scroll vers le bas (catégorie suivante)
      if (e.deltaY > 0 && isAtBottom && currentCategoryIndex < validCategories.length - 1) {
        e.preventDefault();
        isScrollingRef.current = true;

        const nextCategory = validCategories[currentCategoryIndex + 1];
        const nextSection = sectionRefs.current[nextCategory.id];
        
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          setTimeout(() => {
            const nextStack = projectsStackRefs.current[nextCategory.id];
            if (nextStack) {
              nextStack.scrollTop = 0;
            }
            currentCategoryIndexRef.current = currentCategoryIndex + 1;
            isScrollingRef.current = false;
          }, 800);
        }
        return;
      }

      // Scroll normal dans la liste des projets
      if (!isAtTop && !isAtBottom) {
        // Laisser le scroll natif opérer
        return;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [validCategories]);

  // Scroll vers une section spécifique
  const scrollToSection = (categoryId) => {
    const element = sectionRefs.current[categoryId];
    if (element) {
      isScrollingRef.current = true;
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      setTimeout(() => {
        const stack = projectsStackRefs.current[categoryId];
        if (stack) {
          stack.scrollTop = 0;
        }
        isScrollingRef.current = false;
      }, 800);
    }
  };

  // Descriptions par catégorie
  const categoryDescriptions = {
    all: "L'ensemble de nos réalisations témoigne de notre expertise dans tous les domaines du génie civil et des travaux publics.",
    routes: "Construction et réhabilitation d'infrastructures routières modernes, durables et sécurisées pour connecter les territoires.",
    batiments: "Édification de structures résidentielles et commerciales de haute qualité, alliant design moderne et fonctionnalité.",
    ouvrages: "Conception et construction d'ouvrages d'art exceptionnels : ponts, viaducs et structures monumentales.",
    hydraulique: "Projets de gestion de l'eau, barrages et stations d'épuration pour préserver nos ressources hydriques.",
    industriel: "Développement de complexes industriels performants, sécurisés et respectueux des normes environnementales."
  };

  return (
    <div className="projects-page">
      <Header />
      
      <main className="projects-main">
        {/* Hero Section */}
        <section className="projects-hero">
          <div className="projects-hero__content">
            <h1 className="projects-hero__title">Nos Projets</h1>
            <p className="projects-hero__subtitle">
              Découvrez nos réalisations dans le domaine des travaux publics
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <nav className="projects-nav">
          <div className="projects-nav__wrapper">
            {validCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`nav-pill ${activeCategory === category.id ? 'active' : ''}`}
              >
                <span className="nav-pill__icon">{category.icon}</span>
                <span className="nav-pill__text">{category.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Split-Screen Sections avec Sticky Left */}
        {validCategories.map((category, index) => {
          const categoryProjects = projectsByCategory[category.id] || [];

          return (
            <section
              key={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              data-category={category.id}
              className="split-section"
            >
              {/* LEFT COLUMN - STICKY FULL HEIGHT */}
              <div className="split-section__left">
                <div className="category-visual">
                  {/* Background Image */}
                  <div className="category-visual__image">
                    <img 
                      src={categoryProjects[0]?.image || '/assets/images/default.jpg'}
                      alt={category.label}
                    />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="category-visual__overlay">
                    <div className="category-visual__content">
                      <span className="category-visual__icon">
                        {category.icon}
                      </span>
                      <h2 className="category-visual__title">
                        {category.label}
                      </h2>
                      <p className="category-visual__count">
                        {categoryProjects.length} projet{categoryProjects.length > 1 ? 's' : ''}
                      </p>
                      <p className="category-visual__description">
                        {categoryDescriptions[category.id]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - SCROLLABLE PROJECTS */}
              <div 
                className="split-section__right"
                ref={(el) => (projectsStackRefs.current[category.id] = el)}
              >
                <div className="projects-stack">
                  {categoryProjects.map((project, projectIndex) => (
                    <article
                      key={project.id}
                      className="project-card"
                      style={{ 
                        animationDelay: `${projectIndex * 0.1}s` 
                      }}
                    >
                      <Link to={`/projects/${project.id}`} className="project-card__wrapper">
                        {/* Project Image */}
                        <div className="project-card__media">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="project-card__image"
                            loading="lazy"
                          />
                          <div className="project-card__overlay-gradient"></div>
                        </div>

                        {/* Project Content */}
                        <div className="project-card__body">
                          <div className="project-card__meta">
                            <span className="project-card__location">
                              📍 {project.location}
                            </span>
                            {project.year && (
                              <span className="project-card__year">
                                {project.year}
                              </span>
                            )}
                          </div>

                          <h3 className="project-card__title">
                            {project.title}
                          </h3>

                          {project.description && (
                            <p className="project-card__excerpt">
                              {project.description}
                            </p>
                          )}

                          <div className="project-card__footer">
                            <span className={`status-badge status-badge--${project.status}`}>
                              {project.status === 'completed' ? '✓ Terminé' : '⏳ En cours'}
                            </span>
                            <span className="project-card__arrow">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path 
                                  d="M5 12h14m0 0l-6-6m6 6l-6 6" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                              </svg>
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
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

