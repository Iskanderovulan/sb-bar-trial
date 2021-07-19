import React from 'react';
import '../../reset.css'
import './MainPage.css'
import Header from "../../components/Header/Header";
import Stake from "../../components/Stake/Stake";
import Tab from "../../components/Tab/Tab";
import Menu from "../../components/Menu/Menu";
import About from "../../components/About/About";
import Instagram from "../../components/Instagram/Instagram";
import Footer from "../../components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import SecondPage from "../SecondPage/SecondPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";

const MainPage = () => {
    return (
        <>
            <Header/>
            <Stake/>

        <div className={'main'}>
            <Tab/>
            <Menu/>
            <About/>
            <Instagram/>
            <Footer/>
        </div>
        </>
    );
};

export default MainPage;