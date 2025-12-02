import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';

// Fix pour les icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const InteractiveMap = ({ items, mode, selectedItem, onItemClick, isSidebarOpen }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  // Icône unique rouge SNTP
  const getCustomIcon = (isSelected) => {
    const size = isSelected ? 40 : 30;
    const borderWidth = isSelected ? 4 : 3;

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: #dc2626;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: ${borderWidth}px solid white;
          box-shadow: 0 ${isSelected ? 4 : 3}px ${isSelected ? 12 : 10}px rgba(0,0,0,${isSelected ? '0.4' : '0.3'});
          transition: all 0.3s ease;
        "></div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size]
    });
  };

  // Initialisation de la carte
  useEffect(() => {
    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [28.0339, 1.6596],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mapInstanceRef.current);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Redimensionnement de la carte quand la sidebar change
  useEffect(() => {
    if (mapInstanceRef.current) {
      // Petit délai pour laisser l'animation CSS se terminer
      setTimeout(() => {
        mapInstanceRef.current.invalidateSize();
      }, 300); // Correspond à la durée de transition CSS (0.3s)
    }
  }, [isSidebarOpen]);

  // Mise à jour des marqueurs
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Supprimer tous les anciens marqueurs
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Ajouter les nouveaux marqueurs
    items.forEach(item => {
      const isSelected = selectedItem?.id === item.id;
      const marker = L.marker([item.latitude, item.longitude], {
        icon: getCustomIcon(isSelected),
        zIndexOffset: isSelected ? 1000 : 0
      });

      marker.on('click', () => {
        onItemClick(item);
      });

      marker.addTo(mapInstanceRef.current);
      markersRef.current.push(marker);
    });

    // Ajuster la vue
    if (items.length > 0) {
      if (selectedItem || items.length === 1) {
        // Ne pas zoomer excessivement, juste centrer
        const targetItem = selectedItem || items[0];
                mapInstanceRef.current.setView(
          [targetItem.latitude, targetItem.longitude],
          8, // Zoom modéré au lieu de 10
          { animate: true, duration: 0.5 }
        );
      } else {
        // Afficher tous les marqueurs avec un padding confortable
        const bounds = L.latLngBounds(items.map(item => [item.latitude, item.longitude]));
        mapInstanceRef.current.fitBounds(bounds, { 
          padding: [80, 80],
          maxZoom: 8 // Limiter le zoom maximum
        });
      }
    }
  }, [items, selectedItem, onItemClick]);

  return (
    <div className="interactive-map-wrapper">
      <div ref={mapRef} className="map-canvas"></div>
      
      {/* Légende simplifiée */}
      <div className="map-legend">
        <div className="legend-title">LÉGENDE</div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#dc2626' }}></span>
          <span>Implantations SNTP</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;

