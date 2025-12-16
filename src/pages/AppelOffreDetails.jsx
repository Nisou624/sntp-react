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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Retour à la liste
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
                {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} restant{daysRemaining > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
        <p className="reference">Référence: {appelOffre.reference || 'N/A'}</p>
      </div>

      <div className="detail-body">
        <div className="main-content">
          <section className="description-section">
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Description du projet
            </h2>
            <div className="description-content">
              {appelOffre.description || 'Aucune description disponible.'}
            </div>
          </section>

          <section className="info-section">
            <h2>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Informations générales
            </h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Localisation</span>
                  <span className="info-value">{appelOffre.localisation || 'Non spécifié'}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Date de publication</span>
                  <span className="info-value">{formatDate(appelOffre.datePublication)}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Date d'échéance</span>
                  <span className="info-value">{formatDate(appelOffre.dateEcheance)}</span>
                </div>
              </div>

              {appelOffre.montant && (
                <div className="info-card">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Montant</span>
                    <span className="info-value">{formatMontant(appelOffre.montant)}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {appelOffre.hasPdf && (
            <section className="pdf-section">
              <h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Document PDF
              </h2>
              <button className="btn-download-pdf" onClick={handleDownloadPDF}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Télécharger le cahier des charges
                {appelOffre.pdfOriginalName && (
                  <span className="pdf-name">({appelOffre.pdfOriginalName})</span>
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

