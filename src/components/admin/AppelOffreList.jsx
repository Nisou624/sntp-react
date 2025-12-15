import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AppelOffreList.css';

const AppelOffresList = () => {
  const navigate = useNavigate();
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatut, setFilterStatut] = useState('actif');

  useEffect(() => {
    loadAppelsOffres();
  }, []);

  const loadAppelsOffres = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/appels-offres`
      );
      
      if (response.data.success) {
        setAppelsOffres(response.data.data);
      }
    } catch (err) {
      setError('Erreur lors du chargement des appels d\'offres');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Non spécifié';
    
    try {
      const date = new Date(dateString);
      
      if (isNaN(date.getTime())) {
        console.warn('Date invalide:', dateString);
        return 'Date invalide';
      }
      
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Erreur formatage date:', error);
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
      
      return isNaN(diffDays) ? null : diffDays;
    } catch (error) {
      return null;
    }
  };

  // Filtrage des appels d'offres
  const filteredAppelsOffres = appelsOffres.filter(ao => {
    // Filtre par statut
    if (filterStatut && ao.statut !== filterStatut) {
      return false;
    }
    
    // Filtre par recherche
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        ao.titre?.toLowerCase().includes(searchLower) ||
        ao.reference?.toLowerCase().includes(searchLower) ||
        ao.description?.toLowerCase().includes(searchLower) ||
        ao.localisation?.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  if (loading) {
    return (
      <div className="liste-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Chargement des appels d'offres...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="liste-container">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={loadAppelsOffres} className="btn-retry">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="liste-container">
      <div className="liste-header">
        <h1>Appels D'Offres</h1>
        <p className="subtitle">Consultez tous les appels d'offres de la SNTP</p>
      </div>

      <div className="liste-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Rechercher un appel d'offre par titre, numéro ou description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          <button
            className={filterStatut === 'actif' ? 'active' : ''}
            onClick={() => setFilterStatut('actif')}
          >
            Actif ({appelsOffres.filter(ao => ao.statut === 'actif').length})
          </button>
          <button
            className={filterStatut === '' ? 'active' : ''}
            onClick={() => setFilterStatut('')}
          >
            Tous ({appelsOffres.length})
          </button>
        </div>
      </div>

      <div className="liste-count">
        {filteredAppelsOffres.length} appel{filteredAppelsOffres.length > 1 ? 's' : ''} d'offre{filteredAppelsOffres.length > 1 ? 's' : ''} trouvé{filteredAppelsOffres.length > 1 ? 's' : ''}
      </div>

      {filteredAppelsOffres.length === 0 ? (
        <div className="empty-state">
          <p>Aucun appel d'offre ne correspond à vos critères</p>
        </div>
      ) : (
        <div className="liste-grid">
          {filteredAppelsOffres.map((ao) => {
            const daysRemaining = calculateDaysRemaining(ao.dateEcheance);
            
            return (
              <div key={ao.id} className="appel-card">
                <div className="card-header">
                  <span className="reference">{ao.reference || 'N/A'}</span>
                  <span className={`statut-badge statut-${ao.statut}`}>
                    {ao.statut || 'actif'}
                  </span>
                </div>

                <h3 className="card-title">{ao.titre || 'Sans titre'}</h3>

                <p className="card-description">
                  {ao.description 
                    ? ao.description.substring(0, 150) + (ao.description.length > 150 ? '...' : '')
                    : 'Aucune description disponible'}
                </p>

                <div className="card-info">
                  <div className="info-row">
                    <span className="info-label">📍 Localisation</span>
                    <span className="info-value">{ao.localisation || 'Non spécifié'}</span>
                  </div>

                  <div className="info-row">
                    <span className="info-label">💰 Montant</span>
                    <span className="info-value">{formatMontant(ao.montant)}</span>
                  </div>

                  <div className="info-row">
                    <span className="info-label">📅 Date de publication</span>
                    <span className="info-value">{formatDate(ao.datePublication)}</span>
                  </div>

                  <div className="info-row">
                    <span className="info-label">⏰ Date limite</span>
                    <span className="info-value deadline">{formatDate(ao.dateEcheance)}</span>
                  </div>
                </div>

                {daysRemaining !== null && daysRemaining >= 0 && (
                  <div className="days-badge">
                    {daysRemaining} jour{daysRemaining > 1 ? 's' : ''} restant{daysRemaining > 1 ? 's' : ''}
                  </div>
                )}

                {daysRemaining !== null && daysRemaining < 0 && (
                  <div className="days-badge expired">
                    Délai expiré
                  </div>
                )}

                <button
                  onClick={() => navigate(`/nos-appels-offres/${ao.id}`)}
                  className="btn-details"
                >
                  Voir les détails →
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppelOffresList;

