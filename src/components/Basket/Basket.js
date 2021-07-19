import React,{useState} from 'react';
import './Basket.css'
import del from '../images/delete.png'
import Modal from "../Modal/Modal";

const Basket = () => {
    const[open,setOpen] = useState(false)

    return (
        <section className={'basket'}>
<div className="container">
    <h2>Корзина</h2>
    <div className="row">
        <div className="col-3">
            <div className="basket__bg"></div>
        </div>
        <div className="col-9">
            <div className="basket__title">
                <p>Форель с булгуром</p>
                <button><img src={del} alt=""/></button>
            </div>
            <div className="basket__price">
                <div className="basket__price-child">
                    <p className={'basket__name'}>Количество</p>
                    <p className="basket__quantity">- 2 +</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Цена</p>
                    <p className="basket__quantity">1000 сом</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Конечная цена</p>
                    <p className="basket__quantity">2000 сом</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="basket__bg"></div>
        </div>
        <div className="col-9">
            <div className="basket__title">
                <p>Форель с булгуром</p>
                <button><img src={del} alt=""/></button>
            </div>
            <div className="basket__price">
                <div className="basket__price-child">
                    <p className={'basket__name'}>Количество</p>
                    <p className="basket__quantity">- 2 +</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Цена</p>
                    <p className="basket__quantity">1000 сом</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Конечная цена</p>
                    <p className="basket__quantity">2000 сом</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="basket__bg"></div>
        </div>
        <div className="col-9">
            <div className="basket__title">
                <p>Форель с булгуром</p>
                <button><img src={del} alt=""/></button>
            </div>
            <div className="basket__price">
                <div className="basket__price-child">
                    <p className={'basket__name'}>Количество</p>
                    <p className="basket__quantity">- 2 +</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Цена</p>
                    <p className="basket__quantity">1000 сом</p>
                </div>
                <div className="basket__price-child">
                    <p className={'basket__name'}>Конечная цена</p>
                    <p className="basket__quantity">2000 сом</p>
                </div>
            </div>
        </div>
    </div>
    <div className="basket__total">
        <p className={'basket__name basket__total-child'}>Общая стоимость: <span className={'basket__quantity'}>6000 cомов</span></p>
        <p className={'basket__name'}>Количество элементов: <span className={'basket__quantity'}>6</span></p>
        <button onClick={()=>setOpen(true)}>Оформить заказ</button>
        {
            open===true?<Modal setOpen={setOpen}></Modal> : <p></p>
        }
    </div>
</div>
        </section>
    );
};

export default Basket;