import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    return (
      <div className = "icon_bar">
        <img className="facebook" src={require('./Icons/facebook.png')} />
        <img className="instagram" src={require('./Icons/instagram.png')} />
        <img className="twitter" src={require('./Icons/twitter.png')} />
        <img className="linkedin" src={require('./Icons/linkedin.png')} />
      </div>
    );
  }
}
