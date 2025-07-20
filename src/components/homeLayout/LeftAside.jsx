import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-ring loading-lg mx-auto"></span></div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;