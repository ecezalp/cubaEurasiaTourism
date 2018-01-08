import React from "react";

export default function Schedule({isEnglish}) {

  const getQuote = () => {
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


  return <div className="home-container" style={{backgroundColor: "red"}}>
    "Hello World"
    {getQuote()}
  </div>;

}