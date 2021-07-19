import React from 'react';
import './TwoButtons.css'
import logo from "../images/logo.png";
import {NavLink} from "react-router-dom";

const TwoButtons = () => {
    return (
        <div>
            <NavLink exact to={'/'}><img src={logo} alt=""/></NavLink>
            <div className="enter__link">
                <NavLink exact to={'/enter'}>Вход</NavLink>
                <NavLink exact to={'/register'}>Регистрация</NavLink>
            </div>
        </div>
    );
};

export default TwoButtons;