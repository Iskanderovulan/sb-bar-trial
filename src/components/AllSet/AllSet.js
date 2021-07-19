import React from 'react';
import './AllSet.css'
import setImg from '../images/ill.png'
import del from '../images/modal-delete.png'

const AllSet = (props) => {
    return (
        <div className={'allSet'}>
            <button onClick={()=>props.setOpen(false)}><img className={'allSet__del'} src={del} alt=""/></button>
            <h2>Ваш заказ оформлен!</h2>
            <img src={setImg} alt=""/>
            <p>Приятного аппетита!</p>
        </div>
    );
}

export default AllSet;