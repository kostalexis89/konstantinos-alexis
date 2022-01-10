import React from 'react'
import '../styles/about.scss'

export default function About() {
    return (
        <div className="container-card">
                       <div className="card">
                           <div className="card__side card__side--front">
                                <div className="card__picture">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span">Web Developer</span>
                                </h4>
                           </div>
                           <div className="card__side card__side--back card__side--back">
                                <div className="card__cta">
                                    <div className="card__text-box">
                                        <p className="card__text-only">Hi! I'm a Full-Stack Web Developer focused on the Front-End with a background in Web Design. Eager to contribute to team success through hard work, attention to detail with strong sense of aesthetics.

I have a BC's in Computer Science and a BC's in the field of Arts.

I am seeking opportunities to continue my learning path as a Web Developer in a company as part of an aspiring and diversity team. I am located in Berlin!</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
    )
}
