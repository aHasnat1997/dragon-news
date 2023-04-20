import React from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import TopNav from './TopNav';
import Heading from './Heading';



const Header = () => {
  return (
    <Container>
      <Heading />
      <div className='bg-secondary p-0 d-flex align-items-center'>
        <h3 className='text-light bg-danger py-3 px-4 mt-2'>Latest</h3>
        <Marquee gradient={false} pauseOnHover={true}>
          <p className='fs-4 text-light mt-3'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet... Bayern Slams Authorities Over Flight Delay to Club World Cup...</p>
        </Marquee>
      </div>
      <TopNav />
    </Container>
  );
};

export default Header;
