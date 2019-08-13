import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Button_Home extends Component {
  render() {
    return (
      <Link className="button_work" to ="/about">
        <p>About</p>
        <hr className = "about_icon"/>
        <span>Who I am</span>
      </Link>
    );
  }
}
