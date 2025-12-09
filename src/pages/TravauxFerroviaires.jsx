// src/pages/TravauxFerroviaires.jsx
import React from "react";
import "./TravauxFerroviaires.css";

const TravauxFerroviaires = () => {
  return (
    <main className="tf-page">
      {/* Hero section */}
      <section className="tf-hero">
        <div className="tf-hero-overlay" />
        <div className="tf-hero-content container">
          <p className="tf-hero-kicker">Pôle Infrastructures Ferroviaires</p>
          <h1 className="tf-hero-title">Travaux ferroviaires</h1>
          <p className="tf-hero-subtitle">
            La SNTP met son expertise en génie civil et son armada de matériel
            au service de la réalisation et de la modernisation des
            infrastructures ferroviaires à l'échelle nationale.
          </p>
          <div className="tf-hero-actions">
            <a href="#activites" className="tf-btn tf-btn-primary">
              Découvrir nos activités
            </a>
            <a href="#contact" className="tf-btn tf-btn-outline">
              Discuter de votre projet
            </a>
          </div>
        </div>
      </section>

      {/* Présentation générale */}
      <section className="tf-section tf-intro container">
        <div className="tf-section-header">
          <h2 className="tf-section-title">Une offre ferroviaire intégrée</h2>
          <p className="tf-section-subtitle">
            Forte de plusieurs décennies d'expérience dans les travaux
            d'infrastructures, la SNTP intervient sur l'ensemble du cycle de
            vie d'un projet ferroviaire : études d'exécution, travaux de
            terrassement, réalisation de la plate-forme, ouvrages d'art,
            pose de voie et entretien.
          </p>
        </div>

        <div className="tf-intro-grid">
          <div className="tf-intro-card">
            <h3 className="tf-intro-title">Génie civil ferroviaire</h3>
            <p className="tf-intro-text">
              Réalisation de plates-formes ferroviaires complètes : terrassements
              en déblais/remblais, couches de forme, drainage et ouvrages
              hydrauliques associés, en respectant les exigences géométriques
              et géotechniques des lignes modernes.
            </p>
          </div>
          <div className="tf-intro-card">
            <h3 className="tf-intro-title">Réseau national en expansion</h3>
            <p className="tf-intro-text">
              Les investissements structurants de l'État dans le transport
              ferroviaire nécessitent des acteurs capables d'intervenir sur
              des linéaires importants et dans des environnements variés,
              du Nord dense au Haut-Plateau et au Sud.
            </p>
          </div>
          <div className="tf-intro-card">
            <h3 className="tf-intro-title">Armada de matériel</h3>
            <p className="tf-intro-text">
              La SNTP dispose d'un parc d'engins spécialisés et de forte capacité
              qui lui permet de tenir les cadences de chantier, même sur des
              projets lourds combinant voies ferrées, routes et ouvrages d'art.
            </p>
          </div>
        </div>
      </section>

      {/* Activités principales */}
      <section id="activites" className="tf-section tf-activities">
        <div className="container">
          <div className="tf-section-header">
            <h2 className="tf-section-title">Domaines d'intervention</h2>
            <p className="tf-section-subtitle">
              Les équipes SNTP interviennent sur toutes les phases clés d'un
              projet ferroviaire, depuis la préparation du corridor jusqu'au
              suivi de l'exploitation.
            </p>
          </div>

          <div className="tf-activities-grid">
            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Terrassements & plate-forme</h3>
              <p className="tf-activity-text">
                Ouverture de tracés, déblais/remblais, stabilité des talus,
                traitement de sols, couches de forme et couches de protection
                de la plate-forme ferroviaire, avec maîtrise des déformations
                différées et du drainage longitudinal et transversal.
              </p>
            </article>

            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Ouvrages d'art ferroviaires</h3>
              <p className="tf-activity-text">
                Construction de ponts-rails, viaducs, passages inférieurs et
                supérieurs, murs de soutènement et ouvrages hydrauliques
                nécessaires au bon fonctionnement et à la pérennité de la
                ligne ferroviaire.
              </p>
            </article>

            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Pose de voie & superstructure</h3>
              <p className="tf-activity-text">
                Mise en place du ballast, dressage, nivellement, pose des
                traverses et des rails, soudage, réglage et bourrage de la
                géométrie de voie afin d'atteindre les performances exigées
                en vitesse et en confort.
              </p>
            </article>

            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Réhabilitation & entretien</h3>
              <p className="tf-activity-text">
                Opérations de renouvellement de voie, renforcement de
                plate-forme, réparation d'ouvrages d'art, reprofilage et
                bourrage mécanique pour rallonger la durée de vie de
                l'infrastructure ferroviaire existante.
              </p>
            </article>

            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Interfaces routières & hydrauliques</h3>
              <p className="tf-activity-text">
                Réalisation coordonnée des accès routiers, déviations, chemins
                d'exploitation, bassins de rétention et ouvrages de franchissement,
                en s'appuyant sur l'expertise historique de la SNTP en travaux
                routiers et hydrauliques.
              </p>
            </article>

            <article className="tf-activity-card">
              <h3 className="tf-activity-title">Assistance à la maîtrise d'ouvrage</h3>
              <p className="tf-activity-text">
                Appui technique à la définition des solutions constructives,
                à la planification des phasages, au suivi de la conformité et
                à la coordination avec les autres corps d'état intervenant sur
                la ligne ferroviaire.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Parc matériel ferroviaire */}
      <section className="tf-section tf-equipment">
        <div className="container">
          <div className="tf-section-header">
            <h2 className="tf-section-title">Un parc matériel dimensionné</h2>
            <p className="tf-section-subtitle">
              L'armada de matériel de la SNTP couvre à la fois les besoins
              lourds de terrassement et les opérations fines sur la voie,
              garantissant productivité et régularité d'exécution.
            </p>
          </div>

          <div className="tf-equipment-grid">
            <div className="tf-equipment-block">
              <h3 className="tf-equipment-title">Terrassement & plate-forme</h3>
              <ul className="tf-equipment-list">
                <li>Bulldozers, pelles hydrauliques grande capacité</li>
                <li>Niveleuses, compacteurs lisses et pieds dameurs</li>
                <li>Tracteurs et dumpers pour le transport des déblais</li>
              </ul>
            </div>
            <div className="tf-equipment-block">
              <h3 className="tf-equipment-title">Travaux de voie</h3>
              <ul className="tf-equipment-list">
                <li>Trains de pose de voie et wagons de transport de rails</li>
                <li>Bourreuses mécaniques pour dressage et nivellement</li>
                <li>Engins de reprofilage et de réglage du ballast</li>
              </ul>
            </div>
            <div className="tf-equipment-block">
              <h3 className="tf-equipment-title">Ouvrages d'art & logistique</h3>
              <ul className="tf-equipment-list">
                <li>Grues mobiles et grues sur chenilles</li>
                <li>Centrales à béton, coffrages et équipements de levage</li>
                <li>Ateliers mobiles pour maintenance des équipements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à action / Contact */}
      <section id="contact" className="tf-section tf-contact">
        <div className="container tf-contact-inner">
          <div className="tf-contact-text">
            <h2 className="tf-contact-title">Parlons de votre projet ferroviaire</h2>
            <p className="tf-contact-subtitle">
              Vous préparez un projet de nouvelle ligne, de modernisation ou de
              réhabilitation d'infrastructure ferroviaire ? La SNTP met ses
              équipes et son parc matériel à votre disposition pour concevoir
              un schéma d'intervention adapté.
            </p>
          </div>
          <div className="tf-contact-actions">
            <a href="/contact" className="tf-btn tf-btn-primary">
              Contacter la SNTP
            </a>
            <a href="/services" className="tf-btn tf-btn-outline">
              Découvrir tous nos métiers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TravauxFerroviaires;

