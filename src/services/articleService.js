// src/services/articleService.js - CORRECTION
import axios from 'axios';
import authService from './authService'; // ✅ Import par défaut

const API_URL = 'http://localhost:5000/api/articles';

// Récupérer tous les articles (avec support mentions médias)
export const getAllArticles = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Récupérer un article par slug
export const getArticleBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Récupérer un article par ID (admin)
export const getArticleById = async (id) => {
  try {
    const token = authService.getToken(); // ✅ Utilisation correcte
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Créer un nouvel article ou mention média
export const createArticle = async (articleData) => {
  try {
    const token = authService.getToken(); // ✅ Utilisation correcte
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.post(API_URL, articleData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Mettre à jour un article ou mention média
export const updateArticle = async (id, articleData) => {
  try {
    const token = authService.getToken(); // ✅ Utilisation correcte
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.put(`${API_URL}/${id}`, articleData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Supprimer un article ou mention média
export const deleteArticle = async (id) => {
  try {
    const token = authService.getToken(); // ✅ Utilisation correcte
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Obtenir les statistiques
export const getStatistics = async () => {
  try {
    const token = authService.getToken(); // ✅ Utilisation correcte
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.get(`${API_URL}/admin/statistics`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Export par défaut également
const articleService = {
  getAllArticles,
  getArticleBySlug,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getStatistics
};

export default articleService;

