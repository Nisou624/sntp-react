import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppelOffreCard.css';
import { Calendar, MapPin, Clock, DollarSign, FileText, Building2 } from 'lucide-react';

const AppelOffreCard = ({ appelOffre }) => {
  const navigate = useNavigate();

  // Formatage de la date
  const formatDate = (dateString) => {
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

  // Déterminer la classe CSS selon le statut
  const getStatusClass = (statut) => {
    const classes = {
      'Ouvert': 'AppelOffreCard-status-ouvert',
      'Fermé': 'AppelOffreCard-status-ferme',
      'Annulé': 'AppelOffreCard-status-annule',
      'Attribué': 'AppelOffreCard-status-attribue'
    };
    return classes[statut] || 'AppelOffreCard-status-default';
  };

  // Calculer les jours restants
  const getJoursRestants = (dateLimite) => {
    const today = new Date();
    const limite = new Date(dateLimite);
    const diffTime = limite - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Expiré';
    if (diffDays === 0) return 'Aujourd\'hui';
    if (diffDays === 1) return '1 jour restant';
    return `${diffDays} jours restants`;
  };

  const joursRestants = getJoursRestants(appelOffre.date_limite_depot);
  const isUrgent = joursRestants !== 'Expiré' && parseInt(joursRestants) <= 7;

  const handleVoirDetails = () => {
    navigate(`/nos-appels-offres/${appelOffre.id}`);
  };

  const handleDownloadCahierCharges = (e) => {
    e.stopPropagation();
    if (appelOffre.fichier_cahier_charges) {
      window.open(appelOffre.fichier_cahier_charges, '_blank');
    }
  };

  return (
    <article className="AppelOffreCard">
      {/* En-tête */}
      <div className="AppelOffreCard-header">
        <div className="AppelOffreCard-badges">
          <span className={`AppelOffreCard-badge AppelOffreCard-badge-status ${getStatusClass(appelOffre.statut)}`}>
            {appelOffre.statut}
          </span>
          {appelOffre.type_marche && (
            <span className="AppelOffreCard-badge AppelOffreCard-badge-type">
              {appelOffre.type_marche}
            </span>
          )}
        </div>
        <div className="AppelOffreCard-numero">
          Réf: {appelOffre.reference || 'N/A'}
        </div>
      </div>

      {/* Corps */}
      <div className="AppelOffreCard-body">
        <h3 className="AppelOffreCard-title">
          {appelOffre.titre || 'Sans titre'}
        </h3>

        <p className="AppelOffreCard-description">
          {appelOffre.description?.length > 150
            ? `${appelOffre.description.substring(0, 150)}...`
            : appelOffre.description || 'Aucune description disponible.'}
        </p>

        {/* Informations */}
        <div className="AppelOffreCard-info-grid">
          {appelOffre.localisation && (
            <div className="AppelOffreCard-info-item">
              <MapPin className="AppelOffreCard-info-icon" size={18} />
              <div className="AppelOffreCard-info-content">
                <span className="AppelOffreCard-info-label">Localisation</span>
                <span className="AppelOffreCard-info-value">{appelOffre.localisation}</span>
              </div>
            </div>
          )}

          {appelOffre.montant && (
            <div className="AppelOffreCard-info-item">
              <DollarSign className="AppelOffreCard-info-icon" size={18} />
              <div className="AppelOffreCard-info-content">
                <span className="AppelOffreCard-info-label">Montant estimé</span>
                <span className="AppelOffreCard-info-value">{formatMontant(appelOffre.montant)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Échéance */}
        <div className={`AppelOffreCard-deadline ${isUrgent ? 'AppelOffreCard-deadline-urgent' : ''}`}>
          <Clock size={18} />
          <span>{joursRestants}</span>
        </div>

        {/* Maître d'ouvrage */}
        {appelOffre.maitre_ouvrage && (
          <div className="AppelOffreCard-maitre-ouvrage">
            <Building2 size={18} />
            <span>{appelOffre.maitre_ouvrage}</span>
          </div>
        )}
      </div>

      {/* Pied */}
      <div className="AppelOffreCard-footer">
        <button onClick={handleVoirDetails} className="AppelOffreCard-btn-details">
          Voir Détails
        </button>
        {appelOffre.fichier_cahier_charges && (
          <button onClick={handleDownloadCahierCharges} className="AppelOffreCard-btn-download">
            <FileText size={18} />
            Cahier
          </button>
        )}
      </div>
    </article>
  );
};

export default AppelOffreCard;

