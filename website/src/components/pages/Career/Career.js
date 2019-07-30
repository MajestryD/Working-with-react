import React, { Component } from 'react'

export default class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "goals">
          <p> Developer
            <img className="coding" src={require('./Images/Coding.svg')} alt ="coding"/>
          </p>
          <p> Artist
            <img className="pencil" src={require('./Images/pencil2.svg')} alt ="artist"/>
          </p>
          <p>Creator
            <img className="books" src={require('./Images/Books.svg')} alt ="creating"/>
          </p>



        </div>

      </React.Fragment>

    );
  }
}
