import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <img className='m-5 w-[470px]' src={logo} alt="" />
            <h3 className='font-[18px] text-accent'>Journalism  Without Fear or Favour</h3>
            <p className='text-accent'>{format(new Date(),"EEEE, MMMM dd, yyyy" )}</p>
           
        </div>
    );
};

export default Header;
