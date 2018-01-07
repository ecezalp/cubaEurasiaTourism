import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import NavBar from "./components/navbar";
import Home from "./components/home";

let getEnglishHome = () => {
    return <Home isEnglish={true}/>
};

let getTurkishHome = () => {
    return <Home isEnglish={false}/>
};

export default function App () {
    return <BrowserRouter>
        <div id="application-container">
            {NavBar()}
            <Switch>
                <Route exact path="/" component={getEnglishHome}/>
                <Route exact path="/tr" component={getTurkishHome}/>
                <Route exact path="/en" component={getEnglishHome}/>
            </Switch>
        </div>
    </BrowserRouter>
};