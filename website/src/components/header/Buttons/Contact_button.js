import React from 'react';
import {Link} from 'react-router-dom';


const Contact_button = () =>{
  return (
    <Link className="button_work" to ="/contact">
      <p>Contact</p>
      <hr className = "contact_icon"/>
      <span>Let's get in touch</span>
    </Link>
  );
}

export default Contact_button;
