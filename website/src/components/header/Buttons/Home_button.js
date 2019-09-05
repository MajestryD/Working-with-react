import React from 'react';
import {Link} from 'react-router-dom';


const Home_button = () =>{
  return (
    <Link className="button_work" to ="/">
      <p>Home</p>
      <hr className = "home_icon"/>
      <span>Starting point</span>
    </Link>
  );
}

export default Home_button;
