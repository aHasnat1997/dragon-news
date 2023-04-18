import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZome1 from '../../assets/qZone1.png';
import qZome2 from '../../assets/qZone2.png';
import qZome3 from '../../assets/qZone3.png';
import bg from '../../assets/bg.png';


const Right = () => {
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button variant="outline-primary" className='w-100 mb-2'>
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark" className='w-100'>
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div className='my-5'>
        <h4>Find Us On</h4>
        <ButtonGroup vertical className='w-100'>
          <Button variant="outline-light" className='p-3 fs-5 text-secondary border text-start'>
            <FaFacebook /> Facebook
          </Button>
          <Button variant="outline-light" className='p-3 fs-5 text-secondary border text-start'>
            <FaTwitter /> Twitter
          </Button>
          <Button variant="outline-light" className='p-3 fs-5 text-secondary border text-start'>
            <FaInstagram /> Instagram
          </Button>
        </ButtonGroup>
      </div>
      <div className='p-3 rounded rounded-3 border'>
        <h4>Q-Zone</h4>
        <div className='text-center'>
          <img className='my-2' src={qZome1} alt="q-zone" />
          <img className='my-2' src={qZome2} alt="q-zone" />
          <img className='my-2' src={qZome3} alt="q-zone" />
        </div>
      </div>
      <div className='position-relative'>
        <img className='w-100 my-4' src={bg} alt="banner" />
        <div className='text-center text-light position-absolute top-50 start-50 translate-middle'>
          <h3>Create an Amazing Newspaper</h3>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Right;
