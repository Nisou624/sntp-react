import React, { useState, useEffect } from 'react';
import appelOffreService from '../../services/appelOffreService';
import './AppelOffreForm.css';

const AppelOffreForm = ({ appelOffre, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    datePublication: '',
    dateEcheance: '', // CHANGÉ de dateLimite à dateEcheance
    reference: '',
    montant: '',
    localisation: '',
    statut: 'actif'
  });

  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (appelOffre) {
      setFormData({
        titre: appelOffre.titre || '',
        description: appelOffre.description || '',
        datePublication: appelOffre.datePublication ? appelOffre.datePublication.split('T')[0] : '',
        dateEcheance: appelOffre.dateEcheance ? appelOffre.dateEcheance.split('T')[0] : '', // CHANGÉ
        reference: appelOffre.reference || '',
        montant: appelOffre.montant || '',
        localisation: appelOffre.localisation || '',
        statut: appelOffre.statut || 'actif'
      });
    }
  }, [appelOffre]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Vérifier que c'est un PDF
      if (file.type !== 'application/pdf') {
        setError('Seuls les fichiers PDF sont autorisés');
        e.target.value = '';
        return;
      }

      // Vérifier la taille (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setError('Le fichier ne doit pas dépasser 10MB');
        e.target.value = '';
        return;
      }

      setPdfFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Créer un FormData pour l'upload
      const data = new FormData();
      
      // Ajouter tous les champs
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      // Ajouter le PDF si présent
      if (pdfFile) {
        data.append('pdf', pdfFile);
      }

      let response;
      if (appelOffre) {
        // Mode édition
        response = await appelOffreService.update(appelOffre.id, data);
      } else {
        // Mode création
        response = await appelOffreService.create(data);
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

  return (
    <div className="form-container">
      <div className="form-card">
        <h3>{appelOffre ? 'Modifier l\'Appel d\'Offre' : 'Nouvel Appel d\'Offre'}</h3>

        <form onSubmit={handleSubmit} className="appel-offre-form">
          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="titre">Titre</label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="reference">Référence</label>
              <input
                type="text"
                id="reference"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              disabled={loading}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="datePublication">Date de Publication</label>
              <input
                type="date"
                id="datePublication"
                name="datePublication"
                value={formData.datePublication}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateEcheance">Date d'échéance</label> {/* CHANGÉ le label */}
              <input
                type="date"
                id="dateEcheance"
                name="dateEcheance" // CHANGÉ de dateLimite à dateEcheance
                value={formData.dateEcheance} // CHANGÉ
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="montant">Montant (DA)</label>
              <input
                type="number"
                id="montant"
                name="montant"
                value={formData.montant}
                onChange={handleChange}
                placeholder="Ex: 5000000"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="localisation">Localisation</label>
              <input
                type="text"
                id="localisation"
                name="localisation"
                value={formData.localisation}
                onChange={handleChange}
                required
                placeholder="Ex: Alger"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="statut">Statut</label>
              <select
                id="statut"
                name="statut"
                value={formData.statut}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="actif">Actif</option>
                <option value="expire">Expiré</option>
                <option value="annule">Annulé</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pdf">
                Fichier PDF
                {appelOffre && appelOffre.pdfOriginalName && (
                  <span className="file-info"> (Actuel: {appelOffre.pdfOriginalName})</span>
                )}
              </label>
              <input
                type="file"
                id="pdf"
                name="pdf"
                accept=".pdf"
                onChange={handleFileChange}
                disabled={loading}
                required={!appelOffre}
              />
              <small className="form-help">PDF uniquement, max 10MB</small>
            </div>
          </div>

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
              {loading ? 'Enregistrement...' : (appelOffre ? 'Modifier' : 'Créer')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppelOffreForm;

