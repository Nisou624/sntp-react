// src/services/articleService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/articles';

// Fonction pour obtenir le token - UTILISER "adminToken"
const getAuthToken = () => {
  return localStorage.getItem('adminToken'); // ⚠️ Changé de 'token' à 'adminToken'
};

// Fonction pour obtenir les headers avec authentification
const getAuthHeaders = () => {
  const token = getAuthToken();
  if (!token) {
    throw new Error('Non authentifié. Veuillez vous connecter.');
  }
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};

// Récupérer tous les articles (PUBLIC)
export const getAllArticles = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Récupérer un article par ID (PUBLIC)
export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Récupérer un article par slug (PUBLIC)
export const getArticleBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Créer un nouvel article (PROTÉGÉ)
export const createArticle = async (articleData) => {
  try {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    console.log('✅ Token récupéré:', token.substring(0, 20) + '...');
    console.log('📤 Données envoyées:', articleData);

    const response = await axios.post(API_URL, articleData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Réponse reçue:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erreur lors de la création:', error.response || error);
    throw error.response?.data || { message: error.message };
  }
};

// Mettre à jour un article (PROTÉGÉ)
export const updateArticle = async (id, articleData) => {
  try {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    console.log('✅ Token récupéré:', token.substring(0, 20) + '...');
    console.log('📤 Données envoyées:', articleData);

    const response = await axios.put(`${API_URL}/${id}`, articleData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Réponse reçue:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour:', error.response || error);
    throw error.response?.data || { message: error.message };
  }
};

// Supprimer un article (PROTÉGÉ)
export const deleteArticle = async (id) => {
  try {
    const token = getAuthToken();
    
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
    console.error('❌ Erreur lors de la suppression:', error.response || error);
    throw error.response?.data || { message: error.message };
  }
};

// Obtenir les statistiques (PROTÉGÉ)
export const getStatistics = async () => {
  try {
    const token = getAuthToken();
    
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
    console.error('❌ Erreur lors de la récupération des stats:', error.response || error);
    throw error.response?.data || { message: error.message };
  }
};

