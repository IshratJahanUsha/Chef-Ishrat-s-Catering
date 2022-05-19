import React from 'react';
import About from '../../About Me/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services'
import './Home.css'


const Home = () => {
    return (
        <div className='home-section'>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;