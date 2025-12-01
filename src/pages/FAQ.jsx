import React, { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'Quels sont les domaines d\'expertise de la SNTP ?',
      answer: 'La SNTP est spécialisée dans la construction de bâtiments, les travaux routiers, les ouvrages d\'art, l\'hydraulique et le génie civil. Nous intervenons sur tous types de projets d\'infrastructure à travers l\'Algérie.'
    },
    {
      id: 2,
      question: 'Comment obtenir un devis pour mon projet ?',
      answer: 'Vous pouvez nous contacter via notre formulaire de contact en ligne, par téléphone au +213 (0) 23 45 67 89, ou par email à contact@sntp.dz. Notre équipe commerciale vous répondra dans les plus brefs délais pour étudier votre projet et vous proposer un devis détaillé.'
    },
    {
      id: 3,
      question: 'Quels sont vos délais de réalisation moyens ?',
      answer: 'Les délais varient en fonction de la nature et de l\'envergure du projet. Nous nous engageons à respecter les calendriers établis et à livrer les projets dans les temps convenus. Une planification détaillée est établie en début de projet avec des jalons précis.'
    },
    {
      id: 4,
      question: 'La SNTP dispose-t-elle de certifications qualité ?',
      answer: 'Oui, la SNTP est certifiée ISO 9001 pour la qualité, ISO 14001 pour l\'environnement et OHSAS 18001 pour la santé et la sécurité au travail. Ces certifications témoignent de notre engagement envers l\'excellence et la conformité aux normes internationales.'
    },
    {
      id: 5,
      question: 'Travaillez-vous avec des sous-traitants ?',
      answer: 'Nous collaborons avec un réseau de sous-traitants qualifiés et certifiés pour certains aspects spécifiques des projets. Tous nos partenaires sont rigoureusement sélectionnés selon des critères stricts de qualité et de fiabilité.'
    },
    {
      id: 6,
      question: 'Quelles garanties offrez-vous sur vos réalisations ?',
      answer: 'Nous offrons des garanties conformes à la réglementation en vigueur, incluant la garantie décennale pour les travaux de construction. Chaque projet bénéficie d\'un suivi qualité rigoureux et d\'un service après-vente dédié.'
    },
    {
      id: 7,
      question: 'Comment assurez-vous la sécurité sur vos chantiers ?',
      answer: 'La sécurité est notre priorité absolue. Nous appliquons des protocoles stricts conformes aux normes OHSAS 18001, formons régulièrement nos équipes, et mettons en place tous les équipements de protection nécessaires. Un responsable sécurité est présent sur chaque chantier.'
    },
    {
      id: 8,
      question: 'Proposez-vous des solutions écologiques ?',
      answer: 'Oui, nous intégrons des pratiques de construction durable dans nos projets : utilisation de matériaux écologiques, gestion optimale des déchets, réduction de l\'empreinte carbone, et respect des normes environnementales (ISO 14001).'
    },
    {
      id: 9,
      question: 'Puis-je visiter des projets réalisés par la SNTP ?',
      answer: 'Nous organisons régulièrement des visites de nos réalisations pour nos clients potentiels. Contactez-nous pour planifier une visite guidée de nos projets de référence à travers l\'Algérie.'
    },
    {
      id: 10,
      question: 'Comment suivre l\'avancement de mon projet ?',
      answer: 'Nous mettons en place un système de reporting régulier avec des points d\'étape hebdomadaires ou mensuels selon la durée du projet. Vous aurez accès à un chef de projet dédié et pourrez suivre l\'avancement en temps réel via notre plateforme de gestion de projet.'
    },
    {
      id: 11,
      question: 'La SNTP recrute-t-elle régulièrement ?',
      answer: 'Oui, nous recherchons constamment des talents dans différents domaines : ingénierie, gestion de projet, techniques de construction, etc. Consultez notre section carrières ou envoyez votre candidature spontanée à rh@sntp.dz.'
    },
    {
      id: 12,
      question: 'Quels sont vos horaires de disponibilité ?',
      answer: 'Notre service client est disponible du dimanche au jeudi de 8h00 à 17h00. Pour les urgences sur chantier, une astreinte 24h/24 est assurée pour nos clients en cours de projet.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Page Header */}
      <section className="page-header" style={{
        backgroundImage: 'url(/assets/images/faq-header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(129, 0, 18, 0.85) 0%, rgba(9, 20, 65, 0.75) 100%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="page-title" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            Questions Fréquentes
          </h1>
          <div className="section-divider" style={{
            background: 'repeating-linear-gradient(90deg, #fff, #fff 12.2px, transparent 12.2px, transparent 24.4px)'
          }}></div>
          <p className="page-subtitle" style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem' }}>
            Trouvez les réponses à vos questions
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content section">
        <div className="container">
          <div className="faq-intro text-center">
            <FaQuestionCircle className="faq-icon" />
            <h2 className="section-title">Comment pouvons-nous vous aider ?</h2>
            <div className="section-divider" style={{ margin: '0 auto' }}></div>
            <p className="section-description">
              Consultez notre liste de questions fréquemment posées. Si vous ne trouvez pas 
              la réponse à votre question, n'hésitez pas à nous contacter directement.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div 
                key={item.id} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="question-label">QUESTION</span>
                  <span className="question-text">{item.question}</span>
                  <span className="question-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? '1' : '0'
                  }}
                >
                  <div className="answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="faq-cta">
            <div className="cta-box">
              <h3 className="cta-title">Vous n'avez pas trouvé la réponse ?</h3>
              <p className="cta-description">
                Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
              </p>
              <a href="/about" className="hero-btn hero-btn-primary">
                Contactez-Nous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="help-section section" style={{ background: '#f8f8f8' }}>
        <div className="container">
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon">
                <FaQuestionCircle />
              </div>
              <h3 className="help-title">Support Client</h3>
              <p className="help-text">
                Notre équipe est disponible du dimanche au jeudi de 8h à 17h pour répondre à vos questions.
              </p>
              <a href="tel:+213123456789" className="help-link">
                +213 (0) 23 45 67 89
              </a>
            </div>

            <div className="help-card">
              <div className="help-icon">
                <FaQuestionCircle />
              </div>
              <h3 className="help-title">Email</h3>
              <p className="help-text">
                Envoyez-nous un email et nous vous répondrons dans les plus brefs délais.
              </p>
              <a href="mailto:contact@sntp.dz" className="help-link">
                contact@sntp.dz
              </a>
            </div>

            <div className="help-card">
              <div className="help-icon">
                <FaQuestionCircle />
              </div>
              <h3 className="help-title">Documentation</h3>
              <p className="help-text">
                Téléchargez notre documentation technique et nos brochures de présentation.
              </p>
              <a href="#" className="help-link">
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

