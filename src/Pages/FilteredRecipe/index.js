import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/index.js";
import Recipe from "../../Components/Recipe/index.js";
import ButtonBack from '../../Components/ButtonBack/index.js';
import './style.css';

const FilteredRecipe = () => {

    const { recipe } = useParams();
    const { category } = useParams();
    const [ filteredRecipe, setFilteredRecipe ] = useState([]);

    async function getFilteredRecipe() {
        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setFilteredRecipe(data.meals[0]);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getFilteredRecipe();
    }, []);

    return (
        <>
            <Header />

            <main>
                <div className="button-container">
                    <ButtonBack path={`/categories/${category}`} />
                </div>
                <Recipe recipe={filteredRecipe} />
            </main>
        </>
    );
}

export default FilteredRecipe;