import React from 'react'
import '../styles/education.scss'

export default function Education() {
    return (
        <div className='education-view'>
            <div className='education-view__item'>
                <h1>BC's</h1>
                <h2>Computer Science Department</h2>
                <h4>Aristotle University of Thessaloniki - Greece</h4>
                <h5>2008-2013</h5>
            </div>
            <div className='education-view__item'>
                <h1>BC's</h1>
                <h2>Art School</h2>
                <h4>Theatre Studies @ Dilos-Dimitra Chatoupi</h4>
                <h5>2014-2018</h5>
            </div>
            <div className='education-view__item'>
                <h1>Bootcamp</h1>
                <h2>Full Stack Web Development </h2>
                <h4>IronHack</h4>
                <h5>2021</h5>
            </div>
        </div>
    )
}
