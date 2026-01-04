// src/services/projetService.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const projetService = {
  // Récupérer tous les projets
  getAllProjets: async (params = {}) => {
    try {
      const queryParams = new URLSearchParams(params);
      const response = await fetch(`${API_URL}/projets?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  // Récupérer un projet par ID
  getProjetById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/projets/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération du projet:', error);
      throw error;
    }
  },

  // Obtenir l'URL de l'image d'un projet
  getImageUrl: (id) => {
    return `${API_URL}/projets/${id}/image`;
  },

  // Créer un nouveau projet
  createProjet: async (projetData, imageFile) => {
    try {
      const formData = new FormData();
      
      // Ajouter les champs du projet
      Object.keys(projetData).forEach(key => {
        if (projetData[key] !== null && projetData[key] !== undefined) {
          formData.append(key, projetData[key]);
        }
      });
      
      // Ajouter le fichier image si présent
      if (imageFile) {
        formData.append('image', imageFile);
      }
      
      // CORRECTION ICI : Récupérer le token correctement
      const token = sessionStorage.getItem('adminToken');
      
      // Debug
      console.log('📤 Token envoyé:', token ? token.substring(0, 20) + '...' : 'AUCUN TOKEN');
      
      if (!token) {
        throw new Error('Vous devez être connecté pour créer un projet');
      }
      
      const response = await fetch(`${API_URL}/projets`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
          // NE PAS ajouter Content-Type pour FormData - le navigateur le fait automatiquement
        },
        body: formData
      });
      
      const data = await response.json();
      
      // Vérifier si la réponse est une erreur d'authentification
      if (response.status === 401) {
        // Token invalide ou expiré
        sessionStorage.removeItem('adminToken');
        throw new Error('Session expirée. Veuillez vous reconnecter.');
      }
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la création du projet');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur lors de la création du projet:', error);
      throw error;
    }
  },

  // Mettre à jour un projet
  updateProjet: async (id, projetData, imageFile) => {
    try {
      const formData = new FormData();
      
      // Ajouter les champs du projet
      Object.keys(projetData).forEach(key => {
        if (projetData[key] !== null && projetData[key] !== undefined) {
          formData.append(key, projetData[key]);
        }
      });
      
      // Ajouter le fichier image si présent
      if (imageFile) {
        formData.append('image', imageFile);
      }
      
      // CORRECTION ICI : Récupérer le token correctement
      const token = sessionStorage.getItem('adminToken');
      
      // Debug
      console.log('📤 Token envoyé:', token ? token.substring(0, 20) + '...' : 'AUCUN TOKEN');
      
      if (!token) {
        throw new Error('Vous devez être connecté pour modifier un projet');
      }
      
      const response = await fetch(`${API_URL}/projets/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
          // NE PAS ajouter Content-Type pour FormData
        },
        body: formData
      });
      
      const data = await response.json();
      
      // Vérifier si la réponse est une erreur d'authentification
      if (response.status === 401) {
        sessionStorage.removeItem('adminToken');
        throw new Error('Session expirée. Veuillez vous reconnecter.');
      }
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la mise à jour du projet');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet:', error);
      throw error;
    }
  },

  // Supprimer un projet
  deleteProjet: async (id) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      
      if (!token) {
        throw new Error('Vous devez être connecté pour supprimer un projet');
      }
      
      const response = await fetch(`${API_URL}/projets/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (response.status === 401) {
        sessionStorage.removeItem('adminToken');
        throw new Error('Session expirée. Veuillez vous reconnecter.');
      }
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la suppression du projet');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur lors de la suppression du projet:', error);
      throw error;
    }
  },

  // Obtenir les statistiques
  getStatistics: async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      
      if (!token) {
        throw new Error('Vous devez être connecté pour accéder aux statistiques');
      }
      
      const response = await fetch(`${API_URL}/projets/admin/statistics`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (response.status === 401) {
        sessionStorage.removeItem('adminToken');
        throw new Error('Session expirée. Veuillez vous reconnecter.');
      }
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de la récupération des statistiques');
      }
      
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques:', error);
      throw error;
    }
  }
};

export default projetService;

