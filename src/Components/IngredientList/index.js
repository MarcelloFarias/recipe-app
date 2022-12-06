import React from "react";
import './style.css';

const IngredientList = ({ ingredients, measures }) => {
    const ingredientsWithMeasures = [];

    for(let i = 0; i < ingredients.length; i++) {
        ingredientsWithMeasures.push({ingredient: ingredients[i], measure: measures[i]});
    }

    console.log(ingredientsWithMeasures)

    return (
        <div className="ingredients-container">
            <h2>Ingredients: </h2>
           <ul className="ingredient-list">
                {ingredientsWithMeasures.map((ingredient, index) => {
                    return (
                        <li className="ingredient" key={index}>{ingredient.measure} - {ingredient.ingredient}</li>
                    );
                })}
           </ul>
        </div>
    );
}

export default IngredientList;