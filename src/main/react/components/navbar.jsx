import React from 'react';
import {Link} from 'react-router-dom';
import englishFlag from '../../resources/static/images/flags/english_flag.png';
import turkishFlag from '../../resources/static/images/flags/turkish_flag.png';


export default function NavBar({isEnglish, changeLanguage}) {

  let linkPrefix = isEnglish ? "en" : "tr";

  const getLogo = () => {
    return <div className="navbar-logo">
      <span><span className="navbar-logo-bold">EURASIA</span> TOURISM </span>
      <div className="navbar-date">since 1991</div>
    </div>
  };

  const getNavbarTop = () => {
    let aboutUsHelper = Object.assign({},
      {true: {0: "About Us", 1: "Contact Us"}},
      {false: {0: "Hakkımızda", 1: "Iletişim"}});

    return <span className="navbar-about-us"><ul>
      <div className="mobile-top-left">
       <li className="navbar-us-container"><Link to={`${linkPrefix}/about-us`} className="navbar-us">{aboutUsHelper[isEnglish][0]}</Link></li>
        <li className="navbar-us-container"><Link to={`${linkPrefix}/contact-us`} className="navbar-us">{aboutUsHelper[isEnglish][1]}</Link></li>
      </div>
      <div className="mobile-top-right">
        <li className="navbar-flag-container"><Link to="/tr" onClick={() => changeLanguage(false)}><img className="navbar-flag" src={turkishFlag}/></Link></li>
        <li className="navbar-flag-container"><Link to="/en" onClick={() => changeLanguage(true)}><img className="navbar-flag" src={englishFlag}/></Link></li>
      </div>
    </ul></span>
  };

  const getMenuItems = () => {
    let menuItemsHelper = Object.assign({},
      {true: {0: "Places to Go", 1: "Things to Do", 2: "Travel Blog"}},
      {false: {0: "Gideceklerimiz", 1: "Yapacaklarımız", 2: "Yolculuklarımız"}});

    return <span className="navbar-togo-items"><ul>
      <li><Link to={`${linkPrefix}/places-to-go`}>{menuItemsHelper[isEnglish][0]}</Link></li>
      <li><Link to={`${linkPrefix}/things-to-do`}>{menuItemsHelper[isEnglish][1]}</Link></li>
      <li><Link to={`${linkPrefix}/travel-blog`}>{menuItemsHelper[isEnglish][2]}</Link></li>
    </ul></span>
  };

  return (<div>
      <div className="navbar-container">
        <div className="navbar-left">
          {getLogo()}
        </div>
        <div className="navbar-right">
          <div className="navbar-top">
            {getNavbarTop()}
          </div>
          {getMenuItems()}
        </div>
      </div>
    <div className="navbar-container" id="display-changes-for-mobile">
      <div className="mobile-nav" id="mobile-nav-web-disappear">
        <div className="navbar-left">
          {getLogo()}
        </div>
        <div className="navbar-right" id="navbar-right-mobile-disappear">
          {getNavbarTop()}
          {getMenuItems()}
        </div>
      </div>
    </div>
    </div>
  )
}