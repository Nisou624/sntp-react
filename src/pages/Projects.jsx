import React, { useState } from 'react';
import './Projects.css';
import ProjectsMap from '../components/ProjectsMap';
import { projectsData, categories, statusOptions } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('map'); // 'map' ou 'grid'

  // Filtrer les projets selon la catégorie et le statut
  const filteredProjects = projectsData.filter(project => {
    const categoryMatch = activeFilter === 'all' || project.category === activeFilter;
    const statusMatch = statusFilter === 'all' || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const handleProjectClick = (project) => {
    console.log('Projet sélectionné:', project);
    // Vous pouvez ajouter ici la navigation vers une page détaillée
    // ou ouvrir un modal avec plus d'informations
  };

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
          {/* View Mode Toggle */}
          <div className="view-mode-toggle">
            <button
              className={`mode-btn ${viewMode === 'map' ? 'active' : ''}`}
              onClick={() => setViewMode('map')}
            >
              🗺️ Vue Carte
            </button>
            <button
              className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              📋 Vue Grille
            </button>
          </div>

          {/* Filters Container */}
          <div className="filters-container">
            {/* Category Filter */}
            <div className="filter-group">
              <label className="filter-label">Catégories</label>
              <div className="projects-filter">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <span className="filter-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="filter-group">
              <label className="filter-label">Statut</label>
              <div className="status-filter">
                {statusOptions.map(status => (
                  <button
                    key={status.id}
                    className={`status-btn ${statusFilter === status.id ? 'active' : ''}`}
                    onClick={() => setStatusFilter(status.id)}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            <p>
              <strong>{filteredProjects.length}</strong> projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Map View */}
          {viewMode === 'map' && (
            <ProjectsMap
              projects={filteredProjects}
              onProjectClick={handleProjectClick}
            />
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card-item">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <span className={`project-status-badge ${project.status}`}>
                      {project.status === 'completed' ? 'Terminé' : 'En cours'}
                    </span>
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
          )}

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>Aucun projet trouvé avec les filtres sélectionnés.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

