import React from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

const MegaMenu = ({ isOpen, onClose }) => {
  // Ligne 1 : 5 colonnes
  const firstRow = [
    {
      title: 'Nous Connaître',
      items: [
        { path: '/about', label: 'À propos de nous' },
        { path: '/histoire', label: 'Histoire' },
        { path: '/vision-valeurs', label: 'Vision et valeurs' }
      ]
    },
    {
      title: 'Nos Engagements',
      items: [
        { path: '/environnement', label: 'Environnement' },
        { path: '/rse', label: 'RSE' },
        { path: '/innovation', label: 'Innovation' },
        { path: '/sante-securite', label: 'Santé & Sécurité' }
      ]
    },
    {
      title: 'Nos Métiers',
      items: [
        { path: '/travaux-routiers', label: 'Travaux routiers' },
        { path: '/travaux-ferroviaires', label: 'Travaux ferroviaires' },
        { path: '/location-materiel', label: 'Location' },
        { path: '/batiments', label: 'Bâtiments' },
        { path: '/hydraulique', label: 'Hydraulique' },
        { path: '/genie-civil', label: 'Génie civil' }
      ]
    },
    {
      title: 'Nos Réalisations',
      items: [
        { path: '/projects', label: 'Nos Réalisations' }
      ]
    },
    {
      title: 'Nos Unités',
      items: [
        { path: '/sntp-engineering', label: 'Engineering' },
        { path: '/sntp-anabibe', label: 'Anabib' },
        { path: '/logistique', label: 'Logistique' }
      ]
    }
  ];

  // Ligne 2 : 4 colonnes
  const secondRow = [
    {
      title: 'Nos Directions',
      items: [
        { path: '/direction-siege', label: 'Siège' },
        { path: '/direction-centre', label: 'Direction Centre' },
        { path: '/direction-oran', label: 'Direction Oran' },
        { path: '/direction-bejaia', label: 'Direction Béjaïa' },
        { path: '/direction-annaba', label: 'Direction Annaba' },
        { path: '/direction-ouargla', label: 'Direction Ouargla' },
        { path: '/direction-tindouf', label: 'Direction Tindouf' }
      ]
    },
    {
      title: 'Implantations',
      items: [
        { path: '/implantations', label: 'Implantations' }
      ]
    },
    {
      title: "Nos Appels d'Offres",
      items: [
        { path: '/appels-offres', label: "Nos Appels d'Offres" }
      ]
    },
    {
      title: 'Nous Rejoindre',
      items: [
        { path: '/nous-rejoindre#work-at-sntp', label: 'Travaillez chez SNTP' },
        { path: '/profils-postes#job-profiles', label: 'Nos profils de postes' },
        { path: '/offres-emploi#job-offers', label: "Offres d'emploi" }
      ]
    }
  ];

  return (
    <div className={`fullscreen-menu ${isOpen ? 'is-open' : ''}`}>
      <div className="fullscreen-menu-header">
        <Link to="/" className="fullscreen-menu-logo" onClick={onClose}>
          <img src="/logo.png" alt="SNTP" />
        </Link>
        
        <button 
          className="fullscreen-menu-close" 
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <span className="close-line"></span>
          <span className="close-line"></span>
        </button>
      </div>

      <div className="fullscreen-menu-content">
        {/* LIGNE 1 : 5 COLONNES */}
        <div className="fullscreen-menu-row">
          <div className="fullscreen-menu-grid fullscreen-menu-grid-5">
            {firstRow.map((section, index) => (
              <div key={index} className="fullscreen-menu-column">
                <h3 className="fullscreen-menu-title">{section.title}</h3>
                <ul className="fullscreen-menu-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path} 
                        className="fullscreen-menu-link"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* LIGNE 2 : 4 COLONNES */}
        <div className="fullscreen-menu-row">
          <div className="fullscreen-menu-grid fullscreen-menu-grid-4">
            {secondRow.map((section, index) => (
              <div key={index} className="fullscreen-menu-column">
                <h3 className="fullscreen-menu-title">{section.title}</h3>
                <ul className="fullscreen-menu-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        to={item.path} 
                        className="fullscreen-menu-link"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
