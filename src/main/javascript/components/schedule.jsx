import React from "react";
import culturePic from '../../resources/static/images/sixGrid/culture.jpg';
import landscapePic from '../../resources/static/images/sixGrid/landscape.jpg';
import lodgePic from '../../resources/static/images/sixGrid/lodgeParadise.jpg';
import safariPic from '../../resources/static/images/sixGrid/safari.jpg';
import {Link} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';


export default class Schedule extends React.Component {

  getQuote() {
    let isEnglish = this.props.isEnglish;
    let quoteHelper = {
      true: {
        0: "I never knew of a morning in Africa",
        1: "when I woke up that I was not happy.",
        2: "True at First Light",
        3: "by Ernest Hemingway"
      },
      false: {
        0: "Bir sabah bilmedim ki",
        1: "Afrika'da huzurla uyanmadığım.",
        2: "Günün İlk Işığında Gerçek",
        3: "Ernest Hemingway"
      },
    };

    return <div className="quote-container">
        <div className="quote-cover">
          {quoteHelper[isEnglish][0]} <br/> {quoteHelper[isEnglish][1]}
        </div>
        <br/>
        <div className="quote-author">
          <i>{quoteHelper[isEnglish][2]}</i> {quoteHelper[isEnglish][3]}
        </div>
    </div>
  };

  render() {
    return <div className="home-container">
      "Hello World"
      {this.getQuote()}
    </div>;
  }
}