import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Work_button extends Component {
  render() {
    return (
      <Link className="button_work" to ="/work">
          Work
          <hr className = "work_icon"/>
          <span>Projects and hobbies</span>
      </Link>

    );
  }
}
