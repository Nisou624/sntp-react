import React, { useEffect, useRef, useState } from 'react';
import {
  FaTruck,
  FaWarehouse,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
  FaAngleRight,
  FaLongArrowAltRight,
  FaMapPin
} from 'react-icons/fa';
import './SNTPLogistique.css';

const SNTPLogistique = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef(null);

  // Données des cartes de 4 sections
  const featuresCards = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Transport Fiable',
      description: 'Flotte moderne avec GPS et suivi en temps réel pour des livraisons ponctuelles et sécurisées.'
    },
    {
      id: 2,
      icon: <FaWarehouse />,
      title: 'Stockage Sécurisé',
      description: 'Entrepôts climatisés avec système de gestion informatisé et surveillance 24/7.'
    },
    {
      id: 3,
      icon: <FaClock />,
      title: 'Rapidité',
      description: 'Livraisons express ou groupées avec planification intelligente et traçabilité complète.'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Sécurité',
      description: 'Contrôles qualité rigoureux et assurances complètes pour protéger vos marchandises.'
    }
  ];

  // Données des 4 contenus pour la section scroll
  const scrollContents = [
    {
      id: 1,
      title: 'Flotte de Transport Moderne',
      description: 'Une flotte complète de véhicules spécialisés équipés de systèmes GPS et de suivi en temps réel. Chauffeurs qualifiés et maintenance préventive pour garantir la ponctualité et la sécurité de vos livraisons.',
      description2: 'Notre parc automobile se compose de camions modernes adaptés à tous types de marchandises. Chaque véhicule est régulièrement inspecté et entretenu pour assurer des performances optimales.',
      description3: 'Technologie de géolocalisation avancée permettant un suivi en temps réel de toutes les expéditions. Rapports détaillés et historique complet accessible via notre plateforme digitale.',
      buttonText: 'Découvrir',
      buttonLink: '/services/transport',
      image: 'https://via.placeholder.com/800x600/C1121F/FFFFFF?text=Fleet',
      imageAlt: 'Flotte de Transport'
    },
    {
      id: 2,
      title: 'Stockage Sécurisé et Intelligent',
      description: 'Entrepôts climatisés et sécurisés avec système de gestion informatisé. Zones dédiées pour chaque type de matériaux, contrôle d\'accès et surveillance 24/7 pour protéger vos investissements.',
      description2: 'Nos installations offrent des conditions optimales de conservation avec température et humidité contrôlées. Traçabilité complète de chaque article stocké grâce à notre système de gestion avancé.',
      description3: 'Espaces modulables adaptés à vos besoins spécifiques. Infrastructure moderne avec quais de chargement optimisés et équipements de manutention dernière génération.',
      buttonText: 'En savoir plus',
      buttonLink: '/services/stockage',
      image: 'https://via.placeholder.com/800x600/1B263B/FFFFFF?text=Storage',
      imageAlt: 'Stockage'
    },
    {
      id: 3,
      title: 'Réseau de Distribution National',
      description: 'Réseau de distribution national avec planification intelligente des itinéraires. Livraisons groupées ou express selon vos besoins, avec traçabilité complète et notifications en temps réel.',
      description2: 'Couverture nationale garantissant des délais optimaux. Notre système de routage intelligent minimise les temps de transport tout en maximisant l\'efficacité énergétique.',
      description3: 'Service client dédié disponible 24/7 pour répondre à vos questions. Flexibilité maximale avec options de livraison personnalisables selon vos contraintes opérationnelles.',
      buttonText: 'Nos services',
      buttonLink: '/services/distribution',
      image: 'https://via.placeholder.com/800x600/0D1B2A/FFFFFF?text=Distribution',
      imageAlt: 'Distribution'
    },
    {
      id: 4,
      title: 'Gestion Logistique Digitale',
      description: 'Plateforme digitale de gestion des commandes et des stocks. Analyses prédictives pour optimiser vos approvisionnements et réduire les coûts de stockage grâce à des solutions just-in-time.',
      description2: 'Interface intuitive accessible 24/7 pour suivre vos expéditions en temps réel. Rapports détaillés et tableaux de bord personnalisables pour une visibilité totale sur votre chaîne logistique.',
      description3: 'Intégration transparente avec vos systèmes ERP existants. API moderne permettant une synchronisation automatique des données et une automatisation complète des processus.',
      buttonText: 'Innovation',
      buttonLink: '/innovation',
      image: 'https://via.placeholder.com/800x600/C1121F/FFFFFF?text=Management',
      imageAlt: 'Gestion'
    }
  ];

  // Progress bars data
  const progressData = [
    { label: 'Ponctualité Livraisons', percentage: 98 },
    { label: 'Satisfaction Client', percentage: 95 },
    { label: 'Traçabilité', percentage: 100 }
  ];

  // Animation on scroll pour les sections normales
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.Logistique-fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // EFFET DE SCROLL HIJACKING - CORRIGÉ
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Vérifier si la section est centrée/visible à l'écran
      const isInView = rect.top <= windowHeight * 0.2 && rect.bottom >= windowHeight * 0.8;
      
      if (isInView) {
        e.preventDefault();
        e.stopPropagation();

        // Empêcher les appels multiples pendant l'animation
        if (isScrollingRef.current) return;
        
        isScrollingRef.current = true;

        // Direction du scroll (plus rapide: 0.25 au lieu de 0.02)
        const delta = e.deltaY > 0 ? 0.25 : -0.25;
        
        setScrollProgress(prev => {
          const newProgress = Math.max(0, Math.min(3, prev + delta));
          
          // Si on a fini de scroller, débloquer
          if (newProgress >= 3 && e.deltaY > 0) {
            // Scroller vers la section suivante
            setTimeout(() => {
              window.scrollTo({
                top: rect.bottom + window.scrollY,
                behavior: 'smooth'
              });
            }, 300);
          } else if (newProgress <= 0 && e.deltaY < 0) {
            // Scroller vers la section précédente
            setTimeout(() => {
              window.scrollTo({
                top: rect.top + window.scrollY - windowHeight,
                behavior: 'smooth'
              });
            }, 300);
          }
          
          return newProgress;
        });

        // Débloquer après un court délai
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
    };

    // Ajouter l'écouteur
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Appliquer les transformations basées sur scrollProgress
  useEffect(() => {
    if (!sectionRef.current) return;

    const currentIndex = Math.floor(scrollProgress);
    const progress = scrollProgress - currentIndex;

    // Gérer les images
    const images = sectionRef.current.querySelectorAll('.scroll-unified-image');
    images.forEach((img, index) => {
      if (index === currentIndex) {
        // Image actuelle qui descend
        img.style.transform = `translateY(${progress * 100}%)`;
        img.style.opacity = '1';
        img.style.zIndex = '2';
      } else if (index === currentIndex + 1) {
        // Image suivante qui apparaît derrière
        img.style.transform = 'translateY(0)';
        img.style.opacity = '1';
        img.style.zIndex = '1';
      } else {
        // Autres images cachées
        img.style.opacity = '0';
        img.style.zIndex = '0';
      }
    });

    // Gérer les textes avec transition plus fluide
    const textContents = sectionRef.current.querySelectorAll('.scroll-unified-content');
    textContents.forEach((content, index) => {
      if (index === currentIndex) {
        // Texte actuel qui fade out
        content.style.opacity = `${Math.max(0, 1 - progress * 1.5)}`;
        content.style.transform = `translateY(${-progress * 30}px)`;
        content.style.pointerEvents = progress > 0.5 ? 'none' : 'auto';
      } else if (index === currentIndex + 1) {
        // Texte suivant qui fade in
        content.style.opacity = `${Math.max(0, progress * 1.5 - 0.5)}`;
        content.style.transform = `translateY(${(1 - progress) * 30}px)`;
        content.style.pointerEvents = progress > 0.5 ? 'auto' : 'none';
      } else {
        // Autres textes cachés
        content.style.opacity = '0';
        content.style.pointerEvents = 'none';
      }
    });
  }, [scrollProgress]);

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/yourLocationLink', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="Logistique-page">
      {/* Hero Section */}
      <section 
        className="Logistique-hero-section"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1920x800/1B263B/FFFFFF?text=SNTP+Logistique+Hero)'
        }}
      >
        <div className="Logistique-hero-overlay"></div>
        <div className="Logistique-hero-content">
          <p className="Logistique-hero-subtitle">Filiale SNTP</p>
          <div className="Logistique-hero-logo">
            <img 
              src="https://via.placeholder.com/300x80/C1121F/FFFFFF?text=SNTP+LOGISTIQUE" 
              alt="SNTP Logistique Logo" 
            />
          </div>
          <h1 className="Logistique-hero-title">
            Solutions Logistiques Intégrées
          </h1>
          <div className="Logistique-hero-divider"></div>
          <p className="Logistique-hero-description">
            Nous révolutionnons la chaîne logistique depuis 20 ans. Nos solutions allient technologie de pointe 
            et expertise terrain pour des opérations optimisées. Services certifiés et traçabilité complète.
          </p>
        </div>
      </section>

      {/* Section Expertise (3 colonnes) */}
      <section className="Logistique-expertise-section Logistique-fade-in-section">
        <div className="Logistique-expertise-grid">
          <div className="Logistique-expertise-card">
            <p className="Logistique-expertise-label">Notre Force</p>
            <h2 className="Logistique-expertise-title">Efficacité</h2>
            <div className="Logistique-expertise-divider"></div>
            <p className="Logistique-expertise-description">
              Nos solutions garantissent une efficacité maximale et un impact environnemental minimal. 
              Flotte moderne, itinéraires optimisés, stockage intelligent. Protection active de vos investissements.
            </p>
          </div>

          <div className="Logistique-expertise-image-center">
            <img 
              src="https://via.placeholder.com/400x400/C1121F/FFFFFF?text=Logistics" 
              alt="SNTP Logistique" 
            />
          </div>

          <div className="Logistique-expertise-card">
            <p className="Logistique-expertise-label">Notre Vision</p>
            <h2 className="Logistique-expertise-title">Innovation</h2>
            <div className="Logistique-expertise-divider"></div>
            <p className="Logistique-expertise-description">
              Plateforme digitale de gestion en temps réel avec analyses prédictives pour optimiser 
              vos approvisionnements et réduire les coûts grâce à des solutions intelligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Section Solutions */}
      <section className="Logistique-solutions-section Logistique-fade-in-section">
        <div className="Logistique-solutions-layout">
          <div className="Logistique-solutions-text">
            <h2 className="Logistique-solutions-title">
              Solutions Logistiques Complètes Pour Tous Vos Besoins
            </h2>
            <a href="/contact" className="Logistique-solutions-btn">
              En savoir plus
              <FaArrowRight />
            </a>
          </div>

          <div className="Logistique-solutions-cards-grid">
            {featuresCards.map((card) => (
              <div key={card.id} className="Logistique-solution-feature-card">
                <div className="Logistique-feature-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="Logistique-feature-title">{card.title}</h3>
                <p className="Logistique-feature-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION UNIFIÉE AVEC SCROLL HIJACKING
          Une seule section qui se "verrouille"
      ========================================= */}
      <section ref={sectionRef} className="unified-scroll-section">
        <div className="scroll-unified-container">
          {/* PARTIE GAUCHE - TEXTES */}
          <div className="scroll-unified-text-wrapper">
            {scrollContents.map((content, index) => (
              <div key={content.id} className="scroll-unified-content" data-index={index}>
                <div className="scroll-unified-content-inner">
                  <h2 className="scroll-unified-title">{content.title}</h2>
                  <div className="scroll-unified-divider"></div>
                  <p className="scroll-unified-description">{content.description}</p>
                  <p className="scroll-unified-description">{content.description2}</p>
                  <p className="scroll-unified-description">{content.description3}</p>
                  <a href={content.buttonLink} className="scroll-unified-btn">
                    {content.buttonText}
                    <FaAngleRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* PARTIE DROITE - IMAGES STICKY */}
          <div className="scroll-unified-image-wrapper">
            <div className="scroll-unified-image-sticky">
              <div className="scroll-unified-image-container">
                {scrollContents.map((content, index) => (
                  <div key={content.id} className="scroll-unified-image" data-index={index}>
                    <img 
                      src={content.image}
                      alt={content.imageAlt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Objectif (Progress Bars) */}
      <section className="Logistique-objective-section Logistique-fade-in-section">
        <div className="Logistique-objective-layout">
          <div className="Logistique-objective-text">
            <p className="Logistique-objective-subtitle">Notre Engagement</p>
            <h2 className="Logistique-objective-title">Performance à Chaque Étape</h2>
            <div className="Logistique-objective-divider"></div>
            <p className="Logistique-objective-description">
              Chaque livraison que nous effectuons porte en elle notre engagement pour l'excellence 
              et la satisfaction client.
            </p>
            <a href="/qualite" className="Logistique-objective-btn">
              Notre démarche qualité
              <FaLongArrowAltRight />
            </a>
          </div>

          <div className="Logistique-objective-progress">
            {progressData.map((item, index) => (
              <div key={index} className="Logistique-progress-item">
                <div className="Logistique-progress-header">
                  <span className="Logistique-progress-label">{item.label}</span>
                  <span className="Logistique-progress-percentage">{item.percentage}%</span>
                </div>
                <div className="Logistique-progress-bar-container">
                  <div 
                    className="Logistique-progress-bar-fill"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact (Carte + Infos) */}
      <section className="Logistique-contact-section Logistique-fade-in-section">
        <h2 className="Logistique-contact-title">Retrouvez-nous</h2>
        
        <div className="Logistique-contact-layout">
          <div className="Logistique-contact-map-container">
            <iframe
              className="Logistique-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2836746374243!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ1JzEzLjciTiAzwrAwMyczMS43IkU!5e0!3m2!1sfr!2sdz!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SNTP Logistique"
            ></iframe>
          </div>

          <div className="Logistique-contact-info-wrapper">
            <div className="Logistique-contact-grid">
              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">📍 Adresse</h3>
                <p className="Logistique-contact-info">
                  Zone Logistique SNTP,<br />
                  Alger, Algérie
                </p>
              </div>

              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">📞 Téléphone</h3>
                <p className="Logistique-contact-info">
                  <a href="tel:+213123456789">+213 (0) 21 XX XX XX</a>
                </p>
              </div>

              <div className="Logistique-contact-item">
                <h3 className="Logistique-contact-label">✉️ Email</h3>
                <p className="Logistique-contact-info">
                  <a href="mailto:logistique@sntp.dz">logistique@sntp.dz</a>
                </p>
              </div>
            </div>

            <a 
              href="#map"
              className="Logistique-cta-button Logistique-primary-button Logistique-map-button"
              onClick={handleMapClick}
            >
              <FaMapPin className="Logistique-btn-icon" />
              Voir sur Google Maps
            </a>

            <div className="Logistique-contact-cta-text">
              <p>
                Contactez dès aujourd'hui <strong>SNTP LOGISTIQUE</strong> pour découvrir nos solutions
                de transport, stockage et distribution. Nos experts logistiques sont à votre disposition
                pour optimiser votre chaîne d'approvisionnement avec des services fiables et performants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPLogistique;

