// src/components/admin/ProjetForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import projetService from '../../services/projetService';
import './ProjetForm.css';

const ProjetForm = ({ projet, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    titre: '',
    category: 'routes',
    location: '',
    year: new Date().getFullYear().toString(),
    status: 'inprogress',
    description: '',
    latitude: '',
    longitude: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (projet) {
      setFormData({
        titre: projet.titre,
        category: projet.category || 'routes',
        location: projet.location,
        year: projet.year || new Date().getFullYear().toString(),
        status: projet.status || 'inprogress',
        description: projet.description,
        latitude: projet.latitude || '',
        longitude: projet.longitude || ''
      });
      
      // Charger l'image existante
      if (projet.hasImage) {
        const imageUrl = projetService.getImageUrl(projet.id);
        setImagePreview(imageUrl);
      }
    }
  }, [projet]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleImageChange = (file) => {
    if (!file) return;

    // Validation du type de fichier
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Seuls les fichiers images sont autorisés (JPEG, PNG, GIF, WebP)');
      return;
    }

    // Validation de la taille (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('L\'image ne doit pas dépasser 5MB');
      return;
    }

    setImageFile(file);
    
    // Créer un aperçu de l'image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setError('');
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleImageChange(files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Vérifier si l'utilisateur est connecté
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        setError('Vous devez être connecté pour effectuer cette action');
        setLoading(false);
        // Rediriger vers la page de connexion après 2 secondes
        setTimeout(() => {
          window.location.href = '/admin/login';
        }, 2000);
        return;
      }

      // Valider les coordonnées si fournies
      const dataToSend = { ...formData };
      
      if (dataToSend.latitude) {
        const lat = parseFloat(dataToSend.latitude);
        if (isNaN(lat) || lat < -90 || lat > 90) {
          setError('La latitude doit être entre -90 et 90');
          setLoading(false);
          return;
        }
        dataToSend.latitude = lat;
      } else {
        dataToSend.latitude = null;
      }

      if (dataToSend.longitude) {
        const lng = parseFloat(dataToSend.longitude);
        if (isNaN(lng) || lng < -180 || lng > 180) {
          setError('La longitude doit être entre -180 et 180');
          setLoading(false);
          return;
        }
        dataToSend.longitude = lng;
      } else {
        dataToSend.longitude = null;
      }

      let response;
      if (projet) {
        // Mode édition
        response = await projetService.updateProjet(projet.id, dataToSend, imageFile);
      } else {
        // Mode création
        response = await projetService.createProjet(dataToSend, imageFile);
      }

      if (response.success) {
        onSuccess();
      } else {
        setError(response.message || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error('Erreur lors de la soumission:', err);
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'routes', label: 'Travaux Routiers', icon: '🛣️' },
    { value: 'batiments', label: 'Bâtiments', icon: '🏢' },
    { value: 'ouvrages', label: 'Ouvrages d\'Art', icon: '🌉' },
    { value: 'hydraulique', label: 'Hydraulique', icon: '💧' },
    { value: 'industriel', label: 'Industriel', icon: '🏭' }
  ];

  return (
    <div className="form-container">
      <div className="form-card">
        <h3>{projet ? 'Modifier le Projet' : 'Nouveau Projet'}</h3>
        
        <form onSubmit={handleSubmit} className="projet-form">
          {error && <div className="alert alert-error">{error}</div>}

          {/* Upload d'image */}
          <div className="form-section-header">
            <h4>Image du Projet</h4>
            <p className="section-description">
              Téléchargez une image représentative du projet (max 5MB)
            </p>
          </div>

          <div
            className={`image-upload-zone ${isDragging ? 'dragging' : ''} ${imagePreview ? 'has-image' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            {imagePreview ? (
              <div className="image-preview-container">
                <img src={imagePreview} alt="Aperçu" className="image-preview" />
                <div className="image-overlay">
                  <button
                    type="button"
                    className="btn-remove-image"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage();
                    }}
                  >
                    <i className="fas fa-trash"></i> Supprimer
                  </button>
                  <button
                    type="button"
                    className="btn-change-image"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    <i className="fas fa-sync"></i> Changer
                  </button>
                </div>
              </div>
            ) : (
              <div className="upload-placeholder">
                <i className="fas fa-cloud-upload-alt upload-icon"></i>
                <p className="upload-text">
                  Cliquez pour sélectionner ou glissez-déposez une image
                </p>
                <p className="upload-hint">JPEG, PNG, GIF, WebP (max 5MB)</p>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Titre */}
          <div className="form-group">
            <label htmlFor="titre">
              Titre <span className="required">*</span>
            </label>
            <input
              type="text"
              id="titre"
              name="titre"
              value={formData.titre}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Ex : Autoroute Est-Ouest"
            />
          </div>

          {/* Catégorie et Année */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">
                Catégorie <span className="required">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={loading}
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="year">
                Année <span className="required">*</span>
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Ex : 2024"
                pattern="[0-9]{4}"
                title="Format : YYYY (ex: 2024)"
              />
            </div>
          </div>

          {/* Localisation */}
          <div className="form-group">
            <label htmlFor="location">
              Localisation <span className="required">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Ex : Alger - Oran"
            />
          </div>

          {/* Statut */}
          <div className="form-group">
            <label htmlFor="status">
              Statut <span className="required">*</span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={loading}
              required
            >
              <option value="inprogress">En cours</option>
              <option value="completed">Terminé</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">
              Description <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              disabled={loading}
              placeholder="Décrivez le projet en détail..."
            />
          </div>

          {/* Coordonnées GPS */}
          <div className="form-section-header">
            <h4>Coordonnées GPS (Optionnel)</h4>
            <p className="section-description">
              Pour afficher le projet sur la carte interactive
            </p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                disabled={loading}
                placeholder="Ex : 36.7538"
                pattern="-?[0-9]+\.?[0-9]*"
                title="Format décimal (ex: 36.7538)"
              />
              <small className="form-help">Entre -90 et 90</small>
            </div>

            <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                disabled={loading}
                placeholder="Ex : 3.0588"
                pattern="-?[0-9]+\.?[0-9]*"
                title="Format décimal (ex: 3.0588)"
              />
              <small className="form-help">Entre -180 et 180</small>
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary"
              disabled={loading}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Enregistrement...' : (projet ? 'Modifier' : 'Créer')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjetForm;

