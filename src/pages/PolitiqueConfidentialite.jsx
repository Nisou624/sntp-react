// src/pages/PolitiqueConfidentialite.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info,
  Eye,
  UserCheck,
  FileText,
  Clock,
  Globe,
  Server,
  Link2,
  Users
} from 'lucide-react';
import './PolitiqueConfidentialite.css';

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Politique de Confidentialité - SNTP';
  }, []);

  return (
    <div className="PolitiqueConfidentialite-page">
      {/* Hero Section */}
      <section className="PolitiqueConfidentialite-hero">
        <div className="PolitiqueConfidentialite-hero-content">
          <Shield size={80} className="PolitiqueConfidentialite-hero-icon" />
          <h1>Politique de Confidentialité</h1>
          <p className="PolitiqueConfidentialite-hero-subtitle">
            Protection de vos données personnelles - Conforme à la loi algérienne 18-07
          </p>
        </div>
      </section>

      <div className="PolitiqueConfidentialite-container">
        {/* Introduction */}
        <section className="PolitiqueConfidentialite-section PolitiqueConfidentialite-highlight">
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              <strong>SNTP</strong> attache une importance capitale à la protection de votre vie privée 
              et au respect de vos données personnelles. Cette politique de confidentialité vise à vous 
              informer de manière claire et transparente sur la collecte, le traitement, l'utilisation 
              et la protection de vos données personnelles transmises via notre site web.
            </p>
          </div>
        </section>

        {/* Section 1 - Responsable du traitement */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">1</div>
            <h2>Responsable du Traitement des Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Le responsable du traitement des données personnelles collectées via le site est :
            </p>
            <div className="PolitiqueConfidentialite-info-card">
              <div className="PolitiqueConfidentialite-info-item">
                <Users size={24} />
                <div>
                  <strong>Société Nationale de Travaux Publics (SNTP)</strong>
                  <span>SPA au capital de 3 000 000 000 DA</span>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-info-item">
                <MapPin size={24} />
                <div>
                  <strong>Adresse</strong>
                  <span>Zone Industrielle Rouiba, 16012 Alger, Algérie</span>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-info-item">
                <Mail size={24} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@sntp-dz.com">contact@sntp-dz.com</a>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-info-item">
                <Phone size={24} />
                <div>
                  <strong>Téléphone</strong>
                  <span>+213 (0)23 85 30 85 / 86</span>
                </div>
              </div>
            </div>
            <p className="PolitiqueConfidentialite-note-text">
              Ce responsable détermine les finalités et les moyens du traitement de vos données, 
              en conformité avec la loi n°18-07.
            </p>
          </div>
        </section>

        {/* Section 2 - Données collectées */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">2</div>
            <h2>Données Personnelles Collectées</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Lorsque vous utilisez notre formulaire de contact ou nos services en ligne, 
              nous collectons les données personnelles suivantes :
            </p>
            <div className="PolitiqueConfidentialite-data-grid">
              <div className="PolitiqueConfidentialite-data-item">
                <UserCheck size={20} />
                <span>Nom et prénom</span>
              </div>
              <div className="PolitiqueConfidentialite-data-item">
                <Mail size={20} />
                <span>Adresse e-mail</span>
              </div>
              <div className="PolitiqueConfidentialite-data-item">
                <Phone size={20} />
                <span>Numéro de téléphone</span>
              </div>
              <div className="PolitiqueConfidentialite-data-item">
                <FileText size={20} />
                <span>Objet de la demande</span>
              </div>
              <div className="PolitiqueConfidentialite-data-item">
                <Info size={20} />
                <span>Message</span>
              </div>
              <div className="PolitiqueConfidentialite-data-item">
                <Eye size={20} />
                <span>Données de navigation (cookies)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Finalités du traitement */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">3</div>
            <h2>Finalités du Traitement</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Les données personnelles collectées via le formulaire sont traitées pour les finalités suivantes :
            </p>
            <ul className="PolitiqueConfidentialite-custom-list">
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Traiter et répondre à vos demandes :</strong> Répondre à vos questions, 
                  demandes d'information, devis ou réclamations.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Gérer la relation client :</strong> Assurer le suivi de vos demandes et 
                  améliorer la qualité de nos services.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Candidatures :</strong> Traiter les candidatures spontanées reçues via le 
                  formulaire de recrutement.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Amélioration du site :</strong> Analyser l'utilisation du site web pour 
                  améliorer son fonctionnement et son contenu.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Respect des obligations légales :</strong> Conserver les données pour se 
                  conformer aux obligations légales et réglementaires.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 - Base légale */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">4</div>
            <h2>Base Légale du Traitement</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Le traitement de vos données repose sur les bases légales suivantes :
            </p>
            <div className="PolitiqueConfidentialite-legal-cards">
              <div className="PolitiqueConfidentialite-legal-card">
                <CheckCircle size={48} />
                <h3>Consentement</h3>
                <p>
                  En soumettant le formulaire, vous acceptez explicitement le traitement de vos données.
                </p>
              </div>
              <div className="PolitiqueConfidentialite-legal-card">
                <FileText size={48} />
                <h3>Intérêt Légitime</h3>
                <p>
                  Pour gérer les communications entrantes liées à nos activités professionnelles.
                </p>
              </div>
              <div className="PolitiqueConfidentialite-legal-card">
                <Shield size={48} />
                <h3>Loi n°18-07</h3>
                <p>
                  Relative à la protection des personnes physiques dans le traitement des données 
                  à caractère personnel en Algérie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Destinataires */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">5</div>
            <h2>Destinataires des Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Les données personnelles collectées sont destinées exclusivement à :
            </p>
            <ul className="PolitiqueConfidentialite-custom-list">
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Le personnel autorisé de la SNTP</strong> : Employés habilités à traiter 
                  les demandes clients et les candidatures.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Nos prestataires de services</strong> : Hébergement web, maintenance 
                  technique du site (soumis à des obligations de confidentialité strictes).
                </span>
              </li>
            </ul>
            <div className="PolitiqueConfidentialite-alert-box PolitiqueConfidentialite-warning">
              <AlertTriangle size={32} />
              <div>
                <p>
                  <strong>Les données ne sont pas cédées ni vendues à des tiers.</strong>
                </p>
                <p>
                  Elles peuvent toutefois être communiquées aux autorités administratives ou 
                  judiciaires compétentes lorsque la loi l'impose ou l'autorise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Sécurité */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">6</div>
            <h2>Sécurité des Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour 
              protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. 
              Parmi ces mesures figurent :
            </p>
            <ul className="PolitiqueConfidentialite-custom-list">
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Protocole HTTPS</strong> : Chiffrement des échanges de données entre votre 
                  navigateur et notre serveur.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Accès restreint</strong> : Seules les personnes habilitées peuvent accéder 
                  aux données personnelles.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Sauvegardes régulières</strong> : Conservation sécurisée des données avec 
                  sauvegardes périodiques.
                </span>
              </li>
              <li>
                <span className="PolitiqueConfidentialite-bullet"></span>
                <span>
                  <strong>Pare-feu et antivirus</strong> : Protection des serveurs et infrastructures 
                  informatiques.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 - Hébergement */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">7</div>
            <h2>Hébergement des Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <div className="PolitiqueConfidentialite-hosting-card">
              <Server size={40} />
              <div>
                <h3>Hébergeur</h3>
                <p>
                  Le site est hébergé auprès d'
                  <a href="https://icosnet.com.dz" target="_blank" rel="noopener noreferrer">
                    <strong>ICOSNET</strong> (icosnet.com.dz)
                  </a>,
                  prestataire situé en Algérie, ayant son siège social au Centre d'Affaires El Qods, 
                  6ème niveau Chéraga 16000 ALGER.
                </p>
              </div>
            </div>
            <div className="PolitiqueConfidentialite-info-banner">
              <Globe size={32} />
              <p>
                <strong>Vos données ne sont pas transférées en dehors du territoire national algérien.</strong>
              </p>
            </div>
            <p>
              Si un transfert s'avère nécessaire pour l'exécution d'un contrat (par exemple, 
              utilisation de logiciels hébergés à l'étranger), il s'effectuera avec des garanties 
              appropriées conformément à la loi 18-07 (contrats de sous-traitance incluant des 
              clauses de protection des données, certification de sécurité des prestataires).
            </p>
          </div>
        </section>

        {/* Section 8 - Liens hypertextes */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">8</div>
            <h2>Liens Hypertextes vers des Sites Tiers</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Notre site peut contenir des liens hypertextes renvoyant vers des sites Web tiers 
              (sites de nos partenaires, réseaux sociaux, chaînes YouTube, etc.) qui ne sont ni 
              détenus ni exploités par notre entreprise.
            </p>
            <div className="PolitiqueConfidentialite-warning-box">
              <Link2 size={32} />
              <div>
                <h4>Responsabilité limitée</h4>
                <p>
                  Ces sites externes disposent de leurs propres politiques de confidentialité et 
                  pratiques en matière de traitement des données personnelles, sur lesquelles nous 
                  n'exerçons aucun contrôle. Nous déclinons toute responsabilité quant au contenu 
                  et aux pratiques de ces sites tiers.
                </p>
                <p>
                  Les données personnelles que vous choisissez de communiquer à ces sites externes 
                  ne sont pas couvertes par la présente politique de confidentialité.
                </p>
              </div>
            </div>
            <p className="PolitiqueConfidentialite-recommendation">
              <strong>Nous vous recommandons vivement</strong> de consulter les politiques de 
              confidentialité de ces sites tiers avant de leur transmettre vos données personnelles.
            </p>
          </div>
        </section>

        {/* Section 9 - Sous-traitance */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">9</div>
            <h2>Sous-Traitance</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Dans le cadre de ses activités, la Société Nationale de Travaux Publics (SNTP) peut 
              faire appel à des sous-traitants pour ses différentes activités, ce qui peut impliquer 
              le traitement de vos données à caractère personnel.
            </p>
            <p className="PolitiqueConfidentialite-note-text">
              Tous nos sous-traitants sont tenus par des obligations contractuelles strictes en 
              matière de confidentialité, de sécurité et de traitement des données, conformément 
              à la loi 18-07.
            </p>
          </div>
        </section>

        {/* Section 10 - Durée de conservation */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">10</div>
            <h2>Durée de Conservation des Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Vos données personnelles seront conservées uniquement pour la durée nécessaire à 
              la finalité du traitement, à savoir :
            </p>
            <div className="PolitiqueConfidentialite-duration-grid">
              <div className="PolitiqueConfidentialite-duration-item">
                <Clock size={32} />
                <div>
                  <strong>3 ans</strong>
                  <p>Après le dernier échange pour les demandes classiques</p>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-duration-item">
                <Clock size={32} />
                <div>
                  <strong>2 ans</strong>
                  <p>Pour les candidatures non retenues</p>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-duration-item">
                <Clock size={32} />
                <div>
                  <strong>10 ans</strong>
                  <p>Pour les données contractuelles (obligations légales)</p>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-duration-item">
                <Clock size={32} />
                <div>
                  <strong>Durée variable</strong>
                  <p>Si des obligations légales ou contractuelles l'exigent</p>
                </div>
              </div>
            </div>
            <p className="PolitiqueConfidentialite-note-text">
              Passé ce délai, les données seront supprimées ou anonymisées.
            </p>
          </div>
        </section>

        {/* Section 11 - Consentement */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">11</div>
            <h2>Consentement et Formulaires en Ligne</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Si vous contactez la SNTP en utilisant les différents formulaires mis à disposition 
              sur notre site web (formulaire de contact, demande de devis, demande d'information 
              sur un projet, candidature spontanée, réclamations, etc.), vous reconnaissez avoir 
              lu et compris le contenu de la présente Politique de confidentialité, et vous 
              consentez expressément au traitement de vos données à caractère personnel tel que 
              décrit ci-dessus.
            </p>
            <div className="PolitiqueConfidentialite-alert-box">
              <Info size={32} />
              <div>
                <p>
                  <strong>C'est votre consentement explicite</strong> qui constitue le fondement 
                  juridique du traitement de vos données personnelles, conformément à la loi 18-07, 
                  afin que nous puissions traiter votre demande et vous répondre dans les meilleurs 
                  délais.
                </p>
              </div>
            </div>

            <h3>Retrait du Consentement</h3>
            <p>
              Vous pouvez, à tout moment, modifier ou retirer votre consentement concernant les 
              traitements de données personnelles mis en œuvre, ou demander la limitation de 
              l'utilisation de vos données, à l'exception des cas où la loi 18-07 impose ou 
              autorise leur conservation (obligations légales, exécution d'un contrat, intérêt 
              légitime de la SNTP).
            </p>
            <p>
              Pour exercer votre droit de retrait ou de modification de consentement concernant 
              vos données personnelles, veuillez nous contacter selon les modalités indiquées 
              dans la rubrique « Vos droits » ci-dessous.
            </p>
          </div>
        </section>

        {/* Section 12 - Divulgation publique */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">12</div>
            <h2>Divulgation Publique de Données</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <div className="PolitiqueConfidentialite-warning-box">
              <AlertTriangle size={32} />
              <div>
                <h4>Attention</h4>
                <p>
                  Si vous choisissez de rendre publiques certaines de vos données personnelles ou 
                  professionnelles via nos services en ligne (par exemple, en publiant un témoignage, 
                  un commentaire, ou en partageant des documents sur des espaces collaboratifs mis 
                  à disposition par la SNTP), vous reconnaissez que vous le faites à vos propres 
                  risques.
                </p>
                <p>
                  La SNTP ne saurait être tenue responsable de l'utilisation de ces informations 
                  par des tiers une fois qu'elles sont rendues publiques par vos soins. Nous vous 
                  recommandons de faire preuve de prudence et de ne divulguer que les informations 
                  strictement nécessaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 13 - Vos droits */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">13</div>
            <h2>Vos Droits sur Vos Données Personnelles</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Conformément à la réglementation algérienne en vigueur (Loi n°18-07 relative à la 
              protection des personnes physiques dans le traitement des données à caractère 
              personnel), vous disposez des droits suivants concernant vos données personnelles :
            </p>

            <div className="PolitiqueConfidentialite-rights-cards">
              <div className="PolitiqueConfidentialite-right-card">
                <Info size={40} />
                <h4>Droit à l'Information</h4>
                <p>
                  Vous avez le droit d'être informé de manière transparente et claire sur la façon 
                  dont vos données personnelles sont collectées et traitées.
                </p>
              </div>

              <div className="PolitiqueConfidentialite-right-card">
                <Eye size={40} />
                <h4>Droit d'Accès</h4>
                <p>Vous avez le droit d'obtenir :</p>
                <ul>
                  <li>La confirmation que vos données sont ou ne sont pas traitées</li>
                  <li>Une copie de vos données personnelles</li>
                  <li>Des informations sur les finalités du traitement</li>
                  <li>Les destinataires de vos données</li>
                  <li>La durée de conservation envisagée</li>
                </ul>
              </div>

              <div className="PolitiqueConfidentialite-right-card">
                <FileText size={40} />
                <h4>Droit de Rectification</h4>
                <p>
                  Vous avez le droit d'obtenir, à titre gratuit, l'actualisation, la rectification, 
                  l'effacement ou le verrouillage de vos données personnelles dont le traitement 
                  n'est pas conforme à la loi, notamment en raison du caractère incomplet ou inexact 
                  de ces données ou dont le traitement est interdit par la loi.
                </p>
              </div>

              <div className="PolitiqueConfidentialite-right-card">
                <Lock size={40} />
                <h4>Droit d'Opposition</h4>
                <p>
                  Pour des motifs légitimes, vous avez le droit de vous opposer, à tout moment, à 
                  ce que les données personnelles vous concernant fassent l'objet d'un traitement.
                </p>
              </div>
            </div>

            <h3>Comment Exercer Vos Droits ?</h3>
            <div className="PolitiqueConfidentialite-contact-rights-box">
              <h4>Pour exercer ces droits, vous pouvez nous contacter via les moyens suivants :</h4>
              <p>
                Nous nous engageons à répondre à votre demande dans les meilleurs délais et 
                conformément aux dispositions légales en vigueur.
              </p>
              <div className="PolitiqueConfidentialite-contact-methods">
                <div className="PolitiqueConfidentialite-contact-method">
                  <Mail size={28} />
                  <div>
                    <strong>Par email</strong>
                    <a href="mailto:contact@sntp-dz.com">contact@sntp-dz.com</a>
                  </div>
                </div>
                <div className="PolitiqueConfidentialite-contact-method">
                  <Phone size={28} />
                  <div>
                    <strong>Par téléphone</strong>
                    <span>+213 (0)23 85 30 85 / 86</span>
                  </div>
                </div>
                <div className="PolitiqueConfidentialite-contact-method">
                  <MapPin size={28} />
                  <div>
                    <strong>Par courrier postal</strong>
                    <span>Zone Industrielle Rouiba, 16012 Alger, Algérie</span>
                  </div>
                </div>
              </div>
              <p className="PolitiqueConfidentialite-engagement">
                Nous nous engageons à répondre à votre demande dans les meilleurs délais et 
                conformément aux dispositions légales en vigueur.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14 - Transfert des données */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">14</div>
            <h2>Transfert des Données à l'Étranger</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <div className="PolitiqueConfidentialite-info-banner">
              <Globe size={32} />
              <p>
                <strong>Vos données ne sont pas transférées en dehors du territoire national 
                algérien</strong>, sauf si cela est nécessaire pour l'exécution d'un contrat et 
                avec des garanties appropriées conformément à la loi 18-07.
              </p>
            </div>
          </div>
        </section>

        {/* Section 15 - Modification de la politique */}
        <section className="PolitiqueConfidentialite-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">15</div>
            <h2>Modification de cette Politique</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Nous nous réservons le droit de modifier cette politique pour refléter des 
              évolutions légales ou techniques. Toute modification substantielle vous sera 
              communiquée sur cette page.
            </p>
            <div className="PolitiqueConfidentialite-update-box">
              <Clock size={28} />
              <p><strong>Dernière mise à jour :</strong> Janvier 2026</p>
            </div>
          </div>
        </section>

        {/* Section 16 - Contact */}
        <section className="PolitiqueConfidentialite-section PolitiqueConfidentialite-contact-section">
          <div className="PolitiqueConfidentialite-section-header">
            <div className="PolitiqueConfidentialite-section-number">16</div>
            <h2>Nous Contacter</h2>
          </div>
          <div className="PolitiqueConfidentialite-section-content">
            <p>
              Pour toute question relative à la présente Politique de confidentialité ou à la 
              protection de vos données personnelles, vous pouvez contacter notre service dédié 
              à la protection des données :
            </p>
            <div className="PolitiqueConfidentialite-final-contact-card">
              <div className="PolitiqueConfidentialite-contact-detail">
                <Mail size={32} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@sntp-dz.com">contact@sntp-dz.com</a>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-contact-detail">
                <Phone size={32} />
                <div>
                  <strong>Téléphone</strong>
                  <span>+213 (0)23 85 30 85 / 86</span>
                </div>
              </div>
              <div className="PolitiqueConfidentialite-contact-detail">
                <MapPin size={32} />
                <div>
                  <strong>Adresse</strong>
                  <span>Zone Industrielle Rouiba, 16012 Alger, Algérie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="PolitiqueConfidentialite-footer">
          <Shield size={60} />
          <p>
            Cette politique de confidentialité a été élaborée en conformité avec la 
            <strong> loi n°18-07</strong> relative à la protection des personnes physiques 
            dans le traitement des données à caractère personnel.
          </p>
          <Link to="/" className="PolitiqueConfidentialite-back-home">
            Retour à l'accueil
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;

