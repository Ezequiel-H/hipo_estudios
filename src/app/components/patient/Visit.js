'use client';

import React from 'react';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import styled from '@emotion/styled';

const Visita = styled(Row)`
    border-radius: 50px!important;
    margin: 10px;
    width:100%;
`;

const Fecha = styled(Col)`
    background-color: var(--secondaryColor);
    padding: 20px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    text-align: center;
    font-weight: bold;
`;

const Datos = styled(Col)`
    border: 3px solid var(--secondaryColor);
    padding: 15px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    display: flex;
    transition: all .5s ease;
    p {
        background-color: var(--slowYellow);
        padding: 7px 10px;
        border-radius: 20px;
        height: fit-content;
        width: fit-content;
        text-align:center;

        &:hover {
            background-color: var(--secondaryColor);
        }
    }
`;

function Visit() {
  return (
    <Visita>
      <Card>
        <Card.Img variant="top" src="/img/web/autumn.jpg" />
        <Card.Body>
          <Card.Title>20/04/2020</Card.Title>
          <Row>
            <Col>
              <Button variant="primary">Audiometria</Button>
            </Col>
            <Col>
              <Button variant="primary">Audiometria</Button>
            </Col>
            <Col>
              <Button variant="primary">Audiometria</Button>
            </Col>
            <Col>
              <Button variant="primary">Audiometria</Button>
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </Visita>
  );
}

export default Visit;
