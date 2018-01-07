import React from "react";
import NavBar from "./navbar"

export default function Home ({isEnglish}) {
    return (
      <div>
        <NavBar isEnglish={isEnglish}/>
        {/*<h1 className="home-container">{isEnglish ? "THIS IS ENGLISH HOME" : "BURASI TURKCE EV"}</h1>*/}

        <div className="mainPageLeadPhoto">
          <div className="leadPhotoCaption"></div>
          <div className="captionSection">{isEnglish ? "Namibia" : "Namibya"}</div>
          <div className="layerBGColor"></div>
        </div>

        <div className="shortDescCover">
          <div className="quoteCover">
            “I never knew of a morning in Africa<br/>when I woke up that I was not happy.”
          </div>
          <div className="quoteAuthor">
            <i>Ture at First Light</i> by Hemingway
          </div>
        </div>
      </div>);
}