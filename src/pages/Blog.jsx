import React from 'react';
import { FaCalendar, FaUser, FaFolder, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Les nouvelles technologies dans la construction',
      excerpt: 'Découvrez comment les innovations technologiques révolutionnent le secteur de la construction et des travaux publics en Algérie.',
      image: '/assets/images/blog-tech.jpg',
      category: 'Innovation',
      author: 'Ahmed Benali',
      date: '15 Novembre 2024',
      featured: true
    },
    {
      id: 2,
      title: 'Développement durable et construction',
      excerpt: 'L\'importance de l\'éco-construction et des pratiques durables dans nos projets d\'infrastructure.',
      image: '/assets/images/blog-sustainable.jpg',
      category: 'Environnement',
      author: 'Samira Khelifi',
      date: '10 Novembre 2024',
      featured: false
    },
    {
      id: 3,
      title: 'Sécurité sur les chantiers : nos engagements',
      excerpt: 'Les protocoles de sécurité et les formations que nous mettons en place pour protéger nos équipes.',
      image: '/assets/images/blog-safety.jpg',
      category: 'Sécurité',
      author: 'Karim Mansouri',
      date: '5 Novembre 2024',
      featured: false
    },
    {
      id: 4,
      title: 'L\'autoroute Est-Ouest : un projet d\'envergure',
      excerpt: 'Retour sur l\'un des plus grands projets d\'infrastructure réalisés par la SNTP.',
      image: '/assets/images/blog-highway.jpg',
      category: 'Projets',
      author: 'Farid Bouchareb',
      date: '1 Novembre 2024',
      featured: true
    },
    {
      id: 5,
      title: 'Formation et développement des compétences',
      excerpt: 'Notre engagement dans la formation continue de nos employés pour maintenir l\'excellence.',
      image: '/assets/images/blog-training.jpg',
      category: 'Ressources Humaines',
      author: 'Leila Hamidi',
      date: '28 Octobre 2024',
      featured: false
    },
    {
      id: 6,
      title: 'Innovation dans les ouvrages d\'art',
      excerpt: 'Les nouvelles techniques de construction de ponts et viaducs utilisées dans nos projets.',
      image: '/assets/images/blog-bridges.jpg',
      category: 'Innovation',
      author: 'Omar Taleb',
      date: '20 Octobre 2024',
      featured: false
    }
  ];

  const categories = [
    { name: 'Innovation', count: 12 },
    { name: 'Projets', count: 25 },
    { name: 'Environnement', count: 8 },
    { name: 'Sécurité', count: 15 },
    { name: 'Ressources Humaines', count: 10 }
  ];

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="page-header" style={{
        backgroundImage: 'url(/assets/images/blog-header.jpg)',
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
            Notre Blog
          </h1>
          <div className="section-divider" style={{
            background: 'repeating-linear-gradient(90deg, #fff, #fff 12.2px, transparent 12.2px, transparent 24.4px)'
          }}></div>
          <p className="page-subtitle" style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem' }}>
            Actualités, insights et expertise du secteur
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content section">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {/* Featured Posts */}
              <div className="featured-posts">
                {blogPosts.filter(post => post.featured).map(post => (
                  <article key={post.id} className="blog-post-featured">
                    <div className="post-thumbnail">
                      <img src={post.image} alt={post.title} />
                      <div className="post-overlay"></div>
                      <span className="post-category-badge">{post.category}</span>
                    </div>
                    <div className="post-content-featured">
                      <div className="post-meta">
                        <span className="meta-item">
                          <FaCalendar /> {post.date}
                        </span>
                        <span className="meta-item">
                          <FaUser /> {post.author}
                        </span>
                      </div>
                      <h2 className="post-title-featured">
                        <a href="#">{post.title}</a>
                      </h2>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <a href="#" className="read-more-btn">
                        Lire la suite <FaArrowRight />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Regular Posts */}
              <div className="blog-posts-grid">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-thumbnail-card">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category-tag">{post.category}</span>
                    </div>
                    <div className="post-content-card">
                      <div className="post-meta-card">
                        <span className="meta-item-card">
                          <FaCalendar /> {post.date}
                        </span>
                        <span className="meta-item-card">
                          <FaUser /> {post.author}
                        </span>
                      </div>
                      <h3 className="post-title-card">
                        <a href="#">{post.title}</a>
                      </h3>
                      <p className="post-excerpt-card">{post.excerpt}</p>
                      <a href="#" className="read-more-link">
                        Lire la suite →
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="pagination-btn">Précédent</button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">Suivant</button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Rechercher</h3>
                <form className="search-form">
                  <input 
                    type="text" 
                    placeholder="Rechercher un article..." 
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">
                    Rechercher
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Catégories</h3>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">
                        <FaFolder /> {category.name} <span>({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Articles Récents</h3>
                <ul className="recent-posts-list">
                  {recentPosts.map(post => (
                    <li key={post.id}>
                      <div className="recent-post-thumbnail">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="recent-post-content">
                        <h4 className="recent-post-title">
                          <a href="#">{post.title}</a>
                        </h4>
                        <span className="recent-post-date">
                          <FaCalendar /> {post.date}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="sidebar-widget">
                <h3 className="widget-title">Tags Populaires</h3>
                <div className="tags-cloud">
                  <a href="#" className="tag">Construction</a>
                  <a href="#" className="tag">Innovation</a>
                  <a href="#" className="tag">Sécurité</a>
                  <a href="#" className="tag">Environnement</a>
                  <a href="#" className="tag">Infrastructure</a>
                  <a href="#" className="tag">Technologie</a>
                  <a href="#" className="tag">Qualité</a>
                  <a href="#" className="tag">Formation</a>
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

