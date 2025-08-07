import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>TravelPro</h2>
          <p>Explore o mundo com conforto e segurança.</p>
        </div>

        <div className="footer-links">
          <h4>Links rápidos</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/destinos">Destinos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TravelPro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;