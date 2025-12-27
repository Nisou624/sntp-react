import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projetService from '../../services/projetService';
import Pagination from '../Pagination';
import './ProjetList.css';

const ProjetsList = ({ onEdit, onDelete, refreshTrigger }) => {
  const navigate = useNavigate();
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    loadProjets();
  }, [currentPage, filterCategory, filterStatus, refreshTrigger]);

  const loadProjets = async () => {
    try {
      setLoading(true);
      const response = await projetService.getAllProjets({
        page: currentPage,
        limit: limit,
        category: filterCategory,
        status: filterStatus,
        sortBy: 'year',
        sortOrder: 'DESC'
      });

      if (response.success) {
        setProjets(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalItems(response.pagination.total);
      }
    } catch (err) {
      setError('Erreur lors du chargement des projets');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getStatusLabel = (status) => {
    const labels = {
      'completed': 'Terminé',
      'inprogress': 'En cours'
    };
    return labels[status] || status;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      'routes': 'Travaux Routiers',
      'batiments': 'Bâtiments',
      'ouvrages': 'Ouvrages d\'Art',
      'hydraulique': 'Hydraulique',
      'industriel': 'Industriel'
    };
    return labels[category] || category;
  };


  const filteredProjets = projets.filter((projet) => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        projet.titre?.toLowerCase().includes(searchLower) ||
        projet.description?.toLowerCase().includes(searchLower) ||
        projet.location?.toLowerCase().includes(searchLower) ||
        projet.year?.includes(searchLower)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="ProjetList-loading">
        <div className="ProjetList-spinner"></div>
        <p>Chargement des projets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ProjetList-error-message">
        <p>{error}</p>
        <button className="ProjetList-btn-retry" onClick={loadProjets}>
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="ProjetList-liste-container">
      <div className="ProjetList-liste-header">
        <h1>Liste des Projets</h1>
        <p className="ProjetList-subtitle">Consultez et gérez tous les projets réalisés</p>
      </div>

      <div className="ProjetList-liste-filters">
        <div className="ProjetList-search-box">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtres de catégories */}
        <div className="ProjetList-filter-buttons">
          <button
            className={`ProjetList-filter-btn ${filterCategory === '' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('')}
          >
            Toutes catégories
          </button>
          <button
            className={`ProjetList-filter-btn ${filterCategory === 'routes' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('routes')}
          >
            Routes
          </button>
          <button
            className={`ProjetList-filter-btn ${filterCategory === 'batiments' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('batiments')}
          >
            Bâtiments
          </button>
          <button
            className={`ProjetList-filter-btn ${filterCategory === 'ouvrages' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('ouvrages')}
          >
            Ouvrages
          </button>
          <button
            className={`ProjetList-filter-btn ${filterCategory === 'hydraulique' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('hydraulique')}
          >
            Hydraulique
          </button>
          <button
            className={`ProjetList-filter-btn ${filterCategory === 'industriel' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterCategory('industriel')}
          >
            Industriel
          </button>
        </div>

        {/* Filtres de statut */}
        <div className="ProjetList-filter-buttons">
          <button
            className={`ProjetList-filter-btn ${filterStatus === '' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterStatus('')}
          >
            Tous statuts
          </button>
          <button
            className={`ProjetList-filter-btn ${filterStatus === 'completed' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterStatus('completed')}
          >
            Terminés
          </button>
          <button
            className={`ProjetList-filter-btn ${filterStatus === 'inprogress' ? 'ProjetList-active' : ''}`}
            onClick={() => setFilterStatus('inprogress')}
          >
            En cours
          </button>
        </div>
      </div>

      {filteredProjets.length === 0 ? (
        <div className="ProjetList-empty-state">
          <p>Aucun projet trouvé</p>
          <small>Essayez de modifier vos critères de recherche</small>
        </div>
      ) : (
        <>
          <div className="ProjetList-results-info">
            {filteredProjets.length} résultat{filteredProjets.length > 1 ? 's' : ''} sur {totalItems}
          </div>

          <div className="ProjetList-table-responsive">
            <table className="ProjetList-projets-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Titre</th>
                  <th>Catégorie</th>
                  <th>Localisation</th>
                  <th>Année</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjets.map((projet) => (
                  <tr key={projet.id}>
                    <td data-label="Image">
                      <div className="ProjetList-projet-image-thumb">
                        {projet.hasImage ? (
                          <img 
                            src={projetService.getImageUrl(projet.id)}
                            alt={projet.titre} 
                            onError={ (e) => {e.target.src = 'https://via.placeholder.com/80x60?text=Pas+d\'image';}}
                          />
                        ): (
                          <div className="no-image-placeholder">
                            <i className="fas fa-image"></i>
                          </div>
                        )}
                      </div>
                    </td>
                    <td data-label="Titre">
                      <div className="ProjetList-titre-cell">
                        <span className="ProjetList-titre-text">
                          {projet.titre || 'Sans titre'}
                        </span>
                      </div>
                    </td>
                    <td data-label="Catégorie">
                      <span className="ProjetList-category-badge">
                        {getCategoryLabel(projet.category)}
                      </span>
                    </td>
                    <td data-label="Localisation">{projet.location || 'Non spécifié'}</td>
                    <td data-label="Année">
                      <span className="ProjetList-year-badge">{projet.year}</span>
                    </td>
                    <td data-label="Statut">
                      <span
                        className={`ProjetList-statut-badge ${
                          projet.status === 'completed'
                            ? 'ProjetList-statut-completed'
                            : 'ProjetList-statut-in_progress'
                        }`}
                      >
                        {getStatusLabel(projet.status)}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="ProjetList-action-buttons">
                        <button
                          className="ProjetList-btn-action ProjetList-btn-edit"
                          onClick={() => onEdit(projet)}
                        >
                           Modifier
                        </button>
                        <button
                          className="ProjetList-btn-action ProjetList-btn-delete"
                          onClick={() => onDelete(projet.id)}
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

export default ProjetsList;
