// src/pages/Projects.jsx
import React from 'react';
import './Projects.css';
import ProjectShowcase from '../components/ProjectShowcase';

const Projects = () => {
  return (
    <div className="projects-page-wrapper">
      {/* Page Header - Visible au-dessus du ProjectShowcase */}
      <section className="page-header-projects">
        <div className="header-overlay-projects"></div>
        <div className="header-content-projects">
          <div className="header-badge-projects">
            <span className="header-icon-projects">🏗️</span>
          </div>
          <h1 className="page-title-projects">Nos Projets</h1>
          <div className="section-divider-projects"></div>
          <p className="page-subtitle-projects">
            Découvrez nos réalisations à travers l'Algérie
          </p>
          <div className="scroll-indicator-projects">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="scroll-arrow-projects"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* Project Showcase avec Split-Screen Immersif */}
      <ProjectShowcase />
    </div>
  );
};

export default Projects;

