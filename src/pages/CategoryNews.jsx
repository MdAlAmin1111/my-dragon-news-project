import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
        <div>
            categoryNews {id} news length {news.length} individual news {categoryNews.length}
        </div>
    );
};

export default CategoryNews;