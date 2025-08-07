import React from 'react';
import '../styles/Destinos.css';
import paris from '../assets/images/paris.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import rio from '../assets/images/rio.jpg';

function Destinos() {
  return (
    <div className="destinos">
      <h1>Destinos Populares</h1>
      <div className="cards">
        <div className="card">
          <img src={paris} alt="Paris" />
          <h2>Paris</h2>
          <p>A cidade do amor com a Torre Eiffel, cafés e museus incríveis.</p>
        </div>
        <div className="card">
          <img src={tokyo} alt="Tóquio" />
          <h2>Tóquio</h2>
          <p>Futurista e tradicional ao mesmo tempo. Uma aventura única!</p>
        </div>
        <div className="card">
          <img src={rio} alt="Rio de Janeiro" />
          <h2>Rio de Janeiro</h2>
          <p>Praias, samba e paisagens de tirar o fôlego. Viva o Brasil!</p>
        </div>
      </div>
    </div>
  );
}

export default Destinos;