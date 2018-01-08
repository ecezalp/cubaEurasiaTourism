import React from "react";
import {Link, Route} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';
import {gridHelper, namibiaDesc, onlyInNamibiaQuote, quoteHelper} from "../../resources/static/constants";
import Schedule from "./schedule";


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getScheduleComponent = this.getScheduleComponent.bind(this);
  }

  getLanding() {
    return <div className="landing-image-container">
      <div className="landing-image"/>
      <div className="landing-caption">{this.props.isEnglish ? "Namibia" : "Namibya"}</div>
      <div className="background-layer"/>
      <i className="fa fa-caret-down" aria-hidden="true"/>
    </div>
  };

  getNamibiaDesc() {
    return <div className="namibia-description-container">
      <div className="namibia-description">
        {namibiaDesc[this.props.isEnglish].map((item, i) => <div key={i}>{item}<br/></div>)}
      </div>
      <div className="map-container">
        {africaMap()}
      </div>
    </div>
  }

  getQuote() {
    return <div className="quote-container">
      <div className="quote-cover">
        {quoteHelper[this.props.isEnglish][0]} <br/> {quoteHelper[this.props.isEnglish][1]}
      </div>
      <br/>
      <div className="quote-author">
        <i>{quoteHelper[this.props.isEnglish][2]}</i> {quoteHelper[this.props.isEnglish][3]}
      </div>
    </div>
  };

  getOnlyInNamibia() {
    let linkPrefix = this.props.isEnglish ? "en" : "tr";
    return <div className="namibia-activities-header">
      {onlyInNamibiaQuote[this.props.isEnglish][0]}
      <div className="go-to-recommendation">
        <Link className="go-to-recommendation-text" to={"/" + linkPrefix + "/schedule"}>
          {onlyInNamibiaQuote[this.props.isEnglish][1]}
        </Link>
      </div>
    </div>
  }

  getGrid() {
    return <div className="gridContainer">
      <div className="four-grid">
        {gridHelper.map((item, i) =>
          <figure key={"figure-key-" + i}>
            <img src={item.src} alt="The Pulpit Rock"/>
            <div className="picCaption">{item.language[this.props.isEnglish]}</div>
          </figure>)}
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

  render() {
    return <div className="home-container">
      {this.validatePathnameForHome() && <div className="home">
        {this.getLanding()}
        {this.getQuote()}
        {this.getNamibiaDesc()}
        {this.getOnlyInNamibia()}
        {this.getGrid()}
      </div>}
      <Route path={`${this.props.match.url}/schedule`} component={this.getScheduleComponent}/>
    </div>;
  }
}
