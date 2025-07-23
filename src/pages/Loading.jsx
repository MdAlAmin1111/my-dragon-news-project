import React from 'react';

const Loading = () => {
    return (
        <div className='w-11/12 h-screen mx-auto m-3 flex justify-center items-center'>
            <span className="loading loading-spinner text-secondary w-10"></span>
        </div>
    );
};

export default Loading;