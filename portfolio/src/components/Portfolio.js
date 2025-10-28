import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, user authentication, and drag-and-drop functionality.',
      image: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Task+App',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and engagement metrics.',
      image: 'https://via.placeholder.com/400x300/84fab0/ffffff?text=Dashboard',
      tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data.',
      image: 'https://via.placeholder.com/400x300/8fd3f4/ffffff?text=Weather',
      tags: ['React', 'OpenWeather API', 'Leaflet'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging application with private and group chat features, file sharing, and emoji support.',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Chat+App',
      tags: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking application with workout logging, progress analytics, and personalized recommendations.',
      image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Fitness',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>My Portfolio</h2>
          <div className="underline"></div>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

