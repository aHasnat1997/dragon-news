import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { BsFillBookmarkFill, BsFillBookmarkCheckFill, BsFillShareFill, BsEyeFill } from "react-icons/bs";
import { AllNewsData } from '../../context/NewsData';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';


const Main = () => {
  const allData = useContext(AllNewsData);

  const [limit, setLimit] = useState(false);

  let limitData = [];
  if (!limit) {
    limitData = allData.slice(0, 10);
  } else {
    limitData = allData;
  }

  return (
    <div>
      {
        limitData.map(data => <div key={data._id} className='mb-4'>
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
              <p>
                <Rating
                  placeholderRating={data.rating.number}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar />}
                  fullSymbol={<FaStar />}
                />
                <span className='mb-0 ms-2'>{data.rating.number}</span></p>
              <p><BsEyeFill /> {data.total_view}</p>
            </Card.Footer>
          </Card>
        </div>)
      }
      <Button onClick={() => setLimit(!limit)} size="lg" variant="outline-primary" className='w-100'>
        {
          limit ? 'See Less' : 'See More'
        }
      </Button>
    </div>
  );
};

export default Main;
