import React, {Component} from 'react';
import './NavigationBar.css';
import { Nav, Navbar } from 'react-bootstrap'
import { tsConstructorType } from '@babel/types';
import { Link} from 'react-scroll';


class NavigationBar extends Component
{
  constructor(props)
  {
    super(props);

  }

  componentDidMount()
    {
        window.addEventListener('scroll', () =>{
        const isTop = window.scrollY > 100;


        })
    }
  

  
  state = {
    navExpanded:false
  }


  setNavExpanded = (expanded) =>
  {
    this.setState({navExpanded: expanded });
  }



  handleSetActive(to) {
    document.getElementById(to).style.color = "orange";
   
  }
 
  handleSetInactive(to)
  {
    document.getElementById(to).style.color = "gainsboro";

  }

  render () {
    return (
     
      <Navbar  onToggle = {this.setNavExpanded} 
       expanded={this.state.navExpanded} sticky ="top" collapseOnSelect bg="dark" expand="lg" variant="dark">
         <Navbar.Brand href="#"><p1><b>KEVIN SUTRISNO<br/></b></p1>
                         <p2>FRONT-END / GAME DEVELOPER</p2>  		
       </Navbar.Brand>
    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className= "center-navbar">
        <div class="nav-item" id = "two"><Link activeClassName ="active" exact to="section-two"  spy={true} smooth={true} offset={-250} duration={500}ignoreCancelEvents={true}
        onSetActive={()=>this.handleSetActive("two")}   onSetInactive={()=>this.handleSetInactive("two")  } 
        >ABOUT</Link></div>

        <div class="nav-item" id = "zero"><Link activeClassName ="active" exact to="section-zero"  spy={true} smooth={true} offset={-95} duration={500}ignoreCancelEvents={true}
                 onSetActive={()=>this.handleSetActive("zero")}   onSetInactive={()=>this.handleSetInactive("zero")}
        >EXPERIENCES</Link></div>
   
       <div class="nav-item" id = "one"><Link activeClassName ="active" exact to="section-one"   spy={true} smooth={true} offset={-80} duration={500}ignoreCancelEvents={true}
        onSetActive={()=>this.handleSetActive("one")}   onSetInactive={()=>this.handleSetInactive("one")}
      >PROJECTS</Link></div>
               
       <a href = "resume.pdf" target = "blank" class="nav-item" id = "three"> RESUME</a>
            
       
          </Nav>
       </Navbar.Collapse>
      
    </Navbar>	

    )
  }
}





export default NavigationBar;
