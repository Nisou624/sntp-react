import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AppelOffreDetails.css';

const AppelOffreDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appelOffre, setAppelOffre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadAppelOffre();
  }, [id]);

  const loadAppelOffre = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/appels-offres/${id}`
      );
      
      if (response.data.success) {
        setAppelOffre(response.data.data);
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
      const date = new Date(dateString);
      
      // Vérifier si la date est valide
      if (isNaN(date.getTime())) {
        return 'Date invalide';
      }
      
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Erreur de formatage de date:', error);
      return 'Date invalide';
    }
  };

  const formatMontant = (montant) => {
    if (!montant || montant === 0) return 'Non spécifié';
    
    try {
      return new Intl.NumberFormat('fr-DZ', {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(montant);
    } catch (error) {
      return `${montant.toLocaleString('fr-FR')} DA`;
    }
  };

  const calculateDaysRemaining = (dateEcheance) => {
    if (!dateEcheance) return null;
    
    try {
      const deadline = new Date(dateEcheance);
      const today = new Date();
      const diffTime = deadline - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (isNaN(diffDays)) return null;
      
      return diffDays;
    } catch (error) {
      return null;
    }
  };

  const getStatutBadge = (statut) => {
    const statuts = {
      actif: { label: 'Actif', class: 'statut-actif' },
      expire: { label: 'Expiré', class: 'statut-expire' },
      annule: { label: 'Annulé', class: 'statut-annule' }
    };
    
    return statuts[statut] || { label: statut, class: '' };
  };

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !appelOffre) {
    return (
      <div className="detail-container">
        <div className="error-message">
          <p>{error || 'Appel d\'offre non trouvé'}</p>
          <button onClick={() => navigate('/nos-appels-offres')} className="btn-back">
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  const daysRemaining = calculateDaysRemaining(appelOffre.dateEcheance);
  const statutInfo = getStatutBadge(appelOffre.statut);

  return (
    <div className="detail-container">
      <button onClick={() => navigate('/nos-appels-offres')} className="btn-back">
        ← Retour à la liste
      </button>

      <div className="detail-header">
        <div className="header-content">
          <h1>{appelOffre.titre || 'Sans titre'}</h1>
          <span className={`statut-badge ${statutInfo.class}`}>
            {statutInfo.label}
          </span>
        </div>
        <p className="reference">Référence: {appelOffre.reference || 'N/A'}</p>
      </div>

      <div className="detail-body">
        <div className="main-content">
          <section className="description-section">
            <h2>
              <i className="icon-document"></i>
              Description du projet
            </h2>
            <div className="description-content">
              {appelOffre.description || 'Aucune description disponible.'}
            </div>
          </section>

          {appelOffre.pdfPath && (
            <section className="pdf-section">
              <h3>Document PDF</h3>
              <a
                href={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${appelOffre.pdfPath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download-pdf"
              >
                <i className="icon-pdf"></i>
                Télécharger le cahier des charges
                {appelOffre.pdfOriginalName && (
                  <span className="pdf-name">({appelOffre.pdfOriginalName})</span>
                )}
              </a>
            </section>
          )}
        </div>

        <aside className="sidebar">
          <div className="info-card">
            <h3>Informations clés</h3>
            
            <div className="info-item">
              <i className="icon-location"></i>
              <div>
                <span className="label">Localisation</span>
                <span className="value">{appelOffre.localisation || 'Non spécifié'}</span>
              </div>
            </div>

            <div className="info-item">
              <i className="icon-money"></i>
              <div>
                <span className="label">Montant estimatif</span>
                <span className="value">{formatMontant(appelOffre.montant)}</span>
              </div>
            </div>

            <div className="info-item">
              <i className="icon-clock"></i>
              <div>
                <span className="label">Délai d'exécution</span>
                <span className="value">Non spécifié</span>
              </div>
            </div>

            <div className="info-item">
              <i className="icon-warning"></i>
              <div>
                <span className="label">Cautionnement provisoire</span>
                <span className="value">Non spécifié</span>
              </div>
            </div>
          </div>

          <div className="info-card dates-card">
            <h3>Dates importantes</h3>
            
            <div className="info-item">
              <i className="icon-calendar"></i>
              <div>
                <span className="label">Date de publication</span>
                <span className="value">{formatDate(appelOffre.datePublication)}</span>
              </div>
            </div>

            <div className="info-item">
              <i className="icon-deadline"></i>
              <div>
                <span className="label">Date limite de dépôt</span>
                <span className="value date-limite">
                  {formatDate(appelOffre.dateEcheance)}
                </span>
              </div>
            </div>

            {daysRemaining !== null && daysRemaining >= 0 && (
              <div className="days-remaining">
                <strong>{daysRemaining}</strong> jour{daysRemaining > 1 ? 's' : ''} restant{daysRemaining > 1 ? 's' : ''}
              </div>
            )}

            {daysRemaining !== null && daysRemaining < 0 && (
              <div className="days-remaining expired">
                Délai expiré
              </div>
            )}
          </div>

          <button className="btn-contact" onClick={() => navigate('/contactez-nous')}>
            Nous contacter
          </button>
        </aside>
      </div>
    </div>
  );
};

export default AppelOffreDetail;

