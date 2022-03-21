import React from 'react';
import logo from '../../assets/images/logo.png';
import "../../../src/assets/styles/index.css";
import Navbar from '../Navbar';

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <img src={logo} alt="Davies Develops Logo" className="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </header>
    </>
  );
}

export default Header