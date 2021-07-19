import React from 'react';
import './ThirdPage.css'
import Header from "../../components/Header/Header";
import Discount from "../../components/Discount/Discount";
import Footer from "../../components/Footer/Footer";

const ThirdPage = () => {
    return (
        <>
            <Header/>
        <div className={'thirdPage'}>
<Discount/>
<Footer/>
        </div>
        </>
    );
};

export default ThirdPage;