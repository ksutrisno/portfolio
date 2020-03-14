import React, {Component} from 'react';
import './Experiences.css';

class Experiences extends Component  {
    render()
{    return (
        <div>
        <br></br>
            <div className = 'experiences' id = "section-zero">      
                <div className = 'experiences-container'>
                <div><h2><b>Professional Experiences</b></h2></div>
                    <div className = 'experiences-item'>
                    <a href="https://www.krikey.com"><img src="/Krikey.jpg" alt="krikey" class = "logo"></img></a>
                    </div>
                    <div class = 'experiences-item'>
                    <h3>Unity Developer (Contract) – San Francisco, CA </h3>
                        <ul>   
                            <li className = 'point'> Developed Augmented Reality mini games for both IOS and Android </li>
                            <li className = 'point'> Product ownership over each game features and implementation</li> 
                            <li className = 'point'>  Worked on both single player and multiplayer aspect of the mini games </li>
                            <li className = 'point'>  Contribute in both design and user experiences of the mini games </li>
                        </ul>
                    </div>
                    <div className = 'experiences-item'>
                    <a href="https://www.playtable.com"><img src="/playtable.png" alt="playtable" class = "logo"></img></a>
                    </div>
                    <div className = 'experiences-item'>  
                        <h3>Unity Developer (Contract) – South San Francisco, CA </h3>
                        <ul>
                            <li className = 'point'> Worked on multiple classic card games such as Hearts/ Spades and party games 
                            <br></br>such as Card Against Humanity for both the PlayTable console and Handheld (mobile) </li>
                            <li className = 'point'> Programmed the gameplay as well as the cards and UI animation in Unity </li> 
                        </ul>
                    </div>
            </div>
            </div>
            
        </div>
    )
  }
}

  export default Experiences;