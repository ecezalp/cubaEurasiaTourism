import React from "react";
import africaMap from '../../resources/static/vectors/africaMap';
import {
  destinationsHelper, natureGridHelper, safariHomeHelper, scheduleHelper, stayGridHelper,
  stayHelper
} from "../../resources/static/constants";
import * as _ from "lodash";
import Carousel from './carousel';


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.getDay = this.getDay.bind(this);
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
    </div>
  }

  getVisitNamibia() {
    return <div className="visit-container">
      {africaMap()}
      <div className="visit-text">
        {safariHomeHelper[this.props.isEnglish].banner}
      </div>
    </div>
  }

  getDestinations(helper) {
    return <div className="destinations">
      <div className="destinations-title">
        {helper[this.props.isEnglish].title}
        <i className="fa fa-angle-double-down"/>
      </div>
      <div className="destinations-text">
        {helper[this.props.isEnglish].text}
      </div>
    </div>
  }

  getGrid(helper) {
    let positionClassName = helper[0].title === "Dolomite Hotel" ? "second-grid" : "first-grid";
    return <div className={"five-grid" + " " + positionClassName} id="five-grid-mobile">
      {helper.map((item, i) =>
        <figure key={i}>
          <img src={item.src}/>
          <figcaption className="picCaption">{_.capitalize(item.title)}</figcaption>
        </figure>)}
    </div>;
  }

  getCulturalExcursions(helper) {
    return <div className="culture-container">
      <div className="culture-title">
        {helper[this.props.isEnglish].title}
      </div>
      <div className="culture-text">
        {helper[this.props.isEnglish].text}
      </div>
    </div>;
  }

  getHeart() {
    return <div className="heart-container" onClick={() => this.scrollTo("destinations")}>
      <div className="heart"/>
      <div className="heart-info">Tailored Tours for <br/> Groups over 10</div>
    </div>
  }

  getExpertHeadshot() {
    return <div className="expert-headshot"/>;
  }

  getExpertInfo() {
    return <div className="expert-info-wrapper">
      <div className="expert-title">OUR EXPERT</div>
      <div className="expert-info"> asdfasd asdfasdf asdfasdf asdfa sdfas asdfa sdfa df asdf asdf asdf</div>
    </div>
  }

  getGroupPicture() {
    return <div className="group-picture"/>;
  }

  getNamibiaFlag() {
    return <div className="namibia-flag"/>;
  }

  getWeek() {
    return <div className="carousel-container" style={{gridColumn: "1/6", gridRow: "10/12"}}>
      <Carousel slides={scheduleHelper.map(this.getDay)}/>
    </div>
  }

  getDay(day, index) {
    return <div className="day-wrapper" key={`day-${index}`}>
      <div className="schedule-day-number" style={this.getDayStyle(1)}>
        <div>Day {index + 1}</div>
      </div>
      {this.getDayContent(day, index)}
      <div className="day-picture" style={this.getDayStyle(2)}>
        <figure>
          <img src={day.picture}/>
          <figcaption>{day.figCaption}</figcaption>
        </figure>
      </div>
    </div>
  }

  getDayContent(day, index) {
    return <div className="day-content-wrapper" style={this.getDayStyle(2)} key={`content-${index}`}>
      {day.entries.map((entry, index) => <div className="day-entry" key={`entry-${index}`}>
        <i className={`day-icon ${entry.icon}`}/>
        <div className="day-label">
          {entry.label[this.props.isEnglish]}
        </div>
        <div className="day-time">
          {entry.time}
        </div>
      </div>)}
    </div>
  }

  getDayStyle(widthQuotient) {
    let height = this.getCarouselHeight();
    let width = (window.innerWidth / 5) * widthQuotient;
    return Object.assign({}, {height, width});
  }

  getCarouselHeight() {
    return Math.ceil(window.innerHeight / 3) * 2;
  }

  // getDay(day) {
  //   return <div>Hello {day.text}</div>;
  // }

  //
  // getEmail() {
  //   return <div>
  //     <div className="email-container" onSubmit={this.handleEmailSubmit}>
  //       <div className="email-label">
  //         {emailHelper[this.props.isEnglish].label}
  //       </div>
  //       <div>
  //         <span><input className="email-input" type="text" value={this.state.value} onChange={this.handleEmailChange}/></span>
  //         <span><input className="email-submit" type="submit" value="Join"/></span>
  //       </div>
  //     </div>
  //   </div>
  // }
  //
  // handleEmailSubmit(event) {
  //   event.preventDefault();
  //   console.log("email submitted");
  // }

  // handleEmailChange(event) {
  //   this.setState({email: event.target.value});
  // }
  //
  // getDescription() {
  //   return <div className="namibia-description-container" id="namibia-description-container-mobile">
  //     <div className="namibia-description" id="namibia-description-mobile">
  //       {namibiaDesc[this.props.isEnglish].map((item, i) => <div key={i}>{item}<br/></div>)}
  //     </div>
  //   </div>
  // }
  //
  // getQuote() {
  //   return <div className="quote-container">
  //     <div className="quote-cover">
  //       {quoteHelper[this.props.isEnglish][0]} <span
  //       className="quote-web-linebreak"><br/></span> {quoteHelper[this.props.isEnglish][1]}
  //     </div>
  //     <br/>
  //     <div className="quote-author">
  //       <i>{quoteHelper[this.props.isEnglish][2]}</i> {quoteHelper[this.props.isEnglish][3]}
  //     </div>
  //   </div>
  // };
  //
  // getOnlyInNamibia() {
  //   return <div className="namibia-activities-header" id="namibia-activities-header-mobile">
  //     {onlyInNamibiaQuote[this.props.isEnglish][0]}
  //   </div>
  // }

  // getSafariRight() {
  //   return <div className={`safari-right-${this.state.isLionSelected ? "lion" : "antelope"}`}>
  //     <div className="circle-container">
  //       <div className={this.state.isLionSelected ? "full-circle" : "empty-circle"} onClick={this.onCircleClick}/>
  //       <div className={this.state.isLionSelected ? "empty-circle" : "full-circle"} onClick={this.onCircleClick}/>
  //     </div>
  //     <div className="safari-info">
  //       <div className="safari-info-title">{safariHomeHelper[this.props.isEnglish].infoTitle}</div>
  //       <div className="safari-info-caption">{safariHomeHelper[this.props.isEnglish].infoCaption}</div>
  //     </div>
  //   </div>
  // }
  //
  // onCircleClick() {
  //   this.setState({isLionSelected: !this.state.isLionSelected})
  // }
  //
  // getSafari() {
  //   return <div className="safari-wrapper">
  //     {this.getVisitNamibia()}
  //     {this.getSafariRight()}
  //   </div>
  // }

  render() {
    return <div className="home-container">
      {/* rows 1 - 3 */}
      {this.getLandingImage()}
      {this.getLandingLayer()}

      {/* rows 4 - 5 */}
      {/*{this.getVisitNamibia()}*/}
      {this.getDestinations(destinationsHelper)}

      {/* row 6 */}
      {this.getGrid(natureGridHelper)}

      {/* rows 7 - 8  */}
      {this.getCulturalExcursions(stayHelper)}
      {this.getHeart()}

      {/* row 9 */}
      {this.getGrid(stayGridHelper)}

      {/* row 12 */}
      {this.getWeek()}
      {/*{this.getScheduleBanner()}*/}
      {/*{this.getNamibiaFlag()}*/}
      {/*{this.getEmail()}*/}

      {/* rows 10 - 11 */}
      {this.getExpertHeadshot()}
      {this.getExpertInfo()}
      {this.getGroupPicture()}
    </div>;
  }
}
