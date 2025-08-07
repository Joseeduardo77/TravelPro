import React from 'react';
import '../styles/Destinos.css';

function Destinos() {
  return (
    <div className="destinos">
      <h1>Destinos Populares</h1>
      <div className="cards">
        <div className="card">
          <img src="/src/assets/images/paris.jpg" alt="Paris" />
          <h2>Paris</h2>
          <p>A cidade do amor com a Torre Eiffel, cafés e museus incríveis.</p>
        </div>
        <div className="card">
          <img src="/src/assets/images/tokyo.jpg" alt="Tóquio" />
          <h2>Tóquio</h2>
          <p>Futurista e tradicional ao mesmo tempo. Uma aventura única!</p>
        </div>
        <div className="card">
          <img src="/src/assets/images/rio.jpg" alt="Rio de Janeiro" />
          <h2>Rio de Janeiro</h2>
          <p>Praias, samba e paisagens de tirar o fôlego. Viva o Brasil!</p>
        </div>
      </div>
    </div>
  );
}

export default Destinos;