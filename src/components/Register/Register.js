import React from 'react';
import './Register.css'
import TwoButtons from "../TwoButtons/TwoButtons";

const Register = () => {
    return (
        <div className={'register'}>
            <TwoButtons/>
            <form action="">
                <p>Ваша электронная почта</p>
                <input type="text" placeholder={'Введите ваш адрес эл. почты'}/>
                <p>Ваша фамилия</p>
                <input type="text" placeholder={'Введите вашу фамилию'}/>
                <p>Ваш телефон</p>
                <input type="text" placeholder={'Введите ваш телефон'}/>
                <p>Ваш пароль</p>
                <input type="text" placeholder={'Введите ваш пароль'}/>
                <p>Повторите ваш пароль</p>
                <input type="text" placeholder={'Введите ваш пароль повторно'}/>

                <button>Регистрация</button>
            </form>
        </div>
    );
};

export default Register;