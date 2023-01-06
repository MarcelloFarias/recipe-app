import React, { useState, useEffect } from 'react';
import './style.css';

const Categories = () => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.categories);
            data.categories.forEach(category => {
                categories.push(category.strCategory);
                setCategories(categories);
            });
        })
        .catch((error) => console.log(error));

    }, [categories]);

    return (
        <>
            <select className='categories-select'>
                {categories.map((category, index) => {
                    return (
                        <option key={index} className='category-option'>{category}</option>
                    );
                })}
            </select>
        </>
    );
}

export default Categories;