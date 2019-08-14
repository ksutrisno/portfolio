import React, {Component} from 'react';

import './App.css';

import NavigationBar from './Navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
    render()
    {
      return(  
          <NavigationBar/>
      );
    }
}

export default App;
