import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";

function About() {
  return (
    <>
      <div className="contentContainer">
        <main className="contentPage">
          <p>
            <span>Hi!</span> My name is Larry
            <span className="name">'Simeon Steele'</span>
            Davies and I wanted to thank you for stopping by my page. I am a
            Freelance Web Developer with over 2 years expereince building Front
            End Web Applications.
            <p className="para">
              I have a passion and enthusiasm for building web applications and
              recently expanded on my skill set by completing and achieving my
              Full Stack Web Developer Certificate from UC Davis School of
              Continuing and Professional Education Coding Bootcamp.
            </p>
            I am currently employed by VSP, a Vision Insurance Company as an
            Online Support Representative and have 9+ years Customer Service
            experiece. If you will like to know more about my work exprerience
            take a look at my resume by click
            <span className="name">
              <Link to="/resume">here</Link>.
            </span>
          </p>
        </main>
        <div className="footer">
          <IconContext.Provider value={{ size: "2rem", color: "#FFF" }}>
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
    </>
  );
}

export default About;
