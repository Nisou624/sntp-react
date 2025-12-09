// src/pages/NosDirections.jsx

import React, { useState, useEffect } from 'react';
import './NosDirections.css';
import DirectionCard from '../components/DirectionCard/DirectionCard';
import directionsData from '../data/directionsData';
import { Building2, MapPin } from 'lucide-react';

const NosDirections = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation au chargement
    setIsLoaded(true);
    
    // Scroll vers le haut
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`nos-directions-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="directions-hero">
        <div className="directions-hero-overlay"></div>
        <div className="directions-hero-content">
          <div className="directions-hero-icon">
            <Building2 size={48} />
          </div>
          <h1 className="directions-hero-title">Nos Directions</h1>
          <p className="directions-hero-subtitle">
            Découvrez nos implantations à travers le territoire national
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="directions-content">
        <div className="directions-container">
          <div className="directions-intro">
            <h2 className="directions-section-title">
              Notre Réseau National
            </h2>
            <p className="directions-section-description">
              La SNTP dispose d'un réseau de directions régionales stratégiquement 
              implantées sur tout le territoire national pour mieux servir ses clients 
              et accompagner le développement des infrastructures en Algérie.
            </p>
          </div>

          <div className="directions-grid">
            {directionsData.map((direction, index) => (
              <div 
                key={direction.id} 
                className="direction-grid-item"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <DirectionCard direction={direction} />
              </div>
            ))}
          </div>

          {/* Section Info */}
          <div className="directions-footer-info">
            <div className="footer-info-card">
              <h3>Besoin d'informations ?</h3>
              <p>
                Contactez la direction la plus proche de votre région pour 
                obtenir des renseignements sur nos services et projets.
              </p>
            </div>
            <div className="footer-info-card">
              <h3>Horaires d'ouverture</h3>
              <p>
                Du dimanche au jeudi : 08h00 - 16h30<br />
                Fermé les vendredis et jours fériés
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosDirections;

