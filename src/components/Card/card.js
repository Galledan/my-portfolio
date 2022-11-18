import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="upper">
        <img src={props.imgSrc} alt="project-alt" />
      </div>
      <div className="lower">
          <div className="project-title">
            <h2>{props.title}</h2>
          </div>
          <div className="project-desc">
            <p>{props.desc}</p>
          </div>
        <div className="buttons">
          {props.webpage !== "" && (
            <a
              href={props.webpage}
              target="_blank"
              rel="noopener noreferrer"
              className="showSite"
            >
              View Live <i class="fas fa-file-code"></i>
            </a>
          )}
          {props.github !== "" && <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="showCode"
          >
            View Code <i class="fab fa-github"></i>
          </a>}
        </div>
      </div>
    </div>
  );
}

export default Card;
