import React from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='my-2'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-4 fw-bold">
            <NavLink className={`mx-3 text-decoration-none text-secondary 
            ${({ isActive }) => isActive ? 'text-primary' : ''}`} to='/'>Home</NavLink>
            <NavLink className={`mx-3 text-decoration-none text-secondary 
            ${({ isActive }) => isActive ? 'text-primary' : ''}`} to='/about'>About</NavLink>
            <NavLink className={`mx-3 text-decoration-none text-secondary 
            ${({ isActive }) => isActive ? 'text-primary' : ''}`} to='/contact'>Contact Us</NavLink>
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
