import React from 'react';
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import moment from 'moment';
import { CiBookmark } from 'react-icons/ci';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
    } = news;

    return (
        <div className="card w-full bg-base-100 shadow-md border-base-200 rounded-lg">
            {/* Header: Author Info + Share Icon */}
            <div className="flex items-center justify-between p-5 bg-base-200 rounded-t-lg">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="font-semibold text-sm">{author.name || 'Unknown'}</h2>
                        <p className="text-xs text-gray-500">
                            {author.published_date
                                ? moment(author.published_date).format('YYYY-MM-DD')
                                : 'No date'}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <CiBookmark size={25} />
                    <FaShareAlt size={20} className="text-gray-500 cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 mt-4">
                <h1 className="text-[20px] font-bold">{title}</h1>
            </div>

            {/* Image */}
            <figure className="px-4 pt-4">
                <img
                    src={image_url}
                    alt="News"
                    className="rounded-md w-full object-cover h-48"
                />
            </figure>

            {/* Details */}
            <div className="px-4 pt-2 text-sm text-gray-700">
                <p>
                    {details.length > 250
                        ? `${details.slice(0, 250)}...`
                        : details}
                </p>
                <p className="text-primary font-semibold mt-2 cursor-pointer mb-5">Read More</p>
                <hr className='text-base-200 mb-0'/>
            </div>
            

            {/* Footer: Rating & Views */}
            <div className="flex items-center justify-between px-4 py-5">
                <div className="flex items-center text-warning gap-1">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar
                            key={index}
                            className={
                                index < rating.number
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                            }
                        />
                    ))}
                </div>
                <div className="flex items-center text-gray-500 gap-1">
                    <FaRegEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
