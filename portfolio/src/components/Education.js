import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Daffodil International University | DIU',
      degree: 'Computer Science & Engineering',
      duration: '2018 - 2022',
      description: 'Specialized in Software Engineering and Data Structures.',
      achievements: ['Selected for Bootcamp through Take-Off Programming Contest', 'Among the top 20 finalists for DIU Intra University Hackathon (2022)']
    },
    {
      institution: 'Birshreshtha Munshi Abdur Rouf Public',
      degree: 'HSC',
      duration: '2017 - 2018',
      description: 'Developed a strong foundation in science and mathematics with a growing interest in computer technology and logical problem-solving, which later guided my path toward software development.',
      achievements: ['Led a small tech club initiative focused on basic programming and robotics awareness.']
    },
    {
      institution: 'Birshreshtha Munshi Abdur Rouf Public',
      degree: 'SSC',
      duration: '2015 - 2016',
      description: 'Built a solid academic foundation in core subjects with early exposure to computer studies and an enthusiasm for technology and innovation.',
      achievements: ['Achieved outstanding results in Science and ICT subjects.']
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

