import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Pixel-Perfect Shopify Build from Figma',
      description:
        'This project highlights my comprehensive expertise in building fully functional e-commerce platforms from the ground up. For Olly’s, I meticulously executed a pixel-perfect conversion from Figma designs to a live, responsive Shopify website. The store includes a custom subscription functionality that allows users to seamlessly subscribe and manage recurring orders. My process ensured every visual element, spacing, and brand detail from the design files was accurately translated into the final online store, delivering a seamless and visually stunning user experience.',
      tags: ['Liquid', 'CSS', 'Javascript', 'HTML'],
      live: 'https://ollys-snacks.com/',
    },
    {
      title: 'Custom Shopify Development: Figma to Live',
      description:
        'This project showcases my expertise in transforming complex design concepts into fully functional, high-performing Shopify e-commerce stores. For Indisupplements.com, I undertook the complete development process from Figma designs to a pixel-perfect Shopify implementation. The primary challenge was to meticulously translate every visual detail, spacing, and interactive element from the provided Figma prototypes into a live, responsive Shopify website. This involved precision coding and advanced theme development to ensure the site\'s aesthetic and user experience mirrored the original design with absolute accuracy. Beyond the pixel-perfect conversion, I also implemented and customized various sections and functionalities to meet the client\'s specific business needs and enhance the user journey. This included developing bespoke layouts for product showcases, integrating unique content blocks, and optimizing site performance to deliver a seamless shopping experience. The result is a visually stunning and robust Shopify store that not only reflects the brand\'s identity perfectly but also offers enhanced features and a smooth, engaging user interface, demonstrating my capability to deliver custom, high-quality, and functionally rich e-commerce solutions.',
      tags: ['Liquid', 'CSS', 'Javascript', 'HTML'],
      live: 'https://indisupplements.com/',
    },
    {
      title: 'Elephant Living – Custom Shopify Store Development',
      description:
        'Developed a fully custom Shopify store for Elephant Living, building every section from scratch for maximum flexibility. Implemented advanced features including a dynamic mega menu, custom product pages, subscription functionality, and an integrated order tracking system. Optimized for speed, responsiveness, and scalability, delivering a seamless user experience and a conversion-focused design.',
      tags: ['Liquid', 'CSS', 'Javascript', 'HTML'],
      live: 'https://elephantliving.com/',
    },
  ];

  // Generate live site thumbnail
  const getThumbnail = (url) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>My Portfolio</h2>
          <div className="underline"></div>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-image">
                <img src={getThumbnail(project.live)} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="portfolio-description">
                  {project.description}
                </p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                &times;
              </button>
              <img
                src={getThumbnail(selectedProject.live)}
                alt={selectedProject.title}
                className="modal-image"
              />
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="portfolio-tags">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
