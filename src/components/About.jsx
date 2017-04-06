import React from 'react';
import { Configuration } from '../service/Configuration';

const About = () => (
    <div className="about-container">
        <div>
            <img src={Configuration.aboutPhoto} />
            <span>contacts</span>
        </div>
        <div>
            about me
                </div>
    </div>
);

export default About;