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
                I’m a passionate <strong>Shopify Developer</strong> with years of experience designing, developing, and optimizing high-performing eCommerce stores. I specialize in turning ideas and Figma designs into fully functional, conversion-focused Shopify websites that deliver seamless user experiences and reflect each brand’s unique identity.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>What I Do</h3>
              <p><strong>Build and customize Shopify themes</strong> for performance, responsiveness, and brand consistency.</p>
              <p><strong>Develop custom Shopify sections and functionalities</strong> using Liquid, JavaScript, and APIs.</p>
              <p><strong>Optimize store UX and speed</strong> to improve conversions and enhance the overall shopping experience.</p>
              <p><strong>Collaborate with clients</strong> to deliver end-to-end Shopify solutions — from design translation to deployment.</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>My Approach</h3>
              <p><strong>Clean and scalable code</strong> following best practices in Shopify theme and app development.</p>
              <p><strong>User-centered design</strong> to ensure every element serves the customer journey.</p>
              <p><strong>Continuous learning</strong> to stay ahead with the latest Shopify updates, tools, and eCommerce trends.</p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>My Interests</h3>
              <p>Exploring <strong>Shopify app development</strong> and new Liquid or Hydrogen features.</p>
              <p>Optimizing <strong>store performance and SEO</strong> for better engagement and sales.</p>
              <p>KSharing knowledge and insights with other developers and store owners to grow the Shopify community.</p>
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

