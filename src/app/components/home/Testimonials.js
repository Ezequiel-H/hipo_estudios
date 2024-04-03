/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';

const Area = styled.div`
    background-image: url('/img/web/TestimonialsBG.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Box = styled.div`
    max-width: 90%;
    text-align: center;
    margin: 10px auto;
    background-color: var(--slowBackground);
    color: var(--primaryColor);
    padding: 20px;
    border-radius: 30px;
    .name, .charge {
        margin-bottom: 0;
    }
    .name {
        font-weight: bold;
    }
`;

function Testimonials() {
  return (
    <Area>
      <Container className="pb-5">
        <p className="title text-center pt-5 mb-5" style={{ fontSize: '40px' }}>
          Opiniones
        </p>
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={4} md={6} xs={12}>
            <Box>
              <p>Me cambió mucho poder tomar la audiometria online porque con un par de clics ya la hago y se envía. No tengo que tener el papel siempre a mano, sacar foto y eso... mucho mejor así.</p>
              <p className="name">Maria</p>
              <p className="charge">Audiologa</p>
            </Box>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <Box>
              <p>Me cambió mucho poder tomar la audiometria online porque con un par de clics ya la hago y se envía. No tengo que tener el papel siempre a mano, sacar foto y eso... mucho mejor así.</p>
              <p className="name">Maria</p>
              <p className="charge">Audiologa</p>
            </Box>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <Box>
              <p>Me cambió mucho poder tomar la audiometria online porque con un par de clics ya la hago y se envía. No tengo que tener el papel siempre a mano, sacar foto y eso... mucho mejor así.</p>
              <p className="name">Maria</p>
              <p className="charge">Audiologa</p>
            </Box>
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default Testimonials;
