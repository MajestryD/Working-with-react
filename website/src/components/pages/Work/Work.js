import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    return (

      <div className = "first">
        {skills}
      </div>


    );
  }
}


const skills = [
  <li>Techincal skills</li>,
  <li>Programming Languages</li>,
  <li>Frameworks</li>,
  <li>Software</li>
];
