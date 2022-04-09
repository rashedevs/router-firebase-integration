import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
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
                <button onClick={signInWithGoogle}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;