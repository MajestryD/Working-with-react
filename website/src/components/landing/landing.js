import Header from '../header/header'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Work from '../pages/Work/Work'
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Land extends Component {
  render() {
    return (
      <Router>

          <div className = "landing_page">
            <Header />
            <Route children={({ location }) => console.log(location)||(
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout ={200}
                  classNames ='fade'
                  unmountOnExit

                  >
                  <Switch location ={location}>
                    <Route path ="/" exact component = {Home}/>
                    <Route path ="/about" exact component = {About}/>
                    <Route path ="/contact" exact component = {Contact}/>
                    <Route path ="/work" exact component = {Work}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}/>
          </div>




      </Router>



    );
  }
}


export default Land;
