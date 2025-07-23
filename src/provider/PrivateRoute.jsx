import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext);
    console.log(userInfo, loading);
    if (loading) {
        return <Loading></Loading>
    }
    if (userInfo && userInfo?.email) {
        return children;
    }
    
    return <Navigate to={'/auth/login'}></Navigate>

};

export default PrivateRoute;

// if there have any user then return children
// if no then we will navigate to login page 