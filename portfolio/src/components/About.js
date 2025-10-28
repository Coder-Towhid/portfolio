import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-card main-card">
              <div className="card-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience 
                building robust web applications. I specialize in creating elegant solutions 
                to complex problems and enjoy working with modern technologies.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>What I Do</h3>
              <p>Build scalable web applications</p>
              <p>Create intuitive user interfaces</p>
              <p>Design efficient backend architectures</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>My Approach</h3>
              <p>Clean code principles</p>
              <p>User-centric design</p>
              <p>Continuous learning</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>My Interests</h3>
              <p>Exploring new technologies</p>
              <p>Open-source contributions</p>
              <p>Knowledge sharing</p>
            </div>
          </div>

          <div className="tech-stack">
            <h3><i className="fas fa-tools"></i> Tech Stack</h3>
            <div className="tech-items">
              <span className="tech-item"><i className="fab fa-react"></i> React</span>
              <span className="tech-item"><i className="fas fa-cube"></i> Next.js</span>
              <span className="tech-item"><i className="fas fa-bolt"></i> Remix</span>
              <span className="tech-item"><i className="fab fa-node-js"></i> Node.js</span>
              <span className="tech-item"><i className="fab fa-shopify"></i> Shopify</span>
              <span className="tech-item"><i className="fas fa-project-diagram"></i> GraphQL</span>
              <span className="tech-item"><i className="fas fa-palette"></i> Tailwind</span>
              <span className="tech-item"><i className="fas fa-database"></i> MongoDB</span>
              <span className="tech-item"><i className="fas fa-database"></i> Prisma</span>
              <span className="tech-item"><i className="fas fa-file-code"></i> Liquid</span>
              <span className="tech-item"><i className="fab fa-docker"></i> Docker</span>
              <span className="tech-item"><i className="fab fa-git-alt"></i> Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

