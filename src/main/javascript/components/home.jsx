import React from "react";
import culturePic from '../../resources/static/images/sixGrid/culture.jpg';
import landscapePic from '../../resources/static/images/sixGrid/landscape.jpg';
import lodgePic from '../../resources/static/images/sixGrid/lodgeParadise.jpg';
import safariPic from '../../resources/static/images/sixGrid/safari.jpg';
import {Link} from 'react-router-dom';
import africaMap from '../../resources/static/vectors/africaMap';


export default class Home extends React.Component {

  getLanding() {
    return <div className="landing-image-container">
      <div className="landing-image"/>
      <div className="landing-caption">{this.props.isEnglish ? "Namibia" : "Namibya"}</div>
      <div className="background-layer"/>
      <i className="fa fa-caret-down" aria-hidden="true"/>
    </div>
  };

  getNamibiaDesc() {
    let isEnglish = this.props.isEnglish;
    let namibiaDesc = {
      true: {
        0: "We travel looking for ourselves.",
        1: "We long for where we came from.",
        2: "Namibia is not just a place but it's a sensation",
        3: "The touch of wilderness rekindles",
        4: "our sense of belonging to nature.",
        5: "The Namib desert,",
        6: "the rich ecosystem with unusual plants,",
        7: "monoliths, caves, sinkholes, waterfalls,",
        8: "lakes morph into a unique sense of Namibian identity.",
        9: "Think about it. Things will not be same as before.",
      },
      false: {
        0: "Kendimize bakmak için seyahat ediyoruz.",
        1: "Nereden geldiğimizi uzun süre bekliyoruz.",
        2: "Namibya sadece bir yer değil, aynı zamanda bir sansasyon",
        3: "Vahşi doğanın dokunuşları yeniden canlanır",
        4: "doğaya aid olma duygumuz.",
        5: "Namib çölünün enginliği,",
        6: "olağandışı bitkilerle zengin ekosistem,",
        7: "monolitler, mağaralar, düdensler, şelaleler,",
        8: "göller, Namibya kimliğinin eşsiz bir anlamda morph.",
        9: "Bunu düşün. Her şey eskisi gibi olmayacak.",
      },
    };

    return <div className="namibia-description-container">
      <div className="namibia-description">
        {namibiaDesc[isEnglish][0]}<br/>
        {namibiaDesc[isEnglish][1]}<br/>
        <b>{namibiaDesc[isEnglish][2]}</b><br/>
        {namibiaDesc[isEnglish][3]}<br/>
        {namibiaDesc[isEnglish][4]}<br/>
        <b>{namibiaDesc[isEnglish][9]}</b><br/>
      </div>
      <div className="map-container">
        {africaMap()}
      </div>
    </div>
  }

  getQuote() {
    let isEnglish = this.props.isEnglish;
    let quoteHelper = {
      true: {
        0: "I never knew of a morning in Africa",
        1: "when I woke up that I was not happy.",
        2: "True at First Light",
        3: "by Ernest Hemingway"
      },
      false: {
        0: "Bir sabah bilmedim ki",
        1: "Afrika'da huzurla uyanmadığım.",
        2: "Günün İlk Işığında Gerçek",
        3: "Ernest Hemingway"
      },
    };

    return <div className="quote-container">
        <div className="quote-cover">
          {quoteHelper[isEnglish][0]} <br/> {quoteHelper[isEnglish][1]}
        </div>
        <br/>
        <div className="quote-author">
          <i>{quoteHelper[isEnglish][2]}</i> {quoteHelper[isEnglish][3]}
        </div>
    </div>
  };

  getOnlyInNamibia() {
    let isEnglish = this.props.isEnglish;
    let onlyInNamibiaQuote = {
      true: {
        0: "Trip Inspirations",
        1: "Our Schedule",
      },
      false: {
        0: "Gezi İlhamları",
        1: "Programımız",
      }
    }

    let linkPrefix = isEnglish ? "en" : tr;

    return <div className="namibia-activities-header">
      {onlyInNamibiaQuote[isEnglish][0]}
      <div className="go-to-recommendation">
        <Link className="go-to-recommendation-text" to={"/" + linkPrefix + "/schedule"}>
          {onlyInNamibiaQuote[isEnglish][1]}
        </Link>
      </div>
    </div>
  }

  getGrid() {
    let isEnglish = this.props.isEnglish;
    let activitiesHeader = {
      true: {
        0: "Cultural Excursions",
        1: "Wilderness",
        2: "Safari",
        3: "Lodge Paradise",
      },
      false: {
        0: "Kültür Gezintileri",
        1: "Doğa çöl",
        2: "Safari",
        3: "Lodge Paradise",
      },
    }

    return <div className="six-grid">
      <figure>
        <img src={culturePic} alt="The Pulpit Rock"/>
        <div className="picCaption">Cultural Excursions</div>
      </figure>

      <figure>
        <img src={landscapePic} alt="The Pulpit Rock"/>
        <div className="picCaption">Wilderness</div>
      </figure>

      <figure>
        <img src={safariPic} alt="The Pulpit Rock"/>
        <div className="picCaption">Safari</div>
      </figure>

      <figure>
        <img src={lodgePic} alt="The Pulpit Rock"/>
        <div className="picCaption">Lodge Paradise</div>
      </figure>

    </div>
  }

  render() {
    return <div className="home-container">
      {this.getLanding()}
      {this.getQuote()}
      {this.getNamibiaDesc()}
      {this.getOnlyInNamibia()}
      <div className="gridContainer">
        {this.getGrid()}
        <div className="gridCover"></div>
      </div>
    </div>;
  }
}