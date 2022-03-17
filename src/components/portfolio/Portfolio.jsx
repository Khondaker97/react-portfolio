import React from "react";
import "./Portfolio.css";
import Item from "./Item";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-top">
        <h5>My Working Experience</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio__container">
        <Item />
      </div>
    </section>
  );
};

export default Portfolio;
