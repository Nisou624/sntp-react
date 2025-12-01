import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Autoroute Est-Ouest',
      category: 'routes',
      image: '/assets/images/project-autoroute.jpg',
      location: 'Alger - Oran',
      year: '2023',
      description: 'Tronçon de 150km de l\'autoroute reliant l\'Est à l\'Ouest du pays'
    },
    {
      id: 2,
      title: 'Complexe Résidentiel Les Vergers',
      category: 'batiments',
      image: '/assets/images/project-residential.jpg',
      location: 'Alger',
      year: '2024',
      description: '500 logements haut standing avec commodités'
    },
    {
      id: 3,
      title: 'Pont de Béjaïa',
      category: 'ouvrages',
      image: '/assets/images/project-bridge.jpg',
      location: 'Béjaïa',
      year: '2023',
      description: 'Pont suspendu de 800m reliant deux rives'
    },
    {
      id: 4,
      title: 'Barrage de Beni Haroun',
      category: 'hydraulique',
      image: '/assets/images/project-dam.jpg',
      location: 'Mila',
      year: '2022',
      description: 'Barrage d\'une capacité de 960 millions de m³'
    },
    {
      id: 5,
      title: 'Centre Commercial Ardis',
      category: 'batiments',
      image: '/assets/images/project-mall.jpg',
      location: 'Alger',
      year: '2024',
      description: 'Centre commercial de 50,000 m² sur 4 niveaux'
    },
    {
      id: 6,
      title: 'Route Nationale N1',
      category: 'routes',
      image: '/assets/images/project-road.jpg',
      location: 'Ghardaïa - Tamanrasset',
      year: '2023',
      description: 'Réhabilitation de 200km de route nationale'
    },
    {
      id: 7,
      title: 'Usine Pharmaceutique',
      category: 'industriel',
      image: '/assets/images/project-factory.jpg',
      location: 'Constantine',
      year: '2024',
      description: 'Complexe industriel de production pharmaceutique'
    },
    {
      id: 8,
      title: 'Station d\'Épuration',
      category: 'hydraulique',
      image: '/assets/images/project-water.jpg',
      location: 'Oran',
      year: '2023',
      description: 'Station de traitement des eaux usées de 500,000 m³/jour'
    },
    {
      id: 9,
      title: 'Viaduc de Tizi Ouzou',
      category: 'ouvrages',
      image: '/assets/images/project-viaduc.jpg',
      location: 'Tizi Ouzou',
      year: '2022',
      description: 'Viaduc de 1,2km à 4 voies'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'routes', label: 'Travaux Routiers' },
    { id: 'batiments', label: 'Bâtiments' },
    { id: 'ouvrages', label: 'Ouvrages d\'Art' },
    { id: 'hydraulique', label: 'Hydraulique' },
    { id: 'industriel', label: 'Industriel' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header" style={{
        backgroundImage: 'url(/assets/images/projects-header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(129, 0, 18, 0.85) 0%, rgba(9, 20, 65, 0.75) 100%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-title" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Nos Projets
          </h1>
          <div className="section-divider" style={{
            background: 'repeating-linear-gradient(90deg, #fff, #fff 12.2px, transparent 12.2px, transparent 24.4px)'
          }}></div>
          <p className="page-subtitle" style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem' }}>
            Découvrez nos réalisations à travers l'Algérie
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section">
        <div className="container">
          {/* Filter */}
          <div className="projects-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card-item">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay-card">
                    <div className="project-info">
                      <span className="project-year">{project.year}</span>
                      <span className="project-location">{project.location}</span>
                    </div>
                  </div>
                </div>
                <div className="project-details">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>
                  <a href="#" className="project-view-link">Voir les détails →</a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

