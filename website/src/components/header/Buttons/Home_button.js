import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Button_Home extends Component {
  render() {
    return (
      <Link className="button_work" to ="/">
        Home
        <hr className = "home_icon"/>
        <span>Starting point</span>
      </Link>
    );
  }
}
