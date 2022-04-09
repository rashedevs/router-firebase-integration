import React from 'react';

const Login = () => {
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
                <button>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;