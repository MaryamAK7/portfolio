import React, {useEffect} from "react";
import github from '../../images/github.png'
import "./workCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkCard({ card }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div class="flip-card" 
    data-aos="fade-up"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={card.img}
            alt="Card"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="flip-card-back">
          <h2 className="card-title">{card.title}</h2>
          <div> <a
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
            className="git-link"
          >
            {" "}
            <img src={github} alt='' />
          </a>
          </div>
          <div className="app-desc">{card.desc}</div>
        </div>
      </div>
    </div>
  );
}
