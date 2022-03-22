import React from "react";
import { Link } from 'react-router-dom';
import { AiFillFilePdf } from "react-icons/ai";
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Resume;
