// src/services/imageService.js
import axios from 'axios';
import authService from './authService';

const API_URL = 'http://localhost:5000/api/images';

// Upload une image
export const uploadImage = async (file, altText = '') => {
  try {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const formData = new FormData();
    formData.append('image', file);
    if (altText) {
      formData.append('altText', altText);
    }

    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Récupérer toutes les images
export const getAllImages = async (params = {}) => {
  try {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Non authentifié. Veuillez vous connecter.');
    }

    const response = await axios.get(API_URL, {
      params,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Supprimer une image
export const deleteImage = async (id) => {
  try {
    const token = authService.getToken();
    
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

// Obtenir l'URL d'une image
export const getImageUrl = (imageId) => {
  return `${API_URL}/${imageId}`;
};

