import React from 'react';
import './MapFilters.css';

const MapFilters = ({ 
  mode, 
  onModeChange, 
  filters, 
  onFilterChange,
  typesProjet,
  statusProjet,
  typesImplantation,
  wilayas 
}) => {
  
  const handleTypeChange = (type) => {
    const currentTypes = filters.types || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    onFilterChange({ ...filters, types: newTypes });
  };

  const handleStatusChange = (status) => {
    const currentStatus = filters.status || [];
    const newStatus = currentStatus.includes(status)
      ? currentStatus.filter(s => s !== status)
      : [...currentStatus, status];
    onFilterChange({ ...filters, status: newStatus });
  };

  const handleWilayaChange = (e) => {
    onFilterChange({ ...filters, wilaya: e.target.value });
  };

  const handleVilleChange = (e) => {
    onFilterChange({ ...filters, ville: e.target.value });
  };

  const resetFilters = () => {
    onFilterChange({
      types: [],
      status: [],
      wilaya: '',
      ville: ''
    });
  };

  return (
    <div className="map-filters">
      {/* Sélecteur de mode */}
      <div className="mode-selector">
        <button
          className={`mode-btn ${mode === 'projets' ? 'active' : ''}`}
          onClick={() => onModeChange('projets')}
        >
          Projets
        </button>
        <button
          className={`mode-btn ${mode === 'implantations' ? 'active' : ''}`}
          onClick={() => onModeChange('implantations')}
        >
          Implantations
        </button>
      </div>

      {/* Filtres de localisation */}
      <div className="filter-section">
        <h3>Localisation</h3>
        <div className="filter-row">
          <div className="filter-group">
            <label>Wilaya</label>
            <select 
              value={filters.wilaya || ''} 
              onChange={handleWilayaChange}
              className="filter-select"
            >
              <option value="">Toutes les wilayas</option>
              {wilayas.map(wilaya => (
                <option key={wilaya} value={wilaya}>{wilaya}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>Ville</label>
            <input
              type="text"
              placeholder="Rechercher une ville"
              value={filters.ville || ''}
              onChange={handleVilleChange}
              className="filter-input"
            />
          </div>
        </div>
      </div>

      {/* Filtres spécifiques selon le mode */}
      {mode === 'projets' ? (
        <>
          {/* Filtres types de projets */}
          <div className="filter-section">
            <h3>Type de projet</h3>
            <div className="filter-chips">
              {typesProjet.map(type => (
                <button
                  key={type.value}
                  className={`filter-chip ${(filters.types || []).includes(type.value) ? 'active' : ''}`}
                  onClick={() => handleTypeChange(type.value)}
                  style={{
                    '--chip-color': type.color
                  }}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtres statut */}
          <div className="filter-section">
            <h3>Statut</h3>
            <div className="filter-chips">
              {statusProjet.map(status => (
                <button
                  key={status.value}
                  className={`filter-chip ${(filters.status || []).includes(status.value) ? 'active' : ''}`}
                  onClick={() => handleStatusChange(status.value)}
                  style={{
                    '--chip-color': status.color
                  }}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Filtres types d'implantations */}
          <div className="filter-section">
            <h3>Type d'implantation</h3>
            <div className="filter-chips">
              {typesImplantation.map(type => (
                <button
                  key={type.value}
                  className={`filter-chip ${(filters.types || []).includes(type.value) ? 'active' : ''}`}
                  onClick={() => handleTypeChange(type.value)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Bouton de réinitialisation */}
      <div className="filter-actions">
        <button className="reset-btn" onClick={resetFilters}>
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
};

export default MapFilters;

