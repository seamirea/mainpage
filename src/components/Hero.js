import React from 'react';
import './Hero.css';
import Crypto from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>Your best crypto tracker</p>
          <h1>Keep an eye on price changes with us.</h1>
          <p>Real-time pricing data 24/7</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
