import React from "react";
import namibDesert from '../../resources/static/images/sixGrid/namib_desert.jpg';
import namibRiverbed from '../../resources/static/images/sixGrid/namib_riverbed.jpg';
import namibTrees from '../../resources/static/images/sixGrid/namib_trees.jpg';
import namibDeadTree from '../../resources/static/images/sixGrid/namib_deadTree.jpg';
import namibDune from '../../resources/static/images/sixGrid/namib_dune.jpg';
import namibBush from '../../resources/static/images/sixGrid/namib_bush.jpg';
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

  getGrid() {
    return <div className="six-grid">
      <figure>
        <img src={namibDesert} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

      <figure>
        <img src={namibRiverbed} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

      <figure>
        <img src={namibTrees} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

      <figure>
        <img src={namibDeadTree} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

      <figure>
        <img src={namibBush} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

      <figure>
        <img src={namibDune} alt="The Pulpit Rock"/>
        <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
      </figure>

    </div>
  }

  render() {
    return <div className="home-container">
      {this.getLanding()}
      {this.getQuote()}
      {this.getNamibiaDesc()}
      {this.getGrid()}
    </div>;
  }
}