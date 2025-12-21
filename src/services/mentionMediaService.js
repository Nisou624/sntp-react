// src/services/mentionMediaService.js - VERSION CORRIGÉE
import axios from 'axios';
import authService from './authService';

const API_URL = 'http://localhost:5000/api/mentions-medias';

// Récupérer toutes les mentions
export const getAllMentions = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Récupérer une mention par ID
export const getMentionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Créer une nouvelle mention
export const createMention = async (mentionData) => {
  try {
    const token = authService.getToken(); // ✅ CORRECTION ICI
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.post(API_URL, mentionData, {
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

// Mettre à jour une mention
export const updateMention = async (id, mentionData) => {
  try {
    const token = authService.getToken(); // ✅ CORRECTION ICI
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.put(`${API_URL}/${id}`, mentionData, {
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

// Supprimer une mention
export const deleteMention = async (id) => {
  try {
    const token = authService.getToken(); // ✅ CORRECTION ICI
    
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
    const token = authService.getToken(); // ✅ CORRECTION ICI
    
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

