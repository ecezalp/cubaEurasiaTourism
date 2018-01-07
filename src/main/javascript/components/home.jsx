import React from "react";

export default function Home({isEnglish}) {

  const getLanding = () => {
    return <div className="mainPageLeadPhoto">
      <div className="leadPhotoCaption"/>
      <div className="captionSection">{isEnglish ? "Namibia" : "Namibya"}</div>
      <div className="layerBGColor"/>
    </div>
  };

  const getQuote = () => {
    let quoteHelper = {
      true: {
        0: "I never knew of a morning in Africa",
        1: "when I woke up that I was not happy.",
        2: "True at First Light",
        3: "Ernest Hemingway"},
      false: {
        0: "Bir sabah bilmedim ki Afrika'da",
        1: "uyanmadığım huzurla.",
        2: "Günün İlk Işığında Gerçek",
        3: "Ernest Hemingway"},
      };

    return <div className="shortDescCover">
      <div className="quoteCover">
        {quoteHelper[isEnglish][0]}<br/>
        {quoteHelper[isEnglish][1]}
      </div>
      <div className="quoteAuthor">
        <i>{quoteHelper[isEnglish][2]}</i>
        {quoteHelper[isEnglish][3]}
      </div>
    </div>
  };


  return <div className="home-container">
    {getLanding()}
    {getQuote()}
  </div>;
}