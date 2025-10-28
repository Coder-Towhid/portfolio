import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down a bit
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if at bottom of page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isBottom = windowHeight + scrollTop >= documentHeight - 100;

      setIsAtBottom(isBottom);

      // Update active section
      const sections = ['hero', 'about', 'experience', 'portfolio', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className={`navbar ${isScrolled && !isAtBottom ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li data-tooltip="Home">
              <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li data-tooltip="About">
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li data-tooltip="Experience">
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
            <li data-tooltip="Portfolio">
              <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
                <i className="fas fa-folder-open"></i>
              </a>
            </li>
            <li data-tooltip="Education">
              <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
                <i className="fas fa-graduation-cap"></i>
              </a>
            </li>
            <li data-tooltip="Contact">
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <button 
        className={`back-to-top ${isAtBottom ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Navbar;

