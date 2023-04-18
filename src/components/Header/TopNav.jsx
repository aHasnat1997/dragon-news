import React from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';

const TopNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-4 fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" className='fs-4 px-4'>Log In</Button>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
