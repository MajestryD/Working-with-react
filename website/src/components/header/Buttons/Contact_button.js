import React, { Component } from 'react'

export default class Contact_Home extends Component {
  render() {
    return (
      <button onClick={chef} >
        Contact
        <hr/>
        <span>Let's get in touch</span>
      </button>
    );
  }
}

function chef(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
