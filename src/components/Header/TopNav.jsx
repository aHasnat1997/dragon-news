import React, { useContext } from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const TopNav = () => {
  const { user, singOutUser } = useContext(AuthContext);

  const logOut = () => {
    singOutUser()
      .then()
      .catch(error => console.log(error))
  }


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
            {
              user ? (<NavDropdown title={user.email} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Button variant="primary" onClick={logOut} className='fs-4 px-4'>Log Out</Button>
                </NavDropdown.Item>
              </NavDropdown>) : <Link to='/log-in'><Button variant="primary" className='fs-4 px-4'>Log In</Button></Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNav;
