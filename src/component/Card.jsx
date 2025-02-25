import React from 'react';
import './Card.css';

function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

export default Card;
