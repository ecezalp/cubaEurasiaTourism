import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar({isEnglish}) {

  console.log(isEnglish);

  let linkPrefix = isEnglish ? "en" : "tr";

  const getLogo = () => {
    return <div className="navbar-logo">
      <span className="navbar-logo-bold">Eurasia</span> Tourism
      <span className="navbar-date">Since 1990</span>
    </div>
  };

  const getLanguages = () => {
    return <ul className="navbar-languages">
      <li><Link to="/en">English</Link></li>
      <li><Link to="/tr">Türkçe</Link></li>
    </ul>
  };

  const getAboutUs = () => {
    let aboutUsHelper = Object.assign({},
      {true: {0: "About Us", 1: "Contact Us"}},
      {false: {0: "Hakkımızda", 1: "Iletişim"}});

    return <ul className="navbar-about-us">
      <li><Link to={`${linkPrefix}/about-us`}>{aboutUsHelper[isEnglish][0]}</Link></li>
      <li><Link to={`${linkPrefix}/contact-us`}>{aboutUsHelper[isEnglish][1]}</Link></li>
    </ul>
  };

  const getMenuItems = () => {
    let menuItemsHelper = Object.assign({},
      {true: {0: "Places to Go", 1: "Things to Do", 2: "Travel Blog"}},
      {false: {0: "Gideceklerimiz", 1: "Yapacaklarımız", 2: "Yolculuklarımız"}});

    return <ul className="navbar-menu-items">
      <li><Link to={`${linkPrefix}/places-to-go`}>{menuItemsHelper[isEnglish][0]}</Link></li>
      <li><Link to={`${linkPrefix}/things-to-do`}>{menuItemsHelper[isEnglish][1]}</Link></li>
      <li><Link to={`${linkPrefix}/travel-blog`}>{menuItemsHelper[isEnglish][2]}</Link></li>
    </ul>
  };

  return (
    <div className="navbar-container">
      <div className="navbar-right">
        {getLogo()}
      </div>
      <div className="navbar-left">
        {getAboutUs()}
        {getLanguages()}
        {getMenuItems()}
      </div>
    </div>
  )
}