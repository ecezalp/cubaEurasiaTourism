import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../styles/main.scss";

import Home from "./components/home";

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

        <Switch>
          <Route exact path="/" component={this.getEnglishHome}/>
          <Route path="/tr" component={this.getTurkishHome}/>
          <Route path="/en" component={this.getEnglishHome}/>
        </Switch>
      </div>
    </BrowserRouter>
  }
};