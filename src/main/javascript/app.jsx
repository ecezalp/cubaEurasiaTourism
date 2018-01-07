import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import NavBar from "./components/navbar";
import Home from "./components/home";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true
    };

    this.getEnglishHome = this.getEnglishHome.bind(this);
    this.getTurkishHome = this.getTurkishHome.bind(this);
  };

  getEnglishHome() {
    !this.state.isEnglish ?
      this.setState({isEnglish: true}, this.getHome) :
      this.getHome();
  }

  getTurkishHome() {
    this.state.isEnglish ?
      this.setState({isEnglish: false}, this.getHome) :
      this.getHome();
  }

  getHome() {
    return <Home isEnglish={this.state.isEnglish}/>;
  }

  render() {
    return <BrowserRouter>
      <div id="application-container">
        <NavBar isEnglish={this.state.isEnglish}/>
        <Switch>
          <Route exact path="/" component={this.getEnglishHome}/>
          <Route path="/tr" component={this.getTurkishHome}/>
          <Route path="/en" component={this.getEnglishHome}/>
        </Switch>
      </div>
    </BrowserRouter>
  }
};