import React from "react";
import { AiFillGithub} from "react-icons/ai";
import { projects } from './projects';

function Portfolio() {
  return (
    <>
      <div className="contentContainer">
        <section className="contentPage">
          <div className="projectContainer">
            <h1 className="title">
              <span style={{ color: "#172243" }}>[</span>My Projects
              <span style={{ color: "#172243" }}>]</span>
            </h1>
            <div className="cardContainer">
              {/* Mapping through projects array to display projects*/}
              {projects.map((item, index) => {
                return (
                  <div className="card">
                    <div className="cardTitle">
                      <img src={item.logo} alt="logo" className="cardImg" />
                      <h2>{item.title}</h2>
                    </div>
                    <div className="cardBody">
                      <a
                        href={item.deploy}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div>
                          <img src={item.image} alt="app"/>
                        </div>
                        <div className="cardDescription">
                          {item.description}
                        </div>
                      </a>
                      <div className="cardFooter">
                        <a
                          href={item.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span>
                            view the code
                            <AiFillGithub />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
