import React from 'react';
import swimming from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playground from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 space-y-5 py-5 px-1'>
            <h1 className='font-semibold text-xl px-4'>Q-Zone</h1>
            <img className='w-full' src={swimming} alt="swimming" />
            <img className='w-full' src={classImage} alt="classImage" />
            <img className='w-full' src={playground} alt="playground" />
        </div>
    );
};

export default QZone;