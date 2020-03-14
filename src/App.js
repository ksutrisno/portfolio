import React, {Component} from 'react';

import './App.css';

import NavigationBar from './Navbar/NavigationBar';
import Sidebar from './Navbar/Sidebar';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Footer from './Pages/Footer';

import Experiences from './Pages/Experiences';


import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
    render()
    {
      return(    
          <div> 
         
              <NavigationBar/>
              <Sidebar/>
              <About/>
              <Experiences/>
              <Projects/>
              <Footer/>
          </div>   
      );
    }
}

export default App;
