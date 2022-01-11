import React from "react";
import { Link } from "react-router-dom";

import "../styles/contact.scss";

export default function Contact() {
  return (
    <div className="contact-view">
      <h1>Let's Make Something Together!</h1>
      <div className="contact-view__ways">
        <button
          className="sides-nav__item"
          onClick={() => (window.location = "mailto:kostalexis89@hotmail.com")}
        >
          e-mail
        </button>

        <a
          href="https://www.linkedin.com/in/konstantinosalexis/"
          className="sides-nav__item"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <span>+4915751115057</span>
      </div>
    </div>
  );
}
