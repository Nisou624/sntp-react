import api from './api';

class AppelOffreService {
  // Obtenir tous les appels d'offres
  async getAll() {
    try {
      const response = await api.get('/appels-offres');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Obtenir un appel d'offre par ID
  async getById(id) {
    try {
      const response = await api.get(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Créer un nouvel appel d'offre
  async create(formData) {
    try {
      const response = await api.post('/appels-offres', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Mettre à jour un appel d'offre
  async update(id, formData) {
    try {
      const response = await api.put(`/appels-offres/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Supprimer un appel d'offre
  async delete(id) {
    try {
      const response = await api.delete(`/appels-offres/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AppelOffreService();

