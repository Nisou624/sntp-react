// Configuration du préfixe admin sécurisé
const ADMIN_SECRET_PREFIX = process.env.REACT_APP_ADMIN_SECRET_PREFIX || 'secure-admin-2024';

// Normaliser le préfixe (retirer les slashes au début et à la fin)
const normalizePrefix = (prefix) => {
  return prefix.replace(/^\/+|\/+$/g, '');
};

const NORMALIZED_PREFIX = normalizePrefix(ADMIN_SECRET_PREFIX);

// Générer les chemins admin
export const adminPaths = {
  // Préfixe de base
  prefix: `/${NORMALIZED_PREFIX}`,
  
  // Routes complètes
  login: `/${NORMALIZED_PREFIX}/admin/login`,
  dashboard: `/${NORMALIZED_PREFIX}/admin/dashboard`,
  dashArticles: `/${NORMALIZED_PREFIX}/admin/dashboard/articles`,
  articles: `/${NORMALIZED_PREFIX}/admin/articles`,
  articlesNew: `/${NORMALIZED_PREFIX}/admin/articles/nouveau`,
  articlesEdit: (id) => `/${NORMALIZED_PREFIX}/admin/articles/modifier/${id}`,
  mentions: `/${NORMALIZED_PREFIX}/admin/mentions-medias`,
  dashMentions: `/${NORMALIZED_PREFIX}/admin/dashboard/mentions-medias`,
  mentionsNew: `/${NORMALIZED_PREFIX}/admin/mentions-medias/nouveau`,
  mentionsEdit: (id) => `/${NORMALIZED_PREFIX}/admin/dashboard/mentions-medias/modifier/${id}`,
  
  // Utilitaires
  isAdminPath: (pathname) => {
    return pathname.startsWith(`/${NORMALIZED_PREFIX}/admin`);
  },
  isLoginPath: (pathname) => {
    return pathname === `/${NORMALIZED_PREFIX}/admin/login`;
  }
};

// Export du préfixe brut pour usage dans les patterns de routes
export const ADMIN_PREFIX = NORMALIZED_PREFIX;

export default adminPaths;

