import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatbotWindow.css';
import { getInitialQuestion, processAnswer } from '../../config/chatbotConfig';

const ChatbotWindow = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialiser la conversation au démarrage
  useEffect(() => {
    if (isOpen && conversationHistory.length === 0) {
      const initialQuestion = getInitialQuestion();
      setTimeout(() => {
        addBotMessage(initialQuestion);
      }, 500);
    }
  }, [isOpen]);

  // Scroll automatique vers le dernier message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationHistory, isTyping, currentQuestion]);

  // Ajouter un message du bot
  const addBotMessage = (question) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setConversationHistory(prev => [
        ...prev,
        {
          type: 'bot',
          message: question.message,
          avatar: question.avatar,
          timestamp: new Date(),
          id: question.id
        }
      ]);
      setCurrentQuestion(question);
      setIsTyping(false);
    }, 800);
  };

  // Ajouter un message de l'utilisateur
  const addUserMessage = (text) => {
    setConversationHistory(prev => [
      ...prev,
      {
        type: 'user',
        message: text,
        timestamp: new Date()
      }
    ]);
    // Réinitialiser la question actuelle pour cacher les options temporairement
    setCurrentQuestion(null);
  };

  // Gérer le clic sur une option
  const handleOptionClick = (option) => {
    // Ajouter le choix de l'utilisateur
    addUserMessage(option.text);

    // Traiter la réponse
    const result = processAnswer(currentQuestion.id, option.id);

    if (!result) return;

    // Si un message personnalisé existe
    if (result.message) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setConversationHistory(prev => [
            ...prev,
            {
              type: 'bot',
              message: result.message,
              avatar: 'S',
              timestamp: new Date()
            }
          ]);
          setIsTyping(false);
        }, 800);
      }, 600);
    }

    // Si une route existe, naviguer vers la page
    if (result.route) {
      setTimeout(() => {
        navigate(result.route);
        onClose(); // Fermer le chatbot après navigation
      }, result.message ? 2500 : 1200);
    }
    // Sinon, afficher la prochaine question
    else if (result.nextQuestion) {
      setTimeout(() => {
        addBotMessage(result.nextQuestion);
      }, 1200);
    }
  };

  // Réinitialiser la conversation
  const handleRestart = () => {
    setConversationHistory([]);
    setCurrentQuestion(null);
    const initialQuestion = getInitialQuestion();
    setTimeout(() => {
      addBotMessage(initialQuestion);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-window">
      {/* En-tête du chatbot */}
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <div className="chatbot-avatar-large">S</div>
          <div className="chatbot-header-text">
            <h3>Assistant SNTP</h3>
            <span className="chatbot-status">
              <span className="status-dot"></span>
              En ligne
            </span>
          </div>
        </div>
        <div className="chatbot-header-actions">
          <button 
            className="chatbot-restart-btn" 
            onClick={handleRestart}
            title="Recommencer"
            aria-label="Recommencer la conversation"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            className="chatbot-close-btn" 
            onClick={onClose}
            aria-label="Fermer le chatbot"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Corps du chatbot avec les messages */}
      <div className="chatbot-body">
        <div className="chatbot-messages">
          {conversationHistory.map((msg, index) => (
            <div key={index}>
              {msg.type === 'bot' ? (
                // Message du bot - À GAUCHE avec avatar
                <div className="bot-message-container">
                  <div className="bot-message-wrapper">
                    <div className="message-avatar">{msg.avatar}</div>
                    <div className="bot-message-bubble">
                      <div className="bot-message-name">SNTP</div>
                      <div className="bot-message-content">{msg.message}</div>
                    </div>
                  </div>
                </div>
              ) : (
                // Message utilisateur - À DROITE sans avatar
                <div className="user-message-container">
                  <div className="user-message-bubble">
                    <div className="user-message-content">{msg.message}</div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Indicateur de saisie */}
          {isTyping && (
            <div className="bot-message-container">
              <div className="bot-message-wrapper">
                <div className="message-avatar">S</div>
                <div className="bot-message-bubble typing-indicator-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Options de réponse - DANS LE FLUX, alignées à droite */}
          {currentQuestion && currentQuestion.options && !isTyping && (
            <div className="chatbot-options-inline">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  className="chatbot-option-btn"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Pied de page */}
      <div className="chatbot-footer">
        <p>Propulsé par <strong>SNTP</strong></p>
      </div>
    </div>
  );
};

export default ChatbotWindow;

