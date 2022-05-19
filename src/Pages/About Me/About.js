import React from 'react';
import './About.css'
import { Routes, Route, Link } from "react-router-dom";
import chef from '../../images/chef.webp'

const About = () => {
    return (
        <div>
            <h2 className='about-title'>About Me</h2>
            <div className='about-me'>
                <img src={chef} alt="" />
                <p>
                    <span>
                    Assalamu alaikum. My name is Ishrat Jahan Usha. <br /> I am a home chef. <br /> It's my lunchbox catering service. <br /> There are 6 types of lunchbox in my menu. <br /> My foods healty and tasty. <br /> If you like my lunchbox, please order and support me. <br />
                    These lunchbox are suitible for both your workplace and your child's school.
                    </span>
                    <Link to="/"><button className='btn'>Return Home</button></Link>
                </p>
            </div>
        </div>
    );
};

export default About;