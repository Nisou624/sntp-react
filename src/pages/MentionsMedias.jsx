// src/pages/MentionsMedias.jsx
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaNewspaper, FaVideo, FaMicrophone, FaFileAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { getAllMentions } from '../services/mentionMediaService';
import { toast } from 'react-toastify';
import './MentionsMedias.css';

const MentionsMedias = () => {
  const [mentions, setMentions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0
  });

  // Charger les mentions
  useEffect(() => {
    loadMentions();
  }, [pagination.page, selectedType, searchTerm]);

  const loadMentions = async () => {
    try {
      setLoading(true);
      const response = await getAllMentions({
        statut: 'actif',
        type: selectedType,
        search: searchTerm,
        page: pagination.page,
        limit: pagination.limit,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
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

  // Icône selon le type
  const getTypeIcon = (type) => {
    const icons = {
      article: <FaNewspaper />,
      video: <FaVideo />,
      podcast: <FaMicrophone />,
      interview: <FaMicrophone />,
      communique: <FaFileAlt />
    };
    return icons[type] || <FaNewspaper />;
  };

  // Label selon le type
  const getTypeLabel = (type) => {
    const labels = {
      article: 'Article',
      video: 'Vidéo',
      podcast: 'Podcast',
      interview: 'Interview',
      communique: 'Communiqué'
    };
    return labels[type] || 'Article';
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
    loadMentions();
  };

  // Ouvrir le lien externe
  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mentions-page">
      {/* Hero Section */}
      <header className="mentions-hero-section">
        <div className="container">
          <div className="mentions-hero-content">
            <h1 className="mentions-page-title">Mentions Médias</h1>
            <p className="mentions-hero-description">
              Découvrez ce que les médias disent de la SNTP
            </p>
            <nav className="mentions-breadcrumbs">
              <span className="breadcrumb-item">
                <a href="/">Accueil</a>
              </span>
              <svg className="breadcrumb-separator" width="8" height="8" viewBox="0 0 8 8">
                <path d="M2,6.9L4.8,4L2,1.1L2.6,0l4,4l-4,4L2,6.9z" fill="currentColor" />
              </svg>
              <span className="breadcrumb-item breadcrumb-current">Mentions Médias</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="mentions-main-section">
        <div className="container">
          {/* Filtres */}
          <div className="mentions-filters-section">
            <form onSubmit={handleSearch} className="mentions-search-form">
              <div className="search-input-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="mentions-search-input"
                  placeholder="Rechercher une mention..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-search">
                Rechercher
              </button>
            </form>

            <div className="type-filters">
              <button
                className={`type-filter-btn ${selectedType === '' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedType('');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                Tous
              </button>
              <button
                className={`type-filter-btn ${selectedType === 'article' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedType('article');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaNewspaper /> Articles
              </button>
              <button
                className={`type-filter-btn ${selectedType === 'video' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedType('video');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaVideo /> Vidéos
              </button>
              <button
                className={`type-filter-btn ${selectedType === 'podcast' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedType('podcast');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaMicrophone /> Podcasts
              </button>
              <button
                className={`type-filter-btn ${selectedType === 'interview' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedType('interview');
                  setPagination(prev => ({ ...prev, page: 1 }));
                }}
              >
                <FaMicrophone /> Interviews
              </button>
            </div>

            <div className="mentions-stats">
              <span className="stats-count">
                {pagination.total} {pagination.total > 1 ? 'mentions' : 'mention'}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="mentions-loading">
              <div className="spinner"></div>
              <p>Chargement des mentions...</p>
            </div>
          ) : mentions.length === 0 ? (
            <div className="no-mentions">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Aucune mention trouvée</h3>
              <p>
                {searchTerm || selectedType
                  ? "Aucune mention ne correspond à vos critères"
                  : "Aucune mention disponible pour le moment."
                }
              </p>
              {(searchTerm || selectedType) && (
                <button 
                  className="btn-reset-filters"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
                    setPagination(prev => ({ ...prev, page: 1 }));
                  }}
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="mentions-grid">
                {mentions.map((mention) => (
                  <article 
                    key={mention.id} 
                    className={`mention-card ${mention.featured ? 'featured' : ''}`}
                    onClick={() => handleOpenLink(mention.url)}
                  >
                    <div className="mention-card-header">
                      <div className="mention-type-badge">
                        {getTypeIcon(mention.type)}
                        <span>{getTypeLabel(mention.type)}</span>
                      </div>
                      
                      {mention.featured && (
                        <div className="featured-badge">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          À la une
                        </div>
                      )}
                    </div>

                    {mention.logoSource && (
                      <div className="mention-source-logo">
                        <img 
                          src={mention.logoSource} 
                          alt={mention.source}
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    )}

                    <div className="mention-card-content">
                      <h3 className="mention-title">{mention.titre}</h3>

                      {mention.description && (
                        <p className="mention-description">
                          {mention.description}
                        </p>
                      )}

                      <div className="mention-card-footer">
                        <div className="mention-meta">
                          {mention.source && (
                            <span className="mention-source">
                              {mention.source}
                            </span>
                          )}
                          {mention.datePublication && (
                            <span className="mention-date">
                              <FaCalendarAlt />
                              {formatDate(mention.datePublication)}
                            </span>
                          )}
                        </div>

                        <button className="mention-link-btn">
                          Lire l'article
                          <FaExternalLinkAlt />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mentions-pagination">
                  <button
                    className="pagination-btn"
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
                    className="pagination-btn"
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

export default MentionsMedias;

