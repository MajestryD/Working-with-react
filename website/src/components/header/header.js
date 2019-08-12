import React from 'react';
import Icons from './Icons/Icons';
import Home from './Buttons/Home_button';
import About from './Buttons/About_button';
import Work from './Buttons/Work_button';
import Contact from './Buttons/Contact_button';

function Header() {
  return (

    <div className = "side_nav">

      <img className = "face" src={require('./sprite2.svg')} alt ="logo me"/>

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
  <li key = {1}><Home/></li>,
  <li key = {2}><About/></li>,
  <li key = {3}><Work/></li>,
  <li key = {4}><Contact/></li>
];
export default Header;
