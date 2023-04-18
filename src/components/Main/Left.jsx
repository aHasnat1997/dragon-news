import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'

const Left = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }, [])

  console.log(categories);

  return (
    <div className=''>
      <h4>All Categories</h4>
      <div className=''>
        {
          categories.map(category => <div key={category.id} className='d-flex'>
            <NavLink to='/'
              className={`w-100 text-decoration-none my-1 p-3 text-secondary fw-bold border border-info border-opacity-50 rounded-3
              ${({ isActive }) => isActive ? 'bg-info text-dark' : ''}`}>
              {category.name}
            </NavLink>
          </div>)
        }
      </div>
      <div className='mt-5'>
        <div>
          <img className='w-100' src={img1} alt="img" />
          <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
          <p>Sports <span className='text-secondary'><FaCalendarAlt className='ms-5' /> Jan 4, 2022</span></p>
        </div>
        <div>
          <img className='w-100' src={img2} alt="img" />
          <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
          <p>Sports <span className='text-secondary'><FaCalendarAlt className='ms-5' /> Jan 4, 2022</span></p>
        </div>
        <div>
          <img className='w-100' src={img3} alt="img" />
          <h4 className='my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
          <p>Sports <span className='text-secondary'><FaCalendarAlt className='ms-5' /> Jan 4, 2022</span></p>
        </div>
      </div>
    </div>
  );
};

export default Left;
