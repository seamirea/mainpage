import React from 'react';
import './Signup.css';
import Crypto from '../assets/trade.png';

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className="right">
          <h2>Track your crypto portfolio on the go.</h2>
          <p>
            Our website empowers users to keep an eye on their portfolio and
            crypto prices. Never lose track of your assets, no matter where you
            are.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
