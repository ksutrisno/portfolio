import React, {Component} from 'react';

import './App.css';

import NavigationBar from './Navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/404';

class App extends Component{
    render()
    {
      return(         
          <Router>
              <NavigationBar/>

              <Switch>
              <Route exact path = "/personal-website/" component = {Home}/>
              <Route path="/personal-website/about" component={About}/>
              <Route component = {NotFound}/>
              <Redirect to =  "/404"/>
              </Switch>
          </Router>
      );
    }
}

export default App;
