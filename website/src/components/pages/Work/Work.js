import React, { Component } from 'react';
import Expertise  from './Expertise';
import Projects from './project';
import {Link} from 'react-router-dom';

export default class Work extends Component {
  render() {
    return (

      <div className = "first">
        <div className = " work_container">

          <p className = "me">
            <span className = "red">Daniel's</span> Resume
          </p>
          <p className = "project">
            Techinical expertise
          </p>

            <Expertise />

          <p className = "project">
            <Link to = '/work'>Projects</Link>
          </p>

          <div className = "project_container">
            <Projects/>
          </div>
        </div>



      </div>


    );
  }
}
