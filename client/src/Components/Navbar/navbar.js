import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
    return (

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
       
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Explore" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Bourbon</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Brandy</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Gin</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Rum</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Whiskey</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Scotch</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Tequila</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Vodka</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>

                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        Dank memes
        </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )

}

export default Navbar;
