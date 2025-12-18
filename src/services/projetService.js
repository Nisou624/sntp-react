import api from './api';

const projetService = {
  /**
   * Récupérer tous les projets avec filtres et pagination
   */
  getAll: async (params) => {
    try {
      const queryParams = new URLSearchParams();
      
      // Ajouter les paramètres à l'URL
      if (params?.page) queryParams.append('page', params.page);
      if (params?.limit) queryParams.append('limit', params.limit);
      if (params?.category) queryParams.append('category', params.category);
      if (params?.status) queryParams.append('status', params.status);
      if (params?.search) queryParams.append('search', params.search);
      if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
      if (params?.sortOrder) queryParams.append('sortOrder', params.sortOrder);
      
      const response = await api.get(`/projets?${queryParams.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  /**
   * Récupérer un projet par ID
   */
  getById: async (id) => {
    try {
      const response = await api.get(`/projets/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet ${id}:`, error);
      throw error;
    }
  },

  /**
   * Créer un nouveau projet
   */
  create: async (projetData) => {
    try {
      const response = await api.post('/projets', projetData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du projet:', error);
      throw error;
    }
  },

  /**
   * Mettre à jour un projet existant
   */
  update: async (id, projetData) => {
    try {
      const response = await api.put(`/projets/${id}`, projetData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du projet ${id}:`, error);
      throw error;
    }
  },

  /**
   * Supprimer un projet
   */
  delete: async (id) => {
    try {
      const response = await api.delete(`/projets/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du projet ${id}:`, error);
      throw error;
    }
  },

  /**
   * Récupérer les statistiques
   */
  getStatistics: async () => {
    try {
      const response = await api.get('/projets/admin/statistics');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      throw error;
    }
  }
};

export default projetService;

