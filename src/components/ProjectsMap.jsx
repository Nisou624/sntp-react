import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ProjectsMap.css';

// Fix pour les icônes Leaflet avec React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Icônes personnalisées par catégorie
const createCustomIcon = (category, status) => {
  const colors = {
    routes: '#FF6B6B',
    batiments: '#4ECDC4',
    ouvrages: '#45B7D1',
    hydraulique: '#96CEB4',
    industriel: '#FFEAA7',
    all: '#810012'
  };

  const statusBorder = status === 'completed' ? '#2ecc71' : '#f39c12';

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${colors[category] || colors.all};
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        border: 3px solid ${statusBorder};
        transform: rotate(-45deg);
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      ">
        <div style="
          transform: rotate(45deg);
          margin-top: 3px;
          margin-left: 3px;
          color: white;
          font-size: 16px;
          font-weight: bold;
        ">📍</div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

// Composant pour centrer la carte sur les marqueurs visibles
const MapController = ({ projects }) => {
  const map = useMap();

  useEffect(() => {
    if (projects && projects.length > 0) {
      const bounds = L.latLngBounds(projects.map(p => p.coordinates));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
    }
  }, [projects, map]);

  return null;
};

const ProjectsMap = ({ projects, onProjectClick }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects || projects.length === 0) {
    return (
      <div className="map-container-empty">
        <p>Aucun projet à afficher sur la carte</p>
      </div>
    );
  }

  // Centre par défaut sur l'Algérie
  const defaultCenter = [28.0339, 1.6596];
  const defaultZoom = 5;

  return (
    <div className="map-container">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController projects={projects} />

        {projects.map((project) => (
          <Marker
            key={project.id}
            position={project.coordinates}
            icon={createCustomIcon(project.category, project.status)}
            eventHandlers={{
              click: () => {
                setSelectedProject(project);
                if (onProjectClick) {
                  onProjectClick(project);
                }
              }
            }}
          >
            <Popup>
              <div className="map-popup">
                <div className="popup-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <span className={`popup-status ${project.status}`}>
                    {project.status === 'completed' ? 'Terminé' : 'En cours'}
                  </span>
                </div>
                <div className="popup-content">
                  <h3>{project.title}</h3>
                  <p className="popup-location">📍 {project.location}</p>
                  <p className="popup-year">📅 {project.year}</p>
                  <p className="popup-description">{project.description}</p>
                  <button 
                    className="popup-details-btn"
                    onClick={() => onProjectClick && onProjectClick(project)}
                  >
                    Voir les détails →
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Légende */}
      <div className="map-legend">
        <h4>Statut des projets</h4>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-marker completed"></span>
            <span>Terminés</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker in-progress"></span>
            <span>En cours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMap;

