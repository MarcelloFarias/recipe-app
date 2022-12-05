import React, { useEffect, useState } from "react";
import './style.css';

const RandomRecipe = () => {

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
        <main>

        </main>
    );
}

export default RandomRecipe;