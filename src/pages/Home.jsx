import React from 'react';
import '../styles/Home.css';
import paris from '../assets/images/paris.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import rio from '../assets/images/rio.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2>Descubra o mundo com a TravelPro</h2>
          <p>Ofertas imperdíveis para os melhores destinos do planeta.</p>
          <a href="/reserva" className="btn">Reserve Agora</a>
        </div>
      </section>

      <section className="destaques container">
        <h3>Destinos em Alta</h3>
        <div className="cards">
          <div className="card">
            <img src={paris} alt="Paris" />
            <h4>Paris</h4>
            <p>Romance, cultura e gastronomia!</p>
          </div>
          <div className="card">
            <img src={tokyo}alt="Tóquio" />
            <h4>Tóquio</h4>
            <p>Tecnologia e tradição lado a lado.</p>
          </div>
          <div className="card">
            <img src={rio} alt="Rio de Janeiro" />
            <h4>Rio de Janeiro</h4>
            <p>Praia, alegria e natureza exuberante.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;