import React from 'react';
import logo from './sprite2.png';
import Icons from './Icons/Icons';
import Home from './Buttons/Home_button';
import About from './Buttons/About_button';
import Work from './Buttons/Work_button';
import Contact from './Buttons/Contact_button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Header() {
  return (

    <div className = "side_nav">

      <img className = "face" src={require('./sprite2.svg')} />

      <div className="Links">
        <ul>
          {posts}
        </ul>
      </div>

      <Icons/>
    </div>
  );
};



const posts = [
  <li><Home/></li>,
  <li><About/></li>,
  <li><Work/></li>,
  <li><Contact/></li>
];
export default Header;
