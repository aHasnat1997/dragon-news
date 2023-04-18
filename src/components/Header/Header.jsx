import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import TopNav from './TopNav';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Container>
      <div className='text-center py-4'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
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
        <TopNav />
      </div>
    </Container>
  );
};

export default Header;
