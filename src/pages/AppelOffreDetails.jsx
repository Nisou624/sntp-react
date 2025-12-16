import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import appelOffreService from '../services/appelOffreService';
import './AppelOffreDetails.css';

const AppelOffreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appelOffre, setAppelOffre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAppelOffre();
  }, [id]);

  const loadAppelOffre = async () => {
    try {
      setLoading(true);
      const response = await appelOffreService.getById(id);
      
      if (response.success) {
        setAppelOffre(response.data);
      } else {
        setError('Appel d\'offre non trouvé');
      }
    } catch (err) {
      setError('Erreur lors du chargement de l\'appel d\'offre');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Non spécifié';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return 'Date invalide';
    }
  };

  const formatMontant = (montant) => {
    if (!montant || montant === 0) return 'Non spécifié';
    try {
      return new Intl.NumberFormat('fr-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 0
      }).format(montant);
    } catch {
      return `${montant.toLocaleString('fr-FR')} DA`;
    }
  };

  const getStatutBadge = (statut) => {
    switch (statut) {
      case 'actif':
        return { class: 'statut-actif', label: 'Actif' };
      case 'expire':
        return { class: 'statut-expire', label: 'Expiré' };
      case 'annule':
        return { class: 'statut-annule', label: 'Annulé' };
      default:
        return { class: '', label: statut };
    }
  };

  const calculateDaysRemaining = (dateEcheance) => {
    if (!dateEcheance) return null;
    const deadline = new Date(dateEcheance);
    const today = new Date();
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleDownloadPDF = () => {
    const pdfUrl = appelOffreService.getPdfUrl(id);
    window.open(pdfUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Chargement des détails...</p>
        </div>
      </div>
    );
  }

  if (error || !appelOffre) {
    return (
      <div className="detail-container">
        <div className="error-state">
          <p>{error || 'Appel d\'offre non trouvé'}</p>
          <button onClick={() => navigate('/nos-appels-offres')} className="btn-back">
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  const statutInfo = getStatutBadge(appelOffre.statut);
  const daysRemaining = calculateDaysRemaining(appelOffre.dateEcheance);

  return (
    <div className="detail-container">
      <button onClick={() => navigate('/nos-appels-offres')} className="btn-back">
        ← Retour à la liste
      </button>

      <div className="detail-header">
        <div className="header-content">
          <h1>{appelOffre.titre || 'Sans titre'}</h1>
          <div className="header-badges">
            <span className={`statut-badge ${statutInfo.class}`}>
              {statutInfo.label}
            </span>
            {daysRemaining !== null && daysRemaining > 0 && appelOffre.statut === 'actif' && (
              <span className="deadline-badge">
                {daysRemaining}J restant{daysRemaining > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
        <p className="reference">Référence: {appelOffre.reference || 'N/A'}</p>
      </div>

      <div className="detail-body">
        <div className="main-content">
          <section className="description-section">
            <h2>Description du projet</h2>
            <div className="description-content">
              {appelOffre.description || 'Aucune description disponible.'}
            </div>
          </section>

          <section className="info-section">
            <h2>Informations générales</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-content">
                  <span className="info-label">Localisation</span>
                  <span className="info-value">{appelOffre.localisation || 'Non spécifié'}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-content">
                  <span className="info-label">Date de publication</span>
                  <span className="info-value">{formatDate(appelOffre.datePublication)}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-content">
                  <span className="info-label">Date d'échéance</span>
                  <span className="info-value">{formatDate(appelOffre.dateEcheance)}</span>
                </div>
              </div>

              {appelOffre.montant && (
                <div className="info-card">
                  <div className="info-content">
                    <span className="info-label">Montant estimatif</span>
                    <span className="info-value">{formatMontant(appelOffre.montant)}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {appelOffre.hasPdf && (
            <section className="pdf-section">
              <h2>Document PDF</h2>
              <button className="btn-download-pdf" onClick={handleDownloadPDF}>
                Télécharger le cahier des charges
                {appelOffre.pdfOriginalName && (
                  <span className="pdf-name">{appelOffre.pdfOriginalName}</span>
                )}
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppelOffreDetails;

