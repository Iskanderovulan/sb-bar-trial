import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import logo from '../images/logo.png'
import arrow from '../images/arrow-1.png'
import basket from '../images/basket.png'

const Header = () => {
    return (
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-9">
                      <ul>
                          <li><NavLink exact to={'/'}>Главная</NavLink></li>
                          <li><NavLink exact to={'/menu'}>Меню</NavLink></li>
                          <li><NavLink exact to={'/discount'}>Акции</NavLink></li>
                          <li><NavLink exact to={'/'}>О нас</NavLink></li>
                          <li><NavLink exact to={'/'}><img src={logo} alt=""/></NavLink></li>
                          <li><NavLink exact to={'/contacts'}>Контакты</NavLink></li>
                      </ul>
                  </div>
                  <div className="col-3">
                      <ul>
                          <li><NavLink exact to={'/enter'}><img className={'header__arrow'} src={arrow} alt=""/>Войти</NavLink></li>
                          <li><NavLink exact to={'/basket'}><img src={basket} alt=""/></NavLink></li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
    );
};

export default Header;