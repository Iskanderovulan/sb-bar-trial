import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import FourthPage from "./pages/FourthPage/FourthPage";
import FifthPage from "./pages/FifthPage/FifthPage";
import SixthPage from "./pages/SixthPage/SixthPage";
import SeventhPage from "./pages/SeventhPage/SeventhPage";
import Modal from "./components/Modal/Modal";
import AllSet from "./components/AllSet/AllSet";

function App() {
  return (
    <div className="App">
        {/*<AllSet/>*/}
        {/*<Modal/>*/}
        {/*<SeventhPage/>*/}
{/*<MainPage/>*/}
{/*<SecondPage/>*/}
{/*<ThirdPage/>*/}
{/*<FourthPage/>*/}
{/*<FifthPage/>*/}
{/*<SixthPage/>*/}
        <Switch>
            <Route exact path={'/'} component = {MainPage}/>
            <Route exact path={'/home'} component = {MainPage}/>
            <Route exact path={'/menu'} component = {SecondPage}/>
            <Route exact path={'/discount'} component = {ThirdPage}/>
            <Route exact path={'/contacts'} component = {FourthPage}/>
            <Route exact path={'/enter'} component = {FifthPage}/>
            <Route exact path={'/register'} component = {SixthPage}/>
            <Route exact path={'/basket'} component = {SeventhPage}/>
        </Switch>
    </div>
  );
}

export default App;
