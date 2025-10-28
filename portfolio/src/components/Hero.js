import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-wrapper">
            <div className="hero-image">
              <img src="https://via.placeholder.com/400x400/ffffff/667eea?text=Your+Photo" alt="John Doe" />
              {/* Replace the src above with your own portrait image */}
            </div>
            <div className="hero-text">
              <h1 className="hero-name">
                Hi, I'm <span className="highlight">John Doe</span>
              </h1>
              <h2 className="hero-title">Full Stack Developer</h2>
              <p className="hero-description">
                I create beautiful and functional web applications with a passion for 
                clean code and exceptional user experiences.
              </p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
              <div className="hero-social">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:your.email@example.com" onClick={(e) => window.location.href = 'mailto:your.email@example.com'}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;

