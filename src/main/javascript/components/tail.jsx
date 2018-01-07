import React from 'react';
import {Link} from 'react-router-dom';
import englishFlag from '../../resources/static/images/flags/english_flag.png';
import turkishFlag from '../../resources/static/images/flags/turkish_flag.png';


export default function Tail({isEnglish, changeLanguage}) {

  let linkPrefix = isEnglish ? "en" : "tr";

  const getLogo = () => {
    return <div className="navbar-logo">
      <span><span className="navbar-logo-bold">EURASIA</span> TOURISM </span>
      <div className="navbar-date">since 1991</div>
    </div>
  };

  const getTailItems = () => {
    let tailItemsHelper = Object.assign({},
      {true: {0: "Destinations", 1: "Experts", 2: "News Letter Sign Up", 3: "Contact Us"}},
      {false: {0: "Gidilecek", 1: "Uzmanlar", 2: "Bültene üye ol", 3: "Bizimle iletişime geçin"}});

    return <span className="navbar-menu-items">
    <ul>
      <li>{tailItemsHelper[isEnglish][0]}</li>
      <li>{tailItemsHelper[isEnglish][1]}</li>
      <li>{tailItemsHelper[isEnglish][2]}</li>
      <li>{tailItemsHelper[isEnglish][3]}</li>
    </ul>
    </span>
  };

  return (
    <div className="tail-container">
      <div className="tail-top">
        {getLogo()}
      </div>
      <div className="tail-middle">
        {getTailItems()}
      </div>
    </div>
  )
}