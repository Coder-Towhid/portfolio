import React from 'react';
import './Hero.css';
import towhidImg from '../images/towhid.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-wrapper">
            <div className="hero-image">
              <img src={towhidImg} alt="towhid" />
              {/* Replace the src above with your own portrait image */}
            </div>
            <div className="hero-text">
              <h1 className="hero-name">
                Hi, I'm <br></br> <span className="highlight">S. M. Towhidul Islam</span>
              </h1>
              <h2 className="hero-title">Shopify Developer</h2>
              <p className="hero-description">
                I build high-performing, customized Shopify stores that combine elegant design with seamless functionality to deliver exceptional shopping experiences.
              </p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
              <div className="hero-social">
                <a href="https://github.com/Coder-Towhid" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/towhid-islam-70578427b/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:islamsmtowhidul@gmail.com" onClick={(e) => window.location.href = 'mailto:islamsmtowhidul@gmail.com'}>
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

