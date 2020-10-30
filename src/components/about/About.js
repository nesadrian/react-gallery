import React from 'react'
import './about.css'
import json from './about.json'

const About = () => {
    return (
        <div className="about-container">
            <h1>{json.title}</h1>
            <p>{json.description}</p>
        </div>
    )
}

export default About;
