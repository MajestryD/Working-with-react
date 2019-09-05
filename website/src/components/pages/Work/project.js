import React from 'react';
import Website from './Project_components/Website';
import Controller from './Project_components/Controller';
import Appraise from './Project_components/Appraise_me';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const project =()=>{
  return (

    <React.Fragment>
      <p className = "project">
        <Link to = '/work'>Projects</Link>
      </p>
      <Router>
        <div className = "works">
          <Switch>

            <Route exact path = '/work/'> {works} </Route>
            <Route exact path = '/work/appraise'> <Appraise/> </Route>
            <Route exact path = '/work/controller'> <Controller/> </Route>
            <Route exact path = '/work/site'> <Website/> </Route>
          </Switch>
        </div>
      </Router>

    </React.Fragment>


  );
}

export default project;

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
