import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p className='text-3xl font-semibold my-10 text-center'>loading............................</p>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" />
};

export default PrivateRoutes;