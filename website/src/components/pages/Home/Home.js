import React, { Component } from 'react'
import Career from '../Career/Career'

export default class first extends Component {
  render() {
    return (
      <div className = "first">
        <div className = "Name">
          <h1>Hi!</h1>
        </div>

        <div className = "about">
          <p><span> I'm Daniel Peng</span></p>
        </div>

        <Career/>



      </div>


    );
  }
}
