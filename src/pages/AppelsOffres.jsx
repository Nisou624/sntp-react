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
  const limit = 9;

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
      <div className="appels-offres-header">
        <div className="header-content">
          <h1>Nos Appels d'Offres</h1>
          <p className="subtitle">
            Consultez tous les appels d'offres de la SNTP
          </p>
        </div>
      </div>

      <div className="appels-offres-filters">
        <div className="search-box">
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

      <div className="results-count">
        {filteredAppelsOffres.length} résultat{filteredAppelsOffres.length > 1 ? 's' : ''} sur {totalItems}
      </div>

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
                      {daysRemaining}J restant{daysRemaining > 1 ? 's' : ''}
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
                      <strong>Localisation:</strong>
                      <span>{appel.localisation || 'Non spécifié'}</span>
                    </div>

                    <div className="info-item">
                      <strong>Échéance:</strong>
                      <span>{formatDate(appel.dateEcheance)}</span>
                    </div>

                    {appel.montant && (
                      <div className="info-item">
                        <strong>Montant:</strong>
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
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AppelsOffres;

