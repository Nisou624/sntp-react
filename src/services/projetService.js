// src/services/projetService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ProjetService {
  // Obtenir tous les projets (sans authentification pour la page publique)
  async getAll(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      // Ajouter les filtres
      if (filters.category) params.append('category', filters.category);
      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
      
      const response = await axios.get(`${API_URL}/projets?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  }

  // Obtenir un projet par ID
  async getById(id) {
    try {
      const response = await axios.get(`${API_URL}/projets/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du projet:', error);
      throw error;
    }
  }

  // Obtenir les statistiques
  async getStatistics() {
    try {
      const response = await axios.get(`${API_URL}/projets/admin/statistics`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      throw error;
    }
  }
}

export default new ProjetService();

