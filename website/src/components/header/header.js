import React,{ Component } from 'react';
import Icons from './Icons/Icons';
import Home from './Buttons/Home_button';
import About from './Buttons/About_button';
import Work from './Buttons/Work_button';
import Contact from './Buttons/Contact_button';

class Header extends Component{
  constructor(props){
    super(props)
    this.state ={
      isSideBarOpen:false,
    }
  }

  handleMenuButtonClick =() => {
      this.setState({isSideBarOpen: !this.state.isSideBarOpen})

  }
  render(){
    const { isSideBarOpen} = this.state;
    const { isDesktop} = this.state;
    const posts = [
      <li className ="one" onClick={this.handleMenuButtonClick} key = {1}><Home/></li>,
      <li className ="two" onClick={this.handleMenuButtonClick} key = {2}><About/></li>,
      <li className ="three" onClick={this.handleMenuButtonClick} key = {3}><Work/></li>,
      <li className ="four" onClick={this.handleMenuButtonClick} key = {4}><Contact/></li>
    ];
    return (

    <div className = "side_nav">

      <img className = "face" src={require('./sprite2.svg')} alt ="logo me"/>

       <div className={ `Links ${(isSideBarOpen) ? 'show' : 'hide'}`}>
        <ul>
          {posts}
        </ul>
      </div>


      <Icons/>

     <div className ="burger" onClick={this.handleMenuButtonClick}>
        <div className = "line1"></div>
        <div className = "line2"></div>
        <div className = "line3"></div>
      </div>

    </div>

      );
  }
}




export default Header;
