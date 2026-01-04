import axios from 'axios';

// Configuration de base de l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Création de l'instance Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur de requête
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem('adminToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Service pour les appels d'offres
export const appelOffresService = {
  // Récupérer tous les appels d'offres
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      
      if (filters.statut) params.append('statut', filters.statut);
      if (filters.type_marche) params.append('type_marche', filters.type_marche);
      if (filters.localisation) params.append('localisation', filters.localisation);
      if (filters.search) params.append('search', filters.search);
      if (filters.orderBy) params.append('orderBy', filters.orderBy);
      if (filters.order) params.append('order', filters.order);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.offset) params.append('offset', filters.offset);

      const response = await api.get(`/appels-offres?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Récupérer un appel d'offre par ID
  getById: async (id) => {
    try {
      const response = await api.get(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Récupérer un appel d'offre par numéro
  getByNumero: async (numero) => {
    try {
      const response = await api.get(`/appels-offres/numero/${numero}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Créer un nouvel appel d'offre
  create: async (data) => {
    try {
      const response = await api.post('/appels-offres', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Mettre à jour un appel d'offre
  update: async (id, data) => {
    try {
      const response = await api.put(`/appels-offres/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Supprimer un appel d'offre
  delete: async (id) => {
    try {
      const response = await api.delete(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obtenir les statistiques
  getStatistics: async () => {
    try {
      const response = await api.get('/appels-offres/statistics');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/appels-offres/${id}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'appel d\'offre:', error);
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  },
};

export default api;

