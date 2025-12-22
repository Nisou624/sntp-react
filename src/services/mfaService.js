import api from '../config/api';

const mfaService = {
  // Initier l'authentification MFA
  initiateMFA: async (email, password) => {
    try {
      const response = await api.post('/mfa/initiate', {
        email,
        motDePasse: password
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Erreur réseau' };
    }
  },

  // Vérifier une étape MFA
  verifyStep: async (sessionId, selectedNumber) => {
    try {
      const response = await api.post('/mfa/verify', {
        sessionId,
        selectedNumber: parseInt(selectedNumber)
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Erreur réseau' };
    }
  },

  // Annuler la session MFA
  cancelMFA: async (sessionId) => {
    try {
      const response = await api.delete(`/mfa/cancel/${sessionId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Erreur réseau' };
    }
  }
};

export default mfaService;

