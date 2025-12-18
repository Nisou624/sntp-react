// src/components/ImagePlaceholder/ImagePlaceholder.jsx
import React from 'react';
import './ImagePlaceholder.css';

const ImagePlaceholder = ({ category, className = '' }) => {
  const placeholders = {
    routes: {
      icon: '🛣️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      pattern: 'routes'
    },
    batiments: {
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      pattern: 'buildings'
    },
    ouvrages: {
      icon: '🌉',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      pattern: 'bridges'
    },
    hydraulique: {
      icon: '💧',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      pattern: 'water'
    },
    industriel: {
      icon: '🏭',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      pattern: 'industrial'
    },
    all: {
      icon: '🏗️',
      gradient: 'linear-gradient(135deg, #810012 0%, #091441 100%)',
      pattern: 'all'
    }
  };

  const config = placeholders[category] || placeholders.all;

  return (
    <div 
      className={`image-placeholder ${className}`}
      style={{ background: config.gradient }}
    >
      <div className="placeholder-pattern"></div>
      <div className="placeholder-content">
        <span className="placeholder-icon">{config.icon}</span>
      </div>
      <div className="placeholder-overlay"></div>
    </div>
  );
};

export default ImagePlaceholder;

