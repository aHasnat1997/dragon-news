import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className='text-center py-4'>
        <img src={logo} alt="logo" />
        <h5 className='my-3 text-secondary'>Journalism Without Fear or Favour</h5>
        <h4 className='my-3 text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
      <div className='bg-secondary p-0 d-flex align-items-center'>
        <h3 className='text-light bg-danger py-3 px-4 mt-2'>Latest</h3>
        <Marquee gradient={false} pauseOnHover={true}>
          <p className='fs-4 text-light mt-3'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet... Bayern Slams Authorities Over Flight Delay to Club World Cup...</p>
        </Marquee>
      </div>
      <div className='my-2'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto fs-4">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className='fs-4'>Log In</Button>
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
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
