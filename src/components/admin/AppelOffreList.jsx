import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appelOffreService from '../../services/appelOffreService';
import Pagination from '../Pagination';
import './AppelOffreList.css';

const AppelOffresList = ({ onEdit, onDelete, refreshTrigger }) => {
  const navigate = useNavigate();
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 10;

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatut, setFilterStatut] = useState('');

  useEffect(() => {
    loadAppelsOffres();
  }, [currentPage, filterStatut, refreshTrigger]);

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

  const formatDate = (dateString) => {
    if (!dateString) return 'Non spécifié';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
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

  const handleViewDetails = (id) => {
    navigate(`/nos-appels-offres/${id}`);
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
      <div className="liste-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des appels d'offres...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="liste-container">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={loadAppelsOffres} className="btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="liste-container">
      <div className="liste-header">
        <h1>Gestion des Appels D'Offres</h1>
        <p className="subtitle">Consultez et gérez tous les appels d'offres</p>
      </div>

      <div className="liste-filters">
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
            className={`filter-btn ${filterStatut === '' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatut('');
              setCurrentPage(1);
            }}
          >
            Tous
          </button>
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
            className={`filter-btn ${filterStatut === 'annule' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatut('annule');
              setCurrentPage(1);
            }}
          >
            Annulés
          </button>
        </div>
      </div>

      <div className="results-info">
        <p>{filteredAppelsOffres.length} résultat(s) sur {totalItems}</p>
      </div>

      {filteredAppelsOffres.length === 0 ? (
        <div className="empty-state">
          <p>Aucun appel d'offre trouvé</p>
          <small>Essayez de modifier vos critères de recherche</small>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="appels-offres-table">
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Titre</th>
                  <th>Localisation</th>
                  <th>Montant</th>
                  <th>Échéance</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppelsOffres.map((appel) => (
                  <tr key={appel.id}>
                    <td data-label="Référence">
                      <span className="reference">{appel.reference || 'N/A'}</span>
                    </td>
                    <td data-label="Titre">
                      <div className="titre-cell">
                        <span className="titre-text">{appel.titre || 'Sans titre'}</span>
                        {appel.hasPdf && (
                          <span className="pdf-indicator">PDF</span>
                        )}
                      </div>
                    </td>
                    <td data-label="Localisation">{appel.localisation || 'Non spécifié'}</td>
                    <td data-label="Montant">{formatMontant(appel.montant)}</td>
                    <td data-label="Échéance">{formatDate(appel.dateEcheance)}</td>
                    <td data-label="Statut">
                      <span className={`statut-badge statut-${appel.statut}`}>
                        {appel.statut === 'actif' ? 'Actif' : 
                         appel.statut === 'expire' ? 'Expiré' : 'Annulé'}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="action-buttons">
                        <button
                          className="btn-action btn-view"
                          onClick={() => handleViewDetails(appel.id)}
                          title="Voir les détails"
                        >
                          Voir
                        </button>
                        <button
                          className="btn-action btn-edit"
                          onClick={() => onEdit(appel)}
                          title="Modifier"
                        >
                          Modifier
                        </button>
                        <button
                          className="btn-action btn-delete"
                          onClick={() => onDelete(appel.id)}
                          title="Supprimer"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default AppelOffresList;

