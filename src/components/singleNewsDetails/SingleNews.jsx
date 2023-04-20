import React, { useContext, useState } from 'react';
import { AllNewsData } from '../../context/NewsData';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Right from '../Main/Right';

const SingleNews = () => {
  // const [newsData, setNewsData] = useState([])

  const allData = useContext(AllNewsData);
  const newsId = useParams();

  const newsData = allData.find(data => data._id === newsId.id);
  console.log(newsData);
  const { image_url, details, title } = newsData;

  return (
    <Container>
      <Row>
        <Col lg={9} className='p-4 border rounded-3'>
          <img className='w-100' src={image_url} alt="News Image" />
          <h1 className='my-3'>{title}</h1>
          <p className='fs-3'>{details}</p>
        </Col>
        <Col lg={3}><Right /></Col>
      </Row>
    </Container>
  );
};

export default SingleNews;
