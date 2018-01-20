import React from 'react';
import {Link} from 'react-router-dom';
import {aboutHelper, menuItemsHelper, flagHelper} from "../../resources/static/constants";
import {animateScroll} from 'react-scroll'
import * as _ from "lodash";


export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    };
    this.handleMobileNaviconClick = this.handleMobileNaviconClick.bind(this);
  }

  getPrefix() {
    return this.props.isEnglish ? "en" : "tr";
  }

  getLogo() {
    return <Link to={"/"}>
      <div className="navbar-logo" id="navbar-logo-mobile" style={{cursor: "pointer"}}>
        <span><span className="navbar-logo-bold">EURASIA</span> TOURISM </span>
        <div className="navbar-date">since 1991</div>
      </div>
    </Link>
  };

  getNavbarTop() {
    return <span className="navbar-about-us"><ul>
      {this.getAbout()}
      {this.getFlags()}
    </ul></span>
  }

  getAbout() {
    return aboutHelper[this.props.isEnglish].map(item =>
      <li className="navbar-us-container" id="navbar-about-us-mobile">
        <Link to={`${this.getPrefix()}/${item.name}`} className="navbar-us">
          {_.capitalize(item.name)}
        </Link>
      </li>
    )
  };

  getFlags() {
    return flagHelper.map(flag => <li className="navbar-flag-container">
      <Link to={`/${flag.prefix}`} onClick={() => this.props.changeLanguage(flag.boolean)}>
        <img className="navbar-flag" src={flag.src}/>
      </Link>
    </li>)
  }

  handleMobileNaviconClick() {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  }

  getMenuItems() {
    return <span className="navbar-togo-items"><ul>
      {menuItemsHelper[this.props.isEnglish].map(item =>
        <li className="navbar-togo-item" onClick={() => this.scrollTo(item.gridStart)}>
          <Link to={`${this.getPrefix()}/${item.name}`}>{_.capitalize(item.name)}</Link>
        </li>)}
    </ul></span>
  }

  scrollTo(gridStart) {
    animateScroll.scrollTo(this.convertGridStartToPixels(gridStart));
  }

  convertGridStartToPixels(gridStart) {
    let gridCellHeight = Math.ceil(window.innerHeight / 3);
    let navbarHeight = 75;

    return (gridCellHeight * gridStart) - navbarHeight;
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
              <Link to="/tr" className="language-type-mobile"
                    onClick={() => this.props.changeLanguage(false)}>Turkce</Link>
              <Link to="/en" className="language-type-mobile"
                    onClick={() => this.props.changeLanguage(true)}>English</Link>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}