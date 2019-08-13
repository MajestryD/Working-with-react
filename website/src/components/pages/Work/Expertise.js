import React, { Component } from 'react';

export default class expetise extends Component {
  render() {
    return (
      <div className = "tech_exp">

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
            <p>Languages</p>

          </div>

          <div>
            {languages}
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
  <li key ={1}>Java</li>,
  <li key ={2}>JavaScript</li>,
  <li key ={3}>C</li>,
  <li key ={4}>C++</li>
];

const skills = [
  <li key ={1}>CSS/HTML</li>,
  <li key ={2}>SASS with Gulp</li>,
  <li key ={3}>React CRA, Redux, React Router</li>,
  <li key ={4}>SDLC(Software Development Life Cycle)practices</li>,
  <li key ={5}>Object oriented programming</li>,
  <li key ={6}>Microcontrollers and FPGA</li>
];

const software = [
  <li key ={1}>Atom</li>,
  <li key ={2}>Adobe Photoshop</li>,
  <li key ={3}>Inkscape</li>,
  <li key ={4}>Painttool Sai</li>,
  <li key ={5}>Microsoft Office</li>
];

/*
  <img  src={require('./languages.svg')} alt ="language"/>
  <img  src={require('./software.svg')} alt ="software"/>
  <img  src={require('./skills.svg')} alt ="skills"/>
*/
