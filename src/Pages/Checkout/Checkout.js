import React from 'react';
import './Checkout.css'
import { Routes, Route, Link } from "react-router-dom";


const Checkout = () => {
    return (
        <div className='checkout-page'>
            <h2>Confirm Your Order</h2>
            <Link to="login"><button className='btn'>Checkout</button></Link>
        </div>
    );
};

export default Checkout;