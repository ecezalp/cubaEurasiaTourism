import React from "react";
import scheduleBanner from "../../resources/static/images/schedule/schedule_banner.jpg"
import {scheduleHelper, highlightsHelper} from "../../resources/static/constants";
import africaMap from '../../resources/static/vectors/africaMap';

export default function Schedule({isEnglish}) {

  const getBanner = () => {
    return <figure className="schedule-banner">
      <img src={scheduleBanner}/>
    </figure>
  };

  const getBannerOverlay = () => {
    return <div className="schedule-banner-overlay">
      <div className="schedule-banner-overlay-contents">
        <div className="schedule-overlay-title">{scheduleHelper[isEnglish][0]}</div>
        <div className="schedule-overlay-caption">{scheduleHelper[isEnglish][1]}</div>
        <div className="schedule-overlay-description">{scheduleHelper[isEnglish][2]}</div>
      </div>
    </div>
  };

  const getHighlights = () => {
    return <div className="schedule-highlights">
      <div className="highlights-right-container">
        <div className="schedule-trip-highlights"></div>
        <div className="highlights-label"></div>
        <div className="highlights-item"></div>
        <div className="highlights-label"></div>
      </div>
      <div className="highlights-left-container">
       
      </div>
    </div>
  };

  const getDay = () => {
    // title
    // body
    // hotel
    // meal
  };

  return <div>
    {getBanner()}
    <div className="schedule-container">
      {getBannerOverlay()}
      {getHighlights()}
    </div>
  </div>;

}//
// let props = Object.assign({}, {isEnglish: true}, {isSpanish: false});
//
// props = {
//   isEnglish: true,
//   isSpanish: false,
// }
