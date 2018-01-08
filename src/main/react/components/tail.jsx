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
      {true: {0: "Destinations", 1: "Experts", 2: "News Letter", 3: "Contact Us"}},
      {false: {0: "Gidilecek", 1: "Uzmanlar", 2: "Bültene", 3: "Iletişim"}});

    return <span className="navbar-menu-items">
    <ul className="navbar-menu-container">
      <li className="tail-middle-menu">{tailItemsHelper[isEnglish][0]}</li>
      <li className="tail-middle-menu">{tailItemsHelper[isEnglish][1]}</li>
      <li className="tail-middle-menu">{tailItemsHelper[isEnglish][2]}</li>
      <li className="tail-middle-menu">{tailItemsHelper[isEnglish][3]}</li>
    </ul>
    </span>
  };

  const socialFavicons = () => {
    let faviconLinkHelper = Object.assign({},
      {instagramLink: "https://www.instagram.com/eurasia_tourism/",
      facebook: "https://www.facebook.com/eurasia.tourism",
      whatsApp: "https://api.whatsapp.com/send?phone=905536099043",
      phoneNumber: "tel:+902123693640",}
    )
    let faviconItemsHelper = Object.assign({},
      {instagramFavicon: "fa fa-instagram",
      facebookFavicon: "fa fa-facebook-square",
      whatsAppFavicon: "fa fa-whatsapp",
      phoneNumberFavicon: "fa fa-phone-square",},
    )

    return <div className="navbar-bottom-container">
      <div className="favicon-container">
        <a target="_blank" href={`${faviconLinkHelper["instagramLink"]}`} className="favicon">
          <i className={faviconItemsHelper["instagramFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container">
        <a target="_blank" href={`${faviconLinkHelper["facebookFavicon"]}`} className="favicon">
          <i className={faviconItemsHelper["facebookFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container">
        <a target="_blank" href={`${faviconLinkHelper["whatsApp"]}`} className="favicon">
          <i className={faviconItemsHelper["whatsAppFavicon"]}aria-hidden="true" />
        </a>
      </div>
      <div className="favicon-container">
        <a target="_blank" href={`${faviconLinkHelper["phoneNumber"]}`} className="favicon">
          <i className={faviconItemsHelper["phoneNumberFavicon"]}aria-hidden="true" />
        </a>
      </div>
    </div>
  }

  return (
    <div className="tail-container">
      <div className="tail-top">
        {getLogo()}
      </div>
      <div className="tail-middle">
        {getTailItems()}
      </div>
      {socialFavicons()}
    </div>
  )
}