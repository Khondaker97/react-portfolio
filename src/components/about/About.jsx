import React from "react";
import "./about.css";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaNodeJs, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="about-top">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="about__container">
        <div className="about__me">
          <h2>
            I am a self taught Fullstack MERN developer. I can develop you
            frontend and backend sites. See my projects and experience. If you
            are interested or need any further query, talk to me.
          </h2>
          <a href="#contact" className="btn btn-primary about-btn">
            Contact
          </a>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="languages">
              <div className="title">
                <h5>Know About</h5>
                <h2>Languages</h2>
              </div>
              <div className="languages-box">
                <article className="about__card">
                  <h5>JAVASCRIPT</h5>
                  <SiJavascript className="about__icon" />
                </article>
                <article className="about__card">
                  <h5>HTML</h5>
                  <AiOutlineHtml5 className="about__icon" />
                </article>
                <article className="about__card">
                  <h5>CSS</h5>
                  <FaCss3 className="about__icon" />
                </article>
              </div>
            </div>
            <div className="frameworks">
              <div className="title">
                <h2>Frameworks</h2>
              </div>
              <div className="framework-box">
                <article className="about__card">
                  <h5>Node Js</h5>
                  <FaNodeJs className="about__icon" />
                </article>
                <article className="about__card">
                  <h5>React</h5>
                  <FaReact className="about__icon" />
                </article>
                <article className="about__card">
                  <h5>BootStrap</h5>
                  <SiBootstrap className="about__icon" />
                </article>
                <article className="about__card">
                  <h5>Tailwind</h5>
                  <SiTailwindcss className="about__icon" />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
