// src/pages/AppelsOffres.jsx
import React, { useState, useEffect } from 'react';
import appelOffreService from '../services/appelOffreService';
import Pagination from '../components/Pagination';
import './AppelsOffres.css';

const AppelsOffres = () => {
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit] = useState(10);
  
  // États pour les filtres
  const [filters, setFilters] = useState({
    search: '',
    statut: '',
    localisation: ''
  });

  useEffect(() => {
    loadAppelsOffres();
  }, [currentPage, filters]);

  const loadAppelsOffres = async () => {
    try {
      setLoading(true);
      const response = await appelOffreService.getAll({
        page: currentPage,
        limit: limit,
        sortBy: 'datePublication',
        sortOrder: 'DESC',
        ...filters
      });
      
      if (response.success) {
        setAppelsOffres(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalItems(response.pagination.total);
      }
    } catch (err) {
      setError('Erreur lors du chargement des appels d\'offres');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Revenir à la première page lors du changement de filtre
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR');
  };

  if (loading && currentPage === 1) {
    return (
      <div className="nos-appels-offres-container">
        <div className="loading-spinner">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="nos-appels-offres-container">
      <div className="page-header">
        <h1> Appels d'Offres</h1>
        <p>Consultez tous nos appels d'offres en cours</p>
      </div>

      {/* Filtres */}
      <div className="filters-section">
        <div className="filter-group">
          <input
            type="text"
            name="search"
            placeholder="Rechercher..."
            value={filters.search}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>
        
        <div className="filter-group">
          <select
            name="statut"
            value={filters.statut}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Tous les statuts</option>
            <option value="actif">Actif</option>
            <option value="expire">Expiré</option>
            <option value="annule">Annulé</option>
          </select>
        </div>
        
        <div className="filter-group">
          <input
            type="text"
            name="localisation"
            placeholder="Localisation"
            value={filters.localisation}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </div>
      </div>

      {/* Compteur */}
      <div className="results-count">
        {totalItems} résultat(s) trouvé(s)
      </div>

      {/* Affichage des erreurs */}
      {error && <div className="alert alert-error">{error}</div>}

      {/* Liste des appels d'offres */}
      <div className="appels-offres-grid">
        {appelsOffres.length === 0 ? (
          <div className="no-results">
            Aucun appel d'offre trouvé
          </div>
        ) : (
          appelsOffres.map((appel) => (
            <div key={appel.id} className="appel-card">
              <div className="appel-header">
                <h3>{appel.titre}</h3>
                <span className={`status-badge status-${appel.statut}`}>
                  {appel.statut}
                </span>
              </div>
              
              <div className="appel-content">
                <p className="description">{appel.description}</p>
                
                <div className="appel-details">
                  <div className="detail-item">
                    <span className="label">Référence:</span>
                    <span className="value">{appel.reference}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="label">Localisation:</span>
                    <span className="value">{appel.localisation}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="label">Date de publication:</span>
                    <span className="value">{formatDate(appel.datePublication)}</span>
                  </div>
                  
                  <div className="detail-item">
                    <span className="label">Date d'échéance:</span>
                    <span className="value">{formatDate(appel.dateEcheance)}</span>
                  </div>
                  
                  {appel.montant && (
                    <div className="detail-item">
                      <span className="label">Montant:</span>
                      <span className="value">
                        {parseFloat(appel.montant).toLocaleString('fr-DZ')} DZD
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {appel.pdfPath && (
                <div className="appel-footer">
                  <a
                    href={`${process.env.REACT_APP_API_URL}/${appel.pdfPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-download"
                  >
                    📄 Télécharger le PDF
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AppelsOffres;

