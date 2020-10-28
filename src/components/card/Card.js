import React from "react";
import "./card.css";

export const Card = ({ imgSrc, altDescription }) => {
  return (
    <article class="flip-card">
      <div class="inner">
        <div class="front">
          <img src={imgSrc} alt={altDescription} />
        </div>
        <div class="back">
          <p>{altDescription}</p>
        </div>
      </div>
    </article>
  );
};
