import React from 'react';
import { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    //* loading true hoile laod hoite thakbe ar false hoile user er kase jabe
    if(loading){
        return <p>Loading..............</p>
    }

    //? jodi user and user er id thake taile private router er vitore je children router ase seta render hobe.
    //? on the other hand, navigate kore login page e jabe
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;