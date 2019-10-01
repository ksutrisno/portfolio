import React , {Component} from 'react';
import './Footer.css';
import { animateScroll as scroll} from 'react-scroll';

class Footer extends Component {
    
  
    scrollToTop()
    {
        scroll.scrollToTop();
    }
    render()
    {
        return (
            <div class= "backToTop">
             <button class = "toTopButton" onClick={this.scrollToTop}>Go Back To Top</button>
            </div>
        )
    }
  
  }

  export default Footer;