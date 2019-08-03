import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Contact_Home extends Component {
  render() {
    return (
      <Link className="button_work" to ="/contact">
        Contact
        <hr/>
        <span>Let's get in touch</span>
      </Link>
    );
  }
}
