import React, { Component } from 'react'

export default class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "goals">
          <div className = "goal_items"> an Artist
            <img className="goal_img" src={require('./Images/pencil2.svg')} alt ="artist"/>
            <p className = "summary"> Art has always been a passion of mine, from traditional medium with paints and pencils, to digital art ,to scalable vectors. Even though I didn't choose arts to be a professional focus, since recently development has become equal part art and programming with a heavy emphasis in UX and UI, I am able to look at things from a different stand point of development. </p>
          </div>
          <div className = "goal_items">a Creator
            <img className="goal_img" src={require('./Images/Books.svg')} alt ="creating"/>
            <p className = "summary"> Making things, especially things that prove to be fun and useful is an essential mindset that brought me into the world of development. Games, Apps, Stories, DnD campaign's are just a small selection of things that I have and will continue to create! </p>
          </div>
          <div className = "goal_items">a Developer
            <img className="goal_img" src={require('./Images/Coding.svg')} alt ="coding"/>
            <p className = "summary"> Being a developer gave me the tools and knowledge to achieve my goals of being a creator. There is nothing more satisfying than developing something that makes life easier and fun. </p>
          </div>


        </div>

      </React.Fragment>

    );
  }
}
