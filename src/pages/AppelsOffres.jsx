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
        return { class: 'AppelsOffres-statut-actif', label: 'Actif' };
      case 'expire':
        return { class: 'AppelsOffres-statut-expire', label: 'Expiré' };
      case 'annule':
        return { class: 'AppelsOffres-statut-annule', label: 'Annulé' };
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
      <div className="AppelsOffres-container">
        <div className="AppelsOffres-loading-state">
          <div className="AppelsOffres-spinner"></div>
          <p>Chargement des appels d'offres...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="AppelsOffres-container">
        <div className="AppelsOffres-error-state">
          <p>{error}</p>
          <button onClick={loadAppelsOffres} className="AppelsOffres-btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="AppelsOffres-container">
      <div className="AppelsOffres-header">
        <div className="AppelsOffres-header-content">
          <h1>Nos Appels d'Offres</h1>
          <p className="AppelsOffres-subtitle">
            Consultez tous les appels d'offres de la SNTP
          </p>
        </div>
      </div>

      <div className="AppelsOffres-filters">
        <div className="AppelsOffres-search-box">
          <input
            type="text"
            placeholder="Rechercher par titre, référence, description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="AppelsOffres-filter-buttons">
          <button
            className={`AppelsOffres-filter-btn ${filterStatut === 'actif' ? 'AppelsOffres-active' : ''}`}
            onClick={() => {
              setFilterStatut('actif');
              setCurrentPage(1);
            }}
          >
            Actifs
          </button>
          <button
            className={`AppelsOffres-filter-btn ${filterStatut === 'expire' ? 'AppelsOffres-active' : ''}`}
            onClick={() => {
              setFilterStatut('expire');
              setCurrentPage(1);
            }}
          >
            Expirés
          </button>
          <button
            className={`AppelsOffres-filter-btn ${filterStatut === '' ? 'AppelsOffres-active' : ''}`}
            onClick={() => {
              setFilterStatut('');
              setCurrentPage(1);
            }}
          >
            Tous
          </button>
        </div>
      </div>

      <div className="AppelsOffres-results-count">
        {filteredAppelsOffres.length} résultat{filteredAppelsOffres.length > 1 ? 's' : ''} sur {totalItems}
      </div>

      {filteredAppelsOffres.length === 0 ? (
        <div className="AppelsOffres-no-results">
          <p>Aucun appel d'offre trouvé</p>
        </div>
      ) : (
        <div className="AppelsOffres-grid">
          {filteredAppelsOffres.map((appel) => {
            const statutInfo = getStatutBadge(appel.statut);
            const daysRemaining = calculateDaysRemaining(appel.dateEcheance);

            return (
              <article key={appel.id} className="AppelsOffres-card">
                <div className="AppelsOffres-card-header">
                  <span className={`AppelsOffres-statut-badge ${statutInfo.class}`}>
                    {statutInfo.label}
                  </span>
                  {daysRemaining !== null && daysRemaining > 0 && appel.statut === 'actif' && (
                    <span className="AppelsOffres-deadline-badge">
                      {daysRemaining}J restant{daysRemaining > 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div className="AppelsOffres-card-content">
                  <h3 className="AppelsOffres-titre">{appel.titre || 'Sans titre'}</h3>
                  <p className="AppelsOffres-reference">Réf: {appel.reference || 'N/A'}</p>

                  <p className="AppelsOffres-description">
                    {appel.description ? 
                      (appel.description.length > 150 
                        ? appel.description.substring(0, 150) + '...' 
                        : appel.description)
                      : 'Aucune description disponible.'}
                  </p>

                  <div className="AppelsOffres-info">
                    <div className="AppelsOffres-info-item">
                      <strong>Localisation:</strong>
                      <span>{appel.localisation || 'Non spécifié'}</span>
                    </div>

                    <div className="AppelsOffres-info-item">
                      <strong>Échéance:</strong>
                      <span>{formatDate(appel.dateEcheance)}</span>
                    </div>

                    {appel.montant && (
                      <div className="AppelsOffres-info-item">
                        <strong>Montant:</strong>
                        <span>{formatMontant(appel.montant)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="AppelsOffres-card-footer">
                  <button
                    className="AppelsOffres-btn-details"
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

