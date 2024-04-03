import React from 'react';
import styled from '@emotion/styled';
import {
  Col, Row, Container,
} from 'react-bootstrap';

const Area = styled.div`
    background-color: var(--secondaryColor);
`;

const BlueBox = styled.div`
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    img {
        max-width: 80%;
        width: 200px; 
        height: 200px; 
        object-fit: cover;
        object-position: 50% 50%; 
        
        /* margin-left: auto; */
        /* margin-right: auto; */
    }

    p {
        background-color: var(--tertiaryColor);
        color: var(--primaryColor);
        font-size: 20px;
        padding: 20px;
        border-radius: 20px;
        margin-top: -15px;
    }
`;

function Banner2() {
  return (
    <Area>
      <Container className="pb-5">
        <h3 className="title text-center pt-5 mb-5" style={{ fontSize: '40px' }}>
          ¿Por qué digitalizar?
        </h3>
        <Row>
          <Col lg={4} md={4} xs={12}>
            <BlueBox>
              <img
                src="/img/web/ear-01-tattoo.jpg"
                alt="ear with tattoo"
              />
              <p>
                Guardá de por vida los estudios de tus pacientes.
              </p>
            </BlueBox>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <BlueBox>
              <img
                src="/img/web/ear-02.jpg"
                alt="A new ear"
              />
              <p>
                Llevá el progreso año a año de tus pacientes.
              </p>
            </BlueBox>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <BlueBox>
              <img
                src="/img/web/ear-03-man-glasses.jpg"
                alt="ear with glasses"
              />
              <p>
                Muy fácil y con un par de clics ya tenés todo.
              </p>
            </BlueBox>
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default Banner2;
