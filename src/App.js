import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from'react-router-dom';
import NavagationBar from './Components/NavagationBar';
import Home from './Home';
import Facility from './Facility';
import PersonalTrainers from './PersonalTrainers';
import NoMatch from './NoMatch';
import FooterPage from './Components/FooterPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
        <BrowserRouter>
        <NavagationBar/>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/facility" component= {Facility}/>
            <Route exact path="/personaltrainers" component= {PersonalTrainers}/>
            <Route component= {NoMatch}/>
          </Switch>
        </BrowserRouter>
        <FooterPage/>
    </div>
  );
}

export default App;
