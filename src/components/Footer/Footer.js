import React from 'react';
import './Footer.css'
import inst from  '../images/footer-inst.png'
import facebook from  '../images/footer-facebook.png'
import whatsapp from  '../images/footer-whatsapp.png'
import footerBg from '../images/footer-logo.png'

const Footer = () => {
    return (
        <footer>
<div className="container">
    <div className="row footer__row">
        <div className="col-1">
            <img src={footerBg} alt=""/>
        </div>
        <div className="col-1">
            <p className="footer__bold">Режим работы</p>
            <p>c 10:00 до 20:00</p>
            <p>Сб, Вс - выходной</p>
        </div>
        <div className="col-1">
            <p className="footer__bold">Телефон</p>
            <p>+996 (0553) 577-575</p>
            <p>+996 (0773) 577-575</p>
        </div>
        <div className="col-1">
            <p className="footer__bold">Адрес</p>
            <p>г. Бишкек, Медерова, 50/2</p>
        </div>
        <div className="col-1 col-1-end">
            <a href="#"><img src={inst} alt=""/></a>
            <a className={'footer__whatsapp'} href="#"><img src={facebook} alt=""/></a>
            <a href="#"><img src={whatsapp} alt=""/></a>
        </div>
    </div>
</div>
        </footer>
    )
};

export default Footer;