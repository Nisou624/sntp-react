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
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    metier: '',
    fonctionSouhaitee: '',
    experience: '',
    niveauEtudes: '',
    salaireSouhaite: '',
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
      title: 'Ingénieurs & Cadres',
      description: 'Ingénieurs civils, architectes, chefs de projets pour concevoir et superviser nos réalisations.',
      skills: ['Génie Civil', 'Architecture', 'Management']
    },
    {
      icon: <Users size={40} />,
      title: 'Techniciens Spécialisés',
      description: 'Techniciens qualifiés en topographie, laboratoire, conduite de travaux et méthodes.',
      skills: ['Topographie', 'Laboratoire', 'Conduite']
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Personnel Administratif',
      description: 'Gestionnaires, comptables, ressources humaines pour assurer le bon fonctionnement administratif.',
      skills: ['Gestion', 'Comptabilité', 'RH']
    },
    {
      icon: <Target size={40} />,
      title: 'Ouvriers Qualifiés',
      description: 'Maçons, ferrilleurs, conducteurs d\'engins et ouvriers spécialisés pour l\'exécution des travaux.',
      skills: ['Maçonnerie', 'Ferraillage', 'Conduite']
    }
  ];

  // Raisons de rejoindre SNTP
  const whyJoinReasons = [
    {
      icon: <Award size={40} />,
      title: 'Excellence & Qualité',
      description: 'Travaillez sur des projets d\'envergure nationale avec les plus hauts standards de qualité.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Évolution de Carrière',
      description: 'Bénéficiez d\'opportunités de développement professionnel et de promotion interne.'
    },
    {
      icon: <GraduationCap size={40} />,
      title: 'Formation Continue',
      description: 'Accédez à des programmes de formation réguliers pour développer vos compétences.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Avantages Sociaux',
      description: 'Profitez d\'une couverture sociale complète et d\'avantages compétitifs.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Stabilité & Sécurité',
      description: 'Rejoignez une entreprise publique solide avec plus de 60 ans d\'expérience.'
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation',
      description: 'Participez à des projets innovants utilisant les dernières technologies du BTP.'
    }
  ];

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ lors de la modification
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({
          ...prev,
          cv: 'Le fichier ne doit pas dépasser 5 MB'
        }));
        return;
      }
      // Vérifier le type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors(prev => ({
          ...prev,
          cv: 'Seuls les fichiers PDF et DOC/DOCX sont acceptés'
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      setFormErrors(prev => ({
        ...prev,
        cv: ''
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const event = {
        target: {
          files: [file]
        }
      };
      handleFileChange(event);
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      cv: null
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.civilite) errors.civilite = 'Veuillez sélectionner une civilité';
    if (!formData.nom.trim()) errors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) errors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email invalide';
    }
    if (!formData.telephone.trim()) errors.telephone = 'Le téléphone est requis';
    if (!formData.adresse.trim()) errors.adresse = 'L\'adresse est requise';
    if (!formData.metier.trim()) errors.metier = 'Le métier est requis';
    if (!formData.fonctionSouhaitee.trim()) errors.fonctionSouhaitee = 'La fonction souhaitée est requise';
    if (!formData.experience) errors.experience = 'L\'expérience est requise';
    if (!formData.niveauEtudes) errors.niveauEtudes = 'Le niveau d\'études est requis';
    if (!formData.motivation.trim()) errors.motivation = 'La lettre de motivation est requise';
    if (formData.motivation.trim().length < 50) {
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
        message: 'Veuillez corriger les erreurs dans le formulaire'
      });
      return;
    }

    if (!acceptedPolicy) {
      setSubmitStatus({
        type: 'error',
        message: 'Vous devez accepter la politique de confidentialité pour continuer'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      await envoyerCandidatureSpontanee(formDataToSend);

      setSubmitStatus({
        type: 'success',
        message: 'Votre candidature a été envoyée avec succès ! Nous vous contacterons bientôt.'
      });

      // Réinitialiser le formulaire
      setFormData({
        civilite: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        metier: '',
        fonctionSouhaitee: '',
        experience: '',
        niveauEtudes: '',
        salaireSouhaite: '',
        motivation: '',
        cv: null
      });
      setAcceptedPolicy(false);
      setFormErrors({});

      // Fermer le formulaire après 3 secondes
      setTimeout(() => {
        setIsFormOpen(false);
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('candidature-spontanee');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      setIsFormOpen(true);
    }
  };

  return (
    <div className="NousRejoindre-page">
      {/* HERO SECTION */}
      <section className="NousRejoindre-hero-section">
        <div className="NousRejoindre-hero-overlay" />
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez nos opportunités de carrière et rejoignez une entreprise qui valorise le talent, l'innovation et l'excellence.
          </motion.p>
          <motion.a
            href="#offres-emploi"
            className="NousRejoindre-hero-cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>CONSULTER NOS OFFRES D'EMPLOI</span>
            <ArrowRight className="NousRejoindre-arrow-icon" size={24} />
          </motion.a>
        </div>
      </section>

      {/* SECTION TRAVAILLEZ CHEZ SNTP */}
      <section className="NousRejoindre-work-at-sntp-section" id="work-at-sntp">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Travaillez chez SNTP</h2>
          <div className="NousRejoindre-section-divider" />
          <p className="NousRejoindre-section-subtitle">
            Une entreprise d'excellence avec plus de 60 ans d'expertise
          </p>

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
                  <CheckCircle className="NousRejoindre-check-icon" />
                  <span>Entreprise publique de référence dans le BTP</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="NousRejoindre-check-icon" />
                  <span>Plus de 60 ans d'expérience et d'excellence</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="NousRejoindre-check-icon" />
                  <span>Projets d'envergure nationale et internationale</span>
                </div>
                <div className="NousRejoindre-highlight-item">
                  <CheckCircle className="NousRejoindre-check-icon" />
                  <span>Environnement de travail stimulant et professionnel</span>
                </div>
              </div>

              <p className="NousRejoindre-work-description">
                Rejoindre SNTP, c'est intégrer une entreprise où vos compétences seront valorisées, où vous pourrez évoluer professionnellement et participer à des projets qui marquent l'histoire du développement national. Nous recherchons des talents passionnés, rigoureux et motivés pour renforcer nos équipes.
              </p>
            </div>

            <div className="NousRejoindre-work-stats">
              <motion.div
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="NousRejoindre-stat-number">60+</div>
                <div className="NousRejoindre-stat-label">Années d'Expérience</div>
              </motion.div>
              <motion.div
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="NousRejoindre-stat-number">2000+</div>
                <div className="NousRejoindre-stat-label">Employés Qualifiés</div>
              </motion.div>
              <motion.div
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="NousRejoindre-stat-number">500+</div>
                <div className="NousRejoindre-stat-label">Projets Réalisés</div>
              </motion.div>
              <motion.div
                className="NousRejoindre-stat-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="NousRejoindre-stat-number">48</div>
                <div className="NousRejoindre-stat-label">Wilayas Couvertes</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NOS PROFILS DE POSTES */}
      <section className="NousRejoindre-job-profiles-section" id="job-profiles">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Nos Profils de Postes</h2>
          <div className="NousRejoindre-section-divider" />
          <p className="NousRejoindre-section-subtitle">
            Nous recrutons des professionnels qualifiés dans divers domaines pour accompagner notre croissance et réaliser nos ambitions.
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

      {/* SECTION POURQUOI NOUS REJOINDRE */}
      <section className="NousRejoindre-why-join-section">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Pourquoi Nous Rejoindre ?</h2>
          <div className="NousRejoindre-section-divider" />
          <p className="NousRejoindre-section-subtitle">
            Découvrez les avantages de travailler chez SNTP
          </p>

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

      {/* SECTION CANDIDATURE SPONTANÉE */}
      <section id="candidature-spontanee" className="NousRejoindre-spontaneous-application-section">
        <div className="NousRejoindre-container">
          <h2 className="NousRejoindre-section-title">Candidature Spontanée</h2>
          <div className="NousRejoindre-section-divider" />
          <p className="NousRejoindre-section-subtitle">
            Vous ne trouvez pas d'offre correspondant à votre profil ? Envoyez-nous votre candidature spontanée !
          </p>

          <div className="NousRejoindre-spontaneous-toggle-container">
            <button
              className="NousRejoindre-spontaneous-toggle-btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              {isFormOpen ? (
                <>
                  <X size={24} />
                  <span>Fermer le Formulaire</span>
                </>
              ) : (
                <>
                  <Send size={24} />
                  <span>Envoyer Ma Candidature</span>
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                className="NousRejoindre-spontaneous-form-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <form className="NousRejoindre-spontaneous-form" onSubmit={handleSubmit}>
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

                  {/* Civilité, Nom, Prénom */}
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
                          <span>M.</span>
                        </label>
                        <label className="NousRejoindre-radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="Mme"
                            checked={formData.civilite === 'Mme'}
                            onChange={handleInputChange}
                          />
                          <span>Mme</span>
                        </label>
                        <label className="NousRejoindre-radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="Mlle"
                            checked={formData.civilite === 'Mlle'}
                            onChange={handleInputChange}
                          />
                          <span>Mlle</span>
                        </label>
                      </div>
                      {formErrors.civilite && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.civilite}</span>
                        </div>
                      )}
                    </div>
                  </div>

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
                        className={formErrors.nom ? 'NousRejoindre-error' : ''}
                        placeholder="Votre nom"
                      />
                      {formErrors.nom && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.nom}</span>
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
                        className={formErrors.prenom ? 'NousRejoindre-error' : ''}
                        placeholder="Votre prénom"
                      />
                      {formErrors.prenom && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.prenom}</span>
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
                        className={formErrors.email ? 'NousRejoindre-error' : ''}
                        placeholder="votre.email@example.com"
                      />
                      {formErrors.email && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.email}</span>
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
                        className={formErrors.telephone ? 'NousRejoindre-error' : ''}
                        placeholder="0X XX XX XX XX"
                      />
                      {formErrors.telephone && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.telephone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Adresse <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className={formErrors.adresse ? 'NousRejoindre-error' : ''}
                        placeholder="Votre adresse complète"
                      />
                      {formErrors.adresse && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.adresse}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Métier et Fonction Souhaitée */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Métier Actuel <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="metier"
                        value={formData.metier}
                        onChange={handleInputChange}
                        className={formErrors.metier ? 'NousRejoindre-error' : ''}
                        placeholder="Ex: Ingénieur Civil"
                      />
                      {formErrors.metier && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.metier}</span>
                        </div>
                      )}
                    </div>

                    <div className="NousRejoindre-form-group">
                      <label>
                        Fonction Souhaitée <span className="NousRejoindre-required">*</span>
                      </label>
                      <input
                        type="text"
                        name="fonctionSouhaitee"
                        value={formData.fonctionSouhaitee}
                        onChange={handleInputChange}
                        className={formErrors.fonctionSouhaitee ? 'NousRejoindre-error' : ''}
                        placeholder="Ex: Chef de Projet"
                      />
                      {formErrors.fonctionSouhaitee && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.fonctionSouhaitee}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expérience et Niveau d'études */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        Années d'Expérience <span className="NousRejoindre-required">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className={formErrors.experience ? 'NousRejoindre-error' : ''}
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="0-2">0 à 2 ans</option>
                        <option value="3-5">3 à 5 ans</option>
                        <option value="6-10">6 à 10 ans</option>
                        <option value="10+">Plus de 10 ans</option>
                      </select>
                      {formErrors.experience && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.experience}</span>
                        </div>
                      )}
                    </div>

                    <div className="NousRejoindre-form-group">
                      <label>
                        Niveau d'Études <span className="NousRejoindre-required">*</span>
                      </label>
                      <select
                        name="niveauEtudes"
                        value={formData.niveauEtudes}
                        onChange={handleInputChange}
                        className={formErrors.niveauEtudes ? 'NousRejoindre-error' : ''}
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="Bac">Baccalauréat</option>
                        <option value="Licence">Licence</option>
                        <option value="Master">Master</option>
                        <option value="Doctorat">Doctorat</option>
                        <option value="TS">Technicien Supérieur</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {formErrors.niveauEtudes && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.niveauEtudes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Salaire souhaité */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>Salaire Souhaité (DA/mois)</label>
                      <input
                        type="text"
                        name="salaireSouhaite"
                        value={formData.salaireSouhaite}
                        onChange={handleInputChange}
                        placeholder="Ex: 80000 DA"
                      />
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
                        className={formErrors.motivation ? 'NousRejoindre-error' : ''}
                        rows="6"
                        placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre SNTP..."
                        maxLength="1000"
                      />
                      <div className="NousRejoindre-character-count">
                        {formData.motivation.length} / 1000 caractères
                      </div>
                      {formErrors.motivation && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.motivation}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload CV */}
                  <div className="NousRejoindre-form-row">
                    <div className="NousRejoindre-form-group">
                      <label>
                        CV (PDF, DOC, DOCX - Max 5 MB) <span className="NousRejoindre-required">*</span>
                      </label>
                      <div className="NousRejoindre-file-upload-container">
                        {!formData.cv ? (
                          <label
                            htmlFor="cv-upload"
                            className={`NousRejoindre-file-upload-label ${isDragging ? 'NousRejoindre-dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <Upload size={48} />
                            <div className="NousRejoindre-file-upload-text">
                              <strong>Cliquez pour parcourir</strong> ou glissez-déposez votre CV
                            </div>
                            <div className="NousRejoindre-file-upload-hint">
                              PDF, DOC, DOCX (Max 5 MB)
                            </div>
                            <input
                              id="cv-upload"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              style={{ display: 'none' }}
                            />
                          </label>
                        ) : (
                          <div className="NousRejoindre-file-selected">
                            <FileText size={32} />
                            <div className="NousRejoindre-file-info">
                              <div className="NousRejoindre-file-name">{formData.cv.name}</div>
                              <div className="NousRejoindre-file-size">
                                {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </div>
                            <button
                              type="button"
                              className="NousRejoindre-file-remove-btn"
                              onClick={removeFile}
                              aria-label="Supprimer le fichier"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        )}
                      </div>
                      {formErrors.cv && (
                        <div className="NousRejoindre-error-message">
                          <AlertCircle size={16} />
                          <span>{formErrors.cv}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Case de confidentialité */}
                  <div className="NousRejoindre-privacy-policy-group">
                    <label className="NousRejoindre-privacy-policy-checkbox">
                      <input
                        type="checkbox"
                        className="NousRejoindre-privacy-checkbox"
                        checked={acceptedPolicy}
                        onChange={(e) => setAcceptedPolicy(e.target.checked)}
                      />
                      <span className="NousRejoindre-privacy-text">
                        J'ai lu et j'accepte la{' '}
                        <a
                          href="/politique-confidentialite"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="NousRejoindre-privacy-link"
                        >
                          politique de confidentialité
                        </a>
                        {' '}concernant l'utilisation de mes données personnelles.
                      </span>
                    </label>
                  </div>

                  {/* Bouton Submit */}
                  <div className="NousRejoindre-form-actions">
                    <button
                      type="submit"
                      className={`NousRejoindre-submit-btn ${!acceptedPolicy || isSubmitting ? 'NousRejoindre-disabled' : ''}`}
                      disabled={!acceptedPolicy || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="NousRejoindre-spinner" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Envoyer ma candidature</span>
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

      {/* SECTION OFFRES D'EMPLOI */}
      <section id="offres-emploi" className="NousRejoindre-job-offers-section" id="job-offers">
        <div className="NousRejoindre-container">
          <div className="NousRejoindre-offers-content">
            <Briefcase className="NousRejoindre-offers-icon" size={64} />
            <h2 className="NousRejoindre-offers-title">Nos Offres d'Emploi</h2>
            <p className="NousRejoindre-offers-description">
              Découvrez nos opportunités actuelles et postulez aux postes qui correspondent à votre profil et à vos aspirations professionnelles.
            </p>
            <a href="https://emploitic.com/offres-d-emploi/q-societe-nationale-de-travaux-publics-sntp" target="_blank" className="NousRejoindre-offers-button">
              <span>CONSULTER NOS OFFRES D'EMPLOI</span>
              <ArrowRight className="NousRejoindre-arrow-icon" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousRejoindre;

