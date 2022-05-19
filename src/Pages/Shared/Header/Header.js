import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css'
import myLogo from '../../../images/myLogo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const handeSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <header className='header'>
                <div className='head-title'>
                    <img src={myLogo} alt="" />
                    <h1>Chef Ishrat's Catering</h1>
                </div>

                <div className='nav-links'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="services" className='link'>Services</Link>
                    {/* <Link to="orders">Orders</Link> */}
                    <Link to="about" className='link'>About Me</Link>
                    {/* <Link to="login" className='link'>Login/Signout</Link> */}
                    {
                        user ?
                            <button onClick={handeSignOut} className='link'>Sign Out</button> :
                            <Link to="/login" className='link'>Login</Link>
                    }

                    {
                        user ?
                        <Link to ='/'  className='link'>{user.email}</Link> : ''
                            
                    }

                </div>
            </header>
        </div>
    );
};

export default Header;