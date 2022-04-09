import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase.init';
const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <form>
                <input type="text" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;