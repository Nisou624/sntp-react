import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Shield,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle,
  Building,
  Lightbulb,
  Upload,
  X,
  Send,
  FileText,
  AlertCircle
} from 'lucide-react';
import './NousRejoindre.css';
import { envoyerCandidatureSpontanee } from '../services/candidatureService';

const NousRejoindre = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    wilaya: '',
    metier: '',
    motivation: '',
    cv: null
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Données pour les profils de postes
  const jobProfiles = [
    {
      icon: <Building size={40} />,
      title: 'Ingénieurs',
      description: 'Ingénieurs génie civil, électrique, mécanique et autres spécialités pour nos grands projets.',
      skills: ['Génie Civil', 'Électrique', 'Mécanique', 'BTP']
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Cadres',
      description: 'Professionnels qualifiés pour encadrer nos équipes et piloter nos opérations.',
      skills: ['Management', 'Gestion', 'Coordination', 'Leadership']
    },
    {
      icon: <Target size={40} />,
      title: 'Techniciens',
      description: 'Techniciens spécialisés en topographie, laboratoire, et travaux sur chantier.',
      skills: ['Topographie', 'Laboratoire', 'Chantier', 'Métrologie']
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Personnel Administratif',
      description: 'Gestionnaires, comptables et assistants pour le bon fonctionnement administratif.',
      skills: ['Comptabilité', 'RH', 'Secrétariat', 'Gestion']
    }
  ];

  // Raisons de nous rejoindre
  const whyJoinReasons = [
    {
      icon: <Award size={40} />,
      title: 'Excellence Reconnue',
      description: 'Rejoignez une entreprise leader avec plus de 60 ans d\'expérience dans le BTP.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Évolution de Carrière',
      description: 'Bénéficiez d\'opportunités de formation continue et de développement professionnel.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Environnement Valorisant',
      description: 'Travaillez dans un cadre qui valorise le talent, l\'innovation et le travail d\'équipe.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Stabilité et Sécurité',
      description: 'Profitez d\'un emploi stable avec des avantages sociaux compétitifs.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Projets d\'Envergure',
      description: 'Participez à des projets nationaux stratégiques qui marquent l\'histoire.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Impact National',
      description: 'Contribuez au développement des infrastructures de votre pays.'
    }
  ];

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, cv: 'Le fichier ne doit pas dépasser 5 Mo' }));
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setFormErrors(prev => ({ ...prev, cv: 'Format de fichier non valide. Utilisez PDF ou Word.' }));
        return;
      }
      setFormData(prev => ({ ...prev, cv: file }));
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, cv: 'Le fichier ne doit pas dépasser 5 Mo' }));
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setFormErrors(prev => ({ ...prev, cv: 'Format de fichier non valide. Utilisez PDF ou Word.' }));
        return;
      }
      setFormData(prev => ({ ...prev, cv: file }));
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, cv: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.civilite) errors.civilite = 'Veuillez sélectionner votre civilité';
    if (!formData.nom.trim()) errors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) errors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email invalide';
    }
    if (!formData.telephone.trim()) errors.telephone = 'Le téléphone est requis';
    if (!formData.wilaya) errors.wilaya = 'Veuillez sélectionner votre wilaya';
    if (!formData.metier.trim()) errors.metier = 'Le métier est requis';
    if (!formData.motivation.trim()) {
      errors.motivation = 'La lettre de motivation est requise';
    } else if (formData.motivation.trim().length < 50) {
      errors.motivation = 'La lettre de motivation doit contenir au moins 50 caractères';
    }
    if (!formData.cv) errors.cv = 'Le CV est requis';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez corriger les erreurs dans le formulaire.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await envoyerCandidatureSpontanee(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Votre candidature a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.'
      });
      
      // Reset form
      setFormData({
        civilite: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        wilaya: '',
        metier: '',
        motivation: '',
        cv: null
      });
      
      setTimeout(() => {
        setIsFormOpen(false);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi de votre candidature. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Octets';
    const k = 1024;
    const sizes = ['Octets', 'Ko', 'Mo', 'Go'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const scrollToForm = () => {
    setIsFormOpen(true);
    setTimeout(() => {
      document.getElementById('spontaneous-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="NousRejoindre-page">
      {/* Hero Section */}
      <section className="NousRejoindre-hero-section">
        <div className="NousRejoindre-hero-overlay"></div>
        <div className="NousRejoindre-hero-content">
          <motion.h1 
            className="NousRejoindre-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rejoignez l'Excellence
          </motion.h1>
          <motion.p 
            className="NousRejoindre-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez nos opportunités de carrière et rejoignez une entreprise qui valorise le talent, l'innovation et l'excellence.
          </motion.p>
          <motion.a
            href="#job-offers"
            className="NousRejoindre-hero-cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CONSULTER NOS OFFRES D'EMPLOI
            <ArrowRight className="arrow-icon" size={20} />
          </motion.a>
        </div>
      </section>

      {/* Section Travaillez chez SNTP */}
      <section className="NousRejoindre-section NousRejoindre-work-section">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Travaillez chez SNTP</h2>
          <div className="NousRejoindre-section-divider"></div>

          <div className="NousRejoindre-work-content">
            <div className="NousRejoindre-work-text">
              <p className="NousRejoindre-work-intro">
                La <strong>Société Nationale de Travaux Publics (SNTP)</strong> est un acteur majeur 
                du secteur du BTP en Algérie depuis plus de six décennies. Notre mission est de 
                concevoir et réaliser des infrastructures qui répondent aux besoins de développement 
                du pays.
              </p>

              <div className="NousRejoindre-work-highlights">
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Entreprise publique de référence dans le BTP</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Plus de 60 ans d'expertise et de savoir-faire</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Projets d'envergure nationale et internationale</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Culture d'excellence et d'innovation</span>
                </div>
              </div>

              <p className="NousRejoindre-work-description">
                Rejoindre SNTP, c'est intégrer une entreprise où vos compétences seront valorisées, où vous pourrez 
                évoluer professionnellement et participer à des projets qui marquent l'histoire du développement national. 
                Nous recherchons des talents passionnés, rigoureux et motivés pour renforcer nos équipes.
              </p>
            </div>

            <div className="NousRejoindre-work-stats">
              <motion.div 
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="NousRejoindre-stat-number">60+</div>
                <div className="NousRejoindre-stat-label">Années d'Expérience</div>
              </motion.div>

              <motion.div 
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="NousRejoindre-stat-number">5000+</div>
                <div className="NousRejoindre-stat-label">Employés Qualifiés</div>
              </motion.div>

              <motion.div 
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="NousRejoindre-stat-number">200+</div>
                <div className="NousRejoindre-stat-label">Projets Annuels</div>
              </motion.div>

              <motion.div 
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="NousRejoindre-stat-number">15</div>
                <div className="NousRejoindre-stat-label">Filiales Spécialisées</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Profils de Postes */}
      <section className="NousRejoindre-section NousRejoindre-profiles-section">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Nos Profils de Postes</h2>
          <div className="NousRejoindre-section-divider"></div>
          <p className="NousRejoindre-section-subtitle">
            Nous recrutons des professionnels qualifiés dans divers domaines pour accompagner notre croissance 
            et réaliser nos ambitions.
          </p>

          <div className="NousRejoindre-profiles-grid">
            {jobProfiles.map((profile, index) => (
              <motion.div
                key={index}
                className="NousRejoindre-profile-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="NousRejoindre-profile-icon">
                  {profile.icon}
                </div>
                <h3 className="NousRejoindre-profile-title">{profile.title}</h3>
                <p className="NousRejoindre-profile-description">{profile.description}</p>
                <div className="NousRejoindre-profile-skills">
                  {profile.skills.map((skill, idx) => (
                    <span key={idx} className="NousRejoindre-skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous rejoindre */}
      <section className="NousRejoindre-section NousRejoindre-why-section">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Pourquoi Nous Rejoindre ?</h2>
          <div className="NousRejoindre-section-divider"></div>

          <div className="NousRejoindre-why-grid">
            {whyJoinReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="NousRejoindre-why-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="NousRejoindre-why-icon">
                  {reason.icon}
                </div>
                <h3 className="NousRejoindre-why-title">{reason.title}</h3>
                <p className="NousRejoindre-why-description">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Candidature Spontanée */}
      <section className="NousRejoindre-section NousRejoindre-spontaneous-section" id="spontaneous-form">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Candidature Spontanée</h2>
          <div className="NousRejoindre-section-divider"></div>
          <p className="NousRejoindre-section-subtitle">
            Vous ne trouvez pas d'offre correspondant à votre profil ? Envoyez-nous votre candidature spontanée !
          </p>

          <div className="NousRejoindre-toggle-container">
            <button
              className="NousRejoindre-toggle-btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              {isFormOpen ? <X size={24} /> : <Send size={24} />}
              {isFormOpen ? 'Fermer le Formulaire' : 'Postuler Maintenant'}
            </button>
          </div>

          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                className="NousRejoindre-form-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <form className="NousRejoindre-form" onSubmit={handleSubmit}>
                  {/* Alerts */}
                  {submitStatus && (
                    <div className={`NousRejoindre-alert NousRejoindre-alert-${submitStatus.type}`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle size={24} />
                      ) : (
                        <AlertCircle size={24} />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  {/* Civilité */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Civilité <span className="NousRejoindre-required">*</span>
                      </label>
                      <div className="NousRejoindre-radio-group">
                        <label className="NousRejoindre-radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="M"
                            checked={formData.civilite === 'M'}
                            onChange={handleInputChange}
                          />
                          Monsieur
                        </label>
                        <label className="NousRejoindre-radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="Mme"
                            checked={formData.civilite === 'Mme'}
                            onChange={handleInputChange}
                          />
                          Madame
                        </label>
                      </div>
                      {formErrors.civilite && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.civilite}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Nom et Prénom */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Nom <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={formErrors.nom ? 'error' : ''}
                        placeholder="Votre nom"
                      />
                      {formErrors.nom && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.nom}
                        </div>
                      )}
                    </div>

                    <div className="NousRejoindre-form-group">
                      <label>
                        Prénom <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className={formErrors.prenom ? 'error' : ''}
                        placeholder="Votre prénom"
                      />
                      {formErrors.prenom && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.prenom}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Email <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                        placeholder="votre.email@example.com"
                      />
                      {formErrors.email && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.email}
                        </div>
                      )}
                    </div>

                    <div className="NousRejoindre-form-group">
                      <label>
                        Téléphone <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className={formErrors.telephone ? 'error' : ''}
                        placeholder="0555 12 34 56"
                      />
                      {formErrors.telephone && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.telephone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Wilaya et Métier */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Wilaya <span className="NousRejoindre-required">*</span>
                      </label>
                      <select
                        name="wilaya"
                        value={formData.wilaya}
                        onChange={handleInputChange}
                        className={formErrors.wilaya ? 'error' : ''}
                      >
                        <option value="">Sélectionnez votre wilaya</option>
                        <option value="Alger">Alger</option>
                        <option value="Oran">Oran</option>
                        <option value="Constantine">Constantine</option>
                        <option value="Blida">Blida</option>
                        <option value="Annaba">Annaba</option>
                        {/* Ajoutez toutes les wilayas */}
                      </select>
                      {formErrors.wilaya && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.wilaya}
                        </div>
                      )}
                    </div>

                    <div className="NousRejoindre-form-group">
                      <label>
                        Métier / Poste recherché <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="metier"
                        value={formData.metier}
                        onChange={handleInputChange}
                        className={formErrors.metier ? 'error' : ''}
                        placeholder="Ex: Ingénieur Génie Civil"
                      />
                      {formErrors.metier && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.metier}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Lettre de motivation */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Lettre de Motivation <span className="NousRejoindre-required">*</span>
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className={formErrors.motivation ? 'error' : ''}
                        placeholder="Parlez-nous de vos motivations et compétences..."
                        rows="6"
                        maxLength="1000"
                      ></textarea>
                      <div className="NousRejoindre-character-count">
                        {formData.motivation.length} / 1000 caractères
                      </div>
                      {formErrors.motivation && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          {formErrors.motivation}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload CV */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Curriculum Vitae (CV) <span className="NousRejoindre-required">*</span>
                      </label>
                      <div className="NousRejoindre-file-upload-container">
                        {!formData.cv ? (
                          <label
                            className={`NousRejoindre-file-upload-label ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              style={{ display: 'none' }}
                            />
                            <Upload size={48} />
                            <div className="NousRejoindre-file-upload-text">
                              <strong>Cliquez pour télécharger</strong> ou glissez-déposez
                            </div>
                            <div className="NousRejoindre-file-upload-hint">
                              PDF, DOC ou DOCX (max. 5 Mo)
                            </div>
                          </label>
                        ) : (
                          <div className="NousRejoindre-file-selected">
                            <FileText size={40} />
                            <div className="NousRejoindre-file-info">
                              <div className="NousRejoindre-file-name">{formData.cv.name}</div>
                              <div className="NousRejoindre-file-size">
                                {formatFileSize(formData.cv.size)}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="NousRejoindre-file-remove-btn"
                              onClick={removeFile}
                            >
                              <X size={20} />
                            </button>
                          </div>
                        )}
                        {formErrors.cv && (
                          <div className="NousRejoindre-error-message">
                            <AlertCircle size={16} />
                            {formErrors.cv}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="NousRejoindre-form-actions">
                    <button
                      type="submit"
                      className="NousRejoindre-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="NousRejoindre-spinner"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Envoyer ma Candidature
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section Offres d'emploi */}
      <section className="NousRejoindre-section NousRejoindre-offers-section" id="job-offers">
        <div className="NousRejoindre-container">
          <div className="NousRejoindre-offers-content">
            <Briefcase className="NousRejoindre-offers-icon" size={60} />
            <h2 className="NousRejoindre-offers-title">Nos Offres d'Emploi</h2>
            <p className="NousRejoindre-offers-description">
              Découvrez nos opportunités actuelles et postulez aux postes qui correspondent à votre profil 
              et à vos aspirations professionnelles.
            </p>
            <a href="/offres-emploi" className="NousRejoindre-offers-button">
              CONSULTER NOS OFFRES D'EMPLOI
              <ArrowRight className="arrow-icon" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousRejoindre;

