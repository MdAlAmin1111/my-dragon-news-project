import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();
    const news = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(news);
        }
        else if (id == 1) {
            const filteredNews = news.filter((singleNews) => singleNews.others.is_today_pick === true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = news.filter((singleNews) => singleNews.category_id == id);
            setCategoryNews(filteredNews);
        }


    }, [id, news])

    return (
        <div className='mx-6'>
            <h1 className='mb-5 font-bold'>Dragon News Home</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)

                }
            </div>
        </div>
    );
};

export default CategoryNews;