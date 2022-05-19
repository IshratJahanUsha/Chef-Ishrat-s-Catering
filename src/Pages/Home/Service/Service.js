import React from 'react';
import './Service.css'
import { Routes, Route, Link } from "react-router-dom";

const Service = ({service}) => {
    return (
        <div>
            <div className='service-card'>
                <img src={service.img} alt="" />
                <p><span>Name</span> : {service.Name } </p>
                <p><span>Price</span> : {service.Price } Tk.</p>
                <p><span>Description</span> : {service.Description } </p>
                <Link to="checkout"><button className='btn'>Order Now</button></Link>
            </div>
        </div>
    );
};

export default Service;
