import React from "react";
import culturePic from '../../resources/static/images/sixGrid/culture.jpg';
import landscapePic from '../../resources/static/images/sixGrid/landscape.jpg';
import lodgePic from '../../resources/static/images/sixGrid/lodgeParadise.jpg';
import safariPic from '../../resources/static/images/sixGrid/safari.jpg';
import {Link} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';
import {gridHelper, namibiaDesc, onlyInNamibiaQuote, quoteHelper} from "../../resources/static/constants";


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
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
        <figure>
          <img src={culturePic} alt="The Pulpit Rock"/>
          <div className="picCaption">{gridHelper[this.props.isEnglish][0]}</div>
        </figure>

        <figure>
          <img src={landscapePic} alt="The Pulpit Rock"/>
          <div className="picCaption">{gridHelper[this.props.isEnglish][1]}</div>
        </figure>

        <figure>
          <img src={safariPic} alt="The Pulpit Rock"/>
          <div className="picCaption">{gridHelper[this.props.isEnglish][2]}</div>
        </figure>

        <figure>
          <img src={lodgePic} alt="The Pulpit Rock"/>
          <div className="picCaption">{gridHelper[this.props.isEnglish][3]}</div>
        </figure>
      </div>
      <div className="gridCover"/>
    </div>
  }

  render() {
    return <div className="home-container">
      {this.getLanding()}
      {this.getQuote()}
      {this.getNamibiaDesc()}
      {this.getOnlyInNamibia()}
      {this.getGrid()}
    </div>;
  }
}

// isEnglish
// match