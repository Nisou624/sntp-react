export const projectsData = [
  {
    id: 1,
    title: 'Autoroute Est-Ouest',
    category: 'routes',
    image: '/assets/images/project-autoroute.jpg',
    location: 'Alger - Oran',
    year: '2023',
    status: 'completed',
    description: "Tronçon de 150km de l'autoroute reliant l'Est à l'Ouest du pays",
    coordinates: [36.7538, 3.0588]
  },
  {
    id: 2,
    title: 'Complexe Résidentiel Les Vergers',
    category: 'batiments',
    image: '/assets/images/project-residential.jpg',
    location: 'Alger',
    year: '2024',
    status: 'in_progress',
    description: '500 logements haut standing avec commodités',
    coordinates: [36.7372, 3.0865]
  },
  {
    id: 3,
    title: 'Pont de Béjaïa',
    category: 'ouvrages',
    image: '/assets/images/project-bridge.jpg',
    location: 'Béjaïa',
    year: '2023',
    status: 'completed',
    description: 'Pont suspendu de 800m reliant deux rives',
    coordinates: [36.7525, 5.0556]
  },
  {
    id: 4,
    title: 'Barrage de Beni Haroun',
    category: 'hydraulique',
    image: '/assets/images/project-dam.jpg',
    location: 'Mila',
    year: '2022',
    status: 'completed',
    description: "Barrage d'une capacité de 960 millions de m³",
    coordinates: [36.4504, 6.2640]
  },
  {
    id: 5,
    title: 'Centre Commercial Ardis',
    category: 'batiments',
    image: '/assets/images/project-mall.jpg',
    location: 'Alger',
    year: '2024',
    status: 'in_progress',
    description: 'Centre commercial de 50,000 m² sur 4 niveaux',
    coordinates: [36.7145, 3.1466]
  },
  {
    id: 6,
    title: 'Route Nationale N1',
    category: 'routes',
    image: '/assets/images/project-road.jpg',
    location: 'Ghardaïa - Tamanrasset',
    year: '2023',
    status: 'in_progress',
    description: 'Réhabilitation de 200km de route nationale',
    coordinates: [32.4911, 3.6676]
  },
  {
    id: 7,
    title: 'Usine Pharmaceutique',
    category: 'industriel',
    image: '/assets/images/project-factory.jpg',
    location: 'Constantine',
    year: '2024',
    status: 'in_progress',
    description: 'Complexe industriel de production pharmaceutique',
    coordinates: [36.3650, 6.6147]
  },
  {
    id: 8,
    title: "Station d'Épuration",
    category: 'hydraulique',
    image: '/assets/images/project-water.jpg',
    location: 'Oran',
    year: '2023',
    status: 'completed',
    description: 'Station de traitement des eaux usées de 500,000 m³/jour',
    coordinates: [35.6976, -0.6337]
  },
  {
    id: 9,
    title: 'Viaduc de Tizi Ouzou',
    category: 'ouvrages',
    image: '/assets/images/project-viaduc.jpg',
    location: 'Tizi Ouzou',
    year: '2022',
    status: 'completed',
    description: 'Viaduc de 1,2km à 4 voies',
    coordinates: [36.7118, 4.0493]
  }
];

export const categories = [
  { id: 'all', label: 'Tous les Projets', icon: '🏗️' },
  { id: 'routes', label: 'Travaux Routiers', icon: '🛣️' },
  { id: 'batiments', label: 'Bâtiments', icon: '🏢' },
  { id: 'ouvrages', label: "Ouvrages d'Art", icon: '🌉' },
  { id: 'hydraulique', label: 'Hydraulique', icon: '💧' },
  { id: 'industriel', label: 'Industriel', icon: '🏭' }
];

export const statusOptions = [
  { id: 'all', label: 'Tous les statuts' },
  { id: 'completed', label: 'Terminés' },
  { id: 'in_progress', label: 'En cours' }
];

