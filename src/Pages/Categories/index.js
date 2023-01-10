import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/index.js';
import './style.css';

const Categories = () => {

    const [ categories, setCategories ] = useState([]);

    async function getAllCategories() {
        await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => {
            data.categories.forEach(async (category) => {
                categories.push({name: category.strCategory, image: category.strCategoryThumb});  
                setCategories([...categories]);  
            });
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <>
            <Header />

            <div className='categories-container'>
                <ul className='categories-list'>
                    {categories.map((category, index) => {
                        return (
                            <Link to={`/categories/${category.name}`} style={{textDecoration: 'none'}} key={index}>
                                <li className='category-card'> 
                                    <img className='category-image' src={category.image} alt='category-thumb' />
                                    <h2 className='category-name'>{category.name}</h2>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Categories;