import React, { useState, useMemo } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import { implantations, typesImplantation, wilayas } from '../data/implantations';
import './Implantations.css';

const Implantations = () => {
  const [typeImplantation, setTypeImplantation] = useState('direction');
  const [filters, setFilters] = useState({
    wilaya: '',
    ville: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Filtrage des données selon le type d'implantation
  const filteredItems = useMemo(() => {
    let dataSource = implantations.filter(item => item.type === typeImplantation);

    return dataSource.filter(item => {
      if (filters.wilaya && item.wilaya !== filters.wilaya) return false;
      if (filters.ville && !item.ville.toLowerCase().includes(filters.ville.toLowerCase())) return false;
      return true;
    });
  }, [typeImplantation, filters]);

  // Statistiques - Directions et Unités uniquement
  const stats = useMemo(() => {
    const allImplantations = implantations;
    const directions = allImplantations.filter(i => i.type === 'direction').length;
    const unites = allImplantations.filter(i => i.type === 'unite').length;
    
    return {
      total: filteredItems.length,
      directions,
      unites
    };
  }, [filteredItems]);

  const handleItemClick = (item) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  const handleTypeChange = (newType) => {
    setTypeImplantation(newType);
    setFilters({ wilaya: '', ville: '' });
    setSelectedItem(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getTypeLabel = () => {
    if (typeImplantation === 'direction') return 'Direction';
    if (typeImplantation === 'unite') return 'Unité';
    return '';
  };

  return (
    <div className="implantations-page">
      {/* Header avec titre et filtres */}
      <div className="implantations-header">
        <div className="header-top">
          <h1>Nos Implantations</h1>
          <p className="subtitle">Retrouvez toutes nos directions et unités en Algérie</p>
        </div>

        {/* Filtres horizontaux */}
        <div className="filters-horizontal">
          {/* Type d'implantation - Directions et Unités uniquement */}
          <div className="filter-group">
            <select
              value={typeImplantation}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="filter-select"
            >
              <option value="direction">Directions</option>
              <option value="unite">Unités</option>
            </select>
          </div>

          {/* Filtre Wilaya */}
          <div className="filter-group">
            <select
              value={filters.wilaya}
              onChange={(e) => setFilters({ ...filters, wilaya: e.target.value })}
              className="filter-select"
            >
              <option value="">Toutes les wilayas</option>
              {wilayas.map(wilaya => (
                <option key={wilaya} value={wilaya}>{wilaya}</option>
              ))}
            </select>
          </div>

          {/* Filtre Ville */}
          <div className="filter-group">
            <input
              type="text"
              placeholder="Rechercher une ville..."
              value={filters.ville}
              onChange={(e) => setFilters({ ...filters, ville: e.target.value })}
              className="filter-input"
            />
          </div>
        </div>

      </div>

      {/* Contenu principal : Liste + Carte */}
      <div className="implantations-content">
        {/* Bouton toggle sidebar */}
        <button
          className={`sidebar-toggle ${!isSidebarOpen ? 'closed' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? '←' : '→'}
        </button>

        {/* Liste latérale des implantations */}
        <div className={`items-list ${!isSidebarOpen ? 'collapsed' : ''}`}>
          {filteredItems.length === 0 ? (
            <div className="no-results">
              <p>Aucune {getTypeLabel().toLowerCase()} trouvée avec ces critères.</p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div
                key={item.id}
                className={`item-card ${selectedItem?.id === item.id ? 'expanded' : ''}`}
                onClick={() => handleItemClick(item)}
              >
                <div className="item-header">
                  <div className="item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L12 22M12 2L4 6M12 2L20 6" stroke="#dc2626" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="item-info">
                    <h3>{item.nom}</h3>
                    <p className="item-type">{getTypeLabel()}</p>
                  </div>
                  <button className="expand-btn">
                    {selectedItem?.id === item.id ? '−' : '+'}
                  </button>
                </div>

                {selectedItem?.id === item.id && (
                  <div className="item-details">
                    <div className="detail-section">
                      <strong>Adresse</strong>
                      <p>{item.adresse}</p>
                      <p>{item.ville}, {item.wilaya}</p>
                    </div>
                    {item.telephone && (
                      <div className="detail-section">
                        <strong>Téléphone</strong>
                        <p>{item.telephone}</p>
                      </div>
                    )}
                    {item.email && (
                      <div className="detail-section">
                        <strong>Email</strong>
                        <p><a href={`mailto:${item.email}`}>{item.email}</a></p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Carte interactive */}
        <div className={`map-section ${!isSidebarOpen ? 'expanded' : ''}`}>
          <InteractiveMap
            items={filteredItems}
            mode={typeImplantation}
            selectedItem={selectedItem}
            onItemClick={handleItemClick}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Implantations;

