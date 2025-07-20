import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-baseline-last'>
            <div></div>
            <div className='nav flex gap-3 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login_btn flex gap-4'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;