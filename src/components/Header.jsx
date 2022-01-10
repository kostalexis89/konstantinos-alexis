import React from "react";
import github from "../images/git hub logo.png"
import linkedin from "../images/linkedin logo.png"
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export default function header() {
  return (
      <header className="header">
        <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>
        <p className="header__name">Konstantinos Alexis</p>
        <div>
          <a href="https://www.linkedin.com/in/konstantinosalexis/" rel="noreferrer" target="_blank"><img src={linkedin} alt="logo" className="kostas-photo"></img></a>
          <a href="https://github.com/kostalexis89" rel="noreferrer" target="_blank"><img src={github} alt="logo" className="kostas-photo"></img></a>
        </div>
      </header>
  );
}
