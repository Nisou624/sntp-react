// src/components/ProjectShowcase.jsx
import React, { useMemo, useEffect, useRef, useState } from 'react';
import { projectsData, categories } from '../data/projectsData';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  const categoryRefsLeft = useRef([]);
  const categoryRefsRight = useRef([]);
  const [activeCategory, setActiveCategory] = useState(0);

  // Grouper les projets par catégorie
  const groupedByCategory = useMemo(() => {
    const map = new Map();

    projectsData.forEach((project) => {
      const catId = project.category;
      if (!map.has(catId)) {
        const catMeta = categories.find((c) => c.id === catId);
        map.set(catId, {
          id: catId,
          label: catMeta ? catMeta.label : catId,
          icon: catMeta ? catMeta.icon : '🏗️',
          description:
            catMeta && catMeta.label
              ? `Nos projets réalisés dans le domaine ${catMeta.label.toLowerCase()}.`
              : 'Projets réalisés dans cette catégorie.',
          coverImage: project.image,
          projects: [],
        });
      }
      map.get(catId).projects.push(project);
    });

    const ordered = [];
    categories
      .filter((c) => c.id !== 'all')
      .forEach((cat) => {
        if (map.has(cat.id)) {
          ordered.push(map.get(cat.id));
        }
      });

    map.forEach((value, key) => {
      if (!ordered.find((c) => c.id === key)) {
        ordered.push(value);
      }
    });

    return ordered;
  }, []);

  // Synchroniser le scroll gauche avec le scroll droite
  useEffect(() => {
    const rightScroll = rightScrollRef.current;
    const leftScroll = leftScrollRef.current;
    if (!rightScroll || !leftScroll) return;

    const handleScroll = () => {
      const scrollTop = rightScroll.scrollTop;
      let newActiveCategory = 0;

      // Déterminer quelle catégorie est actuellement visible à droite
      categoryRefsRight.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Si le haut de la section est visible dans le viewport
          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
            newActiveCategory = index;
          }
        }
      });

      // Si la catégorie active a changé, scroller la gauche automatiquement
      if (newActiveCategory !== activeCategory) {
        setActiveCategory(newActiveCategory);
        
        const leftCategoryElement = categoryRefsLeft.current[newActiveCategory];
        if (leftCategoryElement) {
          const leftScrollTop = leftCategoryElement.offsetTop;
          leftScroll.scrollTo({
            top: leftScrollTop,
            behavior: 'smooth'
          });
        }
      }
    };

    rightScroll.addEventListener('scroll', handleScroll);
    
    // Initialisation
    handleScroll();

    return () => {
      rightScroll.removeEventListener('scroll', handleScroll);
    };
  }, [activeCategory, groupedByCategory.length]);

  return (
    <div className="projects-showcase">
      <div className="projects-showcase-container">
        {/* COLONNE GAUCHE - Catégories avec scroll automatique */}
        <div className="category-left-sidebar" ref={leftScrollRef}>
          {groupedByCategory.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => (categoryRefsLeft.current[index] = el)}
              className={`category-left-section ${index === activeCategory ? 'active' : ''}`}
              data-category-index={index}
            >
              <div className="category-image-hero">
                <img
                  src={category.coverImage}
                  alt={category.label}
                  className="category-hero-image"
                />
                <div className="category-overlay">
                  <div className="category-badge">
                    <span className="category-icon-large">{category.icon}</span>
                  </div>
                  <div className="category-text-overlay">
                    <p className="category-kicker-overlay">Chapitre {String(index + 1).padStart(2, '0')}</p>
                    <h2 className="category-title-overlay">{category.label}</h2>
                    <p className="category-description-overlay">
                      {category.description}
                    </p>
                    <div className="category-project-count">
                      {category.projects.length} {category.projects.length > 1 ? 'Projets' : 'Projet'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COLONNE DROITE - Projets avec scroll */}
        <div className="category-right-scroll" ref={rightScrollRef}>
          {groupedByCategory.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
              ref={(el) => (categoryRefsRight.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Section de catégorie avec ses projets
const CategorySection = React.forwardRef(({ category, index }, ref) => {
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-card-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    projectCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [category.projects]);

  return (
    <section 
      className="category-projects-section" 
      ref={ref}
      data-category-id={category.id}
    >
      <div className="category-section-header">
        <span className="category-section-number">{String(index + 1).padStart(2, '0')}</span>
        <div className="category-header-content">
          <h3 className="category-section-title">{category.label}</h3>
          <p className="category-section-subtitle">{category.projects.length} projets réalisés</p>
        </div>
      </div>

      <div className="projects-grid-flow">
        {category.projects.map((project, idx) => (
          <article
            key={project.id}
            ref={(el) => (projectCardsRef.current[idx] = el)}
            className="project-card-immersive"
            data-project-id={project.id}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image-immersive"
              />
              <div className="project-image-gradient"></div>
              <span className={`project-status-pill ${project.status}`}>
                {project.status === 'completed' ? 'Terminé' : 'En cours'}
              </span>
            </div>
            
            <div className="project-content-box">
              <div className="project-header-info">
                <h3 className="project-title-immersive">{project.title}</h3>
                <p className="project-location-immersive">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="location-icon"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {project.location}
                </p>
              </div>
              
              <p className="project-description-immersive">
                {project.description}
              </p>
              
              <div className="project-meta-footer">
                <span className="project-year-badge">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="calendar-icon"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {project.year}
                </span>
                
                <button className="project-details-btn">
                  Voir les détails
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="arrow-icon"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

CategorySection.displayName = 'CategorySection';

export default ProjectShowcase;

