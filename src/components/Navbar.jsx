import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link to="/bio" className="side-nav__link">
            <span>Bio</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/projects" className="side-nav__link">
            <span>Projects</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/education" className="side-nav__link">
            <span>Education</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/contact" className="side-nav__link">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className="legal">&copy; 2022 by Konstantinos Alexis. All right reserved.</div>
    </nav>
  );
}
