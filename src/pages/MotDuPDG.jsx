import React from 'react';
import './MotDuPDG.css';

const MotDuPDG = () => {
  return (
    <div className="MotDuPDG-page">
      <section className="MotDuPDG-ceo-message">
        <div className="MotDuPDG-container">
          <div className="MotDuPDG-ceo-content">
            {/* Image du PDG */}
            <div className="MotDuPDG-ceo-image-wrapper">
              <img
                src="/images/ceo-placeholder.jpg"
                alt="Président-Directeur Général SNTP"
                className="MotDuPDG-ceo-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/0D1B2A/FFFFFF?text=PDG+SNTP';
                }}
              />
            </div>

            {/* Message du PDG */}
            <div className="MotDuPDG-message-content">
              <h1 className="MotDuPDG-section-title">Message du Président</h1>
              <div className="MotDuPDG-section-divider"></div>

              <p className="MotDuPDG-message-text">
                <em>Chers partenaires, chers clients,</em>
              </p>

              <p className="MotDuPDG-message-text">
                C'est avec un immense honneur que je m'adresse à vous en tant que Président-Directeur 
                Général de la SNTP. Depuis plus de cinq décennies, notre entreprise s'est imposée comme 
                un acteur incontournable du secteur de la construction et des travaux publics en Algérie.
              </p>

              <p className="MotDuPDG-message-text">
                Notre succès repose sur trois piliers fondamentaux : l'excellence technique, l'innovation 
                constante et un engagement sans faille envers nos clients. Chaque projet que nous réalisons 
                est une opportunité de démontrer notre savoir-faire et notre détermination à bâtir un avenir 
                meilleur pour l'Algérie.
              </p>

              <p className="MotDuPDG-message-text">
                Je tiens à remercier l'ensemble de nos collaborateurs pour leur dévouement quotidien, 
                ainsi que nos partenaires et clients pour leur confiance renouvelée. Ensemble, nous 
                continuerons à construire l'Algérie de demain.
              </p>

              <div className="MotDuPDG-ceo-signature">
                Le Président-Directeur Général
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotDuPDG;

