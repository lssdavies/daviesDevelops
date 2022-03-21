import React from 'react';
import { Link } from 'react-router-dom';
import { FaSuitcase } from "react-icons/fa";
import { AiFillContacts, AiFillFilePdf } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import "../../../src/assets/styles/index.css";

const Navbar = () => {
  
  return (
    <>
      <nav className="navBar">
        <ul className="navMenu">
          <li className="navItem">
            <Link to="/">
              <SiAboutdotme />
              <span>About</span>
            </Link>
          </li>
          <li className="navItem">
            <Link to="/Portfolio">
              <FaSuitcase />
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact">
              <AiFillContacts />
              <span>Contact</span>
            </Link>
          </li>
          <li className="navItem">
            <Link to="/resume">
              <AiFillFilePdf />
              <span>Resume</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar