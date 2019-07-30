import React, { Component } from 'react'

export default class Button_Home extends Component {
  render() {
    return (
      <button onClick={chef} >
        Home
        <hr/>
        <span>Starting point</span>
      </button>
    );
  }
}

function chef(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
