import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import mfaService from '../../services/mfaService';
import adminPaths from '../../config/adminConfig';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState('login'); // 'login' ou 'mfa'
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [mfaData, setMfaData] = useState({
    sessionId: '',
    currentStep: 1,
    totalSteps: 1,
    numbersToSelect: [],
    timeRemaining: 120,
    selectedNumber: null
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate(adminPaths.dashboard);
    }
  }, [navigate]);

  useEffect(() => {
    let timer;
    if (stage === 'mfa' && mfaData.timeRemaining > 0) {
      timer = setInterval(() => {
        setMfaData(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        }));
      }, 1000);
    }

    if (mfaData.timeRemaining === 0 && stage === 'mfa') {
      setError('⏱️ Délai expiré. Veuillez vous reconnecter.');
      setTimeout(() => {
        handleCancelMFA();
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [stage, mfaData.timeRemaining]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const result = await mfaService.initiateMFA(formData.email, formData.password);

      if (result.success) {
        setMfaData({
          sessionId: result.sessionId,
          currentStep: result.step,
          totalSteps: result.totalSteps,
          numbersToSelect: result.numbersToSelect,
          timeRemaining: result.expiresIn,
          selectedNumber: null
        });
        setStage('mfa');
        setMessage('📧 Email envoyé ! Consultez votre boîte mail pour voir le code correct.');
      } else {
        setError(result.message || 'Identifiants incorrects');
      }
    } catch (err) {
      setError(err.message || 'Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  const handleNumberClick = async (number) => {
    if (loading) return;

    setLoading(true);
    setError('');
    setMessage('');
    setMfaData(prev => ({ ...prev, selectedNumber: number }));

    try {
      const result = await mfaService.verifyStep(mfaData.sessionId, number);

      if (result.success) {
        if (result.completed) {
          sessionStorage.setItem('adminToken', result.token);
          setMessage('🎉 Authentification réussie ! Redirection...');
          setTimeout(() => {
            navigate(adminPaths.dashboard);
          }, 1000);
        } else {
          setMfaData({
            sessionId: mfaData.sessionId,
            currentStep: result.step,
            totalSteps: result.totalSteps || mfaData.totalSteps,
            numbersToSelect: result.numbersToSelect,
            timeRemaining: result.expiresIn,
            selectedNumber: null
          });
          setMessage(`✅ Étape ${result.step - 1}/5 validée ! Consultez votre email pour le code de l'étape ${result.step}.`);
        }
      } else {
        setError(result.message || 'Nombre incorrect');
        setMfaData(prev => ({ ...prev, selectedNumber: null }));
        if (result.locked) {
          setTimeout(() => {
            handleCancelMFA();
          }, 3000);
        }
      }
    } catch (err) {
      setError(err.message || 'Erreur lors de la vérification');
      setMfaData(prev => ({ ...prev, selectedNumber: null }));
    } finally {
      setLoading(false);
    }
  };

  const handleCancelMFA = async () => {
    if (mfaData.sessionId) {
      try {
        await mfaService.cancelMFA(mfaData.sessionId);
      } catch (err) {
        console.error('Erreur annulation MFA:', err);
      }
    }

    setStage('login');
    setMfaData({
      sessionId: '',
      currentStep: 1,
      totalSteps: 1,
      numbersToSelect: [],
      timeRemaining: 120,
      selectedNumber: null
    });
    setError('');
    setMessage('');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="Login-container">
      <div className="Login-card">
        {stage === 'login' ? (
          <>
            <div className="Login-header">
              <h1>SNTP - Gestion des Appels d'Offres</h1>
              <p>Connectez-vous pour accéder à l'administration</p>
            </div>

            <form className="Login-form" onSubmit={handleSubmit}>
              {error && <div className="Login-alert Login-alert-error">{error}</div>}
              {message && <div className="Login-alert Login-alert-success">{message}</div>}

              <div className="Login-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="admin@sntp.dz"
                />
              </div>

              <div className="Login-form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="Login-btn Login-btn-primary"
                disabled={loading}
              >
                {loading ? 'Connexion en cours...' : 'Se connecter'}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="Login-mfa-header">
              <h1>Authentification Multi-Facteurs</h1>
              <p>Étape {mfaData.currentStep} sur {mfaData.totalSteps}</p>
              <div className={`Login-mfa-timer ${mfaData.timeRemaining <= 30 ? 'Login-timer-warning' : ''}`}>
                ⏱️ {formatTime(mfaData.timeRemaining)}
              </div>
            </div>

            <div className="Login-mfa-content">
              {error && <div className="Login-alert Login-alert-error">{error}</div>}
              {message && <div className="Login-alert Login-alert-success">{message}</div>}

              <div className="Login-mfa-instructions">
                <div className="Login-instruction-header">
                  📧 Consultez votre email envoyé à :
                </div>
                <div className="Login-email-display">{formData.email}</div>
                <div className="Login-instruction-text">
                  Vous y trouverez un <strong>code à 2 chiffres</strong>.
                  <br />
                  Cliquez sur ce code parmi les 3 nombres ci-dessous.
                </div>
              </div>

              <div className="Login-numbers-grid">
                {mfaData.numbersToSelect.map((number, index) => (
                  <button
                    key={index}
                    className={`Login-number-button ${
                      mfaData.selectedNumber === number ? 'Login-selected' : ''
                    }`}
                    onClick={() => handleNumberClick(number)}
                    disabled={loading}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <div className="Login-mfa-progress">
                <div className="Login-progress-bar">
                  <div
                    className="Login-progress-fill"
                    style={{
                      width: `${(mfaData.currentStep / mfaData.totalSteps) * 100}%`
                    }}
                  ></div>
                </div>
                <p className="Login-progress-text">
                  Progression : {mfaData.currentStep}/{mfaData.totalSteps} étapes
                </p>
              </div>

              <button
                className="Login-btn Login-btn-secondary"
                onClick={handleCancelMFA}
                disabled={loading}
              >
                Annuler et retourner à la connexion
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

