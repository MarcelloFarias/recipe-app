import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Header = () => {
    return (
        <header>
            <h1>Recipe App</h1>

            <ul className="menu-list">
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/categories'>
                    <li>Categories</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;