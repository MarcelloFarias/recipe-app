import React, { useState, useEffect } from "react";
import './style.css';
import Header from '../../Components/Header/index.js';
import Recipe from '../../Components/Recipe/index.js';

const Home = () => {
    const [ recipe, setRecipe ] = useState({});

    useEffect(() => {
        getRandomRecipe();
    }, []);

    async function getRandomRecipe() {
        await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((data) => {
            setRecipe(data.meals[0]);
            console.log(data.meals[0]);
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
            <Header />
            <main>
                <div className="button-container">
                    <button className="btn-new-recipe" onClick={getRandomRecipe}>New Recipe</button>
                </div>
                <Recipe recipe={recipe} />
            </main>
        </>
    );
}

export default Home;