import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2014 - 2018',
      description: 'Specialized in Software Engineering and Data Structures. Maintained GPA of 3.8/4.0.',
      achievements: ['Dean\'s List (3 semesters)', 'Computer Science Excellence Award', 'President of Code Club']
    },
    {
      institution: 'Coding Bootcamp Academy',
      degree: 'Full Stack Web Development Certification',
      duration: '2018',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      achievements: ['Top 10% of cohort', 'Final project featured in showcase', 'Mentored 20+ students']
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <div className="underline"></div>
        </div>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <span className="education-duration">{edu.duration}</span>
                <p className="education-description">{edu.description}</p>
                <div className="education-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

