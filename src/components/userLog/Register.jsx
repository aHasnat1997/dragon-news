import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TopNav from '../Header/TopNav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEyeSlash, FaEye } from "react-icons/fa";


const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const formSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <Container>
      <TopNav />

      <Form className='w-50 mx-auto mt-5' onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={passwordShow ? "text" : "password"} placeholder="Password" />
          <button onClick={() => setPasswordShow(!passwordShow)} className='position-absolute top-50 end-0 me-3 border-0'>{passwordShow ? <FaEye /> : <FaEyeSlash />}</button>
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type={confirmPasswordShow ? "text" : "password"} placeholder="Confirm Password" />
          <button onClick={() => setConfirmPasswordShow(!confirmPasswordShow)} className='position-absolute top-50 end-0 me-3 border-0'>{confirmPasswordShow ? <FaEye /> : <FaEyeSlash />}</button>
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" className='me-3'>
          Submit
        </Button>
        <Button variant="outline-secondary" type="reset">
          Reset
        </Button>
      </Form>

      <p className='text-center mt-5'>Already have an account? <Link to='/log-in'>Log In</Link></p>
    </Container>
  );
};

export default Register;
