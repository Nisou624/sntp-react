import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppelOffreCard.css';
import { Calendar, MapPin, Clock, DollarSign, FileText, Tag } from 'lucide-react';

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

  // Déterminer la couleur du badge selon le statut
  const getStatusColor = (statut) => {
    const colors = {
      'Ouvert': 'status-ouvert',
      'Fermé': 'status-ferme',
      'Annulé': 'status-annule',
      'Attribué': 'status-attribue'
    };
    return colors[statut] || 'status-default';
  };

  // Déterminer la couleur du type de marché
  const getTypeColor = (type) => {
    const colors = {
      'Travaux': 'type-travaux',
      'Fournitures': 'type-fournitures',
      'Services': 'type-services',
      'Etudes': 'type-etudes'
    };
    return colors[type] || 'type-default';
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
    <div className="appel-offre-card">
      <div className="card-header">
        <div className="card-badges">
          <span className={`badge badge-status ${getStatusColor(appelOffre.statut)}`}>
            {appelOffre.statut}
          </span>
          <span className={`badge badge-type ${getTypeColor(appelOffre.type_marche)}`}>
            {appelOffre.type_marche}
          </span>
        </div>
        <span className="card-numero">{appelOffre.numero_ao}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{appelOffre.titre}</h3>
        
        <p className="card-description">
          {appelOffre.description?.length > 150 
            ? `${appelOffre.description.substring(0, 150)}...` 
            : appelOffre.description}
        </p>

        <div className="card-info-grid">
          <div className="info-item">
            <MapPin size={18} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Localisation</span>
              <span className="info-value">{appelOffre.localisation || 'Non spécifié'}</span>
            </div>
          </div>

          <div className="info-item">
            <DollarSign size={18} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Montant estimatif</span>
              <span className="info-value">{formatMontant(appelOffre.montant_estimatif)}</span>
            </div>
          </div>

          <div className="info-item">
            <Calendar size={18} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Date de publication</span>
              <span className="info-value">{formatDate(appelOffre.date_publication)}</span>
            </div>
          </div>

          <div className="info-item">
            <Clock size={18} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Date limite de dépôt</span>
              <span className="info-value">{formatDate(appelOffre.date_limite_depot)}</span>
            </div>
          </div>
        </div>

        <div className={`card-deadline ${isUrgent ? 'deadline-urgent' : ''}`}>
          <Clock size={16} />
          <span>{joursRestants}</span>
        </div>

        {appelOffre.maitre_ouvrage && (
          <div className="card-maitre-ouvrage">
            <FileText size={16} />
            <span>{appelOffre.maitre_ouvrage}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <button onClick={handleVoirDetails} className="btn-details">
          Voir les détails
        </button>
        {appelOffre.fichier_cahier_charges && (
          <button onClick={handleDownloadCahierCharges} className="btn-download">
            <FileText size={18} />
            Cahier des charges
          </button>
        )}
      </div>
    </div>
  );
};

export default AppelOffreCard;

