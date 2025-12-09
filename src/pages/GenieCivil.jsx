// src/pages/GenieCivil.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./GenieCivil.css";

const GenieCivil = () => {
  return (
    <>
      <Header />
      <main className="gc-page">
        {/* Hero Section */}
        <section className="gc-hero">
          <div className="gc-hero-overlay" />
          <div className="gc-hero-content container">
            <p className="gc-hero-kicker">Pôle Génie Civil</p>
            <h1 className="gc-hero-title">Génie Civil & Ouvrages d'Art</h1>
            <p className="gc-hero-subtitle">
              Créée en 1977, la Société Nationale des Travaux Publics (SNTP) est un acteur
              majeur du génie civil en Algérie. Elle met au service des grands projets
              nationaux ses moyens de production performants et une main-d’œuvre
              expérimentée pour la réalisation de bâtiments publics spécialisés, d’ouvrages
              d’art et d’infrastructures stratégiques à l’échelle du territoire.
            </p>
            <div className="gc-hero-actions">
              <a href="#domaines" className="gc-btn gc-btn-primary">
                Explorer nos domaines
              </a>
              <a href="#contact" className="gc-btn gc-btn-outline">
                Demander un devis
              </a>
            </div>
          </div>
        </section>

        {/* Introduction / Présentation */}
        <section className="gc-section gc-intro">
          <div className="container">
            <div className="gc-section-header">
              <h2 className="gc-section-title">Une expertise reconnue</h2>
              <p className="gc-section-subtitle">
                Depuis plus de quatre décennies, la SNTP développe un savoir‑faire reconnu
                dans la construction d’infrastructures routières, aéroportuaires, hydrauliques
                et de bâtiments publics. Adossée à un parc matériel important et à des équipes
                d’ingénieurs et de techniciens qualifiés, l’entreprise est en mesure de
                prendre en charge des projets complexes, de la phase d’études jusqu’à la
                livraison, dans le respect des normes algériennes en vigueur, des exigences
                de sécurité et des contraintes environnementales. Sa politique de
                spécialisation, de renouveau et de persévérance en fait aujourd’hui un modèle
                économique stable, efficace et exemplaire au service du développement
                national.
              </p>
            </div>

            <div className="gc-intro-grid">
              <article className="gc-intro-card">
                <div className="gc-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="gc-intro-title">Bâtiments Publics Spécialisés</h3>
                <p className="gc-intro-text">
                  Réalisation de bâtiments administratifs, équipements publics et
                  établissements d’enseignement ou de santé, en tous corps d’états. La SNTP
                  assure la maîtrise d’ouvrage de bout en bout : terrassements, gros œuvre,
                  second œuvre et VRD, dans le respect des normes parasismiques et des
                  référentiels techniques en vigueur en Algérie.
                </p>
              </article>

              <article className="gc-intro-card">
                <div className="gc-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h3 className="gc-intro-title">Ouvrages d'Art</h3>
                <p className="gc-intro-text">
                  Études et construction d’ouvrages d’art en béton armé ou précontraint :
                  ponts, viaducs, dalots, passages supérieurs et inférieurs, murs de
                  soutènement et ouvrages de protection. La SNTP intervient sur les grands
                  projets d’infrastructures routières et aéroportuaires en apportant des
                  solutions durables et sécurisées.
                </p>
              </article>

              <article className="gc-intro-card">
                <div className="gc-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="gc-intro-title">Travaux de VRD</h3>
                <p className="gc-intro-text">
                  Travaux de voirie et réseaux divers (VRD) et amélioration urbaine : voies
                  d’accès, trottoirs, réseaux d’assainissement et d’adduction, aménagements de
                  placettes publiques et d’espaces collectifs. Ces interventions contribuent à
                  la fonctionnalité et à l’embellissement du tissu urbain.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section id="domaines" className="gc-section gc-domains">
          <div className="container">
            <div className="gc-section-header">
              <h2 className="gc-section-title">Domaines d'intervention</h2>
              <p className="gc-section-subtitle">
                La SNTP intervient sur l’ensemble du cycle de vie des projets de génie civil,
                des études préalables jusqu’à la réception des ouvrages. Forte de ses
                équipements de travaux publics et de son organisation certifiée ISO 9001,
                elle contribue aux grands programmes nationaux en matière de routes,
                autoroutes, aéroports, hydraulique et bâtiments publics.
              </p>
            </div>

            <div className="gc-domains-grid">
              <div className="gc-domain-card">
                <h3 className="gc-domain-title">Bâtiments Publics & Administratifs</h3>
                <p className="gc-domain-text">
                  Construction de bâtiments administratifs, équipements publics, centres de
                  formation, établissements scolaires et universitaires ou bâtiments
                  industriels. La SNTP réalise ces ouvrages en tous corps d’états, depuis les
                  fondations jusqu’aux finitions et aux aménagements extérieurs, dans le
                  respect des délais et des exigences fonctionnelles des maîtres d’ouvrage.
                </p>
              </div>

              <div className="gc-domain-card">
                <h3 className="gc-domain-title">Infrastructures Énergétiques</h3>
                <p className="gc-domain-text">
                  Travaux d’infrastructures routières et autoroutières (terrassements en grande
                  masse, corps de chaussée, ouvrages annexes) ainsi que réalisation
                  d’ouvrages de génie civil aéroportuaire : pistes d’atterrissage,
                  taxiways, aires de stationnement et ouvrages de protection. La SNTP participe
                  ainsi à l’extension et à la modernisation du réseau de transport national.
                </p>
              </div>

              <div className="gc-domain-card">
                <h3 className="gc-domain-title">Ponts & Viaducs</h3>
                <p className="gc-domain-text">
                  Conception et réalisation de ponts, viaducs et dalots en béton armé,
                  précontraint ou à tablier mixte, permettant le franchissement de vallées,
                  oueds, voies ferrées et autres infrastructures. Les équipes de la SNTP
                  maîtrisent les différentes techniques de fondations profondes, de pose de
                  poutres et de construction de tabliers.
                </p>
              </div>

              <div className="gc-domain-card">
                <h3 className="gc-domain-title">Infrastructures Hydrauliques</h3>
                <p className="gc-domain-text">
                  Travaux de génie civil pour les infrastructures hydrauliques : réservoirs de
                  stockage, stations de traitement et de pompage, bassins de rétention,
                  réseaux d’adduction et d’assainissement. Ces ouvrages contribuent à
                  l’alimentation en eau potable, à l’irrigation et à la protection contre les
                  inondations.
                </p>
              </div>

              <div className="gc-domain-card">
                <h3 className="gc-domain-title">VRD & Aménagement Urbain</h3>
                <p className="gc-domain-text">
                  Travaux de voirie et réseaux divers, amélioration urbaine, construction et
                  rénovation de placettes publiques, trottoirs, parkings et espaces
                  piétonniers. La SNTP intervient sur l’ensemble des couches de voirie, la
                  mise en œuvre des revêtements, la pose de bordures et la mise à niveau des
                  réseaux enterrés.
                </p>
              </div>

              <div className="gc-domain-card">
                <h3 className="gc-domain-title">Structures Métalliques</h3>
                <p className="gc-domain-text">
                  Réalisation d’ouvrages de génie civil spécifiques pour les secteurs
                  énergétique, industriel et logistique : massifs de fondation pour
                  équipements, bâtiments techniques, structures métalliques légères,
                  plateformes et bases de vie. La SNTP adapte ses solutions aux besoins
                  particuliers de chaque projet et aux contraintes des sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Méthodologie & Savoir-faire */}
        <section className="gc-section gc-methodology">
          <div className="container">
            <div className="gc-section-header">
              <h2 className="gc-section-title">Notre méthodologie</h2>
              <p className="gc-section-subtitle">
                La SNTP s’appuie sur une organisation intégrée combinant bureau d’études,
                services méthodes, conduite de travaux et contrôle qualité. Cette
                structuration permet de sécuriser chaque phase du projet et d’assurer la
                conformité des ouvrages livrés aux exigences des maîtres d’ouvrage et aux
                normes nationales.
              </p>
            </div>

            <div className="gc-methodology-timeline">
              <div className="gc-timeline-item">
                <div className="gc-timeline-marker">01</div>
                <div className="gc-timeline-content">
                  <h3 className="gc-timeline-title">Études & Conception</h3>
                  <p className="gc-timeline-text">
                    Analyse du cahier des charges, études de faisabilité et d’implantation,
                    études géotechniques et structurelles, dimensionnement selon les normes
                    algériennes et préparation des plans d’exécution. Les contraintes
                    parasismiques, d’exploitation et d’entretien sont intégrées dès la phase de
                    conception.
                  </p>
                </div>
              </div>

              <div className="gc-timeline-item">
                <div className="gc-timeline-marker">02</div>
                <div className="gc-timeline-content">
                  <h3 className="gc-timeline-title">Préparation & Planification</h3>
                  <p className="gc-timeline-text">
                    Élaboration du planning détaillé des travaux, installation de chantier,
                    définition des procédures HSE, mobilisation des équipes, du matériel de
                    travaux publics et des matériaux de construction (agrégats, béton, produits
                    ferreux, etc.). Cette phase garantit une exécution maîtrisée et une bonne
                    coordination des intervenants.
                  </p>
                </div>
              </div>

              <div className="gc-timeline-item">
                <div className="gc-timeline-marker">03</div>
                <div className="gc-timeline-content">
                  <h3 className="gc-timeline-title">Réalisation & Contrôle</h3>
                  <p className="gc-timeline-text">
                    Exécution des terrassements, fondations, ouvrages en béton armé, structures
                    et finitions conformément aux plans d’exécution. Des contrôles qualité
                    réguliers sont réalisés sur chantier et en laboratoire (béton, matériaux,
                    géométrie), dans le cadre d’un système de management certifié ISO 9001, afin
                    d’assurer la conformité et la durabilité des ouvrages.
                  </p>
                </div>
              </div>

              <div className="gc-timeline-item">
                <div className="gc-timeline-marker">04</div>
                <div className="gc-timeline-content">
                  <h3 className="gc-timeline-title">Livraison & Suivi</h3>
                  <p className="gc-timeline-text">
                    Organisation des réceptions provisoires et définitives, constitution des
                    dossiers d’ouvrage exécuté (DOE), mise à disposition de la documentation
                    technique et accompagnement des maîtres d’ouvrage lors de la mise en service.
                    La SNTP reste mobilisée pour les interventions de garantie et le suivi
                    technique des ouvrages livrés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="gc-section gc-cta">
          <div className="container gc-cta-inner">
            <div className="gc-cta-text">
              <h2 className="gc-cta-title">Confiez-nous votre projet</h2>
              <p className="gc-cta-subtitle">
                Vous avez un projet de construction, de réhabilitation ou
                d'ouvrage d'art ? Basée sur une politique de spécialisation, de
                renouveau et de persévérance, la SNTP met à votre disposition
                ses équipes d'ingénieurs, sa main-d'œuvre compétente et ses
                équipements performants pour une solution sur mesure.
              </p>
            </div>
            <div className="gc-cta-actions">
              <a href="/contact" className="gc-btn gc-btn-primary">
                Contacter la SNTP
              </a>
              <a href="/services" className="gc-btn gc-btn-outline-light">
                Découvrir tous nos services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GenieCivil;

