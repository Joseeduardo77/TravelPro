import React, { useState } from 'react';
import '../styles/Reserva.css';

function Reserva() {
  const [formData, setFormData] = useState({
    nome: '',
    destino: '',
    data: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Reserva confirmada para ${formData.nome} em ${formData.destino} na data ${formData.data}');
  }

  return (
    <div className="reserva">
      <h1>Faça sua Reserva</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <select
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o destino</option>
          <option value="Paris">Paris</option>
          <option value="Tóquio">Tóquio</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
        </select>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />
        <button type="submit">Reservar Agora</button>
      </form>
    </div>
  );
}

export default Reserva;