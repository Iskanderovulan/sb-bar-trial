import React,{useState} from 'react';
import './Modal.css'
import modalBtn from '../images/modal-delete.png'
import AllSet from "../AllSet/AllSet";

const Modal = (props) => {
    const[open,setOpen] = useState(false)
    return (
        <form className={'modal'}>
            <button className={'basket__delete'} onClick={()=>props.setOpen(false)}><img src={modalBtn} alt=""/></button>
            <h2>Оформление заказа</h2>
            <div className="modal__wrap">
                <p className="modal__name">Ваше имя</p>
                <input type="text" placeholder={'Введите ваше имя'}/>
                <p className="modal__name">Ваше имя</p>
                <input type="text" placeholder={'Введите ваш телефон'}/>


                <div className="modal__checkbox">
                    <p>Тип заказа:</p>
                    <div className="modal__checkbox-wrap">
                        <input type="radio" id="coding" name="interest" value="coding"/>
                        <label htmlFor="coding">Доставка</label>
                    </div>
                    <div className="modal__checkbox-wrap">
                        <input type="radio" id="music" name="interest" value="music"/>
                        <label htmlFor="music">Самовывоз</label>
                    </div>
                </div>
                <div className="modal__address-house">
                    <div className={'modal__child'}>
                        <p className="modal__name">Ваш адрес</p>
                        <input type="text" placeholder={'Введите ваш адрес'}/>
                    </div>
                    <div className={'modal__child'}>
                        <p className="modal__name">Ваш дом</p>
                        <input type="text" placeholder={'Введите ваш дом'}/>
                    </div>
                </div>
                <div className="modal__address-house">
                    <div className={'modal__child modal__flat'}>
                        <p className="modal__name">Ваш подъезд</p>
                        <input type="text" placeholder={'Введите ваш подъезд'}/>
                    </div>
                    <div className={'modal__child modal__flat'}>
                        <p className="modal__name">Номер вашей квартиры</p>
                        <input type="text" placeholder={'Введите номер квартиры'}/>
                    </div>
                </div>
                <div className="modal__area">
                    <p className="modal__name">Комментарий к заказу</p>
                    <textarea name="" id="" cols="30" rows="4" placeholder={'Введите ваш комментарий'}></textarea>
                </div>
                <div className={'modal__child modal__promo'}>
                    <p className="modal__name">Промокод</p>
                    <input type="text" placeholder={'Введите промокод'}/>
                </div>
                <div className="modal__checkbox">
                    <p>Оплата:</p>
                    <div className="modal__checkbox-wrap">
                        <input type="radio" id="coding" name="interest" value="coding"/>
                        <label htmlFor="coding">Картой</label>
                    </div>
                    <div className="modal__checkbox-wrap">
                        <input type="radio" id="music" name="interest" value="music"/>
                        <label htmlFor="music">Наличными</label>
                    </div>
                </div>
                <div className="modal__wrap-2">
<div className="modal__cvv">
    <div className={'modal__cvv-child'}>
        <p className="modal__name">Номер карты</p>
        <input type="text" placeholder={'0000 0000 0000 0000'}/>
    </div>
    <div className={'modal__cvv-child'}>
        <p className="modal__name">CVV</p>
        <input type="text" placeholder={'000'}/>
    </div>
    <div className={'modal__cvv-child'}>
        <p className="modal__name">Срок действия</p>
        <input type="text" placeholder={'ММ/ГГ'}/>
    </div>
</div>
    <div className="modal__card">
        <p className="modal__name">Держатель карты</p>
        <input type="text" placeholder={'Введите имя и фамилию'}/>
    </div>
                    <p className={'modal__cost'}>Итоговая стоимость: <span>6000 сомов</span></p>


                </div>
            </div>
            <div className="modal__button-wrap">
                <button onClick={(e)=>{
                    setOpen(true)
                    e.preventDefault()
                }
                } className="modal__button">Заказать</button>
                {
                    open===true?<AllSet setOpen={setOpen}></AllSet> : <p></p>
                }
            </div>
        </form>
    );
};

export default Modal;