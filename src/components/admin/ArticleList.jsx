// src/components/admin/ArticleList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles, deleteArticle } from '../../services/articleService';
import { toast } from 'react-toastify';
import './ArticleList.css';

const ArticleList = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });
  const [filters, setFilters] = useState({
    statut: '',
    search: '',
    sortBy: 'datePublication',
    sortOrder: 'DESC'
  });

  // Charger les articles
  const loadArticles = async () => {
    try {
      setLoading(true);
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      };

      const response = await getAllArticles(params);
      setArticles(response.data);
      setPagination(prev => ({
        ...prev,
        total: response.pagination.total,
        totalPages: response.pagination.totalPages
      }));
    } catch (error) {
      toast.error('Erreur lors du chargement des articles');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, [pagination.page, filters]);

  // Gérer la suppression
  const handleDelete = async (id, titre) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'article "${titre}" ?`)) {
      try {
        await deleteArticle(id);
        toast.success('Article supprimé avec succès');
        loadArticles();
      } catch (error) {
        toast.error('Erreur lors de la suppression');
        console.error(error);
      }
    }
  };

  // Gérer le changement de filtre
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    loadArticles();
  };

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Obtenir le badge de statut
  const getStatusBadge = (statut) => {
    const badges = {
      publie: { label: 'Publié', className: 'status-publie' },
      brouillon: { label: 'Brouillon', className: 'status-brouillon' },
      archive: { label: 'Archivé', className: 'status-archive' }
    };
    const badge = badges[statut] || badges.brouillon;
    return <span className={`status-badge ${badge.className}`}>{badge.label}</span>;
  };

  return (
    <div className="article-list-container">
      <div className="article-list-header">
        <h1>Gestion des Articles</h1>
        <button 
          className="btn-primary"
          onClick={() => navigate('/admin/articles/nouveau')}
        >
          <i className="fas fa-plus"></i> Nouvel Article
        </button>
      </div>

      {/* Filtres et recherche */}
      <div className="article-filters">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="search"
            placeholder="Rechercher un article..."
            value={filters.search}
            onChange={handleFilterChange}
            className="search-input"
          />
          <button type="submit" className="btn-search">
            <i className="fas fa-search"></i> Rechercher
          </button>
        </form>

        <div className="filter-controls">
          <select
            name="statut"
            value={filters.statut}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">Tous les statuts</option>
            <option value="publie">Publié</option>
            <option value="brouillon">Brouillon</option>
            <option value="archive">Archivé</option>
          </select>

          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="datePublication">Date de publication</option>
            <option value="titre">Titre</option>
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

      {/* Table des articles */}
      {loading ? (
        <div className="loading">Chargement...</div>
      ) : articles.length === 0 ? (
        <div className="no-data">
          <p>Aucun article trouvé</p>
        </div>
      ) : (
        <>
          <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titre</th>
                  <th>Auteur</th>
                  <th>Statut</th>
                  <th>Date de publication</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.id}</td>
                    <td className="article-title-cell">
                      <div className="article-title-wrapper">
                        {article.imagePrincipale && (
                          <img 
                            src={article.imagePrincipale} 
                            alt={article.titre}
                            className="article-thumbnail"
                          />
                        )}
                        <div>
                          <div className="article-title">{article.titre}</div>
                          {article.extrait && (
                            <div className="article-excerpt">
                              {article.extrait.substring(0, 80)}...
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{article.auteur || 'N/A'}</td>
                    <td>{getStatusBadge(article.statut)}</td>
                    <td>{formatDate(article.datePublication)}</td>
                    <td className="actions-cell">
                      <button
                        className="btn-action btn-view"
                        onClick={() => navigate(`/articles/${article.slug}`)}
                        title="Voir"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        className="btn-action btn-edit"
                        onClick={() => navigate(`/admin/articles/modifier/${article.id}`)}
                        title="Modifier"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn-action btn-delete"
                        onClick={() => handleDelete(article.id, article.titre)}
                        title="Supprimer"
                      >
                        <i className="fas fa-trash"></i>
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
              <i className="fas fa-chevron-left"></i> Précédent
            </button>
            <span className="pagination-info">
              Page {pagination.page} sur {pagination.totalPages} ({pagination.total} articles)
            </span>
            <button
              className="pagination-btn"
              disabled={pagination.page === pagination.totalPages}
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
            >
              Suivant <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleList;

