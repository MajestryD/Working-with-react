import React, { Component } from 'react';

export default class contact extends Component {
  render(){
    return (



      <div className = "first">
        <div className = " contact_container">
          <h1>Get in Touch with <span className = "red">Daniel</span></h1>

          <div className = "contact_content">

            <div className = "contact_info">
              <p className = "contact_text">
                I would love to hear about you and talk about anything from internships to a simple hello. Do not hesitate to leave a message!
              </p>
              <div className ="contact_details">
                <span>danielpang313@hotmail.com</span>
                <span> Toronto ON,Canada</span>
              </div>


            </div>




            <div className = "contact_links">
              <a href = "https://www.facebook.com/dnlpng"> <img src = {require('./facebook.svg')} alt = 'facebook'/> Facebook</a>
              <a href = "https://www.instagram.com/dnlpng/">  <img src = {require('./instagram.svg')} alt = 'art'/> Instagram</a>
              <a href ="https://github.com/MajestryD">  <img src = {require('./github.svg')} alt = 'git'/> GitHub</a>
              <a href = "https://www.linkedin.com/in/daniel-wei-zhuo-peng-5b9266114/">  <img src = {require('./linkedIn.svg')} alt = 'linkedin'/> LinkedIn</a>

            </div>

            <span className = "exit_statement">Thanks for visiting my website</span>



          </div>



      </div>
    </div>

    );
  }
}
