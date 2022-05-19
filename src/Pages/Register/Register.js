import React from 'react';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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
        <div className='register-section'>
            <h2>Register Now</h2>
            <input type="text" placeholder='Name' />
            <br />
            <input
                type="email"
                value={email} 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input type="checkbox"  className='terms'/>Accept Terms and Conditions
            <br />
            <button onClick={() => createUserWithEmailAndPassword(email, password)} className= 'btn'>
                Register
            </button>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Register;
           
//             
           