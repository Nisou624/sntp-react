import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appelOffreService from '../services/appelOffreService';
import Pagination from '../components/Pagination';
import './AppelsOffres.css';

const AppelsOffres = () => {
  const navigate = useNavigate();
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 9; // 9 éléments par page

  // Filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatut, setFilterStatut] = useState('actif');

  useEffect(() => {
    loadAppelsOffres();
  }, [currentPage, filterStatut]);

  const loadAppelsOffres = async () => {
    try {
      setLoading(true);
      const response = await appelOffreService.getAll({
        page: currentPage,
        limit: limit,
        statut: filterStatut,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
      });

      if (response.success) {
        setAppelsOffres(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalItems(response.pagination.total);
      }
    } catch (err) {
      setError('Erreur lors du chargement des appels d\'offres');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (id) => {
    navigate(`/nos-appels-offres/${id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Non spécifié';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return 'Date invalide';
    }
  };

  const formatMontant = (montant) => {
    if (!montant || montant === 0) return 'Non spécifié';
    try {
      return new Intl.NumberFormat('fr-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 0
      }).format(montant);
    } catch {
      return `${montant.toLocaleString('fr-FR')} DA`;
    }
  };

  const getStatutBadge = (statut) => {
    switch (statut) {
      case 'actif':
        return { class: 'statut-actif', label: 'Actif' };
      case 'expire':
        return { class: 'statut-expire', label: 'Expiré' };
      case 'annule':
        return { class: 'statut-annule', label: 'Annulé' };
      default:
        return { class: '', label: statut };
    }
  };

  const calculateDaysRemaining = (dateEcheance) => {
    if (!dateEcheance) return null;
    const deadline = new Date(dateEcheance);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Filtrage local (recherche)
  const filteredAppelsOffres = appelsOffres.filter((ao) => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        ao.titre?.toLowerCase().includes(searchLower) ||
        ao.reference?.toLowerCase().includes(searchLower) ||
        ao.description?.toLowerCase().includes(searchLower) ||
        ao.localisation?.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="appels-offres-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Chargement des appels d'offres...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="appels-offres-container">
        <div className="error-state">
          <p>{error}</p>
          <button onClick={loadAppelsOffres} className="btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appels-offres-container">
      {/* En-tête */}
      <div className="appels-offres-header">
        <div className="header-content">
          <h1>Nos Appels d'Offres</h1>
          <p className="subtitle">
            Consultez tous les appels d'offres de la SNTP
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="appels-offres-filters">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Rechercher par titre, référence, description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filterStatut === 'actif' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatut('actif');
              setCurrentPage(1);
            }}
          >
            Actifs
          </button>
          <button
            className={`filter-btn ${filterStatut === 'expire' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatut('expire');
              setCurrentPage(1);
            }}
          >
            Expirés
          </button>
          <button
            className={`filter-btn ${filterStatut === '' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatut('');
              setCurrentPage(1);
            }}
          >
            Tous
          </button>
        </div>
      </div>

      {/* Compteur de résultats */}
      <div className="results-count">
        {filteredAppelsOffres.length} résultat{filteredAppelsOffres.length > 1 ? 's' : ''} sur {totalItems}
      </div>

      {/* Grille des appels d'offres */}
      {filteredAppelsOffres.length === 0 ? (
        <div className="no-results">
          <p>Aucun appel d'offre trouvé</p>
        </div>
      ) : (
        <div className="appels-offres-grid">
          {filteredAppelsOffres.map((appel) => {
            const statutInfo = getStatutBadge(appel.statut);
            const daysRemaining = calculateDaysRemaining(appel.dateEcheance);

            return (
              <article key={appel.id} className="appel-card">
                <div className="appel-card-header">
                  <span className={`statut-badge ${statutInfo.class}`}>
                    {statutInfo.label}
                  </span>
                  {daysRemaining !== null && daysRemaining > 0 && appel.statut === 'actif' && (
                    <span className="deadline-badge">
                      {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} restant{daysRemaining > 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div className="appel-card-content">
                  <h3 className="appel-titre">{appel.titre || 'Sans titre'}</h3>
                  <p className="appel-reference">Réf: {appel.reference || 'N/A'}</p>

                  <p className="appel-description">
                    {appel.description ? 
                      (appel.description.length > 150 
                        ? appel.description.substring(0, 150) + '...' 
                        : appel.description)
                      : 'Aucune description disponible.'}
                  </p>

                  <div className="appel-info">
                    <div className="info-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{appel.localisation || 'Non spécifié'}</span>
                    </div>

                    <div className="info-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Échéance: {formatDate(appel.dateEcheance)}</span>
                    </div>

                    {appel.montant && (
                      <div className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span>{formatMontant(appel.montant)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="appel-card-footer">
                  <button
                    className="btn-view-details"
                    onClick={() => handleViewDetails(appel.id)}
                  >
                    Voir les détails
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

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

