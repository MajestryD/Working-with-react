import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom';

export default class Controller extends Component {
  render() {
    return (
      <div className ="project_all">
        <div className = "project_nav">
          <Link className= "nav_left" exact to = '/work/appraise'><h3>Appraise.me</h3></Link>
          <Link className= "nav_right" exact to = '/work/site'><h3>Website</h3></Link>
        </div>

        <div className = "about_project">

          <div className = "project_icon" >
            <img  src = {require('./microcontroller.svg')} alt = 'still me'/>
            <span> My microcontroller project</span>
          </div>

          <div className = "project_summary">
            <span>Project Date:March 2018</span>
            <p>A microcontroller project I started to put some of my hardware knowledge to use. The project was built from scratch from start(soldering the LEDs) to finish(programming the game). The end product was a Pong game(similar to the Atari pong game) using the accelerometer on the microcontroller to control the paddles. The project is created using the KL-43z board, MCUexpresso SDK and tons of solder.</p>
          </div>

          <a className = 'you_link' href = "https://www.youtube.com/watch?v=-kNhfIZlkU0&t=36s" >
            <Popup trigger ={<img className = 'YouTube' src = {require('./YouTube.svg')} alt =" youtube"/>}
              on = "hover">
               <img className = 'gif' src = "https://media.giphy.com/media/JQKzO0J6RUXiAXWwp2/giphy.gif" alt = 'octo-me'/>
               Click me to check it out on my YouTube
            </Popup>

            <h3 >Hover Me!</h3>

          </a>

        </div>

      </div>


    );
  }
}
