export const projects = [
  {
    id: 1,
    nom: "Autoroute Est-Ouest Tronçon Alger",
    type: "travaux_routier",
    status: "en_cours",
    wilaya: "Alger",
    ville: "Rouiba",
    latitude: 36.7389,
    longitude: 3.2847,
    dateDebut: "2023-01-15",
    dateFin: "2025-12-31",
    budget: 5000000000,
    description: "Construction du tronçon autoroutier"
  },
  {
    id: 2,
    nom: "Barrage de Koudiet Acerdoune",
    type: "hydraulique",
    status: "en_cours",
    wilaya: "Bouira",
    ville: "Bouira",
    latitude: 36.3689,
    longitude: 3.9008,
    dateDebut: "2022-06-01",
    dateFin: "2026-06-30",
    budget: 8500000000,
    description: "Construction d'un barrage hydraulique"
  },
  {
    id: 3,
    nom: "Viaduc de Constantine",
    type: "ouvrage_art",
    status: "termine",
    wilaya: "Constantine",
    ville: "Constantine",
    latitude: 36.3650,
    longitude: 6.6147,
    dateDebut: "2020-03-10",
    dateFin: "2024-03-10",
    budget: 3200000000,
    description: "Construction d'un viaduc urbain"
  },
  {
    id: 4,
    nom: "Complexe Résidentiel Oran",
    type: "batiment",
    status: "en_cours",
    wilaya: "Oran",
    ville: "Bir El Djir",
    latitude: 35.7197,
    longitude: -0.5711,
    dateDebut: "2023-09-01",
    dateFin: "2026-09-01",
    budget: 4500000000,
    description: "Construction de logements collectifs"
  },
  {
    id: 5,
    nom: "Réhabilitation Route Nationale 1",
    type: "travaux_routier",
    status: "planifie",
    wilaya: "Blida",
    ville: "Blida",
    latitude: 36.4800,
    longitude: 2.8277,
    dateDebut: "2025-01-15",
    dateFin: "2027-01-15",
    budget: 2800000000,
    description: "Réhabilitation et élargissement"
  }
  // Ajoutez d'autres projets selon vos besoins
];

export const typesProjet = [
  { value: "hydraulique", label: "Hydraulique", color: "#2563eb" },
  { value: "ouvrage_art", label: "Ouvrage d'Art", color: "#7c3aed" },
  { value: "batiment", label: "Bâtiments", color: "#dc2626" },
  { value: "travaux_routier", label: "Travaux Routiers", color: "#ea580c" },
  { value: "infrastructure", label: "Infrastructure", color: "#16a34a" },
  { value: "amenagement", label: "Aménagement", color: "#ca8a04" }
];

export const statusProjet = [
  { value: "planifie", label: "Planifié", color: "#94a3b8" },
  { value: "en_cours", label: "En cours", color: "#3b82f6" },
  { value: "termine", label: "Terminé", color: "#22c55e" },
  { value: "suspendu", label: "Suspendu", color: "#f59e0b" },
  { value: "annule", label: "Annulé", color: "#ef4444" }
];

