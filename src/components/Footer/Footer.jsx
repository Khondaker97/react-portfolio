import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-top">
        <div className="footer_logo">
          <a href="#">KTM.</a>
        </div>
        <div className="network">
          <a
            href="https://www.linkedin.com/in/khondaker-tanvir-mahmud"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Khondaker97"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01337bcba69483aa5c"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
      <h5>All rights reserved. Copyright© 2022.</h5>
    </footer>
  );
};

export default Footer;
