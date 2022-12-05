import React, { useEffect, useState } from "react";
import './style.css';

const RandomRecipe = ({ recipe }) => {

    const [ ingredients, setIngredients ] = useState([]);
    const [ measures, setMeasures ] = useState([]);

    useEffect(() => {
        Object.keys(recipe).forEach((item) => {
            for(let i = 1; i <= 20; i++) {
                if(item === `strIngredient${i}`) {
                    ingredients.push(recipe[item]);
                }
            }
        });

        setIngredients(ingredients);

        Object.keys(recipe).forEach((item) => {
            for(let i = 1; i <= 20; i++) {
                if(item === `strMeasure${i}`) {
                    measures.push(recipe[item]);
                }
            }
        });

        setMeasures(measures);
    }, [recipe, ingredients, measures]);

    return (
        <>  
            <div className='random-recipe-container'>
                <img className='random-recipe-image' src={recipe.strMealThumb} alt="recipe-thumb" />

                <div className="recipe-details">
                    <h1 className="recipe-name">{recipe.strMeal}</h1>
                    <p className="recipe-category">Category: {recipe.strCategory}</p>
                    <p className="recipe-area">Area: {recipe.strArea}</p>  
                    <a href={recipe.strYoutube} className="recipe-video">{recipe.strYoutube}</a> 
                </div>
            </div>
        </>
    );
}

export default RandomRecipe;