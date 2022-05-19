import React from 'react';
import './Login.css'
import { Routes, Route, Link } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/');
    }

    return (
        <div className='login-page'>
            <h2>Login</h2>

            <label htmlFor="Email">Email Address</label>
            <br />
            <input
                type="email"
                value={email}
                name="Email" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="Password">Password</label>
            <br />
            <input
                type="password"
                value={password}
                name="Password" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={() => signInWithEmailAndPassword(email, password)} className='btn'>
                Sign In
            </button>
            <br />
            New in "Chef Ishrat's Catering"? <Link to="register" className='register-link'>Register Now</Link>
            <br />
            Forget Password? <Link to="notFound">Reset Password</Link>


            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;
