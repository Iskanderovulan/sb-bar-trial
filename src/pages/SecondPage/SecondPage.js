import React from 'react';
import './SecondPage.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Tab from "../../components/Tab/Tab";
import Button from "../../components/Button/Button";

const SecondPage = () => {
    return (
        <>
            <Header/>
            <Tab/>
            <div className={'secondPage'}>

                <Menu/>
                <Button/>
                <Footer/>
            </div>
        </>
    );
};

export default SecondPage;