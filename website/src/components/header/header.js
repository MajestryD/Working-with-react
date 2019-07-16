import React from 'react';
import logo from './sprite2.png';
import Icons from './icons'
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


function chef(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}



const posts = [
  <li><button onClick={chef} > Home </button></li>,
  <li><button onClick={chef} > About </button></li>,
  <li><button onClick={chef} > Resume </button></li>,
  <li><button onClick={chef} > Contact </button></li>
];
export default Header;
