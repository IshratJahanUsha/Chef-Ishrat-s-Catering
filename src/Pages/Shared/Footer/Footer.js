import React from 'react';
import './Footer.css'
import menWomen from '../../../images/manWoman.jpg'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer-section'>
                    <div className='opening'>
                        <h3><span>Opening Times</span> </h3>
                        <p> Saturday - Thursday </p>
                        <p> 11am - 4pm </p>
                        <address>H-47, R-6, Mirpur-11, Dhaka-1216</address>
                    </div>
                    <img className='footer-img' src={menWomen} alt="" />
                    <div className='contracts'>
                        <h3><span>Contact Me</span></h3>
                        <p> Saturday - Thursday </p>
                        <p>Tell : 6789902345 </p>
                        <p> +880173245****</p>

                    </div>
                </div>
                <p>
                    <small>copyright @ 2022</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;