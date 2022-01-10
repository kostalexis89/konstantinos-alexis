import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.scss";
import wordpressIcon from "../288-2888437_wordpress-development-pink-wordpress-icon-hd-png-download.png";
import reactIcon from "../react-icon.png";
import nodeJsIcon from "../node-js-icon-8.jpg";
import mongoDbIcon from "../mongoDb-icon.jpg";
import contributionIcon from "../contribution-icon.jpg";
import Wordpress from "../components/Wordpress";
import FullStack from "../components/FullStack";
import Contributions from "../components/Contributions";

export default function Projects() {
  const [firstView, setFirstView] = useState(true);
  const [wordpress, setWordpress] = useState(false);
  const [fullStack, SetFullStack] = useState(false);
  const [contributions, setContributions] = useState(false);

  const handleWordpress = () => {
    setFirstView(false);
    setWordpress(true);
    SetFullStack(false);
    setContributions(false);
  };

  const handleFullStack = () => {
    setFirstView(false);
    setWordpress(false);
    SetFullStack(true);
    setContributions(false);
  };

  const handleContributions = () => {
    setFirstView(false);
    setWordpress(false);
    SetFullStack(false);
    setContributions(true);
  };

  return (
    <>
      {firstView ? (
        <section className="section-features">
          <Link to="/projects/wordpress">
            <div className="feature-box" onClick={handleWordpress}>
              <img className="icon" src={wordpressIcon} alt="wordpress"></img>
            </div>
          </Link>

          <Link to="/projects/fullstack">
            <div className="feature-box" onClick={handleFullStack}>
                <img className="icon" src={reactIcon} alt="react"></img>
                <img className="icon" src={nodeJsIcon} alt="NodeJs"></img>
                <img className="icon" src={mongoDbIcon} alt="MongoDb"></img>
            </div>
          </Link>

          <Link to="/projects/contributions">
            <div className="feature-box" onClick={handleContributions}>
                <img
                className="icon"
                src={contributionIcon}
                alt="contributions"
                ></img>
            </div>
          </Link>
        </section>
      ) : wordpress ? (
        <Wordpress />
      ) : fullStack ? (
        <FullStack />
      ) : contributions ? (
        <Contributions />
      ) : 
      <span>No element Found</span>}
    </>
  );
}
