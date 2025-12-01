import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageTransition.css';
import './fonts.css';

const PageTransition = ({ children, location }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    document.body.classList.add('transitioning');
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.body.classList.remove('transitioning');
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('transitioning');
    };
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="splash"
            className="page-transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            <motion.div
              className="transition-content-horizontal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <motion.div
                className="transition-logo-wrapper"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img 
                  src="/logo.png" 
                  alt="SNTP Logo" 
                  className="transition-logo-img"
                />
              </motion.div>
              
              <motion.div
                className="transition-text-wrapper"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h1 className="transition-company-name-fr">
                  <span>S</span>ociété <span>N</span>ationale des <span>T</span>ravaux <span>P</span>ublics
                </h1>
                <h2 className="transition-company-name-ar">
                  الشركة الوطنية للأشغال العمومية
                </h2>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="transition-loader-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;

