import React from "react";
import Data from "./data";

const Item = () => {
  return (
    <>
      {Data.map(({ id, img, title, text, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <h5>{text}</h5>
            <div className="src">
              <a href={github} className="btn p-btn">
                Source
              </a>
              <a
                href={demo}
                className="btn btn-primary p-btn"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Item;
