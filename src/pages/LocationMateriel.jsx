import React from 'react';
import { FaTruck, FaTools, FaCogs, FaHeadset } from 'react-icons/fa';
import './LocationMateriel.css';

const LocationMateriel = () => {
  const equipments = [
    {
      category: "Engins de Terrassement",
      items: [
        { name: "Bulldozer Caterpillar D8", power: "310 HP", capacity: "Lame 4,9 m³" },
        { name: "Pelle hydraulique CAT 320", power: "121 HP", capacity: "Godet 1,2 m³" },
        { name: "Chargeuse sur pneus CAT 950", power: "195 HP", capacity: "Godet 3,4 m³" },
        { name: "Niveleuse Komatsu GD555", power: "170 HP", capacity: "Lame 4,3 m" }
      ]
    },
    {
      category: "Engins de Compactage",
      items: [
        { name: "Rouleau compacteur BOMAG BW 213", power: "115 HP", capacity: "Cylindre 2,13 m" },
        { name: "Compacteur à pneus BOMAG BW 24", power: "174 HP", capacity: "9 pneus avant" },
        { name: "Plaque vibrante BOMAG BPR 35/60", power: "5,5 HP", capacity: "350 kg" }
      ]
    },
    {
      category: "Matériel de Chaussée",
      items: [
        { name: "Finisseur asphalte VÖGELE S1800", power: "129 HP", capacity: "Largeur 9 m" },
        { name: "Centrale enrobage MARINI TOP TOWER", capacity: "240 t/h" },
        { name: "Répandeuse gravillons", capacity: "8 m³" }
      ]
    },
    {
      category: "Camions & Transport",
      items: [
        { name: "Camion-benne IVECO TRAKKER 8x4", capacity: "20 m³" },
        { name: "Camion malaxeur béton 8 m³", capacity: "8 m³" },
        { name: "Semi-remorque porte-engins 60 T", capacity: "60 tonnes" }
      ]
    }
  ];

  return (
    <div className="location-materiel-page">
      {/* Hero Section */}
      <header className="location-hero">
        <div className="location-hero-overlay"></div>
        <div className="container location-hero-content">
          <h4 className="location-subtitle">Parc Moderne & Entretenu</h4>
          <h1 className="location-title">LOCATION DE MATÉRIEL</h1>
          <div className="hero-divider"></div>
          <p className="location-description">
            Plus de <strong>200 engins</strong> de dernière génération disponibles pour vos chantiers. Location courte/longue durée avec ou sans opérateur.
          </p>
        </div>
      </header>

      {/* Avantages Section */}
      <section className="avantages-section section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">NOS ATOUTS</h4>
            <h2 className="section-title">Pourquoi Louer chez SNTP ?</h2>
            <div className="section-divider center"></div>
          </div>

          <div className="avantages-grid">
            <div className="avantage-card">
              <FaTruck className="avantage-icon" />
              <h3 className="avantage-title">Parc Moderne</h3>
              <p className="avantage-text">
                Équipements récents (2018-2024) des marques leaders : Caterpillar, Komatsu, BOMAG, VÖGELE.
              </p>
            </div>

            <div className="avantage-card">
              <FaTools className="avantage-icon" />
              <h3 className="avantage-title">Maintenance Préventive</h3>
              <p className="avantage-text">
                Atelier certifié ISO 9001, révisions systématiques toutes les 250 heures, taux de disponibilité 98%.
              </p>
            </div>

            <div className="avantage-card">
              <FaCogs className="avantage-icon" />
              <h3 className="avantage-title">Flexibilité</h3>
              <p className="avantage-text">
                Location journalière, hebdomadaire ou mensuelle. Possibilité de location-vente après 12 mois.
              </p>
            </div>

            <div className="avantage-card">
              <FaHeadset className="avantage-icon" />
              <h3 className="avantage-title">Support 24/7</h3>
              <p className="avantage-text">
                Assistance technique joignable H24, dépannage rapide, remplacement sous 24h si panne majeure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipements Section */}
      <section className="equipements-section section-gray">
        <div className="container">
          <div className="section-header">
            <h4 className="section-subtitle">NOTRE FLOTTE</h4>
            <h2 className="section-title">Catalogue de Matériel Disponible</h2>
            <div className="section-divider center"></div>
            <p className="section-description">
              Des engins performants pour tous vos besoins en travaux publics
            </p>
          </div>

          <div className="equipements-tabs">
            {equipments.map((category, index) => (
              <div key={index} className="equipement-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="equipements-list">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="equipement-item">
                      <div className="equipement-info">
                        <h4 className="equipement-name">{item.name}</h4>
                        <div className="equipement-specs">
                          {item.power && (
                            <span className="spec-badge">
                              <FaCogs className="spec-icon" />
                              {item.power}
                            </span>
                          )}
                          <span className="spec-badge">
                            <FaTools className="spec-icon" />
                            {item.capacity}
                          </span>
                        </div>
                      </div>
                      <button className="equipement-btn">
                        <span>Demander un devis</span>
                        <svg className="btn-icon" viewBox="0 0 448 512" width="14" height="14">
                          <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="conditions-section section">
        <div className="container">
          <div className="conditions-grid">
            <div className="conditions-content">
              <h4 className="section-subtitle">MODALITÉS</h4>
              <h2 className="section-title">Conditions de Location</h2>
              <div className="section-divider"></div>
              
              <div className="conditions-list">
                <div className="condition-item">
                  <div className="condition-number">01</div>
                  <div className="condition-details">
                    <h3>Documents Requis</h3>
                    <p>Registre de commerce, attestation fiscale/parafiscale en cours de validité, caution bancaire (10% du montant).</p>
                  </div>
                </div>

                <div className="condition-item">
                  <div className="condition-number">02</div>
                  <div className="condition-details">
                    <h3>Tarification</h3>
                    <p>Tarif dégressif : -10% après 1 mois, -15% après 3 mois. Carburant et lubrifiant à la charge du locataire.</p>
                  </div>
                </div>

                <div className="condition-item">
                  <div className="condition-number">03</div>
                  <div className="condition-details">
                    <h3>Livraison & Reprise</h3>
                    <p>Livraison sous 48h (région Alger) / 72h (hors Alger). Transport assuré par SNTP.</p>
                  </div>
                </div>

                <div className="condition-item">
                  <div className="condition-number">04</div>
                  <div className="condition-details">
                    <h3>Assurance</h3>
                    <p>Tous risques chantier obligatoire (franchise 5%). Attestation à fournir avant livraison.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="conditions-image">
              <img 
                src="/wp-content/uploads/2025/07/equipment-maintenance.jpg" 
                alt="Matériel SNTP" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-quote">
              <svg className="quote-icon" viewBox="0 0 512 512" width="60" height="60">
                <path fill="rgba(255,255,255,0.2)" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <p className="testimonial-text">
                "Location de 15 engins pour notre chantier autoroutier. Équipements neufs, livraison respectée, aucune panne en 6 mois. Service impeccable !"
              </p>
              <div className="testimonial-author">
                <strong>Mohamed Belkacem</strong>
                <span>Directeur Travaux, ENG-COSIDER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="location-cta-section">
        <div className="container">
          <div className="location-cta-content">
            <h2>Besoin d'un devis personnalisé ?</h2>
            <p>Contactez notre service location pour une étude tarifaire adaptée à la durée et au volume de votre projet.</p>
            <div className="cta-buttons">
              <a href="/contact" className="hero-btn hero-btn-primary">
                <span>Demander un devis</span>
                <svg className="btn-icon" viewBox="0 0 448 512" width="16" height="16">
                  <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
              <a href="tel:023812345" className="hero-btn hero-btn-outline">
                <span>023 81 23 45</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationMateriel;

