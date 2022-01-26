import React from 'react';
import './About.css';


function About() {
    
    return (
        <div  id= "section-two" className =  "about-container">
            <img src="/photo.png" alt="Avatar" className = "center"></img>
         
            <h2>About Me</h2>
            <div className = "aboutme"> 
                <p className = 'bio'>Hi, I'm a Game/Front-End Developer based in San Francisco and originally from Jakarta, Indonesia. 
                Since I was a little kid, I have always enjoyed creating games out of papers and tools found around my house. 
                Whether using a pen cap as a top, or creating a board game out of pen and paper, I always love to channel my creativity.  
                In 2012, I started to pick up programming and in 2015 I started making my own video games. 
                <br></br>  <br></br> 
                Recently I have been working as a contract Unity Developer for a few different game companies in San Francisco. 
                Currently, I have 4 years of experience developing games using Unity.
                In my spare time, I developed Android games for the Play Store. I am also a self taught web-developer with knowledge in CSS, HTML, JS and React.js.
                My dream is to start my own game company and keep making games that everyone can enjoy!    
                <br></br>  <br></br>
                <b>C# | C++ | Unity | Unreal-Engine | JavaScript | HTML | CSS | React.js | Node.js</b>   
   
                </p>
            </div>
  
        </div>
    )
  }

  export default About;