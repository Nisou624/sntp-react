// src/pages/admin/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import AppelOffresList from '../../components/admin/AppelOffreList';
import AppelOffreForm from '../../components/admin/AppelOffreForm';
import ProjetsList from '../../components/admin/ProjetList';
import ProjetForm from '../../components/admin/ProjetForm';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appels-offres');
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer cet élément ?`
    );

    if (confirmDelete) {
      try {
        let response;
        if (activeTab === 'appels-offres') {
          const appelOffreService = require('../../services/appelOffreService').default;
          response = await appelOffreService.delete(id);
        } else if (activeTab === 'projets') {
          const projetService = require('../../services/projetService').default;
          response = await projetService.delete(id);
        }

        if (response.success) {
          alert('Élément supprimé avec succès');
          setRefreshTrigger(prev => prev + 1);
        }
      } catch (error) {
        alert('Erreur lors de la suppression');
        console.error(error);
      }
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedItem(null);
    setRefreshTrigger(prev => prev + 1);
    alert(
      selectedItem
        ? 'Élément modifié avec succès'
        : 'Élément créé avec succès'
    );
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Panel Administrateur</h1>
          <button onClick={handleLogout} className="btn-logout">
            Déconnexion
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-tabs">
          <button
            className={`tab-btn ${activeTab === 'appels-offres' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('appels-offres');
              setShowForm(false);
              setSelectedItem(null);
            }}
          >
            📢 Appels d'Offres
          </button>
          <button
            className={`tab-btn ${activeTab === 'projets' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('projets');
              setShowForm(false);
              setSelectedItem(null);
            }}
          >
            🏗️ Projets
          </button>
        </div>

        <div className="dashboard-actions">
          {!showForm && (
            <button onClick={handleAdd} className="btn-add">
              ➕ Ajouter {activeTab === 'appels-offres' ? 'un Appel d\'Offre' : 'un Projet'}
            </button>
          )}
        </div>

        <div className="dashboard-main">
          {showForm ? (
            <div>
              {activeTab === 'appels-offres' ? (
                <AppelOffreForm
                  appelOffre={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              ) : (
                <ProjetForm
                  projet={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              )}
            </div>
          ) : (
            <div>
              {activeTab === 'appels-offres' ? (
                <AppelOffresList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              ) : (
                <ProjetsList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

