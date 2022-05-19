import React from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import googleIcon from '../../images/googleIcon.png'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

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
        console.log(user);
    }

    return (

        <div>
            <div className='role-line'>
                <div className='left-line'></div>
                <p>or</p>
                <div className='right-line'></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className='google-btn'>
                    <img className='google-icon' src={googleIcon} alt="" />
                    Google Sign In 
                </button>
            </div>
        </div>

    );

};

export default SocialLogin;