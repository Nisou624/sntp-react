/**
 * ============================================================================
 * BASE DE DONNÉES FAQ - SNTP
 * ============================================================================
 * Contient toutes les réponses FAQ détaillées référencées dans le chatbot
 * ============================================================================
 */

export const faqDatabase = {
  'FAQ-1': {
    id: 'FAQ-1',
    question: 'SNTP possède-t-elle des certifications ISO ?',
    shortAnswer: 'SNTP est certifiée ISO 9001, ISO 14001 et ISO 45001.',
    detailedAnswer: `SNTP est certifiée ISO 9001 (management de la qualité), ISO 14001 (management environnemental) et ISO 45001 (santé et sécurité au travail). 

Ces certifications garantissent notre engagement envers l'excellence opérationnelle, la satisfaction client, le respect de l'environnement et la sécurité de nos collaborateurs.

Elles sont auditées annuellement par des organismes certificateurs indépendants.`,
    category: 'Qualité',
    relatedPages: ['/nos-engagements', '/about'],
    keywords: ['ISO', 'certification', 'qualité', 'environnement', 'sécurité']
  },

  'FAQ-2': {
    id: 'FAQ-2',
    question: 'SNTP intervient-elle uniquement en bâtiment ou travaux publics ?',
    shortAnswer: 'SNTP intervient à la fois en Bâtiment et en Travaux Publics.',
    detailedAnswer: `SNTP est une entreprise générale de construction capable de gérer tous types de projets :

**Bâtiment :**
- Immeubles résidentiels et commerciaux
- Équipements publics (écoles, hôpitaux, administrations)
- Bâtiments industriels

**Travaux Publics :**
- Routes et autoroutes
- Ponts et ouvrages d'art
- Ouvrages hydrauliques
- Infrastructures ferroviaires

Notre polyvalence nous permet de réaliser des projets multi-lots combinant bâtiment et TP.`,
    category: 'Services',
    relatedPages: ['/services', '/projects'],
    keywords: ['bâtiment', 'travaux publics', 'TP', 'construction', 'infrastructure']
  },

  'FAQ-3': {
    id: 'FAQ-3',
    question: 'Comment postuler chez SNTP ?',
    shortAnswer: 'Envoyez votre CV via notre page Recrutement ou directement à l\'agence régionale.',
    detailedAnswer: `**Processus de candidature :**

1. **Candidature en ligne :** Consultez les offres sur notre page "Nous Rejoindre" et postulez directement
2. **Candidature spontanée :** Envoyez votre CV et lettre de motivation à l'agence régionale concernée
3. **Pour les stages :** Précisez la période, le domaine et joignez une attestation de l'établissement

**Ce que nous recherchons :**
- Compétences techniques et/ou managériales
- Esprit d'équipe et d'initiative
- Engagement envers la qualité et la sécurité

Les candidatures sont étudiées en fonction des besoins actuels et des projets à venir.`,
    category: 'Recrutement',
    relatedPages: ['/nous-rejoindre', '/implantations'],
    keywords: ['postuler', 'recrutement', 'candidature', 'CV', 'emploi', 'stage']
  },

  'FAQ-4': {
    id: 'FAQ-4',
    question: 'SNTP propose-t-elle la location de matériel ?',
    shortAnswer: 'Oui, via SNTP Logistique avec un parc d\'équipements moderne.',
    detailedAnswer: `**SNTP Logistique** propose la location de matériel et équipements de chantier :

**Engins disponibles :**
- Engins de terrassement (pelles, bulldozers, chargeuses)
- Compacteurs et rouleaux
- Grues et appareils de levage
- Bétonnières et centrales à béton
- Outillage et petit matériel

**Avantages :**
- Parc récent et bien entretenu
- Maintenance assurée
- Tarifs compétitifs
- Disponibilité rapide
- Accompagnement technique

Contactez SNTP Logistique pour un devis personnalisé.`,
    category: 'Services',
    relatedPages: ['/location-materiel', '/sntp-logistique'],
    keywords: ['location', 'matériel', 'équipement', 'engins', 'logistique']
  },

  'FAQ-5': {
    id: 'FAQ-5',
    question: 'SNTP Engineering peut-elle réaliser uniquement des études sans travaux ?',
    shortAnswer: 'Oui, SNTP Engineering réalise des missions d\'études indépendantes.',
    detailedAnswer: `**SNTP Engineering** intervient sur des missions d'études seules :

**Types d'études proposées :**
- Études préliminaires et de faisabilité
- APS (Avant-Projet Sommaire)
- APD (Avant-Projet Détaillé)
- Études d'exécution (plans techniques détaillés)
- Études de structure (calculs, dimensionnement)
- Expertises techniques

**Domaines d'intervention :**
- Bâtiments (tous types)
- Infrastructures routières
- Ouvrages d'art
- Hydraulique

Nos études respectent les normes algériennes et internationales, avec utilisation du BIM pour les projets complexes.`,
    category: 'Services',
    relatedPages: ['/sntp-engineering', '/services'],
    keywords: ['études', 'engineering', 'bureau d\'études', 'ingénierie', 'conception']
  },

  'FAQ-6': {
    id: 'FAQ-6',
    question: 'SNTP propose-t-elle des formations internes à ses employés ?',
    shortAnswer: 'Oui, SNTP propose des formations techniques et managériales continues.',
    detailedAnswer: `**Programme de formation SNTP :**

**Formations techniques :**
- Méthodes constructives et nouvelles technologies
- Logiciels BTP (AutoCAD, BIM, logiciels de gestion)
- Sécurité et prévention des risques
- Contrôle qualité et normes
- Conduite d'engins et CACES

**Formations managériales :**
- Management d'équipe et leadership
- Gestion de projets (planification, budget)
- Communication et relations clients
- Droit du travail et RH

**Organisation :**
- Sessions en interne ou chez des organismes partenaires
- Adaptation aux besoins de chaque poste
- Plan de formation annuel par direction
- Accompagnement des évolutions de carrière

La formation continue est un pilier de notre politique RH.`,
    category: 'Recrutement',
    relatedPages: ['/nous-connaitre', '/nos-directions'],
    keywords: ['formation', 'développement', 'compétences', 'carrière', 'apprentissage']
  },

  'FAQ-7': {
    id: 'FAQ-7',
    question: 'SNTP collabore-t-elle avec des entreprises étrangères ?',
    shortAnswer: 'Oui, SNTP développe des partenariats internationaux stratégiques.',
    detailedAnswer: `**Partenariats internationaux SNTP :**

**Objectifs des collaborations :**
- Transfert de technologie et de savoir-faire
- Échange de bonnes pratiques
- Accès à des équipements et méthodes innovantes
- Formation des équipes
- Réalisation de projets d'envergure

**Domaines de partenariat :**
- Infrastructures routières et ferroviaires
- BIM et digitalisation
- Méthodes constructives innovantes
- Ouvrages d'art complexes
- Gestion de projets internationaux

**Zones géographiques :**
- Europe (France, Italie, Espagne)
- Moyen-Orient
- Asie (Chine, Turquie)

Ces partenariats renforcent notre compétitivité et notre capacité à réaliser des projets complexes selon les standards internationaux.`,
    category: 'Organisation',
    relatedPages: ['/about', '/nos-engagements'],
    keywords: ['partenariat', 'international', 'collaboration', 'étranger', 'transfert']
  },

  'FAQ-8': {
    id: 'FAQ-8',
    question: 'SNTP peut-elle gérer des projets multi-lots ?',
    shortAnswer: 'Oui, SNTP réalise des projets multi-lots en maîtrise d\'œuvre globale.',
    detailedAnswer: `**Gestion de projets multi-lots par SNTP :**

**Notre approche :**
SNTP coordonne l'ensemble des corps d'état pour une réalisation clé en main :
- Gros œuvre et structure
- Second œuvre et finitions
- Corps d'état techniques (électricité, plomberie, CVC)
- VRD et aménagements extérieurs
- Réseaux et fluides

**Avantages pour le client :**
- Interlocuteur unique
- Cohérence technique garantie
- Optimisation des délais
- Maîtrise des coûts
- Responsabilité globale

**Méthode de travail :**
1. Coordination technique et administrative
2. Planning intégré et suivi centralisé
3. Contrôle qualité à chaque étape
4. Gestion des interfaces entre lots
5. Livraison conforme aux attentes

Idéal pour les projets d'équipements publics, centres commerciaux et ensembles résidentiels.`,
    category: 'Services',
    relatedPages: ['/services', '/projects'],
    keywords: ['multi-lots', 'coordination', 'clé en main', 'maîtrise d\'œuvre', 'global']
  },

  'FAQ-9': {
    id: 'FAQ-9',
    question: 'Quelle est la politique RSE de SNTP ?',
    shortAnswer: 'La RSE de SNTP repose sur l\'environnement, le social et l\'éthique.',
    detailedAnswer: `**Politique RSE (Responsabilité Sociétale d'Entreprise) SNTP :**

**1. Pilier Environnemental :**
- Réduction de l'empreinte carbone
- Gestion responsable des déchets de chantier
- Économie des ressources (eau, énergie)
- Utilisation de matériaux durables
- Prévention des pollutions

**2. Pilier Social :**
- Emploi local et insertion professionnelle
- Formation et développement des compétences
- Santé et sécurité au travail
- Égalité des chances
- Soutien aux communautés locales

**3. Pilier Éthique :**
- Transparence et intégrité
- Relations équitables avec les fournisseurs
- Respect des normes et réglementations
- Dialogue avec les parties prenantes

**Actions concrètes :**
- Projets éco-responsables
- Programmes de formation continue
- Initiatives caritatives et sociales
- Reporting RSE annuel

Notre objectif : concilier performance économique et impact positif sur la société et l'environnement.`,
    category: 'Engagements',
    relatedPages: ['/nos-engagements', '/blog'],
    keywords: ['RSE', 'responsabilité sociale', 'environnement', 'durable', 'éthique']
  }
};

