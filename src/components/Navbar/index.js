import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSuitcase } from "react-icons/fa";
import { AiOutlineClose, AiFillContacts, AiFillFilePdf } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import "../../../src/assets/styles/index.css";


//array to store menu paths, classNames and Icons
 const menuLink = [
   {
     link: "About Me",
     path: "/",
     icon: <SiAboutdotme />,
     class: "menuItem",
   },
   {
     link: "Portfolio",
     path: "/portfolio",
     icon: <FaSuitcase />,
     class: "menuItem",
   },
   {
     link: "Contact",
     path: "/contact",
     icon: <AiFillContacts />,
     class: "menuItem",
   },
   {
     link: "Resume",
     path: "/resume",
     icon: <AiFillFilePdf />,
     class: "menuItem",
   },
 ];


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