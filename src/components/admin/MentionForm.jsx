// src/components/admin/MentionForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createMention, updateMention, getMentionById } from '../../services/mentionMediaService';
import adminPaths from '../../config/adminConfig';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import './MentionForm.css';

const MentionForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    url: '',
    source: '',
    logoSource: '',
    datePublication: '',
    type: 'article',
    statut: 'actif',
    featured: false,
    ordre: 0
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) {
      loadMention();
    }
  }, [id]);

  const loadMention = async () => {
    try {
      setLoading(true);
      const response = await getMentionById(id);
      const mention = response.data;
      
      setFormData({
        titre: mention.titre || '',
        description: mention.description || '',
        url: mention.url || '',
        source: mention.source || '',
        logoSource: mention.logoSource || '',
        datePublication: mention.datePublication ? new Date(mention.datePublication).toISOString().slice(0, 16) : '',
        type: mention.type || 'article',
        statut: mention.statut || 'actif',
        featured: mention.featured || false,
        ordre: mention.ordre || 0
      });
    } catch (error) {
      toast.error('Erreur lors du chargement de la mention');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.titre.trim()) {
      newErrors.titre = 'Le titre est requis';
    }

    if (!formData.url.trim()) {
      newErrors.url = 'L\'URL est requise';
    } else {
      try {
        new URL(formData.url);
      } catch (e) {
        newErrors.url = 'URL invalide';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs du formulaire');
      return;
    }

    try {
      setLoading(true);

      const mentionData = {
        ...formData,
        datePublication: formData.datePublication || new Date().toISOString()
      };

      if (isEditMode) {
        await updateMention(id, mentionData);
        toast.success('Mention mise à jour avec succès');
      } else {
        await createMention(mentionData);
        toast.success('Mention créée avec succès');
      }

      navigate(adminPaths.dashMentions);
    } catch (error) {
      toast.error(error.message || 'Erreur lors de l\'enregistrement');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mention-form-container">
      <div className="mention-form-header">
        <h1>{isEditMode ? 'Modifier la mention' : 'Nouvelle mention'}</h1>
        <button 
          className="btn-secondary"
          onClick={() => navigate(adminPaths.dashMentions)}
        >
          <FaArrowLeft /> Retour
        </button>
      </div>

      {loading && !formData.titre ? (
        <div className="loading">Chargement...</div>
      ) : (
        <form onSubmit={handleSubmit} className="mention-form">
          <div className="form-layout">
            {/* Colonne principale */}
            <div className="form-main-column">
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
                  placeholder="Titre de l'article ou mention"
                />
                {errors.titre && <span className="error-message">{errors.titre}</span>}
              </div>

              {/* URL */}
              <div className="form-group">
                <label htmlFor="url" className="form-label">
                  URL <span className="required">*</span>
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className={`form-input ${errors.url ? 'error' : ''}`}
                  placeholder="https://example.com/article"
                />
                {errors.url && <span className="error-message">{errors.url}</span>}
                {formData.url && !errors.url && (
                  <a 
                    href={formData.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="form-link"
                  >
                    Prévisualiser le lien →
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Résumé de l'article ou mention"
                  rows="5"
                />
                <small className="form-hint">
                  Résumé qui apparaîtra dans la liste des mentions
                </small>
              </div>

              {/* Source */}
              <div className="form-group">
                <label htmlFor="source" className="form-label">
                  Source (nom du média)
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ex: El Watan, TSA, APS..."
                />
              </div>

              {/* Logo Source */}
              <div className="form-group">
                <label htmlFor="logoSource" className="form-label">
                  Logo de la source (URL)
                </label>
                <input
                  type="url"
                  id="logoSource"
                  name="logoSource"
                  value={formData.logoSource}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://example.com/logo.png"
                />
                {formData.logoSource && (
                  <div className="logo-preview">
                    <img 
                      src={formData.logoSource} 
                      alt="Logo preview"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Colonne latérale */}
            <div className="form-sidebar-column">
              {/* Actions */}
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
                    <option value="actif">Actif</option>
                    <option value="archive">Archivé</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="type" className="form-label">Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
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
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="form-checkbox"
                    />
                    <span>Mettre en avant (À la une)</span>
                  </label>
                  <small className="form-hint">
                    Les mentions en avant apparaîtront en premier
                  </small>
                </div>

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
                  <small className="form-hint">
                    Plus le nombre est petit, plus la mention apparaît en premier
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
                        <span className="spinner-small"></span> Enregistrement...
                      </>
                    ) : (
                      <>
                        <FaSave /> {isEditMode ? 'Mettre à jour' : 'Créer'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MentionForm;

