import React from "react";
import './style.css';

const Ingredients = ({ ingredients, instructions }) => {
    return (
        <div className="ingredients-container">
            <div className="ingredients">
                <h2>Ingredients: </h2>
                <ul className="ingredient-list">
                    {ingredients.map((ingredient, index) => {
                        return (
                            <li className="ingredient" key={index}>{ingredient.measure} - {ingredient.ingredient}</li>
                        );
                    })}
                </ul>
            </div>

            <div className="instructions">
                <h2>Instructions: </h2>
                {instructions}
            </div>
        </div>
    );
}

export default Ingredients;