import React from "react";
import scheduleBanner from "../../resources/static/images/schedule/schedule_banner.jpg"
import {scheduleHelper} from "../../resources/static/constants";

export default function Schedule({isEnglish}) {

  const getBanner = () => {
    return <figure>
      <img src={scheduleBanner}/>
    </figure>
  };

  const getHighlights = () => {
    // textured background
    // map
    // highlights (locations / activities)
  }

  const getDay = () => {
    // title
    // body
    // hotel
    // meal
  };

  return <div className="home-container">
    "Hello World"
  </div>;

}//
// let props = Object.assign({}, {isEnglish: true}, {isSpanish: false});
//
// props = {
//   isEnglish: true,
//   isSpanish: false,
// }
