import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from '../../services/authService';
import adminPaths from '../../config/adminConfig';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  // Hook useEffect AVANT tout return conditionnel
  useEffect(() => {
    // Si on quitte la zone admin, déconnecter
    if (!adminPaths.isAdminPath(location.pathname) && 
        !adminPaths.isLoginPath(location.pathname)) {
      console.log('Navigation hors du panel admin détectée. Déconnexion...');
      sessionStorage.removeItem('adminToken');
    }
  }, [location.pathname]);

  // Return conditionnel APRÈS les Hooks
  if (!isAuthenticated) {
    return <Navigate to={adminPaths.login} replace />;
  }

  return children;
};

export default ProtectedRoute;

