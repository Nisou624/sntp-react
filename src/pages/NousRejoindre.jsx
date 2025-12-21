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
  const [isDragging, setIsDragging] = useState(false); // NOUVEAU : État pour le drag & drop
  
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
      icon: <Briefcase size={40} />,
      title: "Ingénieurs",
      description: "Ingénieurs civils, géotechniciens, topographes pour superviser et gérer nos projets d'infrastructure.",
      skills: ["Gestion de projets", "Calculs structures", "Supervision chantiers"]
    },
    {
      icon: <Building size={40} />,
      title: "Conducteurs de travaux",
      description: "Professionnels expérimentés pour coordonner l'exécution des travaux sur nos différents chantiers.",
      skills: ["Planification", "Coordination équipes", "Respect délais"]
    },
    {
      icon: <Users size={40} />,
      title: "Techniciens",
      description: "Techniciens spécialisés en BTP, électricité, plomberie pour assurer la qualité de nos réalisations.",
      skills: ["Expertise technique", "Maintenance", "Contrôle qualité"]
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Profils administratifs",
      description: "Comptables, RH, assistants de direction pour soutenir nos opérations quotidiennes.",
      skills: ["Gestion administrative", "Comptabilité", "Ressources humaines"]
    }
  ];

  // Données pour "Pourquoi nous rejoindre"
  const whyJoinUs = [
    {
      icon: <Target size={32} />,
      title: "Projets d'envergure",
      description: "Participez à la construction d'infrastructures stratégiques qui façonnent l'avenir du pays."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Évolution de carrière",
      description: "Bénéficiez d'opportunités de formation continue et de progression professionnelle rapide."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence reconnue",
      description: "Rejoignez une entreprise leader avec plus de 60 ans d'expertise dans le BTP."
    },
    {
      icon: <Heart size={32} />,
      title: "Environnement stimulant",
      description: "Travaillez dans une ambiance collaborative où l'innovation et l'initiative sont valorisées."
    },
    {
      icon: <Shield size={32} />,
      title: "Avantages sociaux",
      description: "Profitez d'une couverture sociale complète et d'avantages compétitifs."
    },
    {
      icon: <Globe size={32} />,
      title: "Impact national",
      description: "Contribuez au développement économique et social de l'Algérie à travers des projets majeurs."
    }
  ];

  // Liste des wilayas d'Algérie
  const wilayas = [
    "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
    "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
    "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
    "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
    "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued",
    "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
    "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès",
    "In Salah", "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Meniaa"
  ];

  // Liste des métiers
  const metiers = [
    "Ingénieur Civil",
    "Ingénieur Géotechnicien",
    "Ingénieur Topographe",
    "Conducteur de Travaux",
    "Chef de Chantier",
    "Technicien BTP",
    "Technicien Électricité",
    "Technicien Plomberie",
    "Technicien en Génie Civil",
    "Architecte",
    "Dessinateur Projeteur",
    "Métreur Vérificateur",
    "Comptable",
    "Responsable Ressources Humaines",
    "Assistant de Direction",
    "Gestionnaire Administratif",
    "Responsable Logistique",
    "Responsable Qualité",
    "Responsable HSE",
    "Commercial BTP",
    "Acheteur",
    "Magasinier",
    "Chauffeur Poids Lourd",
    "Mécanicien Engins",
    "Électricien Industriel",
    "Soudeur",
    "Maçon Qualifié",
    "Coffreur-Boiseur",
    "Ferrailleur",
    "Chef d'Équipe",
    "Autre"
  ];

  // Validation du formulaire
  const validateForm = () => {
    const errors = {};
    
    if (!formData.civilite) {
      errors.civilite = "Veuillez sélectionner une civilité";
    }
    
    if (!formData.nom || formData.nom.trim().length < 2) {
      errors.nom = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (!formData.prenom || formData.prenom.trim().length < 2) {
      errors.prenom = "Le prénom doit contenir au moins 2 caractères";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Veuillez entrer une adresse email valide";
    }
    
    const phoneRegex = /^(\+213|0)[5-7][0-9]{8}$/;
    const cleanPhone = formData.telephone.replace(/\s/g, '');
    if (!formData.telephone || !phoneRegex.test(cleanPhone)) {
      errors.telephone = "Veuillez entrer un numéro de téléphone algérien valide (ex: 0555123456)";
    }
    
    if (!formData.wilaya) {
      errors.wilaya = "Veuillez sélectionner une wilaya";
    }
    
    if (!formData.metier) {
      errors.metier = "Veuillez sélectionner un métier";
    }
    
    if (!formData.motivation || formData.motivation.trim().length < 50) {
      errors.motivation = "La motivation doit contenir au moins 50 caractères";
    }
    
    if (!formData.cv) {
      errors.cv = "Veuillez joindre votre CV";
    } else if (formData.cv.size > 3 * 1024 * 1024) {
      errors.cv = "La taille du fichier ne doit pas dépasser 3 Mo";
    } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.cv.type)) {
      errors.cv = "Le fichier doit être au format PDF, DOC ou DOCX";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validation du fichier
  const validateFile = (file) => {
    const maxSize = 3 * 1024 * 1024; // 3 Mo
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!file) {
      return "Aucun fichier sélectionné";
    }

    if (file.size > maxSize) {
      return "La taille du fichier ne doit pas dépasser 3 Mo";
    }

    if (!allowedTypes.includes(file.type)) {
      return "Le fichier doit être au format PDF, DOC ou DOCX";
    }

    return null;
  };

  // Gestion des changements de champs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Gestion de l'upload du fichier
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        setFormErrors(prev => ({
          ...prev,
          cv: error
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      
      if (formErrors.cv) {
        setFormErrors(prev => ({
          ...prev,
          cv: null
        }));
      }
    }
  };

  // NOUVEAU : Gestion du Drag & Drop
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const error = validateFile(file);
      
      if (error) {
        setFormErrors(prev => ({
          ...prev,
          cv: error
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      
      if (formErrors.cv) {
        setFormErrors(prev => ({
          ...prev,
          cv: null
        }));
      }
    }
  };

  // Suppression du fichier
  const handleRemoveFile = () => {
    setFormData(prev => ({
      ...prev,
      cv: null
    }));
    const fileInput = document.getElementById('cv-upload');
    if (fileInput) fileInput.value = '';
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      const response = await envoyerCandidatureSpontanee(formDataToSend);

      if (response.success) {
        setSubmitStatus('success');
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
        setFormErrors({});
        
        const fileInput = document.getElementById('cv-upload');
        if (fileInput) fileInput.value = '';
        
        document.getElementById('spontaneous-application').scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        console.error('Erreur serveur:', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      if(error.errors && Array.isArray(error.errors)){
        const newErrors = {};
        error.errors.forEach(err => {
          if (err.path) {
            newErrors[err.path] = err.msg;
          }
        });
        setFormErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Formater la taille du fichier
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Octets';
    const k = 1024;
    const sizes = ['Octets', 'Ko', 'Mo', 'Go'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="nous-rejoindre-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            PRÊT À FAIRE LA DIFFÉRENCE ?
          </h1>
          <p className="hero-subtitle">
            Découvrez nos opportunités de carrière et rejoignez une entreprise qui valorise
            le talent, l'innovation et l'excellence.
          </p>
          <a 
            href="https://emploitic.com/offres-d-emploi/q-societe-nationale-de-travaux-publics-sntp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta-button"
          >
            CONSULTER NOS OFFRES D'EMPLOI
            <ArrowRight className="arrow-icon" />
          </a>
        </motion.div>
      </section>

      {/* Section Travaillez chez SNTP */}
      <section className="work-at-sntp-section" id="work-at-sntp">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Travaillez chez SNTP</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="work-content">
            <motion.div 
              className="work-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="work-intro">
                La <strong>Société Nationale de Travaux Publics (SNTP)</strong> est un acteur majeur 
                du secteur du BTP en Algérie depuis plus de six décennies. Notre mission est de 
                concevoir et réaliser des infrastructures qui répondent aux besoins de développement 
                du pays.
              </p>
              
              <div className="work-highlights">
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Plus de 60 ans d'expertise dans le BTP</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Projets d'infrastructures stratégiques</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Équipes multidisciplinaires talentueuses</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="check-icon" />
                  <span>Innovation et technologies de pointe</span>
                </div>
              </div>

              <p className="work-description">
                Rejoindre SNTP, c'est intégrer une entreprise où vos compétences seront valorisées, 
                où vous pourrez évoluer professionnellement et participer à des projets qui marquent 
                l'histoire du développement national. Nous recherchons des talents passionnés, 
                rigoureux et motivés pour renforcer nos équipes.
              </p>
            </motion.div>

            <motion.div 
              className="work-stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stat-card">
                <div className="stat-number">60+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projets réalisés</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Collaborateurs</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Wilayas couvertes</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Nos profils de postes */}
      <section className="job-profiles-section" id="job-profiles">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Nos profils de postes</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Nous recrutons des professionnels qualifiés dans divers domaines pour accompagner 
              notre croissance et réaliser nos ambitions.
            </p>
          </motion.div>

          <div className="profiles-grid">
            {jobProfiles.map((profile, index) => (
              <motion.div
                key={index}
                className="profile-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(220, 20, 60, 0.2)" }}
              >
                <div className="profile-icon">{profile.icon}</div>
                <h3 className="profile-title">{profile.title}</h3>
                <p className="profile-description">{profile.description}</p>
                <div className="profile-skills">
                  {profile.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous rejoindre */}
      <section className="why-join-section" id="why-join">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Pourquoi nous rejoindre ?</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="why-grid">
            {whyJoinUs.map((reason, index) => (
              <motion.div
                key={index}
                className="why-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="why-icon">{reason.icon}</div>
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-description">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Candidature Spontanée */}
      <section className="spontaneous-application-section" id="candidature-spontanee">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Candidature Spontanée</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Vous ne trouvez pas d'offre correspondant à votre profil ? 
              Envoyez-nous votre candidature spontanée !
            </p>
          </motion.div>

          <motion.div
            className="spontaneous-toggle-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className="spontaneous-toggle-btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
              aria-expanded={isFormOpen}
            >
              <FileText size={24} />
              <span>{isFormOpen ? 'MASQUER LE FORMULAIRE' : 'POSTULER SPONTANÉMENT'}</span>
              <motion.div
                animate={{ rotate: isFormOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
              </motion.div>
            </button>
          </motion.div>

          <AnimatePresence>
            {isFormOpen && (
              <motion.div
                className="spontaneous-form-container"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <form className="spontaneous-form" onSubmit={handleSubmit}>
                  {/* Messages de succès/erreur */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="alert alert-success"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle size={24} />
                      <p>Votre candidature a été envoyée avec succès ! Nous vous contacterons prochainement.</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="alert alert-error"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={24} />
                      <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.</p>
                    </motion.div>
                  )}

                  <div className="form-row">
                    {/* Civilité */}
                    <div className="form-group">
                      <label htmlFor="civilite">
                        Civilité <span className="required">*</span>
                      </label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="M"
                            checked={formData.civilite === 'M'}
                            onChange={handleInputChange}
                          />
                          <span>M</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="Melle"
                            checked={formData.civilite === 'Melle'}
                            onChange={handleInputChange}
                          />
                          <span>Melle</span>
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="civilite"
                            value="Mme"
                            checked={formData.civilite === 'Mme'}
                            onChange={handleInputChange}
                          />
                          <span>Mme</span>
                        </label>
                      </div>
                      {formErrors.civilite && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.civilite}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    {/* Nom */}
                    <div className="form-group">
                      <label htmlFor="nom">
                        Nom <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={formErrors.nom ? 'error' : ''}
                        placeholder="Votre nom"
                      />
                      {formErrors.nom && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.nom}
                        </span>
                      )}
                    </div>

                    {/* Prénom */}
                    <div className="form-group">
                      <label htmlFor="prenom">
                        Prénom <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className={formErrors.prenom ? 'error' : ''}
                        placeholder="Votre prénom"
                      />
                      {formErrors.prenom && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.prenom}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                        placeholder="exemple@email.com"
                      />
                      {formErrors.email && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div className="form-group">
                      <label htmlFor="telephone">
                        Téléphone <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder="0555123456"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className={formErrors.telephone ? 'error' : ''}
                      />
                      {formErrors.telephone && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.telephone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    {/* Wilaya */}
                    <div className="form-group">
                      <label htmlFor="wilaya">
                        Wilaya <span className="required">*</span>
                      </label>
                      <select
                        id="wilaya"
                        name="wilaya"
                        value={formData.wilaya}
                        onChange={handleInputChange}
                        className={formErrors.wilaya ? 'error' : ''}
                      >
                        <option value="">--Wilaya--</option>
                        {wilayas.map((wilaya, index) => (
                          <option key={index} value={wilaya}>
                            {wilaya}
                          </option>
                        ))}
                      </select>
                      {formErrors.wilaya && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.wilaya}
                        </span>
                      )}
                    </div>

                    {/* Métier */}
                    <div className="form-group">
                      <label htmlFor="metier">
                        Métier <span className="required">*</span>
                      </label>
                      <select
                        id="metier"
                        name="metier"
                        value={formData.metier}
                        onChange={handleInputChange}
                        className={formErrors.metier ? 'error' : ''}
                      >
                        <option value="">--Metier--</option>
                        {metiers.map((metier, index) => (
                          <option key={index} value={metier}>
                            {metier}
                          </option>
                        ))}
                      </select>
                      {formErrors.metier && (
                        <span className="error-message">
                          <AlertCircle size={14} />
                          {formErrors.metier}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="form-group">
                    <label htmlFor="motivation">
                      Motivation <span className="required">*</span>
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows="6"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className={formErrors.motivation ? 'error' : ''}
                      placeholder="Présentez-vous et expliquez pourquoi vous souhaitez rejoindre SNTP... (minimum 50 caractères)"
                    ></textarea>
                    <div className="character-count">
                      {formData.motivation.length} / 50 caractères minimum
                    </div>
                    {formErrors.motivation && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {formErrors.motivation}
                      </span>
                    )}
                  </div>

                  {/* Votre CV avec Drag & Drop */}
                  <div className="form-group">
                    <label htmlFor="cv">
                      Votre CV <span className="required">*</span>
                    </label>
                    <div className="file-upload-container">
                      {!formData.cv ? (
                        <div
                          className={`file-upload-label ${isDragging ? 'dragging' : ''}`}
                          onDragEnter={handleDragEnter}
                          onDragLeave={handleDragLeave}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                          onClick={() => document.getElementById('cv-upload').click()}
                        >
                          <Upload size={32} />
                          <span className="file-upload-text">
                            <strong>Choisir un fichier</strong> ou glisser-déposer
                          </span>
                          <span className="file-upload-hint">PDF, DOC, DOCX (Max. 3 Mo)</span>
                          <input
                            type="file"
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />
                        </div>
                      ) : (
                        <div className="file-selected">
                          <FileText size={32} />
                          <div className="file-info">
                            <span className="file-name">{formData.cv.name}</span>
                            <span className="file-size">
                              {formatFileSize(formData.cv.size)}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="file-remove-btn"
                            onClick={handleRemoveFile}
                            aria-label="Supprimer le fichier"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      )}
                    </div>
                    {formErrors.cv && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {formErrors.cv}
                      </span>
                    )}
                  </div>

                  {/* Bouton de soumission */}
                  <div className="form-actions">
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          <span>ENVOI EN COURS...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>ENVOYER</span>
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
      <section className="job-offers-section" id="job-offers">
        <div className="container">
          <motion.div
            className="offers-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="offers-icon" size={64} />
            <h2 className="offers-title">Offres d'emploi</h2>
            <p className="offers-description">
              Découvrez nos opportunités actuelles et postulez aux postes qui correspondent 
              à votre profil et à vos aspirations professionnelles.
            </p>
            <a 
              href="https://emploitic.com/offres-d-emploi/q-societe-nationale-de-travaux-publics-sntp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="offers-button"
            >
              CONSULTER NOS OFFRES D'EMPLOI
              <ArrowRight className="arrow-icon" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NousRejoindre;
