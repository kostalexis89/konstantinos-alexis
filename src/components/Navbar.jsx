import React from "react";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Bio</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Projects</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Education</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Contact</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2022 by Konstantinos Alexis. All right reserved.</div>
    </nav>
  );
}
