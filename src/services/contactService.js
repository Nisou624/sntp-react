import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * Envoyer un message de contact
 * @param {Object} formData - Les données du formulaire
 * @returns {Promise} Réponse de l'API
 */
export const envoyerMessageContact = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/contact/send-message`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 secondes
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      throw error.response.data;
    } else if (error.request) {
      // La requête a été envoyée mais pas de réponse
      throw {
        success: false,
        message: 'Impossible de contacter le serveur. Vérifiez votre connexion internet.'
      };
    } else {
      // Autre erreur
      throw {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi.'
      };
    }
  }
};

export default envoyerMessageContact;

