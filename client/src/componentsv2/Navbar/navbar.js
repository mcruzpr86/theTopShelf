import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Home from "../pages/home"


function Navbar() {
    return (

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
       
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.NavDropdown title="Explore" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href='https://vinepair.com/spirits-101/intro-bourbon-guide/'>Bourbon</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/brandy/">Brandy</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-gin-guide/">Gin</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-rum-guide/">Rum</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-tennessee-whiskey-guide/">Whiskey</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-scotch-guide/">Scotch</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-tequila-guide/">Tequila</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="https://vinepair.com/spirits-101/intro-vodka-guide/">Vodka</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>

                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="./">Log In</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )

}

export default Navbar;
