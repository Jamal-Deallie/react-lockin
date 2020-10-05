import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from'react-router-dom';
import AccountBtn from './AccountBtn';
import AccountLink from './AccountLink';
import logo from '../assets/images/logo.png';
import './css/style.css';



const NavagationBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" className="headerbar">
     
        <Link to="/"><img src={logo} alt="Lockin Fitness Logo" width="39" height="50" className="navbarbrand"/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Link to="/activity" className="navlinks" style={{textDecoration: 'none'}}>ACTIVITY</Link>
                    <Link to="/personaltrainers" className="navlinks"style={{textDecoration: 'none'}}>PERSONAL TRAINERS</Link>
                    <Link to="/classes" className="navlinks"style={{textDecoration: 'none'}}>CLASSES</Link>
                    <Link style={{textDecoration: 'none'}}><AccountLink/></Link>
                </Nav>
                <Nav className="ml-auto">
                    <AccountBtn/>
                </Nav>
            </Navbar.Collapse>
       
        </Navbar>
    )
}

export default NavagationBar;