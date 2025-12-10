import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Lightbulb
} from 'lucide-react';
import './NousRejoindre.css';

const NousRejoindre = () => {
  const [scrolled, setScrolled] = useState(false);

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
