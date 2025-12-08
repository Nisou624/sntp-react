import React, { useState } from 'react';
import { FaInfoCircle, FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  // État pour gérer les accordéons
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // 4 cartes FAQ principales
  const faqCards = [
    {
      id: 1,
      title: "Êtes-vous certifiés ISO ? Si oui, pour quelles activités ?",
      content: "Oui, la Société Nationale des Travaux Publics (SNTP) est certifiée pour ses activités :\n• ISO 9001:2015 - Management de la qualité\n• ISO 14001:2015 - Management environnemental\n• ISO 45001:2018 - Santé et sécurité au travail"
    },
    {
      id: 2,
      title: "Intervenez-vous uniquement dans les travaux publics ou également dans le bâtiment ?",
      content: "La SNTP est titulaire d'un certificat de qualification en bâtiment comme activité principale catégorie n° 9, agréé par le Ministère de l'Habitat, de l'Urbanisme et de la Ville, ce qui renforce sa légitimité dans ce domaine."
    },
    {
      id: 3,
      title: "Comment puis-je postuler pour un emploi ou un stage à la SNTP ?",
      content: "Les candidatures (emplois ou stages) se font via le site officiel, les annonces publiques ou par email à la DRH, accompagnées d'un CV, d'une lettre de motivation et des documents justificatifs. Un entretien ou test peut suivre selon le poste."
    },
    {
      id: 4,
      title: "Proposez-vous la location de matériel ou d'engins de chantier ?",
      content: "Oui, la (SNTP) propose la location de matériel professionnel et d'engins de chantier à destination des entreprises du BTP et des institutions. La location est possible selon les besoins du client. Il suffit de contacter la Direction Commerciale."
    }
  ];

  // Questions accordéon
  const accordionQuestions = [
    {
      id: 1,
      title: "Proposez-vous des services d'étude indépendamment de la réalisation ?",
      content: "Oui, notre bureau d'étude SNTP ENGINEERING peut intervenir uniquement pour la conception ou les études techniques."
    },
    {
      id: 2,
      title: "Offrez-vous des formations internes pour vos employés ?",
      content: "Oui, la SNTP assure régulièrement des formations techniques et de sécurité pour son personnel."
    },
    {
      id: 3,
      title: "La SNTP collabore-t-elle avec des sociétés étrangères ?",
      content: "Oui, selon les projets et accords, la SNTP peut établir des partenariats techniques ou industriels."
    },
    {
      id: 4,
      title: "Êtes-vous capables de gérer des projets multi-lots ?",
      content: "Oui, grâce à nos moyens humains, techniques et nos directions régionales (pôles répartis sur le territoire), nous assurons des projets en lots séparés ou en marché global."
    },
    {
      id: 5,
      title: "Avez-vous une politique RSE (responsabilité sociétale) ?",
      content: "Oui, la SNTP intègre les principes de la RSE dans ses engagements humains, sociaux et environnementaux."
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <header className="faq-hero-section">
        <div className="faq-hero-overlay"></div>
        <div className="container faq-hero-content">
          <h4 className="faq-hero-subtitle">Des Questions Et Des Réponses</h4>
          <h1 className="faq-hero-title">FAQ</h1>
          <div className="faq-hero-divider"></div>
        </div>
      </header>

      {/* Section centrale blanche avec icon */}
      <section className="faq-intro-section">
        <div className="container">
          <div className="faq-intro-card">
            <div className="faq-intro-icon-wrapper">
              <FaInfoCircle className="faq-intro-icon" />
            </div>
            <h4 className="faq-intro-label">FAQ</h4>
            <h2 className="faq-intro-title">Questions Fréquentes</h2>
            <div className="faq-intro-divider"></div>
            <p className="faq-intro-description">
              Vous avez des questions ? Nous avons les réponses ! Consultez cette section pour trouver rapidement des informations sur nos services, nos produits ou nos démarches.
            </p>
            <div className="faq-cards-grid">
              {faqCards.map((card) => (
                <div key={card.id} className="faq-card-item">
                  <h3 className="faq-card-title">{card.title}</h3>
                  <p className="faq-card-content">{card.content}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 cartes FAQ */}
      <section className="faq-cards-section">
        <div className="container">
                  </div>
      </section>

      {/* Section FAQ Flash avec accordéon */}
      <section className="faq-accordion-section">
        <div className="container">
          <div className="faq-accordion-layout">
            <div className="faq-accordion-header-col">
              <h4 className="faq-flash-subtitle">FAQ Flash</h4>
              <h2 className="faq-flash-title">L'essentiel En Un Clic</h2>
              <div className="faq-flash-divider"></div>
              <p className="faq-flash-description">
                Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous écrire via{' '}
                <a href="/contact" target="_blank" rel="noreferrer">
                  le formulaire de contact
                </a>{' '}
                ou à appeler notre service client.
              </p>
            </div>

            <div className="faq-accordion-col">
              <div className="faq-accordion-wrapper">
                {accordionQuestions.map((question, index) => (
                  <div key={question.id} className="faq-accordion-item">
                    <button
                      className={`faq-accordion-trigger ${
                        activeAccordion === index ? 'active' : ''
                      }`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeAccordion === index}
                    >
                      <span className="faq-accordion-icon">
                        {activeAccordion === index ? <FaMinus /> : <FaPlus />}
                      </span>
                      <span className="faq-accordion-title-text">{question.title}</span>
                    </button>
                    <div
                      className={`faq-accordion-content ${
                        activeAccordion === index ? 'active' : ''
                      }`}
                    >
                      <p>{question.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

