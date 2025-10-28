import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2021 - Present',
      description: 'Led development of scalable web applications, managed a team of 5 developers, and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      duration: '2019 - 2021',
      description: 'Developed and maintained RESTful APIs, implemented responsive user interfaces, and collaborated with cross-functional teams.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express']
    },
    {
      company: 'StartUpHub',
      position: 'Junior Web Developer',
      duration: '2018 - 2019',
      description: 'Built responsive web applications, worked with frontend frameworks, and contributed to codebase improvements.',
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

