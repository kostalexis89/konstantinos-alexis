import React from "react";
import "../styles/projectComponentBox.scss"

export default function Wordpress() {
  return (
    <section className="section-features">
      <a href="https://horostheatre.gr/" rel="noreferrer" target="_blank">
        <div className="project-box">
          <img className="icon" alt="react" src="https://horostheatre.gr/wp-content/uploads/2021/01/HOROS-LOGO-identity.png"></img>
          <p>Horos Theatre Company</p>
          <div className="stack">
            <p>Wordpress,</p>
            <p>Divi,</p>
            <p>ACF</p>
          </div>
        </div>
      </a>

      <a href="https://www.bullicoffee.de/" rel="noreferrer" target="_blank">
        <div className="project-box">
          <img src="https://www.bullicoffee.de/wp-content/uploads/2021/01/Logo-Bulli1238.png" className="icon" alt="react"></img>
          <p>BulliCoffee Van</p>
          <div className="stack">
            <p>Wordpress,</p>
            <p>Divi,</p>
            <p>Yoast</p>
          </div>
        </div>
      </a>
      
    </section>
  );
}
