import React, { Component } from 'react';
import Website from './Project_components/Website';
import Controller from './Project_components/Controller';
import Appraise from './Project_components/Appraise_me';
import { Switch, Route, Link} from 'react-router-dom';

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
          <div className = "works">
          <Switch>
            <Route exact path = '/work'> {works} </Route>
            <Route exact path = '/work/appraise'> <Appraise/> </Route>
            <Route exact path = '/work/controller'> <Controller/> </Route>
            <Route exact path = '/work/site'> <Website/> </Route>
          </Switch>
        </div>

      </React.Fragment>
    );
  }
}

const works = [
  <Link key ={1} className ="work_link" to ="/work/controller"><img className = 'work_items' src={require('./microcontroller.svg')} alt ="microcontroller"/>
  <span>My microcontroller project</span></Link>
  ,
  <Link key ={2} className ="work_link" to ="/work/site"><img className = 'work_items' src={require('./sprite2.svg')} alt ="me"/><span>Personal Website </span>
  </Link>
  ,
  <Link key ={3} className ="work_link" to ="/work/appraise"><img className = 'work_items' src={require('./Appraise-me.svg')} alt ="appraise.me"/> <span></span>An appraisal system
  </Link>

];
