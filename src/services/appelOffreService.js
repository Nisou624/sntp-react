import api from './api';
import authService from './authService';

class AppelOffreService {
  // Obtenir tous les appels d'offres
  async getAll(filters = {}) {
    try {
      const params = new URLSearchParams();

      // Ajouter les filtres
      if (filters.statut) params.append('statut', filters.statut);
      if (filters.localisation) params.append('localisation', filters.localisation);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.sortBy) params.append('sortBy', filters.sortBy);
      if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);

      const response = await api.get(`/appels-offres?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtenir un appel d'offre par ID
  async getById(id) {
    try {
      const response = await api.get(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Générer l'URL de téléchargement du PDF
  getPdfUrl(id) {
    return `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api'}/appels-offres/${id}/pdf`;
  }

  // Créer un nouvel appel d'offre
  async create(formData) {
    try {
      const token = authService.getToken(); // ✅ Utilisation correcte
    
      if (!token) {
        throw new Error('Non authentifié. Veuillez vous connecter.');
      }

      const response = await api.post('/appels-offres', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Mettre à jour un appel d'offre
  async update(id, formData) {
    try {
      const token = authService.getToken(); // ✅ Utilisation correcte
    
      if (!token) {
        throw new Error('Non authentifié. Veuillez vous connecter.');
      }

      const response = await api.put(`/appels-offres/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Supprimer un appel d'offre
  async delete(id) {
    try {
      const response = await api.delete(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtenir les statistiques
  async getStatistics() {
    try {
      const response = await api.get('/appels-offres/admin/statistics');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AppelOffreService();

