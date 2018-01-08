import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";
import NavBar from "./components/navbar"
import Tail from "./components/tail"
import Schedule from "./components/schedule"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  };

  getEnglishHome() {
    return <Home isEnglish={true}/>;
  }

  getTurkishHome() {
    return <Home isEnglish={false}/>;
  }

  getEnglishSchedule() {
    return <Schedule isEnglish={true}/>;
  }

  getTurkishSchedule() {
    return <Schedule isEnglish={false}/>;
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
          <Route path="/en/schedule" component={this.getEnglishSchedule}/>
          <Route path="/tr/schedule" component={this.getTurkishSchedule}/>
        </Switch>
        <Tail isEnglish={this.state.isEnglish} changeLanguage={this.changeLanguage}/>
      </div>
    </BrowserRouter>
  }
};