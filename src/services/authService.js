import api from './api';
import  { jwtDecode } from 'jwt-decode';
class AuthService {
  // Connexion
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password });
      
      if (response.data.success && response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        return { success: true, user: response.data.user };
      }
      
      return { success: false, message: 'Erreur de connexion' };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erreur de connexion'
      };
    }
  }

  // Déconnexion
  logout() {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated() {
    const token = localStorage.getItem('adminToken');
    
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      
      // Vérifier si le token est expiré
      if (decoded.exp < currentTime) {
        this.logout();
        return false;
      }
      
      return true;
    } catch (error) {
      this.logout();
      return false;
    }
  }

  // Obtenir l'utilisateur courant
  getCurrentUser() {
    const token = localStorage.getItem('adminToken');
    
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();

