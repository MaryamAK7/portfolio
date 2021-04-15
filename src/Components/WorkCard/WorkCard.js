import React from "react";
import "./workCard.css";

export default function WorkCard({ card }) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={card.img} alt="Card" style={{width: '100%', height:'100%'}} />
        </div>
        <div class="flip-card-back">
          <h2 className="card-title">{card.title}</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={card.demo}
            className="demo-link"
          >
            {" "}
            Demo{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={card.git}
            className="demo-link"
          >
            {" "}
            <i class="fab fa-github"></i>
          </a>
          <div className='app-desc'>
            {card.desc}
          </div>
        </div>
      </div>
    </div>
  );
}
