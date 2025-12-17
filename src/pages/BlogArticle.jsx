// src/pages/BlogArticle.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import { getArticleBySlug } from '../services/articleService';
import { toast } from 'react-toastify';
import './BlogArticle.css';

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const response = await getArticleBySlug(slug);
      setArticle(response.data);
      
      // Mettre à jour le titre de la page
      document.title = `${response.data.titre} - SNTP Blog`;
      
      // Mettre à jour la meta description
      if (response.data.metaDescription) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', response.data.metaDescription);
        }
      }
    } catch (error) {
      toast.error('Article non trouvé');
      console.error(error);
      navigate('/blog');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convertir Markdown simple en HTML
  const formatContent = (content) => {
    if (!content) return '';
    
    return content
      // Titres
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Gras
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      // Italique
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Liens
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Images
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" />')
      // Citations
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      // Listes
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      // Paragraphes
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  };

  if (loading) {
    return (
      <div className="article-loading">
        <div className="spinner"></div>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="blog-article-page">
      {/* Hero Section */}
      <header className="article-hero">
        {article.imagePrincipale && (
          <div className="article-hero-image">
            <img src={article.imagePrincipale} alt={article.titre} />
          </div>
        )}
        <div className="article-hero-overlay"></div>
        <div className="container">
          <div className="article-hero-content">
            <button 
              className="back-button"
              onClick={() => navigate('/blog')}
            >
              <FaArrowLeft /> Retour au blog
            </button>
            <h1 className="article-title">{article.titre}</h1>
            
            <div className="article-meta">
              {article.datePublication && (
                <span className="meta-item">
                  <FaCalendarAlt />
                  {formatDate(article.datePublication)}
                </span>
              )}
              {article.auteur && (
                <span className="meta-item">
                  <FaUser />
                  {article.auteur}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="article-content-section">
        <div className="container">
          <div className="article-layout">
            <div className="article-main">
              {article.extrait && (
                <div className="article-excerpt">
                  <p>{article.extrait}</p>
                </div>
              )}

              <div 
                className="article-body"
                dangerouslySetInnerHTML={{ __html: formatContent(article.contenu) }}
              />

              {article.tags && article.tags.length > 0 && (
                <div className="article-tags-section">
                  <h3><FaTag /> Tags</h3>
                  <div className="article-tags">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="article-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;

