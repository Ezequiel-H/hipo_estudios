import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

const Area = styled.div`
    
`;

function MyPatients() {
  return (
    <Area className="profile-section">
      <Container>
        <p className="profile-title">Mis pacientes</p>
        <Row>
          <Col>
            Perfil 1
          </Col>
          <Col>
            Perfil 2
          </Col>
          <Col>
            Perfil 3
          </Col>
        </Row>
      </Container>
    </Area>
  );
}

export default MyPatients;
