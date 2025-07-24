import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState({});

    useEffect(() => {
        const detailNews = data.find((singleNews) => singleNews.id == id);
        setNews(detailNews);
    }, [data, id])


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-3'>
                <section className='col-span-9'>
                    <h2 className='font-semibold text-accent mb-2'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;