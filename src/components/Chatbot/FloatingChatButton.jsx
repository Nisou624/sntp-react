import React from 'react';
import './FloatingChatButton.css';
import chatbuttonImage from '../../assets/chatbutton.png';

const FloatingChatButton = ({ onClick, isOpen, unreadCount = 0 }) => {
  if (!isOpen) {
    return (
      <>
        {/* L'IMAGE EST LE BOUTON DIRECTEMENT */}
        <img 
          src={chatbuttonImage} 
          alt="Assistant Chatbot"
          className="floating-chat-image-button"
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-label="Ouvrir le chatbot"
          title="Besoin d'aide ?"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }}
          draggable="false"
        />
        
        {/* Badge de notification */}
        {unreadCount > 0 && (
          <span className="notification-badge-floating">{unreadCount}</span>
        )}
      </>
    );
  }

  // Bouton fermer quand le chat est ouvert
  return (
    <button 
      className="floating-close-button-circle"
      onClick={onClick}
      aria-label="Fermer le chatbot"
      title="Fermer"
    >
      <svg 
        className="close-icon-svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
          fill="currentColor"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default FloatingChatButton;

