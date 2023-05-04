import React from 'react';

const Card = ({planName, price, features}) => {
  return (
    <div className="card">
      <h2>{planName}</h2>
      <p className="price">${price}/month</p>
      <ul>
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button className="btn">Sign Up</button>
    </div>
  );
}

export default Card;
