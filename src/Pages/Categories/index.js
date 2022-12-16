import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/index.js";
import CategoriesList from "../../Components/CategoriesList/index.js";
import { Link } from 'react-router-dom';
import './style.css';

const Categoties = () => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => {
            setCategories(data.categories);
            console.log(categories);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            <Header />
            <main>
                <div className="button-container">
                    <Link to='/'>
                        <button className='btn-return'>Return</button>
                    </Link>
                </div>

                <CategoriesList>
                    {categories.map((category, index) => {
                        return (
                            <li key={index} className='category'>{category.strCategory}</li>
                        );
                    })}
                </CategoriesList>                
            </main>
        </>
    );
}

export default Categoties;