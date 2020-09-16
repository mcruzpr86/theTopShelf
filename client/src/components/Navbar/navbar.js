import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import * as ReactBootStrap from "react-bootstrap";




function Navbar() {
    return (

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <ReactBootStrap.Nav>
                <LoginButton />
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                <LogoutButton />
            
                </ReactBootStrap.Nav.Link>

            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar >
    )

}


export default Navbar;
