import React from 'react';
import {Link} from 'react-router-dom';


const About_Button = () =>{
  return (
    <Link className="button_work" to ="/about">
      <p>About</p>
      <hr className = "about_icon"/>
      <span>Who I am</span>
    </Link>
  );
}

export default About_Button;
