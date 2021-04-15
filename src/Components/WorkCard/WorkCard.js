import React from "react";
import "./workCard.css";
import Card from "react-bootstrap/Card";

export default function WorkCard({ card }) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          {/* <Card className="bg-dark text-white">
            <Card.Img src={card.img} alt="Card image" />
          </Card> */}
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
        </div>
      </div>
    </div>
  );
}
