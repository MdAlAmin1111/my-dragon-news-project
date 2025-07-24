import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { userInfo, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }
    if (userInfo && userInfo?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>

};

export default PrivateRoute;

// if there have any user then return children
// if no then we will navigate to login page 