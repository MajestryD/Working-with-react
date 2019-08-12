import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Website extends Component {
  render() {
    return (

      <div className = "project_all">
        <div className = "project_nav">
          <Link exact to = '/work/controller'><h3>Microcontroller</h3></Link>
          <Link exact to = '/work/appraise'><h3> Appraise.me</h3></Link>

        </div>


        <div className = "about_project">

          <div className = "project_icon" >
            <img src = {require('./sprite2.svg')} alt = 'still me'/>
            <span> Personal website</span>
          </div>

          <div className = "project_summary">
            <span>Project Date:July 2019</span>
            <p>A project I started to consolidate and demonstrate my current skill level and skill set as well as provide a platform to express my creativity and style. This website is created using CRA (create react app), React Router, Redux and SASS with GULP.</p>
          </div>

          <a className = 'github' href = "https://github.com/MajestryD/Working-with-react" >
            <img className = 'octome' src = {require('./octopeng.svg')} alt = 'octo-me'/>
            <h3 >GitHub</h3>
            <h4 > View repository </h4>
          </a>

        </div>
      </div>


    );
  }
}
