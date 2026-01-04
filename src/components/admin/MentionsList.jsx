// src/components/admin/MentionsList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMentions, deleteMention } from '../../services/mentionMediaService';
import adminPaths from '../../config/adminConfig';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaExternalLinkAlt, FaPlus, FaStar } from 'react-icons/fa';
import './MentionsList.css';

const MentionsList = () => {
  const navigate = useNavigate();
  const [mentions, setMentions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    statut: '',
    type: '',
    search: '',
    sortBy: 'datePublication',
    sortOrder: 'DESC'
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });

  useEffect(() => {
    loadMentions();
  }, [pagination.page, filters]);

  const loadMentions = async () => {
    try {
      setLoading(true);
      const response = await getAllMentions({
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      });

      setMentions(response.data);
      setPagination(prev => ({
        ...prev,
        total: response.pagination.total,
        totalPages: response.pagination.totalPages
      }));
    } catch (error) {
      toast.error('Erreur lors du chargement des mentions');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, titre) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${titre}" ?`)) {
      try {
        await deleteMention(id);
        toast.success('Mention supprimée avec succès');
        loadMentions();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
        console.error(error);
      }
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTypeBadge = (type) => {
    const badges = {
      article: { label: 'Article', className: 'type-article' },
      video: { label: 'Vidéo', className: 'type-video' },
      podcast: { label: 'Podcast', className: 'type-podcast' },
      interview: { label: 'Interview', className: 'type-interview' },
      communique: { label: 'Communiqué', className: 'type-communique' }
    };
    const badge = badges[type] || badges.article;
    return <span className={`type-badge ${badge.className}`}>{badge.label}</span>;
  };

  const getStatutBadge = (statut) => {
    const badges = {
      actif: { label: 'Actif', className: 'statut-actif' },
      archive: { label: 'Archivé', className: 'statut-archive' }
    };
    const badge = badges[statut] || badges.actif;
    return <span className={`statut-badge ${badge.className}`}>{badge.label}</span>;
  };

  return (
    <div className="mentions-list-container">
      <div className="mentions-list-header">
        <h1>Gestion des Mentions Médias</h1>
        <button 
          className="btn-primary"
          onClick={() => navigate(adminPaths.mentionsNew)}
        >
          <FaPlus /> Nouvelle Mention
        </button>
      </div>

      {/* Filtres */}
      <div className="mentions-filters">
        <div className="search-form">
          <input
            type="text"
            name="search"
            placeholder="Rechercher..."
            value={filters.search}
            onChange={handleFilterChange}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <select
            name="statut"
            value={filters.statut}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Tous les statuts</option>
            <option value="actif">Actif</option>
            <option value="archive">Archivé</option>
          </select>

          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Tous les types</option>
            <option value="article">Article</option>
            <option value="video">Vidéo</option>
            <option value="podcast">Podcast</option>
            <option value="interview">Interview</option>
            <option value="communique">Communiqué</option>
          </select>

          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="datePublication">Date de publication</option>
            <option value="titre">Titre</option>
            <option value="source">Source</option>
            <option value="createdat">Date de création</option>
          </select>

          <select
            name="sortOrder"
            value={filters.sortOrder}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="DESC">Décroissant</option>
            <option value="ASC">Croissant</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="loading">Chargement...</div>
      ) : mentions.length === 0 ? (
        <div className="no-data">
          <p>Aucune mention trouvée</p>
        </div>
      ) : (
        <>
          <div className="mentions-table-wrapper">
            <table className="mentions-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titre</th>
                  <th>Source</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Date pub.</th>
                  <th>Featured</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mentions.map((mention) => (
                  <tr key={mention.id}>
                    <td>{mention.id}</td>
                    <td className="mention-title-cell">
                      <div className="mention-title-wrapper">
                        {mention.logoSource && (
                          <img 
                            src={mention.logoSource} 
                            alt={mention.source}
                            className="mention-logo-thumb"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        )}
                        <div>
                          <div className="mention-title">{mention.titre}</div>
                          {mention.description && (
                            <div className="mention-excerpt">
                              {mention.description.substring(0, 60)}...
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{mention.source || 'N/A'}</td>
                    <td>{getTypeBadge(mention.type)}</td>
                    <td>{getStatutBadge(mention.statut)}</td>
                    <td>{formatDate(mention.datePublication)}</td>
                    <td className="featured-cell">
                      {mention.featured && (
                        <FaStar className="featured-icon" title="À la une" />
                      )}
                    </td>
                    <td className="actions-cell">
                      <button
                        className="btn-action btn-view"
                        onClick={() => window.open(mention.url, '_blank')}
                        title="Voir"
                      >
                        <FaExternalLinkAlt />
                      </button>
                      <button
                        className="btn-action btn-edit"
                        onClick={() => navigate(adminPaths.mentionsEdit(mention.id))}
                        title="Modifier"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => handleDelete(mention.id, mention.titre)}
                        title="Supprimer"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="pagination-btn"
              disabled={pagination.page === 1}
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
            >
              Précédent
            </button>
            <span className="pagination-info">
              Page {pagination.page} sur {pagination.totalPages} ({pagination.total} mentions)
            </span>
            <button
              className="pagination-btn"
              disabled={pagination.page === pagination.totalPages}
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
            >
              Suivant
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MentionsList;
