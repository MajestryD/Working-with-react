import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Button_Home extends Component {
  render() {
    return (
      <Link className="button_work" to ="/">
        <p>Home</p>
        <hr className = "home_icon"/>
        <span>Starting point</span>
      </Link>
    );
  }
}
