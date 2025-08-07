import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">TravelPro</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/destinos">Destinos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/reserva">Reservar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;