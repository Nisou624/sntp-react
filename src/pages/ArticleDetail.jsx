// src/pages/ArticleDetail.jsx - CARD SUPERPOSÉE SUR L'IMAGE
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
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="article-page-snt">
        <div className="loading-snt">
          <div className="spinner"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-page-snt">
        <div className="error-snt">
          <h2>Article introuvable</h2>
          <p>{error || 'Cet article n\'existe pas.'}</p>
          <button onClick={() => navigate('/blog')} className="btn-error-snt">
            <FaArrowLeft /> Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  const imageUrl = article.imageUrl || article.imagePrincipale;

  return (
    <div className="article-page-snt">
      {/* SECTION HERO AVEC IMAGE */}
      <div className="article-hero-section">
        {imageUrl && (
          <div className="hero-image-wrapper">
            <img src={imageUrl} alt={article.titre} className="hero-image" />
          </div>
        )}
        
        {/* CARD CONTENU SUPERPOSÉE */}
        <div className="article-content-card">
          {/* HEADER */}
          <div className="card-header">
            <button onClick={() => navigate('/blog')} className="btn-back-snt">
              <FaArrowLeft />
              <span>Retour aux actualités</span>
            </button>
            
            <h1 className="card-title">{article.titre}</h1>
            
            <div className="card-meta">
              <FaCalendar className="icon" />
              <span>{formatDate(article.datePublication)}</span>
            </div>
            
            <button onClick={shareOnFacebook} className="btn-share-snt" title="Partager sur Facebook">
              <FaFacebookF />
            </button>
          </div>

          {/* CONTENU */}
          <div className="card-body">
            {/* Extrait */}
            {article.extrait && (
              <div className="card-lead">
                {article.extrait}
              </div>
            )}

            {/* Barre orange */}
            <div className="card-divider"></div>

            {/* Corps */}
            {article.contenu && article.contenu.trim() !== '' && article.contenu !== '<p></p>' && (
              <div className="card-text" dangerouslySetInnerHTML={createMarkup(article.contenu)} />
            )}

            {/* Tags */}
            {Array.isArray(article.tags) && article.tags.length > 0 && (
              <div className="card-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="card-tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

