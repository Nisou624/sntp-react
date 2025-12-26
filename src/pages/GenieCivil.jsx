import React from 'react';
import { FaBuilding, FaHardHat, FaCheckCircle, FaRuler, FaCogs } from 'react-icons/fa';
import './GenieCivil.css';

const GenieCivil = () => {
  // Introduction cards
  const introCards = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: 'Bâtiments Publics',
      text: 'Réalisation de bâtiments administratifs, établissements d\'enseignement et de santé en tous corps d\'états avec respect des normes parasismiques.'
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: 'Ouvrages d\'Art',
      text: 'Construction de ponts, viaducs, passages supérieurs et inférieurs avec maîtrise des techniques de coffrage et de précontrainte.'
    },
    {
      id: 3,
      icon: <FaHardHat />,
      title: 'Expertise Technique',
      text: 'Études de sol, dimensionnement des structures, calculs parasismiques et contrôle qualité selon les normes DTU et RPA.'
    }
  ];

  // Domaines d'intervention
  const domains = [
    {
      id: 1,
      title: 'Terrassement & Fondations',
      text: 'Terrassements en déblai/remblai, fondations superficielles et profondes (pieux, micropieux, barrettes) adaptées aux contraintes géotechniques.'
    },
    {
      id: 2,
      title: 'Gros Œuvre Béton Armé',
      text: 'Réalisation de structures en béton armé : poteaux, poutres, dalles, voiles, avec ferraillage conformes aux plans d\'exécution et normes parasismiques.'
    },
    {
      id: 3,
      title: 'Second Œuvre',
      text: 'Corps d\'états secondaires : maçonnerie, plâtrerie, menuiserie, revêtements, étanchéité et isolation thermique et acoustique.'
    },
    {
      id: 4,
      title: 'VRD & Aménagements',
      text: 'Voiries, réseaux divers (AEP, assainissement, électricité), espaces verts et aménagements extérieurs pour livraison clés en main.'
    },
    {
      id: 5,
      title: 'Ouvrages Hydrauliques',
      text: 'Châteaux d\'eau, réservoirs, stations de pompage et bassins en béton armé avec étanchéité garantie.'
    },
    {
      id: 6,
      title: 'Infrastructures Ferroviaires',
      text: 'Terrassements, ouvrages d\'art, murs de soutènement et plateformes pour projets ferroviaires et métro.'
    }
  ];

  // Méthodologie
  const methodology = [
    {
      id: 1,
      step: '01',
      title: 'Études & Conception',
      text: 'Études géotechniques, relevés topographiques, conception architecturale et plans d\'exécution tous corps d\'états.'
    },
    {
      id: 2,
      step: '02',
      title: 'Préparation de Chantier',
      text: 'Installation de chantier, mobilisation des équipes et matériel, établissement du planning d\'exécution détaillé.'
    },
    {
      id: 3,
      step: '03',
      title: 'Exécution & Contrôle',
      text: 'Réalisation des travaux selon planning avec contrôles qualité permanents : essais béton, ferraillage, étanchéité.'
    },
    {
      id: 4,
      step: '04',
      title: 'Livraison & Garanties',
      text: 'Réception des ouvrages, levée des réserves, mise en service et activation des garanties décennales et biennales.'
    }
  ];

  // Statistiques
  const stats = [
    {
      id: 1,
      value: '500+',
      label: 'Projets Réalisés',
      desc: 'Bâtiments et ouvrages livrés'
    },
    {
      id: 2,
      value: '60 ans',
      label: 'Expérience',
      desc: 'Au service du génie civil'
    },
    {
      id: 3,
      value: '100%',
      label: 'Normes Respectées',
      desc: 'Conformité RPA & DTU'
    },
    {
      id: 4,
      value: '48 wilayas',
      label: 'Couverture Nationale',
      desc: 'Présence sur tout le territoire'
    }
  ];

  return (
    <div className="GenieCivil-page">
      {/* Hero Section */}
      <section 
        className="GenieCivil-hero"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/1B263B/FFFFFF?text=Genie+Civil+SNTP)'
        }}
      >
        <div className="GenieCivil-hero-overlay"></div>
        <div className="GenieCivil-container">
          <div className="GenieCivil-hero-content">
            <p className="GenieCivil-hero-kicker">
              Accueil / Services / Génie Civil
            </p>
            <h1 className="GenieCivil-hero-title">
              Génie Civil
            </h1>
            <p className="GenieCivil-hero-subtitle">
              Conception, construction et réhabilitation d'ouvrages de génie civil : bâtiments publics, 
              ouvrages d'art, infrastructures hydrauliques et ferroviaires avec maîtrise complète des 
              techniques de construction moderne.
            </p>
            <div className="GenieCivil-hero-actions">
              <a href="/contact" className="GenieCivil-btn GenieCivil-btn-primary">
                <FaBuilding style={{ marginRight: '8px' }} />
                Demander un Devis
              </a>
              <a href="/projets" className="GenieCivil-btn GenieCivil-btn-outline">
                Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="GenieCivil-section GenieCivil-intro">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Notre Expertise
            </h2>
            <p className="GenieCivil-section-subtitle">
              La SNTP maîtrise l'ensemble du cycle de construction : de la conception à la livraison 
              clés en main, en passant par tous les corps d'états.
            </p>
          </div>

          <div className="GenieCivil-intro-grid">
            {introCards.map((card) => (
              <div key={card.id} className="GenieCivil-intro-card">
                <div className="GenieCivil-intro-icon">
                  {card.icon}
                </div>
                <h3 className="GenieCivil-intro-title">{card.title}</h3>
                <p className="GenieCivil-intro-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Domaines */}
      <section className="GenieCivil-section GenieCivil-domains">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Domaines d'Intervention
            </h2>
            <p className="GenieCivil-section-subtitle">
              Une gamme complète de prestations pour tous vos projets de génie civil, 
              du terrassement à la finition.
            </p>
          </div>

          <div className="GenieCivil-domains-grid">
            {domains.map((domain) => (
              <div key={domain.id} className="GenieCivil-domain-card">
                <h3 className="GenieCivil-domain-title">{domain.title}</h3>
                <p className="GenieCivil-domain-text">{domain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="GenieCivil-section">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Notre Méthodologie
            </h2>
            <p className="GenieCivil-section-subtitle">
              Un processus éprouvé garantissant qualité, délais et conformité aux normes.
            </p>
          </div>

          <div className="GenieCivil-methodology-timeline">
            {methodology.map((item) => (
              <div key={item.id} className="GenieCivil-timeline-item">
                <div className="GenieCivil-timeline-marker">
                  {item.step}
                </div>
                <div className="GenieCivil-timeline-content">
                  <h3 className="GenieCivil-timeline-title">{item.title}</h3>
                  <p className="GenieCivil-timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="GenieCivil-section GenieCivil-stats">
        <div className="GenieCivil-container">
          <div className="GenieCivil-section-header">
            <h2 className="GenieCivil-section-title">
              Notre Performance
            </h2>
            <p className="GenieCivil-section-subtitle">
              Des chiffres qui témoignent de notre engagement et de notre excellence.
            </p>
          </div>

          <div className="GenieCivil-stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="GenieCivil-stat-card">
                <div className="GenieCivil-stat-value">{stat.value}</div>
                <div className="GenieCivil-stat-label">{stat.label}</div>
                <p className="GenieCivil-stat-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="GenieCivil-section GenieCivil-cta">
        <div className="GenieCivil-container">
          <div className="GenieCivil-cta-inner">
            <div>
              <h2 className="GenieCivil-cta-title">
                Un Projet de Génie Civil ?
              </h2>
              <p className="GenieCivil-cta-subtitle">
                Confiez-nous votre projet et bénéficiez de notre expertise reconnue dans 
                la réalisation d'ouvrages durables et conformes aux normes les plus strictes.
              </p>
            </div>
            <div className="GenieCivil-cta-actions">
              <a href="/contact" className="GenieCivil-btn GenieCivil-btn-primary">
                <FaCheckCircle style={{ marginRight: '8px' }} />
                Contactez-nous
              </a>
              <a href="/brochure-genie-civil.pdf" className="GenieCivil-btn GenieCivil-btn-outline-light">
                Télécharger la Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenieCivil;

