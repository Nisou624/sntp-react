// src/components/DirectionCard/DirectionCard.jsx

import React from 'react';
import './DirectionCard.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const DirectionCard = ({ direction }) => {
  // Fonction pour générer une image de placeholder basée sur l'ID
  const getPlaceholderImage = (id) => {
    const images = [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Buildings
      'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&q=80', // Architecture
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', // Modern building
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80', // City view
      'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=800&q=80', // Office building
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80', // Industrial
      'https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?w=800&q=80'  // Architecture
    ];
    return images[(id - 1) % images.length];
  };

  return (
    <div 
      className="direction-card"
      style={{
        '--hover-bg-image': `url('${getPlaceholderImage(direction.id)}')`
      }}
    >
      <div className="direction-card-image-container">
        <img 
          src={direction.image} 
          alt={direction.name}
          className="direction-card-image"
          onError={(e) => {
            e.target.src = getPlaceholderImage(direction.id);
          }}
        />
        <div className="direction-card-overlay">
          <span className="direction-card-location">{direction.location}</span>
        </div>
      </div>
      
      <div className="direction-card-content">
        <h3 className="direction-card-title">{direction.name}</h3>
        
        <div className="direction-card-info">
          <div className="direction-info-item">
            <MapPin className="direction-icon" size={18} />
            <span className="direction-info-text">{direction.address}</span>
          </div>
          
          <div className="direction-info-item">
            <Phone className="direction-icon" size={18} />
            <a href={`tel:${direction.phone}`} className="direction-info-link">
              {direction.phone}
            </a>
          </div>
          
          <div className="direction-info-item">
            <Mail className="direction-icon" size={18} />
            <a href={`mailto:${direction.email}`} className="direction-info-link">
              {direction.email}
            </a>
          </div>
        </div>
        
        <button className="direction-card-button">
          Contacter cette direction
        </button>
      </div>
    </div>
  );
};

export default DirectionCard;

