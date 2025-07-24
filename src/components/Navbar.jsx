import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase/firebase.config';

const Navbar = () => {

    const { userInfo, logOut } = use(AuthContext);

    const handleLogout = () => {
        return logOut();
        // signOut(auth);
    }
    return (
        <div className='flex justify-between items-baseline-last'>
            <div>{userInfo && userInfo.email}</div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login_btn flex gap-4 items-center'>
                <img className='w-12 rounded-full' src={`${userInfo ? userInfo.photoURL : user}`} alt="" />
                {
                    userInfo ? <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button> : <Link to={'/auth/login'} className='btn btn-primary px-8'>Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;