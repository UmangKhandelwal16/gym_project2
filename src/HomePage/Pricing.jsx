import React from 'react';
import './Pricing.css'

function App() {
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <div className="left">
        <div className="card" style={{ backgroundColor: 'red' }}>
          <h2>Card 1</h2>
          <p>This is the content of card 1</p>
        </div>
        <div className="card" style={{ backgroundColor: 'red' }}>
          <h2>Card 2</h2>
          <p>This is the content of card 2</p>
        </div>
      </div>
      <div className="right">
        <h1 className="largeHeading" style={{ color: 'red' }}>
          Large Heading
        </h1>
        <h2 className="biggerHeading" style={{ color: 'red' }}>
          Bigger Heading
        </h2>
        <p className="paragraph" style={{ color: 'red' }}>
          A paragraph goes here.
        </p>
        <h2 className="anotherHeading" style={{ color: 'red' }}>
          Another Large Heading
        </h2>
        <ul className="bulletPoints">
          <li style={{ color: 'red' }}>First bullet point</li>
          <li style={{ color: 'red' }}>Second bullet point</li>
          <li style={{ color: 'red' }}>Third bullet point</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
