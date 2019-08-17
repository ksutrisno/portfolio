import React, {Component} from 'react';

import './App.css';

import NavigationBar from './Navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

import Home from './Pages/Home'

class App extends Component{
    render()
    {
      return(         
          <Router>
              <NavigationBar/>
              <Route path = "/" component = {Home}/>
          </Router>
      );
    }
}

export default App;
