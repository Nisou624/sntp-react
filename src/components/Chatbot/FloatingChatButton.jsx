import React from 'react';
import './FloatingChatButton.css';

const FloatingChatButton = ({ onClick, isOpen, unreadCount = 0 }) => {
  return (
    <button 
      className={`floating-chat-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Ouvrir le chatbot"
      title="Besoin d'aide ?"
    >
      {!isOpen ? (
        <>
          <svg 
            className="chat-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" 
              fill="currentColor"
            />
            <circle cx="8" cy="9" r="1.5" fill="white"/>
            <circle cx="12" cy="9" r="1.5" fill="white"/>
            <circle cx="16" cy="9" r="1.5" fill="white"/>
          </svg>
          {unreadCount > 0 && (
            <span className="notification-badge">{unreadCount}</span>
          )}
        </>
      ) : (
        <svg 
          className="close-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default FloatingChatButton;

