import React from 'react';
import {Link} from 'react-router-dom';
import englishFlag from '../../resources/static/images/flags/english_flag.png';
import turkishFlag from '../../resources/static/images/flags/turkish_flag.png';


export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
    this.handleMobileNaviconClick = this.handleMobileNaviconClick.bind(this);
  }

  getPrefix() {
   return this.props.isEnglish ? "en" : "tr";
  }

  getLogo() {
    return <div className="navbar-logo" id="navbar-logo-mobile">
      <span><span className="navbar-logo-bold">EURASIA</span> TOURISM </span>
      <div className="navbar-date">since 1991</div>
    </div>
  };

  getNavbarTop() {
    let aboutUsHelper = Object.assign({},
      {true: {0: "About Us", 1: "Contact Us"}},
      {false: {0: "Hakkımızda", 1: "Iletişim"}});

    return <span className="navbar-about-us"><ul>
      <li className="navbar-us-container" id="navbar-about-us-mobile"><Link to={`${this.getPrefix()}/about-us`}
                                                                            className="navbar-us">{aboutUsHelper[this.props.isEnglish][0]}</Link></li>
      <li className="navbar-us-container" id="navbar-contact-us-mobile"><Link to={`${this.getPrefix()}/contact-us`}
                                                                              className="navbar-us">{aboutUsHelper[this.props.isEnglish][1]}</Link></li>
      <li className="navbar-flag-container" id="navbar-turkish-mobile"><Link to="/tr"
                                                                             onClick={() => this.props.changeLanguage(false)}><img
        className="navbar-flag" src={turkishFlag}/></Link></li>
      <li className="navbar-flag-container" id="navbar-english-mobile"><Link to="/en"
                                                                             onClick={() => this.props.changeLanguage(true)}><img
        className="navbar-flag" src={englishFlag}/></Link></li>
    </ul></span>
  };

  handleMobileNaviconClick() {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  }

  getMenuItems() {
    let menuItemsHelper = Object.assign({},
      {true: {0: "Places to Go", 1: "Things to Do", 2: "Travel Blog"}},
      {false: {0: "Gideceklerimiz", 1: "Yapacaklarımız", 2: "Yolculuklarımız"}});

    return <span className="navbar-togo-items"><ul>
      <li className="navbar-togo-item"><Link
        to={`${this.getPrefix()}/places-to-go`}>{menuItemsHelper[this.props.isEnglish][0]}</Link></li>
      <li className="navbar-togo-item"><Link
        to={`${this.getPrefix()}/things-to-do`}>{menuItemsHelper[this.props.isEnglish][1]}</Link></li>
      <li className="navbar-togo-item"><Link
        to={`${this.getPrefix()}/travel-blog`}>{menuItemsHelper[this.props.isEnglish][2]}</Link></li>
    </ul></span>
  }

  render() {
    return (<div className="navbar-container" id="navbar-container-mobile">
        <div className="navbar-left">
          {this.getLogo()}
        </div>
        <div className="navicon-container" id="navicon-container-mobile" onClick={this.handleMobileNaviconClick}>
          <i className="fa fa-bars mobile-navicon" aria-hidden="true"/>
        </div>
        <div className="navbar-right" id="navbar-right-web">
          <div className="navbar-top">
            {this.getNavbarTop()}
          </div>
          {this.getMenuItems()}
        </div>
        {this.state.showMobileMenu && <div>
          <div className="navbar-right-mobile" id="navbar-right-mobile">
            {this.getNavbarTop()}
            {this.getMenuItems()}
            <div className="select-language-container-mobile">
              <Link to="/tr" className="language-type-mobile" onClick={() => this.props.changeLanguage(false)}>Turkce</Link>
              <Link to="/en" className="language-type-mobile" onClick={() => this.props.changeLanguage(true)}>English</Link>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}