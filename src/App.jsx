import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Blog from './pages/Blog';
import Reserva from './pages/Reserva';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;