import React, { Component } from 'react'
import Career from '../Career/Career'

export default class About extends Component {
  render() {
    return (
      <div className = "first">
        <div className = " about_container">
          <h1>About <span className = "red">Daniel Peng</span></h1>
          <div className = "me">

            I am a new graduate of computer science from York University, searching for a place for myself in this ever growing world of technology and computing. For now i'm working towards my strengths, combining them and setting foot into the realm of a developer.
          </div>

          <p className = "i_am_a"> I am...</p>

          <Career/>
        </div>

      </div>


    );
  }
}
