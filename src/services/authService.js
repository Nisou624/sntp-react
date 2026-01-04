import adminPaths from '../config/adminConfig';

const authService = {
  // Vérifier si l'utilisateur est authentifié
  isAuthenticated: () => {
    const token = sessionStorage.getItem('adminToken');
    if (!token) return false;
    
    try {
      // Décoder le token JWT pour vérifier l'expiration
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiration = payload.exp * 1000; // Convertir en millisecondes
      
      if (Date.now() >= expiration) {
        console.log('Token expiré');
        sessionStorage.removeItem('adminToken');
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Erreur validation token:', error);
      sessionStorage.removeItem('adminToken');
      return false;
    }
  },
  
  // Obtenir le token
  getToken: () => {
    return sessionStorage.getItem('adminToken');
  },
  
  // Déconnexion
  logout: () => {
    console.log('Déconnexion utilisateur');
    sessionStorage.removeItem('adminToken');
    // Utiliser le chemin configuré
    window.location.href = adminPaths.login;
  },

  logoutSilent: () => {
    console.log('Déconnexion silencieuse en arrière-plan');
    sessionStorage.removeItem('adminToken');
    // Pas de redirection - l'utilisateur continue sa navigation
  },
  
  // Obtenir les informations utilisateur depuis le token
  getUserFromToken: () => {
    const token = sessionStorage.getItem('adminToken');
    if (!token) return null;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (error) {
      console.error('Erreur décodage token:', error);
      return null;
    }
  }
};

export default authService;

