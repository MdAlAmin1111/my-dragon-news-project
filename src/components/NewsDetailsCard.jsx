import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    return (
        <div className='border p-7 border-base-300 rounded-[5px]'>
            <img className='w-full h-[400px] object-cover' src={news.image_url} alt="" />
            <h1 className='text-2xl font-bold mt-5 mb-2 text-primary'>{news.title}</h1>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary mt-7'><IoMdArrowRoundBack size={15} /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;