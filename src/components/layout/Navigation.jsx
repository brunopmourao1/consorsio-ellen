import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'A Especialista', path: '/especialista' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar-main ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <span className="logo-text italic">Consórcio <span className="highlight">Ellen</span></span>
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-only">
            <Link to="/contato" className="nav-cta" onClick={handleLinkClick}>
              Análise Estratégica
            </Link>
          </li>
        </ul>

        {/* Hamburger Toggle */}
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <Link to="/contato" className="nav-cta desktop-only">
          Análise Estratégica
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
