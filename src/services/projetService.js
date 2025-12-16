import api from './api';

const projetService = {
  // Récupérer tous les projets
  getAllProjets: async (params = {}) => {
    try {
      const response = await api.get('/projets', { params });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  // Récupérer un projet par ID
  getProjetById: async (id) => {
    try {
      const response = await api.get(`/projets/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du projet:', error);
      throw error;
    }
  },

  // Récupérer les statistiques
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
