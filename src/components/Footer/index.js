import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem", padding: "1rem" }}>
        <div className="contentContainer">
          <div className="footer">
            <div>
              <Link to="">
                <AiFillGithub />
              </Link>
              <Link to="">
                <AiFillLinkedin />
              </Link>
              <Link>
                <ImStackoverflow />
              </Link>
            </div>
            <div>
              <footerLogo />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;