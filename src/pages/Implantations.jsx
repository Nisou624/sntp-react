import React, { useState, useMemo } from 'react';
import InteractiveMap from '../components/InteractiveMap';
import { implantations, typesImplantation, wilayas } from '../data/implantations';
import { projects, typesProjet, statusProjet } from '../data/projects';
import './Implantations.css';

const Implantations = () => {
  const [typeImplantation, setTypeImplantation] = useState('direction');
  const [filters, setFilters] = useState({
    types: [],
    status: [],
    wilaya: '',
    ville: ''
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Filtrage des données selon le type d'implantation
  const filteredItems = useMemo(() => {
    let dataSource = [];
    
    if (typeImplantation === 'projets') {
      dataSource = projects;
    } else {
      dataSource = implantations.filter(item => item.type === typeImplantation);
    }
    
    return dataSource.filter(item => {
      if (typeImplantation === 'projets' && filters.types.length > 0 && !filters.types.includes(item.type)) {
        return false;
      }

      if (typeImplantation === 'projets' && filters.status.length > 0 && !filters.status.includes(item.status)) {
        return false;
      }

      if (filters.wilaya && item.wilaya !== filters.wilaya) {
        return false;
      }

      if (filters.ville && !item.ville.toLowerCase().includes(filters.ville.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [typeImplantation, filters]);

  // Statistiques
  const stats = useMemo(() => {
    const allImplantations = implantations;
    const directions = allImplantations.filter(i => i.type === 'direction').length;
    const cilots = allImplantations.filter(i => i.type === 'cilot').length;
    const sites = allImplantations.filter(i => i.type === 'site').length;
    
    return {
      total: filteredItems.length,
      directions,
      cilots,
      sites
    };
  }, [filteredItems]);

  const handleItemClick = (item) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  const handleTypeChange = (newType) => {
    setTypeImplantation(newType);
    setFilters({
      types: [],
      status: [],
      wilaya: '',
      ville: ''
    });
    setSelectedItem(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getTypeLabel = () => {
    if (typeImplantation === 'direction') return 'Direction';
    if (typeImplantation === 'cilot') return 'CILOT';
    if (typeImplantation === 'projets') return 'Projets';
    return '';
  };

  return (
    <div className="implantations-page">
      {/* Header avec titre et filtres */}
      <div className="implantations-header">
        <div className="header-top">
          <h1>Nos Implantations</h1>
          <p className="subtitle">Retrouvez toutes nos implantations en Algérie</p>
        </div>

        {/* Filtres horizontaux */}
        <div className="filters-horizontal">
          {/* Type d'implantation - SELECT */}
          <div className="filter-group">
            <select 
              value={typeImplantation} 
              onChange={(e) => handleTypeChange(e.target.value)}
              className="filter-select"
            >
              <option value="direction">Direction</option>
              <option value="cilot">CILOT</option>
              <option value="projets">Projets</option>
            </select>
          </div>

          {/* Filtre Wilaya */}
          <div className="filter-group">
            <select 
              value={filters.wilaya || ''} 
              onChange={(e) => setFilters({ ...filters, wilaya: e.target.value })}
              className="filter-select"
            >
              <option value="">Wilaya</option>
              {wilayas.map(wilaya => (
                <option key={wilaya} value={wilaya}>{wilaya}</option>
              ))}
            </select>
          </div>

          {/* Filtres spécifiques aux projets */}
          {typeImplantation === 'projets' && (
            <>
              <div className="filter-group">
                <select 
                  value={filters.types[0] || ''} 
                  onChange={(e) => setFilters({ ...filters, types: e.target.value ? [e.target.value] : [] })}
                  className="filter-select"
                >
                  <option value="">Type de projet</option>
                  {typesProjet.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <select 
                  value={filters.status[0] || ''} 
                  onChange={(e) => setFilters({ ...filters, status: e.target.value ? [e.target.value] : [] })}
                  className="filter-select"
                >
                  <option value="">Statut</option>
                  {statusProjet.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {/* Filtre Ville */}
          <div className="filter-group">
            <input
              type="text"
              placeholder="Saisissez le nom d'une ville ou un code postal"
              value={filters.ville || ''}
              onChange={(e) => setFilters({ ...filters, ville: e.target.value })}
              className="filter-input"
            />
          </div>
        </div>

      </div>

      {/* Contenu principal: Liste + Carte */}
      <div className="implantations-content">
        {/* Bouton toggle sidebar */}
        <button 
          className={`sidebar-toggle ${!isSidebarOpen ? 'closed' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? '‹' : '›'}
        </button>

        {/* Liste latérale des implantations/projets */}
        <div className={`items-list ${!isSidebarOpen ? 'collapsed' : ''}`}>
          {filteredItems.map((item) => (
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
                  <p className="item-type">
                    {typeImplantation === 'projets' 
                      ? item.type.replace('_', ' ') 
                      : getTypeLabel()}
                  </p>
                </div>
                <button className="expand-btn">
                  {selectedItem?.id === item.id ? '×' : '›'}
                </button>
              </div>

              {selectedItem?.id === item.id && (
                <div className="item-details">
                  {typeImplantation === 'projets' ? (
                    <>
                      <div className="detail-section">
                        <strong>Adresse</strong>
                        <p>{item.ville}, {item.wilaya}</p>
                      </div>
                      {item.description && (
                        <div className="detail-section">
                          <strong>Description</strong>
                          <p>{item.description}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="detail-section">
                        <strong>Adresse</strong>
                        <p>{item.adresse}</p>
                        <p>{item.ville}, {item.wilaya}</p>
                      </div>
                      {item.telephone && (
                        <div className="detail-section">
                          <strong>Site contact</strong>
                          <p>Tél. : {item.telephone}</p>
                        </div>
                      )}
                      {item.email && (
                        <div className="detail-section">
                          <strong>Email</strong>
                          <p>{item.email}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
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

