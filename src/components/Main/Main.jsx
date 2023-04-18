import React, { useContext } from 'react';
import { AllNewsData } from '../../App';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { BsFillBookmarkFill, BsFillBookmarkCheckFill, BsFillShareFill, BsEyeFill } from "react-icons/bs";


const Main = () => {
  const allData = useContext(AllNewsData);

  return (
    <div>
      {
        allData.map(data => <div key={data._id} className='mb-4'>
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
              <Card.Img variant="top" src={data.image_url} />
              <Card.Title className='mt-3'>{data.title}</Card.Title>
              <Card.Text>{data.details.slice(0, 300)}...</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
            <Card.Footer className='w-100 d-flex justify-content-between align-items-center'>
              <p>Rating: {data.rating.number}</p>
              <p><BsEyeFill /> {data.total_view}</p>
            </Card.Footer>
          </Card>
        </div>)
      }
    </div>
  );
};

export default Main;
