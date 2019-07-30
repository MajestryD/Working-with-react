import React, { Component } from 'react'

export default class Work_button extends Component {
  render() {
    return (
      <button onClick={chef} >
        Work
        <hr/>
        <span>Projects and hobbies</span>
      </button>
    );
  }
}

function chef(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
