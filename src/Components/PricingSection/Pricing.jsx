import React from 'react';
import style from './pricing.module.css';
import Card from './Card';
import plans from './plans';

const Pricing = () => {
  return (
    <div>
    <h3 className={style.Plans}> Our Plans </h3>
    <div className={style.card_container}>
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
