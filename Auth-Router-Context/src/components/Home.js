import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>this is home</h1>
            {/* <p>{user.displayName}</p> */}
        </div>
    );
};

export default Home;