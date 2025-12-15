// src/pages/admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import appelOffreService from '../../services/appelOffreService';
import AppelOffreForm from '../../components/admin/AppelOffreForm';
import AppelOffreList from '../../components/admin/AppelOffreList';
import Pagination from '../../components/Pagination';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [appelsOffres, setAppelsOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAppelOffre, setEditingAppelOffre] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit] = useState(10); // Nombre d'éléments par page

  useEffect(() => {
    loadAppelsOffres();
  }, [currentPage]); // Recharger quand la page change

  const loadAppelsOffres = async () => {
    try {
      setLoading(true);
      const response = await appelOffreService.getAll({
        page: currentPage,
        limit: limit,
        sortBy: 'datePublication',
        sortOrder: 'DESC'
      });
      
      if (response.success) {
        setAppelsOffres(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalItems(response.pagination.total);
      }
    } catch (err) {
      setError('Erreur lors du chargement des appels d\'offres');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
  };

  const handleCreateNew = () => {
    setEditingAppelOffre(null);
    setShowForm(true);
  };

  const handleEdit = (appelOffre) => {
    setEditingAppelOffre(appelOffre);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet appel d\'offre ?')) return;

    try {
      const response = await appelOffreService.delete(id);
      if (response.success) {
        setSuccess('Appel d\'offre supprimé avec succès');
        loadAppelsOffres();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError('Erreur lors de la suppression');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingAppelOffre(null);
    setSuccess(editingAppelOffre ? 'Appel d\'offre modifié avec succès' : 'Appel d\'offre créé avec succès');
    setCurrentPage(1); // Revenir à la première page
    loadAppelsOffres();
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingAppelOffre(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Panel Administration SNTP</h1>
          <div className="header-actions">
            <span className="user-info">
              {authService.getCurrentUser()?.email}
            </span>
            <button onClick={handleLogout} className="btn btn-secondary">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="content-wrapper">
          {/* Alerts */}
          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          {/* Titre et bouton d'ajout */}
          <div className="section-header">
            <h2>Gestion des Appels d'Offres</h2>
            {!showForm && (
              <button onClick={handleCreateNew} className="btn btn-primary">
                Nouvel Appel d'Offre
              </button>
            )}
          </div>

          {/* Affichage du nombre total */}
          {!showForm && (
            <div className="items-count">
              Total : {totalItems} appel(s) d'offre
            </div>
          )}

          {/* Formulaire ou Liste */}
          {showForm ? (
            <AppelOffreForm
              appelOffre={editingAppelOffre}
              onSuccess={handleFormSuccess}
              onCancel={handleFormCancel}
            />
          ) : (
            <>
              <AppelOffreList
                appelsOffres={appelsOffres}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
              
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

