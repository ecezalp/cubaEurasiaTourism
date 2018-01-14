import React from "react";
import {Link, Route} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';
import {
  gridHelper, namibiaDesc, onlyInNamibiaQuote, quoteHelper,
  safariHomeHelper, emailHelper
} from "../../resources/static/constants";
import Schedule from "./schedule";

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLionSelected: true,
    };

    this.getScheduleComponent = this.getScheduleComponent.bind(this);
    this.getGridComponent = this.getGridComponent.bind(this);
    this.onCircleClick = this.onCircleClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  getLandingImage() {
    return <div className="landing-image-container">
      <div className="landing-image" id="landing-image-mobile-change"/>
    </div>
  };

  getLandingLayer() {
    return <div className="background-layer" id="background-layer-mobile-change">
      <div className="landing-caption" id="mobile-caption-size-change">
        {this.props.isEnglish ? "Namibia" : "Namibya"}</div>
      <i className="fa fa-caret-down" aria-hidden="true"/>
    </div>
  }

  getLanding() {
    return <div>
      {this.getLandingImage()}
      {this.getLandingLayer()}
    </div>;
  }

  getSafariLeft() {
    let linkPrefix = this.props.isEnglish ? "en" : "tr";

    return <div className="safari-left">
      <div className="map-container">
        {africaMap()}
      </div>
      <div className="safari-text-parent">
        <div className="safari-title">
          {safariHomeHelper[this.props.isEnglish].banner}
        </div>
        <div className="safari-caption">
          {safariHomeHelper[this.props.isEnglish].caption}
        </div>
        <div className="go-to-recommendation" id="go-to-recommendation-mobile">
          <Link className="go-to-recommendation-text" to={"/" + linkPrefix + "/schedule"}>
            {onlyInNamibiaQuote[this.props.isEnglish][1]}
          </Link>
        </div>
      </div>
    </div>
  }

  getSafariRight() {
    return <div className={`safari-right-${this.state.isLionSelected ? "lion" : "antelope"}`}>
      <div className="circle-container">
        <div className={this.state.isLionSelected ? "full-circle" : "empty-circle"} onClick={this.onCircleClick}/>
        <div className={this.state.isLionSelected ? "empty-circle" : "full-circle"} onClick={this.onCircleClick}/>
      </div>
      <div className="safari-info">
        <div className="safari-info-title">{safariHomeHelper[this.props.isEnglish].infoTitle}</div>
        <div className="safari-info-caption">{safariHomeHelper[this.props.isEnglish].infoCaption}</div>
      </div>
    </div>
  }

  onCircleClick() {
    this.setState({isLionSelected: !this.state.isLionSelected})
  }

  getSafari() {
    return <div className="safari-wrapper">
      {this.getSafariLeft()}
      {this.getSafariRight()}
    </div>
  }

  getEmail() {
    return <div className="email-container">
      <form onSubmit={this.handleEmailSubmit}>
        <label>
          {emailHelper[this.props.isEnglish].label}
          <input type="text" value={this.state.value} onChange={this.handleEmailChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }

  handleEmailSubmit(event) {
    event.preventDefault();
    console.log("email submitted");
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  getDescription() {
    return <div className="namibia-description-container" id="namibia-description-container-mobile">
      <div className="namibia-description" id="namibia-description-mobile">
        {namibiaDesc[this.props.isEnglish].map((item, i) => <div key={i}>{item}<br/></div>)}
      </div>
    </div>
  }

  getQuote() {
    return <div className="quote-container">
      <div className="quote-cover">
        {quoteHelper[this.props.isEnglish][0]} <span
        className="quote-web-linebreak"><br/></span> {quoteHelper[this.props.isEnglish][1]}
      </div>
      <br/>
      <div className="quote-author">
        <i>{quoteHelper[this.props.isEnglish][2]}</i> {quoteHelper[this.props.isEnglish][3]}
      </div>
    </div>
  };

  getOnlyInNamibia() {
    return <div className="namibia-activities-header" id="namibia-activities-header-mobile">
      {onlyInNamibiaQuote[this.props.isEnglish][0]}
    </div>
  }

  getGrid() {
    let linkPrefix = this.props.isEnglish ? "en" : "tr";
    return <div className="gridContainer" id="gridContainer-mobile">
      <div className="four-grid" id="four-grid-mobile">
        {gridHelper.map((item, i) =>
          <Link to={"/" + linkPrefix + "/" + item.link} key={item.link}>
            <figure>
              <img src={item.src} alt={item.link}/>
              <div className="picCaption">{item.language[this.props.isEnglish]}</div>
            </figure>
          </Link>)}
      </div>
      <div className="gridCover"/>
    </div>
  }

  validatePathnameForHome() {
    return ((this.props.location.pathname.toString() === "/") ||
      (this.props.location.pathname.toString() === "/en") ||
      (this.props.location.pathname.toString() === "/tr"));
  }

  getScheduleComponent() {
    return <Schedule isEnglish={this.props.isEnglish}/>;
  }

  getGridComponent(component, props) {
    let newProps = Object.assign({}, props, {isEnglish: this.props.isEnglish});
    return () => component(newProps);
  }

  render() {
    return <div className="home-container">
      {this.validatePathnameForHome() && <div className="home">
        <div>
          {this.getLanding()}
          {this.getSafari()}
          {this.getEmail()}
          {this.getQuote()}
          {this.getDescription()}
          {this.getGrid()}
          {this.getOnlyInNamibia()}

        </div>
      </div>}
      <Route path={`${this.props.match.url}/schedule`} component={this.getScheduleComponent}/>
      {gridHelper.map(item => <Route key={item.link}
                                     path={`${this.props.match.url}/${item.link}`}
                                     component={(props) => this.getGridComponent(item.component, props)()}/>)}
    </div>;
  }
}
