import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";
import NavBar from "./components/navbar";
import Tail from "./components/tail";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  };

  getEnglishHome(props) {
    let newProps = Object.assign({}, props, {isEnglish: true});
    return <Home {...newProps} />;
  }

  getTurkishHome(props) {
    let newProps = Object.assign({}, props, {isEnglish: false});
    return <Home {...newProps} />;
  }

  changeLanguage(isEnglish){
    this.setState({isEnglish});
  }

  render() {
    return <BrowserRouter>
      <div id="application-container">
        <NavBar isEnglish={this.state.isEnglish} changeLanguage={this.changeLanguage}/>
        <Switch>
          <Route exact path="/" component={this.getEnglishHome}/>
          <Route path="/tr" component={this.getTurkishHome}/>
          <Route path="/en" component={this.getEnglishHome}/>
        </Switch>
        <Tail isEnglish={this.state.isEnglish} changeLanguage={this.changeLanguage}/>
      </div>
    </BrowserRouter>
  }
};