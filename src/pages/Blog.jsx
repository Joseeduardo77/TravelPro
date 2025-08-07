import React from 'react';
import '../styles/Blog.css';

function Blog() {
  return (
    <div className="blog">
      <h1>Nosso Blog</h1>
      <div className="posts">
        <div className="post">
          <h2>O que levar em uma viagem internacional?</h2>
          <p>Dicas práticas para você não esquecer nada na sua mala e aproveitar ao máximo a viagem.</p>
        </div>
        <div className="post">
          <h2>Como encontrar passagens mais baratas?</h2>
          <p>Ferramentas, sites e horários ideais para economizar nas suas próximas férias.</p>
        </div>
        <div className="post">
          <h2>Top 5 destinos para casais</h2>
          <p>Romance e paisagens encantadoras: conheça os lugares mais apaixonantes do mundo.</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;