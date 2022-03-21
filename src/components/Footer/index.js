import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
// import footerlogo from "../../assets/images/footer-logo.png";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem", padding: "1rem" }}>
        <div className="contentContainer">
          <footer className="footer">
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
              {/* <img src={footerlogo} alt="Davies Develops Logo" className="logo" /> */}
            </div>
          </footer>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
