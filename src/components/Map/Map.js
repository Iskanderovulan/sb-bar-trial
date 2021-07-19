import React from 'react';
import './Map.css'
import inst from "../images/footer-inst.png";
import facebook from "../images/footer-facebook.png";
import whatsapp from "../images/footer-whatsapp.png";
import map from '../images/map.png'

const Map = () => {
    return (
        <section className={'map'}>
            <div className="container">
        <h2>Контакты</h2>
                <div className="row">
                    <div className="col-3">
                        <div className="col">
                            <p className="map__bold">Режим работы</p>
                            <p>c 10:00 до 20:00</p>
                            <p>Сб, Вс - выходной</p>
                        </div>
                        <div className="col">
                            <p className="map__bold">Телефон</p>
                            <p>+996 (0553) 577-575</p>
                            <p>+996 (0773) 577-575</p>
                        </div>
                        <div className="col">
                            <p className="map__bold">Адрес</p>
                            <p>г. Бишкек, Медерова, 50/2</p>
                        </div>
                        <div className="col">
                            <a href="#"><img src={inst} alt=""/></a>
                            <a className={'footer__whatsapp map__whatsapp'} href="#"><img src={facebook} alt=""/></a>
                            <a href="#"><img src={whatsapp} alt=""/></a>
                        </div>
                    </div>
                    <div className="col-9">
                        <img src={map} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;