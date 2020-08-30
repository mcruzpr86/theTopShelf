import React from 'react';

const Navbar = () => (
    <header className='navigation_bar' >
        <nav className='nav_bar'>
            <div>Hamburger Menu</div>
            <div className='navbar_logo'><a href="/">LOGO</a></div>
            <div className='navbar_login'>Log IN</div>
        </nav>
    </header>

)

export default Navbar;


const Styles = styled.div;



export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Tutorial</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Form className="form-center">
                <FormControl type="text" placeholder="Search" className="" />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)



