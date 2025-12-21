// src/services/authService.js - VERSION COMPLÈTE CORRECTE
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Clé pour le localStorage
const TOKEN_KEY = 'adminToken';
const USER_KEY = 'sntp_user';

// Login
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });

    if (response.data.success && response.data.token) {
      // Stocker le token et les infos utilisateur
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Logout
const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Obtenir le token
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Obtenir l'utilisateur connecté
const getCurrentUser = () => {
  const userStr = localStorage.getItem(USER_KEY);
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Erreur parsing user:', error);
      return null;
    }
  }
  return null;
};

// Vérifier si l'utilisateur est authentifié
const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

// Exporter toutes les fonctions
const authService = {
  login,
  logout,
  getToken,
  getCurrentUser,
  isAuthenticated
};

export default authService;

// Exports nommés également (au cas où)
export {
  login,
  logout,
  getToken,
  getCurrentUser,
  isAuthenticated
};

