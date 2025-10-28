import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'SEOPage1',
      position: 'Shopify Developer',
      duration: 'Jul 2025 - Present',
      description: 'Delivered high-quality Shopify projects ahead of deadlines by building and customizing themes from scratch, providing end-to-end support, and implementing tailored solutions aligned with business goals and branding.',
      technologies: ['Liquid', 'Remix', 'JavaScript', 'GraphQL', 'prisma', 'AJAX',]
    },
    {
      company: 'WebSense',
      position: 'Shopify Developer',
      duration: 'Jan 2025 - Jun 2025',
      description: 'I develop and customize pixel-perfect Shopify themes, implement custom functionalities, and deliver end-to-end Shopify solutions — including app development — to create high-performing, brand-aligned online stores.',
      technologies: ['Liquid', 'Remix', 'JavaScript', 'GraphQL', 'prisma']
    },
    {
      company: 'HSBLCO Solution LLC',
      position: 'Software Engineer (Intern)',
      duration: 'Jul 2022 - Dec 2022',
      description: 'Successfully delivered projects ahead of deadlines, showcasing efficiency and a commitment to timely project delivery.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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

export default Experience;

