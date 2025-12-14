import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AppelOffreDetails.css';
import { 
  Calendar, MapPin, Clock, DollarSign, FileText, Tag, 
  ArrowLeft, Download, Phone, Mail, Building, CheckCircle,
  AlertCircle, XCircle, Award, Loader
} from 'lucide-react';
import { appelOffresService } from '../services/api';

const AppelOffreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appelOffre, setAppelOffre] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les détails de l'appel d'offre
  useEffect(() => {
    const loadAppelOffre = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await appelOffresService.getById(id);
        
        if (response.success) {
          setAppelOffre(response.data);
        } else {
          throw new Error('Appel d\'offre non trouvé');
        }
      } catch (err) {
        setError(err.message || 'Une erreur est survenue');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadAppelOffre();
    }
  }, [id]);

  // Formatage de la date
  const formatDate = (dateString) => {
    if (!dateString) return 'Non spécifié';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Formatage du montant
  const formatMontant = (montant) => {
    if (!montant) return 'Non spécifié';
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(montant);
  };

  // Déterminer l'icône du statut
  const getStatusIcon = (statut) => {
    switch (statut) {
      case 'Ouvert':
        return <CheckCircle size={24} />;
      case 'Fermé':
        return <XCircle size={24} />;
      case 'Annulé':
        return <AlertCircle size={24} />;
      case 'Attribué':
        return <Award size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  // Déterminer la classe du statut
  const getStatusClass = (statut) => {
    const classes = {
      'Ouvert': 'status-ouvert',
      'Fermé': 'status-ferme',
      'Annulé': 'status-annule',
      'Attribué': 'status-attribue'
    };
    return classes[statut] || 'status-default';
  };

  // Calculer les jours restants
  const getJoursRestants = (dateLimite) => {
    if (!dateLimite) return null;
    const today = new Date();
    const limite = new Date(dateLimite);
    const diffTime = limite - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: 'Expiré', urgent: false, expired: true };
    if (diffDays === 0) return { text: 'Aujourd\'hui', urgent: true, expired: false };
    if (diffDays === 1) return { text: '1 jour restant', urgent: true, expired: false };
    return { 
      text: `${diffDays} jours restants`, 
      urgent: diffDays <= 7, 
      expired: false 
    };
  };

  const handleDownloadCahierCharges = () => {
    if (appelOffre?.fichier_cahier_charges) {
      // Logique de téléchargement
      window.open(appelOffre.fichier_cahier_charges, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="details-loading">
        <Loader className="spinner" size={64} />
        <p>Chargement des détails...</p>
      </div>
    );
  }

  if (error || !appelOffre) {
    return (
      <div className="details-error">
        <AlertCircle size={64} />
        <h2>Erreur</h2>
        <p>{error || 'Appel d\'offre non trouvé'}</p>
        <button onClick={() => navigate('/nos-appels-offres')} className="btn-back-error">
          <ArrowLeft size={20} />
          Retour à la liste
        </button>
      </div>
    );
  }

  const delaiInfo = getJoursRestants(appelOffre.date_limite_depot);

  return (
    <div className="appel-offre-details-page">
      {/* Bouton retour */}
      <div className="details-header">
        <button onClick={() => navigate('/nos-appels-offres')} className="btn-back">
          <ArrowLeft size={20} />
          Retour à la liste
        </button>
      </div>

      {/* En-tête principal */}
      <div className="details-hero">
        <div className="hero-content">
          <div className="hero-badges">
            <span className={`badge-status ${getStatusClass(appelOffre.statut)}`}>
              {getStatusIcon(appelOffre.statut)}
              {appelOffre.statut}
            </span>
            <span className="badge-type">
              <Tag size={18} />
              {appelOffre.type_marche}
            </span>
          </div>

          <span className="hero-numero">{appelOffre.numero_ao}</span>
          <h1 className="hero-title">{appelOffre.titre}</h1>

          {delaiInfo && (
            <div className={`hero-deadline ${delaiInfo.urgent ? 'urgent' : ''} ${delaiInfo.expired ? 'expired' : ''}`}>
              <Clock size={20} />
              <span>{delaiInfo.text}</span>
            </div>
          )}
        </div>
      </div>

      {/* Informations principales */}
      <div className="details-content">
        <div className="content-grid">
          {/* Colonne gauche */}
          <div className="content-main">
            {/* Description */}
            <section className="details-section">
              <h2 className="section-title">
                <FileText size={24} />
                Description du projet
              </h2>
              <div className="section-content">
                <p className="description-text">
                  {appelOffre.description || 'Aucune description disponible.'}
                </p>
              </div>
            </section>

            {/* Conditions de participation */}
            {appelOffre.conditions_participation && (
              <section className="details-section">
                <h2 className="section-title">
                  <CheckCircle size={24} />
                  Conditions de participation
                </h2>
                <div className="section-content">
                  <p className="conditions-text">
                    {appelOffre.conditions_participation}
                  </p>
                </div>
              </section>
            )}

            {/* Documents requis */}
            {appelOffre.documents_requis && (
              <section className="details-section">
                <h2 className="section-title">
                  <FileText size={24} />
                  Documents requis
                </h2>
                <div className="section-content">
                  <div className="documents-list">
                    {appelOffre.documents_requis.split(',').map((doc, index) => (
                      <div key={index} className="document-item">
                        <CheckCircle size={18} className="doc-icon" />
                        <span>{doc.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Cahier des charges */}
            {appelOffre.fichier_cahier_charges && (
              <section className="details-section">
                <h2 className="section-title">
                  <Download size={24} />
                  Cahier des charges
                </h2>
                <div className="section-content">
                  <button 
                    onClick={handleDownloadCahierCharges} 
                    className="btn-download-cahier"
                  >
                    <Download size={20} />
                    Télécharger le cahier des charges
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* Colonne droite - Sidebar */}
          <div className="content-sidebar">
            {/* Informations clés */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Informations clés</h3>
              <div className="info-list">
                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Localisation</span>
                    <span className="info-value">{appelOffre.localisation || 'Non spécifié'}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <DollarSign size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Montant estimatif</span>
                    <span className="info-value">{formatMontant(appelOffre.montant_estimatif)}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <Clock size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Délai d'exécution</span>
                    <span className="info-value">{appelOffre.delai_execution || 'Non spécifié'}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <DollarSign size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Cautionnement provisoire</span>
                    <span className="info-value">{formatMontant(appelOffre.cautionnement_provisoire)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dates importantes */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Dates importantes</h3>
              <div className="info-list">
                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <Calendar size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Date de publication</span>
                    <span className="info-value">{formatDate(appelOffre.date_publication)}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <Clock size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Date limite de dépôt</span>
                    <span className="info-value highlight">{formatDate(appelOffre.date_limite_depot)}</span>
                  </div>
                </div>

                {appelOffre.date_ouverture_plis && (
                  <div className="info-row">
                    <div className="info-icon-wrapper">
                      <Calendar size={20} />
                    </div>
                    <div className="info-details">
                      <span className="info-label">Date d'ouverture des plis</span>
                      <span className="info-value">{formatDate(appelOffre.date_ouverture_plis)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Maître d'ouvrage */}
            {appelOffre.maitre_ouvrage && (
              <div className="sidebar-card">
                <h3 className="sidebar-title">Maître d'ouvrage</h3>
                <div className="maitre-ouvrage-info">
                  <div className="mo-icon">
                    <Building size={24} />
                  </div>
                  <p className="mo-name">{appelOffre.maitre_ouvrage}</p>
                </div>
              </div>
            )}

            {/* Contact */}
            {(appelOffre.contact_email || appelOffre.contact_telephone) && (
              <div className="sidebar-card">
                <h3 className="sidebar-title">Contact</h3>
                <div className="contact-info">
                  {appelOffre.contact_email && (
                    <a href={`mailto:${appelOffre.contact_email}`} className="contact-item">
                      <Mail size={20} />
                      <span>{appelOffre.contact_email}</span>
                    </a>
                  )}
                  {appelOffre.contact_telephone && (
                    <a href={`tel:${appelOffre.contact_telephone}`} className="contact-item">
                      <Phone size={20} />
                      <span>{appelOffre.contact_telephone}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppelOffreDetails;

