import React, { Component } from 'react'

export default class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "goals">
          <p> Developer
            <img className="coding" src={require('./Coding.svg')} />
          </p>
          <p> Artist
            <img className="pencil" src={require('./pencil2.svg')} />
          </p>
          <p>Creator 
            <img className="books" src={require('./Books.svg')} />
          </p>



        </div>

      </React.Fragment>

    );
  }
}
