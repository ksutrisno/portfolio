import React, { Component } from "react";
import ModalImage from "react-modal-image";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div class="projects" id="section-one">
          <div class="projects-header">
            <h2>
              <b>Commercial Project</b>
            </h2>
          </div>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">TAP RUSH</h3>
              <h5 className="project-platform">Android</h5>
              <p>
                Tap rush is a mobile arcade game with multiple different game
                modes. The player need to match the color of the upcoming
                projectile with the wheel. This game aim to train the player
                reflex and hand-eye coordination
              </p>
              <h5> Features:</h5>
              <ul>
                <li className="point"> 3 different game modes</li>
                <li className="point">
                  {" "}
                  Various patterns of incoming projectiles
                </li>
                <li className="point"> High score & leaderboard</li>
                <li className="point">
                  {" "}
                  Store for cosmetics and customization
                </li>
              </ul>

              <div className="horizontal-container">
                <a className ="link" href="https://play.google.com/store/apps/details?id=com.ThreeOneNine.ColorRush">
                  <img
                    class="gplaylogo"
                    src="googleplaylogo.png"
                    alt="googleplay"
                  ></img>
                </a>
                <img class="unity" src="unitylogo.png" alt="googleplay"></img>
              </div>
            </div>
            <div className="video-col">
              {" "}
              <iframe
              title = "taprush"
                    width="100%"
                    height="100%"
                src="https://www.youtube.com/embed/a4fP8sVVePI"
                frameborder="0"
                allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>{" "}
            </div>
          </div>
          <br /> <br /> <hr></hr>
          <div class="projects-header">
            <h2>
              <b>Personal Projects</b>
            </h2>
          </div>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">DIMENSION HUNTER</h3>
              <h5 className="project-platform">Windows</h5>
              <p>
                Dimension Hunter is a 2D Metroidvania game about a renowned
                bounty hunter named X. His mission is to enter the mysterious
                tower created by the Mastedmind in order to find the rare
                artifact hidden within the tower.
              </p>
              <h5> Features:</h5>
              <ul>
                <li className="point"> Fast pace combat</li>
                <li className="point"> Multiple enemies</li>
                <li className="point"> Different weapon to choose from</li>
                <li className="point"> Boss fights</li>
              </ul>


                <a className ="link"
                  href="https://drive.google.com/open?id=1tBuVscpTUzAQZcRLetrIIeVWry-veYut"
                  target="blank"
                >
                  <button className="button" type="button">
                    DOWNLOAD DEMO
                  </button>
                </a>
           
            </div>

            <div className="video-col">
              {" "}
              <iframe
                title = "dimensionhunter"
                  width="100%"
                  height="100%"
                src="https://www.youtube.com/embed/E8NqJmagab4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>{" "}
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">SLIME ESCAPE FROM HELL</h3>
              <h5 className="project-platform">Windows</h5>
              <p>
                {" "}
                Escape From Hell is a 2D roguelike dungeon crawler with randomly
                generated maps. The game features 8 different weapons and 5
                different enemies. This game is orginally made as a group
                project during school.
              </p>
              <h5> Features:</h5>
              <ul>
                <li class="point"> 5 unique enemies</li>
                <li class="point"> 8 unique weapons</li>
                <li class="point"> Traps and surprises</li>
                <li class="point"> Randomly generated maps</li>
              </ul>

                <a className ="link"
                  href="https://askeladd2802.itch.io/slime-escape-from-hell"
                  target="blank"
                >
                  <button className="button" type="button">
                    DOWNLOAD DEMO
                  </button>
                </a>
        
            </div>

            <div className="video-col">
              {" "}
              <iframe
                title = "slime"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tatxG39f2f4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>{" "}
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">
                UNREAL ENGINE AI DEMO - BEHAVIOUR TREE
              </h3>
              <h5 className="project-platform">Windows</h5>
              <p>
                {" "}
                A demonstration of Unreal Engine Behaviour Tree. This demo was
                made during my Midterm of AI Programming class at Academy of
                Art.
              </p>
           
                <a className ="link"
                  href="https://drive.google.com/open?id=1-kp3eVKD1o-3T9HVtmCcnZdifctKKWIa"
                  target="blank"
                >
                  <button className="button" type="button">
                    DOWNLOAD DEMO
                  </button>
                </a>
           
            </div>

            <ModalImage className = "behaviour-tree"
              small={"behaviourtree_unreal.png"}
              large={"behaviourtree_unreal_lg.png"}
              alt="Behaviour Tree"
            />
          </div>
          <hr></hr>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">Multiplayer Minesweeper</h3>
              <h5 className="project-platform">Windows x64</h5>
              <p>
                {" "}
                A multiplayer minesweeper game made with C++ and SDL Development
                Library. The networking is made using Win32 Socket API and the
                data is serialized using Google Protobuf. I didn't implement the
                whole minesweeper mechanic because the main aim of the project
                is to show understanding over network programming.
              </p>

            
                <a className ="link"
                  href="https://drive.google.com/open?id=1xBhvxdGrdz-CHMzY8Pe_GXPYlRBVds_z"
                  target="blank"
                >
                  <button className="button" type="button">
                    SOURCE CODE
                  </button>
                </a>
            
            </div>

            <div className="image-col">
              <img
                src="minesweeper.png"
                alt="minesweeper"
                class="minesweeper"
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <div className="desc-col">
              <h3 className="project-title">Pacman Clone</h3>
              <h5 className="project-platform">Windows x86</h5>
              <p>
                {" "}
                A pacman clone made during my final year in University. The game
                is made using my classmates game Engine. The engine uses Lua as
                the scripting language.
              </p>
              <h5> Teamates:</h5>
              <ul>
                <li class="point"> Shane King(Engine Owner)</li>
                <li class="point"> Tedo Pranowo</li>
              </ul>
            
                <a className ="link"
                  href="https://drive.google.com/open?id=1a6-MoSSR6yIon4cqxb176tZoY2r1mMr6"
                  target="blank"
                >
                  <button className="button" type="button">
                    DOWNLOAD GAME
                  </button>
                </a>
     
            </div>

            <div className="image-col">
              <img src="pacman.png" alt="pacman" class="pacman"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
