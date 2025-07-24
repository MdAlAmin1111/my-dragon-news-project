import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={100}>
                <p className='font-semibold'>BB asks female employees not to wear short sleeves at work</p>
                <p className='font-semibold'>272 July victims get medical aid</p>
                <p className='font-semibold'>My son dreamt of becoming an engineer</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;