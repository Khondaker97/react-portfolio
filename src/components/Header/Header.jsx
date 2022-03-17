import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <h3 className="text">Hello! I'm</h3>
          <h1>
            Khondaker Tanvir <br /> Mahmud
          </h1>
          <h3 className="text-light">Fullstack Developer.</h3>
          <CTA />
        </div>
        <div className="header-right">
          <div className="me">
            <img src={Me} alt="Profile pic" />
          </div>
          <div className="socials">
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
