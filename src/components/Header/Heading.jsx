import moment from 'moment';
import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <div className='text-center py-4'>
      <Link to='/'><img src={logo} alt="logo" /></Link>
      <h5 className='my-3 text-secondary'>Journalism Without Fear or Favour</h5>
      <h4 className='my-3 text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</h4>
    </div>
  );
};

export default Heading;
