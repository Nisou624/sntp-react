// src/utils/testAuthService.js
import authService from '../services/authService';

console.log('🔍 Test authService:');
console.log('authService:', authService);
console.log('getToken:', typeof authService.getToken);
console.log('login:', typeof authService.login);
console.log('logout:', typeof authService.logout);
console.log('getCurrentUser:', typeof authService.getCurrentUser);
console.log('isAuthenticated:', typeof authService.isAuthenticated);

// Test
try {
  const token = authService.getToken();
  console.log('✅ getToken() fonctionne, token:', token ? 'présent' : 'absent');
} catch (error) {
  console.error('❌ Erreur getToken():', error);
}

