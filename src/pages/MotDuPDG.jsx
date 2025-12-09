import React from 'react';
import './MotDuPDG.css';

const MotDuPDG = () => {
  return (
    <div className="motdupg-page">
      {/* CEO Message */}
      <section className="ceo-message section">
        <div className="container">
          <div className="ceo-content">
            <div className="ceo-image-wrapper">
              <img src="/assets/images/ceo-photo.jpg" alt="PDG SNTP" className="ceo-image" />
            </div>
            <div className="message-content">
              <h2 className="section-title">Un Engagement Sans Faille</h2>
              <div className="section-divider"></div>
              <p className="message-text">
                Chers partenaires, chers clients,
              </p>
              <p className="message-text">
                C'est avec un immense honneur que je m'adresse à vous en tant que Président-Directeur 
                Général de la SNTP. Depuis plus de cinq décennies, notre entreprise s'est imposée 
                comme un acteur incontournable du secteur de la construction et des travaux publics 
                en Algérie.
              </p>
              <p className="message-text">
                Notre succès repose sur trois piliers fondamentaux : l'excellence technique, 
                l'innovation constante et un engagement sans faille envers nos clients. Chaque 
                projet que nous réalisons est une opportunité de démontrer notre savoir-faire et 
                notre détermination à bâtir un avenir meilleur pour l'Algérie.
              </p>
              <p className="message-text">
                Je tiens à remercier l'ensemble de nos collaborateurs pour leur dévouement 
                quotidien, ainsi que nos partenaires et clients pour leur confiance renouvelée. 
                Ensemble, nous continuerons à construire l'Algérie de demain.
              </p>
              <div className="ceo-signature">
                <strong>Le Président-Directeur Général</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotDuPDG;

