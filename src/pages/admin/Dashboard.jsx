// src/pages/admin/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import adminPaths from '../../config/adminConfig';
import AppelOffresList from '../../components/admin/AppelOffreList';
import AppelOffreForm from '../../components/admin/AppelOffreForm';
import ProjetsList from '../../components/admin/ProjetList';
import ProjetForm from '../../components/admin/ProjetForm';
import ArticlesList from '../../components/admin/ArticleList';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appels-offres');
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleLogout = () => {
    authService.logout();
  };

  const handleAdd = () => {
    // Pour les articles, rediriger vers la page de création dédiée
    if (activeTab === 'articles') {
      navigate(adminPaths.articlesNew);
      return;
    }
    
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    // Pour les articles, rediriger vers la page d'édition dédiée
    if (activeTab === 'articles') {
      navigate(adminPaths.articlesEdit(item.id));
      return;
    }
    
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
        } else if (activeTab === 'articles') {
          const { deleteArticle } = require('../../services/articleService');
          response = await deleteArticle(id);
        }

        if (response && response.success) {
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
    <div className="Dashboard-container">
      <header className="Dashboard-header">
        <div className="Dashboard-header-content">
          <h1>Tableau de Bord SNTP</h1>
          <button className="Dashboard-btn-logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </header>

      <div className="Dashboard-content">
        {/* Onglets */}
        <div className="Dashboard-tabs">
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'appels-offres' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('appels-offres');
              setShowForm(false);
            }}
          >
            Appels d'Offres
          </button>
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'projets' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('projets');
              setShowForm(false);
            }}
          >
            Projets
          </button>
          <button
            className={`Dashboard-tab-btn ${
              activeTab === 'articles' ? 'Dashboard-active' : ''
            }`}
            onClick={() => {
              setActiveTab('articles');
              setShowForm(false);
            }}
          >
            Articles
          </button>
        </div>

        {/* Bouton Ajouter (sauf pour les articles qui ont leur propre interface) */}
        {!showForm && activeTab !== 'articles' && (
          <div className="Dashboard-actions">
            <button className="Dashboard-btn-add" onClick={handleAdd}>
              + Ajouter
            </button>
          </div>
        )}

        {/* Contenu principal */}
        <div className="Dashboard-main">
          {/* Appels d'Offres */}
          {activeTab === 'appels-offres' && (
            <>
              {showForm ? (
                <AppelOffreForm
                  appelOffre={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              ) : (
                <AppelOffresList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </>
          )}

          {/* Projets */}
          {activeTab === 'projets' && (
            <>
              {showForm ? (
                <ProjetForm
                  projet={selectedItem}
                  onSuccess={handleFormSuccess}
                  onCancel={handleFormCancel}
                />
              ) : (
                <ProjetsList
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  refreshTrigger={refreshTrigger}
                />
              )}
            </>
          )}

          {/* Articles */}
          {activeTab === 'articles' && (
            <ArticlesList />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

