import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Building2, FileText, Clock, DollarSign } from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
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

  const getStatutClass = (statut) => {
    const classes = {
      'Ouvert': 'AppelOffreDetails-statut-ouvert',
      'Fermé': 'AppelOffreDetails-statut-ferme',
      'Annulé': 'AppelOffreDetails-statut-annule',
      'Attribué': 'AppelOffreDetails-statut-attribue'
    };
    return classes[statut] || '';
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
    if (appelOffre.fichier_cahier_charges) {
      window.open(appelOffre.fichier_cahier_charges, '_blank');
    }
  };

  const handleBack = () => {
    navigate('/nos-appels-offres');
  };

  if (loading) {
    return (
      <div className="AppelOffreDetails-page">
        <Header />
        <div className="AppelOffreDetails-container">
          <div className="AppelOffreDetails-loading-state">
            <div className="AppelOffreDetails-spinner"></div>
            <p>Chargement des détails...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !appelOffre) {
    return (
      <div className="AppelOffreDetails-page">
        <Header />
        <div className="AppelOffreDetails-container">
          <div className="AppelOffreDetails-error-state">
            <p>{error || 'Appel d\'offre non trouvé'}</p>
            <button onClick={handleBack} className="AppelOffreDetails-btn-retry">
              Retour à la liste
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const daysRemaining = calculateDaysRemaining(appelOffre.date_limite_depot);

  return (
    <div className="AppelOffreDetails-page">
      <Header />

      <div className="AppelOffreDetails-container">
        {/* Bouton retour */}
        <button onClick={handleBack} className="AppelOffreDetails-btn-back">
          <ArrowLeft size={18} />
          Retour à la liste
        </button>

        {/* Header */}
        <header className="AppelOffreDetails-header">
          <div className="AppelOffreDetails-header-content">
            <h1>{appelOffre.titre || 'Sans titre'}</h1>
            <div className="AppelOffreDetails-header-badges">
              <span className={`AppelOffreDetails-statut-badge ${getStatutClass(appelOffre.statut)}`}>
                {appelOffre.statut}
              </span>
              {daysRemaining !== null && daysRemaining >= 0 && (
                <span className="AppelOffreDetails-deadline-badge">
                  {daysRemaining === 0 ? "Aujourd'hui" : `${daysRemaining} jour${daysRemaining > 1 ? 's' : ''}`}
                </span>
              )}
            </div>
          </div>
          <p className="AppelOffreDetails-reference">
            Réf: {appelOffre.reference || 'N/A'}
          </p>
        </header>

        {/* Body */}
        <div className="AppelOffreDetails-body">
          <div className="AppelOffreDetails-main-content">
            {/* Description */}
            {appelOffre.description && (
              <section className="AppelOffreDetails-section">
                <h2>Description du projet</h2>
                <p className="AppelOffreDetails-description-content">
                  {appelOffre.description}
                </p>
              </section>
            )}

            {/* Informations principales */}
            <section className="AppelOffreDetails-section">
              <h2>Informations principales</h2>
              <div className="AppelOffreDetails-info-grid">
                {appelOffre.maitre_ouvrage && (
                  <div className="AppelOffreDetails-info-card">
                    <Building2 size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Maître d'ouvrage</span>
                      <span className="AppelOffreDetails-info-value">{appelOffre.maitre_ouvrage}</span>
                    </div>
                  </div>
                )}

                {appelOffre.localisation && (
                  <div className="AppelOffreDetails-info-card">
                    <MapPin size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Localisation</span>
                      <span className="AppelOffreDetails-info-value">{appelOffre.localisation}</span>
                    </div>
                  </div>
                )}

                {appelOffre.type_marche && (
                  <div className="AppelOffreDetails-info-card">
                    <FileText size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Type de marché</span>
                      <span className="AppelOffreDetails-info-value">{appelOffre.type_marche}</span>
                    </div>
                  </div>
                )}

                {appelOffre.montant && (
                  <div className="AppelOffreDetails-info-card">
                    <DollarSign size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Montant estimé</span>
                      <span className="AppelOffreDetails-info-value">{formatMontant(appelOffre.montant)}</span>
                    </div>
                  </div>
                )}

                {appelOffre.date_publication && (
                  <div className="AppelOffreDetails-info-card">
                    <Calendar size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Date de publication</span>
                      <span className="AppelOffreDetails-info-value">{formatDate(appelOffre.date_publication)}</span>
                    </div>
                  </div>
                )}

                {appelOffre.date_limite_depot && (
                  <div className="AppelOffreDetails-info-card AppelOffreDetails-info-card-urgent">
                    <Clock size={24} className="AppelOffreDetails-info-icon" />
                    <div className="AppelOffreDetails-info-content">
                      <span className="AppelOffreDetails-info-label">Date limite de dépôt</span>
                      <span className="AppelOffreDetails-info-value">{formatDate(appelOffre.date_limite_depot)}</span>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Télécharger le cahier des charges */}
            {appelOffre.fichier_cahier_charges && (
              <section className="AppelOffreDetails-section AppelOffreDetails-pdf-section">
                <h2>Documents</h2>
                <button onClick={handleDownloadPDF} className="AppelOffreDetails-btn-download-pdf">
                  <FileText size={20} />
                  Télécharger le cahier des charges
                  <span className="AppelOffreDetails-pdf-name">
                    Format PDF
                  </span>
                </button>
              </section>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppelOffreDetails;

