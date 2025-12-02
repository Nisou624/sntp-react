/**
 * Configuration complète du chatbot SNTP
 * Système de navigation par parcours de 3-4 questions minimum
 * Plusieurs parcours peuvent mener à la même page
 */

export const chatbotConfig = {
  // ==================== QUESTION INITIALE ====================
  welcome: {
    id: 'welcome',
    type: 'greeting',
    message: 'Bonjour ! Je suis Sacha, votre assistant virtuel conçu pour répondre à toutes vos questions. Pour commencer, vous êtes :',
    avatar: 'S',
    options: [
      { 
        id: 'client', 
        text: 'Client / Maître d\'ouvrage',
        nextQuestion: 'client_interest'
      },
      { 
        id: 'partner', 
        text: 'Partenaire / Fournisseur',
        nextQuestion: 'partner_type'
      },
      { 
        id: 'candidate', 
        text: 'Candidat / Recrutement',
        nextQuestion: 'candidate_interest'
      },
      { 
        id: 'professional', 
        text: 'Professionnel BTP / Architecte',
        nextQuestion: 'professional_need'
      },
      { 
        id: 'student', 
        text: 'Étudiant / Chercheur',
        nextQuestion: 'student_purpose'
      },
      { 
        id: 'visitor', 
        text: 'Visiteur / Curieux',
        nextQuestion: 'visitor_interest'
      },
      { 
        id: 'journalist', 
        text: 'Journaliste / Média',
        nextQuestion: 'journalist_need'
      },
      { 
        id: 'investor', 
        text: 'Investisseur',
        nextQuestion: 'investor_interest'
      }
    ]
  },

  // ==================== PARCOURS CLIENT ====================
  client_interest: {
    id: 'client_interest',
    type: 'question',
    message: 'Que recherchez-vous en tant que client ?',
    avatar: 'S',
    options: [
      { 
        id: 'need_service', 
        text: 'J\'ai besoin de services',
        nextQuestion: 'client_service_type'
      },
      { 
        id: 'see_projects', 
        text: 'Voir vos réalisations',
        nextQuestion: 'client_project_interest'
      },
      { 
        id: 'find_agency', 
        text: 'Trouver une agence proche',
        nextQuestion: 'client_location'
      },
      { 
        id: 'get_help', 
        text: 'J\'ai des questions',
        nextQuestion: 'client_help_type'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  client_service_type: {
    id: 'client_service_type',
    type: 'question',
    message: 'Quel type de travaux envisagez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'construction', 
        text: 'Construction de bâtiments',
        nextQuestion: 'client_construction_detail'
      },
      { 
        id: 'infrastructure', 
        text: 'Travaux d\'infrastructure',
        nextQuestion: 'client_infrastructure_detail'
      },
      { 
        id: 'engineering', 
        text: 'Études et ingénierie',
        nextQuestion: 'client_engineering_detail'
      },
      { 
        id: 'all_services', 
        text: 'Voir tous les services',
        nextQuestion: 'client_all_services_redirect'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_interest'
      }
    ]
  },

  client_construction_detail: {
    id: 'client_construction_detail',
    type: 'question',
    message: 'Précisez le type de construction :',
    avatar: 'S',
    options: [
      { 
        id: 'residential', 
        text: 'Résidentiel',
        route: '/services',
        message: 'Excellent ! SNTP réalise des projets résidentiels de qualité. Découvrez nos services de construction résidentielle.'
      },
      { 
        id: 'commercial', 
        text: 'Commercial / Tertiaire',
        route: '/services',
        message: 'Nous avons une grande expertise en construction commerciale. Consultez notre catalogue de services.'
      },
      { 
        id: 'industrial', 
        text: 'Industriel',
        route: '/services',
        message: 'SNTP accompagne les projets industriels complexes. Découvrez nos capacités techniques.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_service_type'
      }
    ]
  },

  client_infrastructure_detail: {
    id: 'client_infrastructure_detail',
    type: 'question',
    message: 'Quel type d\'infrastructure ?',
    avatar: 'S',
    options: [
      { 
        id: 'roads', 
        text: 'Routes et autoroutes',
        route: '/services',
        message: 'SNTP est leader dans la construction routière. Explorez nos services d\'infrastructure.'
      },
      { 
        id: 'bridges', 
        text: 'Ponts et ouvrages d\'art',
        route: '/services',
        message: 'Nous réalisons des ouvrages d\'art de grande envergure. Découvrez notre savoir-faire.'
      },
      { 
        id: 'networks', 
        text: 'Réseaux divers (VRD)',
        route: '/services',
        message: 'SNTP maîtrise tous les travaux VRD. Consultez nos services spécialisés.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_service_type'
      }
    ]
  },

  client_engineering_detail: {
    id: 'client_engineering_detail',
    type: 'question',
    message: 'Quel type d\'étude recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'feasibility', 
        text: 'Étude de faisabilité',
        route: '/services',
        message: 'Nos ingénieurs réalisent des études de faisabilité complètes. Découvrez nos services d\'ingénierie.'
      },
      { 
        id: 'design', 
        text: 'Conception et plans',
        route: '/services',
        message: 'SNTP dispose d\'un bureau d\'études performant. Explorez nos capacités de conception.'
      },
      { 
        id: 'project_management', 
        text: 'Maîtrise d\'œuvre',
        route: '/services',
        message: 'Nous assurons la maîtrise d\'œuvre de projets complexes. Consultez nos services.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_service_type'
      }
    ]
  },

  client_all_services_redirect: {
    id: 'client_all_services_redirect',
    type: 'question',
    message: 'Souhaitez-vous une présentation générale ou ciblée ?',
    avatar: 'S',
    options: [
      { 
        id: 'general', 
        text: 'Vue d\'ensemble complète',
        route: '/services',
        message: 'Découvrez l\'ensemble de nos services et expertises sur cette page.'
      },
      { 
        id: 'by_sector', 
        text: 'Par secteur d\'activité',
        route: '/services',
        message: 'Explorez nos services organisés par secteur.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_service_type'
      }
    ]
  },

  client_project_interest: {
    id: 'client_project_interest',
    type: 'question',
    message: 'Quel type de réalisations souhaitez-vous découvrir ?',
    avatar: 'S',
    options: [
      { 
        id: 'recent', 
        text: 'Projets récents',
        nextQuestion: 'client_recent_projects'
      },
      { 
        id: 'by_type', 
        text: 'Par type de projet',
        nextQuestion: 'client_project_type'
      },
      { 
        id: 'references', 
        text: 'Nos références majeures',
        nextQuestion: 'client_major_references'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_interest'
      }
    ]
  },

  client_recent_projects: {
    id: 'client_recent_projects',
    type: 'question',
    message: 'Parfait ! Voici comment accéder à nos projets récents :',
    avatar: 'S',
    options: [
      { 
        id: 'view_all', 
        text: 'Voir le portfolio complet',
        route: '/projects',
        message: 'Découvrez l\'ensemble de nos réalisations récentes et projets en cours.'
      },
      { 
        id: 'by_region', 
        text: 'Projets par région',
        route: '/projects',
        message: 'Explorez nos projets classés par région géographique.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_project_interest'
      }
    ]
  },

  client_project_type: {
    id: 'client_project_type',
    type: 'question',
    message: 'Sélectionnez le type de projet qui vous intéresse :',
    avatar: 'S',
    options: [
      { 
        id: 'buildings', 
        text: 'Bâtiments',
        route: '/projects',
        message: 'Découvrez nos réalisations en construction de bâtiments.'
      },
      { 
        id: 'infrastructure_projects', 
        text: 'Infrastructures',
        route: '/projects',
        message: 'Consultez nos projets d\'infrastructure routière et urbaine.'
      },
      { 
        id: 'special_structures', 
        text: 'Ouvrages spéciaux',
        route: '/projects',
        message: 'Explorez nos réalisations d\'ouvrages d\'art et structures spéciales.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_project_interest'
      }
    ]
  },

  client_major_references: {
    id: 'client_major_references',
    type: 'question',
    message: 'Nos références qui font notre réputation :',
    avatar: 'S',
    options: [
      { 
        id: 'showcase', 
        text: 'Projets emblématiques',
        route: '/projects',
        message: 'Découvrez nos projets les plus prestigieux et emblématiques.'
      },
      { 
        id: 'awards', 
        text: 'Projets primés',
        route: '/projects',
        message: 'Explorez nos réalisations ayant reçu des distinctions.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_project_interest'
      }
    ]
  },

  client_location: {
    id: 'client_location',
    type: 'question',
    message: 'Dans quelle région recherchez-vous une agence SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'algiers', 
        text: 'Alger et région centre',
        nextQuestion: 'client_algiers_agency'
      },
      { 
        id: 'east', 
        text: 'Est algérien',
        nextQuestion: 'client_east_agency'
      },
      { 
        id: 'west', 
        text: 'Ouest algérien',
        nextQuestion: 'client_west_agency'
      },
      { 
        id: 'south', 
        text: 'Sud algérien',
        nextQuestion: 'client_south_agency'
      },
      { 
        id: 'all_locations', 
        text: 'Voir toutes les implantations',
        route: '/implantations',
        message: 'Découvrez la carte complète de nos implantations en Algérie.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_interest'
      }
    ]
  },

  client_algiers_agency: {
    id: 'client_algiers_agency',
    type: 'question',
    message: 'Région d\'Alger - Comment souhaitez-vous nous contacter ?',
    avatar: 'S',
    options: [
      { 
        id: 'see_map', 
        text: 'Voir sur la carte',
        route: '/implantations',
        message: 'Retrouvez nos agences d\'Alger et leurs coordonnées sur la carte interactive.'
      },
      { 
        id: 'get_address', 
        text: 'Obtenir l\'adresse',
        route: '/implantations',
        message: 'Consultez les adresses exactes de nos sites à Alger.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_location'
      }
    ]
  },

  client_east_agency: {
    id: 'client_east_agency',
    type: 'question',
    message: 'Est algérien - Sélectionnez votre besoin :',
    avatar: 'S',
    options: [
      { 
        id: 'see_map', 
        text: 'Voir les implantations',
        route: '/implantations',
        message: 'Découvrez nos agences dans l\'Est algérien.'
      },
      { 
        id: 'contact_east', 
        text: 'Contact direct',
        route: '/implantations',
        message: 'Trouvez les coordonnées de nos agences de l\'Est.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_location'
      }
    ]
  },

  client_west_agency: {
    id: 'client_west_agency',
    type: 'question',
    message: 'Ouest algérien - Comment puis-je vous aider ?',
    avatar: 'S',
    options: [
      { 
        id: 'see_map', 
        text: 'Localiser les agences',
        route: '/implantations',
        message: 'Consultez nos implantations dans l\'Ouest algérien.'
      },
      { 
        id: 'agencies_list', 
        text: 'Liste des agences',
        route: '/implantations',
        message: 'Retrouvez la liste complète de nos sites de l\'Ouest.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_location'
      }
    ]
  },

  client_south_agency: {
    id: 'client_south_agency',
    type: 'question',
    message: 'Sud algérien - Nos implantations dans le Sud :',
    avatar: 'S',
    options: [
      { 
        id: 'see_map', 
        text: 'Carte des implantations',
        route: '/implantations',
        message: 'Découvrez notre présence dans le Sud algérien.'
      },
      { 
        id: 'project_sites', 
        text: 'Sites de projets',
        route: '/implantations',
        message: 'Explorez nos bases de chantiers dans le Sud.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_location'
      }
    ]
  },

  client_help_type: {
    id: 'client_help_type',
    type: 'question',
    message: 'Quel type d\'information recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'general_questions', 
        text: 'Questions générales',
        nextQuestion: 'client_general_questions'
      },
      { 
        id: 'technical', 
        text: 'Questions techniques',
        nextQuestion: 'client_technical_questions'
      },
      { 
        id: 'administrative', 
        text: 'Procédures administratives',
        nextQuestion: 'client_admin_questions'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_interest'
      }
    ]
  },

  client_general_questions: {
    id: 'client_general_questions',
    type: 'question',
    message: 'Questions générales sur SNTP :',
    avatar: 'S',
    options: [
      { 
        id: 'faq', 
        text: 'Consulter la FAQ',
        route: '/faq',
        message: 'Retrouvez les réponses aux questions les plus fréquentes.'
      },
      { 
        id: 'about_sntp', 
        text: 'En savoir plus sur SNTP',
        route: '/about',
        message: 'Découvrez l\'histoire et les valeurs de SNTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_help_type'
      }
    ]
  },
    
  client_technical_questions: {
    id: 'client_technical_questions',
    type: 'question',
    message: 'Pour vos questions techniques :',
    avatar: 'S',
    options: [
      { 
        id: 'capabilities', 
        text: 'Nos capacités techniques',
        route: '/services',
        message: 'Découvrez l\'étendue de nos capacités et certifications.'
      },
      { 
        id: 'faq_tech', 
        text: 'FAQ technique',
        route: '/faq',
        message: 'Consultez notre FAQ pour les questions techniques courantes.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_help_type'
      }
    ]
  },

   client_admin_questions: {
    id: 'client_admin_questions',
    type: 'question',
    message: 'Procédures et démarches :',
    avatar: 'S',
    options: [
      { 
        id: 'how_to_work', 
        text: 'Comment travailler avec nous',
        route: '/faq',
        message: 'Découvrez le processus pour devenir client de SNTP.'
      },
      { 
        id: 'documents', 
        text: 'Documents nécessaires',
        route: '/faq',
        message: 'Liste des documents requis pour vos démarches.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'client_help_type'
      }
    ]
  },

  // ==================== PARCOURS PARTENAIRE ====================
  partner_type: {
    id: 'partner_type',
    type: 'question',
    message: 'Quel type de partenariat vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'supplier', 
        text: 'Devenir fournisseur',
        nextQuestion: 'supplier_category'
      },
      { 
        id: 'subcontractor', 
        text: 'Sous-traitance',
        nextQuestion: 'subcontractor_domain'
      },
      { 
        id: 'technical_partner', 
        text: 'Partenariat technique',
        nextQuestion: 'technical_partnership_type'
      },
      { 
        id: 'learn_more', 
        text: 'En savoir plus sur SNTP',
        nextQuestion: 'partner_learn_more'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  supplier_category: {
    id: 'supplier_category',
    type: 'question',
    message: 'Quelle catégorie de fournitures proposez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'materials', 
        text: 'Matériaux de construction',
        nextQuestion: 'supplier_materials_type'
      },
      { 
        id: 'equipment', 
        text: 'Équipements et machines',
        nextQuestion: 'supplier_equipment_type'
      },
      { 
        id: 'services', 
        text: 'Services et prestations',
        nextQuestion: 'supplier_services_type'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_type'
      }
    ]
  },

  supplier_materials_type: {
    id: 'supplier_materials_type',
    type: 'question',
    message: 'Précisez le type de matériaux :',
    avatar: 'S',
    options: [
      { 
        id: 'concrete', 
        text: 'Béton et ciment',
        route: '/implantations',
        message: 'Contactez notre service achats via nos agences régionales pour une collaboration.'
      },
      { 
        id: 'steel', 
        text: 'Acier et métaux',
        route: '/implantations',
        message: 'Nos équipes achats de chaque site examineront votre offre. Trouvez l\'agence la plus proche.'
      },
      { 
        id: 'other_materials', 
        text: 'Autres matériaux',
        route: '/implantations',
        message: 'Prenez contact avec l\'agence SNTP de votre région pour discuter de votre offre.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'supplier_category'
      }
    ]
  },

  supplier_equipment_type: {
    id: 'supplier_equipment_type',
    type: 'question',
    message: 'Type d\'équipement proposé :',
    avatar: 'S',
    options: [
      { 
        id: 'heavy_machinery', 
        text: 'Engins lourds',
        route: '/implantations',
        message: 'Notre direction technique évalue régulièrement de nouveaux équipements. Contactez-nous.'
      },
      { 
        id: 'tools', 
        text: 'Outillage',
        route: '/implantations',
        message: 'Chaque agence gère ses achats d\'outillage. Trouvez l\'agence concernée.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'supplier_category'
      }
    ]
  },

  supplier_services_type: {
    id: 'supplier_services_type',
    type: 'question',
    message: 'Quel type de service proposez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'logistics', 
        text: 'Transport et logistique',
        route: '/implantations',
        message: 'Nos chefs de projets recherchent des partenaires logistiques. Contactez l\'agence régionale.'
      },
      { 
        id: 'consulting', 
        text: 'Conseil et expertise',
        route: '/about',
        message: 'Découvrez nos domaines d\'activité et contactez la direction concernée.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'supplier_category'
      }
    ]
  },

  subcontractor_domain: {
    id: 'subcontractor_domain',
    type: 'question',
    message: 'Dans quel domaine intervenez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'structure', 
        text: 'Gros œuvre / Structure',
        nextQuestion: 'subcontractor_structure_detail'
      },
      { 
        id: 'finishing', 
        text: 'Second œuvre / Finitions',
        nextQuestion: 'subcontractor_finishing_detail'
      },
      { 
        id: 'specialized', 
        text: 'Corps d\'état techniques',
        nextQuestion: 'subcontractor_specialized_detail'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_type'
      }
    ]
  },

  subcontractor_structure_detail: {
    id: 'subcontractor_structure_detail',
    type: 'question',
    message: 'Spécialité en gros œuvre :',
    avatar: 'S',
    options: [
      { 
        id: 'concrete_work', 
        text: 'Béton armé',
        route: '/about',
        message: 'SNTP travaille avec un réseau qualifié. Consultez notre page entreprise puis contactez-nous.'
      },
      { 
        id: 'masonry', 
        text: 'Maçonnerie',
        route: '/about',
        message: 'Découvrez nos valeurs et notre approche partenariale avant de nous soumettre votre dossier.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'subcontractor_domain'
      }
    ]
  },

  subcontractor_finishing_detail: {
    id: 'subcontractor_finishing_detail',
    type: 'question',
    message: 'Spécialité en finitions :',
    avatar: 'S',
    options: [
      { 
        id: 'painting', 
        text: 'Peinture et revêtements',
        route: '/about',
        message: 'SNTP sélectionne ses partenaires selon des critères stricts. Découvrez notre entreprise.'
      },
      { 
        id: 'carpentry', 
        text: 'Menuiserie',
        route: '/about',
        message: 'Consultez notre page À propos pour comprendre nos exigences qualité.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'subcontractor_domain'
      }
    ]
  },

  subcontractor_specialized_detail: {
    id: 'subcontractor_specialized_detail',
    type: 'question',
    message: 'Corps d\'état technique :',
    avatar: 'S',
    options: [
      { 
        id: 'electrical', 
        text: 'Électricité',
        route: '/about',
        message: 'Les corps d\'état techniques sont cruciaux. Découvrez SNTP avant de postuler.'
      },
      { 
        id: 'plumbing', 
        text: 'Plomberie et CVC',
        route: '/about',
        message: 'Consultez notre présentation puis soumettez votre candidature de partenariat.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'subcontractor_domain'
      }
    ]
  },

  technical_partnership_type: {
    id: 'technical_partnership_type',
    type: 'question',
    message: 'Quel type de partenariat technique envisagez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'innovation', 
        text: 'Innovation et R&D',
        nextQuestion: 'technical_innovation_area'
      },
      { 
        id: 'technology_transfer', 
        text: 'Transfert de technologie',
        nextQuestion: 'technical_technology_area'
      },
      { 
        id: 'joint_projects', 
        text: 'Projets conjoints',
        nextQuestion: 'technical_project_type'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_type'
      }
    ]
  },

  technical_innovation_area: {
    id: 'technical_innovation_area',
    type: 'question',
    message: 'Dans quel domaine d\'innovation ?',
    avatar: 'S',
    options: [
      { 
        id: 'construction_methods', 
        text: 'Méthodes de construction',
        route: '/services',
        message: 'Découvrez nos méthodes actuelles puis proposez vos innovations à notre direction technique.'
      },
      { 
        id: 'materials', 
        text: 'Nouveaux matériaux',
        route: '/services',
        message: 'SNTP est ouverte aux matériaux innovants. Consultez nos services puis contactez-nous.'
      },
      { 
        id: 'digitalization', 
        text: 'Digitalisation',
        route: '/services',
        message: 'La transformation digitale nous intéresse. Explorez nos capacités actuelles.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'technical_partnership_type'
      }
    ]
  },

  technical_technology_area: {
    id: 'technical_technology_area',
    type: 'question',
    message: 'Quelle technologie proposez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'equipment_tech', 
        text: 'Technologie d\'équipement',
        route: '/services',
        message: 'Consultez nos domaines d\'expertise pour évaluer la compatibilité.'
      },
      { 
        id: 'process_tech', 
        text: 'Procédés de fabrication',
        route: '/services',
        message: 'Découvrez nos processus actuels avant de proposer un transfert technologique.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'technical_partnership_type'
      }
    ]
  },

  technical_project_type: {
    id: 'technical_project_type',
    type: 'question',
    message: 'Type de projet conjoint envisagé :',
    avatar: 'S',
    options: [
      { 
        id: 'infrastructure_project', 
        text: 'Grand projet d\'infrastructure',
        route: '/projects',
        message: 'Découvrez nos réalisations pour évaluer nos capacités de collaboration.'
      },
      { 
        id: 'development_project', 
        text: 'Projet de développement',
        route: '/projects',
        message: 'Explorez notre portfolio puis proposez votre collaboration.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'technical_partnership_type'
      }
    ]
  },

  partner_learn_more: {
    id: 'partner_learn_more',
    type: 'question',
    message: 'Que souhaitez-vous savoir sur SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'company_values', 
        text: 'Nos valeurs et culture',
        nextQuestion: 'partner_company_values'
      },
      { 
        id: 'coverage', 
        text: 'Notre couverture territoriale',
        nextQuestion: 'partner_coverage'
      },
      { 
        id: 'references', 
        text: 'Nos références',
        nextQuestion: 'partner_references'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_type'
      }
    ]
  },

  partner_company_values: {
    id: 'partner_company_values',
    type: 'question',
    message: 'Découvrez SNTP :',
    avatar: 'S',
    options: [
      { 
        id: 'about_page', 
        text: 'Histoire et valeurs',
        route: '/about',
        message: 'Découvrez l\'histoire, les valeurs et la mission de SNTP.'
      },
      { 
        id: 'certifications', 
        text: 'Certifications et qualité',
        route: '/about',
        message: 'Consultez nos certifications et notre démarche qualité.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_learn_more'
      }
    ]
  },

  partner_coverage: {
    id: 'partner_coverage',
    type: 'question',
    message: 'Notre présence en Algérie :',
    avatar: 'S',
    options: [
      { 
        id: 'national_map', 
        text: 'Carte nationale',
        route: '/implantations',
        message: 'Visualisez l\'ensemble de nos implantations sur le territoire algérien.'
      },
      { 
        id: 'by_region', 
        text: 'Par région',
        route: '/implantations',
        message: 'Explorez nos agences région par région.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_learn_more'
      }
    ]
  },

  partner_references: {
    id: 'partner_references',
    type: 'question',
    message: 'Nos réalisations de référence :',
    avatar: 'S',
    options: [
      { 
        id: 'major_projects', 
        text: 'Grands projets',
        route: '/projects',
        message: 'Découvrez nos projets d\'envergure nationale.'
      },
      { 
        id: 'all_portfolio', 
        text: 'Portfolio complet',
        route: '/projects',
        message: 'Consultez l\'ensemble de nos réalisations.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'partner_learn_more'
      }
    ]
  },

  // ==================== PARCOURS CANDIDAT ====================
  candidate_interest: {
    id: 'candidate_interest',
    type: 'question',
    message: 'Qu\'est-ce qui vous intéresse chez SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'job_offer', 
        text: 'Postuler à une offre',
        nextQuestion: 'candidate_job_type'
      },
      { 
        id: 'spontaneous', 
        text: 'Candidature spontanée',
        nextQuestion: 'candidate_spontaneous_profile'
      },
      { 
        id: 'internship', 
        text: 'Stage ou alternance',
        nextQuestion: 'candidate_internship_type'
      },
      { 
        id: 'learn_about_sntp', 
        text: 'En savoir plus sur SNTP',
        nextQuestion: 'candidate_learn_more'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  candidate_job_type: {
    id: 'candidate_job_type',
    type: 'question',
    message: 'Quel type de poste recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'engineering', 
        text: 'Ingénierie / Cadres',
        nextQuestion: 'candidate_engineering_domain'
      },
      { 
        id: 'technical', 
        text: 'Postes techniques',
        nextQuestion: 'candidate_technical_domain'
      },
      { 
        id: 'support', 
        text: 'Fonctions support',
        nextQuestion: 'candidate_support_domain'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_interest'
      }
    ]
  },

  candidate_engineering_domain: {
    id: 'candidate_engineering_domain',
    type: 'question',
    message: 'Dans quel domaine d\'ingénierie ?',
    avatar: 'S',
    options: [
      { 
        id: 'civil_engineering', 
        text: 'Génie civil',
        nextQuestion: 'candidate_civil_eng_offers'
      },
      { 
        id: 'project_management', 
        text: 'Gestion de projets',
        nextQuestion: 'candidate_pm_offers'
      },
      { 
        id: 'studies', 
        text: 'Bureau d\'études',
        nextQuestion: 'candidate_studies_offers'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_job_type'
      }
    ]
  },

  candidate_civil_eng_offers: {
    id: 'candidate_civil_eng_offers',
    type: 'question',
    message: 'Offres en génie civil :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Voir les offres actuelles',
        route: '/blog',
        message: 'Consultez notre blog pour les offres d\'emploi en génie civil.'
      },
      { 
        id: 'learn_first', 
        text: 'D\'abord en savoir plus',
        route: '/about',
        message: 'Découvrez SNTP avant de postuler : notre histoire, nos valeurs, nos projets.'
      },
      { 
        id: 'faq_recruitment', 
        text: 'FAQ recrutement',
        route: '/faq',
        message: 'Consultez les questions fréquentes sur notre processus de recrutement.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_engineering_domain'
      }
    ]
  },

  candidate_pm_offers: {
    id: 'candidate_pm_offers',
    type: 'question',
    message: 'Postes en gestion de projets :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres de chef de projet',
        route: '/blog',
        message: 'Retrouvez les opportunités en gestion de projets sur notre blog.'
      },
      { 
        id: 'projects_portfolio', 
        text: 'Voir nos projets',
        route: '/projects',
        message: 'Découvrez les types de projets que vous pourriez gérer chez SNTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_engineering_domain'
      }
    ]
  },

  candidate_studies_offers: {
    id: 'candidate_studies_offers',
    type: 'question',
    message: 'Bureau d\'études :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Postes disponibles',
        route: '/blog',
        message: 'Consultez les offres pour ingénieurs d\'études sur notre blog.'
      },
      { 
        id: 'our_capabilities', 
        text: 'Nos capacités techniques',
        route: '/services',
        message: 'Découvrez nos services d\'ingénierie et d\'études techniques.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_engineering_domain'
      }
    ]
  },

  candidate_technical_domain: {
    id: 'candidate_technical_domain',
    type: 'question',
    message: 'Quel métier technique vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'site_supervisor', 
        text: 'Conducteur de travaux',
        nextQuestion: 'candidate_supervisor_offers'
      },
      { 
        id: 'technician', 
        text: 'Technicien spécialisé',
        nextQuestion: 'candidate_technician_offers'
      },
      { 
        id: 'operator', 
        text: 'Opérateur / Ouvrier qualifié',
        nextQuestion: 'candidate_operator_offers'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_job_type'
      }
    ]
  },

  candidate_supervisor_offers: {
    id: 'candidate_supervisor_offers',
    type: 'question',
    message: 'Postes de conducteur de travaux :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres actuelles',
        route: '/blog',
        message: 'Découvrez les postes de conducteur de travaux disponibles.'
      },
      { 
        id: 'see_projects', 
        text: 'Nos chantiers',
        route: '/projects',
        message: 'Explorez les chantiers que vous pourriez superviser.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_technical_domain'
      }
    ]
  },

  candidate_technician_offers: {
    id: 'candidate_technician_offers',
    type: 'question',
    message: 'Postes de technicien :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Voir les offres',
        route: '/blog',
        message: 'Consultez les opportunités pour techniciens spécialisés.'
      },
      { 
        id: 'technical_areas', 
        text: 'Domaines techniques',
        route: '/services',
        message: 'Découvrez nos différents domaines d\'expertise technique.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_technical_domain'
      }
    ]
  },

  candidate_operator_offers: {
    id: 'candidate_operator_offers',
    type: 'question',
    message: 'Postes d\'opérateur :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres disponibles',
        route: '/blog',
        message: 'Retrouvez les postes d\'opérateurs et ouvriers qualifiés.'
      },
      { 
        id: 'faq_info', 
        text: 'Informations pratiques',
        route: '/faq',
        message: 'Questions fréquentes sur le recrutement et les conditions de travail.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_technical_domain'
      }
    ]
  },

  candidate_support_domain: {
    id: 'candidate_support_domain',
    type: 'question',
    message: 'Quelle fonction support ?',
    avatar: 'S',
    options: [
      { 
        id: 'hr', 
        text: 'Ressources Humaines',
        nextQuestion: 'candidate_hr_offers'
      },
      { 
        id: 'finance', 
        text: 'Finance / Comptabilité',
        nextQuestion: 'candidate_finance_offers'
      },
      { 
        id: 'admin', 
        text: 'Administration',
        nextQuestion: 'candidate_admin_offers'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_job_type'
      }
    ]
  },

  candidate_hr_offers: {
    id: 'candidate_hr_offers',
    type: 'question',
    message: 'Postes RH :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres RH',
        route: '/blog',
        message: 'Consultez les opportunités en Ressources Humaines.'
      },
      { 
        id: 'about_company', 
        text: 'Culture d\'entreprise',
        route: '/about',
        message: 'Découvrez la culture et les valeurs RH de SNTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_support_domain'
      }
    ]
  },

  candidate_finance_offers: {
    id: 'candidate_finance_offers',
    type: 'question',
    message: 'Postes Finance :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres Finance',
        route: '/blog',
        message: 'Découvrez les postes en finance et comptabilité.'
      },
      { 
        id: 'company_info', 
        text: 'Informations entreprise',
        route: '/about',
        message: 'En savoir plus sur la structure et l\'organisation de SNTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_support_domain'
      }
    ]
  },

  candidate_admin_offers: {
    id: 'candidate_admin_offers',
    type: 'question',
    message: 'Postes administratifs :',
    avatar: 'S',
    options: [
      { 
        id: 'view_offers', 
        text: 'Offres disponibles',
        route: '/blog',
        message: 'Consultez les opportunités en administration.'
      },
      { 
        id: 'locations', 
        text: 'Nos implantations',
        route: '/implantations',
        message: 'Découvrez où nous recrutons du personnel administratif.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_support_domain'
      }
    ]
  },

  candidate_spontaneous_profile: {
    id: 'candidate_spontaneous_profile',
    type: 'question',
    message: 'Quel est votre profil ?',
    avatar: 'S',
    options: [
      { 
        id: 'experienced', 
        text: 'Professionnel expérimenté',
        nextQuestion: 'candidate_experienced_domain'
      },
      { 
        id: 'young_graduate', 
        text: 'Jeune diplômé',
        nextQuestion: 'candidate_graduate_domain'
      },
      { 
        id: 'career_change', 
        text: 'Reconversion',
        nextQuestion: 'candidate_career_change'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_interest'
      }
    ]
  },

  candidate_experienced_domain: {
    id: 'candidate_experienced_domain',
    type: 'question',
    message: 'Votre domaine d\'expertise :',
    avatar: 'S',
    options: [
      { 
        id: 'construction_exp', 
        text: 'Construction',
        route: '/about',
        message: 'Découvrez SNTP puis envoyez votre candidature via nos contacts régionaux.'
      },
      { 
        id: 'management_exp', 
        text: 'Management de projets',
        route: '/projects',
        message: 'Consultez nos réalisations pour comprendre l\'envergure de nos projets.'
      },
      { 
        id: 'support_exp', 
        text: 'Fonctions support',
        route: '/about',
        message: 'En savoir plus sur notre organisation avant d\'envoyer votre CV.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_spontaneous_profile'
      }
    ]
  },

  candidate_graduate_domain: {
    id: 'candidate_graduate_domain',
    type: 'question',
    message: 'Votre formation :',
    avatar: 'S',
    options: [
      { 
        id: 'engineering_degree', 
        text: 'Ingénieur',
        route: '/about',
        message: 'SNTP recrute régulièrement des jeunes ingénieurs. Découvrez notre entreprise.'
      },
      { 
        id: 'technical_degree', 
        text: 'Technicien supérieur',
        route: '/services',
        message: 'Explorez nos métiers techniques puis contactez le service RH de votre région.'
      },
      { 
        id: 'business_degree', 
        text: 'Commerce / Gestion',
        route: '/about',
        message: 'Consultez notre page entreprise puis envoyez votre candidature.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_spontaneous_profile'
      }
    ]
  },

  candidate_career_change: {
    id: 'candidate_career_change',
    type: 'question',
    message: 'Vers quel métier souhaitez-vous évoluer ?',
    avatar: 'S',
    options: [
      { 
        id: 'to_technical', 
        text: 'Métiers techniques',
        route: '/services',
        message: 'Découvrez nos métiers techniques et les compétences requises.'
      },
      { 
        id: 'to_management', 
        text: 'Management',
        route: '/about',
        message: 'Consultez notre organisation et notre approche managériale.'
      },
      { 
        id: 'to_support', 
        text: 'Fonctions support',
        route: '/faq',
        message: 'Retrouvez des informations sur nos différents métiers support dans la FAQ.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_spontaneous_profile'
      }
    ]
  },

  candidate_internship_type: {
    id: 'candidate_internship_type',
    type: 'question',
    message: 'Quel type de stage recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'final_year', 
        text: 'Stage de fin d\'études',
        nextQuestion: 'candidate_internship_domain'
      },
      { 
        id: 'practical', 
        text: 'Stage pratique',
        nextQuestion: 'candidate_internship_domain'
      },
      { 
        id: 'apprenticeship', 
        text: 'Alternance',
        nextQuestion: 'candidate_internship_domain'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_interest'
      }
    ]
  },

  candidate_internship_domain: {
    id: 'candidate_internship_domain',
    type: 'question',
    message: 'Dans quel domaine ?',
    avatar: 'S',
    options: [
      { 
        id: 'engineering_intern', 
        text: 'Ingénierie',
        route: '/blog',
        message: 'Les offres de stages en ingénierie sont publiées sur notre blog. SNTP accueille régulièrement des stagiaires.'
      },
      { 
        id: 'project_intern', 
        text: 'Gestion de projets',
        route: '/projects',
        message: 'Découvrez nos projets puis contactez-nous pour un stage en gestion de projets.'
      },
      { 
        id: 'support_intern', 
        text: 'Fonctions support',
        route: '/about',
        message: 'Consultez notre page entreprise puis envoyez votre demande de stage.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_internship_type'
      }
    ]
  },

  candidate_learn_more: {
    id: 'candidate_learn_more',
    type: 'question',
    message: 'Que voulez-vous savoir sur SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'company_culture', 
        text: 'Culture et valeurs',
        route: '/about',
        message: 'Découvrez l\'ADN de SNTP : nos valeurs, notre histoire, notre vision.'
      },
      { 
        id: 'career_paths', 
        text: 'Évolution de carrière',
        route: '/about',
        message: 'SNTP valorise le développement des compétences. En savoir plus sur notre page.'
      },
      { 
        id: 'benefits', 
        text: 'Avantages et conditions',
        route: '/faq',
        message: 'Consultez notre FAQ pour les informations sur les conditions de travail.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'candidate_interest'
      }
    ]
  },

  // ==================== PARCOURS PROFESSIONNEL BTP ====================
  professional_need: {
    id: 'professional_need',
    type: 'question',
    message: 'Comment puis-je vous aider en tant que professionnel ?',
    avatar: 'S',
    options: [
      { 
        id: 'collaboration', 
        text: 'Opportunités de collaboration',
        nextQuestion: 'professional_collab_type'
      },
      { 
        id: 'technical_info', 
        text: 'Informations techniques',
        nextQuestion: 'professional_technical_need'
      },
      { 
        id: 'references', 
        text: 'Voir vos références',
        nextQuestion: 'professional_references_interest'
      },
      { 
        id: 'innovation', 
        text: 'Innovation et R&D',
        nextQuestion: 'professional_innovation_interest'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  professional_collab_type: {
    id: 'professional_collab_type',
    type: 'question',
    message: 'Quel type de collaboration envisagez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'architect_collab', 
        text: 'Collaboration architecte',
        nextQuestion: 'professional_architect_project'
      },
      { 
        id: 'engineering_firm', 
        text: 'Bureau d\'études',
        nextQuestion: 'professional_engineering_collab'
      },
      { 
        id: 'contractor_collab', 
        text: 'Entre entreprises BTP',
        nextQuestion: 'professional_contractor_type'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_need'
      }
    ]
  },

  professional_architect_project: {
    id: 'professional_architect_project',
    type: 'question',
    message: 'Type de projet architectural :',
    avatar: 'S',
    options: [
      { 
        id: 'public_building', 
        text: 'Bâtiments publics',
        route: '/services',
        message: 'SNTP réalise de nombreux équipements publics. Découvrez nos services et capacités.'
      },
      { 
        id: 'private_building', 
        text: 'Projets privés',
        route: '/services',
        message: 'Explorez notre expertise en construction privée et nos références.'
      },
      { 
        id: 'mixed_use', 
        text: 'Projets mixtes',
        route: '/projects',
        message: 'Consultez nos réalisations de projets complexes et mixtes.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_collab_type'
      }
    ]
  },

  professional_engineering_collab: {
    id: 'professional_engineering_collab',
    type: 'question',
    message: 'Domaine de collaboration BE :',
    avatar: 'S',
    options: [
      { 
        id: 'structure_studies', 
        text: 'Études de structure',
        route: '/services',
        message: 'Découvrez nos capacités en ingénierie structurelle et nos équipements.'
      },
      { 
        id: 'infrastructure_studies', 
        text: 'Études d\'infrastructure',
        route: '/services',
        message: 'SNTP dispose d\'un bureau d\'études infrastructure. Explorez nos services.'
      },
      { 
        id: 'special_works', 
        text: 'Ouvrages spéciaux',
        route: '/projects',
        message: 'Consultez nos réalisations d\'ouvrages d\'art et structures spéciales.'
      },
      { 
        id: 'back', 
        text: 'Retour',
       nextQuestion: 'professional_collab_type'
      }
    ]
  },

  professional_contractor_type: {
    id: 'professional_contractor_type',
    type: 'question',
    message: 'Type de collaboration entre entreprises :',
    avatar: 'S',
    options: [
      { 
        id: 'grouping', 
        text: 'Groupement d\'entreprises',
        route: '/about',
        message: 'SNTP participe à des groupements. Découvrez notre profil entreprise.'
      },
      { 
        id: 'joint_venture', 
        text: 'Co-traitance',
        route: '/projects',
        message: 'Explorez nos réalisations en co-traitance et nos capacités.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_collab_type'
      }
    ]
  },

  professional_technical_need: {
    id: 'professional_technical_need',
    type: 'question',
    message: 'Quel type d\'information technique ?',
    avatar: 'S',
    options: [
      { 
        id: 'capabilities', 
        text: 'Capacités et moyens',
        nextQuestion: 'professional_capabilities_detail'
      },
      { 
        id: 'certifications', 
        text: 'Certifications',
        nextQuestion: 'professional_certifications'
      },
      { 
        id: 'methods', 
        text: 'Méthodes de travail',
        nextQuestion: 'professional_methods'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_need'
      }
    ]
  },

  professional_capabilities_detail: {
    id: 'professional_capabilities_detail',
    type: 'question',
    message: 'Quelles capacités vous intéressent ?',
    avatar: 'S',
    options: [
      { 
        id: 'equipment', 
        text: 'Parc matériel',
        route: '/services',
        message: 'Découvrez notre parc d\'équipements et nos moyens techniques.'
      },
      { 
        id: 'human_resources', 
        text: 'Ressources humaines',
        route: '/about',
        message: 'SNTP dispose d\'équipes qualifiées. En savoir plus sur notre page.'
      },
      { 
        id: 'technical_capacity', 
        text: 'Capacité de production',
        route: '/services',
        message: 'Consultez nos services pour connaître nos capacités de réalisation.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_technical_need'
      }
    ]
  },

  professional_certifications: {
    id: 'professional_certifications',
    type: 'question',
    message: 'Certifications SNTP :',
    avatar: 'S',
    options: [
      { 
        id: 'quality_certs', 
        text: 'Qualité et normes',
        route: '/about',
        message: 'Découvrez nos certifications qualité et nos démarches normatives.'
      },
      { 
        id: 'safety_certs', 
        text: 'Sécurité',
        route: '/about',
        message: 'Consultez nos certifications en matière de sécurité et santé au travail.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_technical_need'
      }
    ]
  },

  professional_methods: {
    id: 'professional_methods',
    type: 'question',
    message: 'Méthodes et processus :',
    avatar: 'S',
    options: [
      { 
        id: 'construction_methods', 
        text: 'Méthodes de construction',
        route: '/services',
        message: 'Explorez nos méthodes de construction et nos savoir-faire.'
      },
      { 
        id: 'project_management', 
        text: 'Gestion de projets',
        route: '/projects',
        message: 'Découvrez notre approche de gestion de projets à travers nos réalisations.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_technical_need'
      }
    ]
  },

  professional_references_interest: {
    id: 'professional_references_interest',
    type: 'question',
    message: 'Quel type de références ?',
    avatar: 'S',
    options: [
      { 
        id: 'by_domain', 
        text: 'Par domaine d\'activité',
        nextQuestion: 'professional_references_domain'
      },
      { 
        id: 'major_projects', 
        text: 'Projets majeurs',
        route: '/projects',
        message: 'Découvrez nos projets emblématiques et réalisations d\'envergure.'
      },
      { 
        id: 'recent_works', 
        text: 'Réalisations récentes',
        route: '/projects',
        message: 'Consultez nos projets récents et en cours de réalisation.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_need'
      }
    ]
  },

  professional_references_domain: {
    id: 'professional_references_domain',
    type: 'question',
    message: 'Sélectionnez le domaine :',
    avatar: 'S',
    options: [
      { 
        id: 'building_refs', 
        text: 'Bâtiments',
        route: '/projects',
        message: 'Explorez notre portfolio de constructions de bâtiments.'
      },
      { 
        id: 'infrastructure_refs', 
        text: 'Infrastructures',
        route: '/projects',
        message: 'Découvrez nos réalisations en infrastructure et travaux publics.'
      },
      { 
        id: 'special_works_refs', 
        text: 'Ouvrages d\'art',
        route: '/projects',
        message: 'Consultez nos références en ouvrages d\'art et structures spéciales.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_references_interest'
      }
    ]
  },

  professional_innovation_interest: {
    id: 'professional_innovation_interest',
    type: 'question',
    message: 'Innovation chez SNTP :',
    avatar: 'S',
    options: [
      { 
        id: 'new_technologies', 
        text: 'Nouvelles technologies',
        route: '/blog',
        message: 'Suivez nos innovations et actualités technologiques sur notre blog.'
      },
      { 
        id: 'sustainable', 
        text: 'Construction durable',
        route: '/blog',
        message: 'Découvrez nos initiatives en construction durable et éco-responsable.'
      },
      { 
        id: 'digitalization', 
        text: 'Digitalisation',
        route: '/blog',
        message: 'Explorez notre transformation digitale et nos outils numériques.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'professional_need'
      }
    ]
  },

  // ==================== PARCOURS ÉTUDIANT ====================
  student_purpose: {
    id: 'student_purpose',
    type: 'question',
    message: 'Quel est votre objectif en tant qu\'étudiant ?',
    avatar: 'S',
    options: [
      { 
        id: 'academic_project', 
        text: 'Projet académique',
        nextQuestion: 'student_project_type'
      },
      { 
        id: 'internship_search', 
        text: 'Recherche de stage',
        nextQuestion: 'student_internship_info'
      },
      { 
        id: 'career_info', 
        text: 'Information carrières',
        nextQuestion: 'student_career_interest'
      },
      { 
        id: 'industry_research', 
        text: 'Veille sectorielle',
        nextQuestion: 'student_research_topic'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  student_project_type: {
    id: 'student_project_type',
    type: 'question',
    message: 'Type de projet académique :',
    avatar: 'S',
    options: [
      { 
        id: 'thesis', 
        text: 'Mémoire / Thèse',
        nextQuestion: 'student_thesis_topic'
      },
      { 
        id: 'case_study', 
        text: 'Étude de cas',
        nextQuestion: 'student_case_study_area'
      },
      { 
        id: 'presentation', 
        text: 'Exposé / Présentation',
        nextQuestion: 'student_presentation_need'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_purpose'
      }
    ]
  },

  student_thesis_topic: {
    id: 'student_thesis_topic',
    type: 'question',
    message: 'Thématique de votre mémoire :',
    avatar: 'S',
    options: [
      { 
        id: 'construction_management', 
        text: 'Management de projets BTP',
        route: '/projects',
        message: 'Consultez nos projets pour des exemples concrets de gestion de chantiers.'
      },
      { 
        id: 'technical_innovation', 
        text: 'Innovation technique',
        route: '/blog',
        message: 'Suivez notre blog pour nos innovations et actualités techniques.'
      },
      { 
        id: 'industry_analysis', 
        text: 'Analyse du secteur',
        route: '/about',
        message: 'Découvrez SNTP comme cas d\'étude du secteur de la construction en Algérie.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_project_type'
      }
    ]
  },

  student_case_study_area: {
    id: 'student_case_study_area',
    type: 'question',
    message: 'Domaine de l\'étude de cas :',
    avatar: 'S',
    options: [
      { 
        id: 'project_case', 
        text: 'Étude d\'un projet',
        route: '/projects',
        message: 'Explorez notre portfolio pour sélectionner un projet à étudier.'
      },
      { 
        id: 'company_case', 
        text: 'Analyse d\'entreprise',
        route: '/about',
        message: 'Utilisez SNTP comme cas d\'étude entreprise du BTP algérien.'
      },
      { 
        id: 'methods_case', 
        text: 'Méthodes et processus',
        route: '/services',
        message: 'Découvrez nos méthodes de travail et processus de réalisation.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_project_type'
      }
    ]
  },

  student_presentation_need: {
    id: 'student_presentation_need',
    type: 'question',
    message: 'Sujet de votre présentation :',
    avatar: 'S',
    options: [
      { 
        id: 'company_presentation', 
        text: 'Présentation d\'entreprise',
        route: '/about',
        message: 'Toutes les informations sur SNTP pour votre exposé.'
      },
      { 
        id: 'project_presentation', 
        text: 'Présentation de projets',
        route: '/projects',
        message: 'Sélectionnez parmi nos projets pour votre présentation.'
      },
      { 
        id: 'sector_presentation', 
        text: 'Secteur du BTP',
        route: '/',
        message: 'Découvrez SNTP et le secteur de la construction en Algérie.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_project_type'
      }
    ]
  },

  student_internship_info: {
    id: 'student_internship_info',
    type: 'question',
    message: 'Informations sur les stages :',
    avatar: 'S',
    options: [
      { 
        id: 'internship_offers', 
        text: 'Offres de stages',
        route: '/blog',
        message: 'Les offres de stages sont publiées sur notre blog régulièrement.'
      },
      { 
        id: 'internship_domains', 
        text: 'Domaines de stages',
        route: '/services',
        message: 'Découvrez nos domaines d\'activité pour cibler votre stage.'
      },
      { 
        id: 'internship_process', 
        text: 'Processus de candidature',
        route: '/faq',
        message: 'Consultez la FAQ pour les modalités de candidature de stage.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_purpose'
      }
    ]
  },

  student_career_interest: {
    id: 'student_career_interest',
    type: 'question',
    message: 'Carrières qui vous intéressent :',
    avatar: 'S',
    options: [
      { 
        id: 'engineering_career', 
        text: 'Ingénieur BTP',
        route: '/about',
        message: 'Découvrez les opportunités de carrière en ingénierie chez SNTP.'
      },
      { 
        id: 'project_manager_career', 
        text: 'Chef de projet',
        route: '/projects',
        message: 'Explorez les projets pour comprendre le métier de chef de projet.'
      },
      { 
        id: 'technical_career', 
        text: 'Métiers techniques',
        route: '/services',
        message: 'Découvrez la diversité des métiers techniques chez SNTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_purpose'
      }
    ]
  },

  student_research_topic: {
    id: 'student_research_topic',
    type: 'question',
    message: 'Sujet de veille sectorielle :',
    avatar: 'S',
    options: [
      { 
        id: 'market_trends', 
        text: 'Tendances du marché',
        route: '/blog',
        message: 'Suivez notre blog pour les actualités et tendances du secteur BTP.'
      },
      { 
        id: 'new_technologies', 
        text: 'Nouvelles technologies',
        route: '/blog',
        message: 'Découvrez les innovations technologiques dans la construction.'
      },
      { 
        id: 'regulations', 
        text: 'Réglementation',
        route: '/faq',
        message: 'Informations sur la réglementation du secteur dans notre FAQ.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'student_purpose'
      }
    ]
  },

  // ==================== PARCOURS VISITEUR ====================
  visitor_interest: {
    id: 'visitor_interest',
    type: 'question',
    message: 'Qu\'aimeriez-vous découvrir ?',
    avatar: 'S',
    options: [
      { 
        id: 'discover_company', 
        text: 'Découvrir l\'entreprise',
        nextQuestion: 'visitor_company_aspect'
      },
      { 
        id: 'explore_services', 
        text: 'Explorer les services',
        nextQuestion: 'visitor_services_interest'
      },
      { 
        id: 'view_projects', 
        text: 'Voir les réalisations',
        nextQuestion: 'visitor_projects_interest'
      },
      { 
        id: 'general_questions', 
        text: 'Questions générales',
        nextQuestion: 'visitor_general_questions'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  visitor_company_aspect: {
    id: 'visitor_company_aspect',
    type: 'question',
    message: 'Quel aspect de SNTP vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'history', 
        text: 'Histoire et évolution',
        route: '/about',
        message: 'Découvrez l\'histoire de SNTP depuis sa création.'
      },
      { 
        id: 'values_mission', 
        text: 'Valeurs et mission',
        route: '/about',
        message: 'Explorez les valeurs fondamentales et la mission de SNTP.'
      },
      { 
        id: 'presence', 
        text: 'Présence territoriale',
        route: '/implantations',
        message: 'Visualisez notre présence sur tout le territoire algérien.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'visitor_interest'
      }
    ]
  },

  visitor_services_interest: {
    id: 'visitor_services_interest',
    type: 'question',
    message: 'Quels services souhaitez-vous explorer ?',
    avatar: 'S',
    options: [
      { 
        id: 'all_services', 
        text: 'Tous les services',
        route: '/services',
        message: 'Découvrez l\'ensemble de notre offre de services.'
      },
      { 
        id: 'construction_services', 
        text: 'Construction',
        route: '/services',
        message: 'Explorez nos services en construction de bâtiments.'
      },
      { 
        id: 'infrastructure_services', 
        text: 'Infrastructure',
        route: '/services',
        message: 'Découvrez nos capacités en travaux d\'infrastructure.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'visitor_interest'
      }
    ]
  },

  visitor_projects_interest: {
    id: 'visitor_projects_interest',
    type: 'question',
    message: 'Quel type de réalisations ?',
    avatar: 'S',
    options: [
      { 
        id: 'showcase_projects', 
        text: 'Projets emblématiques',
        route: '/projects',
        message: 'Découvrez nos projets les plus prestigieux et représentatifs.'
      },
      { 
        id: 'all_projects', 
        text: 'Tous les projets',
        route: '/projects',
        message: 'Explorez l\'ensemble de notre portfolio de réalisations.'
      },
      { 
        id: 'recent_projects', 
        text: 'Projets récents',
        route: '/projects',
        message: 'Consultez nos réalisations les plus récentes.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'visitor_interest'
      }
    ]
  },

  visitor_general_questions: {
    id: 'visitor_general_questions',
    type: 'question',
    message: 'Comment puis-je vous aider ?',
    avatar: 'S',
    options: [
      { 
        id: 'faq_visit', 
        text: 'Questions fréquentes',
        route: '/faq',
        message: 'Trouvez les réponses aux questions les plus courantes.'
      },
      { 
        id: 'about_visit', 
        text: 'À propos de SNTP',
        route: '/about',
        message: 'Informations générales sur l\'entreprise SNTP.'
      },
      { 
        id: 'contact_info', 
        text: 'Nous contacter',
        route: '/implantations',
        message: 'Trouvez nos coordonnées et implantations.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'visitor_interest'
      }
    ]
  },

  // ==================== PARCOURS JOURNALISTE ====================
  journalist_need: {
    id: 'journalist_need',
    type: 'question',
    message: 'Comment puis-je vous aider ?',
    avatar: 'S',
    options: [
      { 
        id: 'press_releases', 
        text: 'Communiqués de presse',
        nextQuestion: 'journalist_press_type'
      },
      { 
        id: 'media_kit', 
        text: 'Dossier de presse',
        nextQuestion: 'journalist_media_info'
      },
      { 
        id: 'project_info', 
        text: 'Informations projets',
        nextQuestion: 'journalist_project_info'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  journalist_press_type: {
    id: 'journalist_press_type',
    type: 'question',
    message: 'Type de communiqué recherché :',
    avatar: 'S',
    options: [
      { 
        id: 'latest_news', 
        text: 'Actualités récentes',
        route: '/blog',
        message: 'Consultez nos derniers communiqués et actualités sur le blog.'
      },
      { 
        id: 'project_announcements', 
        text: 'Annonces de projets',
        route: '/blog',
        message: 'Découvrez les annonces de nouveaux projets et contrats.'
      },
      { 
        id: 'achievements', 
        text: 'Réalisations et prix',
        route: '/blog',
        message: 'Explorez nos succès et récompenses.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'journalist_need'
      }
    ]
  },

  journalist_media_info: {
    id: 'journalist_media_info',
    type: 'question',
    message: 'Éléments du dossier de presse :',
    avatar: 'S',
    options: [
      { 
        id: 'company_profile', 
        text: 'Profil entreprise',
        route: '/about',
        message: 'Profil complet de SNTP : histoire, chiffres clés, organisation.'
      },
      { 
        id: 'portfolio', 
        text: 'Portfolio projets',
        route: '/projects',
        message: 'Accédez à notre portfolio de projets avec visuels.'
      },
      { 
        id: 'contacts_media', 
        text: 'Contacts presse',
        route: '/implantations',
        message: 'Coordonnées de notre service communication.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'journalist_need'
      }
    ]
  },

  journalist_project_info: {
    id: 'journalist_project_info',
    type: 'question',
    message: 'Informations projet souhaitées :',
    avatar: 'S',
    options: [
      { 
        id: 'ongoing_projects', 
        text: 'Projets en cours',
        route: '/projects',
        message: 'Découvrez nos projets actuellement en réalisation.'
      },
      { 
        id: 'completed_projects', 
        text: 'Projets livrés',
        route: '/projects',
        message: 'Consultez nos réalisations achevées et livrées.'
      },
      { 
        id: 'major_contracts', 
        text: 'Grands contrats',
        route: '/projects',
        message: 'Explorez nos contrats majeurs et projets d\'envergure.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'journalist_need'
      }
    ]
  },

  // ==================== PARCOURS INVESTISSEUR ====================
  investor_interest: {
    id: 'investor_interest',
    type: 'question',
    message: 'Que souhaitez-vous connaître sur SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'company_info', 
        text: 'Informations entreprise',
        nextQuestion: 'investor_company_info'
      },
      { 
        id: 'performance', 
        text: 'Performance et activité',
        nextQuestion: 'investor_performance'
      },
      { 
        id: 'strategic_vision', 
        text: 'Vision stratégique',
        nextQuestion: 'investor_strategy'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'welcome'
      }
    ]
  },

  investor_company_info: {
    id: 'investor_company_info',
    type: 'question',
    message: 'Informations entreprise :',
    avatar: 'S',
    options: [
      { 
        id: 'corporate_profile', 
        text: 'Profil corporatif',
        route: '/about',
        message: 'Découvrez le profil complet de SNTP : structure, gouvernance, historique.'
      },
      { 
        id: 'certifications_quality', 
        text: 'Certifications et qualité',
       route: '/about',
        message: 'Consultez nos certifications et démarches qualité.'
      },
      { 
        id: 'geographic_presence', 
        text: 'Présence géographique',
        route: '/implantations',
        message: 'Visualisez notre couverture territoriale nationale.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'investor_interest'
      }
    ]
  },

  investor_performance: {
    id: 'investor_performance',
    type: 'question',
    message: 'Indicateurs de performance :',
    avatar: 'S',
    options: [
      { 
        id: 'portfolio_size', 
        text: 'Portfolio de projets',
        route: '/projects',
        message: 'Explorez l\'étendue et la diversité de notre portfolio.'
      },
      { 
        id: 'capabilities', 
        text: 'Capacités techniques',
        route: '/services',
        message: 'Découvrez nos capacités de réalisation et moyens techniques.'
      },
      { 
        id: 'references', 
        text: 'Références clients',
        route: '/projects',
        message: 'Consultez nos références et clients prestigieux.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'investor_interest'
      }
    ]
  },

  investor_strategy: {
    id: 'investor_strategy',
    type: 'question',
    message: 'Vision et stratégie SNTP :',
    avatar: 'S',
    options: [
      { 
        id: 'development_axes', 
        text: 'Axes de développement',
        route: '/about',
        message: 'Découvrez notre vision et nos axes stratégiques de développement.'
      },
      { 
        id: 'innovation_rd', 
        text: 'Innovation et R&D',
        route: '/blog',
        message: 'Explorez nos initiatives en innovation et recherche.'
      },
      { 
        id: 'market_positioning', 
        text: 'Positionnement marché',
        route: '/about',
        message: 'Comprenez notre positionnement sur le marché algérien du BTP.'
      },
      { 
        id: 'back', 
        text: 'Retour',
        nextQuestion: 'investor_interest'
      }
    ]
  }
};

export const getInitialQuestion = () => chatbotConfig.welcome;
export const getQuestionById = (questionId) => chatbotConfig[questionId] || null;
export const processAnswer = (questionId, answerId) => {
  const currentQuestion = chatbotConfig[questionId];
  if (!currentQuestion) return null;
  const selectedOption = currentQuestion.options.find(opt => opt.id === answerId);
  if (!selectedOption) return null;
  return {
    nextQuestion: selectedOption.nextQuestion ? chatbotConfig[selectedOption.nextQuestion] : null,
    route: selectedOption.route || null,
    message: selectedOption.message || null,
    option: selectedOption
  };
};

