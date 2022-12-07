import React from "react";
import Ingredients from "../Ingredients/index.js";
import './style.css';

const RandomRecipe = ({ recipe }) => {
    const ingredients = [];
    const measures = [];
    const ingredientsWithMeasures = [];

    Object.keys(recipe).forEach((item) => {
        for(let i = 1; i <= 20; i++) {
            if(item === `strIngredient${i}` && recipe[item] !== "") {
                ingredients.push(recipe[item]);
            }

            if(item === `strMeasure${i}` && recipe[item] !== ' ' && recipe[item] !== "") {
                measures.push(recipe[item]);
            }
        }
    });

    for(let i = 0; i < ingredients.length; i++) {
        ingredientsWithMeasures.push({ingredient: ingredients[i], measure: measures[i]});
    }

    return (
        <>  
            <div className='random-recipe-container'>
                <div className="random-recipe-container-top">
                    <img className='random-recipe-image' src={recipe.strMealThumb} alt="recipe-thumb" />

                    <div className="recipe-details">
                        <h1 className="recipe-name">{recipe.strMeal}</h1>
                        <p className="recipe-category">Category: {recipe.strCategory}</p>
                        <p className="recipe-area">Area: {recipe.strArea}</p>  
                        <a href={recipe.strYoutube} className="recipe-video">{recipe.strYoutube}</a> 
                    </div>
                </div>

                <Ingredients ingredients={ingredientsWithMeasures} instructions={recipe.strInstructions} />
            </div>
        </>
    );
}

export default RandomRecipe;