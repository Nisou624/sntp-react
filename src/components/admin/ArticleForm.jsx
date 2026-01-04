// src/components/admin/ArticleForm.jsx - CORRECTION DE LA GESTION DES TAGS

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createArticle, updateArticle, getArticleById } from '../../services/articleService';
import adminPaths from '../../config/adminConfig';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';
import { getImageUrl } from '../../services/imageService';
import './ArticleForm.css';

const ArticleForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [loadingArticle, setLoadingArticle] = useState(isEditMode);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    titre: '',
    extrait: '',
    contenu: '',
    typeContenu: 'article',
    urlExterne: '',
    sourceMedia: '',
    logoSource: '',
    typeMedia: 'article',
    imagePrincipale: '',
    imageId: null,
    auteur: 'SNTP',
    datePublication: new Date().toISOString().split('T')[0],
    statut: 'brouillon',
    tags: [], // ✅ Toujours un tableau
    metaDescription: '',
    metaKeywords: '',
    featured: false,
    ordre: 0
  });

  const [tagInput, setTagInput] = useState('');

  // Charger l'article en mode édition
  useEffect(() => {
    if (isEditMode) {
      loadArticle();
    }
  }, [id]);

  const loadArticle = async () => {
    try {
      setLoadingArticle(true);
      const response = await getArticleById(id);
      
      if (response.success) {
        const article = response.data;
        
        // ✅ CORRECTION: S'assurer que tags est toujours un tableau
        let tags = [];
        if (article.tags) {
          if (Array.isArray(article.tags)) {
            tags = article.tags;
          } else if (typeof article.tags === 'string') {
            try {
              // Si c'est une chaîne JSON
              tags = JSON.parse(article.tags);
            } catch (e) {
              // Si c'est une chaîne simple séparée par des virgules
              tags = article.tags.split(',').map(t => t.trim()).filter(t => t);
            }
          }
        }
        
        setFormData({
          titre: article.titre || '',
          extrait: article.extrait || '',
          contenu: article.contenu || '',
          typeContenu: article.typeContenu || 'article',
          urlExterne: article.urlExterne || '',
          sourceMedia: article.sourceMedia || '',
          logoSource: article.logoSource || '',
          typeMedia: article.typeMedia || 'article',
          imagePrincipale: article.imagePrincipale || '',
          imageId: article.imageId || null,
          auteur: article.auteur || 'SNTP',
          datePublication: article.datePublication ? 
            new Date(article.datePublication).toISOString().split('T')[0] : 
            new Date().toISOString().split('T')[0],
          statut: article.statut || 'brouillon',
          tags: tags, // ✅ Toujours un tableau
          metaDescription: article.metaDescription || '',
          metaKeywords: article.metaKeywords || '',
          featured: Boolean(article.featured),
          ordre: article.ordre || 0
        });
      }
    } catch (error) {
      console.error('Erreur chargement article:', error);
      toast.error(error.message || 'Erreur lors du chargement de l\'article');
      navigate(adminPaths.dashArticles);
    } finally {
      setLoadingArticle(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Effacer l'erreur du champ
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleQuillChange = (content) => {
    setFormData(prev => ({ ...prev, contenu: content }));
    if (errors.contenu) {
      setErrors(prev => ({ ...prev, contenu: '' }));
    }
  };

  // Gestion des tags
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const tag = tagInput.trim();
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Gestion de l'image
  const handleImageUploaded = (imageData) => {
    setFormData(prev => ({
      ...prev,
      imageId: imageData.id,
      imagePrincipale: null
    }));
  };

  const handleImageRemoved = () => {
    setFormData(prev => ({
      ...prev,
      imageId: null,
      imagePrincipale: ''
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.titre.trim()) {
      newErrors.titre = 'Le titre est requis';
    }

    if (!formData.extrait.trim()) {
      newErrors.extrait = 'L\'extrait est requis';
    }

    if (formData.typeContenu === 'article') {
      if (!formData.contenu || formData.contenu.trim() === '<p></p>' || formData.contenu.trim() === '') {
        newErrors.contenu = 'Le contenu est requis pour un article';
      }
    }

    if (formData.typeContenu === 'mention_media') {
      if (!formData.urlExterne.trim()) {
        newErrors.urlExterne = 'L\'URL externe est requise pour une mention média';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs du formulaire');
      return;
    }

    try {
      setLoading(true);

      // ✅ S'assurer que tags est un tableau JSON stringifié pour l'API
      const dataToSend = {
        ...formData,
        tags: Array.isArray(formData.tags) ? formData.tags : []
      };

      let response;
      if (isEditMode) {
        response = await updateArticle(id, dataToSend);
      } else {
        response = await createArticle(dataToSend);
      }

      if (response.success) {
        toast.success(response.message || 'Opération réussie');
        navigate(adminPaths.articles);
      }
    } catch (error) {
      console.error('Erreur soumission:', error);
      toast.error(error.message || 'Erreur lors de la soumission');
    } finally {
      setLoading(false);
    }
  };

  if (loadingArticle) {
    return (
      <div className="article-form-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="article-form-container">
      <div className="form-header">
        <h1>{isEditMode ? 'Modifier' : 'Créer'} un contenu</h1>
        <button 
          type="button" 
          onClick={() => navigate(adminPaths.dashArticles)}
          className="btn-back"
        >
          ← Retour
        </button>
      </div>

      <form onSubmit={handleSubmit} className="article-form">
        {/* Type de contenu */}
        <div className="form-group">
          <label className="form-label">
            Type de contenu <span className="required">*</span>
          </label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="typeContenu"
                value="article"
                checked={formData.typeContenu === 'article'}
                onChange={handleChange}
              />
              <span>Article classique</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="typeContenu"
                value="mention_media"
                checked={formData.typeContenu === 'mention_media'}
                onChange={handleChange}
              />
              <span>Mention média</span>
            </label>
          </div>
        </div>

        {/* Titre */}
        <div className="form-group">
          <label htmlFor="titre" className="form-label">
            Titre <span className="required">*</span>
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            className={`form-input ${errors.titre ? 'error' : ''}`}
            placeholder="Titre du contenu"
          />
          {errors.titre && <span className="error-message">{errors.titre}</span>}
        </div>

        {/* Extrait */}
        <div className="form-group">
          <label htmlFor="extrait" className="form-label">
            Extrait <span className="required">*</span>
          </label>
          <textarea
            id="extrait"
            name="extrait"
            value={formData.extrait}
            onChange={handleChange}
            className={`form-textarea ${errors.extrait ? 'error' : ''}`}
            rows="3"
            placeholder="Résumé court du contenu"
          />
          {errors.extrait && <span className="error-message">{errors.extrait}</span>}
        </div>

        {/* Contenu (Article classique) */}
        {formData.typeContenu === 'article' && (
          <div className="form-group">
            <label htmlFor="contenu" className="form-label">
              Contenu <span className="required">*</span>
            </label>
            <RichTextEditor
              value={formData.contenu}
              onChange={(html) => setFormData(prev => ({ ...prev, contenu: html}))}
              className={errors.contenu ? 'error' : ''}
            />
            {errors.contenu && <span className="error-message">{errors.contenu}</span>}
          </div>
        )}

        {/* URL externe (Mention média) */}
        {formData.typeContenu === 'mention_media' && (
          <>
            <div className="form-group">
              <label htmlFor="urlExterne" className="form-label">
                URL externe <span className="required">*</span>
              </label>
              <input
                type="url"
                id="urlExterne"
                name="urlExterne"
                value={formData.urlExterne}
                onChange={handleChange}
                className={`form-input ${errors.urlExterne ? 'error' : ''}`}
                placeholder="https://exemple.com/article"
              />
              {errors.urlExterne && <span className="error-message">{errors.urlExterne}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="sourceMedia" className="form-label">
                Source média
              </label>
              <input
                type="text"
                id="sourceMedia"
                name="sourceMedia"
                value={formData.sourceMedia}
                onChange={handleChange}
                className="form-input"
                placeholder="El Watan, TSA, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="logoSource" className="form-label">
                Logo source (URL)
              </label>
              <input
                type="url"
                id="logoSource"
                name="logoSource"
                value={formData.logoSource}
                onChange={handleChange}
                className="form-input"
                placeholder="https://exemple.com/logo.png"
              />
            </div>

            <div className="form-group">
              <label htmlFor="typeMedia" className="form-label">
                Type de média
              </label>
              <select
                id="typeMedia"
                name="typeMedia"
                value={formData.typeMedia}
                onChange={handleChange}
                className="form-select"
              >
                <option value="article">Article</option>
                <option value="video">Vidéo</option>
                <option value="podcast">Podcast</option>
                <option value="interview">Interview</option>
                <option value="communique">Communiqué</option>
              </select>
            </div>

            {/* Contenu optionnel pour mention média */}
            <div className="form-group">
              <label htmlFor="contenu" className="form-label">
                Contenu complémentaire (optionnel)
              </label>
              <RichTextEditor
                value={formData.contenu}
                onChange={handleQuillChange}
              />
              <small className="form-hint">
                Vous pouvez ajouter du contenu complémentaire sur cette mention
              </small>
            </div>
          </>
        )}

        {/* Image principale */}
        <div className="form-group">
          <label className="form-label">
            Image principale
          </label>
          
          <div className="image-input-tabs">
            <button
              type="button"
              className={`tab-btn ${!formData.imagePrincipale ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, imagePrincipale: '' }))}
            >
              📤 Upload
            </button>
            <button
              type="button"
              className={`tab-btn ${formData.imagePrincipale ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, imageId: null }))}
            >
              🔗 URL externe
            </button>
          </div>

          {!formData.imagePrincipale ? (
            <ImageUploader
              currentImageId={formData.imageId}
              currentImageUrl={formData.imageId ? getImageUrl(formData.imageId) : null}
              onImageUploaded={handleImageUploaded}
              onImageRemoved={handleImageRemoved}
            />
          ) : (
            <div>
              <input
                type="url"
                id="imagePrincipale"
                name="imagePrincipale"
                value={formData.imagePrincipale}
                onChange={handleChange}
                className="form-input"
                placeholder="https://example.com/image.jpg"
              />
              {formData.imagePrincipale && (
                <div className="image-preview-url">
                  <img 
                    src={formData.imagePrincipale} 
                    alt="Preview"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="form-group">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <div className="tags-input-container">
            <div className="tags-list">
              {/* ✅ VÉRIFICATION: s'assurer que c'est un tableau */}
              {Array.isArray(formData.tags) && formData.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="tag-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyDown={handleTagInputKeyDown}
              onBlur={addTag}
              className="form-input"
              placeholder="Ajouter un tag (Entrée ou virgule)"
            />
          </div>
          <small className="form-hint">
            Appuyez sur Entrée ou virgule pour ajouter un tag
          </small>
        </div>

        {/* Reste des champs... */}
        
        {/* Auteur */}
        <div className="form-group">
          <label htmlFor="auteur" className="form-label">
            Auteur
          </label>
          <input
            type="text"
            id="auteur"
            name="auteur"
            value={formData.auteur}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Date de publication */}
        <div className="form-group">
          <label htmlFor="datePublication" className="form-label">
            Date de publication
          </label>
          <input
            type="date"
            id="datePublication"
            name="datePublication"
            value={formData.datePublication}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Statut */}
        <div className="form-group">
          <label htmlFor="statut" className="form-label">
            Statut
          </label>
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

        {/* Meta description */}
        <div className="form-group">
          <label htmlFor="metaDescription" className="form-label">
            Meta Description (SEO)
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            className="form-textarea"
            rows="2"
            maxLength="160"
            placeholder="Description pour les moteurs de recherche (160 caractères max)"
          />
          <small className="form-hint">
            {formData.metaDescription.length}/160 caractères
          </small>
        </div>

        {/* Featured */}
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            <span>Mettre à la une</span>
          </label>
        </div>

        {/* Ordre */}
        <div className="form-group">
          <label htmlFor="ordre" className="form-label">
            Ordre d'affichage
          </label>
          <input
            type="number"
            id="ordre"
            name="ordre"
            value={formData.ordre}
            onChange={handleChange}
            className="form-input"
            min="0"
          />
        </div>

        {/* Boutons */}
        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate(adminPaths.articles)}
            className="btn-secondary"
            disabled={loading}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Enregistrement...' : isEditMode ? 'Mettre à jour' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;

