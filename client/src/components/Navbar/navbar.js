import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import * as ReactBootStrap from "react-bootstrap";
import Home from "../pages/home";
import ContactUs from "../pages/contactUs";
import {Link} from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <ReactBootStrap.Nav> 
                    <button type="button" class="btn btn-dark">         
                     <Link to="/" style={{textDecoration:"none", color: "white"}}> Home</Link>
                     </button>
                     <button type="button" class="btn btn-dark">
                     <Link to="/account" style={{textDecoration:"none", color: "white"}}>Contact us</Link>
                     </button>
                     <LoginButton/>
                    <LogoutButton/>
                </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>
    )

}


export default Navbar;
