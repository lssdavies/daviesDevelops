import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/footer-logo.png";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem", padding: "1rem" }}>
        <footer>
          <div>
            <Link
              to="https://github.com/lssdavies"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/larry-davies-6a95b2221/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              to="https://stackoverflow.com/users/16962636/lssdavies"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImStackoverflow />
            </Link>
          </div>
          <div>
            <img src={footerlogo} className="footerlogo" />
          </div>
        </footer>
      </IconContext.Provider>
    </>
  );
}

export default Footer;