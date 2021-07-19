import React from 'react';
import './Enter.css';
import TwoButtons from "../TwoButtons/TwoButtons";


const Enter = () => {
    return (
        <section className={'enter'}>
            <TwoButtons/>
            <form action="">
                <p>Ваша электронная почта</p>
                <input type="text" placeholder={'Введите ваш адрес эл. почты'}/>
                <p>Ваш пароль</p>
                <input type="text" placeholder={'Введите ваш пароль'}/>
                <div className="enter__check">
                    <div>
                        <input type="checkbox" name="scales" id={'scales'} value="Запомнить меня"/>
                        <label htmlFor="scales">Запомнить меня</label>
                    </div>
                    <a href="#">Забыли пароль?</a>
                </div>
                <button>Войти</button>
            </form>
        </section>
    );
};

export default Enter;