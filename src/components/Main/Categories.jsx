import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { BsFillBookmarkFill, BsFillBookmarkCheckFill, BsFillShareFill, BsEyeFill } from "react-icons/bs";
import { AllNewsData } from '../../context/NewsData';
import { Link, useParams } from 'react-router-dom';

const Categories = () => {
  const allData = useContext(AllNewsData);
  const { id } = useParams();

  const categoriesData = allData.filter(data => data.category_id === id);



  return (
    <div>
      {
        categoriesData.length === 0 ? <h2 className='text-center'>No News Found</h2> : (
          categoriesData.map(data => <div key={data._id} className='mb-4'>
            <Card>
              <Card.Header className='d-flex align-items-center'>
                <img src={data.author.img} alt="author img" width='8%' className='rounded-circle' />
                <div className='ms-3 w-100 d-flex align-items-center justify-content-between'>
                  <div>
                    <h5>{data.author.name}</h5>
                    <p>{moment(data.author.published_date).format("YYYY-MM-D")}</p>
                  </div>
                  <div>
                    <BsFillBookmarkFill className='fs-2' />
                    <BsFillShareFill className='fs-2 ms-3' />
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className='fs-3'>{data.title}</Card.Title>
                <Card.Img variant="top" src={data.image_url} className='my-3' />
                <Card.Text>{data.details.slice(0, 300)}...</Card.Text>
                <Link to={`/details/${data._id}`}><Button variant="primary">Read More</Button></Link>
              </Card.Body>
              <Card.Footer className='w-100 d-flex justify-content-between align-items-center'>
                <p>Rating: {data.rating.number}</p>
                <p><BsEyeFill /> {data.total_view}</p>
              </Card.Footer>
            </Card>
          </div>)
        )
      }
    </div>
  );
};

export default Categories;
