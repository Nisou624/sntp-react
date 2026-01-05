// src/pages/ArticleDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleBySlug } from '../services/articleService';
import { FaCalendar, FaArrowLeft, FaFacebookF } from 'react-icons/fa';
import { prepareContent } from '../utils/markdownHelper';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const normalizeTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') {
      try {
        const parsed = JSON.parse(tags);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }
    return [];
  };

  const loadArticle = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getArticleBySlug(slug);

      if (response.success) {
        const normalizedArticle = {
          ...response.data,
          tags: normalizeTags(response.data.tags)
        };
        setArticle(normalizedArticle);
      } else {
        setError('Article non trouvé');
      }
    } catch (err) {
      console.error('Erreur chargement article:', err);
      setError(err.message || 'Erreur lors du chargement de l\'article');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const createMarkup = (content) => {
    if (!content) return { __html: '' };
    const html = prepareContent(content);
    return { __html: html };
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  // Fonction pour obtenir l'URL de l'image (priorité à imagePrincipale, sinon imageUrl)
  const getImageUrl = () => {
    if (article.imagePrincipale) {
      return `${API_BASE}/images/uploads/${article.imagePrincipale}`;
    }
    if (article.imageUrl) {
      return article.imageUrl;
    }
    return null;
  };

  if (loading) {
    return (
      <div className="ArticleDetail-loading-snt">
        <div className="ArticleDetail-spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="ArticleDetail-error-snt">
        <h2>Article introuvable</h2>
        <p>{error || 'Cet article n\'existe pas.'}</p>
        <button
          className="ArticleDetail-btn-error-snt"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Retour aux actualités
        </button>
      </div>
    );
  }

  const imageUrl = getImageUrl();

  return (
    <div className="ArticleDetail-article-page-snt">
      {/* Section image principale (centrée, pas full-width) */}
      {imageUrl && (
        <section className="ArticleDetail-article-hero-section">
          <div className="ArticleDetail-hero-image-container">
            <img
              src={imageUrl}
              alt={article.titre}
              className="ArticleDetail-hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </section>
      )}

      {/* Card de contenu */}
      <article className="ArticleDetail-article-content-card">
        {/* Header de la card */}
        <header className="ArticleDetail-card-header">
          <button
            className="ArticleDetail-btn-back-snt"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Retour
          </button>

          <h1 className="ArticleDetail-card-title">{article.titre}</h1>

          <div className="ArticleDetail-card-meta">
            <FaCalendar className="ArticleDetail-icon" />
            <time>{formatDate(article.datePublication)}</time>
            {article.auteur && <span> • Par {article.auteur}</span>}
          </div>

          <button
            className="ArticleDetail-btn-share-snt"
            onClick={shareOnFacebook}
            title="Partager sur Facebook"
          >
            <FaFacebookF />
          </button>
        </header>

        {/* Corps de la card */}
        <div className="ArticleDetail-card-body">
          {article.extrait && (
            <div className="ArticleDetail-card-lead">{article.extrait}</div>
          )}

          <div className="ArticleDetail-card-divider"></div>

          <div
            className="ArticleDetail-card-text"
            dangerouslySetInnerHTML={createMarkup(article.contenu)}
          />

          {article.tags && article.tags.length > 0 && (
            <div className="ArticleDetail-card-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="ArticleDetail-card-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;

