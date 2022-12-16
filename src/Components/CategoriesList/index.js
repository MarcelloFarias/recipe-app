import React from "react";
import './style.css';

const CategoriesList = ({ children }) => {
    return (
        <>
            <ul className="categories-list" >
                {children}
            </ul>
        </>
    );
}

export default CategoriesList;