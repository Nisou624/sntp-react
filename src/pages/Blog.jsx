import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  // Articles de blog - Contenu exact de la page HTML
  const blogArticles = [
    {
      id: 1,
      date: "May 20, 2022",
      datetime: "2022-05-20T09:18:11+00:00",
      title: "La Fabrication des Buses en Béton par SNTP ANABIBE",
      excerpt: "Expertise Industrielle au Service des Infrastructures Algériennes. L'unité SNTP ANABIBE, filiale industrielle de la Société Nationale...",
      image: "/wp-content/uploads/2022/05/3-768x543.png",
      link: "/blog/fabrication-buses-beton-sntp-anabibe",
      categories: ["Communications", "Construction", "Financial"]
    },
    {
      id: 2,
      date: "May 19, 2022",
      datetime: "2022-05-19T15:45:00+00:00",
      title: "Visite du Président Teboune à Tindouf : Inauguration des deux Postes Frontaliers sous la Direction de M. Abdelsadok Belkacem le PDG de la société nationale des travaux publics et lancement d'un Projet Stratégique",
      excerpt: "Aujourd'hui, la visite du président Teboune à Tindouf a été marquée par l'inauguration des...",
      image: "/wp-content/uploads/2022/05/1-768x543.png",
      link: "/blog/visite-president-teboune-tindouf",
      categories: ["Communications", "Financial"]
    },
    {
      id: 3,
      date: "May 19, 2022",
      datetime: "2022-05-19T15:43:49+00:00",
      title: "La Société Nationale de Travaux Publics : Une Année de Réalisations Exceptionnelles en 2023",
      excerpt: "En 2023, la Société Nationale de Travaux Publics (SNTP) a marqué une année exceptionnelle...",
      image: "/wp-content/uploads/2022/05/2-768x543.png",
      link: "/blog/annee-realisations-exceptionnelles-2023",
      categories: ["Agriculture", "Communications", "Financial"]
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="blog-hero-section">
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-page-title">Blog</h1>
            <nav className="blog-breadcrumbs">
              <span className="breadcrumb-item">
                <a href="/">Home</a>
              </span>
              <svg className="breadcrumb-separator" width="8" height="8" viewBox="0 0 8 8">
                <path d="M2,6.9L4.8,4L2,1.1L2.6,0l4,4l-4,4L2,6.9z" fill="currentColor"/>
              </svg>
              <span className="breadcrumb-item breadcrumb-current">Blog</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="blog-main-section">
        <div className="container">
          <div className="blog-layout-grid">
            {/* Articles Column */}
            <div className="blog-articles-column">
              <div className="blog-entries">
                {blogArticles.map((article) => (
                  <article key={article.id} className="blog-entry-card">
                    <a href={article.link} className="blog-card-media-link">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="blog-card-image"
                        loading="lazy"
                      />
                    </a>
                    <div className="blog-card-content">
                      <div className="blog-entry-meta">
                        <time className="blog-meta-date" dateTime={article.datetime}>
                          <FaCalendarAlt className="date-icon" />
                          {article.date}
                        </time>
                      </div>
                      <h2 className="blog-entry-title">
                        <a href={article.link}>{article.title}</a>
                      </h2>
                      <div className="blog-entry-excerpt">
                        <p>{article.excerpt}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="blog-sidebar-column">
              {/* Card 1 - L'actualité des travaux publics */}
              <div className="sidebar-widget sidebar-card-red">
                <div className="sidebar-card-image-wrapper">
                  <img 
                    src="/wp-content/uploads/2025/07/chantier-construction-1024x512.jpg" 
                    alt="Chantier construction"
                    className="sidebar-card-image"
                  />
                </div>
                <div className="sidebar-card-content-red">
                  <h4 className="sidebar-card-title-red">L'actualité des travaux publics</h4>
                  <p className="sidebar-card-text-red">
                    Plongé dans l'action : nos chantiers en direct, conseils terrain et inaugurations exclusives !
                  </p>
                  <a href="/blog" className="sidebar-card-button-red">
                    <strong>Conseils Experts</strong>
                  </a>
                </div>
              </div>

              {/* Card 2 - Derrière chaque chantier */}
              <div className="sidebar-widget sidebar-card-gray">
                <div className="sidebar-card-content-gray">
                  <h4 className="sidebar-card-title-gray">Derrière chaque chantier, une histoire à raconter.</h4>
                  <p className="sidebar-card-text-gray">
                    Notre blog vous ouvre les portes de la SNTP : réflexions métiers, focus sur nos équipes, défis relevés sur le terrain, et projets qui façonnent le paysage urbain et rural. Ici, on ne parle pas que de béton et d'enrobé, mais aussi d'innovation, de sécurité, et d'engagement collectif.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

