// src/pages/BatimentsIndustriels.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./BatimentsIndustriels.css";

const BatimentsIndustriels = () => {
  return (
    <>
      <Header />
      <main className="bi-page">
        {/* Hero Section */}
        <section className="bi-hero">
          <div className="bi-hero-overlay" />
          <div className="bi-hero-content container">
            <p className="bi-hero-kicker">Infrastructures Industrielles</p>
            <h1 className="bi-hero-title">Bâtiments Industriels</h1>
            <p className="bi-hero-subtitle">
              La SNTP conçoit et réalise des infrastructures industrielles de
              grande envergure : usines de production, hangars métalliques,
              ateliers spécialisés et zones techniques adaptées aux exigences
              les plus rigoureuses du secteur industriel algérien.
            </p>
            <div className="bi-hero-actions">
              <a href="#realisations" className="bi-btn bi-btn-primary">
                Nos réalisations
              </a>
              <a href="#contact" className="bi-btn bi-btn-outline">
                Demander un devis
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bi-section bi-intro">
          <div className="container">
            <div className="bi-section-header">
              <h2 className="bi-section-title">Expertise industrielle reconnue</h2>
              <p className="bi-section-subtitle">
                Fort de plus de 45 ans d'expérience, la SNTP est un acteur
                majeur dans la construction d'infrastructures industrielles en
                Algérie. Notre maîtrise des techniques de construction
                métallique et en béton armé, combinée à notre parc matériel
                performant, nous permet de livrer des projets industriels
                complexes dans les délais impartis.
              </p>
            </div>

            <div className="bi-intro-grid">
              <article className="bi-intro-card">
                <div className="bi-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <h3 className="bi-intro-title">Usines & Unités de Production</h3>
                <p className="bi-intro-text">
                  Construction d'usines de production industrielle, notamment
                  l'usine de tuyaux en béton comprimé de Fornaka (Mostaganem)
                  sur 12 hectares, avec équipements de haute technologie pour
                  production de tuyaux géants à l'échelle nationale.
                </p>
              </article>

              <article className="bi-intro-card">
                <div className="bi-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="bi-intro-title">Hangars & Charpentes Métalliques</h3>
                <p className="bi-intro-text">
                  Réalisation de hangars industriels en charpente métallique
                  légère et lourde, ateliers de production, espaces logistiques
                  et entrepôts avec portées importantes et équipements de levage
                  intégrés (ponts roulants).
                </p>
              </article>

              <article className="bi-intro-card">
                <div className="bi-intro-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="bi-intro-title">Zones Techniques & Installations</h3>
                <p className="bi-intro-text">
                  Études et réalisation de zones techniques industrielles,
                  centrales de production d'énergie, installations spécialisées
                  et bâtiments auxiliaires nécessaires au fonctionnement des
                  complexes industriels.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Réalisations phares */}
        <section id="realisations" className="bi-section bi-projects">
          <div className="container">
            <div className="bi-section-header">
              <h2 className="bi-section-title">Réalisations phares</h2>
              <p className="bi-section-subtitle">
                Des projets d'envergure qui témoignent de notre savoir-faire et
                de notre capacité à livrer des infrastructures industrielles de
                qualité sur l'ensemble du territoire national.
              </p>
            </div>

            <div className="bi-projects-grid">
              <article className="bi-project-card">
                <div className="bi-project-header">
                  <h3 className="bi-project-title">Usine de Tuyaux en Béton - Fornaka</h3>
                  <span className="bi-project-location">Mostaganem</span>
                </div>
                <div className="bi-project-content">
                  <p className="bi-project-desc">
                    Reprise et réhabilitation de l'usine de production de
                    tuyaux en béton comprimé située dans la zone d'activités de
                    Fornaka, commune d'Ain Nouissy. Cette infrastructure de 12
                    hectares est équipée de technologies de pointe pour la
                    production de tuyaux géants destinés aux réseaux hydrauliques.
                  </p>
                  <ul className="bi-project-specs">
                    <li><strong>Superficie :</strong> 12 hectares</li>
                    <li><strong>Capacité :</strong> 360 employés</li>
                    <li><strong>Statut :</strong> Gestion transférée à SNTP</li>
                    <li><strong>Impact :</strong> Autosuffisance nationale en tuyaux</li>
                  </ul>
                </div>
              </article>

              <article className="bi-project-card">
                <div className="bi-project-header">
                  <h3 className="bi-project-title">Zone Technique Militaire</h3>
                  <span className="bi-project-location">National</span>
                </div>
                <div className="bi-project-content">
                  <p className="bi-project-desc">
                    Étude et réalisation de zones techniques pour le Ministère
                    de la Défense Nationale, incluant infrastructures
                    spécialisées, VRD et aménagements sécurisés selon cahier des
                    charges strict et normes militaires.
                  </p>
                  <ul className="bi-project-specs">
                    <li><strong>Type :</strong> Infrastructure technique</li>
                    <li><strong>Client :</strong> Ministère de la Défense Nationale</li>
                    <li><strong>Expertise :</strong> Études + Réalisation</li>
                    <li><strong>Délais :</strong> Respect strict du planning</li>
                  </ul>
                </div>
              </article>

              <article className="bi-project-card">
                <div className="bi-project-header">
                  <h3 className="bi-project-title">Centrales Électriques</h3>
                  <span className="bi-project-location">Djanet, Illizi</span>
                </div>
                <div className="bi-project-content">
                  <p className="bi-project-desc">
                    Travaux de génie civil pour centrales TG mobiles et
                    installations électriques, incluant fondations spéciales,
                    structures en béton armé, dalles techniques et aménagements
                    pour équipements de production énergétique.
                  </p>
                  <ul className="bi-project-specs">
                    <li><strong>Type :</strong> Infrastructure énergétique</li>
                    <li><strong>Région :</strong> Sud algérien (Illizi)</li>
                    <li><strong>Prestations :</strong> Génie civil complet</li>
                    <li><strong>Contraintes :</strong> Conditions climatiques extrêmes</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Types de bâtiments */}
        <section className="bi-section bi-types">
          <div className="container">
            <div className="bi-section-header">
              <h2 className="bi-section-title">Types de bâtiments industriels</h2>
              <p className="bi-section-subtitle">
                La SNTP maîtrise l'ensemble des typologies de constructions
                industrielles, des structures légères aux bâtiments lourds à
                forte contrainte structurelle.
              </p>
            </div>

            <div className="bi-types-grid">
              <div className="bi-type-card">
                <h3 className="bi-type-title">Hangars Métalliques</h3>
                <p className="bi-type-text">
                  Structures en charpente métallique légère ou lourde, avec ou
                  sans fondations, adaptées aux besoins logistiques et de
                  stockage. Possibilité d'intégration de ponts roulants, réseaux
                  sprinklage et installations photovoltaïques.
                </p>
              </div>

              <div className="bi-type-card">
                <h3 className="bi-type-title">Usines de Production</h3>
                <p className="bi-type-text">
                  Bâtiments industriels à usage de production, équipés de
                  fondations renforcées, dalles techniques, réseaux industriels
                  (électricité, eau, gaz, air comprimé) et systèmes de
                  ventilation/climatisation adaptés.
                </p>
              </div>

              <div className="bi-type-card">
                <h3 className="bi-type-title">Ateliers Spécialisés</h3>
                <p className="bi-type-text">
                  Espaces de travail technique pour maintenance, assemblage et
                  fabrication, avec équipements de levage intégrés, installations
                  électriques renforcées et zones de circulation optimisées pour
                  engins et flux logistiques.
                </p>
              </div>

              <div className="bi-type-card">
                <h3 className="bi-type-title">Entrepôts & Plateformes Logistiques</h3>
                <p className="bi-type-text">
                  Espaces de stockage de grande hauteur avec systèmes de
                  rayonnage, quais de chargement, portes sectionnelles
                  industrielles et sols renforcés pour circulation d'engins de
                  manutention lourds.
                </p>
              </div>

              <div className="bi-type-card">
                <h3 className="bi-type-title">Centrales & Installations Techniques</h3>
                <p className="bi-type-text">
                  Bâtiments techniques pour installations énergétiques,
                  centrales de production, sous-stations électriques, salles
                  machines et locaux techniques nécessitant fondations spéciales
                  et isolation acoustique.
                </p>
              </div>

              <div className="bi-type-card">
                <h3 className="bi-type-title">Bâtiments Administratifs Industriels</h3>
                <p className="bi-type-text">
                  Locaux sociaux, bureaux, salles de contrôle, laboratoires et
                  espaces administratifs intégrés aux sites industriels, avec
                  confort thermique et acoustique adapté aux normes du travail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Savoir-faire technique */}
        <section className="bi-section bi-expertise">
          <div className="container">
            <div className="bi-section-header">
              <h2 className="bi-section-title">Savoir-faire technique</h2>
              <p className="bi-section-subtitle">
                Notre expertise technique couvre l'ensemble des phases d'un
                projet industriel, de la conception à la mise en service.
              </p>
            </div>

            <div className="bi-expertise-grid">
              <div className="bi-expertise-item">
                <div className="bi-expertise-number">01</div>
                <h3 className="bi-expertise-title">Études & Engineering</h3>
                <p className="bi-expertise-text">
                  Conception architecturale et structurelle, calculs selon
                  Eurocodes et normes algériennes (RPA2024, RNV2013), études
                  géotechniques, dimensionnement des fondations et notes de
                  calcul détaillées.
                </p>
              </div>

              <div className="bi-expertise-item">
                <div className="bi-expertise-number">02</div>
                <h3 className="bi-expertise-title">Charpente Métallique</h3>
                <p className="bi-expertise-text">
                  Fabrication et montage de structures métalliques, profilés
                  laminés à chaud et PRS (Profilés Reconstitués Soudés),
                  assemblages soudés ou boulonnés, traitement anticorrosion et
                  peinture industrielle.
                </p>
              </div>

              <div className="bi-expertise-item">
                <div className="bi-expertise-number">03</div>
                <h3 className="bi-expertise-title">Génie Civil Lourd</h3>
                <p className="bi-expertise-text">
                  Terrassements, fondations profondes et superficielles,
                  structures en béton armé et précontraint, dalles industrielles
                  renforcées, murs de soutènement et ouvrages de rétention.
                </p>
              </div>

              <div className="bi-expertise-item">
                <div className="bi-expertise-number">04</div>
                <h3 className="bi-expertise-title">Réseaux & VRD</h3>
                <p className="bi-expertise-text">
                  Voirie interne, parkings, aires de manœuvre, réseaux d'eaux
                  usées et pluviales, alimentation électrique HT/BT, éclairage
                  extérieur, réseaux incendie et télécommunications.
                </p>
              </div>

              <div className="bi-expertise-item">
                <div className="bi-expertise-number">05</div>
                <h3 className="bi-expertise-title">Second Œuvre Industriel</h3>
                <p className="bi-expertise-text">
                  Bardage métallique et isolé, couverture étanche, menuiseries
                  industrielles, portes sectionnelles, quais de chargement,
                  systèmes de désenfumage et installations de sécurité incendie.
                </p>
              </div>

              <div className="bi-expertise-item">
                <div className="bi-expertise-number">06</div>
                <h3 className="bi-expertise-title">Équipements Spéciaux</h3>
                <p className="bi-expertise-text">
                  Intégration de ponts roulants et équipements de levage,
                  systèmes de ventilation industrielle, réseaux sprinklage,
                  centrales de traitement d'air et installations photovoltaïques
                  en toiture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages SNTP */}
        <section className="bi-section bi-advantages">
          <div className="container">
            <div className="bi-section-header">
              <h2 className="bi-section-title">Pourquoi choisir la SNTP ?</h2>
              <p className="bi-section-subtitle">
                Un partenaire industriel de confiance, reconnu pour son
                professionnalisme et sa capacité à livrer des projets complexes.
              </p>
            </div>

            <div className="bi-advantages-grid">
              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Expertise éprouvée</h3>
                <p className="bi-advantage-text">
                  Plus de 45 ans d'expérience dans la construction
                  d'infrastructures industrielles à travers tout le territoire
                  algérien, avec gestion de projets d'envergure nationale.
                </p>
              </div>

              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Parc matériel performant</h3>
                <p className="bi-advantage-text">
                  Armada d'équipements spécialisés et de forte capacité :
                  grues, engins de terrassement, centrales à béton, ateliers
                  de préfabrication et logistique intégrée.
                </p>
              </div>

              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Qualité certifiée ISO 9001</h3>
                <p className="bi-advantage-text">
                  Système de management de la qualité certifié garantissant
                  traçabilité, conformité et contrôles rigoureux à chaque étape
                  du projet industriel.
                </p>
              </div>

              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Respect des délais</h3>
                <p className="bi-advantage-text">
                  Organisation rigoureuse, planification détaillée et
                  coordination efficace des corps d'état pour livrer vos
                  infrastructures dans les délais contractuels.
                </p>
              </div>

              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Solutions clés en main</h3>
                <p className="bi-advantage-text">
                  De la conception à la mise en service, la SNTP assure
                  l'intégralité des prestations : études, travaux, équipements
                  et accompagnement post-réception.
                </p>
              </div>

              <div className="bi-advantage-card">
                <h3 className="bi-advantage-title">Main-d'œuvre qualifiée</h3>
                <p className="bi-advantage-text">
                  Équipes d'ingénieurs, techniciens et compagnons spécialisés
                  dans les techniques de construction industrielle métallique
                  et béton armé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="bi-section bi-cta">
          <div className="container bi-cta-inner">
            <div className="bi-cta-text">
              <h2 className="bi-cta-title">Un projet industriel en vue ?</h2>
              <p className="bi-cta-subtitle">
                Que vous planifiez la construction d'une usine, d'un hangar
                logistique ou d'une installation technique, la SNTP met son
                expertise et ses moyens à votre service pour concrétiser votre
                projet industriel dans les meilleures conditions.
              </p>
            </div>
            <div className="bi-cta-actions">
              <a href="/contact" className="bi-btn bi-btn-primary">
                Contacter nos experts
              </a>
              <a href="/services" className="bi-btn bi-btn-outline-light">
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

export default BatimentsIndustriels;

