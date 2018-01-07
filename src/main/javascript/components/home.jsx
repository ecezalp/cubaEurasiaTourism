import React from "react";
import namibDesert from '../../resources/static/images/sixGrid/namib_desert.jpg';
import namibRiverbed from '../../resources/static/images/sixGrid/namib_riverbed.jpg';
import namibTrees from '../../resources/static/images/sixGrid/namib_trees.jpg';
import namibDeadTree from '../../resources/static/images/sixGrid/namib_deadTree.jpg';
import namibDune from '../../resources/static/images/sixGrid/namib_dune.jpg';
import namibBush from '../../resources/static/images/sixGrid/namib_bush.jpg';


export default class Home extends React.Component {

  getLanding() {
    return <div className="landingImageContainer">
      <div className="landingImage"/>
      <div className="landingCaption">{this.props.isEnglish ? "Namibia" : "Namibya"}</div>
      <div className="backgroundLayer"/>
      <i className="fa fa-caret-down" aria-hidden="true"/>
    </div>
  };

  getQuote() {
    let isEnglish = this.props.isEnglish;
    let quoteHelper = {
      true: {
        0: "I never knew of a morning in Africa",
        1: "when I woke up that I was not happy.",
        2: "True at First Light",
        3: "Ernest Hemingway"
      },
      false: {
        0: "Bir sabah bilmedim ki",
        1: "Afrika'da huzurla uyanmadığım.",
        2: "Günün İlk Işığında Gerçek",
        3: "Ernest Hemingway"
      },
    };

    return <div className="quoteContainer">
      <div className="quoteCover">
        {quoteHelper[isEnglish][0]}<br/>
        {quoteHelper[isEnglish][1]}
      </div><br/>
      <div className="quoteAuthor">
        <i>{quoteHelper[isEnglish][2]}</i><br/>
        {quoteHelper[isEnglish][3]}
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
      {this.getGrid()}
    </div>;
  }
}