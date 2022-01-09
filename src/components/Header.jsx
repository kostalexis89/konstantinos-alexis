import React from "react";
import photo from "../kostas photo cropped.jpg";
import logo from '../logo.png'

export default function header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" className="logo"></img>
        <p>Konstantinos Alexis</p>
        <img src={photo} alt="logo" className="kostas-photo"></img>
      </header>
    </div>
  );
}
