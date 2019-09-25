import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';


function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-dark">
    <div className="navbar-header">
       <a className="navbar-brand" href="/"><p1><b>KEVIN SUTRISNO<br/></b></p1>
                       <p2>PROGRAMMER / GAME DEVELOPER</p2></a>   		
    </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mr-autopse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><Link to="/personal-website/"><p3>HOME</p3></Link></li>
         <li class="nav-item"><Link to="/personal-website/about"><p3>ABOUT</p3></Link></li>
         <li class="nav-item"><Link to="/personal-website/resume"><p3>RESUME</p3></Link></li>
          <li class="nav-item"><Link to="/personal-website/contact"><p3>CONTACT</p3></Link></li>
       </ul> 
     </div>
  </nav>	
  )
}



export default NavigationBar;
