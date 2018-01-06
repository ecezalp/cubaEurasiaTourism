import React from "react";
import NavBar from "./navbar"

export default function Home ({isEnglish}) {
    return (
      <div>
        <NavBar isEnglish={isEnglish}/>
        {/*<h1 className="home-container">{isEnglish ? "THIS IS ENGLISH HOME" : "BURASI TURKCE EV"}</h1>*/}

        <div className="mainPageLeadPhoto">
          <div className="leadPhotoCaption"></div>
          <div className="captionSection">Namibia</div>
          <div className="layerBGColor"></div>
        </div>


      </div>);
}