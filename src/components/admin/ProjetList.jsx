// src/components/admin/ProjetList.jsx
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
      const response = await projetService.getAll({
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
      'in_progress': 'En cours'
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

  const getCategoryIcon = (category) => {
    const icons = {
      'routes': '🛣️',
      'batiments': '🏢',
      'ouvrages': '🌉',
      'hydraulique': '💧',
      'industriel': '🏭'
    };
    return icons[category] || '🏗️';
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
      <div className="liste-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des projets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="liste-container">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={loadProjets} className="btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="liste-container">
      <div className="liste-header">
        <h1>Gestion des Projets</h1>
        <p className="subtitle">Consultez et gérez tous les projets réalisés</p>
      </div>

      <div className="liste-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Rechercher par titre, description, localisation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${!filterCategory ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('');
              setCurrentPage(1);
            }}
          >
            Tous
          </button>
          <button
            className={`filter-btn ${filterCategory === 'routes' ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('routes');
              setCurrentPage(1);
            }}
          >
            🛣️ Routiers
          </button>
          <button
            className={`filter-btn ${filterCategory === 'batiments' ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('batiments');
              setCurrentPage(1);
            }}
          >
            🏢 Bâtiments
          </button>
          <button
            className={`filter-btn ${filterCategory === 'ouvrages' ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('ouvrages');
              setCurrentPage(1);
            }}
          >
            🌉 Ouvrages
          </button>
          <button
            className={`filter-btn ${filterCategory === 'hydraulique' ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('hydraulique');
              setCurrentPage(1);
            }}
          >
            💧 Hydraulique
          </button>
          <button
            className={`filter-btn ${filterCategory === 'industriel' ? 'active' : ''}`}
            onClick={() => {
              setFilterCategory('industriel');
              setCurrentPage(1);
            }}
          >
            🏭 Industriel
          </button>
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${!filterStatus ? 'active' : ''}`}
            onClick={() => {
              setFilterStatus('');
              setCurrentPage(1);
            }}
          >
            Tous les statuts
          </button>
          <button
            className={`filter-btn ${filterStatus === 'completed' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatus('completed');
              setCurrentPage(1);
            }}
          >
            Terminés
          </button>
          <button
            className={`filter-btn ${filterStatus === 'in_progress' ? 'active' : ''}`}
            onClick={() => {
              setFilterStatus('in_progress');
              setCurrentPage(1);
            }}
          >
            En cours
          </button>
        </div>
      </div>

      <div className="results-info">
        <p>{filteredProjets.length} résultats sur {totalItems}</p>
      </div>

      {filteredProjets.length === 0 ? (
        <div className="empty-state">
          <p>Aucun projet trouvé</p>
          <small>Essayez de modifier vos critères de recherche</small>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="projets-table">
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
                    <div className="projet-image-thumb">
                      <img src={projet.image} alt={projet.titre} />
                    </div>
                  </td>
                  <td data-label="Titre">
                    <div className="titre-cell">
                      <span className="titre-text">{projet.titre || 'Sans titre'}</span>
                    </div>
                  </td>
                  <td data-label="Catégorie">
                    <div className="category-badge">
                      <span className="category-icon">{getCategoryIcon(projet.category)}</span>
                      <span>{getCategoryLabel(projet.category)}</span>
                    </div>
                  </td>
                  <td data-label="Localisation">{projet.location || 'Non spécifié'}</td>
                  <td data-label="Année">
                    <span className="year-badge">{projet.year}</span>
                  </td>
                  <td data-label="Statut">
                    <span className={`statut-badge statut-${projet.status}`}>
                      {getStatusLabel(projet.status)}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button
                        className="btn-action btn-edit"
                        onClick={() => onEdit(projet)}
                        title="Modifier"
                      >
                        Modifier
                      </button>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => onDelete(projet.id)}
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
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProjetsList;

