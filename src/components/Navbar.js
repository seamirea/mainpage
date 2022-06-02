import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          Alatau<span className="primary">Invest</span>
        </h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="hero">Home</a>
          </li>
          <li>
            <a href="featured">Featured</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Get Started</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
