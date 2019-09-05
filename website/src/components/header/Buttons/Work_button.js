import React from 'react';
import {Link} from 'react-router-dom';


const Work_button = () =>{
  return (
    <Link className="button_work" to ="/work">
        <p>Work</p>
        <hr className = "work_icon"/>
        <span>Projects and hobbies</span>
    </Link>
  );
}

export default Work_button;
