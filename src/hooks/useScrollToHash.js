import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Vérifier s'il y a un hash dans l'URL
    if (location.hash) {
      // Petit délai pour s'assurer que le DOM est complètement chargé
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Si pas de hash, scroller en haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
};

export default useScrollToHash;

