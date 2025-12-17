// src/pages/Blog.jsx - VERSION AVEC DEBUG
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import { getAllArticles } from '../services/articleService';
import { toast } from 'react-toastify';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); // ⚠️ CHANGÉ: vide pour tout récupérer
  
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    totalPages: 0
  });

  // Charger les articles
  useEffect(() => {
    loadArticles();
  }, [pagination.page, selectedStatus, searchTerm]);

  const loadArticles = async () => {
    try {
      setLoading(true);
      
      console.log('🔍 Paramètres de recherche:', {
        statut: selectedStatus,
        search: searchTerm,
        page: pagination.page,
        limit: pagination.limit
      });

      const response = await getAllArticles({
        statut: selectedStatus, // Vide = tous les statuts
        search: searchTerm,
        page: pagination.page,
        limit: pagination.limit,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
      });

      console.log('✅ Réponse API complète:', response);
      console.log('📦 Articles reçus:', response.data);
      console.log('📊 Pagination:', response.pagination);

      setArticles(response.data || []);
      setPagination(prev => ({
        ...prev,
        total: response.pagination?.total || 0,
        totalPages: response.pagination?.totalPages || 0
      }));
    } catch (error) {
      console.error('❌ Erreur complète:', error);
      toast.error('Erreur lors du chargement des articles');
    } finally {
      setLoading(false);
    }
  };

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Gérer le clic sur un article
  const handleArticleClick = (slug) => {
    navigate(`/articles/${slug}`);
  };

  // Gérer la pagination
  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    setPagination(prev => ({ ...prev, page: 1 }));
    loadArticles();
  };

  // Tronquer le texte
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  console.log('🎨 Rendu - Nombre d\'articles:', articles.length);
  console.log('⏳ Loading:', loading);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="blog-hero-section">
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-page-title">Blog</h1>
            <p className="blog-hero-description">
              Découvrez nos dernières actualités, projets et réalisations
            </p>
            <nav className="blog-breadcrumbs">
              <span className="breadcrumb-item">
                <a href="/">Accueil</a>
              </span>
              <svg className="breadcrumb-separator" width="8" height="8" viewBox="0 0 8 8">
                <path d="M2,6.9L4.8,4L2,1.1L2.6,0l4,4l-4,4L2,6.9z" fill="currentColor" />
              </svg>
              <span className="breadcrumb-item breadcrumb-current">Blog</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="blog-main-section">
        <div className="container">
          {/* Barre de recherche et filtres */}
          <div className="blog-filters-section">
            <form onSubmit={handleSearch} className="blog-search-form">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-search">
                Rechercher
              </button>
            </form>

            <div className="blog-stats">
              <span className="stats-count">
                {pagination.total} {pagination.total > 1 ? 'articles' : 'article'} {pagination.total > 1 ? 'trouvés' : 'trouvé'}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="blog-loading">
              <div className="spinner"></div>
              <p>Chargement des articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="no-articles">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Aucun article trouvé</h3>
              <p>
                {searchTerm 
                  ? `Aucun article ne correspond à votre recherche "${searchTerm}"`
                  : "Aucun article disponible pour le moment."
                }
              </p>
              {searchTerm && (
                <button 
                  className="btn-reset-search"
                  onClick={() => {
                    setSearchTerm('');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  Réinitialiser la recherche
                </button>
              )}
              
              {/* DEBUG INFO */}
              <div style={{marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px', textAlign: 'left'}}>
                <h4>Debug Info:</h4>
                <pre style={{fontSize: '0.85rem', overflow: 'auto'}}>
                  {JSON.stringify({
                    articlesCount: articles.length,
                    loading,
                    pagination,
                    selectedStatus,
                    searchTerm
                  }, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {articles.map((article) => (
                  <article 
                    key={article.id} 
                    className="blog-card"
                    onClick={() => handleArticleClick(article.slug)}
                  >
                    {article.imagePrincipale && (
                      <div className="blog-card-image-wrapper">
                        <img 
                          src={article.imagePrincipale} 
                          alt={article.titre}
                          className="blog-card-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="blog-card-overlay"></div>
                      </div>
                    )}
                    
                    <div className="blog-card-content">
                      <div className="blog-entry-meta">
                        {article.datePublication && (
                          <time className="blog-meta-date" dateTime={article.datePublication}>
                            <FaCalendarAlt className="meta-icon" />
                            {formatDate(article.datePublication)}
                          </time>
                        )}
                        
                        {article.auteur && (
                          <span className="blog-meta-author">
                            <FaUser className="meta-icon" />
                            {article.auteur}
                          </span>
                        )}
                      </div>

                      <h2 className="blog-entry-title">{article.titre}</h2>

                      {article.extrait && (
                        <div className="blog-entry-excerpt">
                          <p>{truncateText(article.extrait, 120)}</p>
                        </div>
                      )}

                      {article.tags && Array.isArray(article.tags) && article.tags.length > 0 && (
                        <div className="blog-tags">
                          <FaTag className="tag-icon" />
                          <div className="blog-tags-list">
                            {article.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="blog-tag">
                                {tag}
                              </span>
                            ))}
                            {article.tags.length > 3 && (
                              <span className="blog-tag blog-tag-more">
                                +{article.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="blog-card-footer">
                        <button className="blog-read-more">
                          Lire la suite 
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    className="pagination-btn pagination-prev"
                    disabled={pagination.page === 1}
                    onClick={() => handlePageChange(pagination.page - 1)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Précédent
                  </button>

                  <div className="pagination-numbers">
                    {[...Array(pagination.totalPages)].map((_, index) => {
                      const pageNum = index + 1;
                      if (
                        pageNum === 1 ||
                        pageNum === pagination.totalPages ||
                        (pageNum >= pagination.page - 1 && pageNum <= pagination.page + 1)
                      ) {
                        return (
                          <button
                            key={pageNum}
                            className={`pagination-number ${pagination.page === pageNum ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (
                        pageNum === pagination.page - 2 ||
                        pageNum === pagination.page + 2
                      ) {
                        return <span key={pageNum} className="pagination-ellipsis">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  <button
                    className="pagination-btn pagination-next"
                    disabled={pagination.page === pagination.totalPages}
                    onClick={() => handlePageChange(pagination.page + 1)}
                  >
                    Suivant
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

