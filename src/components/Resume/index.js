import React from "react";
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";
import file from "./resume.pdf";

function Resume() {
  return (
    <>
      <div className="contentContainer">
        <section className="contentPage">
          <div className="projectContainer">
            <h1 className="title">
              <span style={{ color: "#172243" }}>[</span>My Resume
              <span style={{ color: "#172243" }}>]</span>
            </h1>
            <div className="cardContainer">
              <div className="card">
                <div className="cardTitle">
                  <h2>
                    Click the link to download a copy of my
                    <Link
                      to={file}
                      target="_blank"
                      rel="noreferrer noopener" download
                    >
                      <span>
                        <AiFillFilePdf /> Resume
                      </span>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="footer">
              <IconContext.Provider value={{ size: "2rem", color: "#172243" }}>
                <a
                  href="https://github.com/lssdavies"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/larry-davies-6a95b2221/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <AiFillLinkedin />
                  </span>
                </a>
                <a
                  href="https://stackoverflow.com/users/16962636/lssdavies"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <ImStackoverflow />
                  </span>
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Resume;
