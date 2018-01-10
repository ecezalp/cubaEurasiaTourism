import React from "react";
import {scheduleHelper} from "../../resources/static/constants";

export default function Schedule({isEnglish}) {

  const getQuote = () => {
    return <div className="quote-container">
      <div className="quote-cover">
        {scheduleHelper[isEnglish][0]} <br/> {scheduleHelper[isEnglish][1]}
      </div>
      <br/>
      <div className="quote-author">
        <i>{scheduleHelper[isEnglish][2]}</i> {scheduleHelper[isEnglish][3]}
      </div>
    </div>
  };

  return <div className="home-container" style={{backgroundColor: "red"}}>
    "Hello World"
    {getQuote()}
  </div>;

}
//
// let props = Object.assign({}, {isEnglish: true}, {isSpanish: false});
//
// props = {
//   isEnglish: true,
//   isSpanish: false,
// }
