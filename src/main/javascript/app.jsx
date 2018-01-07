import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";
import NavBar from "./components/navbar"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true
    };
  };

  getEnglishHome() {
    return <Home isEnglish={true}/>;
  }

  getTurkishHome() {
    return <Home isEnglish={false}/>;
  }

  render() {
    return <BrowserRouter>
      <div id="application-container">
        <NavBar isEnglish={true}/>
        <Switch>
          <Route exact path="/" component={this.getEnglishHome}/>
          <Route path="/tr" component={this.getTurkishHome}/>
          <Route path="/en" component={this.getEnglishHome}/>
        </Switch>
      </div>
    </BrowserRouter>
  }
};