import React from "react";
import "../styles/projectComponentBox.scss";
import gitHub from "../images/git hub logo.png";

export default function FullStack() {
  return (
    <section className="section-features">
      <a
        href="https://book-cycle.herokuapp.com/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="project-box">
          <p>BookCycle</p>

          <div className="stack">
            <p>React,</p>
            <p>MongoDB,</p>
            <p>Node.js</p>
          </div>
          <a
            href="https://github.com/kostalexis89/BookCycle"
            rel="noreferrer"
            target="_blank"
          >
            <img className="icon" alt="react" src={gitHub}></img>
          </a>
        </div>
      </a>

      <a
        href="https://club-kid.herokuapp.com/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="project-box">
          <p>ClubKid</p>
          <div className="stack">
            <p>MongoDB,</p>
            <p>Handlebars.js,</p>
            <p>Node.js</p>
          </div>
          <a
            href="https://github.com/NoamShani1/project-2"
            rel="noreferrer"
            target="_blank"
          >
            <img className="icon" alt="react" src={gitHub}></img>
          </a>
        </div>
      </a>
    </section>
  );
}
