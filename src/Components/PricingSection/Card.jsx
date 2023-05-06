import React from 'react';
import  {useNavigate} from 'react-router-dom'
import plans from './plans'
import style from './pricing.module.css'


const Card = ({planName, price, features}) => {
  const navigate=useNavigate()
  return (
    <div className={style.card}>
      <h2>{planName}</h2>
      <p className={style.price}>${price}/month</p>
      <ul>
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button onClick={()=>{navigate('/register')}} className={style.btn}>Get Started</button>
    </div>
  );
}

export default Card;
