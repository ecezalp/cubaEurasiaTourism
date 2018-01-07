import React from 'react';
import {Link} from 'react-router-dom';
import englishFlag from '../../resources/static/images/english_flag.png';
import turkishFlag from '../../resources/static/images/turkish_flag.png';


export default function NavBar({isEnglish}) {

  console.log(isEnglish);

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
      <li><Link to={`${linkPrefix}/about-us`} className="navbar-us">{aboutUsHelper[isEnglish][0]}</Link></li>
      <li><Link to={`${linkPrefix}/contact-us`} className="navbar-us">{aboutUsHelper[isEnglish][1]}</Link></li>
       <li><Link to="/tr"><img className="navbar-flag" src={turkishFlag}/></Link></li>
      <li><Link to="/en"><img className="navbar-flag" src={englishFlag}/></Link></li>
    </ul></span>
  };

  const getMenuItems = () => {
    let menuItemsHelper = Object.assign({},
      {true: {0: "Places to Go", 1: "Things to Do", 2: "Travel Blog"}},
      {false: {0: "Gideceklerimiz", 1: "Yapacaklarımız", 2: "Yolculuklarımız"}});

    return <span className="navbar-menu-items"><ul>
      <li><Link to={`${linkPrefix}/places-to-go`}>{menuItemsHelper[isEnglish][0]}</Link></li>
      <li><Link to={`${linkPrefix}/things-to-do`}>{menuItemsHelper[isEnglish][1]}</Link></li>
      <li><Link to={`${linkPrefix}/travel-blog`}>{menuItemsHelper[isEnglish][2]}</Link></li>
    </ul></span>
  };

  return (
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
  )
}