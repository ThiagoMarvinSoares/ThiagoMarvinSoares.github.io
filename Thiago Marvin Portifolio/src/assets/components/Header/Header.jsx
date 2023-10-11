import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
import About from "../../../Views/About/About";
import Contact from "../Contact/Contact";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__logo">Marvin</Link>
            <div className="header__menu">
                <Link to="/" className="change-color">Projects</Link>
                <Link to="/Contact" className="header__menu--elemt">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;
