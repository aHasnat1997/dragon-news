import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import TopNav from '../Header/TopNav';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const navigate = useNavigate();

  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confPassword = form.confPassword.value;

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate('/');
        form.reset();
      })
      .catch(error => console.log(error));

    console.log(userName, email, password, confPassword);
  }

  return (
    <Container>
      <TopNav />

      <Form className='w-50 mx-auto mt-5' onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={passwordShow ? "text" : "password"} name='password' placeholder="Password" />
          <button onClick={() => setPasswordShow(!passwordShow)} className='position-absolute top-50 end-0 me-3 border-0'>{passwordShow ? <FaEye /> : <FaEyeSlash />}</button>
          <Form.Text className="text-muted"> </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type={confirmPasswordShow ? "text" : "password"} name='confPassword' placeholder="Confirm Password" />
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
