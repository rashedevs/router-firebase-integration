import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now!</h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="text" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' name="" id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;