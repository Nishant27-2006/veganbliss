import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/veganbliss.png" alt="Vegan Bliss Logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger Icon */}
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/reference" onClick={() => setIsOpen(false)}>Reference</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
