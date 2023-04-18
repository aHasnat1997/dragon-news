import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Left from './Left';
import Main from './Main';
import Right from './Right';

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}><Left /></Col>
        <Col mb={6} lg={6}><Main /></Col>
        <Col lg={3}><Right /></Col>
      </Row>
    </Container>
  );
};

export default Layout;
