import React, { use } from 'react';
import { NavLink } from 'react-router';
// import { useEffect, useState } from 'react';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);


    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     fetch('/categories.json').then(res => res.json()).then(data => setCategories(data));
    // }, []);


    return (
        <div>
            <h2 className='font-bold'>All Category ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-2 font-semibold'>
                {
                    categories.map((category) => <NavLink className={'btn border-0 bg-base-100 hover:bg-base-200 text-accent font-semibold justify-start pl-12'} to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;