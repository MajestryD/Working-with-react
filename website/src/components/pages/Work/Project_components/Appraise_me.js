import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Appraise extends Component {
  render() {
    return (

      <div className = "project_all">
        <div className = "project_nav">
          <Link className= "nav_left" to = '/work/site'><h3> Website</h3></Link>
          <Link className= "nav_right" to = '/work/controller'><h3>Microcontroller</h3></Link>
        </div>

        <div className = "about_project">

          <div className = "project_icon" >
            <img src = {require('./Appraise-me.svg')} alt = 'still me'/>
            <span> An appraisal system</span>
          </div>
          <div className = "project_summary">
            <span>Project Date:Feburary 2019</span>
            <p>A Hack-A-Ton project for Hack the Valley at UtSC. Appraise.me is a web app made in Flask(A python framework). The app allows the user to easily appraise the items using image recongnition and provides a detailed explaination of said items.</p>
          </div>

          <a className = 'github' href = "https://github.com/StrawHatUnicorns/appraise.me" >
            <img className = 'octome' src = {require('./octopeng.svg')} alt = 'octo-me'/>
            <h3 >GitHub</h3>
            <h4 > View repository </h4>
          </a>

        </div>

      </div>

    );
  }
}
