import React, { useState, useEffect } from 'react';
import './AppelsOffres.css';
import AppelOffreCard from '../components/AppelOffreCard/AppelOffreCard';
import { appelOffresService } from '../services/api';
import { Search, Filter, Loader, AlertCircle, RefreshCw } from 'lucide-react';

const AppelsOffres = () => {
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    statut: '',
    type_marche: '',
    localisation: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [statistics, setStatistics] = useState(null);

  // Charger les appels d'offres
  const loadAppelsOffres = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await appelOffresService.getAll(filters);
      
      if (response.success) {
        setAppelsOffres(response.data);
      } else {
        throw new Error('Erreur lors du chargement des données');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  // Charger les statistiques
  const loadStatistics = async () => {
    try {
      const response = await appelOffresService.getStatistics();
      if (response.success) {
        setStatistics(response.data);
      }
    } catch (err) {
      console.error('Erreur lors du chargement des statistiques:', err);
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    loadAppelsOffres();
    loadStatistics();
  }, []);

  // Recharger lors du changement de filtres
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadAppelsOffres();
    }, 300); // Debounce de 300ms

    return () => clearTimeout(timeoutId);
  }, [filters]);

  // Gestion du changement de recherche
  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  // Gestion du changement de filtre
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      search: '',
      statut: '',
      type_marche: '',
      localisation: ''
    });
  };

  // Rafraîchir les données
  const handleRefresh = () => {
    loadAppelsOffres();
    loadStatistics();
  };

  return (
    <div className="appels-offres-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Appels d'Offres</h1>
          <p className="page-subtitle">
            Consultez tous les appels d'offres de la SNTP
          </p>
        </div>
        
        <button className="btn-refresh" onClick={handleRefresh} title="Rafraîchir">
          <RefreshCw size={20} />
        </button>
      </div>

      {/* Statistiques */}
      {statistics && (
        <div className="statistics-section">
          <div className="stat-card">
            <div className="stat-value">{statistics.total}</div>
            <div className="stat-label">Total des AO</div>
          </div>
          {statistics.byStatus.map((stat) => (
            <div key={stat.statut} className="stat-card">
              <div className="stat-value">{stat.count}</div>
              <div className="stat-label">{stat.statut}</div>
            </div>
          ))}
        </div>
      )}

      {/* Barre de recherche et filtres */}
      <div className="search-filter-section">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un appel d'offre par titre, numéro ou description..."
            value={filters.search}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <button 
          className={`btn-toggle-filters ${showFilters ? 'active' : ''}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} />
          Filtres
        </button>
      </div>

      {/* Filtres avancés */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label htmlFor="statut-filter">Statut</label>
            <select
              id="statut-filter"
              value={filters.statut}
              onChange={(e) => handleFilterChange('statut', e.target.value)}
              className="filter-select"
            >
              <option value="">Tous les statuts</option>
              <option value="Ouvert">Ouvert</option>
              <option value="Fermé">Fermé</option>
              <option value="Annulé">Annulé</option>
              <option value="Attribué">Attribué</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="type-filter">Type de marché</label>
            <select
              id="type-filter"
              value={filters.type_marche}
              onChange={(e) => handleFilterChange('type_marche', e.target.value)}
              className="filter-select"
            >
              <option value="">Tous les types</option>
              <option value="Travaux">Travaux</option>
              <option value="Fournitures">Fournitures</option>
              <option value="Services">Services</option>
              <option value="Etudes">Études</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="localisation-filter">Localisation</label>
            <input
              id="localisation-filter"
              type="text"
              placeholder="Ex: Alger, Oran..."
              value={filters.localisation}
              onChange={(e) => handleFilterChange('localisation', e.target.value)}
              className="filter-input"
            />
          </div>

          <button className="btn-reset-filters" onClick={resetFilters}>
            Réinitialiser
          </button>
        </div>
      )}

      {/* Contenu principal */}
      <div className="page-content">
        {loading ? (
          <div className="loading-state">
            <Loader className="spinner" size={48} />
            <p>Chargement des appels d'offres...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <AlertCircle size={48} />
            <h3>Erreur de chargement</h3>
            <p>{error}</p>
            <button className="btn-retry" onClick={loadAppelsOffres}>
              Réessayer
            </button>
          </div>
        ) : appelsOffres.length === 0 ? (
          <div className="empty-state">
            <AlertCircle size={48} />
            <h3>Aucun appel d'offre trouvé</h3>
            <p>Aucun résultat ne correspond à vos critères de recherche.</p>
            <button className="btn-reset" onClick={resetFilters}>
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <>
            <div className="results-info">
              <p>{appelsOffres.length} appel(s) d'offre(s) trouvé(s)</p>
            </div>
            
            <div className="appels-offres-grid">
              {appelsOffres.map((appelOffre) => (
                <AppelOffreCard key={appelOffre.id} appelOffre={appelOffre} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppelsOffres;

