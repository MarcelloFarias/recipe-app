import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const ButtonBack = ({ path }) => {
    return (
        <>
            <Link to={path} style={{textDecoration: 'none'}}>
                <button className="btn-back">Back</button>
            </Link>
        </>
    );
}

export default ButtonBack;