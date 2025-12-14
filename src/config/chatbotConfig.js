/**
 * ============================================================================
 * CONFIGURATION COMPLÈTE DU CHATBOT SNTP
 * ============================================================================
 * Structure: Q0 → Q1 → Q2 → Q3 → Q4 → Destination (Page ou FAQ)
 * 
 * Total: 72 chemins uniques × 4 profils = 288 parcours possibles
 * 24 pages de destination + 9 réponses FAQ
 * ============================================================================
 */

export const chatbotConfig = {
  
  // ========================================================================
  // Q0: QUI ÊTES-VOUS ? (POINT D'ENTRÉE)
  // ========================================================================
  welcome: {
    id: 'welcome',
    type: 'greeting',
    message: 'Bonjour ! Je suis l\'assistant virtuel SNTP. Pour mieux vous orienter, qui êtes-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'visitor', 
        text: 'Visiteur',
        nextQuestion: 'all_profiles_interest'
      },
      { 
        id: 'candidate', 
        text: 'Candidat / Recrutement',
        nextQuestion: 'all_profiles_interest'
      },
      { 
        id: 'partner', 
        text: 'Partenaire/Fournisseur',
        nextQuestion: 'all_profiles_interest'
      },
      { 
        id: 'client', 
        text: 'Client/Maître d\'ouvrage',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  // ========================================================================
  // Q1: QUEL ASPECT VOUS INTÉRESSE ? (TOUS PROFILS)
  // ========================================================================
  all_profiles_interest: {
    id: 'all_profiles_interest',
    type: 'question',
    message: 'Quel aspect de notre entreprise vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'discover_company', 
        text: 'Découvrir l\'entreprise',
        nextQuestion: 'discover_aspect'
      },
      { 
        id: 'services_expertise', 
        text: 'Services et expertises',
        nextQuestion: 'services_domain'
      },
      { 
        id: 'subsidiaries_org', 
        text: 'Filiales et organisation',
        nextQuestion: 'organization_info'
      },
      { 
        id: 'projects_achievements', 
        text: 'Projets et réalisations',
        nextQuestion: 'projects_discover'
      },
      { 
        id: 'commitments_quality', 
        text: 'Engagements et qualité',
        nextQuestion: 'quality_aspect'
      },
      { 
        id: 'contact_info', 
        text: 'Contact et informations',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 1: DÉCOUVRIR L'ENTREPRISE
  // ========================================================================
  discover_aspect: {
    id: 'discover_aspect',
    type: 'question',
    message: 'Quel aspect souhaitez-vous découvrir ?',
    avatar: 'S',
    options: [
      { 
        id: 'homepage', 
        text: 'Page d\'accueil',
        route: '/',
        message: 'Retour à la page d\'accueil de SNTP.'
      },
      { 
        id: 'general_presentation', 
        text: 'Présentation générale',
        nextQuestion: 'general_presentation_detail'
      },
      { 
        id: 'leadership', 
        text: 'Leadership',
        nextQuestion: 'leadership_aspect'
      },
      { 
        id: 'values_culture', 
        text: 'Valeurs et culture',
        nextQuestion: 'values_culture_info'
      },
      { 
        id: 'organization', 
        text: 'Organisation',
        nextQuestion: 'organization_structure'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  general_presentation_detail: {
    id: 'general_presentation_detail',
    type: 'question',
    message: 'Que voulez-vous consulter ?',
    avatar: 'S',
    options: [
      { 
        id: 'overview', 
        text: 'Vue d\'ensemble',
        route: '/',
        message: 'Découvrez la vue d\'ensemble de SNTP sur notre page d\'accueil.'
      },
      { 
        id: 'know_better', 
        text: 'Mieux nous connaître',
        route: '/nous-connaitre',
        message: 'Apprenez-en plus sur SNTP, son histoire et ses valeurs.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'discover_aspect'
      }
    ]
  },

  leadership_aspect: {
    id: 'leadership_aspect',
    type: 'question',
    message: 'Quel aspect du leadership de SNTP vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'ceo_message', 
        text: 'Message du PDG',
        route: '/about',
        message: 'Découvrez le message et la vision du Président Directeur Général.'
      },
      { 
        id: 'executive_team', 
        text: 'L\'équipe dirigeante',
        route: '/nous-connaitre',
        message: 'Rencontrez l\'équipe qui pilote SNTP.'
      },
      { 
        id: 'directions', 
        text: 'Directions',
        route: '/nos-directions',
        message: 'Explorez l\'organisation et les différentes directions de SNTP.'
      },
      { 
        id: 'join_team', 
        text: 'Rejoindre l\'équipe',
        route: '/nous-rejoindre',
        message: 'Découvrez comment rejoindre les équipes de SNTP.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'discover_aspect'
      }
    ]
  },

  values_culture_info: {
    id: 'values_culture_info',
    type: 'question',
    message: 'Que voulez-vous savoir sur nos valeurs et notre culture ?',
    avatar: 'S',
    options: [
      { 
        id: 'commitments', 
        text: 'Engagements',
        route: '/nos-engagements',
        message: 'Découvrez nos engagements qualité, sécurité et RSE.'
      },
      { 
        id: 'company_culture', 
        text: 'Notre culture d\'entreprise',
        route: '/nous-connaitre',
        message: 'Explorez la culture et les valeurs qui animent SNTP.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'discover_aspect'
      }
    ]
  },

  organization_structure: {
    id: 'organization_structure',
    type: 'question',
    message: 'Quelle information recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'directions', 
        text: 'Directions',
        route: '/nos-directions',
        message: 'Découvrez l\'organigramme et les directions de SNTP.'
      },
      { 
        id: 'units', 
        text: 'Unités',
        nextQuestion: 'organization_units'
      },
      { 
        id: 'locations', 
        text: 'Implantations',
        route: '/implantations',
        message: 'Visualisez toutes nos implantations sur le territoire algérien.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'discover_aspect'
      }
    ]
  },

  organization_units: {
    id: 'organization_units',
    type: 'question',
    message: 'Quelle filiale de SNTP recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'sntp_engineering', 
        text: 'SNTP Engineering',
        route: '/sntp-engineering',
        message: 'Découvrez SNTP Engineering, notre bureau d\'études et d\'ingénierie.'
      },
      { 
        id: 'sntp_anabibe', 
        text: 'SNTP Anabibe',
        route: '/sntp-anabibe',
        message: 'Explorez SNTP Anabibe et ses activités.'
      },
      { 
        id: 'sntp_logistique', 
        text: 'SNTP Logistique',
        route: '/sntp-logistique',
        message: 'Découvrez nos services logistiques et de location de matériel.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_structure'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 2: SERVICES ET EXPERTISES
  // ========================================================================
  services_domain: {
    id: 'services_domain',
    type: 'question',
    message: 'Quel domaine vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'overview', 
        text: 'Vue d\'ensemble',
        nextQuestion: 'services_overview'
      },
      { 
        id: 'road_infrastructure', 
        text: 'Infrastructure routière',
        nextQuestion: 'road_infrastructure_service'
      },
      { 
        id: 'civil_engineering', 
        text: 'Génie civil',
        nextQuestion: 'civil_engineering_type'
      },
      { 
        id: 'buildings', 
        text: 'Bâtiments',
        nextQuestion: 'buildings_search'
      },
      { 
        id: 'specialized_works', 
        text: 'Travaux spécialisés',
        nextQuestion: 'specialized_works_type'
      },
      { 
        id: 'support_services', 
        text: 'Services support et logistique',
        nextQuestion: 'support_services_search'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  services_overview: {
    id: 'services_overview',
    type: 'question',
    message: 'Que souhaitez-vous découvrir sur nos services et expertises ?',
    avatar: 'S',
    options: [
      { 
        id: 'all_services', 
        text: 'Tous nos services',
        route: '/services',
        message: 'Explorez l\'ensemble de nos services et domaines d\'expertise.'
      },
      { 
        id: 'expertise', 
        text: 'Expertises',
        route: '/sntp-engineering',
        message: 'Découvrez nos expertises en ingénierie et études techniques.'
      },
      { 
        id: 'achievements', 
        text: 'Nos réalisations',
        route: '/projects',
        message: 'Consultez notre portfolio de projets et réalisations.'
      },
      { 
        id: 'faq', 
        text: 'FAQ',
        route: '/faq',
        message: 'Trouvez les réponses aux questions fréquentes.'
      },
      { 
        id: 'news', 
        text: 'Actualités',
        route: '/blog',
        message: 'Suivez l\'actualité de SNTP et de ses projets.'
      },
      { 
        id: 'multi_lot_projects', 
        text: 'Projets multi-lots ?',
        faq: 'FAQ-8',
        message: 'SNTP réalise des projets multi-lots combinant plusieurs corps d\'état. Nous coordonnons l\'ensemble des travaux (gros œuvre, second œuvre, VRD, réseaux) pour une réalisation clé en main garantissant cohérence technique et respect des délais.'
      },
      { 
        id: 'building_or_tp', 
        text: 'Bâtiment ou TP uniquement ?',
        faq: 'FAQ-2',
        message: 'SNTP intervient à la fois en Bâtiment et en Travaux Publics. Nous sommes une entreprise générale capable de gérer tous types de projets : immeubles résidentiels et commerciaux, équipements publics, routes, ponts, ouvrages hydrauliques et infrastructures ferroviaires.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  road_infrastructure_service: {
    id: 'road_infrastructure_service',
    type: 'question',
    message: 'Quel service d\'infrastructure routière recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'road_works', 
        text: 'Travaux routiers',
        route: '/travaux-routiers',
        message: 'Découvrez nos services en construction et réhabilitation de routes.'
      },
      { 
        id: 'road_maintenance', 
        text: 'Maintenance routière',
        route: '/maintenance-rehabilitation',
        message: 'Explorez nos services de maintenance et réhabilitation des infrastructures.'
      },
      { 
        id: 'civil_engineering', 
        text: 'Génie civil',
        route: '/genie-civil',
        message: 'Consultez nos services en génie civil et ouvrages d\'art.'
      },
      { 
        id: 'buildings', 
        text: 'Bâtiments',
        route: '/batiments',
        message: 'Découvrez nos services en construction de bâtiments.'
      },
      { 
        id: 'see_projects', 
        text: 'Voir nos projets',
        route: '/projects',
        message: 'Explorez nos projets d\'infrastructure routière réalisés.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  civil_engineering_type: {
    id: 'civil_engineering_type',
    type: 'question',
    message: 'Quel type de génie civil ?',
    avatar: 'S',
    options: [
      { 
        id: 'general_civil', 
        text: 'Génie civil général',
        route: '/genie-civil',
        message: 'Découvrez nos services complets en génie civil.'
      },
      { 
        id: 'hydraulic_works', 
        text: 'Ouvrages hydrauliques',
        route: '/hydraulique',
        message: 'Explorez nos réalisations en ouvrages hydrauliques et assainissement.'
      },
      { 
        id: 'industrial_buildings', 
        text: 'Bâtiments industriels',
        route: '/batiments',
        message: 'Consultez nos services en construction de bâtiments industriels.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  buildings_search: {
    id: 'buildings_search',
    type: 'question',
    message: 'Que recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'industrial_buildings', 
        text: 'Bâtiments industriels',
        route: '/batiments',
        message: 'Découvrez nos services en construction de bâtiments industriels.'
      },
      { 
        id: 'civil_building', 
        text: 'Génie civil bâti',
        route: '/genie-civil',
        message: 'Explorez nos services en génie civil pour le bâtiment.'
      },
      { 
        id: 'hydraulic_works', 
        text: 'Ouvrages hydrauliques',
        route: '/hydraulique',
        message: 'Consultez nos réalisations en ouvrages hydrauliques.'
      },
      { 
        id: 'maintenance', 
        text: 'Maintenance',
        route: '/maintenance-rehabilitation',
        message: 'Découvrez nos services de maintenance des bâtiments.'
      },
      { 
        id: 'our_achievements', 
        text: 'Nos réalisations',
        route: '/projects',
        message: 'Explorez notre portfolio de réalisations en bâtiments.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  specialized_works_type: {
    id: 'specialized_works_type',
    type: 'question',
    message: 'Quel type de travaux spécialisés ?',
    avatar: 'S',
    options: [
      { 
        id: 'railway_works', 
        text: 'Travaux ferroviaires',
        route: '/travaux-ferroviaires',
        message: 'Découvrez notre expertise en travaux ferroviaires.'
      },
      { 
        id: 'hydraulic', 
        text: 'Hydraulique',
        route: '/hydraulique',
        message: 'Explorez nos services en hydraulique et assainissement.'
      },
      { 
        id: 'maintenance', 
        text: 'Maintenance',
        route: '/maintenance-rehabilitation',
        message: 'Consultez nos services de maintenance spécialisée.'
      },
      { 
        id: 'projects', 
        text: 'Projets',
        route: '/projects',
        message: 'Découvrez nos projets de travaux spécialisés.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  support_services_search: {
    id: 'support_services_search',
    type: 'question',
    message: 'Quel service support de SNTP recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'design_office_services', 
        text: 'Bureau d\'études (Services)',
        route: '/services',
        message: 'Découvrez nos services de bureau d\'études.'
      },
      { 
        id: 'design_office_engineering', 
        text: 'Bureau d\'études (Engineering)',
        route: '/sntp-engineering',
        message: 'Explorez SNTP Engineering, notre filiale d\'ingénierie.'
      },
      { 
        id: 'equipment_rental', 
        text: 'Location matériel',
        route: '/location-materiel',
        message: 'Consultez notre offre de location de matériel et équipements.'
      },
      { 
        id: 'logistics', 
        text: 'Logistique',
        route: '/sntp-logistique',
        message: 'Découvrez SNTP Logistique et ses services.'
      },
      { 
        id: 'rental_question', 
        text: 'Location matériel ?',
        faq: 'FAQ-4',
        message: 'Oui, SNTP propose la location de matériel via SNTP Logistique. Nous disposons d\'un parc d\'équipements moderne (engins de terrassement, compacteurs, grues, bétonnières, outillage) pour répondre à vos besoins de chantier avec des tarifs compétitifs.'
      },
      { 
        id: 'studies_alone', 
        text: 'Études seules possibles ?',
        faq: 'FAQ-5',
        message: 'SNTP Engineering peut réaliser des missions d\'études indépendantes. Nous intervenons en études préliminaires, APD (Avant-Projet Détaillé), APS (Avant-Projet Sommaire), études d\'exécution, suivis de chantier et expertises techniques.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'services_domain'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 3: FILIALES ET ORGANISATION
  // ========================================================================
  organization_info: {
    id: 'organization_info',
    type: 'question',
    message: 'Quelle filiale ou information organisationnelle recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'sntp_engineering', 
        text: 'SNTP Engineering',
        nextQuestion: 'engineering_info'
      },
      { 
        id: 'sntp_anabibe', 
        text: 'SNTP Anabibe',
        nextQuestion: 'anabibe_info'
      },
      { 
        id: 'sntp_logistique', 
        text: 'SNTP Logistique',
        nextQuestion: 'logistique_info'
      },
      { 
        id: 'our_directions', 
        text: 'Nos directions',
        nextQuestion: 'directions_info'
      },
      { 
        id: 'careers', 
        text: 'Carrières',
        nextQuestion: 'careers_know'
      },
      { 
        id: 'foreign_partners', 
        text: 'Partenaires Étrangers',
        nextQuestion: 'foreign_partners_question'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  engineering_info: {
    id: 'engineering_info',
    type: 'question',
    message: 'Que souhaitez-vous savoir sur SNTP Engineering ?',
    avatar: 'S',
    options: [
      { 
        id: 'presentation', 
        text: 'Présentation',
        route: '/sntp-engineering',
        message: 'Découvrez SNTP Engineering, notre bureau d\'études spécialisé.'
      },
      { 
        id: 'study_services', 
        text: 'Services études',
        route: '/services',
        message: 'Explorez nos services d\'études et d\'ingénierie.'
      },
      { 
        id: 'projects', 
        text: 'Projets',
        route: '/projects',
        message: 'Consultez les projets réalisés par SNTP Engineering.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  anabibe_info: {
    id: 'anabibe_info',
    type: 'question',
    message: 'Quelle information sur SNTP Anabibe recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'presentation', 
        text: 'Présentation',
        route: '/sntp-anabibe',
        message: 'Découvrez SNTP Anabibe et ses activités.'
      },
      { 
        id: 'commitments', 
        text: 'Engagements',
        route: '/nos-engagements',
        message: 'Explorez les engagements de SNTP Anabibe.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  logistique_info: {
    id: 'logistique_info',
    type: 'question',
    message: 'Que souhaitez-vous consulter sur SNTP Logistique ?',
    avatar: 'S',
    options: [
      { 
        id: 'presentation', 
        text: 'Présentation',
        route: '/sntp-logistique',
        message: 'Découvrez SNTP Logistique et ses services.'
      },
      { 
        id: 'services', 
        text: 'Services',
        route: '/services',
        message: 'Explorez les services logistiques de SNTP.'
      },
      { 
        id: 'equipment_rental', 
        text: 'Location matériel',
        route: '/location-materiel',
        message: 'Consultez notre offre de location de matériel.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  directions_info: {
    id: 'directions_info',
    type: 'question',
    message: 'Quelle information ?',
    avatar: 'S',
    options: [
      { 
        id: 'org_chart', 
        text: 'Organigramme',
        route: '/nos-directions',
        message: 'Consultez l\'organigramme et les directions de SNTP.'
      },
      { 
        id: 'leadership', 
        text: 'Leadership',
        route: '/about',
        message: 'Découvrez le leadership et la vision de SNTP.'
      },
      { 
        id: 'join', 
        text: 'Rejoindre',
        route: '/nous-rejoindre',
        message: 'Explorez les opportunités de carrière chez SNTP.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  careers_know: {
    id: 'careers_know',
    type: 'question',
    message: 'Que voulez-vous savoir ?',
    avatar: 'S',
    options: [
      { 
        id: 'culture', 
        text: 'Culture',
        route: '/nous-connaitre',
        message: 'Découvrez la culture d\'entreprise de SNTP.'
      },
      { 
        id: 'apply', 
        text: 'Postuler',
        route: '/nous-rejoindre',
        message: 'Consultez nos offres d\'emploi et postulez.'
      },
      { 
        id: 'our_teams', 
        text: 'Nos équipes',
        route: '/nos-directions',
        message: 'Rencontrez les équipes et directions de SNTP.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  foreign_partners_question: {
    id: 'foreign_partners_question',
    type: 'question',
    message: 'La SNTP collabore-t-elle avec des sociétés étrangères ?',
    avatar: 'S',
    options: [
      { 
        id: 'foreign_partnerships', 
        text: 'Partenariats étrangers ?',
        faq: 'FAQ-7',
        message: 'SNTP développe des partenariats avec des entreprises internationales de renom. Ces collaborations permettent le transfert de technologie et de savoir-faire, notamment dans les domaines des infrastructures, du BIM (Building Information Modeling) et des méthodes constructives innovantes.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'organization_info'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 4: PROJETS ET RÉALISATIONS
  // ========================================================================
  projects_discover: {
    id: 'projects_discover',
    type: 'question',
    message: 'Que souhaitez-vous découvrir ?',
    avatar: 'S',
    options: [
      { 
        id: 'by_technical_domain', 
        text: 'Par domaine technique',
        nextQuestion: 'projects_technical_domain'
      },
      { 
        id: 'references', 
        text: 'Références',
        nextQuestion: 'projects_references'
      },
      { 
        id: 'expertise', 
        text: 'Expertises',
        nextQuestion: 'projects_expertise'
      },
      { 
        id: 'news', 
        text: 'Actualités',
        nextQuestion: 'projects_news'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  projects_technical_domain: {
    id: 'projects_technical_domain',
    type: 'question',
    message: 'Quel domaine technique de nos projets vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'roads', 
        text: 'Routes',
        route: '/travaux-routiers',
        message: 'Découvrez nos projets de travaux routiers.'
      },
      { 
        id: 'railway', 
        text: 'Ferroviaire',
        route: '/travaux-ferroviaires',
        message: 'Explorez nos réalisations en infrastructure ferroviaire.'
      },
      { 
        id: 'civil_engineering', 
        text: 'Génie civil',
        route: '/genie-civil',
        message: 'Consultez nos projets de génie civil.'
      },
      { 
        id: 'hydraulic', 
        text: 'Hydraulique',
        route: '/hydraulique',
        message: 'Découvrez nos ouvrages hydrauliques.'
      },
      { 
        id: 'buildings', 
        text: 'Bâtiments',
        route: '/batiments',
        message: 'Explorez nos réalisations en construction de bâtiments.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'projects_discover'
      }
    ]
  },

  projects_references: {
    id: 'projects_references',
    type: 'question',
    message: 'Que recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'services', 
        text: 'Services',
        route: '/services',
        message: 'Découvrez nos services et nos références par domaine.'
      },
      { 
        id: 'commitments', 
        text: 'Engagements',
        route: '/nos-engagements',
        message: 'Explorez nos engagements qualité et nos certifications.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'projects_discover'
      }
    ]
  },

  projects_expertise: {
    id: 'projects_expertise',
    type: 'question',
    message: 'Quelle expertise ?',
    avatar: 'S',
    options: [
      { 
        id: 'services', 
        text: 'Services',
        route: '/services',
        message: 'Découvrez l\'ensemble de nos expertises et services.'
      },
      { 
        id: 'engineering', 
        text: 'Engineering',
        route: '/sntp-engineering',
        message: 'Explorez les expertises de SNTP Engineering.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'projects_discover'
      }
    ]
  },

  projects_news: {
    id: 'projects_news',
    type: 'question',
    message: 'Quel type d\'actualité ?',
    avatar: 'S',
    options: [
      { 
        id: 'our_news', 
        text: 'Notre Actualité',
        route: '/blog',
        message: 'Suivez l\'actualité de SNTP et de ses projets.'
      },
      { 
        id: 'recent_projects', 
        text: 'Projets récents',
        route: '/projects',
        message: 'Consultez nos projets récents et en cours.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'projects_discover'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 5: ENGAGEMENTS ET QUALITÉ
  // ========================================================================
  quality_aspect: {
    id: 'quality_aspect',
    type: 'question',
    message: 'Quel aspect vous intéresse ?',
    avatar: 'S',
    options: [
      { 
        id: 'quality', 
        text: 'Qualité',
        nextQuestion: 'quality_info'
      },
      { 
        id: 'social_responsibility', 
        text: 'Responsabilité Sociale',
        nextQuestion: 'social_responsibility_know'
      },
      { 
        id: 'sustainable_projects', 
        text: 'Projets durables',
        nextQuestion: 'sustainable_projects_discover'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  quality_info: {
    id: 'quality_info',
    type: 'question',
    message: 'Quelle information qualité de SNTP recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'our_commitments', 
        text: 'Nos engagements',
        route: '/nos-engagements',
        message: 'Découvrez nos engagements qualité, sécurité et environnement.'
      },
      { 
        id: 'iso_certifications', 
        text: 'Certifications ISO ?',
        faq: 'FAQ-1',
        message: 'SNTP est certifiée ISO 9001 (management de la qualité), ISO 14001 (management environnemental) et ISO 45001 (santé et sécurité au travail). Ces certifications garantissent notre engagement envers l\'excellence opérationnelle et la satisfaction client.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'quality_aspect'
      }
    ]
  },

  social_responsibility_know: {
    id: 'social_responsibility_know',
    type: 'question',
    message: 'Que souhaitez-vous savoir ?',
    avatar: 'S',
    options: [
      { 
        id: 'social_actions', 
        text: 'Actions sociales',
        route: '/nos-engagements',
        message: 'Découvrez nos actions sociales et initiatives communautaires.'
      },
      { 
        id: 'read_csr_news', 
        text: 'Lire nos actualités RSE',
        route: '/blog',
        message: 'Suivez nos actualités en matière de responsabilité sociale.'
      },
      { 
        id: 'csr_policy', 
        text: 'Quelle est la politique RSE ?',
        faq: 'FAQ-9',
        message: 'La politique RSE de SNTP s\'articule autour de trois piliers : la préservation de l\'environnement (réduction de l\'empreinte carbone, gestion des déchets), le développement social local (emploi, formation, insertion) et des pratiques éthiques dans tous nos projets.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'quality_aspect'
      }
    ]
  },

  sustainable_projects_discover: {
    id: 'sustainable_projects_discover',
    type: 'question',
    message: 'Que voulez-vous découvrir ?',
    avatar: 'S',
    options: [
      { 
        id: 'commitments', 
        text: 'Engagements',
        route: '/nos-engagements',
        message: 'Explorez nos engagements en matière de développement durable.'
      },
      { 
        id: 'csr_projects', 
        text: 'Projets RSE',
        route: '/projects',
        message: 'Découvrez nos projets respectueux de l\'environnement.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'quality_aspect'
      }
    ]
  },

  // ========================================================================
  // BRANCHE 6: CONTACT ET INFORMATIONS
  // ========================================================================
  contact_info_type: {
    id: 'contact_info_type',
    type: 'question',
    message: 'Quelle information recherchez-vous ?',
    avatar: 'S',
    options: [
      { 
        id: 'contact_us', 
        text: 'Nous contacter',
        nextQuestion: 'contact_us_action'
      },
      { 
        id: 'location', 
        text: 'Localisation',
        nextQuestion: 'location_which'
      },
      { 
        id: 'recruitment', 
        text: 'Recrutement',
        nextQuestion: 'recruitment_info'
      },
      { 
        id: 'faq', 
        text: 'FAQ',
        nextQuestion: 'faq_topic'
      },
      { 
        id: 'news', 
        text: 'Actualités',
        nextQuestion: 'news_type'
      },
      { 
        id: 'tenders', 
        text: 'Appels d\'offres',
        nextQuestion: 'tenders_consult'
      },
      { 
        id: 'legal_info', 
        text: 'Informations légales',
        nextQuestion: 'legal_document'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'all_profiles_interest'
      }
    ]
  },

  contact_us_action: {
    id: 'contact_us_action',
    type: 'question',
    message: 'Que souhaitez-vous faire ?',
    avatar: 'S',
    options: [
      { 
        id: 'locations', 
        text: 'Implantations',
        route: '/implantations',
        message: 'Trouvez nos coordonnées et implantations sur la carte interactive.'
      },
      { 
        id: 'partnership', 
        text: 'Partenariat',
        route: '/nos-engagements',
        message: 'Découvrez comment devenir partenaire de SNTP.'
      },
      { 
        id: 'application', 
        text: 'Candidature',
        route: '/nous-rejoindre',
        message: 'Consultez nos opportunités de carrière et postulez.'
      },
      { 
        id: 'contact_page', 
        text: 'Nous contacter',
        route: '/about-us',
        message: 'Accédez à notre page contact.'
      },
      { 
        id: 'view_tenders', 
        text: 'Appels d\'offres',
        route: '/nos-appels-offres',
        message: 'Découvrez nos appels d\'offres en cours.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  location_which: {
    id: 'location_which',
    type: 'question',
    message: 'Quelle localisation ?',
    avatar: 'S',
    options: [
      { 
        id: 'headquarters', 
        text: 'Siège',
        route: '/nous-connaitre',
        message: 'Découvrez l\'adresse et les coordonnées de notre siège social.'
      },
      { 
        id: 'all_locations', 
        text: 'Toutes',
        route: '/implantations',
        message: 'Visualisez toutes nos implantations sur la carte.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  recruitment_info: {
    id: 'recruitment_info',
    type: 'question',
    message: 'Quelle information sur le recrutement chez SNTP ?',
    avatar: 'S',
    options: [
      { 
        id: 'apply', 
        text: 'Postuler',
        route: '/nous-rejoindre',
        message: 'Découvrez nos offres et postulez en ligne.'
      },
      { 
        id: 'culture', 
        text: 'Culture',
        route: '/nous-connaitre',
        message: 'Explorez la culture d\'entreprise de SNTP.'
      },
      { 
        id: 'teams', 
        text: 'Équipes',
        route: '/nos-directions',
        message: 'Rencontrez nos équipes et directions.'
      },
      { 
        id: 'how_to_apply', 
        text: 'Comment postuler ?',
        faq: 'FAQ-3',
        message: 'Envoyez votre CV et lettre de motivation via notre page Recrutement ou directement à l\'agence régionale concernée. Les candidatures sont étudiées en fonction des besoins. Pour les stages, précisez la période et le domaine souhaité.'
      },
      { 
        id: 'internal_training', 
        text: 'Formations internes ?',
        faq: 'FAQ-6',
        message: 'SNTP valorise la formation continue. Nous proposons des programmes de formation technique (méthodes constructives, logiciels BTP, sécurité) et managériale pour accompagner le développement des compétences de nos collaborateurs tout au long de leur parcours.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  faq_topic: {
    id: 'faq_topic',
    type: 'question',
    message: 'Quel sujet FAQ ?',
    avatar: 'S',
    options: [
      { 
        id: 'general_questions', 
        text: 'Questions générales',
        route: '/faq',
        message: 'Consultez notre FAQ pour les questions courantes.'
      },
      { 
        id: 'services', 
        text: 'Services',
        route: '/services',
        message: 'Informations sur nos services et prestations.'
      },
      { 
        id: 'recruitment', 
        text: 'Recrutement',
        route: '/nous-rejoindre',
        message: 'Questions fréquentes sur le recrutement.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  news_type: {
    id: 'news_type',
    type: 'question',
    message: 'Quel type d\'actualité ?',
    avatar: 'S',
    options: [
      { 
        id: 'discover_news', 
        text: 'Découvrir notre actualité',
        route: '/blog',
        message: 'Suivez toute l\'actualité de SNTP sur notre blog.'
      },
      { 
        id: 'projects', 
        text: 'Projets',
        route: '/projects',
        message: 'Découvrez nos projets en cours et récents.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  tenders_consult: {
    id: 'tenders_consult',
    type: 'question',
    message: 'Que souhaitez-vous consulter ?',
    avatar: 'S',
    options: [
      { 
        id: 'all_tenders', 
        text: 'Tous les appels d\'offres',
        route: '/nos-appels-offres',
        message: 'Consultez tous nos appels d\'offres en cours.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  },

  legal_document: {
    id: 'legal_document',
    type: 'question',
    message: 'Quel document légal ?',
    avatar: 'S',
    options: [
      { 
        id: 'privacy_policy', 
        text: 'Politique de confidentialité',
        route: '/politique-confidentialite',
        message: 'Consultez notre politique de confidentialité.'
      },
      { 
        id: 'legal_notice', 
        text: 'Mentions légales',
        route: '/mentions-legales',
        message: 'Accédez aux mentions légales du site.'
      },
      { 
        id: 'back', 
        text: '← Retour',
        nextQuestion: 'contact_info_type'
      }
    ]
  }
};

// ============================================================================
// FONCTIONS UTILITAIRES
// ============================================================================

/**
 * Récupère la question initiale (point d'entrée)
 */
export const getInitialQuestion = () => chatbotConfig.welcome;

/**
 * Récupère une question par son ID
 * @param {string} questionId - L'ID de la question
 * @returns {object|null} La question ou null si non trouvée
 */
export const getQuestionById = (questionId) => chatbotConfig[questionId] || null;

/**
 * Traite la réponse de l'utilisateur et retourne la prochaine étape
 * @param {string} questionId - L'ID de la question actuelle
 * @param {string} answerId - L'ID de la réponse sélectionnée
 * @returns {object|null} Objet contenant nextQuestion, route, message, faq
 */
export const processAnswer = (questionId, answerId) => {
  const currentQuestion = chatbotConfig[questionId];
  if (!currentQuestion) return null;

  const selectedOption = currentQuestion.options.find(opt => opt.id === answerId);
  if (!selectedOption) return null;

  return {
    nextQuestion: selectedOption.nextQuestion ? chatbotConfig[selectedOption.nextQuestion] : null,
    route: selectedOption.route || null,
    message: selectedOption.message || null,
    faq: selectedOption.faq || null,
    option: selectedOption
  };
};

/**
 * Statistiques de la configuration
 */
export const getChatbotStats = () => {
  const totalQuestions = Object.keys(chatbotConfig).length;
  let totalPaths = 0;
  let totalRoutes = 0;
  let totalFAQs = 0;

  Object.values(chatbotConfig).forEach(question => {
    question.options?.forEach(option => {
      totalPaths++;
      if (option.route) totalRoutes++;
      if (option.faq) totalFAQs++;
    });
  });

  return {
    totalQuestions,
    totalPaths,
    totalRoutes,
    totalFAQs,
    averageOptionsPerQuestion: (totalPaths / totalQuestions).toFixed(2)
  };
};

