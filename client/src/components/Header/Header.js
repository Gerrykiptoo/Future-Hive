import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
          <img src="/Future Hive.png" alt="Future Hive" className="logo-image" />
            Future <span>Hive</span>
          </Link>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/programs" className={isActive('/programs')}>Programs</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary">Donate</Link>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
