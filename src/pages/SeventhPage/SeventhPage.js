import React from 'react';
import './SeventhPage.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Basket from "../../components/Basket/Basket";

const SeventhPage = () => {
    return (
        <div className={'seventhPage'}>
            <Header/>
            <Basket/>
            <Menu/>
            <Footer/>
        </div>
    );
};

export default SeventhPage;