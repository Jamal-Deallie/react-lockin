import React from 'react';
import './css/style.css';
import Guestbtn from './Guestbtn';
import Video from '../assets/videos/videoproject.mp4'
import logo from '../assets/images/logo.png';
import {Button} from 'react-bootstrap';


const JumboVid = () => {
    return (
        <div className="jumboContainer">
           
              <video class="video-background" preload="true" muted="true" autoplay="true" loop="true">
                <source src={Video} type="video/mp4" />
            </video>
            <div className="row">
                    <h2 className="header">LOCKIN <span><img src={logo} alt="Lockin Fitness Logo" width="49" height="60" className="navbarbrand mb-1"/></span> FITNESS</h2>
            </div>
            <div className="jumboBtnContainer"> 
                <div className="row">
                    <Button className="joinBtn mr-1">JOIN NOW</Button>
                    <Guestbtn />
                </div>
            </div>
        </div>
        
    );
}

export default JumboVid

 