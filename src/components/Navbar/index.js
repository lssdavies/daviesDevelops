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
  //setting state for side menu to false to not show on load
  const [sideMenu, setSideMenu] = useState(false);

  //function to toggle between states onClick
  const menuOnOff = () => {
    setSideMenu(!sideMenu);
  };

  // to be added back FaBar className="burgerMenu"

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menuIcons">
          <FaBars onClick={menuOnOff} />
        </Link>
      </div>
      <nav className={sideMenu ? "menuActive" : "menuOff"}>
        <ul className="navMenu" onClick={menuOnOff}>
          <li className="menuToggle">
            <Link to="#" className="menuIcons">
              <AiOutlineClose />
            </Link>
          </li>
          {menuLink.map((list, index) => {
            return (
              <li key={index} className={list.class}>
                <Link to={list.path}>
                  {list.icon}
                  <span>{list.link}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar