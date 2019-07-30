import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    return (
      <div className = "icon_bar">
        <img className="facebook" src={require('./facebook.png')} alt ="facebook"/>
        <img className="instagram" src={require('./instagram.png')} alt ="instagram"/>
        <img className="twitter" src={require('./twitter.png')} alt ="twitter"/>
        <img className="linkedin" src={require('./linkedin.png')} alt ="linkedin"/>
      </div>
    );
  }
}
