import React from "react";
import './style.css';

const IngredientList = ({ ingredients }) => {
    return (
        <div className="ingredients-container">
            <h2>Ingredients: </h2>
           <ul className="ingredient-list">
                {ingredients.map((ingredient, index) => {
                    return (
                        <li className="ingredient" key={index}>{ingredient.measure} - {ingredient.ingredient}</li>
                    );
                })}
           </ul>
        </div>
    );
}

export default IngredientList;