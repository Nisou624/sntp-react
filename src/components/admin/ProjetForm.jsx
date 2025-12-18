import React, { useState, useEffect } from 'react';
import projetService from '../../services/projetService';
import './ProjetForm.css';

const ProjetForm = ({ projet, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    titre: '',
    category: 'routes',
    image: '',
    location: '',
    year: new Date().getFullYear().toString(),
    status: 'inprogress',
    description: '',
    latitude: '',
    longitude: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (projet) {
      setFormData({
        titre: projet.titre || '',
        category: projet.category || 'routes',
        image: projet.image || '',
        location: projet.location || '',
        year: projet.year || new Date().getFullYear().toString(),
        status: projet.status || 'inprogress',
        description: projet.description || '',
        latitude: projet.latitude || '',
        longitude: projet.longitude || ''
      });
    }
  }, [projet]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
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
        response = await projetService.update(projet.id, dataToSend);
      } else {
        // Mode création
        response = await projetService.create(dataToSend);
      }

      if (response.success) {
        onSuccess();
      } else {
        setError(response.message || 'Une erreur est survenue');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue');
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
              placeholder="Ex: Autoroute Est-Ouest"
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
                {categories.map((cat) => (
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
                placeholder="Ex: 2024"
                pattern="[0-9]{4}"
                title="Format: YYYY (ex: 2024)"
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
              placeholder="Ex: Alger - Oran"
            />
          </div>

          {/* Image URL */}
          <div className="form-group">
            <label htmlFor="image">
              URL de l'Image <span className="required">*</span>
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Ex: /assets/images/project-autoroute.jpg"
            />
            <small className="form-help">
              Chemin relatif ou URL complète de l'image du projet
            </small>
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
                placeholder="Ex: 36.7538"
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
                placeholder="Ex: 3.0588"
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
              {loading ? 'Enregistrement...' : projet ? 'Modifier' : 'Créer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjetForm;

