import React from 'react';
import './Sidebar.css';


function Sidebar() {
    
    return (
        <div>
        <div class = "social-links">
            <a href ="/#"  onClick={()=>window.open("https://linkedin.com/in/kevin-sutrisno" )}><i className = "fa fa-linkedin-square" aria-hidden = "true"></i></a>
            <a href ="/#"  onClick={()=>window.open("https://github.com/ksutrisno" )} ><i className = "fa fa-github-square" aria-hidden = "true"></i></a>
            <a href ="/#" onClick={()=>window.open("https://twitter.com/sutrisno_kevin" )}><i className = "fa fa-twitter-square" aria-hidden = "true"></i></a>
            <a href ="/#" onClick={()=>window.open("https://www.instagram.com/kejosus" )}><i className = "fa fa-instagram" aria-hidden = "true"></i></a>
            <a href ="/#" onClick={()=>window.open("https://www.youtube.com/channel/UCaYkQ1zUpXlqy4_lQkMVNJw")}><i className = "fa fa-youtube-square" aria-hidden = "true"></i></a>
        </div>instagram

        <div class = "email">
             <e>kevinjsutrisno@gmail.com</e>
        </div>
        </div>
    )
  }

  export default Sidebar;