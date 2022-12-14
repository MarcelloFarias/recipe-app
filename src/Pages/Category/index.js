import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/index.js';
import ButtonBack from '../../Components/ButtonBack/index.js';
import { Link } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router-dom';

const Category = () => {

    const { category } = useParams();
    const [ recipes, setRecipes ] = useState([]);

    async function getCategory() {
        await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((data) => {
            setRecipes(data.meals);
        })
        .catch((error) => console.log(error));
    }
    
    useEffect(() => {
        getCategory();
    }, []);

    return (
        <>
            <Header />

            <div className='category-name-container'>
                <ButtonBack path='/categories' />
                <h1 className='category-name'>{category}</h1>
            </div>

            <div className='recipe-category-container'>
                <ul className='recipe-category-list'>
                    {recipes.map((recipe, index) => {
                        return (
                            <Link to={`/${category}/${recipe.strMeal}`} style={{textDecoration: 'none'}} key={index} >
                                <li className='recipe-category-meal'>
                                    <img src={recipe.strMealThumb} alt='meal-thumb' className='recipe-category-image' />
                                    <h2 className='recipe-category-name'>{recipe.strMeal}</h2>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Category;