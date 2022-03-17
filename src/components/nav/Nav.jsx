// jsx-a11y/anchor-is-valid;
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div className="navlink">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
          <h4>Home</h4>
        </a>
      </div>
      <div className="navlink">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
          <h4>About</h4>
        </a>
      </div>
      <div className="navlink">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BiBook />
          <h4>Portfolio</h4>
        </a>
      </div>
      <div className="navlink">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
          <h4>Contact</h4>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
