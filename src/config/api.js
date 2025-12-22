import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour ajouter le token à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('adminToken'); // sessionStorage au lieu de localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs 401 (token expiré/invalide)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('401 - Token invalide ou expiré');
      
      // Supprimer le token
      sessionStorage.removeItem('adminToken');
      
      // Rediriger vers login
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;

