import React from 'react';
import './Pricing.css';
import Card from './Card';
import plans from './plans';

const Pricing = () => {
  return (
    <div className='OurPrices'>
    <h3 className='Plans'> Our Plans </h3>
    <div className="card-container">
      {plans.map(plan => (
        <Card
          key={plan.planName}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
    </div>
  );
}

export default Pricing;
