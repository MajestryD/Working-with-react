import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    return (
      <div className = "icon_bar">
        <a href = "https://www.facebook.com/dnlpng"><img className="facebook" src={require('./facebook2.svg')} alt ="facebook"/></a>
        <a href = "https://www.instagram.com/dnlpng/"><img className="instagram" src={require('./instagram.svg')} alt ="instagram"/></a>
        <a href ="https://github.com/MajestryD"><img className="twitter" src={require('./github.svg')} alt ="twitter"/></a>
        <a href = "https://www.linkedin.com/in/daniel-wei-zhuo-peng-5b9266114/"><img className="linkedin" src={require('./linkedIn.svg')} alt ="linkedin"/></a>
      </div>
    );
  }
}
