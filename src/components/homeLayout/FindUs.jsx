import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-semibold text-xl'>Find Us on</h1>
            <div className="join join-vertical w-full">
                <button className="btn join-item justify-start font-medium text-accent bg-base-100 "><CiFacebook size={25} color='#3B599C' className='mr-2' /> Facebook</button>
                <button className="btn join-item justify-start font-medium text-accent bg-base-100"><FaTwitter size={25} color='#58A7DE' className='mr-2' /> Twitter</button>
                <button className="btn join-item justify-start font-medium text-accent bg-base-100"><FaInstagram size={25} color="#E1306C" className='mr-2' /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;