/**
 * Récupère une FAQ par son ID
 * @param {string} faqId - L'ID de la FAQ (ex: 'FAQ-1')
 * @returns {object|null} L'objet FAQ ou null
 */
export const getFAQById = (faqId) => faqDatabase[faqId] || null;

/**
 * Recherche de FAQs par mot-clé
 * @param {string} keyword - Le mot-clé à rechercher
 * @returns {array} Liste des FAQs correspondantes
 */
export const searchFAQByKeyword = (keyword) => {
  return Object.values(faqDatabase).filter(faq =>
    faq.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase())) ||
    faq.question.toLowerCase().includes(keyword.toLowerCase())
  );
};

/**
 * Récupère toutes les FAQs d'une catégorie
 * @param {string} category - La catégorie
 * @returns {array} Liste des FAQs de la catégorie
 */
export const getFAQsByCategory = (category) => {
  return Object.values(faqDatabase).filter(faq => faq.category === category);
};

/**
 * Récupère toutes les catégories de FAQ
 * @returns {array} Liste des catégories uniques
 */
export const getAllFAQCategories = () => {
  return [...new Set(Object.values(faqDatabase).map(faq => faq.category))];
};

/**
 * Statistiques FAQ
 */
export const getFAQStats = () => {
  return {
    totalFAQs: Object.keys(faqDatabase).length,
    categories: getAllFAQCategories(),
    totalKeywords: Object.values(faqDatabase).reduce((sum, faq) => sum + faq.keywords.length, 0)
  };
};

