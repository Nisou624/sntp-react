// src/components/admin/ArticleForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createArticle, updateArticle, getArticleById } from '../../services/articleService';
import { toast } from 'react-toastify';
import './ArticleForm.css';

const ArticleForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    titre: '',
    slug: '',
    contenu: '',
    extrait: '',
    auteur: '',
    imagePrincipale: '',
    statut: 'brouillon',
    datePublication: '',
    tags: [],
    metaDescription: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Charger l'article si en mode édition
  useEffect(() => {
    if (isEditMode) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const response = await getArticleById(id);
      const article = response.data;
      
      setFormData({
        titre: article.titre || '',
        slug: article.slug || '',
        contenu: article.contenu || '',
        extrait: article.extrait || '',
        auteur: article.auteur || '',
        imagePrincipale: article.imagePrincipale || '',
        statut: article.statut || 'brouillon',
        datePublication: article.datePublication ? new Date(article.datePublication).toISOString().slice(0, 16) : '',
        tags: article.tags || [],
        metaDescription: article.metaDescription || ''
      });
    } catch (error) {
      toast.error('Erreur lors du chargement de l\'article');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Gérer les changements de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-générer le slug à partir du titre
    if (name === 'titre' && !isEditMode) {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }

    // Effacer l'erreur du champ
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Gérer l'éditeur de contenu
  const handleContentChange = (e) => {
    setFormData(prev => ({ ...prev, contenu: e.target.value }));
  };

  // Gérer les tags
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Valider le formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.titre.trim()) {
      newErrors.titre = 'Le titre est requis';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Le slug est requis';
    }

    if (!formData.contenu.trim()) {
      newErrors.contenu = 'Le contenu est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs du formulaire');
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem('adminToken');
      console.log('Token présent:', !!token);
      console.log('Token (premiers caractères):', token ? token.substring(0, 20) + '...' : 'AUCUN');

      if (!token) {
        toast.error('Session expirée. Veuillez vous reconnecter.');
        return;
      }

      const articleData = {
        ...formData,
        datePublication: formData.datePublication || null
      };
    
      console.log('Données à envoyer:', articleData);

      if (isEditMode) {
        await updateArticle(id, articleData);
        toast.success('Article mis à jour avec succès');
      } else {
        const response = await createArticle(articleData);
        console.log('Réponse création:', response);
        toast.success('Article créé avec succès');
      }

      navigate('/admin/articles');
    } catch (error) {
      console.log('Erreur complète:', error);

      if (error.message?.includes('Token invalide') || error.message?.includes('Token expiré')) {
        toast.error('Session expirée. Veuillez vous reconnecter.');
        localStorage.removeItem('token');
        navigate('/admin/login');
      } else {
        toast.error(error.message || 'Erreur lors de l\'enrengistrement');
      }
    } finally {
      setLoading(false);
    }
  };

  // Actions rapides pour l'éditeur
  const insertFormatting = (before, after = '') => {
    const textarea = editorRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = textarea.value.substring(0, start) + before + selectedText + after + textarea.value.substring(end);
    
    setFormData(prev => ({ ...prev, contenu: newText }));
    
    // Repositionner le curseur
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = end + before.length;
    }, 0);
  };

  return (
    <div className="article-form-container">
      <div className="article-form-header">
        <h1>{isEditMode ? 'Modifier l\'article' : 'Nouvel article'}</h1>
        <button 
          className="btn-secondary"
          onClick={() => navigate('/admin/articles')}
        >
          <i className="fas fa-arrow-left"></i> Retour
        </button>
      </div>

      {loading && !formData.titre ? (
        <div className="loading">Chargement...</div>
      ) : (
        <form onSubmit={handleSubmit} className="article-form">
          <div className="form-layout">
            {/* Colonne principale */}
            <div className="form-main-column">
              {/* Titre */}
              <div className="form-group">
                <label htmlFor="titre" className="form-label">
                  Titre de l'article <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="titre"
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  className={`form-input ${errors.titre ? 'error' : ''}`}
                  placeholder="Entrez le titre de l'article"
                />
                {errors.titre && <span className="error-message">{errors.titre}</span>}
              </div>

              {/* Slug */}
              <div className="form-group">
                <label htmlFor="slug" className="form-label">
                  Slug (URL) <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className={`form-input ${errors.slug ? 'error' : ''}`}
                  placeholder="slug-de-larticle"
                />
                {errors.slug && <span className="error-message">{errors.slug}</span>}
                <small className="form-hint">L'URL de l'article sera : /articles/{formData.slug || 'slug-de-larticle'}</small>
              </div>

              {/* Éditeur de contenu */}
              <div className="form-group">
                <label htmlFor="contenu" className="form-label">
                  Contenu de l'article <span className="required">*</span>
                </label>
                
                {/* Barre d'outils de l'éditeur */}
                <div className="editor-toolbar">
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('## ', '\n')}
                    title="Titre (H2)"
                  >
                    <i className="fas fa-heading"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('**', '**')}
                    title="Gras"
                  >
                    <i className="fas fa-bold"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('*', '*')}
                    title="Italique"
                  >
                    <i className="fas fa-italic"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('[Texte du lien](', ')')}
                    title="Lien"
                  >
                    <i className="fas fa-link"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('\n- ', '\n')}
                    title="Liste"
                  >
                    <i className="fas fa-list-ul"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('> ', '\n')}
                    title="Citation"
                  >
                    <i className="fas fa-quote-right"></i>
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => insertFormatting('![Description](', ')')}
                    title="Image"
                  >
                    <i className="fas fa-image"></i>
                  </button>
                </div>

                <textarea
                  ref={editorRef}
                  id="contenu"
                  name="contenu"
                  value={formData.contenu}
                  onChange={handleContentChange}
                  className={`form-textarea ${errors.contenu ? 'error' : ''}`}
                  placeholder="Rédigez le contenu de votre article ici... Vous pouvez utiliser Markdown pour le formatage."
                  rows="20"
                />
                {errors.contenu && <span className="error-message">{errors.contenu}</span>}
                <small className="form-hint">
                  <i className="fas fa-info-circle"></i> Vous pouvez utiliser Markdown pour formater votre texte
                </small>
              </div>

              {/* Extrait */}
              <div className="form-group">
                <label htmlFor="extrait" className="form-label">
                  Extrait (résumé)
                </label>
                <textarea
                  id="extrait"
                  name="extrait"
                  value={formData.extrait}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Résumé court de l'article qui apparaîtra dans la liste"
                  rows="4"
                />
                <small className="form-hint">Recommandé : 150-200 caractères</small>
              </div>
            </div>

            {/* Colonne latérale */}
            <div className="form-sidebar-column">
              {/* Actions de publication */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Publication</h3>
                
                <div className="form-group">
                  <label htmlFor="statut" className="form-label">Statut</label>
                  <select
                    id="statut"
                    name="statut"
                    value={formData.statut}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="brouillon">Brouillon</option>
                    <option value="publie">Publié</option>
                    <option value="archive">Archivé</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="datePublication" className="form-label">
                    Date de publication
                  </label>
                  <input
                    type="datetime-local"
                    id="datePublication"
                    name="datePublication"
                    value={formData.datePublication}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <small className="form-hint">
                    Laissez vide pour utiliser la date actuelle lors de la publication
                  </small>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn-primary btn-block"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Enregistrement...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save"></i> {isEditMode ? 'Mettre à jour' : 'Publier'}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Auteur */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Auteur</h3>
                <div className="form-group">
                  <input
                    type="text"
                    id="auteur"
                    name="auteur"
                    value={formData.auteur}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nom de l'auteur"
                  />
                </div>
              </div>

              {/* Image principale */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Image principale</h3>
                <div className="form-group">
                  <input
                    type="text"
                    id="imagePrincipale"
                    name="imagePrincipale"
                    value={formData.imagePrincipale}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="URL de l'image"
                  />
                  {formData.imagePrincipale && (
                    <div className="image-preview">
                      <img src={formData.imagePrincipale} alt="Aperçu" />
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Tags</h3>
                <div className="tags-container">
                  {formData.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="tag-remove"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  ))}
                </div>
                <div className="tag-input-wrapper">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                    className="form-input"
                    placeholder="Ajouter un tag"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="btn-add-tag"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* SEO */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">SEO</h3>
                <div className="form-group">
                  <label htmlFor="metaDescription" className="form-label">
                    Meta Description
                  </label>
                  <textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Description pour les moteurs de recherche"
                    rows="3"
                    maxLength="300"
                  />
                  <small className="form-hint">
                    {formData.metaDescription.length}/300 caractères
                  </small>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ArticleForm;

