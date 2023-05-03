import React from 'react';
import './AboutUs.css'

function GymAboutUs() {
  return (
    <div className="Aboutcontainer">
      <div className="upper-section">
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Gym Video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="text">
          <h2>About Us</h2>
          <p>We are a fitness center committed to helping our members reach their fitness goals.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <div className="lower-section">
        <div className="text">
          <h2>Our Mission</h2>
          <ul>
            <li>Provide a safe and welcoming environment for all members.</li>
            <li>Offer a variety of fitness classes and programs for all fitness levels.</li>
            <li>Empower our members to lead healthy and active lifestyles.</li>
          </ul>
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Gym Video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  );
}

export default GymAboutUs;
