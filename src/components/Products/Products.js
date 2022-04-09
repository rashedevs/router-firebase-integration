import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase.init';

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Who is there?</h2>
            <h4>{user ? user.displayName : 'Ami keu na.'}</h4>
        </div>
    );
};

export default Products;