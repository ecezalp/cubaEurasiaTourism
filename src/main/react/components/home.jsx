import React from "react";
import {Link, Route} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';
import {gridHelper, namibiaDesc, onlyInNamibiaQuote, quoteHelper} from "../../resources/static/constants";
import Schedule from "./schedule";


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getScheduleComponent = this.getScheduleComponent.bind(this);
    this.getGridComponent = this.getGridComponent.bind(this);
  }

  getLandingImage() {
    return <div className="landing-image-container">
      <div className="landing-image" id="landing-image-mobile-change"/>
      <i className="fa fa-caret-down" aria-hidden="true"/>
    </div>
  };

  getLandingLayer() {
    return <div className="background-layer" id="background-layer-mobile-change">
      <div className="landing-caption" id="mobile-caption-size-change">
        {this.props.isEnglish ? "Namibia" : "Namibya"}</div>
    </div>
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
    let linkPrefix = this.props.isEnglish ? "en" : "tr";
    return <div className="namibia-activities-header" id="namibia-activities-header-mobile">
      {onlyInNamibiaQuote[this.props.isEnglish][0]}
      <div className="go-to-recommendation" id="go-to-recommendation-mobile">
        <Link className="go-to-recommendation-text" to={"/" + linkPrefix + "/schedule"}>
          {onlyInNamibiaQuote[this.props.isEnglish][1]}
        </Link>
      </div>
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
        {this.getLandingImage()}
        <div>
          {this.getLandingLayer()}
          {this.getQuote()}
          {this.getDescription()}
          {this.getGrid()}
          {/*{this.getOnlyInNamibia()}*/}

        </div>
      </div>}
      <Route path={`${this.props.match.url}/schedule`} component={this.getScheduleComponent}/>
      {gridHelper.map(item => <Route key={item.link}
                                     path={`${this.props.match.url}/${item.link}`}
                                     component={(props) => this.getGridComponent(item.component, props)()}/>)}
    </div>;
  }
}
