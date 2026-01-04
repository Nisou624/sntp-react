// src/components/admin/ArticlesList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import adminPaths from '../../config/adminConfig';
import { getAllArticles, deleteArticle } from '../../services/articleService';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaEye, FaPlus, FaStar, FaNewspaper, FaExternalLinkAlt, FaVideo, FaImage, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import './ArticleList.css';

const ArticlesList = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    statut: '',
    typeContenu: '',
    typeMedia: '',
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
    loadArticles();
  }, [pagination.page, filters]);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const response = await getAllArticles({
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      });
      setArticles(response.data);
      setPagination(prev => ({
        ...prev,
        total: response.pagination.total,
        totalPages: response.pagination.totalPages
      }));
    } catch (error) {
      toast.error('Erreur lors du chargement');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, titre) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${titre}" ?`)) {
      try {
        await deleteArticle(id);
        toast.success('Supprimé avec succès');
        loadArticles();
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

  const getTypeContentuBadge = (typeContenu) => {
    return typeContenu === 'mention_media' ? (
      <span className="ArticleList-type-badge ArticleList-type-mention-media">
        <FaExternalLinkAlt /> Mention Média
      </span>
    ) : (
      <span className="ArticleList-type-badge ArticleList-type-article">
        <FaNewspaper /> Article
      </span>
    );
  };

  const getStatutBadge = (statut) => {
    const badges = {
      'publie': <span className="ArticleList-status-badge ArticleList-status-publie">Publié</span>,
      'brouillon': <span className="ArticleList-status-badge ArticleList-status-brouillon">Brouillon</span>,
      'archive': <span className="ArticleList-status-badge ArticleList-status-archive">Archivé</span>
    };
    return badges[statut] || <span className="ArticleList-status-badge">{statut}</span>;
  };

  const getMediaIcon = (typeMedia, sourceMedia) => {
    // Icônes basées sur le type de média ou la source
    const lowerSource = (sourceMedia || '').toLowerCase();
    
    if (typeMedia === 'video' || lowerSource.includes('youtube') || lowerSource.includes('video')) {
      return <FaYoutube className="ArticleList-media-icon ArticleList-media-icon-youtube" />;
    }
    if (lowerSource.includes('facebook')) {
      return <FaFacebook className="ArticleList-media-icon ArticleList-media-icon-facebook" />;
    }
    if (lowerSource.includes('twitter') || lowerSource.includes('x.com')) {
      return <FaTwitter className="ArticleList-media-icon ArticleList-media-icon-twitter" />;
    }
    if (lowerSource.includes('linkedin')) {
      return <FaLinkedin className="ArticleList-media-icon ArticleList-media-icon-linkedin" />;
    }
    if (lowerSource.includes('instagram')) {
      return <FaInstagram className="ArticleList-media-icon ArticleList-media-icon-instagram" />;
    }
    // Icône par défaut pour mention média
    return <FaExternalLinkAlt className="ArticleList-media-icon ArticleList-media-icon-default" />;
  };

  if (loading) {
    return <div className="ArticleList-loading">Chargement des articles...</div>;
  }

  return (
    <div className="ArticleList-article-list-container">
      <div className="ArticleList-article-list-header">
        <h1>Gestion des Articles & Mentions Médias</h1>
        <button className="ArticleList-btn-primary" onClick={() => navigate(adminPaths.articlesNew)}>
          <FaPlus /> Nouvel Article
        </button>
      </div>

      <div className="ArticleList-article-filters">
        <form className="ArticleList-search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            className="ArticleList-search-input"
            placeholder="Rechercher un article..."
            value={filters.search}
            onChange={handleFilterChange}
          />
          <button type="button" className="ArticleList-btn-search" onClick={loadArticles}>
            Rechercher
          </button>
        </form>

        <div className="ArticleList-filter-controls">
          <select name="statut" className="ArticleList-filter-select" value={filters.statut} onChange={handleFilterChange}>
            <option value="">Tous les statuts</option>
            <option value="publie">Publié</option>
            <option value="brouillon">Brouillon</option>
            <option value="archive">Archivé</option>
          </select>

          <select name="typeContenu" className="ArticleList-filter-select" value={filters.typeContenu} onChange={handleFilterChange}>
            <option value="">Tous les types</option>
            <option value="article">Articles</option>
            <option value="mention_media">Mentions Médias</option>
          </select>

          <select name="typeMedia" className="ArticleList-filter-select" value={filters.typeMedia} onChange={handleFilterChange}>
            <option value="">Tous les médias</option>
            <option value="video">Vidéo</option>
            <option value="article_presse">Article Presse</option>
            <option value="publication_social">Publication Sociale</option>
          </select>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="ArticleList-no-data">
          <p>Aucun contenu trouvé</p>
        </div>
      ) : (
        <>
          <div className="ArticleList-article-table-wrapper">
            <table className="ArticleList-article-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titre</th>
                  <th>Type</th>
                  <th>Auteur / Source</th>
                  <th>Statut</th>
                  <th>Date pub.</th>
                  <th className="ArticleList-text-center">Vues</th>
                  <th className="ArticleList-text-center">Featured</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.id}</td>
                    <td className="ArticleList-article-title-cell">
                      <div className="ArticleList-article-title-wrapper">
                        {/* Affichage de l'image principale pour les articles */}
                        {article.typeContenu === 'article' && article.imagePrincipale ? (
                          <img
                            src={`/uploads/${article.imagePrincipale}`}
                            alt={article.titre}
                            className="ArticleList-article-thumb"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                        ) : null}
                        
                        {/* Affichage de l'icône du type média pour les mentions média */}
                        {article.typeContenu === 'mention_media' ? (
                          <div className="ArticleList-media-icon-container">
                            {getMediaIcon(article.typeMedia, article.sourceMedia)}
                          </div>
                        ) : null}
                        
                        <div>
                          <div className="ArticleList-article-title">{article.titre}</div>
                          {article.typeContenu === 'mention_media' && article.urlExterne && (
                            <a
                              href={article.urlExterne}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ArticleList-article-url"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt /> Voir la source
                            </a>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{getTypeContentuBadge(article.typeContenu)}</td>
                    <td>
                      {article.typeContenu === 'mention_media'
                        ? article.sourceMedia || 'N/A'
                        : article.auteur || 'N/A'}
                    </td>
                    <td>{getStatutBadge(article.statut)}</td>
                    <td>{formatDate(article.datePublication)}</td>
                    <td className="ArticleList-text-center">{article.vues || 0}</td>
                    <td className="ArticleList-featured-cell">
                      {article.featured && (
                        <FaStar className="ArticleList-featured-icon" title="Article en vedette" />
                      )}
                    </td>
                    <td>
                      <div className="ArticleList-actions-cell">
                        <button
                          className="ArticleList-btn-action ArticleList-btn-view"
                          onClick={() => navigate(`/articles/${article.slug}`)}
                          title="Voir"
                        >
                          <FaEye />
                        </button>
                        <button
                          className="ArticleList-btn-action ArticleList-btn-edit"
                          onClick={() => navigate(adminPaths.articlesEdit(article.id))}
                          title="Modifier"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="ArticleList-btn-action ArticleList-btn-delete"
                          onClick={() => handleDelete(article.id, article.titre)}
                          title="Supprimer"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ArticleList-pagination">
            <button
              className="ArticleList-pagination-btn"
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
              disabled={pagination.page === 1}
            >
              Précédent
            </button>
            <span className="ArticleList-pagination-info">
              Page {pagination.page} sur {pagination.totalPages} ({pagination.total} articles)
            </span>
            <button
              className="ArticleList-pagination-btn"
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
              disabled={pagination.page === pagination.totalPages}
            >
              Suivant
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticlesList;

