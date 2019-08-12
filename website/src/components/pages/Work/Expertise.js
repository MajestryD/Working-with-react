import React, { Component } from 'react';

export default class expetise extends Component {
  render() {
    return (
      <div className = "tech_exp">

        <div className = "tech_items">
          <div className="tech_img">
            <p>Languages</p>

          </div>

          <div>
            {languages}
          </div>

        </div>

        <div className = "tech_items">
          <div className="tech_img">
            <p>Skills</p>

          </div>

          <div>
            {skills}
          </div>
        </div>

        <div className = "tech_items">
          <div className="tech_img">
            <p>Software</p>

          </div>

          <div>
            {software}
          </div>

        </div>
      </div>
    );
  }
}
const languages = [
  <li>Java</li>,
  <li>JavaScript</li>,
  <li>C</li>,
  <li>C++</li>
];

const skills = [
  <li>CSS/HTML</li>,
  <li>SASS with Gulp</li>,
  <li>React CRA, Redux, React Router</li>,
  <li>SDLC(Software Development Life Cycle)practices</li>,
  <li>Object oriented programming</li>,
  <li>Microcontrollers and FPGA</li>
];

const software = [
  <li>Atom</li>,
  <li>Adobe Photoshop</li>,
  <li>Inkscape</li>,
  <li>Painttool Sai</li>,
  <li>Microsoft Office</li>
];

/*
  <img  src={require('./languages.svg')} alt ="language"/>
  <img  src={require('./software.svg')} alt ="software"/>
  <img  src={require('./skills.svg')} alt ="skills"/>
*/
