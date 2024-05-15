import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const Section = styled.section`
    background-color: var(--quartyColor);
    margin-top: 50px;
    padding: 60px;
`;

function Footer() {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            Logo y
            RRSS
          </Col>
          <Col>
            Acciones audiologa
          </Col>
          <Col>
            Info util para personas
          </Col>
          <Col>
            Lo mejor de oidito: comparacion, alertas, todo en un solo lugar, donaciones a CASACUSIA
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;
